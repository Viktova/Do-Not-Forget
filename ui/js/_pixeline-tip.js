/*
	TOOLTIP object
	
	1 init: inject html for the popup
	
*/

function Tip() {};

Tip.prototype ={
	constructor: Tip,
	popup: null,
	
	init: function(){
		$('body').append('<div id="url-popup" class="popup"></div>');
		this.popup = $('#url-popup');
	},
	
	show: function(target, callback){
		var scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
		var scrollX = window.pageXOffset || document.documentElement.scrollLeft || 0;
		var targetRect = target.getBoundingClientRect();
		var targetWidth = targetRect.width || (targetRect.left - targetRect.right);
		
		var left = (targetWidth / 2 + targetRect.left + scrollX - this.popup.width() / 2);
		if (left < 10) {
			left = 10;
		}
		var top = (targetRect.top + scrollY - this.popup.height() - 25);
		this.popup.css({display:'block', left: left+'px', top: top  + 'px' });
		
		if (callback && typeof(callback) === "function") {
			callback();
		}
		
	},
	content: function(html){
		this.popup.html(html);
	},
	hide: function(callback){
		this.popup.css('display','none');
		if (callback && typeof(callback) === "function") {
			callback();
		}
	}
};

