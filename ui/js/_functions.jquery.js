var user = {
	id: $('#user_id').val(),
	email: $('#user_email').val(),
	sync_save_delay: 20,
	// seconds
	sync_load_delay: 5000,
	// milliseconds
	last_modified: null,
	remote_last_modified: null,
	call_home_timer: null,
	online_save_timer: null,
	local_save_timer: null,
	hasChanged: false,
	should_call_home: false,
	editors: [],
	feedback: $('#sync-status-marker'),
	cloud: {
		loading: $('#loading').html(),
		savingLocally: $('#local-working').html(),
		failed: $('#failed').html(),
		done: $('#done').html(),
		refreshed: $('#refreshed').html(),
		savedLocally: $('#saved-locally').html()
	},
	sync: function() {
/*
		go online. Compare last local save date versus last remote save date
		if remote is older
		> push
		else
		< pull
	*/
		if (user.sync_mode && (user.hasChanged || user.should_call_home)) {
			// Stop any calls to home... Since we are calling home!
			user.hasChanged = false;
			user.should_call_home = false;
			clearInterval(user.call_home_timer);
			clearInterval(user.online_save_timer);
			// send request
			//caret_position = window.rangy.saveSelection();
			var data = {
				id: user.id,
				email: user.email,
				last_modified: user.last_modified,
				memo: {
					now: localStorage.getItem('memotab-now'),
					later: localStorage.getItem('memotab-later'),
					toreadandwatch: localStorage.getItem('memotab-toreadandwatch')
				}
			};
				user.feedback.html(user.cloud.loading);
				var jqxhr = $.post('/synchronise-memo', data, function(result) {
					user.remote_last_modified = result.last_modified;
					if (result.memo) {
						//console.log("PUSH: Local content is rotten. Pushing new content from Server!");
						// update local state with remote data (PUSH)
						// break memo into the X memotabs data and localSTorage them.
						var memos = JSON.parse(result.memo);
						for (var key in memos) {
							if (memos.hasOwnProperty(key)) {
								localStorage.setItem(localstorage_var_name + '-' + key, memos[key]);
								// then update medium editors.
								caret_position = window.rangy.saveSelection();
								user.editors[key].value(memos[key]);
								window.rangy.restoreSelection(window.caret_position);
							};
						}
						user.feedback.html(user.cloud.refreshed);
					} else {
						//user.feedback.text('Saved to server.');
						user.feedback.html(user.cloud.done);
					}
					// Sync finished ! 
				}, 'json').fail(function() {
					console.log("error triggered");
					user.feedback.html(user.cloud.failed);
				}).always(function() {
					//console.log("always triggered");
					user.call_home();
				});
//			}, user.sync_load_delay);
		}
	},
	call_home: function() {
		// UPDATE LOCAL AFTER IDLE TIME (PUSH content)
/*
			purpose: make sure DNFM tabs on other computers have the freshest content.
			how: this function starts a timer. If timer finishes, attempt a sync().
		*/
		if(user.sync_mode){
			clearInterval(user.call_home_timer);
			var push_timer = user.sync_save_delay, minutes, seconds;
			user.call_home_timer = setInterval(function() {
				minutes = parseInt(push_timer / 60, 10);
				seconds = parseInt(push_timer % 60, 10);
				minutes = minutes < 10 ? "0" + minutes : minutes;
				seconds = seconds < 10 ? "0" + seconds : seconds;
				if (push_timer < (user.sync_save_delay - 15)) {
					user.feedback.text('Refresh in ' + minutes + ":" + seconds);
				}
				if (--push_timer < 0) {
					push_timer = user.sync_save_delay;
					// Launch Push
					user.should_call_home = true;
					user.sync();
				}
			}, 1000);	
		}
	}
};


function scrape_url(){
	// see http://code.ramonkayo.com/simple-scraper/
	
	$.post('/scrape-url', {'url' : $('#url').val()},
		function(json) {
			if (json.success) {
				$('#title').text(json.ogp.title);
				$('#title').attr('href', json.ogp.url);
				$('#description').text(json.ogp.description);
				$('#image').attr('src', json.ogp.image);
				$('#dump').text(json.dump);
			} else {
                console.log('SCraping did not work!');
                console.log(json.log);
           	}
        },
        'json'
        );
}
/*********************************************************
	 HELPER FUNCTIONS 
*********************************************************/
// get Tag Element at Caret position
function get_tag_at_caret() {
   var node = document.getSelection().anchorNode;
   return (node.nodeType == 3 ? node.parentNode : node);
}

// Remove weird Facebook callback token in url #_=_

function remove_facebook_token_in_url() {
	if (window.location.hash && window.location.hash === '#_=_') {
		if (window.history && history.pushState) {
			window.history.pushState("", document.title, window.location.pathname);
		} else {
			window.location.hash = '';
		}
	}
}
//Ensures there will be no 'console is undefined' errors
/*
window.console = window.console || (function() {
	var console = {};
	console.log = console.warn = console.debug = console.info = console.error = console.time = console.dir = console.profile = console.clear = console.exception = console.trace = console.assert = function(s) {};
	return console;
})();
*/