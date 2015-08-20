// @codekit-prepend "_variables.js", "_functions.js", "_medium.js";
/*
	DO NOT FORGET ME
	
*/
/* RUNTIME */

remove_facebook_token_in_url();

editable = $('editable');

// Medium.js: Thanks and loving accolades to its creators
// http://jakiestfu.github.io/Medium.js/docs/

var medium = new Medium({
    element: editable,
    placeholder: "",
	autofocus: true,
	autoHR: true,
	mode: Medium.richMode,
	maxLength: -1,
	modifiers: {
		'b': 'bold',
		'i': 'italicize',
		'u': 'underline',
		'v': 'paste'
	},
	tags: {
		'break': 'br',
		'horizontalRule': 'hr',
		'paragraph': 'li',
		'outerLevel': ['ol'],
		'innerLevel': ['li', 'b', 'span','u', 'i', 'strong']
	},
	attributes: {
		remove: ['style', 'class']
	}
});
medium.value(editable.innerHTML);

if (debug) {
	$('debugger').style.display = 'block';
}


// Synchronisation logic
sync_mode = window.synchronization || false;

syncStatusMarker = $('sync-status-marker');

if (sync_mode) {
	
	localstorage_var_name = 'memotab';
	
	user = {};
	user.id = $('user_id').value;
	user.email = $('user_email').value;
	user.memo = decodeHtml($('user_memo').value);
	user.remoteLastModified = $('user_last_modified').value;
	
	user.update_remote_from_local = function() {
		console.log("update_remote_from_local started.");
/*
		remoteLastModified = new Date(localStorage.remoteLastModified);
		localLastModified = new Date(localStorage.getItem('localLastModified'));
*/
		if (sync_mode && hasChanged ) {
			syncStatusMarker.innerHTML = 'Syncing...';
			minAjax({
				url: "/update-memo",
				//request URL
				type: "POST",
				data: {
					id: user.id,
					email: user.email,
					memo: appendLI(localStorage.getItem(localstorage_var_name)),
					last_modified: localStorage.getItem('localLastModified')
				},
				success: function(remoteLastModified) {
					localStorage.setItem('remoteLastModified', remoteLastModified);
					remoteLastModifiedMarker.innerHTML = remoteLastModified;
					user.remoteLastModified = remoteLastModified;
					hasChanged = false;
					syncStatusMarker.innerHTML = 'Saved online.';
					console.log("update_remote_from_local finished.");
				}
			});
		} else{
			console.log("update_remote_from_local condition is false.");
			console.log("sync_mode: "+ sync_mode);
			console.log("hasChanged: "+ hasChanged);
		}
	};	

	/* FAUX PUSH: if no user interaction for 15 seconds, fetch from browser  */
	user.update_local_from_remote = function(duration) {
		var display = document.querySelector('#sync-status-marker');
		clearInterval(timerInt);
		console.log("update_local_from_remote started.");

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
							console.log("update_local_from_remote finished.");

					}
				});
			}
		}, 1000);
	};
	
	localStorage.setItem('remoteLastModified', user.remoteLastModified);
	remoteLastModified = new Date(localStorage.remoteLastModified);
	localLastModified = new Date(localStorage.localLastModified);
	localStorage.setItem(localstorage_var_name, user.memo);
	if (remoteLastModified.getTime() > localLastModified.getTime()) {
		// Set last saved memo.
		localStorage.setItem(localstorage_var_name, user.memo);
	}
	remoteLastModifiedMarker = $('remoteLastModified');
}


addEvent(editable, 'keyup', function() {
	window.clearTimeout(localKeyUpTimer);
	localStorage.setItem(localstorage_var_name, this.innerHTML);
	var d = new Date();
	var mysql_format = d.toISOString().substring(0, 19).replace('T', ' ');
	localStorage.setItem('localLastModified', mysql_format);
	hasChanged = true;
	localKeyUpTimer = setTimeout(
		function(){ 
			syncStatusMarker.innerHTML = 'Saved locally.';
			setTimeout(function(){ syncStatusMarker.innerHTML = '';}, 3000);
		}, 3000);
	
	if (sync_mode) {
		user.update_local_from_remote(20);
	}
});
addEvent(editable, 'keydown', function() {
	syncStatusMarker.innerHTML = '';
});

addEvent($('clear'), 'click', function() {
	medium.value('');
	localStorage.setItem(localstorage_var_name, '');
	editable.focus();
});
// on page load, initialize the memo.
if (localStorage.getItem(localstorage_var_name)) {
	medium.value(localStorage.getItem(localstorage_var_name));
}

if (sync_mode) {

	setInterval(user.update_remote_from_local, refresh_rate);

	addEvent(document, 'mousemove', function() {
		user.update_local_from_remote(20);
	});
	
	addEvent(window, 'beforeunload', function() {
		user.update_remote_from_local();
	}); 
	user.update_local_from_remote(20);
}



function reset(){
	localStorage[localstorage_var_name] = medium.value('hello');
}
