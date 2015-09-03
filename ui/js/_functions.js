function reset(){
	localStorage[localstorage_var_name] = medium.value('hello');
}
function $(query) {
	// jquery-like selector function.
	// Based on http://jsperf.com/getelementbyid-vs-queryselector/11
    var idSelectorRegexp = /^#[a-zA-Z]+[a-zA-Z0-9_\-]*$/;
        // pure ID selector?
      if (idSelectorRegexp.test(query)){
        return document.getElementById(query.slice(1));
	      
      }
      else {
        return document.querySelector(query);	      
      }
}



// useful to remove A anchors from html string
// http://stackoverflow.com/questions/4536329/whats-the-best-way-to-strip-out-only-the-anchor-html-tags-in-javascript-given
function unwrapAnchors() {
    if(!('tagName' in this) || this.tagName.toLowerCase() !== 'a' || !('parentNode' in this)) {
        return;
    }
    var childNodes = this.childNodes || [], children = [], child;
    // Convert childNodes collection to array
    for(var i = 0, childNodes = this.childNodes || []; i < childNodes.length; i++) {
        children[i] = childNodes[i];
    }
    // Move children outside element
    for(i = 0; i < children.length; i++) {
        child = children[i];
        if(('tagName' in child) && child.tagName.toLowerCase() === 'a') {
            child.parentNode.removeChild(child);
        } else {
            this.parentNode.insertBefore(child, this);
        }
    }
    // Remove now-empty anchor
    this.parentNode.removeChild(this);
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
};

// Vanilla js equivalent to jquery on()
function on(el, evt, sel, handler) {
    el.addEventListener(evt, function(event) {
        var t = event.target;
        while (t && t !== this) {
            if (t.matches(sel)) {
                handler.call(t, event);
            }
            t = t.parentNode;
        }
    });
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

