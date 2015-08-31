/*
	TOOLTIP object
	
	1 init: inject html for the popup
	
*/

function Tip() {};

Tip.prototype ={
	constructor: Tip,
	init: function(){
		var popup_node = document.getElementById("url-popup").cloneNode(true);
		this.popup = document.body.appendChild(popup_node);
		this.popup.style.position = 'absolute';
	},
	
	show: function(target){
		var scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
		var scrollX = window.pageXOffset || document.documentElement.scrollLeft || 0;
		var targetRect = target.getBoundingClientRect();
		var targetWidth = targetRect.width || (targetRect.left - targetRect.right);
		this.popup.style.display = 'block';
		var left = (targetWidth / 2 + targetRect.left + scrollX - this.popup.clientWidth / 2);
		if (left < 10) {
			left = 10;
		}
		this.popup.style.left = left + 'px';
		this.popup.style.top = (targetRect.top + scrollY - this.popup.clientHeight - 5) + 'px';
	},
	content: function(html){
		this.popup.innerHTML = html;
	},
	hide: function(){
		this.popup.style.display='none';
	}
};

