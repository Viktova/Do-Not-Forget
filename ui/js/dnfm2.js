// @codekit-prepend "_jquery-2.1.4.min.js", "_jquery.mobile-events.js", "_addtohomescreen.js", "_jquery.ontextchange.js", "_responsive-tabs.js", "_autolinker.js",  "medium-dependencies/_rangy-core.js", "medium-dependencies/_rangy-classapplier.js", "medium-dependencies/_rangy-selectionsaverestore.js", "medium-dependencies/_undo.js", "_medium.js", "_variables.js", "_functions.jquery.js", "_pixeline-tip.js", "_user.js";



/* RUNTIME */


remove_facebook_token_in_url();

addToHomescreen({
	skipFirstVisit: true,
	maxDisplayCount: 1
});
urlTip = new Tip();
urlTip.init();

(function($) {
/*******************************************************
	SET UP THE STAGE
*******************************************************/
	// Create user
	user.init();
	// Set Tabs
	$('#tabs').responsiveTabs({
		setHash: true,
		activate: function() {
			user.current_tab = $(this).find('.r-tabs-state-active a').attr('href');
		}
	});
	// Editable zones
	user.sync_mode = window.synchronization || false;
	editable = $('.editable');
	sync_status = $('#sync-status-marker');
	autolinker = new Autolinker({
		className: "dnfm-editable-link",
		replaceFn: function(autolinker, match) {
			var tag = autolinker.getTagBuilder().build(match);
			tag.setAttr('data-og-status', 'todo');
			tag.setAttr('data-og-infos', '{}');
			return tag;
		}
	});
	// mediumize the editable zones
	editable.each(function() {
		var $this = $(this);
		var this_var_name = localstorage_var_name + '-' + $this.attr('id');
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
			}
		});
		// Set initial content in localstorage
		var initial_content = $this.html();
		if (localStorage.getItem(this_var_name)) {
					initial_content = localStorage.getItem(this_var_name);
		}
		if (synchronization) {
			//console.log(" user.memo." + this_var_name + " = " + user.memo[$this.attr('id')]);
//			if (new Date(localStorage.localLastModified) < new Date(user.remote_last_modified)) {
			if(user.remote_last_modified > localStorage.localLastModified){				
				//console.log("copie locale pourrie pour "+ this_var_name +", on l'écrase....");
				initial_content = user.memo[$this.attr('id')];
				localStorage.setItem(this_var_name, initial_content);
			}
		}
		// set editors' initial content
		medium.value(autolinker.link(initial_content));
		user.editors[$this.attr('id')] = medium;
		localStorage.setItem(this_var_name, initial_content);
	});
/*******************************************************
		BIND EVENTS
*******************************************************/
	$('.download').on('click', function() {
		var content = '\ufeff';
		editable.each(function() {
			content += '<h2>' + $(this).attr('title') + '</h2>';
			content += $(this).html() + '<hr>';
		});
		content += 'Thank you for using <a href="http://do-not-forget.me/">http://do-not-forget.me/</a>!';
		$(this).attr('href', makeTextFile(user.textFile, content));
	});
	$('.erase-button').on('click', function() {
		if (confirm("Sure you want to erase all your memos ?")) {
			editable.html('<li>');
		}
	});
	editable.on('keydown', function() {
		urlTip.hide();
		user.isEditing = true;
		clearTimeout(user.local_save_timer);
		user.feedback.html(user.cloud.savingLocally);
	}).on('click.parse-urls keyup.parse-urls tap.parse-urls', function(e) {
		var $this = $(this);
		$this.trigger('textchange.parse-url');
	}).on('textchange.parse-url', function() {
		var $this = $(this);
		if (user.isEditing) {
			var tag = get_tag_at_caret();
			if (tag !== 'A') {
				// *** Parse for Urls.  ***
				// remove previous anchored version of the content
				$("a[data-og-status!='done']", $this).each(function() {
					$(this).replaceWith($(this).text().trim());
				});
				caret_position = window.rangy.saveSelection();
				// convert urls to anchors
				$this.html(autolinker.link($this.html()));
				// restore caret position
				try {
					window.rangy.restoreSelection(caret_position);
				} catch (err) {
					console.log("Rangy error:");
				}
			}
		}
	}).on('textchange', function() {
		// use textchange for IE9 support
		var $this = $(this);
		var this_id = $this.attr('id');
		// PARSE URLS
		$this.trigger('textchange.parse-url');
		// SAVE
		// Save Offline
		localStorage.setItem(localstorage_var_name + "-" + this_id, $this.html());
		var now = new Date;
		var utc_timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
		utc_timestamp = new Date(utc_timestamp);
		user.last_modified = utc_timestamp.toISOString().substring(0, 19).replace('T', ' ');
		localStorage.setItem('localLastModified', user.last_modified);
		user.hasChanged = true;
		// After 3s idle time, save to cloud
		user.feedback.html(user.cloud.savedLocally);
		user.local_save_timer = setTimeout(

		function() {
			// Save online
			user.sync();
		}, 3000);
	}).on('paste', function() {
		$(this).trigger('textchange');
	}).on('click.showtip tap.showtip', 'a.dnfm-editable-link', function(e) {
		e.stopPropagation();
		e.preventDefault();
		// show the popup
		urlTip.content(this);
		urlTip.show(e.target);
		return false;
	});
	// If user is in any way active, cancel PUSH.
	$(document).on('mousemove.reset mousedown.reset click.reset keydown.reset', function() {
		clearInterval(timerInt);
		user.call_home();
	}).on('click.outside tap.outside', function() {
		user.isEditing = false;
		// Close popup on "click outside"
		urlTip.hide(function() {
			$(this).trigger('textchange.parse-url');
		});
	});
	// Start Sync-ing
	user.call_home();
})(jQuery);