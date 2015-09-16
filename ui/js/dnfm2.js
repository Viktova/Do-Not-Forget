// @codekit-prepend "_jquery-2.1.4.min.js", "_jquery.ontextchange.js", "_variables.js", "_functions.jquery.js", "_responsive-tabs.js", "_autolinker.js", "_pixeline-tip.js", "medium-dependencies/_rangy-core.js", "medium-dependencies/_rangy-classapplier.js", "medium-dependencies/_rangy-selectionsaverestore.js", "medium-dependencies/_undo.js", "_medium.js";

/* RUNTIME */
remove_facebook_token_in_url();

urlTip = new Tip(); 
urlTip.init();
	
(function($) {
	
/*******************************************************
	SET UP THE STAGE
*******************************************************/

	// Set Tabs
	$('#tabs').responsiveTabs({setHash: true});
	
	// Editable zones
	user.sync_mode = window.synchronization || false;
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
			pasteAsText: true,
			mode: Medium.richMode,
			maxLength: -1,
			tags: {
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
		.on('keydown', function() {
			urlTip.hide();
			clearTimeout(user.local_save_timer);
			user.feedback.html(user.cloud.savingLocally);
		})
		.on('click.parse-urls keyup.parse-urls',function(e){
			var $this =$(this);
			$this.trigger('textchange.parse-url');

		})
		.on('textchange.parse-url',function(){
			
			var $this = $(this);
			var tag = get_tag_at_caret();
			if(tag.nodeName !== 'A'){
				// Parse for Urls.
				//console.log("Caret not on a A: parsing for urls.");
				// remove previous anchored version of the content
				$("a", $this).each(function(){
					$(this).replaceWith($(this).text().trim());
				});
				caret_position = window.rangy.saveSelection();

				// convert urls to anchors
				$this.html( autolinker.link( $this.html()) );

				// restore caret position
				window.rangy.restoreSelection(caret_position);
			}
		})
		.on('textchange', function() {
			// use textchange for IE9 support
			var $this = $(this);
			var this_id = $this.attr('id');
			
			// PARSE URLS		
			$this.trigger('textchange.parse-url');
			
			// SAVE
			// Save Offline
			localStorage.setItem(localstorage_var_name+"-"+this_id, $this.html());
			var d = new Date();
			user.last_modified = d.toISOString().substring(0, 19).replace('T', ' ') ;
			localStorage.setItem('localLastModified', user.last_modified );
			user.hasChanged = true;
			
			// After 3s idle time, save to cloud
			user.feedback.html(user.cloud.savedLocally);
			user.local_save_timer = setTimeout(
				function(){
					// Save online
					user.sync();
				}, 3000
			);
		})
		.on('paste', function() {
			$(this).trigger('textchange');
		})
		.on('click.showtip', 'a.dnfm-editable-link', function(e){
			e.stopPropagation();
			// show the popup
			var link = $(this).text();
			console.log(link);
			urlTip.content('<a href="'+ link +'" target="_blank">'+ link +'</a>');
			urlTip.show(e.target);
		});

	// If user is in any way active, cancel PUSH.
	$(document).on('mousemove.reset mousedown.reset click.reset keydown.reset',function(e){
		clearInterval(timerInt);
		user.call_home();
	})
	.on('click.outside', function(){
		// Close popup on "click outside"
		urlTip.hide(function(){
			$(this).trigger('textchange.parse-url');
		});
		
	});
	
	// Start Sync-ing
	user.call_home();
})(jQuery);