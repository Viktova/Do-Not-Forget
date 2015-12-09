var user = {
	id: $('#user_id').val(),
	email: $('#user_email').val(),
	memo: null,
	remote_last_modified: $('#user_last_modified').val(),
	sync_save_delay: 20,
	// seconds
	sync_load_delay: 5000,
	// milliseconds
	last_modified: null,
	call_home_timer: null,
	online_save_timer: null,
	local_save_timer: null,
	hasChanged: false,
	isEditing: false,
	current_tab: 'now',
	should_call_home: false,
	textFile: null,
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
	init: function() {
		// things to do only once, when page is loaded.
		var str = $('#user_memo').val();
		if ($('#user_memo').length && str !== "") {
			user.memo = JSON.parse(str);
		}
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
			$.post('/synchronise-memo', data, function(result) {
				user.remote_last_modified = result.last_modified;
				var sync_direction = 'push';
				if (result.memo) {
					console.log("PUSH: Local content is rotten. Pushing new content from Server!");
					// update local state with remote data (PUSH)
					// break memo into the X memotabs data and localSTorage them.
					var memos = JSON.parse(result.memo);
					for (var key in memos) {
						if (memos.hasOwnProperty(key)) {
							localStorage.setItem(localstorage_var_name + '-' + key, memos[key]);
							// then update medium editors.
							user.editors[key].value(memos[key]);
						}
					}
					user.feedback.html(user.cloud.refreshed);
				} else {
					sync_direction = 'pull';
					console.log("PULL: save local content to remote.");
					//user.feedback.text('Saved to server.');
					user.feedback.html(user.cloud.done);
				}
				ga('send', 'event', 'user_sync', sync_direction, user.email);
				// Sync finished ! 
			}, 'json').fail(function() {
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
		if (user.sync_mode) {
			clearInterval(user.call_home_timer);
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
};