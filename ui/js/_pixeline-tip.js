/*
	TOOLTIP object
	
	1 init: inject html for the popup
	
*/
function Tip() {};
Tip.prototype = {
	constructor: Tip,
	popup: null,
	og: null,
	init: function() {
		$('body').append($('#template-tips').html());
		this.popup = $('#url-popup');
		this.og = {
			el: $('#og-card'),
			link: $('#url-link'),
			link2: $('#og-url'),
			htitle: $('#og-title'),
			image: $('#og-image')
		};
	},
	show: function(target, callback) {
		var scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
		var scrollX = window.pageXOffset || document.documentElement.scrollLeft || 0;
		var targetRect = target.getBoundingClientRect();
		var targetWidth = targetRect.width || (targetRect.left - targetRect.right);
		var left = (targetWidth / 2 + targetRect.left + scrollX - this.popup.width() / 2);
		if (left < 10) {
			left = 10;
		}
		var top = (targetRect.top + scrollY - this.popup.height() - 25);
		this.popup.css({
			display: 'block',
			left: left + 'px',
			top: top + 'px'
		});
		if (callback && typeof(callback) === "function") {
			callback();
		}
	},
	opengraph: function(ogp) {
		if (ogp === 'reset') {
			this.og.htitle.text('');
			this.og.link2.attr('href', '');
			this.og.link.find('a').text('');
			this.og.image.attr('src', 'ui/images/ajax-loader.gif');
		} else {
			this.og.htitle.text(ogp.title);//.succinct({size: 320});
			this.og.link2.attr('href', ogp.link);
			this.og.link.find('a').text(ogp.title).succinct({size: 60});
			this.og.image.attr('src', ogp.image);
		}
	},
	content: function(anchor) {
		var $this = $(anchor);
		var link = $this.text();
		var url = link;
		if (!/^https?:\/\//i.test(url)) {
			url = 'http://' + url;
		}
		//link.succinct({size: 120});
		this.og.link.html('<a href="' + url + '" target="_blank">' + link + '</a>');
		// OPENGRAPH PARSING
		var that = this;
		that.opengraph('reset');
		if ($this.attr('data-og-status') === 'done') {
			// get link og data in its DOM
			og_data = {
				link: $this.data('og-infos').link,
				title: $this.data('og-infos').title,
				image: $this.data('og-infos').image
			}
			that.opengraph(og_data);
		} else if ($this.attr('data-og-status') === 'todo') {
			// fetch data
			// 
			console.log("fetching url:" + url);
			$this.attr('data-og-status', 'pending');
			$.post('/scrape-url', {
				'url': url
			}, function(json) {
				if (json.success) {
					$this.attr('data-og-status', 'done');
					og_data = {
						title: json.ogp.title,
						image: json.ogp.image,
						link: json.ogp.url
					};
					$this.attr('data-og-infos', JSON.stringify(og_data));
					that.opengraph(og_data);
					console.log("OG PARSING SUCCESS");
					//
				} else {
					console.log('OG PARSING ERROR ! Something went wrong.');
					console.log(json.log);
				}
			}, 'json');
		}
	},
	hide: function(callback) {
		this.popup.css('display', 'none');
		if (callback && typeof(callback) === "function") {
			callback();
		}
	}
};