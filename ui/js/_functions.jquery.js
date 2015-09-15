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
		if (user.hasChanged || user.should_call_home) {
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
//			user.online_save_timer = setTimeout(function() {
				user.feedback.html(user.cloud.loading);
				var jqxhr = $.post('/synchronise-memo', data, function(result) {
					user.remote_last_modified = result.last_modified;
					if (result.memo) {
						console.log("PUSH: Local content is rotten. Pushing new content from Server!");
						// update local state with remote data (PUSH)
						// break memo into the X memotabs data and localSTorage them.
						var memos = JSON.parse(result.memo);
						for (var key in memos) {
							if (memos.hasOwnProperty(key)) {
								//console.log("storing "+ key +" locally.");
								localStorage.setItem(localstorage_var_name + '-' + key, memos[key]);
								// then update medium editors.
								user.editors[key].value(memos[key]);
							};
						}
						user.feedback.html(user.cloud.refreshed);
						//window.rangy.restoreSelection(window.caret_position);
					} else {
						//user.feedback.text('Saved to server.');
						user.feedback.html(user.cloud.done);
					}
					// Sync finished ! 
				}, 'json').fail(function() {
					console.log("error triggered");
					user.feedback.html(user.cloud.failed);
				}).always(function() {
					console.log("always triggered");
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
		clearInterval(user.call_home_timer);
		//user.feedback.text('');
		console.log("call_home launched.");
		var push_timer = user.sync_save_delay,
			minutes, seconds;
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
/*********************************************************
	 HELPER FUNCTIONS 
*********************************************************/
/*
function reset() {
	localStorage[localstorage_var_name] = medium.value('hello');
}
// useful to remove A anchors from html string
// http://stackoverflow.com/questions/4536329/whats-the-best-way-to-strip-out-only-the-anchor-html-tags-in-javascript-given

function unwrapAnchors() {
	if (!('tagName' in this) || this.tagName.toLowerCase() !== 'a' || !('parentNode' in this)) {
		return;
	}
	var childNodes = this.childNodes || [],
		children = [],
		child;
	// Convert childNodes collection to array
	for (var i = 0, childNodes = this.childNodes || []; i < childNodes.length; i++) {
		children[i] = childNodes[i];
	}
	// Move children outside element
	for (i = 0; i < children.length; i++) {
		child = children[i];
		if (('tagName' in child) && child.tagName.toLowerCase() === 'a') {
			child.parentNode.removeChild(child);
		} else {
			this.parentNode.insertBefore(child, this);
		}
	}
	// Remove now-empty anchor
	this.parentNode.removeChild(this);
}
*/
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
window.console = window.console || (function() {
	var console = {};
	console.log = console.warn = console.debug = console.info = console.error = console.time = console.dir = console.profile = console.clear = console.exception = console.trace = console.assert = function(s) {};
	return console;
})();
// Html entity decoding
/*

function decodeHtml(html) {
	var txt = document.createElement("textarea");
	txt.innerHTML = html;
	return txt.value;
}
*/