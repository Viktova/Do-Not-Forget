// @codekit-prepend "_jquery-2.1.4.min.js", "_variables.js", "_functions.jquery.js", "_responsive-tabs.js", "_autolinker.js", "_pixeline-tip.js", "medium-dependencies/_rangy-core.js", "medium-dependencies/_rangy-classapplier.js", "medium-dependencies/_rangy-selectionsaverestore.js", "medium-dependencies/_undo.js", "_medium.js";

/* RUNTIME */
remove_facebook_token_in_url();

(function($) {
/*
		******************************************************
		SET UP THE STAGE
		******************************************************		
	*/
	sync_mode = window.synchronization || false;
	editable = $('.editable');
	sync_status = $('#sync-status-marker');
	autolinker = new Autolinker({
		className: "dnfm-editable-link"
	});
	// mediumize the editable zones
	editable.each(function() {
		var $this = $(this);
		var this_var_name = localstorage_var_name +'-'+ $this.attr('id');
		// Medium.js: Thanks and loving accolades to its creators
		// http://jakiestfu.github.io/Medium.js/docs/
		var medium = new Medium({
			element: this,
			placeholder: "",
			autofocus: true,
			autoHR: true,
			pasteAsText: false,
			mode: Medium.richMode,
			maxLength: -1,
			tags: {
				'break': 'br',
				'horizontalRule': 'hr',
				'paragraph': 'li',
				'outerLevel': ['ol'],
				'innerLevel': ['li', 'b', 'span', 'u', 'i', 'strong', 'a', 'hr']
			},
			attributes: {
				remove: ['style']
			},
			beforeInvokeElement: function() {
				// before bolding/italicing...
			},
			pasteEventHandler: function(e) {
				if (debug) console.log("PASTE !" + e);
			}
		});
		// Set initial content in localstorage
		var initial_content = $this.html();
		if (localStorage.getItem(this_var_name)) {
			initial_content = localStorage.getItem(this_var_name);
		}else{
			localStorage.setItem(this_var_name, initial_content);
		}
		// set editors' initial content
		medium.value(autolinker.link(initial_content));
		user.editors[$this.attr('id')]=medium;
	});
/*
		******************************************************
		BIND EVENTS
		******************************************************		
	*/

	editable
		.on('keydown', function() {})
		.on('keyup', function() {
			var this_id = $(this).attr('id');
			localStorage.setItem(localstorage_var_name+"-"+this_id, $(this).html());
			var d = new Date();
			user.last_modified = d.toISOString().substring(0, 19).replace('T', ' ') ;
			localStorage.setItem('localLastModified', user.last_modified );
			hasChanged = true;
			
			// update Status feedback after 3 seconds otherwise UI feels too nervous.
			localSaveTimer = setTimeout(
				function(){ 
					user.feedback.text('Saved locally.');
				}, 3000
			);
			
			// Save online
			user.sync();
		})
		.on('paste', function() {
			editable.trigger('keyup');
		});
})(jQuery);

$(document).ready(function () {
	// Set Tabs
	$('#tabs').responsiveTabs({setHash: true});
	if (sync_mode) {
		user.call_home();
	}
});