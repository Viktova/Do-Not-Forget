// @codekit-prepend "_variables.js", "_functions.js";
/*
	DO NOT FORGET ME
	
*/
/* RUNTIME */

sync_mode = window.synchronization || false;

remove_facebook_token_in_url();
//LocalStorage app

editable = $('editable');
localLastModifiedMarker = $('localLastModified');

if (sync_mode) {
	user = {};
	localstorage_var_name = 'memotab';
	user.id = $('user_id').value;
	user.email = $('user_email').value;
	user.memo = decodeHtml($('user_memo').value);
	user.remoteLastModified = $('user_last_modified').value;
	localStorage.setItem('remoteLastModified', user.remoteLastModified);
	remoteLastModified = new Date(localStorage.remoteLastModified);
	localLastModified = new Date(localStorage.localLastModified);
	localStorage.setItem(localstorage_var_name, user.memo);
	if (remoteLastModified.getTime() > localLastModified.getTime()) {
		// Set last saved memo.
		localStorage.setItem(localstorage_var_name, user.memo);
	}
	remoteLastModifiedMarker = $('remoteLastModified');
	syncStatusMarker = $('sync-status-marker');
}
if (debug) {
	$('debugger').style.display = 'block';
}

addEvent(editable, 'keyup', function(e) {
	if (this.innerHTML === '') {
		this.innerHTML = '<li>';
	}
	localStorage.setItem(localstorage_var_name, this.innerHTML);
	var d = new Date();
	localStorage.setItem('localLastModified', d.toDateString() + ' ' + d.toLocaleTimeString());
	hasChanged = true;
	if (sync_mode) {
		syncStatusMarker.innerHTML = 'Saved locally.';
		user.update_local_from_remote(20);
	}
});
addEvent($('clear'), 'click', function() {
	localStorage.setItem(localstorage_var_name, '');
	editable.innerHTML = '<li>';
	editable.focus();
});
// on page load, initialize the memo.
if (localStorage.getItem(localstorage_var_name)) {
	editable.innerHTML = localStorage.getItem(localstorage_var_name);
}
if (localLastModifiedMarker && localStorage.getItem('localLastModified')) {
	localLastModifiedMarker.innerHTML = localStorage.getItem('localLastModified');
}
if (sync_mode) {
	addEvent(document, 'mousemove', function() {
		user.update_local_from_remote(20);
	});

	setInterval(update_remote_from_local, refresh_rate);
	
	addEvent(window, 'beforeunload', function() {
		update_remote_from_local();
	}); 
	
	/* FAUX PUSH: if no user interaction for 15 seconds, fetch from browser  */
	user.update_local_from_remote = function(duration) {
		var display = document.querySelector('#sync-status-marker');
		clearInterval(timerInt);
		//console.log("timer restarted");
		var timer = duration,
			minutes, seconds;
		timerInt = setInterval(function() {
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
			display.textContent = '';
			if (timer < (duration - 5)) {
				display.textContent = '';
			}
			if (timer < (duration - 15)) {
				display.textContent = 'Syncing in ' + minutes + ":" + seconds;
			}
			if (--timer < 0) {
				timer = duration;
				// Launch Push
/*
				console.log("syncing");
				console.log(user.id);
				console.log(user.email);
*/
				minAjax({
					url: "/fetch-memo",
					//request URL
					type: "POST",
					data: {
						id: user.id,
						email: user.email
					},
					success: function(memo) {
						localStorage.setItem(localstorage_var_name, memo);
						$('editable').innerHTML = memo;
						display.textContent = 'All synced.';
					}
				});
			}
		}, 1000);
	};
	user.update_local_from_remote(20);
}