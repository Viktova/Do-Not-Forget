// @codekit-prepend "_jquery-2.1.4.min.js", "_variables.js", "_functions.jquery.js", "_responsive-tabs.js", "_autolinker.js", "_pixeline-tip.js", "medium-dependencies/_rangy-core.js", "medium-dependencies/_rangy-classapplier.js", "medium-dependencies/_rangy-selectionsaverestore.js", "medium-dependencies/_undo.js", "_medium.js";

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
		.on('keydown', function() {
		})
		.on('keyup', function() {
			var $this = $(this);
			var this_id = $this.attr('id');
			
			// Parse for Urls.
			caret_position = window.rangy.saveSelection();
			// remove previous anchored version of the content
			$("a", $this).each(function(){
				$(this).replaceWith($(this).text().trim());
			});
						
			// convert urls to anchors
			user.editors[$this.attr('id')].value(autolinker.link( $this.html()));
			// restore caret position
			window.rangy.restoreSelection(window.caret_position);
			
			/*
				BATTLEZONE/ curseur positionnement foire avec autolink
			
			> ESSAYER DE JOUER AVEC 
			medium.cursor.caretToAfter(Element)  
			ou medium.cursor.moveCursorToAfter(el)
			ou medium.cursor.caretToEnd()


			*/
			
			// 2. SAVE
			// Save Offline
			localStorage.setItem(localstorage_var_name+"-"+this_id, $this.html());
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
		
	// Synching
	if (sync_mode) {
		user.call_home();
	}	
	// If user is in any way active, cancel PUSH.
	$(document).on('mousemove.reset mousedown.reset click.reset keydown.reset',function(e){
		clearInterval(timerInt);
		user.call_home();
	});

// Url Popup
	$(document).on('click', function(e){
		// Close popup on "click outside"
		urlTip.hide();
		console.log("click outside");
	});
	
	editable.on('click', 'a.dnfm-editable-link', function(e){
		e.stopPropagation();
		// show the popup
		var link = $(this).attr('href');
		console.log("a link to "+link+" has been clicked on "+ e.target);
		urlTip.content('<a href="'+ link +'" target="_blank">'+ link +'</a>');
		urlTip.show(e.target);
	});
	
})(jQuery);

//$(document).ready(function () { });