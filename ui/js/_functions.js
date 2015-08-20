function $(id) {
	return document.getElementById(id);
}


// Remove weird Facebook callback token in url #_=_
function remove_facebook_token_in_url(){
	if (window.location.hash && window.location.hash === '#_=_') {
		if (window.history && history.pushState) {
			window.history.pushState("", document.title, window.location.pathname);
		} else {
			window.location.hash = '';
		}
	}	
}

//Ensures there will be no 'console is undefined' errors
window.console = window.console || (function(){
    var console = {}; console.log = console.warn = console.debug = console.info = console.error = console.time = console.dir = console.profile = console.clear = console.exception = console.trace = console.assert = function(s){};
    return console;
})();

/*
Ajax function
source: https://github.com/flouthoc/minAjax.js
*/
function initXMLhttp() {
	var e;
	return e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
}
function minAjax(e) {
	var console = window.console;
	if (!e.url) {return void(1 === e.debugLog && console.log("No Url!"));}
	if (!e.type) {return void(1 === e.debugLog && console.log("No Default type (GET/POST) given!"));}
	e.method || (e.method = !0), e.debugLog || (e.debugLog = !1);
	var o = initXMLhttp();
	o.onreadystatechange = function() {
		4 === o.readyState && 200 === o.status ? (e.success && e.success(o.responseText, o.readyState), 1 === e.debugLog && console.log("SuccessResponse"), 1 === e.debugLog && console.log("Response Data:" + o.responseText)) : 1 === e.debugLog && console.log("FailureResponse --> State:" + o.readyState + "Status:" + o.status);
	};
	var t = [],
		n = e.data;
	if ("string" === typeof n) for (var s = String.prototype.split.call(n, "&"), r = 0, a = s.length; a > r; r++) {
		var c = s[r].split("=");
		t.push(encodeURIComponent(c[0]) + "=" + encodeURIComponent(c[1]));
	} else if ("object" === typeof n && !(n instanceof String || FormData && n instanceof FormData)) for (var p in n) {
		var c = n[p];
		if ("[object Array]" === Object.prototype.toString.call(c)) for (var r = 0, a = c.length; a > r; r++) t.push(encodeURIComponent(p) + "[]=" + encodeURIComponent(c[r]));
		else t.push(encodeURIComponent(p) + "=" + encodeURIComponent(c));
	}
	t = t.join("&"), "GET" === e.type && (o.open("GET", e.url + "?" + t, e.method), o.send(), 1 === e.debugLog && console.log("GET fired at:" + e.url + "?" + t)), "POST" === e.type && (o.open("POST", e.url, e.method), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), o.send(t), 1 === e.debugLog && console.log("POST fired at:" + e.url + " || Data:" + t));
}
// Html entity decoding

function decodeHtml(html) {
	var txt = document.createElement("textarea");
	txt.innerHTML = html;
	return txt.value;
}
// Append LI to start of memo

function appendLI(text) {
	if (text.substring(0, 4) !== '<li>') {
		text = '<li>' + text;
	}
	return text;
}
var addEvent = (function() {
	if (document.addEventListener) {
		return function(el, type, fn) {
			if (el.length) {
				for (var i = 0; i < el.length; i++) {
					addEvent(el[i], type, fn);
				}
			} else {
				el.addEventListener(type, fn, false);
			}
		};
	} else {
		return function(el, type, fn) {
			if (el.length) {
				for (var i = 0; i < el.length; i++) {
					addEvent(el[i], type, fn);
				}
			} else {
				el.attachEvent('on' + type, function() {
					return fn.call(el, window.event);
				});
			}
		};
	}
})();


