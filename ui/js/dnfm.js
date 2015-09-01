// @codekit-prepend "_variables.js", "_functions.js","_autolinker.js", "_pixeline-tip.js", "medium-dependencies/_rangy-core.js", "medium-dependencies/_rangy-classapplier.js", "medium-dependencies/_rangy-selectionsaverestore.js", "medium-dependencies/_undo.js", "_medium.js";
/*
	DO NOT FORGET ME
	
*/
/* RUNTIME */

remove_facebook_token_in_url();

editable = document.getElementById('editable');
localLastModifiedMarker = $('#localLastModified');
autolinker = new Autolinker( { truncate: 25, className: "dnfm-editable-link" } );


// Medium.js: Thanks and loving accolades to its creators
// http://jakiestfu.github.io/Medium.js/docs/

medium = new Medium({
    element: editable,
    placeholder: "",
	autofocus: true,
	autoHR: true,
	mode: Medium.richMode,
	maxLength: -1,
	tags: {
		'break': 'br',
		'horizontalRule': 'hr',
		'paragraph': 'li',
		'outerLevel': ['ol'],
		'innerLevel': ['li', 'b', 'span','u', 'i', 'strong', 'a']
	},
	attributes: {
		remove: ['style']
	},
	beforeInvokeElement: function () {
		// before bolding/italicing...
	},
	pasteEventHandler: function(e){
				if(debug) console.log("PASTE !" + e);

	}
});

if (localStorage.getItem(localstorage_var_name)) {
	medium.value(autolinker.link(localStorage.getItem(localstorage_var_name)));
} else{
	medium.value(autolinker.link(editable.innerHTML));	
}


if (debug) {
	$('#debugger').style.display = 'block';
}

addEvent(document.body, 'keydown',function(e){
	// TOGGLE EDIT MODE VIA CTRL KEY
	if (e.keyCode === 17 || e.which === 17) {
		// when ctrl is released
		editMode = !Boolean(editMode);
		console.log("contenteditable is: "+ editMode);
		editable.contentEditable =  editMode;
	}
});

function update_dnfm_editor(e){

}

addEvent(editable, 'paste', function(e){
	console.log("paste detected.");
	
	if (typeof this.onkeyup === "function") {
    	this.onkeyup.apply(this);
	}
});
addEvent(editable, 'keyup', function(e) {
	console.log("keyup detected or triggered.");
	window.clearTimeout(localSaveTimer);
	window.clearTimeout(parseHtmlTimer);

	var d = new Date();
	
	localStorage.setItem(localstorage_var_name, this.innerHTML);
	localStorage.setItem('localLastModified', d.toISOString().substring(0, 19).replace('T', ' ') );
	hasChanged = true;
	
	localSaveTimer = setTimeout(
		function(){ 
			syncStatusMarker.innerHTML = 'Saved locally.';
			setTimeout(function(){ syncStatusMarker.innerHTML = '';}, 3000);
		}, 3000);
	
	if (sync_mode) {
		user.update_local_from_remote(sync_pull_time);
	}
	
	
	// PARSE FOR URLS.
	caret_position = window.rangy.saveSelection();
	console.log("caret position set to "+ window.caret_position);
		
	// remove previous anchored version of the content
	var a = editable.getElementsByTagName('a');
	while(a.length) {
		unwrapAnchors.call(a[a.length - 1]);
	};

	// convert urls to anchors
	medium.value( autolinker.link( editable.innerHTML ));

	// restore caret position
	window.rangy.restoreSelection(window.caret_position);
});

// SHOW URL POPUP
on( document,'click', '#dnfm', function(e){
	// Close popup on "click outside"
	urlTip.hide();
});

urlTip = new Tip(); 
urlTip.init();

on(document, 'click', '.dnfm-editable-link', function(e){	
	// show the popup
	var link = this.getAttribute('href');
	urlTip.content('<a href="'+ link +'" target="_blank">'+ link +'</a>');
	urlTip.show(e.target);
});

addEvent(editable, 'keydown', function(e) {
	urlTip.hide();
	syncStatusMarker.innerHTML = '';
});


// RESET BUTTON
addEvent($('#clear'), 'click', function() {
	medium.value('');
	localStorage.setItem(localstorage_var_name, '');

	editable.focus();
});

// SYNCHRONISATION LOGIC
sync_mode = window.synchronization || false;

syncStatusMarker = $('#sync-status-marker');

if (sync_mode) {
	
	user = {};
	user.id = $('#user_id').value;
	user.email = $('#user_email').value;
	user.memo = decodeHtml($('#user_memo').value);
	user.remoteLastModified = $('#user_last_modified').value;
	
	user.update_remote_from_local = function() {
		if(debug) console.log("update_remote_from_local started.");

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
					if(debug) console.log("update_remote_from_local finished.");
				}
			});
		} else{
			if(debug) console.log("update_remote_from_local condition is false.");
			if(debug) console.log("sync_mode: "+ sync_mode);
			if(debug) console.log("hasChanged: "+ hasChanged);
		}
	};	

	/* FAUX PUSH: if no user interaction for 15 seconds, fetch from browser  */
	user.update_local_from_remote = function(duration) {
		var display = document.querySelector('#sync-status-marker');
		clearInterval(timerInt);
		if(debug) console.log("update_local_from_remote started.");

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
				caret_position = window.rangy.saveSelection();
				
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
						
						$('#editable').innerHTML = memo;
						window.rangy.restoreSelection(window.caret_position);
						
						display.textContent = 'All synced.';
						if(debug) console.log("update_local_from_remote finished.");

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
	remoteLastModifiedMarker = $('#remoteLastModified');

	// Start Push
	setInterval(user.update_remote_from_local, sync_push_time );

	// Start Pull
	addEvent(document, 'mousemove', function() {
		user.update_local_from_remote(sync_pull_time);
	});
	
	addEvent(window, 'beforeunload', function() {
		user.update_remote_from_local();
	}); 
	user.update_local_from_remote(sync_pull_time);
}




