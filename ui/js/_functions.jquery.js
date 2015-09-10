function reset(){
	localStorage[localstorage_var_name] = medium.value('hello');
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

// Html entity decoding
function decodeHtml(html) {
	var txt = document.createElement("textarea");
	txt.innerHTML = html;
	return txt.value;
}


