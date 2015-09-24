
/*********************************************************
	 HELPER FUNCTIONS 
*********************************************************/



// get Tag Element at Caret position
function get_tag_at_caret() {
	try {
	   var node = document.getSelection().anchorNode;
	   node= (node.nodeType === 3 ? node.parentNode : node);
	   return node.nodeName;	
	}catch(err){
		console.log(err);
	}
}

// Remove weird Facebook callback token in url #_=_

function remove_facebook_token_in_url() {
	if (window.location.hash && window.location.hash === '#_=_') {
		if (window.history && history.pushState) {
			window.history.pushState("", document.title, window.location.pathname);
		} else {
			window.location.hash = '';
		}
	}
}
//Ensures there will be no 'console is undefined' errors

(function () {
   var global   = this;
   var original = global.console;
   var console  = global.console = {};
   var methods = ['assert', 'count', 'debug', 'dir', 'dirxml', 'error', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'trace', 'warn'];
   for (var i = methods.length; i--;) {
      (function (methodName) {
         console[methodName] = function () {
            if (original && methodName in original) {
               original[methodName].apply(original, arguments);
            }
         };
      })(methods[i]);
   }
})();

/*
	output conttent editable as a downloadable text file.
*/
function  makeTextFile(textFile, text) {
    var data = new Blob([text], {type: 'text/html'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
};