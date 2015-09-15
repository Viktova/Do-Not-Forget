/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});


var syncStatusMarker,
	remoteLastModified,
	remoteLastModifiedMarker,
	localLastModified,
	localLastModifiedMarker,
	editable,
	medium,
	sync_mode,
	timerInt,
	online_save_timer,
	localSaveTimer, 
	parseHtmlTimer,
	autolinker,
	urlTip,
	caret_position,
	editMode = true;

var localstorage_var_name = 'memotab';
var debug = false;
var hasChanged = false;


var user = {
	id: $('#user_id').val(),
	email: $('#user_email').val(),
	sync_save_delay: 20,
	// seconds
	sync_load_delay: 5000,
	// milliseconds
	last_modified: null,
	remote_last_modified: null,
	call_home_timer: null,
	online_save_timer: null,
	local_save_timer: null,
	hasChanged: false,
	should_call_home: false,
	editors: [],
	feedback: $('#sync-status-marker'),
	cloud: {
		loading: $('#loading').html(),
		savingLocally: $('#local-working').html(),
		failed: $('#failed').html(),
		done: $('#done').html(),
		refreshed: $('#refreshed').html(),
		savedLocally: $('#saved-locally').html()
	},
	sync: function() {
/*
		go online. Compare last local save date versus last remote save date
		if remote is older
		> push
		else
		< pull
	*/
		if (user.hasChanged || user.should_call_home) {
			// Stop any calls to home... Since we are calling home!
			user.hasChanged = false;
			user.should_call_home = false;
			clearInterval(user.call_home_timer);
			clearInterval(user.online_save_timer);
			// send request
			//caret_position = window.rangy.saveSelection();
			var data = {
				id: user.id,
				email: user.email,
				last_modified: user.last_modified,
				memo: {
					now: localStorage.getItem('memotab-now'),
					later: localStorage.getItem('memotab-later'),
					toreadandwatch: localStorage.getItem('memotab-toreadandwatch')
				}
			};
//			user.online_save_timer = setTimeout(function() {
				user.feedback.html(user.cloud.loading);
				var jqxhr = $.post('/synchronise-memo', data, function(result) {
					user.remote_last_modified = result.last_modified;
					if (result.memo) {
						console.log("PUSH: Local content is rotten. Pushing new content from Server!");
						// update local state with remote data (PUSH)
						// break memo into the X memotabs data and localSTorage them.
						var memos = JSON.parse(result.memo);
						for (var key in memos) {
							if (memos.hasOwnProperty(key)) {
								//console.log("storing "+ key +" locally.");
								localStorage.setItem(localstorage_var_name + '-' + key, memos[key]);
								// then update medium editors.
								user.editors[key].value(memos[key]);
							};
						}
						user.feedback.html(user.cloud.refreshed);
						//window.rangy.restoreSelection(window.caret_position);
					} else {
						//user.feedback.text('Saved to server.');
						user.feedback.html(user.cloud.done);
					}
					// Sync finished ! 
				}, 'json').fail(function() {
					console.log("error triggered");
					user.feedback.html(user.cloud.failed);
				}).always(function() {
					console.log("always triggered");
					user.call_home();
				});
//			}, user.sync_load_delay);
		}
	},
	call_home: function() {
		// UPDATE LOCAL AFTER IDLE TIME (PUSH content)
/*
			purpose: make sure DNFM tabs on other computers have the freshest content.
			how: this function starts a timer. If timer finishes, attempt a sync().
		*/
		clearInterval(user.call_home_timer);
		//user.feedback.text('');
		console.log("call_home launched.");
		var push_timer = user.sync_save_delay,
			minutes, seconds;
		user.call_home_timer = setInterval(function() {
			minutes = parseInt(push_timer / 60, 10);
			seconds = parseInt(push_timer % 60, 10);
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
			if (push_timer < (user.sync_save_delay - 15)) {
				user.feedback.text('Refresh in ' + minutes + ":" + seconds);
			}
			if (--push_timer < 0) {
				push_timer = user.sync_save_delay;
				// Launch Push
				user.should_call_home = true;
				user.sync();
			}
		}, 1000);
	}
}
/*********************************************************
	 HELPER FUNCTIONS 
*********************************************************/
/*
function reset() {
	localStorage[localstorage_var_name] = medium.value('hello');
}
// useful to remove A anchors from html string
// http://stackoverflow.com/questions/4536329/whats-the-best-way-to-strip-out-only-the-anchor-html-tags-in-javascript-given

function unwrapAnchors() {
	if (!('tagName' in this) || this.tagName.toLowerCase() !== 'a' || !('parentNode' in this)) {
		return;
	}
	var childNodes = this.childNodes || [],
		children = [],
		child;
	// Convert childNodes collection to array
	for (var i = 0, childNodes = this.childNodes || []; i < childNodes.length; i++) {
		children[i] = childNodes[i];
	}
	// Move children outside element
	for (i = 0; i < children.length; i++) {
		child = children[i];
		if (('tagName' in child) && child.tagName.toLowerCase() === 'a') {
			child.parentNode.removeChild(child);
		} else {
			this.parentNode.insertBefore(child, this);
		}
	}
	// Remove now-empty anchor
	this.parentNode.removeChild(this);
}
*/
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
window.console = window.console || (function() {
	var console = {};
	console.log = console.warn = console.debug = console.info = console.error = console.time = console.dir = console.profile = console.clear = console.exception = console.trace = console.assert = function(s) {};
	return console;
})();
// Html entity decoding
/*

function decodeHtml(html) {
	var txt = document.createElement("textarea");
	txt.innerHTML = html;
	return txt.value;
}
*/

/*!
 *  Project: jquery.responsiveTabs.js
 *  Description: A plugin that creates responsive tabs, optimized for all devices
 *  Author: Jelle Kralt (jelle@jellekralt.nl)
 *  Version: 1.5.0
 *  License: MIT
 */

;(function ( $, window, undefined ) {

    /** Default settings */
    var defaults = {
        active: null,
        event: 'click',
        disabled: [],
        collapsible: 'accordion',
        startCollapsed: false,
        rotate: false,
        setHash: false,
        animation: 'default',
        animationQueue: false,
        duration: 500,
        scrollToAccordion: false,
        accordionTabElement: '<div></div>',
        activate: function(){},
        deactivate: function(){},
        load: function(){},
        activateState: function(){},
        classes: {
            stateDefault: 'r-tabs-state-default',
            stateActive: 'r-tabs-state-active',
            stateDisabled: 'r-tabs-state-disabled',
            stateExcluded: 'r-tabs-state-excluded',
            container: 'r-tabs',
            ul: 'r-tabs-nav',
            tab: 'r-tabs-tab',
            anchor: 'r-tabs-anchor',
            panel: 'r-tabs-panel',
            accordionTitle: 'r-tabs-accordion-title'
        }
    };

    /**
     * Responsive Tabs
     * @constructor
     * @param {object} element - The HTML element the validator should be bound to
     * @param {object} options - An option map
     */
    function ResponsiveTabs(element, options) {
        this.element = element; // Selected DOM element
        this.$element = $(element); // Selected jQuery element

        this.tabs = []; // Create tabs array
        this.state = ''; // Define the plugin state (tabs/accordion)
        this.rotateInterval = 0; // Define rotate interval
        this.$queue = $({});

        // Extend the defaults with the passed options
        this.options = $.extend( {}, defaults, options);

        this.init();
    }


    /**
     * This function initializes the tab plugin
     */
    ResponsiveTabs.prototype.init = function () {
        var _this = this;

        // Load all the elements
        this.tabs = this._loadElements();
        this._loadClasses();
        this._loadEvents();

        // Window resize bind to check state
        $(window).on('resize', function(e) {
            _this._setState(e);
        });

        // Hashchange event
        $(window).on('hashchange', function(e) {
            var tabRef = _this._getTabRefBySelector(window.location.hash);
            var oTab = _this._getTab(tabRef);

            // Check if a tab is found that matches the hash
            if(tabRef >= 0 && !oTab._ignoreHashChange && !oTab.disabled) {
                // If so, open the tab and auto close the current one
                _this._openTab(e, _this._getTab(tabRef), true);
            }
        });

        // Start rotate event if rotate option is defined
        if(this.options.rotate !== false) {
            this.startRotation();
        }

        // --------------------
        // Define plugin events
        //

        // Activate: this event is called when a tab is selected
        this.$element.bind('tabs-activate', function(e, oTab) {
            _this.options.activate.call(this, e, oTab);
        });
        // Deactivate: this event is called when a tab is closed
        this.$element.bind('tabs-deactivate', function(e, oTab) {
            _this.options.deactivate.call(this, e, oTab);
        });
        // Activate State: this event is called when the plugin switches states
        this.$element.bind('tabs-activate-state', function(e, state) {
            _this.options.activateState.call(this, e, state);
        });

        // Load: this event is called when the plugin has been loaded
        this.$element.bind('tabs-load', function(e) {
            var startTab;

            _this._setState(e); // Set state

            // Check if the panel should be collaped on load
            if(_this.options.startCollapsed !== true && !(_this.options.startCollapsed === 'accordion' && _this.state === 'accordion')) {

                startTab = _this._getStartTab();

                // Open the initial tab
                _this._openTab(e, startTab); // Open first tab

                // Call the callback function
                _this.options.load.call(this, e, startTab); // Call the load callback
            }
        });
        // Trigger loaded event
        this.$element.trigger('tabs-load');
    };

    //
    // PRIVATE FUNCTIONS
    //

    /**
     * This function loads the tab elements and stores them in an array
     * @returns {Array} Array of tab elements
     */
    ResponsiveTabs.prototype._loadElements = function() {
        var _this = this;
        var $ul = this.$element.children('ul');
        var tabs = [];
        var id = 0;

        // Add the classes to the basic html elements
        this.$element.addClass(_this.options.classes.container); // Tab container
        $ul.addClass(_this.options.classes.ul); // List container

        // Get tab buttons and store their data in an array
        $('li', $ul).each(function() {
            var $tab = $(this);
            var isExcluded = $tab.hasClass(_this.options.classes.stateExcluded);
            var $anchor, $panel, $accordionTab, $accordionAnchor, panelSelector;

            // Check if the tab should be excluded
            if(!isExcluded) {

                $anchor = $('a', $tab);
                panelSelector = $anchor.attr('href');
                $panel = $(panelSelector);
                $accordionTab = $(_this.options.accordionTabElement).insertBefore($panel);
                $accordionAnchor = $('<a></a>').attr('href', panelSelector).html($anchor.html()).appendTo($accordionTab);

                var oTab = {
                    _ignoreHashChange: false,
                    id: id,
                    disabled: ($.inArray(id, _this.options.disabled) !== -1),
                    tab: $(this),
                    anchor: $('a', $tab),
                    panel: $panel,
                    selector: panelSelector,
                    accordionTab: $accordionTab,
                    accordionAnchor: $accordionAnchor,
                    active: false
                };

                // 1up the ID
                id++;
                // Add to tab array
                tabs.push(oTab);
            }
        });
        return tabs;
    };


    /**
     * This function adds classes to the tab elements based on the options
     */
    ResponsiveTabs.prototype._loadClasses = function() {
        for (var i=0; i<this.tabs.length; i++) {
            this.tabs[i].tab.addClass(this.options.classes.stateDefault).addClass(this.options.classes.tab);
            this.tabs[i].anchor.addClass(this.options.classes.anchor);
            this.tabs[i].panel.addClass(this.options.classes.stateDefault).addClass(this.options.classes.panel);
            this.tabs[i].accordionTab.addClass(this.options.classes.accordionTitle);
            this.tabs[i].accordionAnchor.addClass(this.options.classes.anchor);
            if(this.tabs[i].disabled) {
                this.tabs[i].tab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
                this.tabs[i].accordionTab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
           }
        }
    };

    /**
     * This function adds events to the tab elements
     */
    ResponsiveTabs.prototype._loadEvents = function() {
        var _this = this;

        // Define activate event on a tab element
        var fActivate = function(e) {
            var current = _this._getCurrentTab(); // Fetch current tab
            var activatedTab = e.data.tab;

            e.preventDefault();

            // Make sure this tab isn't disabled
            if(!activatedTab.disabled) {

                // Check if hash has to be set in the URL location
                if(_this.options.setHash) {
                    // Set the hash using the history api if available to tackle Chromes repaint bug on hash change
                    if(history.pushState) {
                        history.pushState(null, null, activatedTab.selector);
                    } else {
                        // Otherwise fallback to the hash update for sites that don't support the history api
                        window.location.hash = activatedTab.selector;
                    }
                }

                e.data.tab._ignoreHashChange = true;

                // Check if the activated tab isnt the current one or if its collapsible. If not, do nothing
                if(current !== activatedTab || _this._isCollapisble()) {
                    // The activated tab is either another tab of the current one. If it's the current tab it is collapsible
                    // Either way, the current tab can be closed
                    _this._closeTab(e, current);

                    // Check if the activated tab isnt the current one or if it isnt collapsible
                    if(current !== activatedTab || !_this._isCollapisble()) {
                        _this._openTab(e, activatedTab, false, true);
                    }
                }
            }
        };

        // Loop tabs
        for (var i=0; i<this.tabs.length; i++) {
            // Add activate function to the tab and accordion selection element
            this.tabs[i].anchor.on(_this.options.event, {tab: _this.tabs[i]}, fActivate);
            this.tabs[i].accordionAnchor.on(_this.options.event, {tab: _this.tabs[i]}, fActivate);
        }
    };

    /**
     * This function gets the tab that should be opened at start
     * @returns {Object} Tab object
     */
    ResponsiveTabs.prototype._getStartTab = function() {
        var tabRef = this._getTabRefBySelector(window.location.hash);
        var startTab;

        // Check if the page has a hash set that is linked to a tab
        if(tabRef >= 0 && !this._getTab(tabRef).disabled) {
            // If so, set the current tab to the linked tab
            startTab = this._getTab(tabRef);
        } else if(this.options.active > 0 && !this._getTab(this.options.active).disabled) {
            startTab = this._getTab(this.options.active);
        } else {
            // If not, just get the first one
            startTab = this._getTab(0);
        }

        return startTab;
    };

    /**
     * This function sets the current state of the plugin
     * @param {Event} e - The event that triggers the state change
     */
    ResponsiveTabs.prototype._setState = function(e) {
        var $ul = $('ul', this.$element);
        var oldState = this.state;
        var startCollapsedIsState = (typeof this.options.startCollapsed === 'string');
        var startTab;

        // The state is based on the visibility of the tabs list
        if($ul.is(':visible')){
            // Tab list is visible, so the state is 'tabs'
            this.state = 'tabs';
        } else {
            // Tab list is invisible, so the state is 'accordion'
            this.state = 'accordion';
        }

        // If the new state is different from the old state
        if(this.state !== oldState) {
            // If so, the state activate trigger must be called
            this.$element.trigger('tabs-activate-state', {oldState: oldState, newState: this.state});

            // Check if the state switch should open a tab
            if(oldState && startCollapsedIsState && this.options.startCollapsed !== this.state && this._getCurrentTab() === undefined) {
                // Get initial tab
                startTab = this._getStartTab(e);
                // Open the initial tab
                this._openTab(e, startTab); // Open first tab
            }
        }
    };

    /**
     * This function opens a tab
     * @param {Event} e - The event that triggers the tab opening
     * @param {Object} oTab - The tab object that should be opened
     * @param {Boolean} closeCurrent - Defines if the current tab should be closed
     * @param {Boolean} stopRotation - Defines if the tab rotation loop should be stopped
     */
    ResponsiveTabs.prototype._openTab = function(e, oTab, closeCurrent, stopRotation) {
        var _this = this;

        // Check if the current tab has to be closed
        if(closeCurrent) {
            this._closeTab(e, this._getCurrentTab());
        }

        // Check if the rotation has to be stopped when activated
        if(stopRotation && this.rotateInterval > 0) {
            this.stopRotation();
        }

        // Set this tab to active
        oTab.active = true;
        // Set active classes to the tab button and accordion tab button
        oTab.tab.removeClass(_this.options.classes.stateDefault).addClass(_this.options.classes.stateActive);
        oTab.accordionTab.removeClass(_this.options.classes.stateDefault).addClass(_this.options.classes.stateActive);

        // Run panel transiton
        _this._doTransition(oTab.panel, _this.options.animation, 'open', function() {
            // When finished, set active class to the panel
            oTab.panel.removeClass(_this.options.classes.stateDefault).addClass(_this.options.classes.stateActive);

           // And if enabled and state is accordion, scroll to the accordion tab
            if(_this.getState() === 'accordion' && _this.options.scrollToAccordion && (!_this._isInView(oTab.accordionTab) || _this.options.animation !== 'default')) {
                // Check if the animation option is enabled, and if the duration isn't 0
                if(_this.options.animation !== 'default' && _this.options.duration > 0) {
                    // If so, set scrollTop with animate and use the 'animation' duration
                    $('html, body').animate({
                        scrollTop: oTab.accordionTab.offset().top
                    }, _this.options.duration);
                } else {
                    //  If not, just set scrollTop
                    $('html, body').scrollTop(oTab.accordionTab.offset().top);
                }
            }
        });

        this.$element.trigger('tabs-activate', oTab);
    };

    /**
     * This function closes a tab
     * @param {Event} e - The event that is triggered when a tab is closed
     * @param {Object} oTab - The tab object that should be closed
     */
    ResponsiveTabs.prototype._closeTab = function(e, oTab) {
        var _this = this;
        var doQueueOnState = typeof _this.options.animationQueue === 'string';
        var doQueue;

        if(oTab !== undefined) {
            if(doQueueOnState && _this.getState() === _this.options.animationQueue) {
                doQueue = true;
            } else if(doQueueOnState) {
                doQueue = false;
            } else {
                doQueue = _this.options.animationQueue;
            }

            // Deactivate tab
            oTab.active = false;
            // Set default class to the tab button
            oTab.tab.removeClass(_this.options.classes.stateActive).addClass(_this.options.classes.stateDefault);

            // Run panel transition
            _this._doTransition(oTab.panel, _this.options.animation, 'close', function() {
                // Set default class to the accordion tab button and tab panel
                oTab.accordionTab.removeClass(_this.options.classes.stateActive).addClass(_this.options.classes.stateDefault);
                oTab.panel.removeClass(_this.options.classes.stateActive).addClass(_this.options.classes.stateDefault);
            }, !doQueue);

            this.$element.trigger('tabs-deactivate', oTab);
        }
    };

    /**
     * This function runs an effect on a panel
     * @param {Element} panel - The HTML element of the tab panel
     * @param {String} method - The transition method reference
     * @param {String} state - The state (open/closed) that the panel should transition to
     * @param {Function} callback - The callback function that is called after the transition
     * @param {Boolean} dequeue - Defines if the event queue should be dequeued after the transition
     */
    ResponsiveTabs.prototype._doTransition = function(panel, method, state, callback, dequeue) {
        var effect;
        var _this = this;

        // Get effect based on method
        switch(method) {
            case 'slide':
                effect = (state === 'open') ? 'slideDown' : 'slideUp';
                break;
            case 'fade':
                effect = (state === 'open') ? 'fadeIn' : 'fadeOut';
                break;
            default:
                effect = (state === 'open') ? 'show' : 'hide';
                // When default is used, set the duration to 0
                _this.options.duration = 0;
                break;
        }

        // Add the transition to a custom queue
        this.$queue.queue('responsive-tabs',function(next){
            // Run the transition on the panel
            panel[effect]({
                duration: _this.options.duration,
                complete: function() {
                    // Call the callback function
                    callback.call(panel, method, state);
                    // Run the next function in the queue
                    next();
                }
            });
        });

        // When the panel is openend, dequeue everything so the animation starts
        if(state === 'open' || dequeue) {
            this.$queue.dequeue('responsive-tabs');
        }

    };

    /**
     * This function returns the collapsibility of the tab in this state
     * @returns {Boolean} The collapsibility of the tab
     */
    ResponsiveTabs.prototype._isCollapisble = function() {
        return (typeof this.options.collapsible === 'boolean' && this.options.collapsible) || (typeof this.options.collapsible === 'string' && this.options.collapsible === this.getState());
    };

    /**
     * This function returns a tab by numeric reference
     * @param {Integer} numRef - Numeric tab reference
     * @returns {Object} Tab object
     */
    ResponsiveTabs.prototype._getTab = function(numRef) {
        return this.tabs[numRef];
    };

    /**
     * This function returns the numeric tab reference based on a hash selector
     * @param {String} selector - Hash selector
     * @returns {Integer} Numeric tab reference
     */
    ResponsiveTabs.prototype._getTabRefBySelector = function(selector) {
        // Loop all tabs
        for (var i=0; i<this.tabs.length; i++) {
            // Check if the hash selector is equal to the tab selector
            if(this.tabs[i].selector === selector) {
                return i;
            }
        }
        // If none is found return a negative index
        return -1;
    };

    /**
     * This function returns the current tab element
     * @returns {Object} Current tab element
     */
    ResponsiveTabs.prototype._getCurrentTab = function() {
        return this._getTab(this._getCurrentTabRef());
    };

    /**
     * This function returns the next tab's numeric reference
     * @param {Integer} currentTabRef - Current numeric tab reference
     * @returns {Integer} Numeric tab reference
     */
    ResponsiveTabs.prototype._getNextTabRef = function(currentTabRef) {
        var tabRef = (currentTabRef || this._getCurrentTabRef());
        var nextTabRef = (tabRef === this.tabs.length - 1) ? 0 : tabRef + 1;
        return (this._getTab(nextTabRef).disabled) ? this._getNextTabRef(nextTabRef) : nextTabRef;
    };

    /**
     * This function returns the previous tab's numeric reference
     * @returns {Integer} Numeric tab reference
     */
    ResponsiveTabs.prototype._getPreviousTabRef = function() {
        return (this._getCurrentTabRef() === 0) ? this.tabs.length - 1 : this._getCurrentTabRef() - 1;
    };

    /**
     * This function returns the current tab's numeric reference
     * @returns {Integer} Numeric tab reference
     */
    ResponsiveTabs.prototype._getCurrentTabRef = function() {
        // Loop all tabs
        for (var i=0; i<this.tabs.length; i++) {
            // If this tab is active, return it
            if(this.tabs[i].active) {
                return i;
            }
        }
        // No tabs have been found, return negative index
        return -1;
    };

    //
    // HELPER FUNCTIONS
    //

    ResponsiveTabs.prototype._isInView = function($element) {
        var docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elemTop = $element.offset().top,
            elemBottom = elemTop + $element.height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    };

    //
    // PUBLIC FUNCTIONS
    //

    /**
     * This function activates a tab
     * @param {Integer} tabRef - Numeric tab reference
     * @param {Boolean} stopRotation - Defines if the tab rotation should stop after activation
     */
    ResponsiveTabs.prototype.activate = function(tabRef, stopRotation) {
        var e = jQuery.Event('tabs-activate');
        var oTab = this._getTab(tabRef);
        if(!oTab.disabled) {
            this._openTab(e, oTab, true, stopRotation || true);
        }
    };

    /**
     * This function deactivates a tab
     * @param {Integer} tabRef - Numeric tab reference
     */
    ResponsiveTabs.prototype.deactivate = function(tabRef) {
        var e = jQuery.Event('tabs-dectivate');
        var oTab = this._getTab(tabRef);
        if(!oTab.disabled) {
            this._closeTab(e, oTab);
        }
    };

    /**
     * This function enables a tab
     * @param {Integer} tabRef - Numeric tab reference
     */
    ResponsiveTabs.prototype.enable = function(tabRef) {
        var oTab = this._getTab(tabRef);
        if(oTab){
            oTab.disabled = false;
            oTab.tab.addClass(this.options.classes.stateDefault).removeClass(this.options.classes.stateDisabled);
            oTab.accordionTab.addClass(this.options.classes.stateDefault).removeClass(this.options.classes.stateDisabled);
        }
    };

    /**
     * This function disable a tab
     * @param {Integer} tabRef - Numeric tab reference
     */
    ResponsiveTabs.prototype.disable = function(tabRef) {
        var oTab = this._getTab(tabRef);
        if(oTab){
            oTab.disabled = true;
            oTab.tab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
            oTab.accordionTab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
        }
    };

    /**
     * This function gets the current state of the plugin
     * @returns {String} State of the plugin
     */
    ResponsiveTabs.prototype.getState = function() {
        return this.state;
    };

    /**
     * This function starts the rotation of the tabs
     * @param {Integer} speed - The speed of the rotation
     */
    ResponsiveTabs.prototype.startRotation = function(speed) {
        var _this = this;
        // Make sure not all tabs are disabled
        if(this.tabs.length > this.options.disabled.length) {
            this.rotateInterval = setInterval(function(){
                var e = jQuery.Event('rotate');
                _this._openTab(e, _this._getTab(_this._getNextTabRef()), true);
            }, speed || (($.isNumeric(_this.options.rotate)) ? _this.options.rotate : 4000) );
        } else {
            throw new Error("Rotation is not possible if all tabs are disabled");
        }
    };

    /**
     * This function stops the rotation of the tabs
     */
    ResponsiveTabs.prototype.stopRotation = function() {
        window.clearInterval(this.rotateInterval);
        this.rotateInterval = 0;
    };

    /**
     * This function can be used to get/set options
     * @return {any} Option value
     */
    ResponsiveTabs.prototype.option = function(key, value) {
        if(value) {
            this.options[key] = value;
        }
        return this.options[key];
    };

    /** jQuery wrapper */
    $.fn.responsiveTabs = function ( options ) {
        var args = arguments;
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!$.data(this, 'responsivetabs')) {
                    $.data(this, 'responsivetabs', new ResponsiveTabs( this, options ));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            return this.each(function () {
                var instance = $.data(this, 'responsivetabs');

                if (instance instanceof ResponsiveTabs && typeof instance[options] === 'function') {
                    instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }

                // Allow instances to be destroyed via the 'destroy' method
                if (options === 'destroy') {
                    // TODO: destroy instance classes, etc
                    $.data(this, 'responsivetabs', null);
                }
            });
        }
    };

}(jQuery, window));


(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function () {
      return (root['Autolinker'] = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['Autolinker'] = factory();
  }
}(this, function () {

/*!
 * Autolinker.js
 * 0.18.1
 *
 * Copyright(c) 2015 Gregory Jacobs <greg@greg-jacobs.com>
 * MIT Licensed. http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/gregjacobs/Autolinker.js
 */
/**
 * @class Autolinker
 * @extends Object
 *
 * Utility class used to process a given string of text, and wrap the matches in
 * the appropriate anchor (&lt;a&gt;) tags to turn them into links.
 *
 * Any of the configuration options may be provided in an Object (map) provided
 * to the Autolinker constructor, which will configure how the {@link #link link()}
 * method will process the links.
 *
 * For example:
 *
 *     var autolinker = new Autolinker( {
 *         newWindow : false,
 *         truncate  : 30
 *     } );
 *
 *     var html = autolinker.link( "Joe went to www.yahoo.com" );
 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
 *
 *
 * The {@link #static-link static link()} method may also be used to inline options into a single call, which may
 * be more convenient for one-off uses. For example:
 *
 *     var html = Autolinker.link( "Joe went to www.yahoo.com", {
 *         newWindow : false,
 *         truncate  : 30
 *     } );
 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
 *
 *
 * ## Custom Replacements of Links
 *
 * If the configuration options do not provide enough flexibility, a {@link #replaceFn}
 * may be provided to fully customize the output of Autolinker. This function is
 * called once for each URL/Email/Phone#/Twitter Handle/Hashtag match that is
 * encountered.
 *
 * For example:
 *
 *     var input = "...";  // string with URLs, Email Addresses, Phone #s, Twitter Handles, and Hashtags
 *
 *     var linkedText = Autolinker.link( input, {
 *         replaceFn : function( autolinker, match ) {
 *             console.log( "href = ", match.getAnchorHref() );
 *             console.log( "text = ", match.getAnchorText() );
 *
 *             switch( match.getType() ) {
 *                 case 'url' :
 *                     console.log( "url: ", match.getUrl() );
 *
 *                     if( match.getUrl().indexOf( 'mysite.com' ) === -1 ) {
 *                         var tag = autolinker.getTagBuilder().build( match );  // returns an `Autolinker.HtmlTag` instance, which provides mutator methods for easy changes
 *                         tag.setAttr( 'rel', 'nofollow' );
 *                         tag.addClass( 'external-link' );
 *
 *                         return tag;
 *
 *                     } else {
 *                         return true;  // let Autolinker perform its normal anchor tag replacement
 *                     }
 *
 *                 case 'email' :
 *                     var email = match.getEmail();
 *                     console.log( "email: ", email );
 *
 *                     if( email === "my@own.address" ) {
 *                         return false;  // don't auto-link this particular email address; leave as-is
 *                     } else {
 *                         return;  // no return value will have Autolinker perform its normal anchor tag replacement (same as returning `true`)
 *                     }
 *
 *                 case 'phone' :
 *                     var phoneNumber = match.getPhoneNumber();
 *                     console.log( phoneNumber );
 *
 *                     return '<a href="http://newplace.to.link.phone.numbers.to/">' + phoneNumber + '</a>';
 *
 *                 case 'twitter' :
 *                     var twitterHandle = match.getTwitterHandle();
 *                     console.log( twitterHandle );
 *
 *                     return '<a href="http://newplace.to.link.twitter.handles.to/">' + twitterHandle + '</a>';
 *
 *                 case 'hashtag' :
 *                     var hashtag = match.getHashtag();
 *                     console.log( hashtag );
 *
 *                     return '<a href="http://newplace.to.link.hashtag.handles.to/">' + hashtag + '</a>';
 *             }
 *         }
 *     } );
 *
 *
 * The function may return the following values:
 *
 * - `true` (Boolean): Allow Autolinker to replace the match as it normally would.
 * - `false` (Boolean): Do not replace the current match at all - leave as-is.
 * - Any String: If a string is returned from the function, the string will be used directly as the replacement HTML for
 *   the match.
 * - An {@link Autolinker.HtmlTag} instance, which can be used to build/modify an HTML tag before writing out its HTML text.
 *
 * @constructor
 * @param {Object} [config] The configuration options for the Autolinker instance, specified in an Object (map).
 */
var Autolinker = function( cfg ) {
	Autolinker.Util.assign( this, cfg );  // assign the properties of `cfg` onto the Autolinker instance. Prototype properties will be used for missing configs.

	// Validate the value of the `hashtag` cfg.
	var hashtag = this.hashtag;
	if( hashtag !== false && hashtag !== 'twitter' && hashtag !== 'facebook' ) {
		throw new Error( "invalid `hashtag` cfg - see docs" );
	}
};

Autolinker.prototype = {
	constructor : Autolinker,  // fix constructor property

	/**
	 * @cfg {Boolean} urls
	 *
	 * `true` if miscellaneous URLs should be automatically linked, `false` if they should not be.
	 */
	urls : true,

	/**
	 * @cfg {Boolean} email
	 *
	 * `true` if email addresses should be automatically linked, `false` if they should not be.
	 */
	email : true,

	/**
	 * @cfg {Boolean} twitter
	 *
	 * `true` if Twitter handles ("@example") should be automatically linked, `false` if they should not be.
	 */
	twitter : true,

	/**
	 * @cfg {Boolean} phone
	 *
	 * `true` if Phone numbers ("(555)555-5555") should be automatically linked, `false` if they should not be.
	 */
	phone: true,

	/**
	 * @cfg {Boolean/String} hashtag
	 *
	 * A string for the service name to have hashtags (ex: "#myHashtag")
	 * auto-linked to. The currently-supported values are:
	 *
	 * - 'twitter'
	 * - 'facebook'
	 *
	 * Pass `false` to skip auto-linking of hashtags.
	 */
	hashtag : false,

	/**
	 * @cfg {Boolean} newWindow
	 *
	 * `true` if the links should open in a new window, `false` otherwise.
	 */
	newWindow : true,

	/**
	 * @cfg {Boolean} stripPrefix
	 *
	 * `true` if 'http://' or 'https://' and/or the 'www.' should be stripped
	 * from the beginning of URL links' text, `false` otherwise.
	 */
	stripPrefix : true,

	/**
	 * @cfg {Number} truncate
	 *
	 * A number for how many characters long matched text should be truncated to inside the text of
	 * a link. If the matched text is over this number of characters, it will be truncated to this length by
	 * adding a two period ellipsis ('..') to the end of the string.
	 *
	 * For example: A url like 'http://www.yahoo.com/some/long/path/to/a/file' truncated to 25 characters might look
	 * something like this: 'yahoo.com/some/long/pat..'
	 */
	truncate : undefined,

	/**
	 * @cfg {String} className
	 *
	 * A CSS class name to add to the generated links. This class will be added to all links, as well as this class
	 * plus match suffixes for styling url/email/phone/twitter/hashtag links differently.
	 *
	 * For example, if this config is provided as "myLink", then:
	 *
	 * - URL links will have the CSS classes: "myLink myLink-url"
	 * - Email links will have the CSS classes: "myLink myLink-email", and
	 * - Twitter links will have the CSS classes: "myLink myLink-twitter"
	 * - Phone links will have the CSS classes: "myLink myLink-phone"
	 * - Hashtag links will have the CSS classes: "myLink myLink-hashtag"
	 */
	className : "",

	/**
	 * @cfg {Function} replaceFn
	 *
	 * A function to individually process each match found in the input string.
	 *
	 * See the class's description for usage.
	 *
	 * This function is called with the following parameters:
	 *
	 * @cfg {Autolinker} replaceFn.autolinker The Autolinker instance, which may be used to retrieve child objects from (such
	 *   as the instance's {@link #getTagBuilder tag builder}).
	 * @cfg {Autolinker.match.Match} replaceFn.match The Match instance which can be used to retrieve information about the
	 *   match that the `replaceFn` is currently processing. See {@link Autolinker.match.Match} subclasses for details.
	 */


	/**
	 * @private
	 * @property {Autolinker.htmlParser.HtmlParser} htmlParser
	 *
	 * The HtmlParser instance used to skip over HTML tags, while finding text nodes to process. This is lazily instantiated
	 * in the {@link #getHtmlParser} method.
	 */
	htmlParser : undefined,

	/**
	 * @private
	 * @property {Autolinker.matchParser.MatchParser} matchParser
	 *
	 * The MatchParser instance used to find matches in the text nodes of an input string passed to
	 * {@link #link}. This is lazily instantiated in the {@link #getMatchParser} method.
	 */
	matchParser : undefined,

	/**
	 * @private
	 * @property {Autolinker.AnchorTagBuilder} tagBuilder
	 *
	 * The AnchorTagBuilder instance used to build match replacement anchor tags. Note: this is lazily instantiated
	 * in the {@link #getTagBuilder} method.
	 */
	tagBuilder : undefined,

	/**
	 * Automatically links URLs, Email addresses, Phone numbers, Twitter
	 * handles, and Hashtags found in the given chunk of HTML. Does not link
	 * URLs found within HTML tags.
	 *
	 * For instance, if given the text: `You should go to http://www.yahoo.com`,
	 * then the result will be `You should go to
	 * &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
	 *
	 * This method finds the text around any HTML elements in the input
	 * `textOrHtml`, which will be the text that is processed. Any original HTML
	 * elements will be left as-is, as well as the text that is already wrapped
	 * in anchor (&lt;a&gt;) tags.
	 *
	 * @param {String} textOrHtml The HTML or text to autolink matches within
	 *   (depending on if the {@link #urls}, {@link #email}, {@link #phone},
	 *   {@link #twitter}, and {@link #hashtag} options are enabled).
	 * @return {String} The HTML, with matches automatically linked.
	 */
	link : function( textOrHtml ) {
		if( !textOrHtml ) { return ""; }  // handle `null` and `undefined`

		var htmlParser = this.getHtmlParser(),
		    htmlNodes = htmlParser.parse( textOrHtml ),
		    anchorTagStackCount = 0,  // used to only process text around anchor tags, and any inner text/html they may have
		    resultHtml = [];

		for( var i = 0, len = htmlNodes.length; i < len; i++ ) {
			var node = htmlNodes[ i ],
			    nodeType = node.getType(),
			    nodeText = node.getText();

			if( nodeType === 'element' ) {
				// Process HTML nodes in the input `textOrHtml`
				if( node.getTagName() === 'a' ) {
					if( !node.isClosing() ) {  // it's the start <a> tag
						anchorTagStackCount++;
					} else {   // it's the end </a> tag
						anchorTagStackCount = Math.max( anchorTagStackCount - 1, 0 );  // attempt to handle extraneous </a> tags by making sure the stack count never goes below 0
					}
				}
				resultHtml.push( nodeText );  // now add the text of the tag itself verbatim

			} else if( nodeType === 'entity' || nodeType === 'comment' ) {
				resultHtml.push( nodeText );  // append HTML entity nodes (such as '&nbsp;') or HTML comments (such as '<!-- Comment -->') verbatim

			} else {
				// Process text nodes in the input `textOrHtml`
				if( anchorTagStackCount === 0 ) {
					// If we're not within an <a> tag, process the text node to linkify
					var linkifiedStr = this.linkifyStr( nodeText );
					resultHtml.push( linkifiedStr );

				} else {
					// `text` is within an <a> tag, simply append the text - we do not want to autolink anything
					// already within an <a>...</a> tag
					resultHtml.push( nodeText );
				}
			}
		}

		return resultHtml.join( "" );
	},

	/**
	 * Process the text that lies in between HTML tags, performing the anchor
	 * tag replacements for the matches, and returns the string with the
	 * replacements made.
	 *
	 * This method does the actual wrapping of matches with anchor tags.
	 *
	 * @private
	 * @param {String} str The string of text to auto-link.
	 * @return {String} The text with anchor tags auto-filled.
	 */
	linkifyStr : function( str ) {
		return this.getMatchParser().replace( str, this.createMatchReturnVal, this );
	},


	/**
	 * Creates the return string value for a given match in the input string,
	 * for the {@link #linkifyStr} method.
	 *
	 * This method handles the {@link #replaceFn}, if one was provided.
	 *
	 * @private
	 * @param {Autolinker.match.Match} match The Match object that represents the match.
	 * @return {String} The string that the `match` should be replaced with. This is usually the anchor tag string, but
	 *   may be the `matchStr` itself if the match is not to be replaced.
	 */
	createMatchReturnVal : function( match ) {
		// Handle a custom `replaceFn` being provided
		var replaceFnResult;
		if( this.replaceFn ) {
			replaceFnResult = this.replaceFn.call( this, this, match );  // Autolinker instance is the context, and the first arg
		}

		if( typeof replaceFnResult === 'string' ) {
			return replaceFnResult;  // `replaceFn` returned a string, use that

		} else if( replaceFnResult === false ) {
			return match.getMatchedText();  // no replacement for the match

		} else if( replaceFnResult instanceof Autolinker.HtmlTag ) {
			return replaceFnResult.toAnchorString();

		} else {  // replaceFnResult === true, or no/unknown return value from function
			// Perform Autolinker's default anchor tag generation
			var tagBuilder = this.getTagBuilder(),
			    anchorTag = tagBuilder.build( match );  // returns an Autolinker.HtmlTag instance

			return anchorTag.toAnchorString();
		}
	},


	/**
	 * Lazily instantiates and returns the {@link #htmlParser} instance for this Autolinker instance.
	 *
	 * @protected
	 * @return {Autolinker.htmlParser.HtmlParser}
	 */
	getHtmlParser : function() {
		var htmlParser = this.htmlParser;

		if( !htmlParser ) {
			htmlParser = this.htmlParser = new Autolinker.htmlParser.HtmlParser();
		}

		return htmlParser;
	},


	/**
	 * Lazily instantiates and returns the {@link #matchParser} instance for this Autolinker instance.
	 *
	 * @protected
	 * @return {Autolinker.matchParser.MatchParser}
	 */
	getMatchParser : function() {
		var matchParser = this.matchParser;

		if( !matchParser ) {
			matchParser = this.matchParser = new Autolinker.matchParser.MatchParser( {
				urls        : this.urls,
				email       : this.email,
				twitter     : this.twitter,
				phone       : this.phone,
				hashtag     : this.hashtag,
				stripPrefix : this.stripPrefix
			} );
		}

		return matchParser;
	},


	/**
	 * Returns the {@link #tagBuilder} instance for this Autolinker instance, lazily instantiating it
	 * if it does not yet exist.
	 *
	 * This method may be used in a {@link #replaceFn} to generate the {@link Autolinker.HtmlTag HtmlTag} instance that
	 * Autolinker would normally generate, and then allow for modifications before returning it. For example:
	 *
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance
	 *             tag.setAttr( 'rel', 'nofollow' );
	 *
	 *             return tag;
	 *         }
	 *     } );
	 *
	 *     // generated html:
	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
	 *
	 * @return {Autolinker.AnchorTagBuilder}
	 */
	getTagBuilder : function() {
		var tagBuilder = this.tagBuilder;

		if( !tagBuilder ) {
			tagBuilder = this.tagBuilder = new Autolinker.AnchorTagBuilder( {
				newWindow   : this.newWindow,
				truncate    : this.truncate,
				className   : this.className
			} );
		}

		return tagBuilder;
	}

};


/**
 * Automatically links URLs, Email addresses, Phone Numbers, Twitter handles,
 * and Hashtags found in the given chunk of HTML. Does not link URLs found
 * within HTML tags.
 *
 * For instance, if given the text: `You should go to http://www.yahoo.com`,
 * then the result will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
 *
 * Example:
 *
 *     var linkedText = Autolinker.link( "Go to google.com", { newWindow: false } );
 *     // Produces: "Go to <a href="http://google.com">google.com</a>"
 *
 * @static
 * @param {String} textOrHtml The HTML or text to find matches within (depending
 *   on if the {@link #urls}, {@link #email}, {@link #phone}, {@link #twitter},
 *   and {@link #hashtag} options are enabled).
 * @param {Object} [options] Any of the configuration options for the Autolinker
 *   class, specified in an Object (map). See the class description for an
 *   example call.
 * @return {String} The HTML text, with matches automatically linked.
 */
Autolinker.link = function( textOrHtml, options ) {
	var autolinker = new Autolinker( options );
	return autolinker.link( textOrHtml );
};


// Autolinker Namespaces
Autolinker.match = {};
Autolinker.htmlParser = {};
Autolinker.matchParser = {};

/*global Autolinker */
/*jshint eqnull:true, boss:true */
/**
 * @class Autolinker.Util
 * @singleton
 *
 * A few utility methods for Autolinker.
 */
Autolinker.Util = {

	/**
	 * @property {Function} abstractMethod
	 *
	 * A function object which represents an abstract method.
	 */
	abstractMethod : function() { throw "abstract"; },


	/**
	 * @private
	 * @property {RegExp} trimRegex
	 *
	 * The regular expression used to trim the leading and trailing whitespace
	 * from a string.
	 */
	trimRegex : /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


	/**
	 * Assigns (shallow copies) the properties of `src` onto `dest`.
	 *
	 * @param {Object} dest The destination object.
	 * @param {Object} src The source object.
	 * @return {Object} The destination object (`dest`)
	 */
	assign : function( dest, src ) {
		for( var prop in src ) {
			if( src.hasOwnProperty( prop ) ) {
				dest[ prop ] = src[ prop ];
			}
		}

		return dest;
	},


	/**
	 * Extends `superclass` to create a new subclass, adding the `protoProps` to the new subclass's prototype.
	 *
	 * @param {Function} superclass The constructor function for the superclass.
	 * @param {Object} protoProps The methods/properties to add to the subclass's prototype. This may contain the
	 *   special property `constructor`, which will be used as the new subclass's constructor function.
	 * @return {Function} The new subclass function.
	 */
	extend : function( superclass, protoProps ) {
		var superclassProto = superclass.prototype;

		var F = function() {};
		F.prototype = superclassProto;

		var subclass;
		if( protoProps.hasOwnProperty( 'constructor' ) ) {
			subclass = protoProps.constructor;
		} else {
			subclass = function() { superclassProto.constructor.apply( this, arguments ); };
		}

		var subclassProto = subclass.prototype = new F();  // set up prototype chain
		subclassProto.constructor = subclass;  // fix constructor property
		subclassProto.superclass = superclassProto;

		delete protoProps.constructor;  // don't re-assign constructor property to the prototype, since a new function may have been created (`subclass`), which is now already there
		Autolinker.Util.assign( subclassProto, protoProps );

		return subclass;
	},


	/**
	 * Truncates the `str` at `len - ellipsisChars.length`, and adds the `ellipsisChars` to the
	 * end of the string (by default, two periods: '..'). If the `str` length does not exceed
	 * `len`, the string will be returned unchanged.
	 *
	 * @param {String} str The string to truncate and add an ellipsis to.
	 * @param {Number} truncateLen The length to truncate the string at.
	 * @param {String} [ellipsisChars=..] The ellipsis character(s) to add to the end of `str`
	 *   when truncated. Defaults to '..'
	 */
	ellipsis : function( str, truncateLen, ellipsisChars ) {
		if( str.length > truncateLen ) {
			ellipsisChars = ( ellipsisChars == null ) ? '..' : ellipsisChars;
			str = str.substring( 0, truncateLen - ellipsisChars.length ) + ellipsisChars;
		}
		return str;
	},


	/**
	 * Supports `Array.prototype.indexOf()` functionality for old IE (IE8 and below).
	 *
	 * @param {Array} arr The array to find an element of.
	 * @param {*} element The element to find in the array, and return the index of.
	 * @return {Number} The index of the `element`, or -1 if it was not found.
	 */
	indexOf : function( arr, element ) {
		if( Array.prototype.indexOf ) {
			return arr.indexOf( element );

		} else {
			for( var i = 0, len = arr.length; i < len; i++ ) {
				if( arr[ i ] === element ) return i;
			}
			return -1;
		}
	},



	/**
	 * Performs the functionality of what modern browsers do when `String.prototype.split()` is called
	 * with a regular expression that contains capturing parenthesis.
	 *
	 * For example:
	 *
	 *     // Modern browsers:
	 *     "a,b,c".split( /(,)/ );  // --> [ 'a', ',', 'b', ',', 'c' ]
	 *
	 *     // Old IE (including IE8):
	 *     "a,b,c".split( /(,)/ );  // --> [ 'a', 'b', 'c' ]
	 *
	 * This method emulates the functionality of modern browsers for the old IE case.
	 *
	 * @param {String} str The string to split.
	 * @param {RegExp} splitRegex The regular expression to split the input `str` on. The splitting
	 *   character(s) will be spliced into the array, as in the "modern browsers" example in the
	 *   description of this method.
	 *   Note #1: the supplied regular expression **must** have the 'g' flag specified.
	 *   Note #2: for simplicity's sake, the regular expression does not need
	 *   to contain capturing parenthesis - it will be assumed that any match has them.
	 * @return {String[]} The split array of strings, with the splitting character(s) included.
	 */
	splitAndCapture : function( str, splitRegex ) {
		if( !splitRegex.global ) throw new Error( "`splitRegex` must have the 'g' flag set" );

		var result = [],
		    lastIdx = 0,
		    match;

		while( match = splitRegex.exec( str ) ) {
			result.push( str.substring( lastIdx, match.index ) );
			result.push( match[ 0 ] );  // push the splitting char(s)

			lastIdx = match.index + match[ 0 ].length;
		}
		result.push( str.substring( lastIdx ) );

		return result;
	},


	/**
	 * Trims the leading and trailing whitespace from a string.
	 *
	 * @param {String} str The string to trim.
	 * @return {String}
	 */
	trim : function( str ) {
		return str.replace( this.trimRegex, '' );
	}

};
/*global Autolinker */
/*jshint boss:true */
/**
 * @class Autolinker.HtmlTag
 * @extends Object
 *
 * Represents an HTML tag, which can be used to easily build/modify HTML tags programmatically.
 *
 * Autolinker uses this abstraction to create HTML tags, and then write them out as strings. You may also use
 * this class in your code, especially within a {@link Autolinker#replaceFn replaceFn}.
 *
 * ## Examples
 *
 * Example instantiation:
 *
 *     var tag = new Autolinker.HtmlTag( {
 *         tagName : 'a',
 *         attrs   : { 'href': 'http://google.com', 'class': 'external-link' },
 *         innerHtml : 'Google'
 *     } );
 *
 *     tag.toAnchorString();  // <a href="http://google.com" class="external-link">Google</a>
 *
 *     // Individual accessor methods
 *     tag.getTagName();                 // 'a'
 *     tag.getAttr( 'href' );            // 'http://google.com'
 *     tag.hasClass( 'external-link' );  // true
 *
 *
 * Using mutator methods (which may be used in combination with instantiation config properties):
 *
 *     var tag = new Autolinker.HtmlTag();
 *     tag.setTagName( 'a' );
 *     tag.setAttr( 'href', 'http://google.com' );
 *     tag.addClass( 'external-link' );
 *     tag.setInnerHtml( 'Google' );
 *
 *     tag.getTagName();                 // 'a'
 *     tag.getAttr( 'href' );            // 'http://google.com'
 *     tag.hasClass( 'external-link' );  // true
 *
 *     tag.toAnchorString();  // <a href="http://google.com" class="external-link">Google</a>
 *
 *
 * ## Example use within a {@link Autolinker#replaceFn replaceFn}
 *
 *     var html = Autolinker.link( "Test google.com", {
 *         replaceFn : function( autolinker, match ) {
 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance, configured with the Match's href and anchor text
 *             tag.setAttr( 'rel', 'nofollow' );
 *
 *             return tag;
 *         }
 *     } );
 *
 *     // generated html:
 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
 *
 *
 * ## Example use with a new tag for the replacement
 *
 *     var html = Autolinker.link( "Test google.com", {
 *         replaceFn : function( autolinker, match ) {
 *             var tag = new Autolinker.HtmlTag( {
 *                 tagName : 'button',
 *                 attrs   : { 'title': 'Load URL: ' + match.getAnchorHref() },
 *                 innerHtml : 'Load URL: ' + match.getAnchorText()
 *             } );
 *
 *             return tag;
 *         }
 *     } );
 *
 *     // generated html:
 *     //   Test <button title="Load URL: http://google.com">Load URL: google.com</button>
 */
Autolinker.HtmlTag = Autolinker.Util.extend( Object, {

	/**
	 * @cfg {String} tagName
	 *
	 * The tag name. Ex: 'a', 'button', etc.
	 *
	 * Not required at instantiation time, but should be set using {@link #setTagName} before {@link #toAnchorString}
	 * is executed.
	 */

	/**
	 * @cfg {Object.<String, String>} attrs
	 *
	 * An key/value Object (map) of attributes to create the tag with. The keys are the attribute names, and the
	 * values are the attribute values.
	 */

	/**
	 * @cfg {String} innerHtml
	 *
	 * The inner HTML for the tag.
	 *
	 * Note the camel case name on `innerHtml`. Acronyms are camelCased in this utility (such as not to run into the acronym
	 * naming inconsistency that the DOM developers created with `XMLHttpRequest`). You may alternatively use {@link #innerHTML}
	 * if you prefer, but this one is recommended.
	 */

	/**
	 * @cfg {String} innerHTML
	 *
	 * Alias of {@link #innerHtml}, accepted for consistency with the browser DOM api, but prefer the camelCased version
	 * for acronym names.
	 */


	/**
	 * @protected
	 * @property {RegExp} whitespaceRegex
	 *
	 * Regular expression used to match whitespace in a string of CSS classes.
	 */
	whitespaceRegex : /\s+/,


	/**
	 * @constructor
	 * @param {Object} [cfg] The configuration properties for this class, in an Object (map)
	 */
	constructor : function( cfg ) {
		Autolinker.Util.assign( this, cfg );

		this.innerHtml = this.innerHtml || this.innerHTML;  // accept either the camelCased form or the fully capitalized acronym
	},


	/**
	 * Sets the tag name that will be used to generate the tag with.
	 *
	 * @param {String} tagName
	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
	 */
	setTagName : function( tagName ) {
		this.tagName = tagName;
		return this;
	},


	/**
	 * Retrieves the tag name.
	 *
	 * @return {String}
	 */
	getTagName : function() {
		return this.tagName || "";
	},


	/**
	 * Sets an attribute on the HtmlTag.
	 *
	 * @param {String} attrName The attribute name to set.
	 * @param {String} attrValue The attribute value to set.
	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
	 */
	setAttr : function( attrName, attrValue ) {
		var tagAttrs = this.getAttrs();
		tagAttrs[ attrName ] = attrValue;

		return this;
	},


	/**
	 * Retrieves an attribute from the HtmlTag. If the attribute does not exist, returns `undefined`.
	 *
	 * @param {String} name The attribute name to retrieve.
	 * @return {String} The attribute's value, or `undefined` if it does not exist on the HtmlTag.
	 */
	getAttr : function( attrName ) {
		return this.getAttrs()[ attrName ];
	},


	/**
	 * Sets one or more attributes on the HtmlTag.
	 *
	 * @param {Object.<String, String>} attrs A key/value Object (map) of the attributes to set.
	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
	 */
	setAttrs : function( attrs ) {
		var tagAttrs = this.getAttrs();
		Autolinker.Util.assign( tagAttrs, attrs );

		return this;
	},


	/**
	 * Retrieves the attributes Object (map) for the HtmlTag.
	 *
	 * @return {Object.<String, String>} A key/value object of the attributes for the HtmlTag.
	 */
	getAttrs : function() {
		return this.attrs || ( this.attrs = {} );
	},


	/**
	 * Sets the provided `cssClass`, overwriting any current CSS classes on the HtmlTag.
	 *
	 * @param {String} cssClass One or more space-separated CSS classes to set (overwrite).
	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
	 */
	setClass : function( cssClass ) {
		return this.setAttr( 'class', cssClass );
	},


	/**
	 * Convenience method to add one or more CSS classes to the HtmlTag. Will not add duplicate CSS classes.
	 *
	 * @param {String} cssClass One or more space-separated CSS classes to add.
	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
	 */
	addClass : function( cssClass ) {
		var classAttr = this.getClass(),
		    whitespaceRegex = this.whitespaceRegex,
		    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
		    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
		    newClasses = cssClass.split( whitespaceRegex ),
		    newClass;

		while( newClass = newClasses.shift() ) {
			if( indexOf( classes, newClass ) === -1 ) {
				classes.push( newClass );
			}
		}

		this.getAttrs()[ 'class' ] = classes.join( " " );
		return this;
	},


	/**
	 * Convenience method to remove one or more CSS classes from the HtmlTag.
	 *
	 * @param {String} cssClass One or more space-separated CSS classes to remove.
	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
	 */
	removeClass : function( cssClass ) {
		var classAttr = this.getClass(),
		    whitespaceRegex = this.whitespaceRegex,
		    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
		    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
		    removeClasses = cssClass.split( whitespaceRegex ),
		    removeClass;

		while( classes.length && ( removeClass = removeClasses.shift() ) ) {
			var idx = indexOf( classes, removeClass );
			if( idx !== -1 ) {
				classes.splice( idx, 1 );
			}
		}

		this.getAttrs()[ 'class' ] = classes.join( " " );
		return this;
	},


	/**
	 * Convenience method to retrieve the CSS class(es) for the HtmlTag, which will each be separated by spaces when
	 * there are multiple.
	 *
	 * @return {String}
	 */
	getClass : function() {
		return this.getAttrs()[ 'class' ] || "";
	},


	/**
	 * Convenience method to check if the tag has a CSS class or not.
	 *
	 * @param {String} cssClass The CSS class to check for.
	 * @return {Boolean} `true` if the HtmlTag has the CSS class, `false` otherwise.
	 */
	hasClass : function( cssClass ) {
		return ( ' ' + this.getClass() + ' ' ).indexOf( ' ' + cssClass + ' ' ) !== -1;
	},


	/**
	 * Sets the inner HTML for the tag.
	 *
	 * @param {String} html The inner HTML to set.
	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
	 */
	setInnerHtml : function( html ) {
		this.innerHtml = html;

		return this;
	},


	/**
	 * Retrieves the inner HTML for the tag.
	 *
	 * @return {String}
	 */
	getInnerHtml : function() {
		return this.innerHtml || "";
	},


	/**
	 * Override of superclass method used to generate the HTML string for the tag.
	 *
	 * @return {String}
	 */
	toAnchorString : function() {
		var tagName = this.getTagName(),
		    attrsStr = this.buildAttrsStr();

		attrsStr = ( attrsStr ) ? ' ' + attrsStr : '';  // prepend a space if there are actually attributes

		return [ '<', tagName, attrsStr, '>', this.getInnerHtml(), '</', tagName, '>' ].join( "" );
	},


	/**
	 * Support method for {@link #toAnchorString}, returns the string space-separated key="value" pairs, used to populate
	 * the stringified HtmlTag.
	 *
	 * @protected
	 * @return {String} Example return: `attr1="value1" attr2="value2"`
	 */
	buildAttrsStr : function() {
		if( !this.attrs ) return "";  // no `attrs` Object (map) has been set, return empty string

		var attrs = this.getAttrs(),
		    attrsArr = [];

		for( var prop in attrs ) {
			if( attrs.hasOwnProperty( prop ) ) {
				attrsArr.push( prop + '="' + attrs[ prop ] + '"' );
			}
		}
		return attrsArr.join( " " );
	}

} );

/*global Autolinker */
/*jshint sub:true */
/**
 * @protected
 * @class Autolinker.AnchorTagBuilder
 * @extends Object
 *
 * Builds anchor (&lt;a&gt;) tags for the Autolinker utility when a match is found.
 *
 * Normally this class is instantiated, configured, and used internally by an {@link Autolinker} instance, but may
 * actually be retrieved in a {@link Autolinker#replaceFn replaceFn} to create {@link Autolinker.HtmlTag HtmlTag} instances
 * which may be modified before returning from the {@link Autolinker#replaceFn replaceFn}. For example:
 *
 *     var html = Autolinker.link( "Test google.com", {
 *         replaceFn : function( autolinker, match ) {
 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance
 *             tag.setAttr( 'rel', 'nofollow' );
 *
 *             return tag;
 *         }
 *     } );
 *
 *     // generated html:
 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
 */
Autolinker.AnchorTagBuilder = Autolinker.Util.extend( Object, {

	/**
	 * @cfg {Boolean} newWindow
	 * @inheritdoc Autolinker#newWindow
	 */

	/**
	 * @cfg {Number} truncate
	 * @inheritdoc Autolinker#truncate
	 */

	/**
	 * @cfg {String} className
	 * @inheritdoc Autolinker#className
	 */


	/**
	 * @constructor
	 * @param {Object} [cfg] The configuration options for the AnchorTagBuilder instance, specified in an Object (map).
	 */
	constructor : function( cfg ) {
		Autolinker.Util.assign( this, cfg );
	},


	/**
	 * Generates the actual anchor (&lt;a&gt;) tag to use in place of the
	 * matched text, via its `match` object.
	 *
	 * @param {Autolinker.match.Match} match The Match instance to generate an
	 *   anchor tag from.
	 * @return {Autolinker.HtmlTag} The HtmlTag instance for the anchor tag.
	 */
	build : function( match ) {
		var tag = new Autolinker.HtmlTag( {
			tagName   : 'a',
			attrs     : this.createAttrs( match.getType(), match.getAnchorHref() ),
			innerHtml : this.processAnchorText( match.getAnchorText() )
		} );

		return tag;
	},


	/**
	 * Creates the Object (map) of the HTML attributes for the anchor (&lt;a&gt;)
	 *   tag being generated.
	 *
	 * @protected
	 * @param {"url"/"email"/"phone"/"twitter"/"hashtag"} matchType The type of
	 *   match that an anchor tag is being generated for.
	 * @param {String} href The href for the anchor tag.
	 * @return {Object} A key/value Object (map) of the anchor tag's attributes.
	 */
	createAttrs : function( matchType, anchorHref ) {
		var attrs = {
			'href' : anchorHref  // we'll always have the `href` attribute
		};

		var cssClass = this.createCssClass( matchType );
		if( cssClass ) {
			attrs[ 'class' ] = cssClass;
		}
		if( this.newWindow ) {
			attrs[ 'target' ] = "_blank";
		}

		return attrs;
	},


	/**
	 * Creates the CSS class that will be used for a given anchor tag, based on
	 * the `matchType` and the {@link #className} config.
	 *
	 * @private
	 * @param {"url"/"email"/"phone"/"twitter"/"hashtag"} matchType The type of
	 *   match that an anchor tag is being generated for.
	 * @return {String} The CSS class string for the link. Example return:
	 *   "myLink myLink-url". If no {@link #className} was configured, returns
	 *   an empty string.
	 */
	createCssClass : function( matchType ) {
		var className = this.className;

		if( !className )
			return "";
		else
			return className + " " + className + "-" + matchType;  // ex: "myLink myLink-url", "myLink myLink-email", "myLink myLink-phone", "myLink myLink-twitter", or "myLink myLink-hashtag"
	},


	/**
	 * Processes the `anchorText` by truncating the text according to the
	 * {@link #truncate} config.
	 *
	 * @private
	 * @param {String} anchorText The anchor tag's text (i.e. what will be
	 *   displayed).
	 * @return {String} The processed `anchorText`.
	 */
	processAnchorText : function( anchorText ) {
		anchorText = this.doTruncate( anchorText );

		return anchorText;
	},


	/**
	 * Performs the truncation of the `anchorText`, if the `anchorText` is
	 * longer than the {@link #truncate} option. Truncates the text to 2
	 * characters fewer than the {@link #truncate} option, and adds ".." to the
	 * end.
	 *
	 * @private
	 * @param {String} text The anchor tag's text (i.e. what will be displayed).
	 * @return {String} The truncated anchor text.
	 */
	doTruncate : function( anchorText ) {
		return Autolinker.Util.ellipsis( anchorText, this.truncate || Number.POSITIVE_INFINITY );
	}

} );
/*global Autolinker */
/**
 * @private
 * @class Autolinker.htmlParser.HtmlParser
 * @extends Object
 *
 * An HTML parser implementation which simply walks an HTML string and returns an array of
 * {@link Autolinker.htmlParser.HtmlNode HtmlNodes} that represent the basic HTML structure of the input string.
 *
 * Autolinker uses this to only link URLs/emails/Twitter handles within text nodes, effectively ignoring / "walking
 * around" HTML tags.
 */
Autolinker.htmlParser.HtmlParser = Autolinker.Util.extend( Object, {

	/**
	 * @private
	 * @property {RegExp} htmlRegex
	 *
	 * The regular expression used to pull out HTML tags from a string. Handles namespaced HTML tags and
	 * attribute names, as specified by http://www.w3.org/TR/html-markup/syntax.html.
	 *
	 * Capturing groups:
	 *
	 * 1. The "!DOCTYPE" tag name, if a tag is a &lt;!DOCTYPE&gt; tag.
	 * 2. If it is an end tag, this group will have the '/'.
	 * 3. If it is a comment tag, this group will hold the comment text (i.e.
	 *    the text inside the `&lt;!--` and `--&gt;`.
	 * 4. The tag name for all tags (other than the &lt;!DOCTYPE&gt; tag)
	 */
	htmlRegex : (function() {
		var commentTagRegex = /!--([\s\S]+?)--/,
		    tagNameRegex = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
		    attrNameRegex = /[^\s\0"'>\/=\x01-\x1F\x7F]+/,   // the unicode range accounts for excluding control chars, and the delete char
		    attrValueRegex = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/, // double quoted, single quoted, or unquoted attribute values
		    nameEqualsValueRegex = attrNameRegex.source + '(?:\\s*=\\s*' + attrValueRegex.source + ')?';  // optional '=[value]'

		return new RegExp( [
			// for <!DOCTYPE> tag. Ex: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">)
			'(?:',
				'<(!DOCTYPE)',  // *** Capturing Group 1 - If it's a doctype tag

					// Zero or more attributes following the tag name
					'(?:',
						'\\s+',  // one or more whitespace chars before an attribute

						// Either:
						// A. attr="value", or
						// B. "value" alone (To cover example doctype tag: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">)
						'(?:', nameEqualsValueRegex, '|', attrValueRegex.source + ')',
					')*',
				'>',
			')',

			'|',

			// All other HTML tags (i.e. tags that are not <!DOCTYPE>)
			'(?:',
				'<(/)?',  // Beginning of a tag or comment. Either '<' for a start tag, or '</' for an end tag.
				          // *** Capturing Group 2: The slash or an empty string. Slash ('/') for end tag, empty string for start or self-closing tag.

					'(?:',
						commentTagRegex.source,  // *** Capturing Group 3 - A Comment Tag's Text

						'|',

						'(?:',

							// *** Capturing Group 4 - The tag name
							'(' + tagNameRegex.source + ')',

							// Zero or more attributes following the tag name
							'(?:',
								'\\s+',                // one or more whitespace chars before an attribute
								nameEqualsValueRegex,  // attr="value" (with optional ="value" part)
							')*',

							'\\s*/?',  // any trailing spaces and optional '/' before the closing '>'

						')',
					')',
				'>',
			')'
		].join( "" ), 'gi' );
	} )(),

	/**
	 * @private
	 * @property {RegExp} htmlCharacterEntitiesRegex
	 *
	 * The regular expression that matches common HTML character entities.
	 *
	 * Ignoring &amp; as it could be part of a query string -- handling it separately.
	 */
	htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,


	/**
	 * Parses an HTML string and returns a simple array of {@link Autolinker.htmlParser.HtmlNode HtmlNodes}
	 * to represent the HTML structure of the input string.
	 *
	 * @param {String} html The HTML to parse.
	 * @return {Autolinker.htmlParser.HtmlNode[]}
	 */
	parse : function( html ) {
		var htmlRegex = this.htmlRegex,
		    currentResult,
		    lastIndex = 0,
		    textAndEntityNodes,
		    nodes = [];  // will be the result of the method

		while( ( currentResult = htmlRegex.exec( html ) ) !== null ) {
			var tagText = currentResult[ 0 ],
			    commentText = currentResult[ 3 ], // if we've matched a comment
			    tagName = currentResult[ 1 ] || currentResult[ 4 ],  // The <!DOCTYPE> tag (ex: "!DOCTYPE"), or another tag (ex: "a" or "img")
			    isClosingTag = !!currentResult[ 2 ],
			    inBetweenTagsText = html.substring( lastIndex, currentResult.index );

			// Push TextNodes and EntityNodes for any text found between tags
			if( inBetweenTagsText ) {
				textAndEntityNodes = this.parseTextAndEntityNodes( inBetweenTagsText );
				nodes.push.apply( nodes, textAndEntityNodes );
			}

			// Push the CommentNode or ElementNode
			if( commentText ) {
				nodes.push( this.createCommentNode( tagText, commentText ) );
			} else {
				nodes.push( this.createElementNode( tagText, tagName, isClosingTag ) );
			}

			lastIndex = currentResult.index + tagText.length;
		}

		// Process any remaining text after the last HTML element. Will process all of the text if there were no HTML elements.
		if( lastIndex < html.length ) {
			var text = html.substring( lastIndex );

			// Push TextNodes and EntityNodes for any text found between tags
			if( text ) {
				textAndEntityNodes = this.parseTextAndEntityNodes( text );
				nodes.push.apply( nodes, textAndEntityNodes );
			}
		}

		return nodes;
	},


	/**
	 * Parses text and HTML entity nodes from a given string. The input string
	 * should not have any HTML tags (elements) within it.
	 *
	 * @private
	 * @param {String} text The text to parse.
	 * @return {Autolinker.htmlParser.HtmlNode[]} An array of HtmlNodes to
	 *   represent the {@link Autolinker.htmlParser.TextNode TextNodes} and
	 *   {@link Autolinker.htmlParser.EntityNode EntityNodes} found.
	 */
	parseTextAndEntityNodes : function( text ) {
		var nodes = [],
		    textAndEntityTokens = Autolinker.Util.splitAndCapture( text, this.htmlCharacterEntitiesRegex );  // split at HTML entities, but include the HTML entities in the results array

		// Every even numbered token is a TextNode, and every odd numbered token is an EntityNode
		// For example: an input `text` of "Test &quot;this&quot; today" would turn into the
		//   `textAndEntityTokens`: [ 'Test ', '&quot;', 'this', '&quot;', ' today' ]
		for( var i = 0, len = textAndEntityTokens.length; i < len; i += 2 ) {
			var textToken = textAndEntityTokens[ i ],
			    entityToken = textAndEntityTokens[ i + 1 ];

			if( textToken ) nodes.push( this.createTextNode( textToken ) );
			if( entityToken ) nodes.push( this.createEntityNode( entityToken ) );
		}
		return nodes;
	},


	/**
	 * Factory method to create an {@link Autolinker.htmlParser.CommentNode CommentNode}.
	 *
	 * @private
	 * @param {String} tagText The full text of the tag (comment) that was
	 *   matched, including its &lt;!-- and --&gt;.
	 * @param {String} comment The full text of the comment that was matched.
	 */
	createCommentNode : function( tagText, commentText ) {
		return new Autolinker.htmlParser.CommentNode( {
			text: tagText,
			comment: Autolinker.Util.trim( commentText )
		} );
	},


	/**
	 * Factory method to create an {@link Autolinker.htmlParser.ElementNode ElementNode}.
	 *
	 * @private
	 * @param {String} tagText The full text of the tag (element) that was
	 *   matched, including its attributes.
	 * @param {String} tagName The name of the tag. Ex: An &lt;img&gt; tag would
	 *   be passed to this method as "img".
	 * @param {Boolean} isClosingTag `true` if it's a closing tag, false
	 *   otherwise.
	 * @return {Autolinker.htmlParser.ElementNode}
	 */
	createElementNode : function( tagText, tagName, isClosingTag ) {
		return new Autolinker.htmlParser.ElementNode( {
			text    : tagText,
			tagName : tagName.toLowerCase(),
			closing : isClosingTag
		} );
	},


	/**
	 * Factory method to create a {@link Autolinker.htmlParser.EntityNode EntityNode}.
	 *
	 * @private
	 * @param {String} text The text that was matched for the HTML entity (such
	 *   as '&amp;nbsp;').
	 * @return {Autolinker.htmlParser.EntityNode}
	 */
	createEntityNode : function( text ) {
		return new Autolinker.htmlParser.EntityNode( { text: text } );
	},


	/**
	 * Factory method to create a {@link Autolinker.htmlParser.TextNode TextNode}.
	 *
	 * @private
	 * @param {String} text The text that was matched.
	 * @return {Autolinker.htmlParser.TextNode}
	 */
	createTextNode : function( text ) {
		return new Autolinker.htmlParser.TextNode( { text: text } );
	}

} );
/*global Autolinker */
/**
 * @abstract
 * @class Autolinker.htmlParser.HtmlNode
 *
 * Represents an HTML node found in an input string. An HTML node is one of the
 * following:
 *
 * 1. An {@link Autolinker.htmlParser.ElementNode ElementNode}, which represents
 *    HTML tags.
 * 2. A {@link Autolinker.htmlParser.CommentNode CommentNode}, which represents
 *    HTML comments.
 * 3. A {@link Autolinker.htmlParser.TextNode TextNode}, which represents text
 *    outside or within HTML tags.
 * 4. A {@link Autolinker.htmlParser.EntityNode EntityNode}, which represents
 *    one of the known HTML entities that Autolinker looks for. This includes
 *    common ones such as &amp;quot; and &amp;nbsp;
 */
Autolinker.htmlParser.HtmlNode = Autolinker.Util.extend( Object, {

	/**
	 * @cfg {String} text (required)
	 *
	 * The original text that was matched for the HtmlNode.
	 *
	 * - In the case of an {@link Autolinker.htmlParser.ElementNode ElementNode},
	 *   this will be the tag's text.
	 * - In the case of an {@link Autolinker.htmlParser.CommentNode CommentNode},
	 *   this will be the comment's text.
	 * - In the case of a {@link Autolinker.htmlParser.TextNode TextNode}, this
	 *   will be the text itself.
	 * - In the case of a {@link Autolinker.htmlParser.EntityNode EntityNode},
	 *   this will be the text of the HTML entity.
	 */
	text : "",


	/**
	 * @constructor
	 * @param {Object} cfg The configuration properties for the Match instance,
	 * specified in an Object (map).
	 */
	constructor : function( cfg ) {
		Autolinker.Util.assign( this, cfg );
	},


	/**
	 * Returns a string name for the type of node that this class represents.
	 *
	 * @abstract
	 * @return {String}
	 */
	getType : Autolinker.Util.abstractMethod,


	/**
	 * Retrieves the {@link #text} for the HtmlNode.
	 *
	 * @return {String}
	 */
	getText : function() {
		return this.text;
	}

} );
/*global Autolinker */
/**
 * @class Autolinker.htmlParser.CommentNode
 * @extends Autolinker.htmlParser.HtmlNode
 *
 * Represents an HTML comment node that has been parsed by the
 * {@link Autolinker.htmlParser.HtmlParser}.
 *
 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more
 * details.
 */
Autolinker.htmlParser.CommentNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {

	/**
	 * @cfg {String} comment (required)
	 *
	 * The text inside the comment tag. This text is stripped of any leading or
	 * trailing whitespace.
	 */
	comment : '',


	/**
	 * Returns a string name for the type of node that this class represents.
	 *
	 * @return {String}
	 */
	getType : function() {
		return 'comment';
	},


	/**
	 * Returns the comment inside the comment tag.
	 *
	 * @return {String}
	 */
	getComment : function() {
		return this.comment;
	}

} );
/*global Autolinker */
/**
 * @class Autolinker.htmlParser.ElementNode
 * @extends Autolinker.htmlParser.HtmlNode
 *
 * Represents an HTML element node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
 *
 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more
 * details.
 */
Autolinker.htmlParser.ElementNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {

	/**
	 * @cfg {String} tagName (required)
	 *
	 * The name of the tag that was matched.
	 */
	tagName : '',

	/**
	 * @cfg {Boolean} closing (required)
	 *
	 * `true` if the element (tag) is a closing tag, `false` if its an opening
	 * tag.
	 */
	closing : false,


	/**
	 * Returns a string name for the type of node that this class represents.
	 *
	 * @return {String}
	 */
	getType : function() {
		return 'element';
	},


	/**
	 * Returns the HTML element's (tag's) name. Ex: for an &lt;img&gt; tag,
	 * returns "img".
	 *
	 * @return {String}
	 */
	getTagName : function() {
		return this.tagName;
	},


	/**
	 * Determines if the HTML element (tag) is a closing tag. Ex: &lt;div&gt;
	 * returns `false`, while &lt;/div&gt; returns `true`.
	 *
	 * @return {Boolean}
	 */
	isClosing : function() {
		return this.closing;
	}

} );
/*global Autolinker */
/**
 * @class Autolinker.htmlParser.EntityNode
 * @extends Autolinker.htmlParser.HtmlNode
 *
 * Represents a known HTML entity node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
 * Ex: '&amp;nbsp;', or '&amp#160;' (which will be retrievable from the {@link #getText}
 * method.
 *
 * Note that this class will only be returned from the HtmlParser for the set of
 * checked HTML entity nodes  defined by the {@link Autolinker.htmlParser.HtmlParser#htmlCharacterEntitiesRegex}.
 *
 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more
 * details.
 */
Autolinker.htmlParser.EntityNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {

	/**
	 * Returns a string name for the type of node that this class represents.
	 *
	 * @return {String}
	 */
	getType : function() {
		return 'entity';
	}

} );
/*global Autolinker */
/**
 * @class Autolinker.htmlParser.TextNode
 * @extends Autolinker.htmlParser.HtmlNode
 *
 * Represents a text node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
 *
 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more
 * details.
 */
Autolinker.htmlParser.TextNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {

	/**
	 * Returns a string name for the type of node that this class represents.
	 *
	 * @return {String}
	 */
	getType : function() {
		return 'text';
	}

} );
/*global Autolinker */
/**
 * @private
 * @class Autolinker.matchParser.MatchParser
 * @extends Object
 *
 * Used by Autolinker to parse potential matches, given an input string of text.
 *
 * The MatchParser is fed a non-HTML string in order to search for matches.
 * Autolinker first uses the {@link Autolinker.htmlParser.HtmlParser} to "walk
 * around" HTML tags, and then the text around the HTML tags is passed into the
 * MatchParser in order to find the actual matches.
 */
Autolinker.matchParser.MatchParser = Autolinker.Util.extend( Object, {

	/**
	 * @cfg {Boolean} urls
	 * @inheritdoc Autolinker#urls
	 */
	urls : true,

	/**
	 * @cfg {Boolean} email
	 * @inheritdoc Autolinker#email
	 */
	email : true,

	/**
	 * @cfg {Boolean} twitter
	 * @inheritdoc Autolinker#twitter
	 */
	twitter : true,

	/**
	 * @cfg {Boolean} phone
	 * @inheritdoc Autolinker#phone
	 */
	phone: true,

	/**
	 * @cfg {Boolean/String} hashtag
	 * @inheritdoc Autolinker#hashtag
	 */
	hashtag : false,

	/**
	 * @cfg {Boolean} stripPrefix
	 * @inheritdoc Autolinker#stripPrefix
	 */
	stripPrefix : true,


	/**
	 * @private
	 * @property {RegExp} matcherRegex
	 *
	 * The regular expression that matches URLs, email addresses, phone #s,
	 * Twitter handles, and Hashtags.
	 *
	 * This regular expression has the following capturing groups:
	 *
	 * 1.  Group that is used to determine if there is a Twitter handle match
	 *     (i.e. \@someTwitterUser). Simply check for its existence to determine
	 *     if there is a Twitter handle match. The next couple of capturing
	 *     groups give information about the Twitter handle match.
	 * 2.  The whitespace character before the \@sign in a Twitter handle. This
	 *     is needed because there are no lookbehinds in JS regular expressions,
	 *     and can be used to reconstruct the original string in a replace().
	 * 3.  The Twitter handle itself in a Twitter match. If the match is
	 *     '@someTwitterUser', the handle is 'someTwitterUser'.
	 * 4.  Group that matches an email address. Used to determine if the match
	 *     is an email address, as well as holding the full address. Ex:
	 *     'me@my.com'
	 * 5.  Group that matches a URL in the input text. Ex: 'http://google.com',
	 *     'www.google.com', or just 'google.com'. This also includes a path,
	 *     url parameters, or hash anchors. Ex: google.com/path/to/file?q1=1&q2=2#myAnchor
	 * 6.  Group that matches a protocol URL (i.e. 'http://google.com'). This is
	 *     used to match protocol URLs with just a single word, like 'http://localhost',
	 *     where we won't double check that the domain name has at least one '.'
	 *     in it.
	 * 7.  A protocol-relative ('//') match for the case of a 'www.' prefixed
	 *     URL. Will be an empty string if it is not a protocol-relative match.
	 *     We need to know the character before the '//' in order to determine
	 *     if it is a valid match or the // was in a string we don't want to
	 *     auto-link.
	 * 8.  A protocol-relative ('//') match for the case of a known TLD prefixed
	 *     URL. Will be an empty string if it is not a protocol-relative match.
	 *     See #6 for more info.
	 * 9.  Group that is used to determine if there is a phone number match. The
	 *     next 3 groups give segments of the phone number.
	 * 10. Group that is used to determine if there is a Hashtag match
	 *     (i.e. \#someHashtag). Simply check for its existence to determine if
	 *     there is a Hashtag match. The next couple of capturing groups give
	 *     information about the Hashtag match.
	 * 11. The whitespace character before the #sign in a Hashtag handle. This
	 *     is needed because there are no look-behinds in JS regular
	 *     expressions, and can be used to reconstruct the original string in a
	 *     replace().
	 * 12. The Hashtag itself in a Hashtag match. If the match is
	 *     '#someHashtag', the hashtag is 'someHashtag'.
	 */
	matcherRegex : (function() {
		var twitterRegex = /(^|[^\w])@(\w{1,15})/,              // For matching a twitter handle. Ex: @gregory_jacobs

		    hashtagRegex = /(^|[^\w])#(\w{1,139})/,              // For matching a Hashtag. Ex: #games

		    emailRegex = /(?:[\-;:&=\+\$,\w\.]+@)/,             // something@ for email addresses (a.k.a. local-part)
		    phoneRegex = /(?:\+?\d{1,3}[-\s.])?\(?\d{3}\)?[-\s.]?\d{3}[-\s.]\d{4}/,  // ex: (123) 456-7890, 123 456 7890, 123-456-7890, etc.
		    protocolRegex = /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,  // match protocol, allow in format "http://" or "mailto:". However, do not match the first part of something like 'link:http://www.google.com' (i.e. don't match "link:"). Also, make sure we don't interpret 'google.com:8000' as if 'google.com' was a protocol here (i.e. ignore a trailing port number in this regex)
		    wwwRegex = /(?:www\.)/,                             // starting with 'www.'
		    domainNameRegex = /[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,  // anything looking at all like a domain, non-unicode domains, not ending in a period
		    tldRegex = /\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,   // match our known top level domains (TLDs)

		    // Allow optional path, query string, and hash anchor, not ending in the following characters: "?!:,.;"
		    // http://blog.codinghorror.com/the-problem-with-urls/
		    urlSuffixRegex = /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;

		return new RegExp( [
			'(',  // *** Capturing group $1, which can be used to check for a twitter handle match. Use group $3 for the actual twitter handle though. $2 may be used to reconstruct the original string in a replace()
				// *** Capturing group $2, which matches the whitespace character before the '@' sign (needed because of no lookbehinds), and
				// *** Capturing group $3, which matches the actual twitter handle
				twitterRegex.source,
			')',

			'|',

			'(',  // *** Capturing group $4, which is used to determine an email match
				emailRegex.source,
				domainNameRegex.source,
				tldRegex.source,
			')',

			'|',

			'(',  // *** Capturing group $5, which is used to match a URL
				'(?:', // parens to cover match for protocol (optional), and domain
					'(',  // *** Capturing group $6, for a protocol-prefixed url (ex: http://google.com)
						protocolRegex.source,
						domainNameRegex.source,
					')',

					'|',

					'(?:',  // non-capturing paren for a 'www.' prefixed url (ex: www.google.com)
						'(.?//)?',  // *** Capturing group $7 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
						wwwRegex.source,
						domainNameRegex.source,
					')',

					'|',

					'(?:',  // non-capturing paren for known a TLD url (ex: google.com)
						'(.?//)?',  // *** Capturing group $8 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
						domainNameRegex.source,
						tldRegex.source,
					')',
				')',

				'(?:' + urlSuffixRegex.source + ')?',  // match for path, query string, and/or hash anchor - optional
			')',

			'|',

			// this setup does not scale well for open extension :( Need to rethink design of autolinker...
			// ***  Capturing group $9, which matches a (USA for now) phone number
			'(',
				phoneRegex.source,
			')',

			'|',

			'(',  // *** Capturing group $10, which can be used to check for a Hashtag match. Use group $12 for the actual Hashtag though. $11 may be used to reconstruct the original string in a replace()
				// *** Capturing group $11, which matches the whitespace character before the '#' sign (needed because of no lookbehinds), and
				// *** Capturing group $12, which matches the actual Hashtag
				hashtagRegex.source,
			')'
		].join( "" ), 'gi' );
	} )(),

	/**
	 * @private
	 * @property {RegExp} charBeforeProtocolRelMatchRegex
	 *
	 * The regular expression used to retrieve the character before a
	 * protocol-relative URL match.
	 *
	 * This is used in conjunction with the {@link #matcherRegex}, which needs
	 * to grab the character before a protocol-relative '//' due to the lack of
	 * a negative look-behind in JavaScript regular expressions. The character
	 * before the match is stripped from the URL.
	 */
	charBeforeProtocolRelMatchRegex : /^(.)?\/\//,

	/**
	 * @private
	 * @property {Autolinker.MatchValidator} matchValidator
	 *
	 * The MatchValidator object, used to filter out any false positives from
	 * the {@link #matcherRegex}. See {@link Autolinker.MatchValidator} for details.
	 */


	/**
	 * @constructor
	 * @param {Object} [cfg] The configuration options for the AnchorTagBuilder
	 * instance, specified in an Object (map).
	 */
	constructor : function( cfg ) {
		Autolinker.Util.assign( this, cfg );

		this.matchValidator = new Autolinker.MatchValidator();
	},


	/**
	 * Parses the input `text` to search for matches, and calls the `replaceFn`
	 * to allow replacements of the matches. Returns the `text` with matches
	 * replaced.
	 *
	 * @param {String} text The text to search and repace matches in.
	 * @param {Function} replaceFn The iterator function to handle the
	 *   replacements. The function takes a single argument, a {@link Autolinker.match.Match}
	 *   object, and should return the text that should make the replacement.
	 * @param {Object} [contextObj=window] The context object ("scope") to run
	 *   the `replaceFn` in.
	 * @return {String}
	 */
	replace : function( text, replaceFn, contextObj ) {
		var me = this;  // for closure

		return text.replace( this.matcherRegex, function( matchStr, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 ) {
			var matchDescObj = me.processCandidateMatch( matchStr, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 );  // "match description" object

			// Return out with no changes for match types that are disabled (url,
			// email, phone, etc.), or for matches that are invalid (false
			// positives from the matcherRegex, which can't use look-behinds
			// since they are unavailable in JS).
			if( !matchDescObj ) {
				return matchStr;

			} else {
				// Generate replacement text for the match from the `replaceFn`
				var replaceStr = replaceFn.call( contextObj, matchDescObj.match );
				return matchDescObj.prefixStr + replaceStr + matchDescObj.suffixStr;
			}
		} );
	},


	/**
	 * Processes a candidate match from the {@link #matcherRegex}.
	 *
	 * Not all matches found by the regex are actual URL/Email/Phone/Twitter/Hashtag
	 * matches, as determined by the {@link #matchValidator}. In this case, the
	 * method returns `null`. Otherwise, a valid Object with `prefixStr`,
	 * `match`, and `suffixStr` is returned.
	 *
	 * @private
	 * @param {String} matchStr The full match that was found by the
	 *   {@link #matcherRegex}.
	 * @param {String} twitterMatch The matched text of a Twitter handle, if the
	 *   match is a Twitter match.
	 * @param {String} twitterHandlePrefixWhitespaceChar The whitespace char
	 *   before the @ sign in a Twitter handle match. This is needed because of
	 *   no lookbehinds in JS regexes, and is need to re-include the character
	 *   for the anchor tag replacement.
	 * @param {String} twitterHandle The actual Twitter user (i.e the word after
	 *   the @ sign in a Twitter match).
	 * @param {String} emailAddressMatch The matched email address for an email
	 *   address match.
	 * @param {String} urlMatch The matched URL string for a URL match.
	 * @param {String} protocolUrlMatch The match URL string for a protocol
	 *   match. Ex: 'http://yahoo.com'. This is used to match something like
	 *   'http://localhost', where we won't double check that the domain name
	 *   has at least one '.' in it.
	 * @param {String} wwwProtocolRelativeMatch The '//' for a protocol-relative
	 *   match from a 'www' url, with the character that comes before the '//'.
	 * @param {String} tldProtocolRelativeMatch The '//' for a protocol-relative
	 *   match from a TLD (top level domain) match, with the character that
	 *   comes before the '//'.
	 * @param {String} phoneMatch The matched text of a phone number
	 * @param {String} hashtagMatch The matched text of a Twitter
	 *   Hashtag, if the match is a Hashtag match.
	 * @param {String} hashtagPrefixWhitespaceChar The whitespace char
	 *   before the # sign in a Hashtag match. This is needed because of no
	 *   lookbehinds in JS regexes, and is need to re-include the character for
	 *   the anchor tag replacement.
	 * @param {String} hashtag The actual Hashtag (i.e the word
	 *   after the # sign in a Hashtag match).
	 *
	 * @return {Object} A "match description object". This will be `null` if the
	 *   match was invalid, or if a match type is disabled. Otherwise, this will
	 *   be an Object (map) with the following properties:
	 * @return {String} return.prefixStr The char(s) that should be prepended to
	 *   the replacement string. These are char(s) that were needed to be
	 *   included from the regex match that were ignored by processing code, and
	 *   should be re-inserted into the replacement stream.
	 * @return {String} return.suffixStr The char(s) that should be appended to
	 *   the replacement string. These are char(s) that were needed to be
	 *   included from the regex match that were ignored by processing code, and
	 *   should be re-inserted into the replacement stream.
	 * @return {Autolinker.match.Match} return.match The Match object that
	 *   represents the match that was found.
	 */
	processCandidateMatch : function(
		matchStr, twitterMatch, twitterHandlePrefixWhitespaceChar, twitterHandle,
		emailAddressMatch, urlMatch, protocolUrlMatch, wwwProtocolRelativeMatch,
		tldProtocolRelativeMatch, phoneMatch, hashtagMatch,
		hashtagPrefixWhitespaceChar, hashtag
	) {
		// Note: The `matchStr` variable wil be fixed up to remove characters that are no longer needed (which will
		// be added to `prefixStr` and `suffixStr`).

		var protocolRelativeMatch = wwwProtocolRelativeMatch || tldProtocolRelativeMatch,
		    match,  // Will be an Autolinker.match.Match object

		    prefixStr = "",  // A string to use to prefix the anchor tag that is created. This is needed for the Twitter and Hashtag matches.
		    suffixStr = "";  // A string to suffix the anchor tag that is created. This is used if there is a trailing parenthesis that should not be auto-linked.

		// Return out with `null` for match types that are disabled (url, email,
		// twitter, hashtag), or for matches that are invalid (false positives
		// from the matcherRegex, which can't use look-behinds since they are
		// unavailable in JS).
		if(
			( urlMatch && !this.urls ) ||
			( emailAddressMatch && !this.email ) ||
			( phoneMatch && !this.phone ) ||
			( twitterMatch && !this.twitter ) ||
			( hashtagMatch && !this.hashtag ) ||
			!this.matchValidator.isValidMatch( urlMatch, protocolUrlMatch, protocolRelativeMatch )
		) {
			return null;
		}

		// Handle a closing parenthesis at the end of the match, and exclude it
		// if there is not a matching open parenthesis
		// in the match itself.
		if( this.matchHasUnbalancedClosingParen( matchStr ) ) {
			matchStr = matchStr.substr( 0, matchStr.length - 1 );  // remove the trailing ")"
			suffixStr = ")";  // this will be added after the generated <a> tag
		} else {
			// Handle an invalid character after the TLD
			var pos = this.matchHasInvalidCharAfterTld( urlMatch, protocolUrlMatch );
			if( pos > -1 ) {
				suffixStr = matchStr.substr(pos);  // this will be added after the generated <a> tag
				matchStr = matchStr.substr( 0, pos ); // remove the trailing invalid chars
			}
		}

		if( emailAddressMatch ) {
			match = new Autolinker.match.Email( { matchedText: matchStr, email: emailAddressMatch } );

		} else if( twitterMatch ) {
			// fix up the `matchStr` if there was a preceding whitespace char,
			// which was needed to determine the match itself (since there are
			// no look-behinds in JS regexes)
			if( twitterHandlePrefixWhitespaceChar ) {
				prefixStr = twitterHandlePrefixWhitespaceChar;
				matchStr = matchStr.slice( 1 );  // remove the prefixed whitespace char from the match
			}
			match = new Autolinker.match.Twitter( { matchedText: matchStr, twitterHandle: twitterHandle } );

		} else if( phoneMatch ) {
			// remove non-numeric values from phone number string
			var cleanNumber = matchStr.replace( /\D/g, '' );
 			match = new Autolinker.match.Phone( { matchedText: matchStr, number: cleanNumber } );

		} else if( hashtagMatch ) {
			// fix up the `matchStr` if there was a preceding whitespace char,
			// which was needed to determine the match itself (since there are
			// no look-behinds in JS regexes)
			if( hashtagPrefixWhitespaceChar ) {
				prefixStr = hashtagPrefixWhitespaceChar;
				matchStr = matchStr.slice( 1 );  // remove the prefixed whitespace char from the match
			}
			match = new Autolinker.match.Hashtag( { matchedText: matchStr, serviceName: this.hashtag, hashtag: hashtag } );

		} else {  // url match
			// If it's a protocol-relative '//' match, remove the character
			// before the '//' (which the matcherRegex needed to match due to
			// the lack of a negative look-behind in JavaScript regular
			// expressions)
			if( protocolRelativeMatch ) {
				var charBeforeMatch = protocolRelativeMatch.match( this.charBeforeProtocolRelMatchRegex )[ 1 ] || "";

				if( charBeforeMatch ) {  // fix up the `matchStr` if there was a preceding char before a protocol-relative match, which was needed to determine the match itself (since there are no look-behinds in JS regexes)
					prefixStr = charBeforeMatch;
					matchStr = matchStr.slice( 1 );  // remove the prefixed char from the match
				}
			}

			match = new Autolinker.match.Url( {
				matchedText : matchStr,
				url : matchStr,
				protocolUrlMatch : !!protocolUrlMatch,
				protocolRelativeMatch : !!protocolRelativeMatch,
				stripPrefix : this.stripPrefix
			} );
		}

		return {
			prefixStr : prefixStr,
			suffixStr : suffixStr,
			match     : match
		};
	},


	/**
	 * Determines if a match found has an unmatched closing parenthesis. If so,
	 * this parenthesis will be removed from the match itself, and appended
	 * after the generated anchor tag in {@link #processCandidateMatch}.
	 *
	 * A match may have an extra closing parenthesis at the end of the match
	 * because the regular expression must include parenthesis for URLs such as
	 * "wikipedia.com/something_(disambiguation)", which should be auto-linked.
	 *
	 * However, an extra parenthesis *will* be included when the URL itself is
	 * wrapped in parenthesis, such as in the case of "(wikipedia.com/something_(disambiguation))".
	 * In this case, the last closing parenthesis should *not* be part of the
	 * URL itself, and this method will return `true`.
	 *
	 * @private
	 * @param {String} matchStr The full match string from the {@link #matcherRegex}.
	 * @return {Boolean} `true` if there is an unbalanced closing parenthesis at
	 *   the end of the `matchStr`, `false` otherwise.
	 */
	matchHasUnbalancedClosingParen : function( matchStr ) {
		var lastChar = matchStr.charAt( matchStr.length - 1 );

		if( lastChar === ')' ) {
			var openParensMatch = matchStr.match( /\(/g ),
			    closeParensMatch = matchStr.match( /\)/g ),
			    numOpenParens = ( openParensMatch && openParensMatch.length ) || 0,
			    numCloseParens = ( closeParensMatch && closeParensMatch.length ) || 0;

			if( numOpenParens < numCloseParens ) {
				return true;
			}
		}

		return false;
	},


	/**
	 * Determine if there's an invalid character after the TLD in a URL. Valid
	 * characters after TLD are ':/?#'. Exclude protocol matched URLs from this
	 * check.
	 *
	 * @private
	 * @param {String} urlMatch The matched URL, if there was one. Will be an
	 *   empty string if the match is not a URL match.
	 * @param {String} protocolUrlMatch The match URL string for a protocol
	 *   match. Ex: 'http://yahoo.com'. This is used to match something like
	 *   'http://localhost', where we won't double check that the domain name
	 *   has at least one '.' in it.
	 * @return {Number} the position where the invalid character was found. If
	 *   no such character was found, returns -1
	 */
	matchHasInvalidCharAfterTld : function( urlMatch, protocolUrlMatch ) {
		if ( !urlMatch ) {
			return -1;
		}

		var offset = 0;
		if ( protocolUrlMatch ) {
			offset = urlMatch.indexOf(':');
			urlMatch = urlMatch.slice(offset);
		}

		var re = /^((.?\/\/)?[A-Za-z0-9\.\-]*[A-Za-z0-9\-]\.[A-Za-z]+)/;
		var res = re.exec( urlMatch );
		if ( res === null ) {
			return -1;
		}

		offset += res[1].length;
		urlMatch = urlMatch.slice(res[1].length);
		if (/^[^.A-Za-z:\/?#]/.test(urlMatch)) {
			return offset;
		}

		return -1;
	}

} );

/*global Autolinker */
/*jshint scripturl:true */
/**
 * @private
 * @class Autolinker.MatchValidator
 * @extends Object
 *
 * Used by Autolinker to filter out false positives from the
 * {@link Autolinker.matchParser.MatchParser#matcherRegex}.
 *
 * Due to the limitations of regular expressions (including the missing feature
 * of look-behinds in JS regular expressions), we cannot always determine the
 * validity of a given match. This class applies a bit of additional logic to
 * filter out any false positives that have been matched by the
 * {@link Autolinker.matchParser.MatchParser#matcherRegex}.
 */
Autolinker.MatchValidator = Autolinker.Util.extend( Object, {

	/**
	 * @private
	 * @property {RegExp} invalidProtocolRelMatchRegex
	 *
	 * The regular expression used to check a potential protocol-relative URL
	 * match, coming from the {@link Autolinker.matchParser.MatchParser#matcherRegex}.
	 * A protocol-relative URL is, for example, "//yahoo.com"
	 *
	 * This regular expression checks to see if there is a word character before
	 * the '//' match in order to determine if we should actually autolink a
	 * protocol-relative URL. This is needed because there is no negative
	 * look-behind in JavaScript regular expressions.
	 *
	 * For instance, we want to autolink something like "Go to: //google.com",
	 * but we don't want to autolink something like "abc//google.com"
	 */
	invalidProtocolRelMatchRegex : /^[\w]\/\//,

	/**
	 * Regex to test for a full protocol, with the two trailing slashes. Ex: 'http://'
	 *
	 * @private
	 * @property {RegExp} hasFullProtocolRegex
	 */
	hasFullProtocolRegex : /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,

	/**
	 * Regex to find the URI scheme, such as 'mailto:'.
	 *
	 * This is used to filter out 'javascript:' and 'vbscript:' schemes.
	 *
	 * @private
	 * @property {RegExp} uriSchemeRegex
	 */
	uriSchemeRegex : /^[A-Za-z][-.+A-Za-z0-9]+:/,

	/**
	 * Regex to determine if at least one word char exists after the protocol (i.e. after the ':')
	 *
	 * @private
	 * @property {RegExp} hasWordCharAfterProtocolRegex
	 */
	hasWordCharAfterProtocolRegex : /:[^\s]*?[A-Za-z]/,


	/**
	 * Determines if a given match found by the {@link Autolinker.matchParser.MatchParser}
	 * is valid. Will return `false` for:
	 *
	 * 1) URL matches which do not have at least have one period ('.') in the
	 *    domain name (effectively skipping over matches like "abc:def").
	 *    However, URL matches with a protocol will be allowed (ex: 'http://localhost')
	 * 2) URL matches which do not have at least one word character in the
	 *    domain name (effectively skipping over matches like "git:1.0").
	 * 3) A protocol-relative url match (a URL beginning with '//') whose
	 *    previous character is a word character (effectively skipping over
	 *    strings like "abc//google.com")
	 *
	 * Otherwise, returns `true`.
	 *
	 * @param {String} urlMatch The matched URL, if there was one. Will be an
	 *   empty string if the match is not a URL match.
	 * @param {String} protocolUrlMatch The match URL string for a protocol
	 *   match. Ex: 'http://yahoo.com'. This is used to match something like
	 *   'http://localhost', where we won't double check that the domain name
	 *   has at least one '.' in it.
	 * @param {String} protocolRelativeMatch The protocol-relative string for a
	 *   URL match (i.e. '//'), possibly with a preceding character (ex, a
	 *   space, such as: ' //', or a letter, such as: 'a//'). The match is
	 *   invalid if there is a word character preceding the '//'.
	 * @return {Boolean} `true` if the match given is valid and should be
	 *   processed, or `false` if the match is invalid and/or should just not be
	 *   processed.
	 */
	isValidMatch : function( urlMatch, protocolUrlMatch, protocolRelativeMatch ) {
		if(
			( protocolUrlMatch && !this.isValidUriScheme( protocolUrlMatch ) ) ||
			this.urlMatchDoesNotHaveProtocolOrDot( urlMatch, protocolUrlMatch ) ||       // At least one period ('.') must exist in the URL match for us to consider it an actual URL, *unless* it was a full protocol match (like 'http://localhost')
			this.urlMatchDoesNotHaveAtLeastOneWordChar( urlMatch, protocolUrlMatch ) ||  // At least one letter character must exist in the domain name after a protocol match. Ex: skip over something like "git:1.0"
			this.isInvalidProtocolRelativeMatch( protocolRelativeMatch )                 // A protocol-relative match which has a word character in front of it (so we can skip something like "abc//google.com")
		) {
			return false;
		}

		return true;
	},


	/**
	 * Determines if the URI scheme is a valid scheme to be autolinked. Returns
	 * `false` if the scheme is 'javascript:' or 'vbscript:'
	 *
	 * @private
	 * @param {String} uriSchemeMatch The match URL string for a full URI scheme
	 *   match. Ex: 'http://yahoo.com' or 'mailto:a@a.com'.
	 * @return {Boolean} `true` if the scheme is a valid one, `false` otherwise.
	 */
	isValidUriScheme : function( uriSchemeMatch ) {
		var uriScheme = uriSchemeMatch.match( this.uriSchemeRegex )[ 0 ].toLowerCase();

		return ( uriScheme !== 'javascript:' && uriScheme !== 'vbscript:' );
	},


	/**
	 * Determines if a URL match does not have either:
	 *
	 * a) a full protocol (i.e. 'http://'), or
	 * b) at least one dot ('.') in the domain name (for a non-full-protocol
	 *    match).
	 *
	 * Either situation is considered an invalid URL (ex: 'git:d' does not have
	 * either the '://' part, or at least one dot in the domain name. If the
	 * match was 'git:abc.com', we would consider this valid.)
	 *
	 * @private
	 * @param {String} urlMatch The matched URL, if there was one. Will be an
	 *   empty string if the match is not a URL match.
	 * @param {String} protocolUrlMatch The match URL string for a protocol
	 *   match. Ex: 'http://yahoo.com'. This is used to match something like
	 *   'http://localhost', where we won't double check that the domain name
	 *   has at least one '.' in it.
	 * @return {Boolean} `true` if the URL match does not have a full protocol,
	 *   or at least one dot ('.') in a non-full-protocol match.
	 */
	urlMatchDoesNotHaveProtocolOrDot : function( urlMatch, protocolUrlMatch ) {
		return ( !!urlMatch && ( !protocolUrlMatch || !this.hasFullProtocolRegex.test( protocolUrlMatch ) ) && urlMatch.indexOf( '.' ) === -1 );
	},


	/**
	 * Determines if a URL match does not have at least one word character after
	 * the protocol (i.e. in the domain name).
	 *
	 * At least one letter character must exist in the domain name after a
	 * protocol match. Ex: skip over something like "git:1.0"
	 *
	 * @private
	 * @param {String} urlMatch The matched URL, if there was one. Will be an
	 *   empty string if the match is not a URL match.
	 * @param {String} protocolUrlMatch The match URL string for a protocol
	 *   match. Ex: 'http://yahoo.com'. This is used to know whether or not we
	 *   have a protocol in the URL string, in order to check for a word
	 *   character after the protocol separator (':').
	 * @return {Boolean} `true` if the URL match does not have at least one word
	 *   character in it after the protocol, `false` otherwise.
	 */
	urlMatchDoesNotHaveAtLeastOneWordChar : function( urlMatch, protocolUrlMatch ) {
		if( urlMatch && protocolUrlMatch ) {
			return !this.hasWordCharAfterProtocolRegex.test( urlMatch );
		} else {
			return false;
		}
	},


	/**
	 * Determines if a protocol-relative match is an invalid one. This method
	 * returns `true` if there is a `protocolRelativeMatch`, and that match
	 * contains a word character before the '//' (i.e. it must contain
	 * whitespace or nothing before the '//' in order to be considered valid).
	 *
	 * @private
	 * @param {String} protocolRelativeMatch The protocol-relative string for a
	 *   URL match (i.e. '//'), possibly with a preceding character (ex, a
	 *   space, such as: ' //', or a letter, such as: 'a//'). The match is
	 *   invalid if there is a word character preceding the '//'.
	 * @return {Boolean} `true` if it is an invalid protocol-relative match,
	 *   `false` otherwise.
	 */
	isInvalidProtocolRelativeMatch : function( protocolRelativeMatch ) {
		return ( !!protocolRelativeMatch && this.invalidProtocolRelMatchRegex.test( protocolRelativeMatch ) );
	}

} );
/*global Autolinker */
/**
 * @abstract
 * @class Autolinker.match.Match
 * 
 * Represents a match found in an input string which should be Autolinked. A Match object is what is provided in a 
 * {@link Autolinker#replaceFn replaceFn}, and may be used to query for details about the match.
 * 
 * For example:
 * 
 *     var input = "...";  // string with URLs, Email Addresses, and Twitter Handles
 *     
 *     var linkedText = Autolinker.link( input, {
 *         replaceFn : function( autolinker, match ) {
 *             console.log( "href = ", match.getAnchorHref() );
 *             console.log( "text = ", match.getAnchorText() );
 *         
 *             switch( match.getType() ) {
 *                 case 'url' : 
 *                     console.log( "url: ", match.getUrl() );
 *                     
 *                 case 'email' :
 *                     console.log( "email: ", match.getEmail() );
 *                     
 *                 case 'twitter' :
 *                     console.log( "twitter: ", match.getTwitterHandle() );
 *             }
 *         }
 *     } );
 *     
 * See the {@link Autolinker} class for more details on using the {@link Autolinker#replaceFn replaceFn}.
 */
Autolinker.match.Match = Autolinker.Util.extend( Object, {
	
	/**
	 * @cfg {String} matchedText (required)
	 * 
	 * The original text that was matched.
	 */
	
	
	/**
	 * @constructor
	 * @param {Object} cfg The configuration properties for the Match instance, specified in an Object (map).
	 */
	constructor : function( cfg ) {
		Autolinker.Util.assign( this, cfg );
	},

	
	/**
	 * Returns a string name for the type of match that this class represents.
	 * 
	 * @abstract
	 * @return {String}
	 */
	getType : Autolinker.Util.abstractMethod,
	
	
	/**
	 * Returns the original text that was matched.
	 * 
	 * @return {String}
	 */
	getMatchedText : function() {
		return this.matchedText;
	},
	

	/**
	 * Returns the anchor href that should be generated for the match.
	 * 
	 * @abstract
	 * @return {String}
	 */
	getAnchorHref : Autolinker.Util.abstractMethod,
	
	
	/**
	 * Returns the anchor text that should be generated for the match.
	 * 
	 * @abstract
	 * @return {String}
	 */
	getAnchorText : Autolinker.Util.abstractMethod

} );
/*global Autolinker */
/**
 * @class Autolinker.match.Email
 * @extends Autolinker.match.Match
 * 
 * Represents a Email match found in an input string which should be Autolinked.
 * 
 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
 */
Autolinker.match.Email = Autolinker.Util.extend( Autolinker.match.Match, {
	
	/**
	 * @cfg {String} email (required)
	 * 
	 * The email address that was matched.
	 */
	

	/**
	 * Returns a string name for the type of match that this class represents.
	 * 
	 * @return {String}
	 */
	getType : function() {
		return 'email';
	},
	
	
	/**
	 * Returns the email address that was matched.
	 * 
	 * @return {String}
	 */
	getEmail : function() {
		return this.email;
	},
	

	/**
	 * Returns the anchor href that should be generated for the match.
	 * 
	 * @return {String}
	 */
	getAnchorHref : function() {
		return 'mailto:' + this.email;
	},
	
	
	/**
	 * Returns the anchor text that should be generated for the match.
	 * 
	 * @return {String}
	 */
	getAnchorText : function() {
		return this.email;
	}
	
} );
/*global Autolinker */
/**
 * @class Autolinker.match.Hashtag
 * @extends Autolinker.match.Match
 *
 * Represents a Hashtag match found in an input string which should be
 * Autolinked.
 *
 * See this class's superclass ({@link Autolinker.match.Match}) for more
 * details.
 */
Autolinker.match.Hashtag = Autolinker.Util.extend( Autolinker.match.Match, {

	/**
	 * @cfg {String} serviceName (required)
	 *
	 * The service to point hashtag matches to. See {@link Autolinker#hashtag}
	 * for available values.
	 */

	/**
	 * @cfg {String} hashtag (required)
	 *
	 * The Hashtag that was matched, without the '#'.
	 */


	/**
	 * Returns the type of match that this class represents.
	 *
	 * @return {String}
	 */
	getType : function() {
		return 'hashtag';
	},


	/**
	 * Returns the matched hashtag.
	 *
	 * @return {String}
	 */
	getHashtag : function() {
		return this.hashtag;
	},


	/**
	 * Returns the anchor href that should be generated for the match.
	 *
	 * @return {String}
	 */
	getAnchorHref : function() {
		var serviceName = this.serviceName,
		    hashtag = this.hashtag;

		switch( serviceName ) {
			case 'twitter' :
				return 'https://twitter.com/hashtag/' + hashtag;
			case 'facebook' :
				return 'https://www.facebook.com/hashtag/' + hashtag;

			default :  // Shouldn't happen because Autolinker's constructor should block any invalid values, but just in case.
				throw new Error( 'Unknown service name to point hashtag to: ', serviceName );
		}
	},


	/**
	 * Returns the anchor text that should be generated for the match.
	 *
	 * @return {String}
	 */
	getAnchorText : function() {
		return '#' + this.hashtag;
	}

} );
/*global Autolinker */
/**
 * @class Autolinker.match.Phone
 * @extends Autolinker.match.Match
 *
 * Represents a Phone number match found in an input string which should be
 * Autolinked.
 *
 * See this class's superclass ({@link Autolinker.match.Match}) for more
 * details.
 */
Autolinker.match.Phone = Autolinker.Util.extend( Autolinker.match.Match, {

	/**
	 * @cfg {String} number (required)
	 *
	 * The phone number that was matched.
	 */


	/**
	 * Returns a string name for the type of match that this class represents.
	 *
	 * @return {String}
	 */
	getType : function() {
		return 'phone';
	},


	/**
	 * Returns the phone number that was matched.
	 *
	 * @return {String}
	 */
	getNumber: function() {
		return this.number;
	},


	/**
	 * Returns the anchor href that should be generated for the match.
	 *
	 * @return {String}
	 */
	getAnchorHref : function() {
		return 'tel:' + this.number;
	},


	/**
	 * Returns the anchor text that should be generated for the match.
	 *
	 * @return {String}
	 */
	getAnchorText : function() {
		return this.matchedText;
	}

} );

/*global Autolinker */
/**
 * @class Autolinker.match.Twitter
 * @extends Autolinker.match.Match
 * 
 * Represents a Twitter match found in an input string which should be Autolinked.
 * 
 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
 */
Autolinker.match.Twitter = Autolinker.Util.extend( Autolinker.match.Match, {
	
	/**
	 * @cfg {String} twitterHandle (required)
	 * 
	 * The Twitter handle that was matched.
	 */
	

	/**
	 * Returns the type of match that this class represents.
	 * 
	 * @return {String}
	 */
	getType : function() {
		return 'twitter';
	},
	
	
	/**
	 * Returns a string name for the type of match that this class represents.
	 * 
	 * @return {String}
	 */
	getTwitterHandle : function() {
		return this.twitterHandle;
	},
	

	/**
	 * Returns the anchor href that should be generated for the match.
	 * 
	 * @return {String}
	 */
	getAnchorHref : function() {
		return 'https://twitter.com/' + this.twitterHandle;
	},
	
	
	/**
	 * Returns the anchor text that should be generated for the match.
	 * 
	 * @return {String}
	 */
	getAnchorText : function() {
		return '@' + this.twitterHandle;
	}
	
} );
/*global Autolinker */
/**
 * @class Autolinker.match.Url
 * @extends Autolinker.match.Match
 * 
 * Represents a Url match found in an input string which should be Autolinked.
 * 
 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
 */
Autolinker.match.Url = Autolinker.Util.extend( Autolinker.match.Match, {
	
	/**
	 * @cfg {String} url (required)
	 * 
	 * The url that was matched.
	 */
	
	/**
	 * @cfg {Boolean} protocolUrlMatch (required)
	 * 
	 * `true` if the URL is a match which already has a protocol (i.e. 'http://'), `false` if the match was from a 'www' or
	 * known TLD match.
	 */
	
	/**
	 * @cfg {Boolean} protocolRelativeMatch (required)
	 * 
	 * `true` if the URL is a protocol-relative match. A protocol-relative match is a URL that starts with '//',
	 * and will be either http:// or https:// based on the protocol that the site is loaded under.
	 */
	
	/**
	 * @cfg {Boolean} stripPrefix (required)
	 * @inheritdoc Autolinker#stripPrefix
	 */
	

	/**
	 * @private
	 * @property {RegExp} urlPrefixRegex
	 * 
	 * A regular expression used to remove the 'http://' or 'https://' and/or the 'www.' from URLs.
	 */
	urlPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
	
	/**
	 * @private
	 * @property {RegExp} protocolRelativeRegex
	 * 
	 * The regular expression used to remove the protocol-relative '//' from the {@link #url} string, for purposes
	 * of {@link #getAnchorText}. A protocol-relative URL is, for example, "//yahoo.com"
	 */
	protocolRelativeRegex : /^\/\//,
	
	/**
	 * @private
	 * @property {Boolean} protocolPrepended
	 * 
	 * Will be set to `true` if the 'http://' protocol has been prepended to the {@link #url} (because the
	 * {@link #url} did not have a protocol)
	 */
	protocolPrepended : false,
	

	/**
	 * Returns a string name for the type of match that this class represents.
	 * 
	 * @return {String}
	 */
	getType : function() {
		return 'url';
	},
	
	
	/**
	 * Returns the url that was matched, assuming the protocol to be 'http://' if the original
	 * match was missing a protocol.
	 * 
	 * @return {String}
	 */
	getUrl : function() {
		var url = this.url;
		
		// if the url string doesn't begin with a protocol, assume 'http://'
		if( !this.protocolRelativeMatch && !this.protocolUrlMatch && !this.protocolPrepended ) {
			url = this.url = 'http://' + url;
			
			this.protocolPrepended = true;
		}
		
		return url;
	},
	

	/**
	 * Returns the anchor href that should be generated for the match.
	 * 
	 * @return {String}
	 */
	getAnchorHref : function() {
		var url = this.getUrl();
		
		return url.replace( /&amp;/g, '&' );  // any &amp;'s in the URL should be converted back to '&' if they were displayed as &amp; in the source html 
	},
	
	
	/**
	 * Returns the anchor text that should be generated for the match.
	 * 
	 * @return {String}
	 */
	getAnchorText : function() {
		var anchorText = this.getUrl();
		
		if( this.protocolRelativeMatch ) {
			// Strip off any protocol-relative '//' from the anchor text
			anchorText = this.stripProtocolRelativePrefix( anchorText );
		}
		if( this.stripPrefix ) {
			anchorText = this.stripUrlPrefix( anchorText );
		}
		anchorText = this.removeTrailingSlash( anchorText );  // remove trailing slash, if there is one
		
		return anchorText;
	},
	
	
	// ---------------------------------------
	
	// Utility Functionality
	
	/**
	 * Strips the URL prefix (such as "http://" or "https://") from the given text.
	 * 
	 * @private
	 * @param {String} text The text of the anchor that is being generated, for which to strip off the
	 *   url prefix (such as stripping off "http://")
	 * @return {String} The `anchorText`, with the prefix stripped.
	 */
	stripUrlPrefix : function( text ) {
		return text.replace( this.urlPrefixRegex, '' );
	},
	
	
	/**
	 * Strips any protocol-relative '//' from the anchor text.
	 * 
	 * @private
	 * @param {String} text The text of the anchor that is being generated, for which to strip off the
	 *   protocol-relative prefix (such as stripping off "//")
	 * @return {String} The `anchorText`, with the protocol-relative prefix stripped.
	 */
	stripProtocolRelativePrefix : function( text ) {
		return text.replace( this.protocolRelativeRegex, '' );
	},
	
	
	/**
	 * Removes any trailing slash from the given `anchorText`, in preparation for the text to be displayed.
	 * 
	 * @private
	 * @param {String} anchorText The text of the anchor that is being generated, for which to remove any trailing
	 *   slash ('/') that may exist.
	 * @return {String} The `anchorText`, with the trailing slash removed.
	 */
	removeTrailingSlash : function( anchorText ) {
		if( anchorText.charAt( anchorText.length - 1 ) === '/' ) {
			anchorText = anchorText.slice( 0, -1 );
		}
		return anchorText;
	}
	
} );
return Autolinker;

}));

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
	
	show: function(target){
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
	},
	content: function(html){
		this.popup.html(html);
	},
	hide: function(){
		this.popup.css('display','none');
	}
};



/**
 * Rangy, a cross-browser JavaScript range and selection library
 * https://github.com/timdown/rangy
 *
 * Copyright 2015, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3.1-dev
 * Build date: 20 May 2015
 */

(function(factory, root) {
    if (typeof define == "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof module != "undefined" && typeof exports == "object") {
        // Node/CommonJS style
        module.exports = factory();
    } else {
        // No AMD or CommonJS support so we place Rangy in (probably) the global variable
        root.rangy = factory();
    }
})(function() {

    var OBJECT = "object", FUNCTION = "function", UNDEFINED = "undefined";

    // Minimal set of properties required for DOM Level 2 Range compliance. Comparison constants such as START_TO_START
    // are omitted because ranges in KHTML do not have them but otherwise work perfectly well. See issue 113.
    var domRangeProperties = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed",
        "commonAncestorContainer"];

    // Minimal set of methods required for DOM Level 2 Range compliance
    var domRangeMethods = ["setStart", "setStartBefore", "setStartAfter", "setEnd", "setEndBefore",
        "setEndAfter", "collapse", "selectNode", "selectNodeContents", "compareBoundaryPoints", "deleteContents",
        "extractContents", "cloneContents", "insertNode", "surroundContents", "cloneRange", "toString", "detach"];

    var textRangeProperties = ["boundingHeight", "boundingLeft", "boundingTop", "boundingWidth", "htmlText", "text"];

    // Subset of TextRange's full set of methods that we're interested in
    var textRangeMethods = ["collapse", "compareEndPoints", "duplicate", "moveToElementText", "parentElement", "select",
        "setEndPoint", "getBoundingClientRect"];

    /*----------------------------------------------------------------------------------------------------------------*/

    // Trio of functions taken from Peter Michaux's article:
    // http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting
    function isHostMethod(o, p) {
        var t = typeof o[p];
        return t == FUNCTION || (!!(t == OBJECT && o[p])) || t == "unknown";
    }

    function isHostObject(o, p) {
        return !!(typeof o[p] == OBJECT && o[p]);
    }

    function isHostProperty(o, p) {
        return typeof o[p] != UNDEFINED;
    }

    // Creates a convenience function to save verbose repeated calls to tests functions
    function createMultiplePropertyTest(testFunc) {
        return function(o, props) {
            var i = props.length;
            while (i--) {
                if (!testFunc(o, props[i])) {
                    return false;
                }
            }
            return true;
        };
    }

    // Next trio of functions are a convenience to save verbose repeated calls to previous two functions
    var areHostMethods = createMultiplePropertyTest(isHostMethod);
    var areHostObjects = createMultiplePropertyTest(isHostObject);
    var areHostProperties = createMultiplePropertyTest(isHostProperty);

    function isTextRange(range) {
        return range && areHostMethods(range, textRangeMethods) && areHostProperties(range, textRangeProperties);
    }

    function getBody(doc) {
        return isHostObject(doc, "body") ? doc.body : doc.getElementsByTagName("body")[0];
    }

    var forEach = [].forEach ?
        function(arr, func) {
            arr.forEach(func);
        } :
        function(arr, func) {
            for (var i = 0, len = arr.length; i < len; ++i) {
                func(arr[i], i);
            }
        };

    var modules = {};

    var isBrowser = (typeof window != UNDEFINED && typeof document != UNDEFINED);

    var util = {
        isHostMethod: isHostMethod,
        isHostObject: isHostObject,
        isHostProperty: isHostProperty,
        areHostMethods: areHostMethods,
        areHostObjects: areHostObjects,
        areHostProperties: areHostProperties,
        isTextRange: isTextRange,
        getBody: getBody,
        forEach: forEach
    };

    var api = {
        version: "1.3.1-dev",
        initialized: false,
        isBrowser: isBrowser,
        supported: true,
        util: util,
        features: {},
        modules: modules,
        config: {
            alertOnFail: false,
            alertOnWarn: false,
            preferTextRange: false,
            autoInitialize: (typeof rangyAutoInitialize == UNDEFINED) ? true : rangyAutoInitialize
        }
    };

    function consoleLog(msg) {
        if (typeof console != UNDEFINED && isHostMethod(console, "log")) {
            console.log(msg);
        }
    }

    function alertOrLog(msg, shouldAlert) {
        if (isBrowser && shouldAlert) {
            alert(msg);
        } else  {
            consoleLog(msg);
        }
    }

    function fail(reason) {
        api.initialized = true;
        api.supported = false;
        alertOrLog("Rangy is not supported in this environment. Reason: " + reason, api.config.alertOnFail);
    }

    api.fail = fail;

    function warn(msg) {
        alertOrLog("Rangy warning: " + msg, api.config.alertOnWarn);
    }

    api.warn = warn;

    // Add utility extend() method
    var extend;
    if ({}.hasOwnProperty) {
        util.extend = extend = function(obj, props, deep) {
            var o, p;
            for (var i in props) {
                if (props.hasOwnProperty(i)) {
                    o = obj[i];
                    p = props[i];
                    if (deep && o !== null && typeof o == "object" && p !== null && typeof p == "object") {
                        extend(o, p, true);
                    }
                    obj[i] = p;
                }
            }
            // Special case for toString, which does not show up in for...in loops in IE <= 8
            if (props.hasOwnProperty("toString")) {
                obj.toString = props.toString;
            }
            return obj;
        };

        util.createOptions = function(optionsParam, defaults) {
            var options = {};
            extend(options, defaults);
            if (optionsParam) {
                extend(options, optionsParam);
            }
            return options;
        };
    } else {
        fail("hasOwnProperty not supported");
    }

    // Test whether we're in a browser and bail out if not
    if (!isBrowser) {
        fail("Rangy can only run in a browser");
    }

    // Test whether Array.prototype.slice can be relied on for NodeLists and use an alternative toArray() if not
    (function() {
        var toArray;

        if (isBrowser) {
            var el = document.createElement("div");
            el.appendChild(document.createElement("span"));
            var slice = [].slice;
            try {
                if (slice.call(el.childNodes, 0)[0].nodeType == 1) {
                    toArray = function(arrayLike) {
                        return slice.call(arrayLike, 0);
                    };
                }
            } catch (e) {}
        }

        if (!toArray) {
            toArray = function(arrayLike) {
                var arr = [];
                for (var i = 0, len = arrayLike.length; i < len; ++i) {
                    arr[i] = arrayLike[i];
                }
                return arr;
            };
        }

        util.toArray = toArray;
    })();

    // Very simple event handler wrapper function that doesn't attempt to solve issues such as "this" handling or
    // normalization of event properties
    var addListener;
    if (isBrowser) {
        if (isHostMethod(document, "addEventListener")) {
            addListener = function(obj, eventType, listener) {
                obj.addEventListener(eventType, listener, false);
            };
        } else if (isHostMethod(document, "attachEvent")) {
            addListener = function(obj, eventType, listener) {
                obj.attachEvent("on" + eventType, listener);
            };
        } else {
            fail("Document does not have required addEventListener or attachEvent method");
        }

        util.addListener = addListener;
    }

    var initListeners = [];

    function getErrorDesc(ex) {
        return ex.message || ex.description || String(ex);
    }

    // Initialization
    function init() {
        if (!isBrowser || api.initialized) {
            return;
        }
        var testRange;
        var implementsDomRange = false, implementsTextRange = false;

        // First, perform basic feature tests

        if (isHostMethod(document, "createRange")) {
            testRange = document.createRange();
            if (areHostMethods(testRange, domRangeMethods) && areHostProperties(testRange, domRangeProperties)) {
                implementsDomRange = true;
            }
        }

        var body = getBody(document);
        if (!body || body.nodeName.toLowerCase() != "body") {
            fail("No body element found");
            return;
        }

        if (body && isHostMethod(body, "createTextRange")) {
            testRange = body.createTextRange();
            if (isTextRange(testRange)) {
                implementsTextRange = true;
            }
        }

        if (!implementsDomRange && !implementsTextRange) {
            fail("Neither Range nor TextRange are available");
            return;
        }

        api.initialized = true;
        api.features = {
            implementsDomRange: implementsDomRange,
            implementsTextRange: implementsTextRange
        };

        // Initialize modules
        var module, errorMessage;
        for (var moduleName in modules) {
            if ( (module = modules[moduleName]) instanceof Module ) {
                module.init(module, api);
            }
        }

        // Call init listeners
        for (var i = 0, len = initListeners.length; i < len; ++i) {
            try {
                initListeners[i](api);
            } catch (ex) {
                errorMessage = "Rangy init listener threw an exception. Continuing. Detail: " + getErrorDesc(ex);
                consoleLog(errorMessage);
            }
        }
    }

    function deprecationNotice(deprecated, replacement, module) {
        if (module) {
            deprecated += " in module " + module.name;
        }
        api.warn("DEPRECATED: " + deprecated + " is deprecated. Please use " +
        replacement + " instead.");
    }

    function createAliasForDeprecatedMethod(owner, deprecated, replacement, module) {
        owner[deprecated] = function() {
            deprecationNotice(deprecated, replacement, module);
            return owner[replacement].apply(owner, util.toArray(arguments));
        };
    }

    util.deprecationNotice = deprecationNotice;
    util.createAliasForDeprecatedMethod = createAliasForDeprecatedMethod;

    // Allow external scripts to initialize this library in case it's loaded after the document has loaded
    api.init = init;

    // Execute listener immediately if already initialized
    api.addInitListener = function(listener) {
        if (api.initialized) {
            listener(api);
        } else {
            initListeners.push(listener);
        }
    };

    var shimListeners = [];

    api.addShimListener = function(listener) {
        shimListeners.push(listener);
    };

    function shim(win) {
        win = win || window;
        init();

        // Notify listeners
        for (var i = 0, len = shimListeners.length; i < len; ++i) {
            shimListeners[i](win);
        }
    }

    if (isBrowser) {
        api.shim = api.createMissingNativeApi = shim;
        createAliasForDeprecatedMethod(api, "createMissingNativeApi", "shim");
    }

    function Module(name, dependencies, initializer) {
        this.name = name;
        this.dependencies = dependencies;
        this.initialized = false;
        this.supported = false;
        this.initializer = initializer;
    }

    Module.prototype = {
        init: function() {
            var requiredModuleNames = this.dependencies || [];
            for (var i = 0, len = requiredModuleNames.length, requiredModule, moduleName; i < len; ++i) {
                moduleName = requiredModuleNames[i];

                requiredModule = modules[moduleName];
                if (!requiredModule || !(requiredModule instanceof Module)) {
                    throw new Error("required module '" + moduleName + "' not found");
                }

                requiredModule.init();

                if (!requiredModule.supported) {
                    throw new Error("required module '" + moduleName + "' not supported");
                }
            }

            // Now run initializer
            this.initializer(this);
        },

        fail: function(reason) {
            this.initialized = true;
            this.supported = false;
            throw new Error(reason);
        },

        warn: function(msg) {
            api.warn("Module " + this.name + ": " + msg);
        },

        deprecationNotice: function(deprecated, replacement) {
            api.warn("DEPRECATED: " + deprecated + " in module " + this.name + " is deprecated. Please use " +
                replacement + " instead");
        },

        createError: function(msg) {
            return new Error("Error in Rangy " + this.name + " module: " + msg);
        }
    };

    function createModule(name, dependencies, initFunc) {
        var newModule = new Module(name, dependencies, function(module) {
            if (!module.initialized) {
                module.initialized = true;
                try {
                    initFunc(api, module);
                    module.supported = true;
                } catch (ex) {
                    var errorMessage = "Module '" + name + "' failed to load: " + getErrorDesc(ex);
                    consoleLog(errorMessage);
                    if (ex.stack) {
                        consoleLog(ex.stack);
                    }
                }
            }
        });
        modules[name] = newModule;
        return newModule;
    }

    api.createModule = function(name) {
        // Allow 2 or 3 arguments (second argument is an optional array of dependencies)
        var initFunc, dependencies;
        if (arguments.length == 2) {
            initFunc = arguments[1];
            dependencies = [];
        } else {
            initFunc = arguments[2];
            dependencies = arguments[1];
        }

        var module = createModule(name, dependencies, initFunc);

        // Initialize the module immediately if the core is already initialized
        if (api.initialized && api.supported) {
            module.init();
        }
    };

    api.createCoreModule = function(name, dependencies, initFunc) {
        createModule(name, dependencies, initFunc);
    };

    /*----------------------------------------------------------------------------------------------------------------*/

    // Ensure rangy.rangePrototype and rangy.selectionPrototype are available immediately

    function RangePrototype() {}
    api.RangePrototype = RangePrototype;
    api.rangePrototype = new RangePrototype();

    function SelectionPrototype() {}
    api.selectionPrototype = new SelectionPrototype();

    /*----------------------------------------------------------------------------------------------------------------*/

    // DOM utility methods used by Rangy
    api.createCoreModule("DomUtil", [], function(api, module) {
        var UNDEF = "undefined";
        var util = api.util;
        var getBody = util.getBody;

        // Perform feature tests
        if (!util.areHostMethods(document, ["createDocumentFragment", "createElement", "createTextNode"])) {
            module.fail("document missing a Node creation method");
        }

        if (!util.isHostMethod(document, "getElementsByTagName")) {
            module.fail("document missing getElementsByTagName method");
        }

        var el = document.createElement("div");
        if (!util.areHostMethods(el, ["insertBefore", "appendChild", "cloneNode"] ||
                !util.areHostObjects(el, ["previousSibling", "nextSibling", "childNodes", "parentNode"]))) {
            module.fail("Incomplete Element implementation");
        }

        // innerHTML is required for Range's createContextualFragment method
        if (!util.isHostProperty(el, "innerHTML")) {
            module.fail("Element is missing innerHTML property");
        }

        var textNode = document.createTextNode("test");
        if (!util.areHostMethods(textNode, ["splitText", "deleteData", "insertData", "appendData", "cloneNode"] ||
                !util.areHostObjects(el, ["previousSibling", "nextSibling", "childNodes", "parentNode"]) ||
                !util.areHostProperties(textNode, ["data"]))) {
            module.fail("Incomplete Text Node implementation");
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // Removed use of indexOf because of a bizarre bug in Opera that is thrown in one of the Acid3 tests. I haven't been
        // able to replicate it outside of the test. The bug is that indexOf returns -1 when called on an Array that
        // contains just the document as a single element and the value searched for is the document.
        var arrayContains = /*Array.prototype.indexOf ?
            function(arr, val) {
                return arr.indexOf(val) > -1;
            }:*/

            function(arr, val) {
                var i = arr.length;
                while (i--) {
                    if (arr[i] === val) {
                        return true;
                    }
                }
                return false;
            };

        // Opera 11 puts HTML elements in the null namespace, it seems, and IE 7 has undefined namespaceURI
        function isHtmlNamespace(node) {
            var ns;
            return typeof node.namespaceURI == UNDEF || ((ns = node.namespaceURI) === null || ns == "http://www.w3.org/1999/xhtml");
        }

        function parentElement(node) {
            var parent = node.parentNode;
            return (parent.nodeType == 1) ? parent : null;
        }

        function getNodeIndex(node) {
            var i = 0;
            while( (node = node.previousSibling) ) {
                ++i;
            }
            return i;
        }

        function getNodeLength(node) {
            switch (node.nodeType) {
                case 7:
                case 10:
                    return 0;
                case 3:
                case 8:
                    return node.length;
                default:
                    return node.childNodes.length;
            }
        }

        function getCommonAncestor(node1, node2) {
            var ancestors = [], n;
            for (n = node1; n; n = n.parentNode) {
                ancestors.push(n);
            }

            for (n = node2; n; n = n.parentNode) {
                if (arrayContains(ancestors, n)) {
                    return n;
                }
            }

            return null;
        }

        function isAncestorOf(ancestor, descendant, selfIsAncestor) {
            var n = selfIsAncestor ? descendant : descendant.parentNode;
            while (n) {
                if (n === ancestor) {
                    return true;
                } else {
                    n = n.parentNode;
                }
            }
            return false;
        }

        function isOrIsAncestorOf(ancestor, descendant) {
            return isAncestorOf(ancestor, descendant, true);
        }

        function getClosestAncestorIn(node, ancestor, selfIsAncestor) {
            var p, n = selfIsAncestor ? node : node.parentNode;
            while (n) {
                p = n.parentNode;
                if (p === ancestor) {
                    return n;
                }
                n = p;
            }
            return null;
        }

        function isCharacterDataNode(node) {
            var t = node.nodeType;
            return t == 3 || t == 4 || t == 8 ; // Text, CDataSection or Comment
        }

        function isTextOrCommentNode(node) {
            if (!node) {
                return false;
            }
            var t = node.nodeType;
            return t == 3 || t == 8 ; // Text or Comment
        }

        function insertAfter(node, precedingNode) {
            var nextNode = precedingNode.nextSibling, parent = precedingNode.parentNode;
            if (nextNode) {
                parent.insertBefore(node, nextNode);
            } else {
                parent.appendChild(node);
            }
            return node;
        }

        // Note that we cannot use splitText() because it is bugridden in IE 9.
        function splitDataNode(node, index, positionsToPreserve) {
            var newNode = node.cloneNode(false);
            newNode.deleteData(0, index);
            node.deleteData(index, node.length - index);
            insertAfter(newNode, node);

            // Preserve positions
            if (positionsToPreserve) {
                for (var i = 0, position; position = positionsToPreserve[i++]; ) {
                    // Handle case where position was inside the portion of node after the split point
                    if (position.node == node && position.offset > index) {
                        position.node = newNode;
                        position.offset -= index;
                    }
                    // Handle the case where the position is a node offset within node's parent
                    else if (position.node == node.parentNode && position.offset > getNodeIndex(node)) {
                        ++position.offset;
                    }
                }
            }
            return newNode;
        }

        function getDocument(node) {
            if (node.nodeType == 9) {
                return node;
            } else if (typeof node.ownerDocument != UNDEF) {
                return node.ownerDocument;
            } else if (typeof node.document != UNDEF) {
                return node.document;
            } else if (node.parentNode) {
                return getDocument(node.parentNode);
            } else {
                throw module.createError("getDocument: no document found for node");
            }
        }

        function getWindow(node) {
            var doc = getDocument(node);
            if (typeof doc.defaultView != UNDEF) {
                return doc.defaultView;
            } else if (typeof doc.parentWindow != UNDEF) {
                return doc.parentWindow;
            } else {
                throw module.createError("Cannot get a window object for node");
            }
        }

        function getIframeDocument(iframeEl) {
            if (typeof iframeEl.contentDocument != UNDEF) {
                return iframeEl.contentDocument;
            } else if (typeof iframeEl.contentWindow != UNDEF) {
                return iframeEl.contentWindow.document;
            } else {
                throw module.createError("getIframeDocument: No Document object found for iframe element");
            }
        }

        function getIframeWindow(iframeEl) {
            if (typeof iframeEl.contentWindow != UNDEF) {
                return iframeEl.contentWindow;
            } else if (typeof iframeEl.contentDocument != UNDEF) {
                return iframeEl.contentDocument.defaultView;
            } else {
                throw module.createError("getIframeWindow: No Window object found for iframe element");
            }
        }

        // This looks bad. Is it worth it?
        function isWindow(obj) {
            return obj && util.isHostMethod(obj, "setTimeout") && util.isHostObject(obj, "document");
        }

        function getContentDocument(obj, module, methodName) {
            var doc;

            if (!obj) {
                doc = document;
            }

            // Test if a DOM node has been passed and obtain a document object for it if so
            else if (util.isHostProperty(obj, "nodeType")) {
                doc = (obj.nodeType == 1 && obj.tagName.toLowerCase() == "iframe") ?
                    getIframeDocument(obj) : getDocument(obj);
            }

            // Test if the doc parameter appears to be a Window object
            else if (isWindow(obj)) {
                doc = obj.document;
            }

            if (!doc) {
                throw module.createError(methodName + "(): Parameter must be a Window object or DOM node");
            }

            return doc;
        }

        function getRootContainer(node) {
            var parent;
            while ( (parent = node.parentNode) ) {
                node = parent;
            }
            return node;
        }

        function comparePoints(nodeA, offsetA, nodeB, offsetB) {
            // See http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Comparing
            var nodeC, root, childA, childB, n;
            if (nodeA == nodeB) {
                // Case 1: nodes are the same
                return offsetA === offsetB ? 0 : (offsetA < offsetB) ? -1 : 1;
            } else if ( (nodeC = getClosestAncestorIn(nodeB, nodeA, true)) ) {
                // Case 2: node C (container B or an ancestor) is a child node of A
                return offsetA <= getNodeIndex(nodeC) ? -1 : 1;
            } else if ( (nodeC = getClosestAncestorIn(nodeA, nodeB, true)) ) {
                // Case 3: node C (container A or an ancestor) is a child node of B
                return getNodeIndex(nodeC) < offsetB  ? -1 : 1;
            } else {
                root = getCommonAncestor(nodeA, nodeB);
                if (!root) {
                    throw new Error("comparePoints error: nodes have no common ancestor");
                }

                // Case 4: containers are siblings or descendants of siblings
                childA = (nodeA === root) ? root : getClosestAncestorIn(nodeA, root, true);
                childB = (nodeB === root) ? root : getClosestAncestorIn(nodeB, root, true);

                if (childA === childB) {
                    // This shouldn't be possible
                    throw module.createError("comparePoints got to case 4 and childA and childB are the same!");
                } else {
                    n = root.firstChild;
                    while (n) {
                        if (n === childA) {
                            return -1;
                        } else if (n === childB) {
                            return 1;
                        }
                        n = n.nextSibling;
                    }
                }
            }
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // Test for IE's crash (IE 6/7) or exception (IE >= 8) when a reference to garbage-collected text node is queried
        var crashyTextNodes = false;

        function isBrokenNode(node) {
            var n;
            try {
                n = node.parentNode;
                return false;
            } catch (e) {
                return true;
            }
        }

        (function() {
            var el = document.createElement("b");
            el.innerHTML = "1";
            var textNode = el.firstChild;
            el.innerHTML = "<br />";
            crashyTextNodes = isBrokenNode(textNode);

            api.features.crashyTextNodes = crashyTextNodes;
        })();

        /*----------------------------------------------------------------------------------------------------------------*/

        function inspectNode(node) {
            if (!node) {
                return "[No node]";
            }
            if (crashyTextNodes && isBrokenNode(node)) {
                return "[Broken node]";
            }
            if (isCharacterDataNode(node)) {
                return '"' + node.data + '"';
            }
            if (node.nodeType == 1) {
                var idAttr = node.id ? ' id="' + node.id + '"' : "";
                return "<" + node.nodeName + idAttr + ">[index:" + getNodeIndex(node) + ",length:" + node.childNodes.length + "][" + (node.innerHTML || "[innerHTML not supported]").slice(0, 25) + "]";
            }
            return node.nodeName;
        }

        function fragmentFromNodeChildren(node) {
            var fragment = getDocument(node).createDocumentFragment(), child;
            while ( (child = node.firstChild) ) {
                fragment.appendChild(child);
            }
            return fragment;
        }

        var getComputedStyleProperty;
        if (typeof window.getComputedStyle != UNDEF) {
            getComputedStyleProperty = function(el, propName) {
                return getWindow(el).getComputedStyle(el, null)[propName];
            };
        } else if (typeof document.documentElement.currentStyle != UNDEF) {
            getComputedStyleProperty = function(el, propName) {
                return el.currentStyle ? el.currentStyle[propName] : "";
            };
        } else {
            module.fail("No means of obtaining computed style properties found");
        }

        function createTestElement(doc, html, contentEditable) {
            var body = getBody(doc);
            var el = doc.createElement("div");
            el.contentEditable = "" + !!contentEditable;
            if (html) {
                el.innerHTML = html;
            }

            // Insert the test element at the start of the body to prevent scrolling to the bottom in iOS (issue #292)
            var bodyFirstChild = body.firstChild;
            if (bodyFirstChild) {
                body.insertBefore(el, bodyFirstChild);
            } else {
                body.appendChild(el);
            }

            return el;
        }

        function removeNode(node) {
            return node.parentNode.removeChild(node);
        }

        function NodeIterator(root) {
            this.root = root;
            this._next = root;
        }

        NodeIterator.prototype = {
            _current: null,

            hasNext: function() {
                return !!this._next;
            },

            next: function() {
                var n = this._current = this._next;
                var child, next;
                if (this._current) {
                    child = n.firstChild;
                    if (child) {
                        this._next = child;
                    } else {
                        next = null;
                        while ((n !== this.root) && !(next = n.nextSibling)) {
                            n = n.parentNode;
                        }
                        this._next = next;
                    }
                }
                return this._current;
            },

            detach: function() {
                this._current = this._next = this.root = null;
            }
        };

        function createIterator(root) {
            return new NodeIterator(root);
        }

        function DomPosition(node, offset) {
            this.node = node;
            this.offset = offset;
        }

        DomPosition.prototype = {
            equals: function(pos) {
                return !!pos && this.node === pos.node && this.offset == pos.offset;
            },

            inspect: function() {
                return "[DomPosition(" + inspectNode(this.node) + ":" + this.offset + ")]";
            },

            toString: function() {
                return this.inspect();
            }
        };

        function DOMException(codeName) {
            this.code = this[codeName];
            this.codeName = codeName;
            this.message = "DOMException: " + this.codeName;
        }

        DOMException.prototype = {
            INDEX_SIZE_ERR: 1,
            HIERARCHY_REQUEST_ERR: 3,
            WRONG_DOCUMENT_ERR: 4,
            NO_MODIFICATION_ALLOWED_ERR: 7,
            NOT_FOUND_ERR: 8,
            NOT_SUPPORTED_ERR: 9,
            INVALID_STATE_ERR: 11,
            INVALID_NODE_TYPE_ERR: 24
        };

        DOMException.prototype.toString = function() {
            return this.message;
        };

        api.dom = {
            arrayContains: arrayContains,
            isHtmlNamespace: isHtmlNamespace,
            parentElement: parentElement,
            getNodeIndex: getNodeIndex,
            getNodeLength: getNodeLength,
            getCommonAncestor: getCommonAncestor,
            isAncestorOf: isAncestorOf,
            isOrIsAncestorOf: isOrIsAncestorOf,
            getClosestAncestorIn: getClosestAncestorIn,
            isCharacterDataNode: isCharacterDataNode,
            isTextOrCommentNode: isTextOrCommentNode,
            insertAfter: insertAfter,
            splitDataNode: splitDataNode,
            getDocument: getDocument,
            getWindow: getWindow,
            getIframeWindow: getIframeWindow,
            getIframeDocument: getIframeDocument,
            getBody: getBody,
            isWindow: isWindow,
            getContentDocument: getContentDocument,
            getRootContainer: getRootContainer,
            comparePoints: comparePoints,
            isBrokenNode: isBrokenNode,
            inspectNode: inspectNode,
            getComputedStyleProperty: getComputedStyleProperty,
            createTestElement: createTestElement,
            removeNode: removeNode,
            fragmentFromNodeChildren: fragmentFromNodeChildren,
            createIterator: createIterator,
            DomPosition: DomPosition
        };

        api.DOMException = DOMException;
    });

    /*----------------------------------------------------------------------------------------------------------------*/

    // Pure JavaScript implementation of DOM Range
    api.createCoreModule("DomRange", ["DomUtil"], function(api, module) {
        var dom = api.dom;
        var util = api.util;
        var DomPosition = dom.DomPosition;
        var DOMException = api.DOMException;

        var isCharacterDataNode = dom.isCharacterDataNode;
        var getNodeIndex = dom.getNodeIndex;
        var isOrIsAncestorOf = dom.isOrIsAncestorOf;
        var getDocument = dom.getDocument;
        var comparePoints = dom.comparePoints;
        var splitDataNode = dom.splitDataNode;
        var getClosestAncestorIn = dom.getClosestAncestorIn;
        var getNodeLength = dom.getNodeLength;
        var arrayContains = dom.arrayContains;
        var getRootContainer = dom.getRootContainer;
        var crashyTextNodes = api.features.crashyTextNodes;

        var removeNode = dom.removeNode;

        /*----------------------------------------------------------------------------------------------------------------*/

        // Utility functions

        function isNonTextPartiallySelected(node, range) {
            return (node.nodeType != 3) &&
                   (isOrIsAncestorOf(node, range.startContainer) || isOrIsAncestorOf(node, range.endContainer));
        }

        function getRangeDocument(range) {
            return range.document || getDocument(range.startContainer);
        }

        function getRangeRoot(range) {
            return getRootContainer(range.startContainer);
        }

        function getBoundaryBeforeNode(node) {
            return new DomPosition(node.parentNode, getNodeIndex(node));
        }

        function getBoundaryAfterNode(node) {
            return new DomPosition(node.parentNode, getNodeIndex(node) + 1);
        }

        function insertNodeAtPosition(node, n, o) {
            var firstNodeInserted = node.nodeType == 11 ? node.firstChild : node;
            if (isCharacterDataNode(n)) {
                if (o == n.length) {
                    dom.insertAfter(node, n);
                } else {
                    n.parentNode.insertBefore(node, o == 0 ? n : splitDataNode(n, o));
                }
            } else if (o >= n.childNodes.length) {
                n.appendChild(node);
            } else {
                n.insertBefore(node, n.childNodes[o]);
            }
            return firstNodeInserted;
        }

        function rangesIntersect(rangeA, rangeB, touchingIsIntersecting) {
            assertRangeValid(rangeA);
            assertRangeValid(rangeB);

            if (getRangeDocument(rangeB) != getRangeDocument(rangeA)) {
                throw new DOMException("WRONG_DOCUMENT_ERR");
            }

            var startComparison = comparePoints(rangeA.startContainer, rangeA.startOffset, rangeB.endContainer, rangeB.endOffset),
                endComparison = comparePoints(rangeA.endContainer, rangeA.endOffset, rangeB.startContainer, rangeB.startOffset);

            return touchingIsIntersecting ? startComparison <= 0 && endComparison >= 0 : startComparison < 0 && endComparison > 0;
        }

        function cloneSubtree(iterator) {
            var partiallySelected;
            for (var node, frag = getRangeDocument(iterator.range).createDocumentFragment(), subIterator; node = iterator.next(); ) {
                partiallySelected = iterator.isPartiallySelectedSubtree();
                node = node.cloneNode(!partiallySelected);
                if (partiallySelected) {
                    subIterator = iterator.getSubtreeIterator();
                    node.appendChild(cloneSubtree(subIterator));
                    subIterator.detach();
                }

                if (node.nodeType == 10) { // DocumentType
                    throw new DOMException("HIERARCHY_REQUEST_ERR");
                }
                frag.appendChild(node);
            }
            return frag;
        }

        function iterateSubtree(rangeIterator, func, iteratorState) {
            var it, n;
            iteratorState = iteratorState || { stop: false };
            for (var node, subRangeIterator; node = rangeIterator.next(); ) {
                if (rangeIterator.isPartiallySelectedSubtree()) {
                    if (func(node) === false) {
                        iteratorState.stop = true;
                        return;
                    } else {
                        // The node is partially selected by the Range, so we can use a new RangeIterator on the portion of
                        // the node selected by the Range.
                        subRangeIterator = rangeIterator.getSubtreeIterator();
                        iterateSubtree(subRangeIterator, func, iteratorState);
                        subRangeIterator.detach();
                        if (iteratorState.stop) {
                            return;
                        }
                    }
                } else {
                    // The whole node is selected, so we can use efficient DOM iteration to iterate over the node and its
                    // descendants
                    it = dom.createIterator(node);
                    while ( (n = it.next()) ) {
                        if (func(n) === false) {
                            iteratorState.stop = true;
                            return;
                        }
                    }
                }
            }
        }

        function deleteSubtree(iterator) {
            var subIterator;
            while (iterator.next()) {
                if (iterator.isPartiallySelectedSubtree()) {
                    subIterator = iterator.getSubtreeIterator();
                    deleteSubtree(subIterator);
                    subIterator.detach();
                } else {
                    iterator.remove();
                }
            }
        }

        function extractSubtree(iterator) {
            for (var node, frag = getRangeDocument(iterator.range).createDocumentFragment(), subIterator; node = iterator.next(); ) {

                if (iterator.isPartiallySelectedSubtree()) {
                    node = node.cloneNode(false);
                    subIterator = iterator.getSubtreeIterator();
                    node.appendChild(extractSubtree(subIterator));
                    subIterator.detach();
                } else {
                    iterator.remove();
                }
                if (node.nodeType == 10) { // DocumentType
                    throw new DOMException("HIERARCHY_REQUEST_ERR");
                }
                frag.appendChild(node);
            }
            return frag;
        }

        function getNodesInRange(range, nodeTypes, filter) {
            var filterNodeTypes = !!(nodeTypes && nodeTypes.length), regex;
            var filterExists = !!filter;
            if (filterNodeTypes) {
                regex = new RegExp("^(" + nodeTypes.join("|") + ")$");
            }

            var nodes = [];
            iterateSubtree(new RangeIterator(range, false), function(node) {
                if (filterNodeTypes && !regex.test(node.nodeType)) {
                    return;
                }
                if (filterExists && !filter(node)) {
                    return;
                }
                // Don't include a boundary container if it is a character data node and the range does not contain any
                // of its character data. See issue 190.
                var sc = range.startContainer;
                if (node == sc && isCharacterDataNode(sc) && range.startOffset == sc.length) {
                    return;
                }

                var ec = range.endContainer;
                if (node == ec && isCharacterDataNode(ec) && range.endOffset == 0) {
                    return;
                }

                nodes.push(node);
            });
            return nodes;
        }

        function inspect(range) {
            var name = (typeof range.getName == "undefined") ? "Range" : range.getName();
            return "[" + name + "(" + dom.inspectNode(range.startContainer) + ":" + range.startOffset + ", " +
                    dom.inspectNode(range.endContainer) + ":" + range.endOffset + ")]";
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // RangeIterator code partially borrows from IERange by Tim Ryan (http://github.com/timcameronryan/IERange)

        function RangeIterator(range, clonePartiallySelectedTextNodes) {
            this.range = range;
            this.clonePartiallySelectedTextNodes = clonePartiallySelectedTextNodes;


            if (!range.collapsed) {
                this.sc = range.startContainer;
                this.so = range.startOffset;
                this.ec = range.endContainer;
                this.eo = range.endOffset;
                var root = range.commonAncestorContainer;

                if (this.sc === this.ec && isCharacterDataNode(this.sc)) {
                    this.isSingleCharacterDataNode = true;
                    this._first = this._last = this._next = this.sc;
                } else {
                    this._first = this._next = (this.sc === root && !isCharacterDataNode(this.sc)) ?
                        this.sc.childNodes[this.so] : getClosestAncestorIn(this.sc, root, true);
                    this._last = (this.ec === root && !isCharacterDataNode(this.ec)) ?
                        this.ec.childNodes[this.eo - 1] : getClosestAncestorIn(this.ec, root, true);
                }
            }
        }

        RangeIterator.prototype = {
            _current: null,
            _next: null,
            _first: null,
            _last: null,
            isSingleCharacterDataNode: false,

            reset: function() {
                this._current = null;
                this._next = this._first;
            },

            hasNext: function() {
                return !!this._next;
            },

            next: function() {
                // Move to next node
                var current = this._current = this._next;
                if (current) {
                    this._next = (current !== this._last) ? current.nextSibling : null;

                    // Check for partially selected text nodes
                    if (isCharacterDataNode(current) && this.clonePartiallySelectedTextNodes) {
                        if (current === this.ec) {
                            (current = current.cloneNode(true)).deleteData(this.eo, current.length - this.eo);
                        }
                        if (this._current === this.sc) {
                            (current = current.cloneNode(true)).deleteData(0, this.so);
                        }
                    }
                }

                return current;
            },

            remove: function() {
                var current = this._current, start, end;

                if (isCharacterDataNode(current) && (current === this.sc || current === this.ec)) {
                    start = (current === this.sc) ? this.so : 0;
                    end = (current === this.ec) ? this.eo : current.length;
                    if (start != end) {
                        current.deleteData(start, end - start);
                    }
                } else {
                    if (current.parentNode) {
                        removeNode(current);
                    } else {
                    }
                }
            },

            // Checks if the current node is partially selected
            isPartiallySelectedSubtree: function() {
                var current = this._current;
                return isNonTextPartiallySelected(current, this.range);
            },

            getSubtreeIterator: function() {
                var subRange;
                if (this.isSingleCharacterDataNode) {
                    subRange = this.range.cloneRange();
                    subRange.collapse(false);
                } else {
                    subRange = new Range(getRangeDocument(this.range));
                    var current = this._current;
                    var startContainer = current, startOffset = 0, endContainer = current, endOffset = getNodeLength(current);

                    if (isOrIsAncestorOf(current, this.sc)) {
                        startContainer = this.sc;
                        startOffset = this.so;
                    }
                    if (isOrIsAncestorOf(current, this.ec)) {
                        endContainer = this.ec;
                        endOffset = this.eo;
                    }

                    updateBoundaries(subRange, startContainer, startOffset, endContainer, endOffset);
                }
                return new RangeIterator(subRange, this.clonePartiallySelectedTextNodes);
            },

            detach: function() {
                this.range = this._current = this._next = this._first = this._last = this.sc = this.so = this.ec = this.eo = null;
            }
        };

        /*----------------------------------------------------------------------------------------------------------------*/

        var beforeAfterNodeTypes = [1, 3, 4, 5, 7, 8, 10];
        var rootContainerNodeTypes = [2, 9, 11];
        var readonlyNodeTypes = [5, 6, 10, 12];
        var insertableNodeTypes = [1, 3, 4, 5, 7, 8, 10, 11];
        var surroundNodeTypes = [1, 3, 4, 5, 7, 8];

        function createAncestorFinder(nodeTypes) {
            return function(node, selfIsAncestor) {
                var t, n = selfIsAncestor ? node : node.parentNode;
                while (n) {
                    t = n.nodeType;
                    if (arrayContains(nodeTypes, t)) {
                        return n;
                    }
                    n = n.parentNode;
                }
                return null;
            };
        }

        var getDocumentOrFragmentContainer = createAncestorFinder( [9, 11] );
        var getReadonlyAncestor = createAncestorFinder(readonlyNodeTypes);
        var getDocTypeNotationEntityAncestor = createAncestorFinder( [6, 10, 12] );

        function assertNoDocTypeNotationEntityAncestor(node, allowSelf) {
            if (getDocTypeNotationEntityAncestor(node, allowSelf)) {
                throw new DOMException("INVALID_NODE_TYPE_ERR");
            }
        }

        function assertValidNodeType(node, invalidTypes) {
            if (!arrayContains(invalidTypes, node.nodeType)) {
                throw new DOMException("INVALID_NODE_TYPE_ERR");
            }
        }

        function assertValidOffset(node, offset) {
            if (offset < 0 || offset > (isCharacterDataNode(node) ? node.length : node.childNodes.length)) {
                throw new DOMException("INDEX_SIZE_ERR");
            }
        }

        function assertSameDocumentOrFragment(node1, node2) {
            if (getDocumentOrFragmentContainer(node1, true) !== getDocumentOrFragmentContainer(node2, true)) {
                throw new DOMException("WRONG_DOCUMENT_ERR");
            }
        }

        function assertNodeNotReadOnly(node) {
            if (getReadonlyAncestor(node, true)) {
                throw new DOMException("NO_MODIFICATION_ALLOWED_ERR");
            }
        }

        function assertNode(node, codeName) {
            if (!node) {
                throw new DOMException(codeName);
            }
        }

        function isValidOffset(node, offset) {
            return offset <= (isCharacterDataNode(node) ? node.length : node.childNodes.length);
        }

        function isRangeValid(range) {
            return (!!range.startContainer && !!range.endContainer &&
                    !(crashyTextNodes && (dom.isBrokenNode(range.startContainer) || dom.isBrokenNode(range.endContainer))) &&
                    getRootContainer(range.startContainer) == getRootContainer(range.endContainer) &&
                    isValidOffset(range.startContainer, range.startOffset) &&
                    isValidOffset(range.endContainer, range.endOffset));
        }

        function assertRangeValid(range) {
            if (!isRangeValid(range)) {
                throw new Error("Range error: Range is not valid. This usually happens after DOM mutation. Range: (" + range.inspect() + ")");
            }
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // Test the browser's innerHTML support to decide how to implement createContextualFragment
        var styleEl = document.createElement("style");
        var htmlParsingConforms = false;
        try {
            styleEl.innerHTML = "<b>x</b>";
            htmlParsingConforms = (styleEl.firstChild.nodeType == 3); // Opera incorrectly creates an element node
        } catch (e) {
            // IE 6 and 7 throw
        }

        api.features.htmlParsingConforms = htmlParsingConforms;

        var createContextualFragment = htmlParsingConforms ?

            // Implementation as per HTML parsing spec, trusting in the browser's implementation of innerHTML. See
            // discussion and base code for this implementation at issue 67.
            // Spec: http://html5.org/specs/dom-parsing.html#extensions-to-the-range-interface
            // Thanks to Aleks Williams.
            function(fragmentStr) {
                // "Let node the context object's start's node."
                var node = this.startContainer;
                var doc = getDocument(node);

                // "If the context object's start's node is null, raise an INVALID_STATE_ERR
                // exception and abort these steps."
                if (!node) {
                    throw new DOMException("INVALID_STATE_ERR");
                }

                // "Let element be as follows, depending on node's interface:"
                // Document, Document Fragment: null
                var el = null;

                // "Element: node"
                if (node.nodeType == 1) {
                    el = node;

                // "Text, Comment: node's parentElement"
                } else if (isCharacterDataNode(node)) {
                    el = dom.parentElement(node);
                }

                // "If either element is null or element's ownerDocument is an HTML document
                // and element's local name is "html" and element's namespace is the HTML
                // namespace"
                if (el === null || (
                    el.nodeName == "HTML" &&
                    dom.isHtmlNamespace(getDocument(el).documentElement) &&
                    dom.isHtmlNamespace(el)
                )) {

                // "let element be a new Element with "body" as its local name and the HTML
                // namespace as its namespace.""
                    el = doc.createElement("body");
                } else {
                    el = el.cloneNode(false);
                }

                // "If the node's document is an HTML document: Invoke the HTML fragment parsing algorithm."
                // "If the node's document is an XML document: Invoke the XML fragment parsing algorithm."
                // "In either case, the algorithm must be invoked with fragment as the input
                // and element as the context element."
                el.innerHTML = fragmentStr;

                // "If this raises an exception, then abort these steps. Otherwise, let new
                // children be the nodes returned."

                // "Let fragment be a new DocumentFragment."
                // "Append all new children to fragment."
                // "Return fragment."
                return dom.fragmentFromNodeChildren(el);
            } :

            // In this case, innerHTML cannot be trusted, so fall back to a simpler, non-conformant implementation that
            // previous versions of Rangy used (with the exception of using a body element rather than a div)
            function(fragmentStr) {
                var doc = getRangeDocument(this);
                var el = doc.createElement("body");
                el.innerHTML = fragmentStr;

                return dom.fragmentFromNodeChildren(el);
            };

        function splitRangeBoundaries(range, positionsToPreserve) {
            assertRangeValid(range);

            var sc = range.startContainer, so = range.startOffset, ec = range.endContainer, eo = range.endOffset;
            var startEndSame = (sc === ec);

            if (isCharacterDataNode(ec) && eo > 0 && eo < ec.length) {
                splitDataNode(ec, eo, positionsToPreserve);
            }

            if (isCharacterDataNode(sc) && so > 0 && so < sc.length) {
                sc = splitDataNode(sc, so, positionsToPreserve);
                if (startEndSame) {
                    eo -= so;
                    ec = sc;
                } else if (ec == sc.parentNode && eo >= getNodeIndex(sc)) {
                    eo++;
                }
                so = 0;
            }
            range.setStartAndEnd(sc, so, ec, eo);
        }

        function rangeToHtml(range) {
            assertRangeValid(range);
            var container = range.commonAncestorContainer.parentNode.cloneNode(false);
            container.appendChild( range.cloneContents() );
            return container.innerHTML;
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        var rangeProperties = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed",
            "commonAncestorContainer"];

        var s2s = 0, s2e = 1, e2e = 2, e2s = 3;
        var n_b = 0, n_a = 1, n_b_a = 2, n_i = 3;

        util.extend(api.rangePrototype, {
            compareBoundaryPoints: function(how, range) {
                assertRangeValid(this);
                assertSameDocumentOrFragment(this.startContainer, range.startContainer);

                var nodeA, offsetA, nodeB, offsetB;
                var prefixA = (how == e2s || how == s2s) ? "start" : "end";
                var prefixB = (how == s2e || how == s2s) ? "start" : "end";
                nodeA = this[prefixA + "Container"];
                offsetA = this[prefixA + "Offset"];
                nodeB = range[prefixB + "Container"];
                offsetB = range[prefixB + "Offset"];
                return comparePoints(nodeA, offsetA, nodeB, offsetB);
            },

            insertNode: function(node) {
                assertRangeValid(this);
                assertValidNodeType(node, insertableNodeTypes);
                assertNodeNotReadOnly(this.startContainer);

                if (isOrIsAncestorOf(node, this.startContainer)) {
                    throw new DOMException("HIERARCHY_REQUEST_ERR");
                }

                // No check for whether the container of the start of the Range is of a type that does not allow
                // children of the type of node: the browser's DOM implementation should do this for us when we attempt
                // to add the node

                var firstNodeInserted = insertNodeAtPosition(node, this.startContainer, this.startOffset);
                this.setStartBefore(firstNodeInserted);
            },

            cloneContents: function() {
                assertRangeValid(this);

                var clone, frag;
                if (this.collapsed) {
                    return getRangeDocument(this).createDocumentFragment();
                } else {
                    if (this.startContainer === this.endContainer && isCharacterDataNode(this.startContainer)) {
                        clone = this.startContainer.cloneNode(true);
                        clone.data = clone.data.slice(this.startOffset, this.endOffset);
                        frag = getRangeDocument(this).createDocumentFragment();
                        frag.appendChild(clone);
                        return frag;
                    } else {
                        var iterator = new RangeIterator(this, true);
                        clone = cloneSubtree(iterator);
                        iterator.detach();
                    }
                    return clone;
                }
            },

            canSurroundContents: function() {
                assertRangeValid(this);
                assertNodeNotReadOnly(this.startContainer);
                assertNodeNotReadOnly(this.endContainer);

                // Check if the contents can be surrounded. Specifically, this means whether the range partially selects
                // no non-text nodes.
                var iterator = new RangeIterator(this, true);
                var boundariesInvalid = (iterator._first && (isNonTextPartiallySelected(iterator._first, this)) ||
                        (iterator._last && isNonTextPartiallySelected(iterator._last, this)));
                iterator.detach();
                return !boundariesInvalid;
            },

            surroundContents: function(node) {
                assertValidNodeType(node, surroundNodeTypes);

                if (!this.canSurroundContents()) {
                    throw new DOMException("INVALID_STATE_ERR");
                }

                // Extract the contents
                var content = this.extractContents();

                // Clear the children of the node
                if (node.hasChildNodes()) {
                    while (node.lastChild) {
                        node.removeChild(node.lastChild);
                    }
                }

                // Insert the new node and add the extracted contents
                insertNodeAtPosition(node, this.startContainer, this.startOffset);
                node.appendChild(content);

                this.selectNode(node);
            },

            cloneRange: function() {
                assertRangeValid(this);
                var range = new Range(getRangeDocument(this));
                var i = rangeProperties.length, prop;
                while (i--) {
                    prop = rangeProperties[i];
                    range[prop] = this[prop];
                }
                return range;
            },

            toString: function() {
                assertRangeValid(this);
                var sc = this.startContainer;
                if (sc === this.endContainer && isCharacterDataNode(sc)) {
                    return (sc.nodeType == 3 || sc.nodeType == 4) ? sc.data.slice(this.startOffset, this.endOffset) : "";
                } else {
                    var textParts = [], iterator = new RangeIterator(this, true);
                    iterateSubtree(iterator, function(node) {
                        // Accept only text or CDATA nodes, not comments
                        if (node.nodeType == 3 || node.nodeType == 4) {
                            textParts.push(node.data);
                        }
                    });
                    iterator.detach();
                    return textParts.join("");
                }
            },

            // The methods below are all non-standard. The following batch were introduced by Mozilla but have since
            // been removed from Mozilla.

            compareNode: function(node) {
                assertRangeValid(this);

                var parent = node.parentNode;
                var nodeIndex = getNodeIndex(node);

                if (!parent) {
                    throw new DOMException("NOT_FOUND_ERR");
                }

                var startComparison = this.comparePoint(parent, nodeIndex),
                    endComparison = this.comparePoint(parent, nodeIndex + 1);

                if (startComparison < 0) { // Node starts before
                    return (endComparison > 0) ? n_b_a : n_b;
                } else {
                    return (endComparison > 0) ? n_a : n_i;
                }
            },

            comparePoint: function(node, offset) {
                assertRangeValid(this);
                assertNode(node, "HIERARCHY_REQUEST_ERR");
                assertSameDocumentOrFragment(node, this.startContainer);

                if (comparePoints(node, offset, this.startContainer, this.startOffset) < 0) {
                    return -1;
                } else if (comparePoints(node, offset, this.endContainer, this.endOffset) > 0) {
                    return 1;
                }
                return 0;
            },

            createContextualFragment: createContextualFragment,

            toHtml: function() {
                return rangeToHtml(this);
            },

            // touchingIsIntersecting determines whether this method considers a node that borders a range intersects
            // with it (as in WebKit) or not (as in Gecko pre-1.9, and the default)
            intersectsNode: function(node, touchingIsIntersecting) {
                assertRangeValid(this);
                if (getRootContainer(node) != getRangeRoot(this)) {
                    return false;
                }

                var parent = node.parentNode, offset = getNodeIndex(node);
                if (!parent) {
                    return true;
                }

                var startComparison = comparePoints(parent, offset, this.endContainer, this.endOffset),
                    endComparison = comparePoints(parent, offset + 1, this.startContainer, this.startOffset);

                return touchingIsIntersecting ? startComparison <= 0 && endComparison >= 0 : startComparison < 0 && endComparison > 0;
            },

            isPointInRange: function(node, offset) {
                assertRangeValid(this);
                assertNode(node, "HIERARCHY_REQUEST_ERR");
                assertSameDocumentOrFragment(node, this.startContainer);

                return (comparePoints(node, offset, this.startContainer, this.startOffset) >= 0) &&
                       (comparePoints(node, offset, this.endContainer, this.endOffset) <= 0);
            },

            // The methods below are non-standard and invented by me.

            // Sharing a boundary start-to-end or end-to-start does not count as intersection.
            intersectsRange: function(range) {
                return rangesIntersect(this, range, false);
            },

            // Sharing a boundary start-to-end or end-to-start does count as intersection.
            intersectsOrTouchesRange: function(range) {
                return rangesIntersect(this, range, true);
            },

            intersection: function(range) {
                if (this.intersectsRange(range)) {
                    var startComparison = comparePoints(this.startContainer, this.startOffset, range.startContainer, range.startOffset),
                        endComparison = comparePoints(this.endContainer, this.endOffset, range.endContainer, range.endOffset);

                    var intersectionRange = this.cloneRange();
                    if (startComparison == -1) {
                        intersectionRange.setStart(range.startContainer, range.startOffset);
                    }
                    if (endComparison == 1) {
                        intersectionRange.setEnd(range.endContainer, range.endOffset);
                    }
                    return intersectionRange;
                }
                return null;
            },

            union: function(range) {
                if (this.intersectsOrTouchesRange(range)) {
                    var unionRange = this.cloneRange();
                    if (comparePoints(range.startContainer, range.startOffset, this.startContainer, this.startOffset) == -1) {
                        unionRange.setStart(range.startContainer, range.startOffset);
                    }
                    if (comparePoints(range.endContainer, range.endOffset, this.endContainer, this.endOffset) == 1) {
                        unionRange.setEnd(range.endContainer, range.endOffset);
                    }
                    return unionRange;
                } else {
                    throw new DOMException("Ranges do not intersect");
                }
            },

            containsNode: function(node, allowPartial) {
                if (allowPartial) {
                    return this.intersectsNode(node, false);
                } else {
                    return this.compareNode(node) == n_i;
                }
            },

            containsNodeContents: function(node) {
                return this.comparePoint(node, 0) >= 0 && this.comparePoint(node, getNodeLength(node)) <= 0;
            },

            containsRange: function(range) {
                var intersection = this.intersection(range);
                return intersection !== null && range.equals(intersection);
            },

            containsNodeText: function(node) {
                var nodeRange = this.cloneRange();
                nodeRange.selectNode(node);
                var textNodes = nodeRange.getNodes([3]);
                if (textNodes.length > 0) {
                    nodeRange.setStart(textNodes[0], 0);
                    var lastTextNode = textNodes.pop();
                    nodeRange.setEnd(lastTextNode, lastTextNode.length);
                    return this.containsRange(nodeRange);
                } else {
                    return this.containsNodeContents(node);
                }
            },

            getNodes: function(nodeTypes, filter) {
                assertRangeValid(this);
                return getNodesInRange(this, nodeTypes, filter);
            },

            getDocument: function() {
                return getRangeDocument(this);
            },

            collapseBefore: function(node) {
                this.setEndBefore(node);
                this.collapse(false);
            },

            collapseAfter: function(node) {
                this.setStartAfter(node);
                this.collapse(true);
            },

            getBookmark: function(containerNode) {
                var doc = getRangeDocument(this);
                var preSelectionRange = api.createRange(doc);
                containerNode = containerNode || dom.getBody(doc);
                preSelectionRange.selectNodeContents(containerNode);
                var range = this.intersection(preSelectionRange);
                var start = 0, end = 0;
                if (range) {
                    preSelectionRange.setEnd(range.startContainer, range.startOffset);
                    start = preSelectionRange.toString().length;
                    end = start + range.toString().length;
                }

                return {
                    start: start,
                    end: end,
                    containerNode: containerNode
                };
            },

            moveToBookmark: function(bookmark) {
                var containerNode = bookmark.containerNode;
                var charIndex = 0;
                this.setStart(containerNode, 0);
                this.collapse(true);
                var nodeStack = [containerNode], node, foundStart = false, stop = false;
                var nextCharIndex, i, childNodes;

                while (!stop && (node = nodeStack.pop())) {
                    if (node.nodeType == 3) {
                        nextCharIndex = charIndex + node.length;
                        if (!foundStart && bookmark.start >= charIndex && bookmark.start <= nextCharIndex) {
                            this.setStart(node, bookmark.start - charIndex);
                            foundStart = true;
                        }
                        if (foundStart && bookmark.end >= charIndex && bookmark.end <= nextCharIndex) {
                            this.setEnd(node, bookmark.end - charIndex);
                            stop = true;
                        }
                        charIndex = nextCharIndex;
                    } else {
                        childNodes = node.childNodes;
                        i = childNodes.length;
                        while (i--) {
                            nodeStack.push(childNodes[i]);
                        }
                    }
                }
            },

            getName: function() {
                return "DomRange";
            },

            equals: function(range) {
                return Range.rangesEqual(this, range);
            },

            isValid: function() {
                return isRangeValid(this);
            },

            inspect: function() {
                return inspect(this);
            },

            detach: function() {
                // In DOM4, detach() is now a no-op.
            }
        });

        function copyComparisonConstantsToObject(obj) {
            obj.START_TO_START = s2s;
            obj.START_TO_END = s2e;
            obj.END_TO_END = e2e;
            obj.END_TO_START = e2s;

            obj.NODE_BEFORE = n_b;
            obj.NODE_AFTER = n_a;
            obj.NODE_BEFORE_AND_AFTER = n_b_a;
            obj.NODE_INSIDE = n_i;
        }

        function copyComparisonConstants(constructor) {
            copyComparisonConstantsToObject(constructor);
            copyComparisonConstantsToObject(constructor.prototype);
        }

        function createRangeContentRemover(remover, boundaryUpdater) {
            return function() {
                assertRangeValid(this);

                var sc = this.startContainer, so = this.startOffset, root = this.commonAncestorContainer;

                var iterator = new RangeIterator(this, true);

                // Work out where to position the range after content removal
                var node, boundary;
                if (sc !== root) {
                    node = getClosestAncestorIn(sc, root, true);
                    boundary = getBoundaryAfterNode(node);
                    sc = boundary.node;
                    so = boundary.offset;
                }

                // Check none of the range is read-only
                iterateSubtree(iterator, assertNodeNotReadOnly);

                iterator.reset();

                // Remove the content
                var returnValue = remover(iterator);
                iterator.detach();

                // Move to the new position
                boundaryUpdater(this, sc, so, sc, so);

                return returnValue;
            };
        }

        function createPrototypeRange(constructor, boundaryUpdater) {
            function createBeforeAfterNodeSetter(isBefore, isStart) {
                return function(node) {
                    assertValidNodeType(node, beforeAfterNodeTypes);
                    assertValidNodeType(getRootContainer(node), rootContainerNodeTypes);

                    var boundary = (isBefore ? getBoundaryBeforeNode : getBoundaryAfterNode)(node);
                    (isStart ? setRangeStart : setRangeEnd)(this, boundary.node, boundary.offset);
                };
            }

            function setRangeStart(range, node, offset) {
                var ec = range.endContainer, eo = range.endOffset;
                if (node !== range.startContainer || offset !== range.startOffset) {
                    // Check the root containers of the range and the new boundary, and also check whether the new boundary
                    // is after the current end. In either case, collapse the range to the new position
                    if (getRootContainer(node) != getRootContainer(ec) || comparePoints(node, offset, ec, eo) == 1) {
                        ec = node;
                        eo = offset;
                    }
                    boundaryUpdater(range, node, offset, ec, eo);
                }
            }

            function setRangeEnd(range, node, offset) {
                var sc = range.startContainer, so = range.startOffset;
                if (node !== range.endContainer || offset !== range.endOffset) {
                    // Check the root containers of the range and the new boundary, and also check whether the new boundary
                    // is after the current end. In either case, collapse the range to the new position
                    if (getRootContainer(node) != getRootContainer(sc) || comparePoints(node, offset, sc, so) == -1) {
                        sc = node;
                        so = offset;
                    }
                    boundaryUpdater(range, sc, so, node, offset);
                }
            }

            // Set up inheritance
            var F = function() {};
            F.prototype = api.rangePrototype;
            constructor.prototype = new F();

            util.extend(constructor.prototype, {
                setStart: function(node, offset) {
                    assertNoDocTypeNotationEntityAncestor(node, true);
                    assertValidOffset(node, offset);

                    setRangeStart(this, node, offset);
                },

                setEnd: function(node, offset) {
                    assertNoDocTypeNotationEntityAncestor(node, true);
                    assertValidOffset(node, offset);

                    setRangeEnd(this, node, offset);
                },

                /**
                 * Convenience method to set a range's start and end boundaries. Overloaded as follows:
                 * - Two parameters (node, offset) creates a collapsed range at that position
                 * - Three parameters (node, startOffset, endOffset) creates a range contained with node starting at
                 *   startOffset and ending at endOffset
                 * - Four parameters (startNode, startOffset, endNode, endOffset) creates a range starting at startOffset in
                 *   startNode and ending at endOffset in endNode
                 */
                setStartAndEnd: function() {
                    var args = arguments;
                    var sc = args[0], so = args[1], ec = sc, eo = so;

                    switch (args.length) {
                        case 3:
                            eo = args[2];
                            break;
                        case 4:
                            ec = args[2];
                            eo = args[3];
                            break;
                    }

                    boundaryUpdater(this, sc, so, ec, eo);
                },

                setBoundary: function(node, offset, isStart) {
                    this["set" + (isStart ? "Start" : "End")](node, offset);
                },

                setStartBefore: createBeforeAfterNodeSetter(true, true),
                setStartAfter: createBeforeAfterNodeSetter(false, true),
                setEndBefore: createBeforeAfterNodeSetter(true, false),
                setEndAfter: createBeforeAfterNodeSetter(false, false),

                collapse: function(isStart) {
                    assertRangeValid(this);
                    if (isStart) {
                        boundaryUpdater(this, this.startContainer, this.startOffset, this.startContainer, this.startOffset);
                    } else {
                        boundaryUpdater(this, this.endContainer, this.endOffset, this.endContainer, this.endOffset);
                    }
                },

                selectNodeContents: function(node) {
                    assertNoDocTypeNotationEntityAncestor(node, true);

                    boundaryUpdater(this, node, 0, node, getNodeLength(node));
                },

                selectNode: function(node) {
                    assertNoDocTypeNotationEntityAncestor(node, false);
                    assertValidNodeType(node, beforeAfterNodeTypes);

                    var start = getBoundaryBeforeNode(node), end = getBoundaryAfterNode(node);
                    boundaryUpdater(this, start.node, start.offset, end.node, end.offset);
                },

                extractContents: createRangeContentRemover(extractSubtree, boundaryUpdater),

                deleteContents: createRangeContentRemover(deleteSubtree, boundaryUpdater),

                canSurroundContents: function() {
                    assertRangeValid(this);
                    assertNodeNotReadOnly(this.startContainer);
                    assertNodeNotReadOnly(this.endContainer);

                    // Check if the contents can be surrounded. Specifically, this means whether the range partially selects
                    // no non-text nodes.
                    var iterator = new RangeIterator(this, true);
                    var boundariesInvalid = (iterator._first && isNonTextPartiallySelected(iterator._first, this) ||
                            (iterator._last && isNonTextPartiallySelected(iterator._last, this)));
                    iterator.detach();
                    return !boundariesInvalid;
                },

                splitBoundaries: function() {
                    splitRangeBoundaries(this);
                },

                splitBoundariesPreservingPositions: function(positionsToPreserve) {
                    splitRangeBoundaries(this, positionsToPreserve);
                },

                normalizeBoundaries: function() {
                    assertRangeValid(this);

                    var sc = this.startContainer, so = this.startOffset, ec = this.endContainer, eo = this.endOffset;

                    var mergeForward = function(node) {
                        var sibling = node.nextSibling;
                        if (sibling && sibling.nodeType == node.nodeType) {
                            ec = node;
                            eo = node.length;
                            node.appendData(sibling.data);
                            removeNode(sibling);
                        }
                    };

                    var mergeBackward = function(node) {
                        var sibling = node.previousSibling;
                        if (sibling && sibling.nodeType == node.nodeType) {
                            sc = node;
                            var nodeLength = node.length;
                            so = sibling.length;
                            node.insertData(0, sibling.data);
                            removeNode(sibling);
                            if (sc == ec) {
                                eo += so;
                                ec = sc;
                            } else if (ec == node.parentNode) {
                                var nodeIndex = getNodeIndex(node);
                                if (eo == nodeIndex) {
                                    ec = node;
                                    eo = nodeLength;
                                } else if (eo > nodeIndex) {
                                    eo--;
                                }
                            }
                        }
                    };

                    var normalizeStart = true;
                    var sibling;

                    if (isCharacterDataNode(ec)) {
                        if (eo == ec.length) {
                            mergeForward(ec);
                        } else if (eo == 0) {
                            sibling = ec.previousSibling;
                            if (sibling && sibling.nodeType == ec.nodeType) {
                                eo = sibling.length;
                                if (sc == ec) {
                                    normalizeStart = false;
                                }
                                sibling.appendData(ec.data);
                                removeNode(ec);
                                ec = sibling;
                            }
                        }
                    } else {
                        if (eo > 0) {
                            var endNode = ec.childNodes[eo - 1];
                            if (endNode && isCharacterDataNode(endNode)) {
                                mergeForward(endNode);
                            }
                        }
                        normalizeStart = !this.collapsed;
                    }

                    if (normalizeStart) {
                        if (isCharacterDataNode(sc)) {
                            if (so == 0) {
                                mergeBackward(sc);
                            } else if (so == sc.length) {
                                sibling = sc.nextSibling;
                                if (sibling && sibling.nodeType == sc.nodeType) {
                                    if (ec == sibling) {
                                        ec = sc;
                                        eo += sc.length;
                                    }
                                    sc.appendData(sibling.data);
                                    removeNode(sibling);
                                }
                            }
                        } else {
                            if (so < sc.childNodes.length) {
                                var startNode = sc.childNodes[so];
                                if (startNode && isCharacterDataNode(startNode)) {
                                    mergeBackward(startNode);
                                }
                            }
                        }
                    } else {
                        sc = ec;
                        so = eo;
                    }

                    boundaryUpdater(this, sc, so, ec, eo);
                },

                collapseToPoint: function(node, offset) {
                    assertNoDocTypeNotationEntityAncestor(node, true);
                    assertValidOffset(node, offset);
                    this.setStartAndEnd(node, offset);
                }
            });

            copyComparisonConstants(constructor);
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // Updates commonAncestorContainer and collapsed after boundary change
        function updateCollapsedAndCommonAncestor(range) {
            range.collapsed = (range.startContainer === range.endContainer && range.startOffset === range.endOffset);
            range.commonAncestorContainer = range.collapsed ?
                range.startContainer : dom.getCommonAncestor(range.startContainer, range.endContainer);
        }

        function updateBoundaries(range, startContainer, startOffset, endContainer, endOffset) {
            range.startContainer = startContainer;
            range.startOffset = startOffset;
            range.endContainer = endContainer;
            range.endOffset = endOffset;
            range.document = dom.getDocument(startContainer);

            updateCollapsedAndCommonAncestor(range);
        }

        function Range(doc) {
            this.startContainer = doc;
            this.startOffset = 0;
            this.endContainer = doc;
            this.endOffset = 0;
            this.document = doc;
            updateCollapsedAndCommonAncestor(this);
        }

        createPrototypeRange(Range, updateBoundaries);

        util.extend(Range, {
            rangeProperties: rangeProperties,
            RangeIterator: RangeIterator,
            copyComparisonConstants: copyComparisonConstants,
            createPrototypeRange: createPrototypeRange,
            inspect: inspect,
            toHtml: rangeToHtml,
            getRangeDocument: getRangeDocument,
            rangesEqual: function(r1, r2) {
                return r1.startContainer === r2.startContainer &&
                    r1.startOffset === r2.startOffset &&
                    r1.endContainer === r2.endContainer &&
                    r1.endOffset === r2.endOffset;
            }
        });

        api.DomRange = Range;
    });

    /*----------------------------------------------------------------------------------------------------------------*/

    // Wrappers for the browser's native DOM Range and/or TextRange implementation
    api.createCoreModule("WrappedRange", ["DomRange"], function(api, module) {
        var WrappedRange, WrappedTextRange;
        var dom = api.dom;
        var util = api.util;
        var DomPosition = dom.DomPosition;
        var DomRange = api.DomRange;
        var getBody = dom.getBody;
        var getContentDocument = dom.getContentDocument;
        var isCharacterDataNode = dom.isCharacterDataNode;


        /*----------------------------------------------------------------------------------------------------------------*/

        if (api.features.implementsDomRange) {
            // This is a wrapper around the browser's native DOM Range. It has two aims:
            // - Provide workarounds for specific browser bugs
            // - provide convenient extensions, which are inherited from Rangy's DomRange

            (function() {
                var rangeProto;
                var rangeProperties = DomRange.rangeProperties;

                function updateRangeProperties(range) {
                    var i = rangeProperties.length, prop;
                    while (i--) {
                        prop = rangeProperties[i];
                        range[prop] = range.nativeRange[prop];
                    }
                    // Fix for broken collapsed property in IE 9.
                    range.collapsed = (range.startContainer === range.endContainer && range.startOffset === range.endOffset);
                }

                function updateNativeRange(range, startContainer, startOffset, endContainer, endOffset) {
                    var startMoved = (range.startContainer !== startContainer || range.startOffset != startOffset);
                    var endMoved = (range.endContainer !== endContainer || range.endOffset != endOffset);
                    var nativeRangeDifferent = !range.equals(range.nativeRange);

                    // Always set both boundaries for the benefit of IE9 (see issue 35)
                    if (startMoved || endMoved || nativeRangeDifferent) {
                        range.setEnd(endContainer, endOffset);
                        range.setStart(startContainer, startOffset);
                    }
                }

                var createBeforeAfterNodeSetter;

                WrappedRange = function(range) {
                    if (!range) {
                        throw module.createError("WrappedRange: Range must be specified");
                    }
                    this.nativeRange = range;
                    updateRangeProperties(this);
                };

                DomRange.createPrototypeRange(WrappedRange, updateNativeRange);

                rangeProto = WrappedRange.prototype;

                rangeProto.selectNode = function(node) {
                    this.nativeRange.selectNode(node);
                    updateRangeProperties(this);
                };

                rangeProto.cloneContents = function() {
                    return this.nativeRange.cloneContents();
                };

                // Due to a long-standing Firefox bug that I have not been able to find a reliable way to detect,
                // insertNode() is never delegated to the native range.

                rangeProto.surroundContents = function(node) {
                    this.nativeRange.surroundContents(node);
                    updateRangeProperties(this);
                };

                rangeProto.collapse = function(isStart) {
                    this.nativeRange.collapse(isStart);
                    updateRangeProperties(this);
                };

                rangeProto.cloneRange = function() {
                    return new WrappedRange(this.nativeRange.cloneRange());
                };

                rangeProto.refresh = function() {
                    updateRangeProperties(this);
                };

                rangeProto.toString = function() {
                    return this.nativeRange.toString();
                };

                // Create test range and node for feature detection

                var testTextNode = document.createTextNode("test");
                getBody(document).appendChild(testTextNode);
                var range = document.createRange();

                /*--------------------------------------------------------------------------------------------------------*/

                // Test for Firefox 2 bug that prevents moving the start of a Range to a point after its current end and
                // correct for it

                range.setStart(testTextNode, 0);
                range.setEnd(testTextNode, 0);

                try {
                    range.setStart(testTextNode, 1);

                    rangeProto.setStart = function(node, offset) {
                        this.nativeRange.setStart(node, offset);
                        updateRangeProperties(this);
                    };

                    rangeProto.setEnd = function(node, offset) {
                        this.nativeRange.setEnd(node, offset);
                        updateRangeProperties(this);
                    };

                    createBeforeAfterNodeSetter = function(name) {
                        return function(node) {
                            this.nativeRange[name](node);
                            updateRangeProperties(this);
                        };
                    };

                } catch(ex) {

                    rangeProto.setStart = function(node, offset) {
                        try {
                            this.nativeRange.setStart(node, offset);
                        } catch (ex) {
                            this.nativeRange.setEnd(node, offset);
                            this.nativeRange.setStart(node, offset);
                        }
                        updateRangeProperties(this);
                    };

                    rangeProto.setEnd = function(node, offset) {
                        try {
                            this.nativeRange.setEnd(node, offset);
                        } catch (ex) {
                            this.nativeRange.setStart(node, offset);
                            this.nativeRange.setEnd(node, offset);
                        }
                        updateRangeProperties(this);
                    };

                    createBeforeAfterNodeSetter = function(name, oppositeName) {
                        return function(node) {
                            try {
                                this.nativeRange[name](node);
                            } catch (ex) {
                                this.nativeRange[oppositeName](node);
                                this.nativeRange[name](node);
                            }
                            updateRangeProperties(this);
                        };
                    };
                }

                rangeProto.setStartBefore = createBeforeAfterNodeSetter("setStartBefore", "setEndBefore");
                rangeProto.setStartAfter = createBeforeAfterNodeSetter("setStartAfter", "setEndAfter");
                rangeProto.setEndBefore = createBeforeAfterNodeSetter("setEndBefore", "setStartBefore");
                rangeProto.setEndAfter = createBeforeAfterNodeSetter("setEndAfter", "setStartAfter");

                /*--------------------------------------------------------------------------------------------------------*/

                // Always use DOM4-compliant selectNodeContents implementation: it's simpler and less code than testing
                // whether the native implementation can be trusted
                rangeProto.selectNodeContents = function(node) {
                    this.setStartAndEnd(node, 0, dom.getNodeLength(node));
                };

                /*--------------------------------------------------------------------------------------------------------*/

                // Test for and correct WebKit bug that has the behaviour of compareBoundaryPoints round the wrong way for
                // constants START_TO_END and END_TO_START: https://bugs.webkit.org/show_bug.cgi?id=20738

                range.selectNodeContents(testTextNode);
                range.setEnd(testTextNode, 3);

                var range2 = document.createRange();
                range2.selectNodeContents(testTextNode);
                range2.setEnd(testTextNode, 4);
                range2.setStart(testTextNode, 2);

                if (range.compareBoundaryPoints(range.START_TO_END, range2) == -1 &&
                        range.compareBoundaryPoints(range.END_TO_START, range2) == 1) {
                    // This is the wrong way round, so correct for it

                    rangeProto.compareBoundaryPoints = function(type, range) {
                        range = range.nativeRange || range;
                        if (type == range.START_TO_END) {
                            type = range.END_TO_START;
                        } else if (type == range.END_TO_START) {
                            type = range.START_TO_END;
                        }
                        return this.nativeRange.compareBoundaryPoints(type, range);
                    };
                } else {
                    rangeProto.compareBoundaryPoints = function(type, range) {
                        return this.nativeRange.compareBoundaryPoints(type, range.nativeRange || range);
                    };
                }

                /*--------------------------------------------------------------------------------------------------------*/

                // Test for IE deleteContents() and extractContents() bug and correct it. See issue 107.

                var el = document.createElement("div");
                el.innerHTML = "123";
                var textNode = el.firstChild;
                var body = getBody(document);
                body.appendChild(el);

                range.setStart(textNode, 1);
                range.setEnd(textNode, 2);
                range.deleteContents();

                if (textNode.data == "13") {
                    // Behaviour is correct per DOM4 Range so wrap the browser's implementation of deleteContents() and
                    // extractContents()
                    rangeProto.deleteContents = function() {
                        this.nativeRange.deleteContents();
                        updateRangeProperties(this);
                    };

                    rangeProto.extractContents = function() {
                        var frag = this.nativeRange.extractContents();
                        updateRangeProperties(this);
                        return frag;
                    };
                } else {
                }

                body.removeChild(el);
                body = null;

                /*--------------------------------------------------------------------------------------------------------*/

                // Test for existence of createContextualFragment and delegate to it if it exists
                if (util.isHostMethod(range, "createContextualFragment")) {
                    rangeProto.createContextualFragment = function(fragmentStr) {
                        return this.nativeRange.createContextualFragment(fragmentStr);
                    };
                }

                /*--------------------------------------------------------------------------------------------------------*/

                // Clean up
                getBody(document).removeChild(testTextNode);

                rangeProto.getName = function() {
                    return "WrappedRange";
                };

                api.WrappedRange = WrappedRange;

                api.createNativeRange = function(doc) {
                    doc = getContentDocument(doc, module, "createNativeRange");
                    return doc.createRange();
                };
            })();
        }

        if (api.features.implementsTextRange) {
            /*
            This is a workaround for a bug where IE returns the wrong container element from the TextRange's parentElement()
            method. For example, in the following (where pipes denote the selection boundaries):

            <ul id="ul"><li id="a">| a </li><li id="b"> b |</li></ul>

            var range = document.selection.createRange();
            alert(range.parentElement().id); // Should alert "ul" but alerts "b"

            This method returns the common ancestor node of the following:
            - the parentElement() of the textRange
            - the parentElement() of the textRange after calling collapse(true)
            - the parentElement() of the textRange after calling collapse(false)
            */
            var getTextRangeContainerElement = function(textRange) {
                var parentEl = textRange.parentElement();
                var range = textRange.duplicate();
                range.collapse(true);
                var startEl = range.parentElement();
                range = textRange.duplicate();
                range.collapse(false);
                var endEl = range.parentElement();
                var startEndContainer = (startEl == endEl) ? startEl : dom.getCommonAncestor(startEl, endEl);

                return startEndContainer == parentEl ? startEndContainer : dom.getCommonAncestor(parentEl, startEndContainer);
            };

            var textRangeIsCollapsed = function(textRange) {
                return textRange.compareEndPoints("StartToEnd", textRange) == 0;
            };

            // Gets the boundary of a TextRange expressed as a node and an offset within that node. This function started
            // out as an improved version of code found in Tim Cameron Ryan's IERange (http://code.google.com/p/ierange/)
            // but has grown, fixing problems with line breaks in preformatted text, adding workaround for IE TextRange
            // bugs, handling for inputs and images, plus optimizations.
            var getTextRangeBoundaryPosition = function(textRange, wholeRangeContainerElement, isStart, isCollapsed, startInfo) {
                var workingRange = textRange.duplicate();
                workingRange.collapse(isStart);
                var containerElement = workingRange.parentElement();

                // Sometimes collapsing a TextRange that's at the start of a text node can move it into the previous node, so
                // check for that
                if (!dom.isOrIsAncestorOf(wholeRangeContainerElement, containerElement)) {
                    containerElement = wholeRangeContainerElement;
                }


                // Deal with nodes that cannot "contain rich HTML markup". In practice, this means form inputs, images and
                // similar. See http://msdn.microsoft.com/en-us/library/aa703950%28VS.85%29.aspx
                if (!containerElement.canHaveHTML) {
                    var pos = new DomPosition(containerElement.parentNode, dom.getNodeIndex(containerElement));
                    return {
                        boundaryPosition: pos,
                        nodeInfo: {
                            nodeIndex: pos.offset,
                            containerElement: pos.node
                        }
                    };
                }

                var workingNode = dom.getDocument(containerElement).createElement("span");

                // Workaround for HTML5 Shiv's insane violation of document.createElement(). See Rangy issue 104 and HTML5
                // Shiv issue 64: https://github.com/aFarkas/html5shiv/issues/64
                if (workingNode.parentNode) {
                    dom.removeNode(workingNode);
                }

                var comparison, workingComparisonType = isStart ? "StartToStart" : "StartToEnd";
                var previousNode, nextNode, boundaryPosition, boundaryNode;
                var start = (startInfo && startInfo.containerElement == containerElement) ? startInfo.nodeIndex : 0;
                var childNodeCount = containerElement.childNodes.length;
                var end = childNodeCount;

                // Check end first. Code within the loop assumes that the endth child node of the container is definitely
                // after the range boundary.
                var nodeIndex = end;

                while (true) {
                    if (nodeIndex == childNodeCount) {
                        containerElement.appendChild(workingNode);
                    } else {
                        containerElement.insertBefore(workingNode, containerElement.childNodes[nodeIndex]);
                    }
                    workingRange.moveToElementText(workingNode);
                    comparison = workingRange.compareEndPoints(workingComparisonType, textRange);
                    if (comparison == 0 || start == end) {
                        break;
                    } else if (comparison == -1) {
                        if (end == start + 1) {
                            // We know the endth child node is after the range boundary, so we must be done.
                            break;
                        } else {
                            start = nodeIndex;
                        }
                    } else {
                        end = (end == start + 1) ? start : nodeIndex;
                    }
                    nodeIndex = Math.floor((start + end) / 2);
                    containerElement.removeChild(workingNode);
                }


                // We've now reached or gone past the boundary of the text range we're interested in
                // so have identified the node we want
                boundaryNode = workingNode.nextSibling;

                if (comparison == -1 && boundaryNode && isCharacterDataNode(boundaryNode)) {
                    // This is a character data node (text, comment, cdata). The working range is collapsed at the start of
                    // the node containing the text range's boundary, so we move the end of the working range to the
                    // boundary point and measure the length of its text to get the boundary's offset within the node.
                    workingRange.setEndPoint(isStart ? "EndToStart" : "EndToEnd", textRange);

                    var offset;

                    if (/[\r\n]/.test(boundaryNode.data)) {
                        /*
                        For the particular case of a boundary within a text node containing rendered line breaks (within a
                        <pre> element, for example), we need a slightly complicated approach to get the boundary's offset in
                        IE. The facts:

                        - Each line break is represented as \r in the text node's data/nodeValue properties
                        - Each line break is represented as \r\n in the TextRange's 'text' property
                        - The 'text' property of the TextRange does not contain trailing line breaks

                        To get round the problem presented by the final fact above, we can use the fact that TextRange's
                        moveStart() and moveEnd() methods return the actual number of characters moved, which is not
                        necessarily the same as the number of characters it was instructed to move. The simplest approach is
                        to use this to store the characters moved when moving both the start and end of the range to the
                        start of the document body and subtracting the start offset from the end offset (the
                        "move-negative-gazillion" method). However, this is extremely slow when the document is large and
                        the range is near the end of it. Clearly doing the mirror image (i.e. moving the range boundaries to
                        the end of the document) has the same problem.

                        Another approach that works is to use moveStart() to move the start boundary of the range up to the
                        end boundary one character at a time and incrementing a counter with the value returned by the
                        moveStart() call. However, the check for whether the start boundary has reached the end boundary is
                        expensive, so this method is slow (although unlike "move-negative-gazillion" is largely unaffected
                        by the location of the range within the document).

                        The approach used below is a hybrid of the two methods above. It uses the fact that a string
                        containing the TextRange's 'text' property with each \r\n converted to a single \r character cannot
                        be longer than the text of the TextRange, so the start of the range is moved that length initially
                        and then a character at a time to make up for any trailing line breaks not contained in the 'text'
                        property. This has good performance in most situations compared to the previous two methods.
                        */
                        var tempRange = workingRange.duplicate();
                        var rangeLength = tempRange.text.replace(/\r\n/g, "\r").length;

                        offset = tempRange.moveStart("character", rangeLength);
                        while ( (comparison = tempRange.compareEndPoints("StartToEnd", tempRange)) == -1) {
                            offset++;
                            tempRange.moveStart("character", 1);
                        }
                    } else {
                        offset = workingRange.text.length;
                    }
                    boundaryPosition = new DomPosition(boundaryNode, offset);
                } else {

                    // If the boundary immediately follows a character data node and this is the end boundary, we should favour
                    // a position within that, and likewise for a start boundary preceding a character data node
                    previousNode = (isCollapsed || !isStart) && workingNode.previousSibling;
                    nextNode = (isCollapsed || isStart) && workingNode.nextSibling;
                    if (nextNode && isCharacterDataNode(nextNode)) {
                        boundaryPosition = new DomPosition(nextNode, 0);
                    } else if (previousNode && isCharacterDataNode(previousNode)) {
                        boundaryPosition = new DomPosition(previousNode, previousNode.data.length);
                    } else {
                        boundaryPosition = new DomPosition(containerElement, dom.getNodeIndex(workingNode));
                    }
                }

                // Clean up
                dom.removeNode(workingNode);

                return {
                    boundaryPosition: boundaryPosition,
                    nodeInfo: {
                        nodeIndex: nodeIndex,
                        containerElement: containerElement
                    }
                };
            };

            // Returns a TextRange representing the boundary of a TextRange expressed as a node and an offset within that
            // node. This function started out as an optimized version of code found in Tim Cameron Ryan's IERange
            // (http://code.google.com/p/ierange/)
            var createBoundaryTextRange = function(boundaryPosition, isStart) {
                var boundaryNode, boundaryParent, boundaryOffset = boundaryPosition.offset;
                var doc = dom.getDocument(boundaryPosition.node);
                var workingNode, childNodes, workingRange = getBody(doc).createTextRange();
                var nodeIsDataNode = isCharacterDataNode(boundaryPosition.node);

                if (nodeIsDataNode) {
                    boundaryNode = boundaryPosition.node;
                    boundaryParent = boundaryNode.parentNode;
                } else {
                    childNodes = boundaryPosition.node.childNodes;
                    boundaryNode = (boundaryOffset < childNodes.length) ? childNodes[boundaryOffset] : null;
                    boundaryParent = boundaryPosition.node;
                }

                // Position the range immediately before the node containing the boundary
                workingNode = doc.createElement("span");

                // Making the working element non-empty element persuades IE to consider the TextRange boundary to be within
                // the element rather than immediately before or after it
                workingNode.innerHTML = "&#feff;";

                // insertBefore is supposed to work like appendChild if the second parameter is null. However, a bug report
                // for IERange suggests that it can crash the browser: http://code.google.com/p/ierange/issues/detail?id=12
                if (boundaryNode) {
                    boundaryParent.insertBefore(workingNode, boundaryNode);
                } else {
                    boundaryParent.appendChild(workingNode);
                }

                workingRange.moveToElementText(workingNode);
                workingRange.collapse(!isStart);

                // Clean up
                boundaryParent.removeChild(workingNode);

                // Move the working range to the text offset, if required
                if (nodeIsDataNode) {
                    workingRange[isStart ? "moveStart" : "moveEnd"]("character", boundaryOffset);
                }

                return workingRange;
            };

            /*------------------------------------------------------------------------------------------------------------*/

            // This is a wrapper around a TextRange, providing full DOM Range functionality using rangy's DomRange as a
            // prototype

            WrappedTextRange = function(textRange) {
                this.textRange = textRange;
                this.refresh();
            };

            WrappedTextRange.prototype = new DomRange(document);

            WrappedTextRange.prototype.refresh = function() {
                var start, end, startBoundary;

                // TextRange's parentElement() method cannot be trusted. getTextRangeContainerElement() works around that.
                var rangeContainerElement = getTextRangeContainerElement(this.textRange);

                if (textRangeIsCollapsed(this.textRange)) {
                    end = start = getTextRangeBoundaryPosition(this.textRange, rangeContainerElement, true,
                        true).boundaryPosition;
                } else {
                    startBoundary = getTextRangeBoundaryPosition(this.textRange, rangeContainerElement, true, false);
                    start = startBoundary.boundaryPosition;

                    // An optimization used here is that if the start and end boundaries have the same parent element, the
                    // search scope for the end boundary can be limited to exclude the portion of the element that precedes
                    // the start boundary
                    end = getTextRangeBoundaryPosition(this.textRange, rangeContainerElement, false, false,
                        startBoundary.nodeInfo).boundaryPosition;
                }

                this.setStart(start.node, start.offset);
                this.setEnd(end.node, end.offset);
            };

            WrappedTextRange.prototype.getName = function() {
                return "WrappedTextRange";
            };

            DomRange.copyComparisonConstants(WrappedTextRange);

            var rangeToTextRange = function(range) {
                if (range.collapsed) {
                    return createBoundaryTextRange(new DomPosition(range.startContainer, range.startOffset), true);
                } else {
                    var startRange = createBoundaryTextRange(new DomPosition(range.startContainer, range.startOffset), true);
                    var endRange = createBoundaryTextRange(new DomPosition(range.endContainer, range.endOffset), false);
                    var textRange = getBody( DomRange.getRangeDocument(range) ).createTextRange();
                    textRange.setEndPoint("StartToStart", startRange);
                    textRange.setEndPoint("EndToEnd", endRange);
                    return textRange;
                }
            };

            WrappedTextRange.rangeToTextRange = rangeToTextRange;

            WrappedTextRange.prototype.toTextRange = function() {
                return rangeToTextRange(this);
            };

            api.WrappedTextRange = WrappedTextRange;

            // IE 9 and above have both implementations and Rangy makes both available. The next few lines sets which
            // implementation to use by default.
            if (!api.features.implementsDomRange || api.config.preferTextRange) {
                // Add WrappedTextRange as the Range property of the global object to allow expression like Range.END_TO_END to work
                var globalObj = (function(f) { return f("return this;")(); })(Function);
                if (typeof globalObj.Range == "undefined") {
                    globalObj.Range = WrappedTextRange;
                }

                api.createNativeRange = function(doc) {
                    doc = getContentDocument(doc, module, "createNativeRange");
                    return getBody(doc).createTextRange();
                };

                api.WrappedRange = WrappedTextRange;
            }
        }

        api.createRange = function(doc) {
            doc = getContentDocument(doc, module, "createRange");
            return new api.WrappedRange(api.createNativeRange(doc));
        };

        api.createRangyRange = function(doc) {
            doc = getContentDocument(doc, module, "createRangyRange");
            return new DomRange(doc);
        };

        util.createAliasForDeprecatedMethod(api, "createIframeRange", "createRange");
        util.createAliasForDeprecatedMethod(api, "createIframeRangyRange", "createRangyRange");

        api.addShimListener(function(win) {
            var doc = win.document;
            if (typeof doc.createRange == "undefined") {
                doc.createRange = function() {
                    return api.createRange(doc);
                };
            }
            doc = win = null;
        });
    });

    /*----------------------------------------------------------------------------------------------------------------*/

    // This module creates a selection object wrapper that conforms as closely as possible to the Selection specification
    // in the HTML Editing spec (http://dvcs.w3.org/hg/editing/raw-file/tip/editing.html#selections)
    api.createCoreModule("WrappedSelection", ["DomRange", "WrappedRange"], function(api, module) {
        api.config.checkSelectionRanges = true;

        var BOOLEAN = "boolean";
        var NUMBER = "number";
        var dom = api.dom;
        var util = api.util;
        var isHostMethod = util.isHostMethod;
        var DomRange = api.DomRange;
        var WrappedRange = api.WrappedRange;
        var DOMException = api.DOMException;
        var DomPosition = dom.DomPosition;
        var getNativeSelection;
        var selectionIsCollapsed;
        var features = api.features;
        var CONTROL = "Control";
        var getDocument = dom.getDocument;
        var getBody = dom.getBody;
        var rangesEqual = DomRange.rangesEqual;


        // Utility function to support direction parameters in the API that may be a string ("backward", "backwards",
        // "forward" or "forwards") or a Boolean (true for backwards).
        function isDirectionBackward(dir) {
            return (typeof dir == "string") ? /^backward(s)?$/i.test(dir) : !!dir;
        }

        function getWindow(win, methodName) {
            if (!win) {
                return window;
            } else if (dom.isWindow(win)) {
                return win;
            } else if (win instanceof WrappedSelection) {
                return win.win;
            } else {
                var doc = dom.getContentDocument(win, module, methodName);
                return dom.getWindow(doc);
            }
        }

        function getWinSelection(winParam) {
            return getWindow(winParam, "getWinSelection").getSelection();
        }

        function getDocSelection(winParam) {
            return getWindow(winParam, "getDocSelection").document.selection;
        }

        function winSelectionIsBackward(sel) {
            var backward = false;
            if (sel.anchorNode) {
                backward = (dom.comparePoints(sel.anchorNode, sel.anchorOffset, sel.focusNode, sel.focusOffset) == 1);
            }
            return backward;
        }

        // Test for the Range/TextRange and Selection features required
        // Test for ability to retrieve selection
        var implementsWinGetSelection = isHostMethod(window, "getSelection"),
            implementsDocSelection = util.isHostObject(document, "selection");

        features.implementsWinGetSelection = implementsWinGetSelection;
        features.implementsDocSelection = implementsDocSelection;

        var useDocumentSelection = implementsDocSelection && (!implementsWinGetSelection || api.config.preferTextRange);

        if (useDocumentSelection) {
            getNativeSelection = getDocSelection;
            api.isSelectionValid = function(winParam) {
                var doc = getWindow(winParam, "isSelectionValid").document, nativeSel = doc.selection;

                // Check whether the selection TextRange is actually contained within the correct document
                return (nativeSel.type != "None" || getDocument(nativeSel.createRange().parentElement()) == doc);
            };
        } else if (implementsWinGetSelection) {
            getNativeSelection = getWinSelection;
            api.isSelectionValid = function() {
                return true;
            };
        } else {
            module.fail("Neither document.selection or window.getSelection() detected.");
            return false;
        }

        api.getNativeSelection = getNativeSelection;

        var testSelection = getNativeSelection();

        // In Firefox, the selection is null in an iframe with display: none. See issue #138.
        if (!testSelection) {
            module.fail("Native selection was null (possibly issue 138?)");
            return false;
        }

        var testRange = api.createNativeRange(document);
        var body = getBody(document);

        // Obtaining a range from a selection
        var selectionHasAnchorAndFocus = util.areHostProperties(testSelection,
            ["anchorNode", "focusNode", "anchorOffset", "focusOffset"]);

        features.selectionHasAnchorAndFocus = selectionHasAnchorAndFocus;

        // Test for existence of native selection extend() method
        var selectionHasExtend = isHostMethod(testSelection, "extend");
        features.selectionHasExtend = selectionHasExtend;

        // Test if rangeCount exists
        var selectionHasRangeCount = (typeof testSelection.rangeCount == NUMBER);
        features.selectionHasRangeCount = selectionHasRangeCount;

        var selectionSupportsMultipleRanges = false;
        var collapsedNonEditableSelectionsSupported = true;

        var addRangeBackwardToNative = selectionHasExtend ?
            function(nativeSelection, range) {
                var doc = DomRange.getRangeDocument(range);
                var endRange = api.createRange(doc);
                endRange.collapseToPoint(range.endContainer, range.endOffset);
                nativeSelection.addRange(getNativeRange(endRange));
                nativeSelection.extend(range.startContainer, range.startOffset);
            } : null;

        if (util.areHostMethods(testSelection, ["addRange", "getRangeAt", "removeAllRanges"]) &&
                typeof testSelection.rangeCount == NUMBER && features.implementsDomRange) {

            (function() {
                // Previously an iframe was used but this caused problems in some circumstances in IE, so tests are
                // performed on the current document's selection. See issue 109.

                // Note also that if a selection previously existed, it is wiped and later restored by these tests. This
                // will result in the selection direction begin reversed if the original selection was backwards and the
                // browser does not support setting backwards selections (Internet Explorer, I'm looking at you).
                var sel = window.getSelection();
                if (sel) {
                    // Store the current selection
                    var originalSelectionRangeCount = sel.rangeCount;
                    var selectionHasMultipleRanges = (originalSelectionRangeCount > 1);
                    var originalSelectionRanges = [];
                    var originalSelectionBackward = winSelectionIsBackward(sel);
                    for (var i = 0; i < originalSelectionRangeCount; ++i) {
                        originalSelectionRanges[i] = sel.getRangeAt(i);
                    }

                    // Create some test elements
                    var testEl = dom.createTestElement(document, "", false);
                    var textNode = testEl.appendChild( document.createTextNode("\u00a0\u00a0\u00a0") );

                    // Test whether the native selection will allow a collapsed selection within a non-editable element
                    var r1 = document.createRange();

                    r1.setStart(textNode, 1);
                    r1.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(r1);
                    collapsedNonEditableSelectionsSupported = (sel.rangeCount == 1);
                    sel.removeAllRanges();

                    // Test whether the native selection is capable of supporting multiple ranges.
                    if (!selectionHasMultipleRanges) {
                        // Doing the original feature test here in Chrome 36 (and presumably later versions) prints a
                        // console error of "Discontiguous selection is not supported." that cannot be suppressed. There's
                        // nothing we can do about this while retaining the feature test so we have to resort to a browser
                        // sniff. I'm not happy about it. See
                        // https://code.google.com/p/chromium/issues/detail?id=399791
                        var chromeMatch = window.navigator.appVersion.match(/Chrome\/(.*?) /);
                        if (chromeMatch && parseInt(chromeMatch[1]) >= 36) {
                            selectionSupportsMultipleRanges = false;
                        } else {
                            var r2 = r1.cloneRange();
                            r1.setStart(textNode, 0);
                            r2.setEnd(textNode, 3);
                            r2.setStart(textNode, 2);
                            sel.addRange(r1);
                            sel.addRange(r2);
                            selectionSupportsMultipleRanges = (sel.rangeCount == 2);
                        }
                    }

                    // Clean up
                    dom.removeNode(testEl);
                    sel.removeAllRanges();

                    for (i = 0; i < originalSelectionRangeCount; ++i) {
                        if (i == 0 && originalSelectionBackward) {
                            if (addRangeBackwardToNative) {
                                addRangeBackwardToNative(sel, originalSelectionRanges[i]);
                            } else {
                                api.warn("Rangy initialization: original selection was backwards but selection has been restored forwards because the browser does not support Selection.extend");
                                sel.addRange(originalSelectionRanges[i]);
                            }
                        } else {
                            sel.addRange(originalSelectionRanges[i]);
                        }
                    }
                }
            })();
        }

        features.selectionSupportsMultipleRanges = selectionSupportsMultipleRanges;
        features.collapsedNonEditableSelectionsSupported = collapsedNonEditableSelectionsSupported;

        // ControlRanges
        var implementsControlRange = false, testControlRange;

        if (body && isHostMethod(body, "createControlRange")) {
            testControlRange = body.createControlRange();
            if (util.areHostProperties(testControlRange, ["item", "add"])) {
                implementsControlRange = true;
            }
        }
        features.implementsControlRange = implementsControlRange;

        // Selection collapsedness
        if (selectionHasAnchorAndFocus) {
            selectionIsCollapsed = function(sel) {
                return sel.anchorNode === sel.focusNode && sel.anchorOffset === sel.focusOffset;
            };
        } else {
            selectionIsCollapsed = function(sel) {
                return sel.rangeCount ? sel.getRangeAt(sel.rangeCount - 1).collapsed : false;
            };
        }

        function updateAnchorAndFocusFromRange(sel, range, backward) {
            var anchorPrefix = backward ? "end" : "start", focusPrefix = backward ? "start" : "end";
            sel.anchorNode = range[anchorPrefix + "Container"];
            sel.anchorOffset = range[anchorPrefix + "Offset"];
            sel.focusNode = range[focusPrefix + "Container"];
            sel.focusOffset = range[focusPrefix + "Offset"];
        }

        function updateAnchorAndFocusFromNativeSelection(sel) {
            var nativeSel = sel.nativeSelection;
            sel.anchorNode = nativeSel.anchorNode;
            sel.anchorOffset = nativeSel.anchorOffset;
            sel.focusNode = nativeSel.focusNode;
            sel.focusOffset = nativeSel.focusOffset;
        }

        function updateEmptySelection(sel) {
            sel.anchorNode = sel.focusNode = null;
            sel.anchorOffset = sel.focusOffset = 0;
            sel.rangeCount = 0;
            sel.isCollapsed = true;
            sel._ranges.length = 0;
        }

        function getNativeRange(range) {
            var nativeRange;
            if (range instanceof DomRange) {
                nativeRange = api.createNativeRange(range.getDocument());
                nativeRange.setEnd(range.endContainer, range.endOffset);
                nativeRange.setStart(range.startContainer, range.startOffset);
            } else if (range instanceof WrappedRange) {
                nativeRange = range.nativeRange;
            } else if (features.implementsDomRange && (range instanceof dom.getWindow(range.startContainer).Range)) {
                nativeRange = range;
            }
            return nativeRange;
        }

        function rangeContainsSingleElement(rangeNodes) {
            if (!rangeNodes.length || rangeNodes[0].nodeType != 1) {
                return false;
            }
            for (var i = 1, len = rangeNodes.length; i < len; ++i) {
                if (!dom.isAncestorOf(rangeNodes[0], rangeNodes[i])) {
                    return false;
                }
            }
            return true;
        }

        function getSingleElementFromRange(range) {
            var nodes = range.getNodes();
            if (!rangeContainsSingleElement(nodes)) {
                throw module.createError("getSingleElementFromRange: range " + range.inspect() + " did not consist of a single element");
            }
            return nodes[0];
        }

        // Simple, quick test which only needs to distinguish between a TextRange and a ControlRange
        function isTextRange(range) {
            return !!range && typeof range.text != "undefined";
        }

        function updateFromTextRange(sel, range) {
            // Create a Range from the selected TextRange
            var wrappedRange = new WrappedRange(range);
            sel._ranges = [wrappedRange];

            updateAnchorAndFocusFromRange(sel, wrappedRange, false);
            sel.rangeCount = 1;
            sel.isCollapsed = wrappedRange.collapsed;
        }

        function updateControlSelection(sel) {
            // Update the wrapped selection based on what's now in the native selection
            sel._ranges.length = 0;
            if (sel.docSelection.type == "None") {
                updateEmptySelection(sel);
            } else {
                var controlRange = sel.docSelection.createRange();
                if (isTextRange(controlRange)) {
                    // This case (where the selection type is "Control" and calling createRange() on the selection returns
                    // a TextRange) can happen in IE 9. It happens, for example, when all elements in the selected
                    // ControlRange have been removed from the ControlRange and removed from the document.
                    updateFromTextRange(sel, controlRange);
                } else {
                    sel.rangeCount = controlRange.length;
                    var range, doc = getDocument(controlRange.item(0));
                    for (var i = 0; i < sel.rangeCount; ++i) {
                        range = api.createRange(doc);
                        range.selectNode(controlRange.item(i));
                        sel._ranges.push(range);
                    }
                    sel.isCollapsed = sel.rangeCount == 1 && sel._ranges[0].collapsed;
                    updateAnchorAndFocusFromRange(sel, sel._ranges[sel.rangeCount - 1], false);
                }
            }
        }

        function addRangeToControlSelection(sel, range) {
            var controlRange = sel.docSelection.createRange();
            var rangeElement = getSingleElementFromRange(range);

            // Create a new ControlRange containing all the elements in the selected ControlRange plus the element
            // contained by the supplied range
            var doc = getDocument(controlRange.item(0));
            var newControlRange = getBody(doc).createControlRange();
            for (var i = 0, len = controlRange.length; i < len; ++i) {
                newControlRange.add(controlRange.item(i));
            }
            try {
                newControlRange.add(rangeElement);
            } catch (ex) {
                throw module.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)");
            }
            newControlRange.select();

            // Update the wrapped selection based on what's now in the native selection
            updateControlSelection(sel);
        }

        var getSelectionRangeAt;

        if (isHostMethod(testSelection, "getRangeAt")) {
            // try/catch is present because getRangeAt() must have thrown an error in some browser and some situation.
            // Unfortunately, I didn't write a comment about the specifics and am now scared to take it out. Let that be a
            // lesson to us all, especially me.
            getSelectionRangeAt = function(sel, index) {
                try {
                    return sel.getRangeAt(index);
                } catch (ex) {
                    return null;
                }
            };
        } else if (selectionHasAnchorAndFocus) {
            getSelectionRangeAt = function(sel) {
                var doc = getDocument(sel.anchorNode);
                var range = api.createRange(doc);
                range.setStartAndEnd(sel.anchorNode, sel.anchorOffset, sel.focusNode, sel.focusOffset);

                // Handle the case when the selection was selected backwards (from the end to the start in the
                // document)
                if (range.collapsed !== this.isCollapsed) {
                    range.setStartAndEnd(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset);
                }

                return range;
            };
        }

        function WrappedSelection(selection, docSelection, win) {
            this.nativeSelection = selection;
            this.docSelection = docSelection;
            this._ranges = [];
            this.win = win;
            this.refresh();
        }

        WrappedSelection.prototype = api.selectionPrototype;

        function deleteProperties(sel) {
            sel.win = sel.anchorNode = sel.focusNode = sel._ranges = null;
            sel.rangeCount = sel.anchorOffset = sel.focusOffset = 0;
            sel.detached = true;
        }

        var cachedRangySelections = [];

        function actOnCachedSelection(win, action) {
            var i = cachedRangySelections.length, cached, sel;
            while (i--) {
                cached = cachedRangySelections[i];
                sel = cached.selection;
                if (action == "deleteAll") {
                    deleteProperties(sel);
                } else if (cached.win == win) {
                    if (action == "delete") {
                        cachedRangySelections.splice(i, 1);
                        return true;
                    } else {
                        return sel;
                    }
                }
            }
            if (action == "deleteAll") {
                cachedRangySelections.length = 0;
            }
            return null;
        }

        var getSelection = function(win) {
            // Check if the parameter is a Rangy Selection object
            if (win && win instanceof WrappedSelection) {
                win.refresh();
                return win;
            }

            win = getWindow(win, "getNativeSelection");

            var sel = actOnCachedSelection(win);
            var nativeSel = getNativeSelection(win), docSel = implementsDocSelection ? getDocSelection(win) : null;
            if (sel) {
                sel.nativeSelection = nativeSel;
                sel.docSelection = docSel;
                sel.refresh();
            } else {
                sel = new WrappedSelection(nativeSel, docSel, win);
                cachedRangySelections.push( { win: win, selection: sel } );
            }
            return sel;
        };

        api.getSelection = getSelection;

        util.createAliasForDeprecatedMethod(api, "getIframeSelection", "getSelection");

        var selProto = WrappedSelection.prototype;

        function createControlSelection(sel, ranges) {
            // Ensure that the selection becomes of type "Control"
            var doc = getDocument(ranges[0].startContainer);
            var controlRange = getBody(doc).createControlRange();
            for (var i = 0, el, len = ranges.length; i < len; ++i) {
                el = getSingleElementFromRange(ranges[i]);
                try {
                    controlRange.add(el);
                } catch (ex) {
                    throw module.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)");
                }
            }
            controlRange.select();

            // Update the wrapped selection based on what's now in the native selection
            updateControlSelection(sel);
        }

        // Selecting a range
        if (!useDocumentSelection && selectionHasAnchorAndFocus && util.areHostMethods(testSelection, ["removeAllRanges", "addRange"])) {
            selProto.removeAllRanges = function() {
                this.nativeSelection.removeAllRanges();
                updateEmptySelection(this);
            };

            var addRangeBackward = function(sel, range) {
                addRangeBackwardToNative(sel.nativeSelection, range);
                sel.refresh();
            };

            if (selectionHasRangeCount) {
                selProto.addRange = function(range, direction) {
                    if (implementsControlRange && implementsDocSelection && this.docSelection.type == CONTROL) {
                        addRangeToControlSelection(this, range);
                    } else {
                        if (isDirectionBackward(direction) && selectionHasExtend) {
                            addRangeBackward(this, range);
                        } else {
                            var previousRangeCount;
                            if (selectionSupportsMultipleRanges) {
                                previousRangeCount = this.rangeCount;
                            } else {
                                this.removeAllRanges();
                                previousRangeCount = 0;
                            }
                            // Clone the native range so that changing the selected range does not affect the selection.
                            // This is contrary to the spec but is the only way to achieve consistency between browsers. See
                            // issue 80.
                            var clonedNativeRange = getNativeRange(range).cloneRange();
                            try {
                                this.nativeSelection.addRange(clonedNativeRange);
                            } catch (ex) {
                            }

                            // Check whether adding the range was successful
                            this.rangeCount = this.nativeSelection.rangeCount;

                            if (this.rangeCount == previousRangeCount + 1) {
                                // The range was added successfully

                                // Check whether the range that we added to the selection is reflected in the last range extracted from
                                // the selection
                                if (api.config.checkSelectionRanges) {
                                    var nativeRange = getSelectionRangeAt(this.nativeSelection, this.rangeCount - 1);
                                    if (nativeRange && !rangesEqual(nativeRange, range)) {
                                        // Happens in WebKit with, for example, a selection placed at the start of a text node
                                        range = new WrappedRange(nativeRange);
                                    }
                                }
                                this._ranges[this.rangeCount - 1] = range;
                                updateAnchorAndFocusFromRange(this, range, selectionIsBackward(this.nativeSelection));
                                this.isCollapsed = selectionIsCollapsed(this);
                            } else {
                                // The range was not added successfully. The simplest thing is to refresh
                                this.refresh();
                            }
                        }
                    }
                };
            } else {
                selProto.addRange = function(range, direction) {
                    if (isDirectionBackward(direction) && selectionHasExtend) {
                        addRangeBackward(this, range);
                    } else {
                        this.nativeSelection.addRange(getNativeRange(range));
                        this.refresh();
                    }
                };
            }

            selProto.setRanges = function(ranges) {
                if (implementsControlRange && implementsDocSelection && ranges.length > 1) {
                    createControlSelection(this, ranges);
                } else {
                    this.removeAllRanges();
                    for (var i = 0, len = ranges.length; i < len; ++i) {
                        this.addRange(ranges[i]);
                    }
                }
            };
        } else if (isHostMethod(testSelection, "empty") && isHostMethod(testRange, "select") &&
                   implementsControlRange && useDocumentSelection) {

            selProto.removeAllRanges = function() {
                // Added try/catch as fix for issue #21
                try {
                    this.docSelection.empty();

                    // Check for empty() not working (issue #24)
                    if (this.docSelection.type != "None") {
                        // Work around failure to empty a control selection by instead selecting a TextRange and then
                        // calling empty()
                        var doc;
                        if (this.anchorNode) {
                            doc = getDocument(this.anchorNode);
                        } else if (this.docSelection.type == CONTROL) {
                            var controlRange = this.docSelection.createRange();
                            if (controlRange.length) {
                                doc = getDocument( controlRange.item(0) );
                            }
                        }
                        if (doc) {
                            var textRange = getBody(doc).createTextRange();
                            textRange.select();
                            this.docSelection.empty();
                        }
                    }
                } catch(ex) {}
                updateEmptySelection(this);
            };

            selProto.addRange = function(range) {
                if (this.docSelection.type == CONTROL) {
                    addRangeToControlSelection(this, range);
                } else {
                    api.WrappedTextRange.rangeToTextRange(range).select();
                    this._ranges[0] = range;
                    this.rangeCount = 1;
                    this.isCollapsed = this._ranges[0].collapsed;
                    updateAnchorAndFocusFromRange(this, range, false);
                }
            };

            selProto.setRanges = function(ranges) {
                this.removeAllRanges();
                var rangeCount = ranges.length;
                if (rangeCount > 1) {
                    createControlSelection(this, ranges);
                } else if (rangeCount) {
                    this.addRange(ranges[0]);
                }
            };
        } else {
            module.fail("No means of selecting a Range or TextRange was found");
            return false;
        }

        selProto.getRangeAt = function(index) {
            if (index < 0 || index >= this.rangeCount) {
                throw new DOMException("INDEX_SIZE_ERR");
            } else {
                // Clone the range to preserve selection-range independence. See issue 80.
                return this._ranges[index].cloneRange();
            }
        };

        var refreshSelection;

        if (useDocumentSelection) {
            refreshSelection = function(sel) {
                var range;
                if (api.isSelectionValid(sel.win)) {
                    range = sel.docSelection.createRange();
                } else {
                    range = getBody(sel.win.document).createTextRange();
                    range.collapse(true);
                }

                if (sel.docSelection.type == CONTROL) {
                    updateControlSelection(sel);
                } else if (isTextRange(range)) {
                    updateFromTextRange(sel, range);
                } else {
                    updateEmptySelection(sel);
                }
            };
        } else if (isHostMethod(testSelection, "getRangeAt") && typeof testSelection.rangeCount == NUMBER) {
            refreshSelection = function(sel) {
                if (implementsControlRange && implementsDocSelection && sel.docSelection.type == CONTROL) {
                    updateControlSelection(sel);
                } else {
                    sel._ranges.length = sel.rangeCount = sel.nativeSelection.rangeCount;
                    if (sel.rangeCount) {
                        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                            sel._ranges[i] = new api.WrappedRange(sel.nativeSelection.getRangeAt(i));
                        }
                        updateAnchorAndFocusFromRange(sel, sel._ranges[sel.rangeCount - 1], selectionIsBackward(sel.nativeSelection));
                        sel.isCollapsed = selectionIsCollapsed(sel);
                    } else {
                        updateEmptySelection(sel);
                    }
                }
            };
        } else if (selectionHasAnchorAndFocus && typeof testSelection.isCollapsed == BOOLEAN && typeof testRange.collapsed == BOOLEAN && features.implementsDomRange) {
            refreshSelection = function(sel) {
                var range, nativeSel = sel.nativeSelection;
                if (nativeSel.anchorNode) {
                    range = getSelectionRangeAt(nativeSel, 0);
                    sel._ranges = [range];
                    sel.rangeCount = 1;
                    updateAnchorAndFocusFromNativeSelection(sel);
                    sel.isCollapsed = selectionIsCollapsed(sel);
                } else {
                    updateEmptySelection(sel);
                }
            };
        } else {
            module.fail("No means of obtaining a Range or TextRange from the user's selection was found");
            return false;
        }

        selProto.refresh = function(checkForChanges) {
            var oldRanges = checkForChanges ? this._ranges.slice(0) : null;
            var oldAnchorNode = this.anchorNode, oldAnchorOffset = this.anchorOffset;

            refreshSelection(this);
            if (checkForChanges) {
                // Check the range count first
                var i = oldRanges.length;
                if (i != this._ranges.length) {
                    return true;
                }

                // Now check the direction. Checking the anchor position is the same is enough since we're checking all the
                // ranges after this
                if (this.anchorNode != oldAnchorNode || this.anchorOffset != oldAnchorOffset) {
                    return true;
                }

                // Finally, compare each range in turn
                while (i--) {
                    if (!rangesEqual(oldRanges[i], this._ranges[i])) {
                        return true;
                    }
                }
                return false;
            }
        };

        // Removal of a single range
        var removeRangeManually = function(sel, range) {
            var ranges = sel.getAllRanges();
            sel.removeAllRanges();
            for (var i = 0, len = ranges.length; i < len; ++i) {
                if (!rangesEqual(range, ranges[i])) {
                    sel.addRange(ranges[i]);
                }
            }
            if (!sel.rangeCount) {
                updateEmptySelection(sel);
            }
        };

        if (implementsControlRange && implementsDocSelection) {
            selProto.removeRange = function(range) {
                if (this.docSelection.type == CONTROL) {
                    var controlRange = this.docSelection.createRange();
                    var rangeElement = getSingleElementFromRange(range);

                    // Create a new ControlRange containing all the elements in the selected ControlRange minus the
                    // element contained by the supplied range
                    var doc = getDocument(controlRange.item(0));
                    var newControlRange = getBody(doc).createControlRange();
                    var el, removed = false;
                    for (var i = 0, len = controlRange.length; i < len; ++i) {
                        el = controlRange.item(i);
                        if (el !== rangeElement || removed) {
                            newControlRange.add(controlRange.item(i));
                        } else {
                            removed = true;
                        }
                    }
                    newControlRange.select();

                    // Update the wrapped selection based on what's now in the native selection
                    updateControlSelection(this);
                } else {
                    removeRangeManually(this, range);
                }
            };
        } else {
            selProto.removeRange = function(range) {
                removeRangeManually(this, range);
            };
        }

        // Detecting if a selection is backward
        var selectionIsBackward;
        if (!useDocumentSelection && selectionHasAnchorAndFocus && features.implementsDomRange) {
            selectionIsBackward = winSelectionIsBackward;

            selProto.isBackward = function() {
                return selectionIsBackward(this);
            };
        } else {
            selectionIsBackward = selProto.isBackward = function() {
                return false;
            };
        }

        // Create an alias for backwards compatibility. From 1.3, everything is "backward" rather than "backwards"
        selProto.isBackwards = selProto.isBackward;

        // Selection stringifier
        // This is conformant to the old HTML5 selections draft spec but differs from WebKit and Mozilla's implementation.
        // The current spec does not yet define this method.
        selProto.toString = function() {
            var rangeTexts = [];
            for (var i = 0, len = this.rangeCount; i < len; ++i) {
                rangeTexts[i] = "" + this._ranges[i];
            }
            return rangeTexts.join("");
        };

        function assertNodeInSameDocument(sel, node) {
            if (sel.win.document != getDocument(node)) {
                throw new DOMException("WRONG_DOCUMENT_ERR");
            }
        }

        // No current browser conforms fully to the spec for this method, so Rangy's own method is always used
        selProto.collapse = function(node, offset) {
            assertNodeInSameDocument(this, node);
            var range = api.createRange(node);
            range.collapseToPoint(node, offset);
            this.setSingleRange(range);
            this.isCollapsed = true;
        };

        selProto.collapseToStart = function() {
            if (this.rangeCount) {
                var range = this._ranges[0];
                this.collapse(range.startContainer, range.startOffset);
            } else {
                throw new DOMException("INVALID_STATE_ERR");
            }
        };

        selProto.collapseToEnd = function() {
            if (this.rangeCount) {
                var range = this._ranges[this.rangeCount - 1];
                this.collapse(range.endContainer, range.endOffset);
            } else {
                throw new DOMException("INVALID_STATE_ERR");
            }
        };

        // The spec is very specific on how selectAllChildren should be implemented and not all browsers implement it as
        // specified so the native implementation is never used by Rangy.
        selProto.selectAllChildren = function(node) {
            assertNodeInSameDocument(this, node);
            var range = api.createRange(node);
            range.selectNodeContents(node);
            this.setSingleRange(range);
        };

        selProto.deleteFromDocument = function() {
            // Sepcial behaviour required for IE's control selections
            if (implementsControlRange && implementsDocSelection && this.docSelection.type == CONTROL) {
                var controlRange = this.docSelection.createRange();
                var element;
                while (controlRange.length) {
                    element = controlRange.item(0);
                    controlRange.remove(element);
                    dom.removeNode(element);
                }
                this.refresh();
            } else if (this.rangeCount) {
                var ranges = this.getAllRanges();
                if (ranges.length) {
                    this.removeAllRanges();
                    for (var i = 0, len = ranges.length; i < len; ++i) {
                        ranges[i].deleteContents();
                    }
                    // The spec says nothing about what the selection should contain after calling deleteContents on each
                    // range. Firefox moves the selection to where the final selected range was, so we emulate that
                    this.addRange(ranges[len - 1]);
                }
            }
        };

        // The following are non-standard extensions
        selProto.eachRange = function(func, returnValue) {
            for (var i = 0, len = this._ranges.length; i < len; ++i) {
                if ( func( this.getRangeAt(i) ) ) {
                    return returnValue;
                }
            }
        };

        selProto.getAllRanges = function() {
            var ranges = [];
            this.eachRange(function(range) {
                ranges.push(range);
            });
            return ranges;
        };

        selProto.setSingleRange = function(range, direction) {
            this.removeAllRanges();
            this.addRange(range, direction);
        };

        selProto.callMethodOnEachRange = function(methodName, params) {
            var results = [];
            this.eachRange( function(range) {
                results.push( range[methodName].apply(range, params || []) );
            } );
            return results;
        };

        function createStartOrEndSetter(isStart) {
            return function(node, offset) {
                var range;
                if (this.rangeCount) {
                    range = this.getRangeAt(0);
                    range["set" + (isStart ? "Start" : "End")](node, offset);
                } else {
                    range = api.createRange(this.win.document);
                    range.setStartAndEnd(node, offset);
                }
                this.setSingleRange(range, this.isBackward());
            };
        }

        selProto.setStart = createStartOrEndSetter(true);
        selProto.setEnd = createStartOrEndSetter(false);

        // Add select() method to Range prototype. Any existing selection will be removed.
        api.rangePrototype.select = function(direction) {
            getSelection( this.getDocument() ).setSingleRange(this, direction);
        };

        selProto.changeEachRange = function(func) {
            var ranges = [];
            var backward = this.isBackward();

            this.eachRange(function(range) {
                func(range);
                ranges.push(range);
            });

            this.removeAllRanges();
            if (backward && ranges.length == 1) {
                this.addRange(ranges[0], "backward");
            } else {
                this.setRanges(ranges);
            }
        };

        selProto.containsNode = function(node, allowPartial) {
            return this.eachRange( function(range) {
                return range.containsNode(node, allowPartial);
            }, true ) || false;
        };

        selProto.getBookmark = function(containerNode) {
            return {
                backward: this.isBackward(),
                rangeBookmarks: this.callMethodOnEachRange("getBookmark", [containerNode])
            };
        };

        selProto.moveToBookmark = function(bookmark) {
            var selRanges = [];
            for (var i = 0, rangeBookmark, range; rangeBookmark = bookmark.rangeBookmarks[i++]; ) {
                range = api.createRange(this.win);
                range.moveToBookmark(rangeBookmark);
                selRanges.push(range);
            }
            if (bookmark.backward) {
                this.setSingleRange(selRanges[0], "backward");
            } else {
                this.setRanges(selRanges);
            }
        };

        selProto.saveRanges = function() {
            return {
                backward: this.isBackward(),
                ranges: this.callMethodOnEachRange("cloneRange")
            };
        };

        selProto.restoreRanges = function(selRanges) {
            this.removeAllRanges();
            for (var i = 0, range; range = selRanges.ranges[i]; ++i) {
                this.addRange(range, (selRanges.backward && i == 0));
            }
        };

        selProto.toHtml = function() {
            var rangeHtmls = [];
            this.eachRange(function(range) {
                rangeHtmls.push( DomRange.toHtml(range) );
            });
            return rangeHtmls.join("");
        };

        if (features.implementsTextRange) {
            selProto.getNativeTextRange = function() {
                var sel, textRange;
                if ( (sel = this.docSelection) ) {
                    var range = sel.createRange();
                    if (isTextRange(range)) {
                        return range;
                    } else {
                        throw module.createError("getNativeTextRange: selection is a control selection");
                    }
                } else if (this.rangeCount > 0) {
                    return api.WrappedTextRange.rangeToTextRange( this.getRangeAt(0) );
                } else {
                    throw module.createError("getNativeTextRange: selection contains no range");
                }
            };
        }

        function inspect(sel) {
            var rangeInspects = [];
            var anchor = new DomPosition(sel.anchorNode, sel.anchorOffset);
            var focus = new DomPosition(sel.focusNode, sel.focusOffset);
            var name = (typeof sel.getName == "function") ? sel.getName() : "Selection";

            if (typeof sel.rangeCount != "undefined") {
                for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                    rangeInspects[i] = DomRange.inspect(sel.getRangeAt(i));
                }
            }
            return "[" + name + "(Ranges: " + rangeInspects.join(", ") +
                    ")(anchor: " + anchor.inspect() + ", focus: " + focus.inspect() + "]";
        }

        selProto.getName = function() {
            return "WrappedSelection";
        };

        selProto.inspect = function() {
            return inspect(this);
        };

        selProto.detach = function() {
            actOnCachedSelection(this.win, "delete");
            deleteProperties(this);
        };

        WrappedSelection.detachAll = function() {
            actOnCachedSelection(null, "deleteAll");
        };

        WrappedSelection.inspect = inspect;
        WrappedSelection.isDirectionBackward = isDirectionBackward;

        api.Selection = WrappedSelection;

        api.selectionPrototype = selProto;

        api.addShimListener(function(win) {
            if (typeof win.getSelection == "undefined") {
                win.getSelection = function() {
                    return getSelection(win);
                };
            }
            win = null;
        });
    });
    

    /*----------------------------------------------------------------------------------------------------------------*/

    // Wait for document to load before initializing
    var docReady = false;

    var loadHandler = function(e) {
        if (!docReady) {
            docReady = true;
            if (!api.initialized && api.config.autoInitialize) {
                init();
            }
        }
    };

    if (isBrowser) {
        // Test whether the document has already been loaded and initialize immediately if so
        if (document.readyState == "complete") {
            loadHandler();
        } else {
            if (isHostMethod(document, "addEventListener")) {
                document.addEventListener("DOMContentLoaded", loadHandler, false);
            }

            // Add a fallback in case the DOMContentLoaded event isn't supported
            addListener(window, "load", loadHandler);
        }
    }

    return api;
}, this);

/**
 * Class Applier module for Rangy.
 * Adds, removes and toggles classes on Ranges and Selections
 *
 * Part of Rangy, a cross-browser JavaScript range and selection library
 * https://github.com/timdown/rangy
 *
 * Depends on Rangy core.
 *
 * Copyright 2015, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3.1-dev
 * Build date: 20 May 2015
 */
(function(factory, root) {
    if (typeof define == "function" && define.amd) {
        // AMD. Register as an anonymous module with a dependency on Rangy.
        define(["./rangy-core"], factory);
    } else if (typeof module != "undefined" && typeof exports == "object") {
        // Node/CommonJS style
        module.exports = factory( require("rangy") );
    } else {
        // No AMD or CommonJS support so we use the rangy property of root (probably the global variable)
        factory(root.rangy);
    }
})(function(rangy) {
    rangy.createModule("ClassApplier", ["WrappedSelection"], function(api, module) {
        var dom = api.dom;
        var DomPosition = dom.DomPosition;
        var contains = dom.arrayContains;
        var util = api.util;
        var forEach = util.forEach;


        var defaultTagName = "span";
        var createElementNSSupported = util.isHostMethod(document, "createElementNS");

        function each(obj, func) {
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    if (func(i, obj[i]) === false) {
                        return false;
                    }
                }
            }
            return true;
        }

        function trim(str) {
            return str.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        }

        function classNameContainsClass(fullClassName, className) {
            return !!fullClassName && new RegExp("(?:^|\\s)" + className + "(?:\\s|$)").test(fullClassName);
        }

        // Inefficient, inelegant nonsense for IE's svg element, which has no classList and non-HTML className implementation
        function hasClass(el, className) {
            if (typeof el.classList == "object") {
                return el.classList.contains(className);
            } else {
                var classNameSupported = (typeof el.className == "string");
                var elClass = classNameSupported ? el.className : el.getAttribute("class");
                return classNameContainsClass(elClass, className);
            }
        }

        function addClass(el, className) {
            if (typeof el.classList == "object") {
                el.classList.add(className);
            } else {
                var classNameSupported = (typeof el.className == "string");
                var elClass = classNameSupported ? el.className : el.getAttribute("class");
                if (elClass) {
                    if (!classNameContainsClass(elClass, className)) {
                        elClass += " " + className;
                    }
                } else {
                    elClass = className;
                }
                if (classNameSupported) {
                    el.className = elClass;
                } else {
                    el.setAttribute("class", elClass);
                }
            }
        }

        var removeClass = (function() {
            function replacer(matched, whiteSpaceBefore, whiteSpaceAfter) {
                return (whiteSpaceBefore && whiteSpaceAfter) ? " " : "";
            }

            return function(el, className) {
                if (typeof el.classList == "object") {
                    el.classList.remove(className);
                } else {
                    var classNameSupported = (typeof el.className == "string");
                    var elClass = classNameSupported ? el.className : el.getAttribute("class");
                    elClass = elClass.replace(new RegExp("(^|\\s)" + className + "(\\s|$)"), replacer);
                    if (classNameSupported) {
                        el.className = elClass;
                    } else {
                        el.setAttribute("class", elClass);
                    }
                }
            };
        })();

        function getClass(el) {
            var classNameSupported = (typeof el.className == "string");
            return classNameSupported ? el.className : el.getAttribute("class");
        }

        function sortClassName(className) {
            return className && className.split(/\s+/).sort().join(" ");
        }

        function getSortedClassName(el) {
            return sortClassName( getClass(el) );
        }

        function haveSameClasses(el1, el2) {
            return getSortedClassName(el1) == getSortedClassName(el2);
        }

        function hasAllClasses(el, className) {
            var classes = className.split(/\s+/);
            for (var i = 0, len = classes.length; i < len; ++i) {
                if (!hasClass(el, trim(classes[i]))) {
                    return false;
                }
            }
            return true;
        }

        function canTextBeStyled(textNode) {
            var parent = textNode.parentNode;
            return (parent && parent.nodeType == 1 && !/^(textarea|style|script|select|iframe)$/i.test(parent.nodeName));
        }

        function movePosition(position, oldParent, oldIndex, newParent, newIndex) {
            var posNode = position.node, posOffset = position.offset;
            var newNode = posNode, newOffset = posOffset;

            if (posNode == newParent && posOffset > newIndex) {
                ++newOffset;
            }

            if (posNode == oldParent && (posOffset == oldIndex  || posOffset == oldIndex + 1)) {
                newNode = newParent;
                newOffset += newIndex - oldIndex;
            }

            if (posNode == oldParent && posOffset > oldIndex + 1) {
                --newOffset;
            }

            position.node = newNode;
            position.offset = newOffset;
        }

        function movePositionWhenRemovingNode(position, parentNode, index) {
            if (position.node == parentNode && position.offset > index) {
                --position.offset;
            }
        }

        function movePreservingPositions(node, newParent, newIndex, positionsToPreserve) {
            // For convenience, allow newIndex to be -1 to mean "insert at the end".
            if (newIndex == -1) {
                newIndex = newParent.childNodes.length;
            }

            var oldParent = node.parentNode;
            var oldIndex = dom.getNodeIndex(node);

            forEach(positionsToPreserve, function(position) {
                movePosition(position, oldParent, oldIndex, newParent, newIndex);
            });

            // Now actually move the node.
            if (newParent.childNodes.length == newIndex) {
                newParent.appendChild(node);
            } else {
                newParent.insertBefore(node, newParent.childNodes[newIndex]);
            }
        }

        function removePreservingPositions(node, positionsToPreserve) {

            var oldParent = node.parentNode;
            var oldIndex = dom.getNodeIndex(node);

            forEach(positionsToPreserve, function(position) {
                movePositionWhenRemovingNode(position, oldParent, oldIndex);
            });

            dom.removeNode(node);
        }

        function moveChildrenPreservingPositions(node, newParent, newIndex, removeNode, positionsToPreserve) {
            var child, children = [];
            while ( (child = node.firstChild) ) {
                movePreservingPositions(child, newParent, newIndex++, positionsToPreserve);
                children.push(child);
            }
            if (removeNode) {
                removePreservingPositions(node, positionsToPreserve);
            }
            return children;
        }

        function replaceWithOwnChildrenPreservingPositions(element, positionsToPreserve) {
            return moveChildrenPreservingPositions(element, element.parentNode, dom.getNodeIndex(element), true, positionsToPreserve);
        }

        function rangeSelectsAnyText(range, textNode) {
            var textNodeRange = range.cloneRange();
            textNodeRange.selectNodeContents(textNode);

            var intersectionRange = textNodeRange.intersection(range);
            var text = intersectionRange ? intersectionRange.toString() : "";

            return text != "";
        }

        function getEffectiveTextNodes(range) {
            var nodes = range.getNodes([3]);

            // Optimization as per issue 145

            // Remove non-intersecting text nodes from the start of the range
            var start = 0, node;
            while ( (node = nodes[start]) && !rangeSelectsAnyText(range, node) ) {
                ++start;
            }

            // Remove non-intersecting text nodes from the start of the range
            var end = nodes.length - 1;
            while ( (node = nodes[end]) && !rangeSelectsAnyText(range, node) ) {
                --end;
            }

            return nodes.slice(start, end + 1);
        }

        function elementsHaveSameNonClassAttributes(el1, el2) {
            if (el1.attributes.length != el2.attributes.length) return false;
            for (var i = 0, len = el1.attributes.length, attr1, attr2, name; i < len; ++i) {
                attr1 = el1.attributes[i];
                name = attr1.name;
                if (name != "class") {
                    attr2 = el2.attributes.getNamedItem(name);
                    if ( (attr1 === null) != (attr2 === null) ) return false;
                    if (attr1.specified != attr2.specified) return false;
                    if (attr1.specified && attr1.nodeValue !== attr2.nodeValue) return false;
                }
            }
            return true;
        }

        function elementHasNonClassAttributes(el, exceptions) {
            for (var i = 0, len = el.attributes.length, attrName; i < len; ++i) {
                attrName = el.attributes[i].name;
                if ( !(exceptions && contains(exceptions, attrName)) && el.attributes[i].specified && attrName != "class") {
                    return true;
                }
            }
            return false;
        }

        var getComputedStyleProperty = dom.getComputedStyleProperty;
        var isEditableElement = (function() {
            var testEl = document.createElement("div");
            return typeof testEl.isContentEditable == "boolean" ?
                function (node) {
                    return node && node.nodeType == 1 && node.isContentEditable;
                } :
                function (node) {
                    if (!node || node.nodeType != 1 || node.contentEditable == "false") {
                        return false;
                    }
                    return node.contentEditable == "true" || isEditableElement(node.parentNode);
                };
        })();

        function isEditingHost(node) {
            var parent;
            return node && node.nodeType == 1 &&
                (( (parent = node.parentNode) && parent.nodeType == 9 && parent.designMode == "on") ||
                (isEditableElement(node) && !isEditableElement(node.parentNode)));
        }

        function isEditable(node) {
            return (isEditableElement(node) || (node.nodeType != 1 && isEditableElement(node.parentNode))) && !isEditingHost(node);
        }

        var inlineDisplayRegex = /^inline(-block|-table)?$/i;

        function isNonInlineElement(node) {
            return node && node.nodeType == 1 && !inlineDisplayRegex.test(getComputedStyleProperty(node, "display"));
        }

        // White space characters as defined by HTML 4 (http://www.w3.org/TR/html401/struct/text.html)
        var htmlNonWhiteSpaceRegex = /[^\r\n\t\f \u200B]/;

        function isUnrenderedWhiteSpaceNode(node) {
            if (node.data.length == 0) {
                return true;
            }
            if (htmlNonWhiteSpaceRegex.test(node.data)) {
                return false;
            }
            var cssWhiteSpace = getComputedStyleProperty(node.parentNode, "whiteSpace");
            switch (cssWhiteSpace) {
                case "pre":
                case "pre-wrap":
                case "-moz-pre-wrap":
                    return false;
                case "pre-line":
                    if (/[\r\n]/.test(node.data)) {
                        return false;
                    }
            }

            // We now have a whitespace-only text node that may be rendered depending on its context. If it is adjacent to a
            // non-inline element, it will not be rendered. This seems to be a good enough definition.
            return isNonInlineElement(node.previousSibling) || isNonInlineElement(node.nextSibling);
        }

        function getRangeBoundaries(ranges) {
            var positions = [], i, range;
            for (i = 0; range = ranges[i++]; ) {
                positions.push(
                    new DomPosition(range.startContainer, range.startOffset),
                    new DomPosition(range.endContainer, range.endOffset)
                );
            }
            return positions;
        }

        function updateRangesFromBoundaries(ranges, positions) {
            for (var i = 0, range, start, end, len = ranges.length; i < len; ++i) {
                range = ranges[i];
                start = positions[i * 2];
                end = positions[i * 2 + 1];
                range.setStartAndEnd(start.node, start.offset, end.node, end.offset);
            }
        }

        function isSplitPoint(node, offset) {
            if (dom.isCharacterDataNode(node)) {
                if (offset == 0) {
                    return !!node.previousSibling;
                } else if (offset == node.length) {
                    return !!node.nextSibling;
                } else {
                    return true;
                }
            }

            return offset > 0 && offset < node.childNodes.length;
        }

        function splitNodeAt(node, descendantNode, descendantOffset, positionsToPreserve) {
            var newNode, parentNode;
            var splitAtStart = (descendantOffset == 0);

            if (dom.isAncestorOf(descendantNode, node)) {
                return node;
            }

            if (dom.isCharacterDataNode(descendantNode)) {
                var descendantIndex = dom.getNodeIndex(descendantNode);
                if (descendantOffset == 0) {
                    descendantOffset = descendantIndex;
                } else if (descendantOffset == descendantNode.length) {
                    descendantOffset = descendantIndex + 1;
                } else {
                    throw module.createError("splitNodeAt() should not be called with offset in the middle of a data node (" +
                        descendantOffset + " in " + descendantNode.data);
                }
                descendantNode = descendantNode.parentNode;
            }

            if (isSplitPoint(descendantNode, descendantOffset)) {
                // descendantNode is now guaranteed not to be a text or other character node
                newNode = descendantNode.cloneNode(false);
                parentNode = descendantNode.parentNode;
                if (newNode.id) {
                    newNode.removeAttribute("id");
                }
                var child, newChildIndex = 0;

                while ( (child = descendantNode.childNodes[descendantOffset]) ) {
                    movePreservingPositions(child, newNode, newChildIndex++, positionsToPreserve);
                }
                movePreservingPositions(newNode, parentNode, dom.getNodeIndex(descendantNode) + 1, positionsToPreserve);
                return (descendantNode == node) ? newNode : splitNodeAt(node, parentNode, dom.getNodeIndex(newNode), positionsToPreserve);
            } else if (node != descendantNode) {
                newNode = descendantNode.parentNode;

                // Work out a new split point in the parent node
                var newNodeIndex = dom.getNodeIndex(descendantNode);

                if (!splitAtStart) {
                    newNodeIndex++;
                }
                return splitNodeAt(node, newNode, newNodeIndex, positionsToPreserve);
            }
            return node;
        }

        function areElementsMergeable(el1, el2) {
            return el1.namespaceURI == el2.namespaceURI &&
                el1.tagName.toLowerCase() == el2.tagName.toLowerCase() &&
                haveSameClasses(el1, el2) &&
                elementsHaveSameNonClassAttributes(el1, el2) &&
                getComputedStyleProperty(el1, "display") == "inline" &&
                getComputedStyleProperty(el2, "display") == "inline";
        }

        function createAdjacentMergeableTextNodeGetter(forward) {
            var siblingPropName = forward ? "nextSibling" : "previousSibling";

            return function(textNode, checkParentElement) {
                var el = textNode.parentNode;
                var adjacentNode = textNode[siblingPropName];
                if (adjacentNode) {
                    // Can merge if the node's previous/next sibling is a text node
                    if (adjacentNode && adjacentNode.nodeType == 3) {
                        return adjacentNode;
                    }
                } else if (checkParentElement) {
                    // Compare text node parent element with its sibling
                    adjacentNode = el[siblingPropName];
                    if (adjacentNode && adjacentNode.nodeType == 1 && areElementsMergeable(el, adjacentNode)) {
                        var adjacentNodeChild = adjacentNode[forward ? "firstChild" : "lastChild"];
                        if (adjacentNodeChild && adjacentNodeChild.nodeType == 3) {
                            return adjacentNodeChild;
                        }
                    }
                }
                return null;
            };
        }

        var getPreviousMergeableTextNode = createAdjacentMergeableTextNodeGetter(false),
            getNextMergeableTextNode = createAdjacentMergeableTextNodeGetter(true);

    
        function Merge(firstNode) {
            this.isElementMerge = (firstNode.nodeType == 1);
            this.textNodes = [];
            var firstTextNode = this.isElementMerge ? firstNode.lastChild : firstNode;
            if (firstTextNode) {
                this.textNodes[0] = firstTextNode;
            }
        }

        Merge.prototype = {
            doMerge: function(positionsToPreserve) {
                var textNodes = this.textNodes;
                var firstTextNode = textNodes[0];
                if (textNodes.length > 1) {
                    var firstTextNodeIndex = dom.getNodeIndex(firstTextNode);
                    var textParts = [], combinedTextLength = 0, textNode, parent;
                    forEach(textNodes, function(textNode, i) {
                        parent = textNode.parentNode;
                        if (i > 0) {
                            parent.removeChild(textNode);
                            if (!parent.hasChildNodes()) {
                                dom.removeNode(parent);
                            }
                            if (positionsToPreserve) {
                                forEach(positionsToPreserve, function(position) {
                                    // Handle case where position is inside the text node being merged into a preceding node
                                    if (position.node == textNode) {
                                        position.node = firstTextNode;
                                        position.offset += combinedTextLength;
                                    }
                                    // Handle case where both text nodes precede the position within the same parent node
                                    if (position.node == parent && position.offset > firstTextNodeIndex) {
                                        --position.offset;
                                        if (position.offset == firstTextNodeIndex + 1 && i < len - 1) {
                                            position.node = firstTextNode;
                                            position.offset = combinedTextLength;
                                        }
                                    }
                                });
                            }
                        }
                        textParts[i] = textNode.data;
                        combinedTextLength += textNode.data.length;
                    });
                    firstTextNode.data = textParts.join("");
                }
                return firstTextNode.data;
            },

            getLength: function() {
                var i = this.textNodes.length, len = 0;
                while (i--) {
                    len += this.textNodes[i].length;
                }
                return len;
            },

            toString: function() {
                var textParts = [];
                forEach(this.textNodes, function(textNode, i) {
                    textParts[i] = "'" + textNode.data + "'";
                });
                return "[Merge(" + textParts.join(",") + ")]";
            }
        };

        var optionProperties = ["elementTagName", "ignoreWhiteSpace", "applyToEditableOnly", "useExistingElements",
            "removeEmptyElements", "onElementCreate"];

        // TODO: Populate this with every attribute name that corresponds to a property with a different name. Really??
        var attrNamesForProperties = {};

        function ClassApplier(className, options, tagNames) {
            var normalize, i, len, propName, applier = this;
            applier.cssClass = applier.className = className; // cssClass property is for backward compatibility

            var elementPropertiesFromOptions = null, elementAttributes = {};

            // Initialize from options object
            if (typeof options == "object" && options !== null) {
                if (typeof options.elementTagName !== "undefined") {
                    options.elementTagName = options.elementTagName.toLowerCase();
                }
                tagNames = options.tagNames;
                elementPropertiesFromOptions = options.elementProperties;
                elementAttributes = options.elementAttributes;

                for (i = 0; propName = optionProperties[i++]; ) {
                    if (options.hasOwnProperty(propName)) {
                        applier[propName] = options[propName];
                    }
                }
                normalize = options.normalize;
            } else {
                normalize = options;
            }

            // Backward compatibility: the second parameter can also be a Boolean indicating to normalize after unapplying
            applier.normalize = (typeof normalize == "undefined") ? true : normalize;

            // Initialize element properties and attribute exceptions
            applier.attrExceptions = [];
            var el = document.createElement(applier.elementTagName);
            applier.elementProperties = applier.copyPropertiesToElement(elementPropertiesFromOptions, el, true);
            each(elementAttributes, function(attrName, attrValue) {
                applier.attrExceptions.push(attrName);
                // Ensure each attribute value is a string
                elementAttributes[attrName] = "" + attrValue;
            });
            applier.elementAttributes = elementAttributes;

            applier.elementSortedClassName = applier.elementProperties.hasOwnProperty("className") ?
                sortClassName(applier.elementProperties.className + " " + className) : className;

            // Initialize tag names
            applier.applyToAnyTagName = false;
            var type = typeof tagNames;
            if (type == "string") {
                if (tagNames == "*") {
                    applier.applyToAnyTagName = true;
                } else {
                    applier.tagNames = trim(tagNames.toLowerCase()).split(/\s*,\s*/);
                }
            } else if (type == "object" && typeof tagNames.length == "number") {
                applier.tagNames = [];
                for (i = 0, len = tagNames.length; i < len; ++i) {
                    if (tagNames[i] == "*") {
                        applier.applyToAnyTagName = true;
                    } else {
                        applier.tagNames.push(tagNames[i].toLowerCase());
                    }
                }
            } else {
                applier.tagNames = [applier.elementTagName];
            }
        }

        ClassApplier.prototype = {
            elementTagName: defaultTagName,
            elementProperties: {},
            elementAttributes: {},
            ignoreWhiteSpace: true,
            applyToEditableOnly: false,
            useExistingElements: true,
            removeEmptyElements: true,
            onElementCreate: null,

            copyPropertiesToElement: function(props, el, createCopy) {
                var s, elStyle, elProps = {}, elPropsStyle, propValue, elPropValue, attrName;

                for (var p in props) {
                    if (props.hasOwnProperty(p)) {
                        propValue = props[p];
                        elPropValue = el[p];

                        // Special case for class. The copied properties object has the applier's class as well as its own
                        // to simplify checks when removing styling elements
                        if (p == "className") {
                            addClass(el, propValue);
                            addClass(el, this.className);
                            el[p] = sortClassName(el[p]);
                            if (createCopy) {
                                elProps[p] = propValue;
                            }
                        }

                        // Special case for style
                        else if (p == "style") {
                            elStyle = elPropValue;
                            if (createCopy) {
                                elProps[p] = elPropsStyle = {};
                            }
                            for (s in props[p]) {
                                if (props[p].hasOwnProperty(s)) {
                                    elStyle[s] = propValue[s];
                                    if (createCopy) {
                                        elPropsStyle[s] = elStyle[s];
                                    }
                                }
                            }
                            this.attrExceptions.push(p);
                        } else {
                            el[p] = propValue;
                            // Copy the property back from the dummy element so that later comparisons to check whether
                            // elements may be removed are checking against the right value. For example, the href property
                            // of an element returns a fully qualified URL even if it was previously assigned a relative
                            // URL.
                            if (createCopy) {
                                elProps[p] = el[p];

                                // Not all properties map to identically-named attributes
                                attrName = attrNamesForProperties.hasOwnProperty(p) ? attrNamesForProperties[p] : p;
                                this.attrExceptions.push(attrName);
                            }
                        }
                    }
                }

                return createCopy ? elProps : "";
            },

            copyAttributesToElement: function(attrs, el) {
                for (var attrName in attrs) {
                    if (attrs.hasOwnProperty(attrName) && !/^class(?:Name)?$/i.test(attrName)) {
                        el.setAttribute(attrName, attrs[attrName]);
                    }
                }
            },

            appliesToElement: function(el) {
                return contains(this.tagNames, el.tagName.toLowerCase());
            },

            getEmptyElements: function(range) {
                var applier = this;
                return range.getNodes([1], function(el) {
                    return applier.appliesToElement(el) && !el.hasChildNodes();
                });
            },

            hasClass: function(node) {
                return node.nodeType == 1 &&
                    (this.applyToAnyTagName || this.appliesToElement(node)) &&
                    hasClass(node, this.className);
            },

            getSelfOrAncestorWithClass: function(node) {
                while (node) {
                    if (this.hasClass(node)) {
                        return node;
                    }
                    node = node.parentNode;
                }
                return null;
            },

            isModifiable: function(node) {
                return !this.applyToEditableOnly || isEditable(node);
            },

            // White space adjacent to an unwrappable node can be ignored for wrapping
            isIgnorableWhiteSpaceNode: function(node) {
                return this.ignoreWhiteSpace && node && node.nodeType == 3 && isUnrenderedWhiteSpaceNode(node);
            },

            // Normalizes nodes after applying a class to a Range.
            postApply: function(textNodes, range, positionsToPreserve, isUndo) {
                var firstNode = textNodes[0], lastNode = textNodes[textNodes.length - 1];

                var merges = [], currentMerge;

                var rangeStartNode = firstNode, rangeEndNode = lastNode;
                var rangeStartOffset = 0, rangeEndOffset = lastNode.length;

                var textNode, precedingTextNode;

                // Check for every required merge and create a Merge object for each
                forEach(textNodes, function(textNode) {
                    precedingTextNode = getPreviousMergeableTextNode(textNode, !isUndo);
                    if (precedingTextNode) {
                        if (!currentMerge) {
                            currentMerge = new Merge(precedingTextNode);
                            merges.push(currentMerge);
                        }
                        currentMerge.textNodes.push(textNode);
                        if (textNode === firstNode) {
                            rangeStartNode = currentMerge.textNodes[0];
                            rangeStartOffset = rangeStartNode.length;
                        }
                        if (textNode === lastNode) {
                            rangeEndNode = currentMerge.textNodes[0];
                            rangeEndOffset = currentMerge.getLength();
                        }
                    } else {
                        currentMerge = null;
                    }
                });

                // Test whether the first node after the range needs merging
                var nextTextNode = getNextMergeableTextNode(lastNode, !isUndo);

                if (nextTextNode) {
                    if (!currentMerge) {
                        currentMerge = new Merge(lastNode);
                        merges.push(currentMerge);
                    }
                    currentMerge.textNodes.push(nextTextNode);
                }

                // Apply the merges
                if (merges.length) {
                    for (i = 0, len = merges.length; i < len; ++i) {
                        merges[i].doMerge(positionsToPreserve);
                    }

                    // Set the range boundaries
                    range.setStartAndEnd(rangeStartNode, rangeStartOffset, rangeEndNode, rangeEndOffset);
                }
            },

            createContainer: function(parentNode) {
                var doc = dom.getDocument(parentNode);
                var namespace;
                var el = createElementNSSupported && !dom.isHtmlNamespace(parentNode) && (namespace = parentNode.namespaceURI) ?
                    doc.createElementNS(parentNode.namespaceURI, this.elementTagName) :
                    doc.createElement(this.elementTagName);

                this.copyPropertiesToElement(this.elementProperties, el, false);
                this.copyAttributesToElement(this.elementAttributes, el);
                addClass(el, this.className);
                if (this.onElementCreate) {
                    this.onElementCreate(el, this);
                }
                return el;
            },

            elementHasProperties: function(el, props) {
                var applier = this;
                return each(props, function(p, propValue) {
                    if (p == "className") {
                        // For checking whether we should reuse an existing element, we just want to check that the element
                        // has all the classes specified in the className property. When deciding whether the element is
                        // removable when unapplying a class, there is separate special handling to check whether the
                        // element has extra classes so the same simple check will do.
                        return hasAllClasses(el, propValue);
                    } else if (typeof propValue == "object") {
                        if (!applier.elementHasProperties(el[p], propValue)) {
                            return false;
                        }
                    } else if (el[p] !== propValue) {
                        return false;
                    }
                });
            },

            elementHasAttributes: function(el, attrs) {
                return each(attrs, function(name, value) {
                    if (el.getAttribute(name) !== value) {
                        return false;
                    }
                });
            },

            applyToTextNode: function(textNode, positionsToPreserve) {

                // Check whether the text node can be styled. Text within a <style> or <script> element, for example,
                // should not be styled. See issue 283.
                if (canTextBeStyled(textNode)) {
                    var parent = textNode.parentNode;
                    if (parent.childNodes.length == 1 &&
                        this.useExistingElements &&
                        this.appliesToElement(parent) &&
                        this.elementHasProperties(parent, this.elementProperties) &&
                        this.elementHasAttributes(parent, this.elementAttributes)) {

                        addClass(parent, this.className);
                    } else {
                        var textNodeParent = textNode.parentNode;
                        var el = this.createContainer(textNodeParent);
                        textNodeParent.insertBefore(el, textNode);
                        el.appendChild(textNode);
                    }
                }

            },

            isRemovable: function(el) {
                return el.tagName.toLowerCase() == this.elementTagName &&
                    getSortedClassName(el) == this.elementSortedClassName &&
                    this.elementHasProperties(el, this.elementProperties) &&
                    !elementHasNonClassAttributes(el, this.attrExceptions) &&
                    this.elementHasAttributes(el, this.elementAttributes) &&
                    this.isModifiable(el);
            },

            isEmptyContainer: function(el) {
                var childNodeCount = el.childNodes.length;
                return el.nodeType == 1 &&
                    this.isRemovable(el) &&
                    (childNodeCount == 0 || (childNodeCount == 1 && this.isEmptyContainer(el.firstChild)));
            },

            removeEmptyContainers: function(range) {
                var applier = this;
                var nodesToRemove = range.getNodes([1], function(el) {
                    return applier.isEmptyContainer(el);
                });

                var rangesToPreserve = [range];
                var positionsToPreserve = getRangeBoundaries(rangesToPreserve);

                forEach(nodesToRemove, function(node) {
                    removePreservingPositions(node, positionsToPreserve);
                });

                // Update the range from the preserved boundary positions
                updateRangesFromBoundaries(rangesToPreserve, positionsToPreserve);
            },

            undoToTextNode: function(textNode, range, ancestorWithClass, positionsToPreserve) {
                if (!range.containsNode(ancestorWithClass)) {
                    // Split out the portion of the ancestor from which we can remove the class
                    //var parent = ancestorWithClass.parentNode, index = dom.getNodeIndex(ancestorWithClass);
                    var ancestorRange = range.cloneRange();
                    ancestorRange.selectNode(ancestorWithClass);
                    if (ancestorRange.isPointInRange(range.endContainer, range.endOffset)) {
                        splitNodeAt(ancestorWithClass, range.endContainer, range.endOffset, positionsToPreserve);
                        range.setEndAfter(ancestorWithClass);
                    }
                    if (ancestorRange.isPointInRange(range.startContainer, range.startOffset)) {
                        ancestorWithClass = splitNodeAt(ancestorWithClass, range.startContainer, range.startOffset, positionsToPreserve);
                    }
                }

                if (this.isRemovable(ancestorWithClass)) {
                    replaceWithOwnChildrenPreservingPositions(ancestorWithClass, positionsToPreserve);
                } else {
                    removeClass(ancestorWithClass, this.className);
                }
            },

            splitAncestorWithClass: function(container, offset, positionsToPreserve) {
                var ancestorWithClass = this.getSelfOrAncestorWithClass(container);
                if (ancestorWithClass) {
                    splitNodeAt(ancestorWithClass, container, offset, positionsToPreserve);
                }
            },

            undoToAncestor: function(ancestorWithClass, positionsToPreserve) {
                if (this.isRemovable(ancestorWithClass)) {
                    replaceWithOwnChildrenPreservingPositions(ancestorWithClass, positionsToPreserve);
                } else {
                    removeClass(ancestorWithClass, this.className);
                }
            },

            applyToRange: function(range, rangesToPreserve) {
                var applier = this;
                rangesToPreserve = rangesToPreserve || [];

                // Create an array of range boundaries to preserve
                var positionsToPreserve = getRangeBoundaries(rangesToPreserve || []);

                range.splitBoundariesPreservingPositions(positionsToPreserve);

                // Tidy up the DOM by removing empty containers
                if (applier.removeEmptyElements) {
                    applier.removeEmptyContainers(range);
                }

                var textNodes = getEffectiveTextNodes(range);

                if (textNodes.length) {
                    forEach(textNodes, function(textNode) {
                        if (!applier.isIgnorableWhiteSpaceNode(textNode) && !applier.getSelfOrAncestorWithClass(textNode) &&
                                applier.isModifiable(textNode)) {
                            applier.applyToTextNode(textNode, positionsToPreserve);
                        }
                    });
                    var lastTextNode = textNodes[textNodes.length - 1];
                    range.setStartAndEnd(textNodes[0], 0, lastTextNode, lastTextNode.length);
                    if (applier.normalize) {
                        applier.postApply(textNodes, range, positionsToPreserve, false);
                    }

                    // Update the ranges from the preserved boundary positions
                    updateRangesFromBoundaries(rangesToPreserve, positionsToPreserve);
                }

                // Apply classes to any appropriate empty elements
                var emptyElements = applier.getEmptyElements(range);

                forEach(emptyElements, function(el) {
                    addClass(el, applier.className);
                });
            },

            applyToRanges: function(ranges) {

                var i = ranges.length;
                while (i--) {
                    this.applyToRange(ranges[i], ranges);
                }


                return ranges;
            },

            applyToSelection: function(win) {
                var sel = api.getSelection(win);
                sel.setRanges( this.applyToRanges(sel.getAllRanges()) );
            },

            undoToRange: function(range, rangesToPreserve) {
                var applier = this;
                // Create an array of range boundaries to preserve
                rangesToPreserve = rangesToPreserve || [];
                var positionsToPreserve = getRangeBoundaries(rangesToPreserve);


                range.splitBoundariesPreservingPositions(positionsToPreserve);

                // Tidy up the DOM by removing empty containers
                if (applier.removeEmptyElements) {
                    applier.removeEmptyContainers(range, positionsToPreserve);
                }

                var textNodes = getEffectiveTextNodes(range);
                var textNode, ancestorWithClass;
                var lastTextNode = textNodes[textNodes.length - 1];

                if (textNodes.length) {
                    applier.splitAncestorWithClass(range.endContainer, range.endOffset, positionsToPreserve);
                    applier.splitAncestorWithClass(range.startContainer, range.startOffset, positionsToPreserve);
                    for (var i = 0, len = textNodes.length; i < len; ++i) {
                        textNode = textNodes[i];
                        ancestorWithClass = applier.getSelfOrAncestorWithClass(textNode);
                        if (ancestorWithClass && applier.isModifiable(textNode)) {
                            applier.undoToAncestor(ancestorWithClass, positionsToPreserve);
                        }
                    }
                    // Ensure the range is still valid
                    range.setStartAndEnd(textNodes[0], 0, lastTextNode, lastTextNode.length);


                    if (applier.normalize) {
                        applier.postApply(textNodes, range, positionsToPreserve, true);
                    }

                    // Update the ranges from the preserved boundary positions
                    updateRangesFromBoundaries(rangesToPreserve, positionsToPreserve);
                }

                // Remove class from any appropriate empty elements
                var emptyElements = applier.getEmptyElements(range);

                forEach(emptyElements, function(el) {
                    removeClass(el, applier.className);
                });
            },

            undoToRanges: function(ranges) {
                // Get ranges returned in document order
                var i = ranges.length;

                while (i--) {
                    this.undoToRange(ranges[i], ranges);
                }

                return ranges;
            },

            undoToSelection: function(win) {
                var sel = api.getSelection(win);
                var ranges = api.getSelection(win).getAllRanges();
                this.undoToRanges(ranges);
                sel.setRanges(ranges);
            },

            isAppliedToRange: function(range) {
                if (range.collapsed || range.toString() == "") {
                    return !!this.getSelfOrAncestorWithClass(range.commonAncestorContainer);
                } else {
                    var textNodes = range.getNodes( [3] );
                    if (textNodes.length)
                    for (var i = 0, textNode; textNode = textNodes[i++]; ) {
                        if (!this.isIgnorableWhiteSpaceNode(textNode) && rangeSelectsAnyText(range, textNode) &&
                                this.isModifiable(textNode) && !this.getSelfOrAncestorWithClass(textNode)) {
                            return false;
                        }
                    }
                    return true;
                }
            },

            isAppliedToRanges: function(ranges) {
                var i = ranges.length;
                if (i == 0) {
                    return false;
                }
                while (i--) {
                    if (!this.isAppliedToRange(ranges[i])) {
                        return false;
                    }
                }
                return true;
            },

            isAppliedToSelection: function(win) {
                var sel = api.getSelection(win);
                return this.isAppliedToRanges(sel.getAllRanges());
            },

            toggleRange: function(range) {
                if (this.isAppliedToRange(range)) {
                    this.undoToRange(range);
                } else {
                    this.applyToRange(range);
                }
            },

            toggleSelection: function(win) {
                if (this.isAppliedToSelection(win)) {
                    this.undoToSelection(win);
                } else {
                    this.applyToSelection(win);
                }
            },

            getElementsWithClassIntersectingRange: function(range) {
                var elements = [];
                var applier = this;
                range.getNodes([3], function(textNode) {
                    var el = applier.getSelfOrAncestorWithClass(textNode);
                    if (el && !contains(elements, el)) {
                        elements.push(el);
                    }
                });
                return elements;
            },

            detach: function() {}
        };

        function createClassApplier(className, options, tagNames) {
            return new ClassApplier(className, options, tagNames);
        }

        ClassApplier.util = {
            hasClass: hasClass,
            addClass: addClass,
            removeClass: removeClass,
            getClass: getClass,
            hasSameClasses: haveSameClasses,
            hasAllClasses: hasAllClasses,
            replaceWithOwnChildren: replaceWithOwnChildrenPreservingPositions,
            elementsHaveSameNonClassAttributes: elementsHaveSameNonClassAttributes,
            elementHasNonClassAttributes: elementHasNonClassAttributes,
            splitNodeAt: splitNodeAt,
            isEditableElement: isEditableElement,
            isEditingHost: isEditingHost,
            isEditable: isEditable
        };

        api.CssClassApplier = api.ClassApplier = ClassApplier;
        api.createClassApplier = createClassApplier;
        util.createAliasForDeprecatedMethod(api, "createCssClassApplier", "createClassApplier", module);
    });
    
    return rangy;
}, this);

/**
 * Selection save and restore module for Rangy.
 * Saves and restores user selections using marker invisible elements in the DOM.
 *
 * Part of Rangy, a cross-browser JavaScript range and selection library
 * https://github.com/timdown/rangy
 *
 * Depends on Rangy core.
 *
 * Copyright 2015, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3.1-dev
 * Build date: 20 May 2015
 */
(function(factory, root) {
    if (typeof define == "function" && define.amd) {
        // AMD. Register as an anonymous module with a dependency on Rangy.
        define(["./rangy-core"], factory);
    } else if (typeof module != "undefined" && typeof exports == "object") {
        // Node/CommonJS style
        module.exports = factory( require("rangy") );
    } else {
        // No AMD or CommonJS support so we use the rangy property of root (probably the global variable)
        factory(root.rangy);
    }
})(function(rangy) {
    rangy.createModule("SaveRestore", ["WrappedRange"], function(api, module) {
        var dom = api.dom;
        var removeNode = dom.removeNode;
        var isDirectionBackward = api.Selection.isDirectionBackward;
        var markerTextChar = "\ufeff";

        function gEBI(id, doc) {
            return (doc || document).getElementById(id);
        }

        function insertRangeBoundaryMarker(range, atStart) {
            var markerId = "selectionBoundary_" + (+new Date()) + "_" + ("" + Math.random()).slice(2);
            var markerEl;
            var doc = dom.getDocument(range.startContainer);

            // Clone the Range and collapse to the appropriate boundary point
            var boundaryRange = range.cloneRange();
            boundaryRange.collapse(atStart);

            // Create the marker element containing a single invisible character using DOM methods and insert it
            markerEl = doc.createElement("span");
            markerEl.id = markerId;
            markerEl.style.lineHeight = "0";
            markerEl.style.display = "none";
            markerEl.className = "rangySelectionBoundary";
            markerEl.appendChild(doc.createTextNode(markerTextChar));

            boundaryRange.insertNode(markerEl);
            return markerEl;
        }

        function setRangeBoundary(doc, range, markerId, atStart) {
            var markerEl = gEBI(markerId, doc);
            if (markerEl) {
                range[atStart ? "setStartBefore" : "setEndBefore"](markerEl);
                removeNode(markerEl);
            } else {
                module.warn("Marker element has been removed. Cannot restore selection.");
            }
        }

        function compareRanges(r1, r2) {
            return r2.compareBoundaryPoints(r1.START_TO_START, r1);
        }

        function saveRange(range, direction) {
            var startEl, endEl, doc = api.DomRange.getRangeDocument(range), text = range.toString();
            var backward = isDirectionBackward(direction);

            if (range.collapsed) {
                endEl = insertRangeBoundaryMarker(range, false);
                return {
                    document: doc,
                    markerId: endEl.id,
                    collapsed: true
                };
            } else {
                endEl = insertRangeBoundaryMarker(range, false);
                startEl = insertRangeBoundaryMarker(range, true);

                return {
                    document: doc,
                    startMarkerId: startEl.id,
                    endMarkerId: endEl.id,
                    collapsed: false,
                    backward: backward,
                    toString: function() {
                        return "original text: '" + text + "', new text: '" + range.toString() + "'";
                    }
                };
            }
        }

        function restoreRange(rangeInfo, normalize) {
            var doc = rangeInfo.document;
            if (typeof normalize == "undefined") {
                normalize = true;
            }
            var range = api.createRange(doc);
            if (rangeInfo.collapsed) {
                var markerEl = gEBI(rangeInfo.markerId, doc);
                if (markerEl) {
                    markerEl.style.display = "inline";
                    var previousNode = markerEl.previousSibling;

                    // Workaround for issue 17
                    if (previousNode && previousNode.nodeType == 3) {
                        removeNode(markerEl);
                        range.collapseToPoint(previousNode, previousNode.length);
                    } else {
                        range.collapseBefore(markerEl);
                        removeNode(markerEl);
                    }
                } else {
                    module.warn("Marker element has been removed. Cannot restore selection.");
                }
            } else {
                setRangeBoundary(doc, range, rangeInfo.startMarkerId, true);
                setRangeBoundary(doc, range, rangeInfo.endMarkerId, false);
            }

            if (normalize) {
                range.normalizeBoundaries();
            }

            return range;
        }

        function saveRanges(ranges, direction) {
            var rangeInfos = [], range, doc;
            var backward = isDirectionBackward(direction);

            // Order the ranges by position within the DOM, latest first, cloning the array to leave the original untouched
            ranges = ranges.slice(0);
            ranges.sort(compareRanges);

            for (var i = 0, len = ranges.length; i < len; ++i) {
                rangeInfos[i] = saveRange(ranges[i], backward);
            }

            // Now that all the markers are in place and DOM manipulation over, adjust each range's boundaries to lie
            // between its markers
            for (i = len - 1; i >= 0; --i) {
                range = ranges[i];
                doc = api.DomRange.getRangeDocument(range);
                if (range.collapsed) {
                    range.collapseAfter(gEBI(rangeInfos[i].markerId, doc));
                } else {
                    range.setEndBefore(gEBI(rangeInfos[i].endMarkerId, doc));
                    range.setStartAfter(gEBI(rangeInfos[i].startMarkerId, doc));
                }
            }

            return rangeInfos;
        }

        function saveSelection(win) {
            if (!api.isSelectionValid(win)) {
                module.warn("Cannot save selection. This usually happens when the selection is collapsed and the selection document has lost focus.");
                return null;
            }
            var sel = api.getSelection(win);
            var ranges = sel.getAllRanges();
            var backward = (ranges.length == 1 && sel.isBackward());

            var rangeInfos = saveRanges(ranges, backward);

            // Ensure current selection is unaffected
            if (backward) {
                sel.setSingleRange(ranges[0], backward);
            } else {
                sel.setRanges(ranges);
            }

            return {
                win: win,
                rangeInfos: rangeInfos,
                restored: false
            };
        }

        function restoreRanges(rangeInfos) {
            var ranges = [];

            // Ranges are in reverse order of appearance in the DOM. We want to restore earliest first to avoid
            // normalization affecting previously restored ranges.
            var rangeCount = rangeInfos.length;

            for (var i = rangeCount - 1; i >= 0; i--) {
                ranges[i] = restoreRange(rangeInfos[i], true);
            }

            return ranges;
        }

        function restoreSelection(savedSelection, preserveDirection) {
            if (!savedSelection.restored) {
                var rangeInfos = savedSelection.rangeInfos;
                var sel = api.getSelection(savedSelection.win);
                var ranges = restoreRanges(rangeInfos), rangeCount = rangeInfos.length;

                if (rangeCount == 1 && preserveDirection && api.features.selectionHasExtend && rangeInfos[0].backward) {
                    sel.removeAllRanges();
                    sel.addRange(ranges[0], true);
                } else {
                    sel.setRanges(ranges);
                }

                savedSelection.restored = true;
            }
        }

        function removeMarkerElement(doc, markerId) {
            var markerEl = gEBI(markerId, doc);
            if (markerEl) {
                removeNode(markerEl);
            }
        }

        function removeMarkers(savedSelection) {
            var rangeInfos = savedSelection.rangeInfos;
            for (var i = 0, len = rangeInfos.length, rangeInfo; i < len; ++i) {
                rangeInfo = rangeInfos[i];
                if (rangeInfo.collapsed) {
                    removeMarkerElement(savedSelection.doc, rangeInfo.markerId);
                } else {
                    removeMarkerElement(savedSelection.doc, rangeInfo.startMarkerId);
                    removeMarkerElement(savedSelection.doc, rangeInfo.endMarkerId);
                }
            }
        }

        api.util.extend(api, {
            saveRange: saveRange,
            restoreRange: restoreRange,
            saveRanges: saveRanges,
            restoreRanges: restoreRanges,
            saveSelection: saveSelection,
            restoreSelection: restoreSelection,
            removeMarkerElement: removeMarkerElement,
            removeMarkers: removeMarkers
        });
    });
    
    return rangy;
}, this);

/*
 * Undo.js - A undo/redo framework for JavaScript
 *
 * http://jzaefferer.github.com/undo
 *
 * Copyright (c) 2011 Jörn Zaefferer
 *
 * MIT licensed.
 */
(function() {
	// based on Backbone.js' inherits	
	var ctor = function() {};
	var inherits = function(parent, protoProps) {
			var child;
			if (protoProps && protoProps.hasOwnProperty('constructor')) {
				child = protoProps.constructor;
			} else {
				child = function() {
					return parent.apply(this, arguments);
				};
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			if (protoProps) extend(child.prototype, protoProps);
			child.prototype.constructor = child;
			child.__super__ = parent.prototype;
			return child;
		};

	function extend(target, ref) {
		var name, value;
		for (name in ref) {
			value = ref[name];
			if (value !== undefined) {
				target[name] = value;
			}
		}
		return target;
	};
	var Undo = {
		version: '0.1.15'
	};
	Undo.Stack = function() {
		this.commands = [];
		this.stackPosition = -1;
		this.savePosition = -1;
	};
	extend(Undo.Stack.prototype, {
		execute: function(command) {
			this._clearRedo();
			command.execute();
			this.commands.push(command);
			this.stackPosition++;
			this.changed();
		},
		undo: function() {
			this.commands[this.stackPosition].undo();
			this.stackPosition--;
			this.changed();
		},
		canUndo: function() {
			return this.stackPosition >= 0;
		},
		redo: function() {
			this.stackPosition++;
			this.commands[this.stackPosition].redo();
			this.changed();
		},
		canRedo: function() {
			return this.stackPosition < this.commands.length - 1;
		},
		save: function() {
			this.savePosition = this.stackPosition;
			this.changed();
		},
		dirty: function() {
			return this.stackPosition != this.savePosition;
		},
		_clearRedo: function() {
			// TODO there's probably a more efficient way for this
			this.commands = this.commands.slice(0, this.stackPosition + 1);
		},
		changed: function() {
			// do nothing, override
		}
	});
	Undo.Command = function(name) {
		this.name = name;
	}
	var up = new Error("override me!");
	extend(Undo.Command.prototype, {
		execute: function() {
			throw up;
		},
		undo: function() {
			throw up;
		},
		redo: function() {
			this.execute();
		}
	});
	Undo.Command.extend = function(protoProps) {
		var child = inherits(this, protoProps);
		child.extend = Undo.Command.extend;
		return child;
	};
	// AMD support
	if (typeof define === "function" && define.amd) {
		// Define as an anonymous module
		define(Undo);
	} else if (typeof module != "undefined" && module.exports) {
		module.exports = Undo
	} else {
		this.Undo = Undo;
	}
}).call(this);

/*
 * Medium.js - Taking control of content editable
 * Copyright 2013-2015, Jacob Kelley - http://jakiestfu.com/
 * Released under the MIT Licence
 * http://opensource.org/licenses/MIT
 *
 * Github:  http://github.com/jakiestfu/Medium.js/
 * Version: master
 */

(function (w, d) {
	'use strict';

	var rangy = w['rangy'] || null,
		undo = w['Undo'] || null,
		key = w.Key = {
			'backspace': 8,
			'tab': 9,
			'enter': 13,
			'shift': 16,
			'ctrl': 17,
			'alt': 18,
			'pause': 19,
			'capsLock': 20,
			'escape': 27,
			'pageUp': 33,
			'pageDown': 34,
			'end': 35,
			'home': 36,
			'leftArrow': 37,
			'upArrow': 38,
			'rightArrow': 39,
			'downArrow': 40,
			'insert': 45,
			'delete': 46,
			'0': 48,
			'1': 49,
			'2': 50,
			'3': 51,
			'4': 52,
			'5': 53,
			'6': 54,
			'7': 55,
			'8': 56,
			'9': 57,
			'a': 65,
			'b': 66,
			'c': 67,
			'd': 68,
			'e': 69,
			'f': 70,
			'g': 71,
			'h': 72,
			'i': 73,
			'j': 74,
			'k': 75,
			'l': 76,
			'm': 77,
			'n': 78,
			'o': 79,
			'p': 80,
			'q': 81,
			'r': 82,
			's': 83,
			't': 84,
			'u': 85,
			'v': 86,
			'w': 87,
			'x': 88,
			'y': 89,
			'z': 90,
			'leftWindow': 91,
			'rightWindowKey': 92,
			'select': 93,
			'numpad0': 96,
			'numpad1': 97,
			'numpad2': 98,
			'numpad3': 99,
			'numpad4': 100,
			'numpad5': 101,
			'numpad6': 102,
			'numpad7': 103,
			'numpad8': 104,
			'numpad9': 105,
			'multiply': 106,
			'add': 107,
			'subtract': 109,
			'decimalPoint': 110,
			'divide': 111,
			'f1': 112,
			'f2': 113,
			'f3': 114,
			'f4': 115,
			'f5': 116,
			'f6': 117,
			'f7': 118,
			'f8': 119,
			'f9': 120,
			'f10': 121,
			'f11': 122,
			'f12': 123,
			'numLock': 144,
			'scrollLock': 145,
			'semiColon': 186,
			'equalSign': 187,
			'comma': 188,
			'dash': 189,
			'period': 190,
			'forwardSlash': 191,
			'graveAccent': 192,
			'openBracket': 219,
			'backSlash': 220,
			'closeBracket': 221,
			'singleQuote': 222
		},
		Medium = (function () {

			/**
 * Medium.js - Taking control of content editable
 * @constructor
 * @param {Object} [userSettings] user options
 */
var Medium = function (userSettings) {
	"use strict";

	var medium = this,
		defaultSettings = utils.deepExtend({}, Medium.defaultSettings),
		settings = this.settings = utils.deepExtend(defaultSettings, userSettings),
		cache = new Medium.Cache(),
		selection = new Medium.Selection(),
		action = new Medium.Action(this),
		cursor = new Medium.Cursor(this),
		undoable = new Medium.Undoable(this),
		el,
		newVal,
		i;

	for (i in defaultSettings) if (defaultSettings.hasOwnProperty(i)) {
		// Override defaults with data-attributes
		if (
			typeof defaultSettings[i] !== 'object'
			&& defaultSettings.hasOwnProperty(i)
			&& settings.element.getAttribute('data-medium-' + key)
		) {
			newVal = settings.element.getAttribute('data-medium-' + key);

			if (newVal.toLowerCase() === "false" || newVal.toLowerCase() === "true") {
				newVal = newVal.toLowerCase() === "true";
			}
			settings[i] = newVal;
		}
	}

	if (settings.modifiers) {
		for (i in settings.modifiers) if (settings.modifiers.hasOwnProperty(i)) {
			if (typeof(key[i]) !== 'undefined') {
				settings.modifiers[key[i]] = settings.modifiers[i];
			}
		}
	}

	if (settings.keyContext) {
		for (i in settings.keyContext) if (settings.keyContext.hasOwnProperty(i)) {
			if (typeof(key[i]) !== 'undefined') {
				settings.keyContext[key[i]] = settings.keyContext[i];
			}
		}
	}

	// Extend Settings
	el = settings.element;

	// Editable
	el.contentEditable = true;
	el.className
		+= (' ' + settings.cssClasses.editor)
	+ (' ' + settings.cssClasses.editor + '-' + settings.mode);

	settings.tags = (settings.tags || {});
	if (settings.tags.outerLevel) {
		settings.tags.outerLevel = settings.tags.outerLevel.concat([settings.tags.paragraph, settings.tags.horizontalRule]);
	}

	this.settings = settings;
	this.element = el;
	el.medium = this;

	this.action = action;
	this.cache = cache;
	this.cursor = cursor;
	this.utils = utils;
	this.selection = selection;

	// Initialize editor
	medium.clean();
	medium.placeholders();
	action.preserveElementFocus();

	this.dirty = false;
	this.undoable = undoable;
	this.makeUndoable = undoable.makeUndoable;

	if (settings.drag) {
		medium.drag = new Medium.Drag(medium);
		medium.drag.setup();
	}

	action.setup();

	// Set as initialized
	cache.initialized = true;

	this.makeUndoable(true);
};

Medium.prototype = {
	placeholders: function () {
		//in IE8, just gracefully degrade to no placeholders
		if (!w.getComputedStyle) return;

		var s = this.settings,
			placeholder = this.placeholder || (this.placeholder = d.createElement('div')),
			el = this.element,
			style = placeholder.style,
			elStyle = w.getComputedStyle(el, null),
			qStyle = function (prop) {
				return elStyle.getPropertyValue(prop)
			},
			text = utils.text(el),
			cursor = this.cursor,
			childCount = el.children.length,
			hasFocus = Medium.activeElement === el;

		el.placeholder = placeholder;

		// Empty Editor
		if (
			!hasFocus
			&& text.length < 1
			&& childCount < 2
		) {
			if (el.placeHolderActive) return;

			if (!el.innerHTML.match('<' + s.tags.paragraph)) {
				el.innerHTML = '';
			}

			// We need to add placeholders
			if (s.placeholder.length > 0) {
				if (!placeholder.setup) {
					placeholder.setup = true;

					//background & background color
					style.background = qStyle('background');
					style.backgroundColor = qStyle('background-color');

					//text size & text color
					style.fontSize = qStyle('font-size');
					style.color = elStyle.color;

					//begin box-model
					//margin
					style.marginTop = qStyle('margin-top');
					style.marginBottom = qStyle('margin-bottom');
					style.marginLeft = qStyle('margin-left');
					style.marginRight = qStyle('margin-right');

					//padding
					style.paddingTop = qStyle('padding-top');
					style.paddingBottom = qStyle('padding-bottom');
					style.paddingLeft = qStyle('padding-left');
					style.paddingRight = qStyle('padding-right');

					//border
					style.borderTopWidth = qStyle('border-top-width');
					style.borderTopColor = qStyle('border-top-color');
					style.borderTopStyle = qStyle('border-top-style');
					style.borderBottomWidth = qStyle('border-bottom-width');
					style.borderBottomColor = qStyle('border-bottom-color');
					style.borderBottomStyle = qStyle('border-bottom-style');
					style.borderLeftWidth = qStyle('border-left-width');
					style.borderLeftColor = qStyle('border-left-color');
					style.borderLeftStyle = qStyle('border-left-style');
					style.borderRightWidth = qStyle('border-right-width');
					style.borderRightColor = qStyle('border-right-color');
					style.borderRightStyle = qStyle('border-right-style');
					//end box model

					//element setup
					placeholder.className = s.cssClasses.placeholder + ' ' + s.cssClasses.placeholder + '-' + s.mode;
					placeholder.innerHTML = '<div>' + s.placeholder + '</div>';
					el.parentNode.insertBefore(placeholder, el);
				}

				el.className += ' ' + s.cssClasses.clear;

				style.display = '';
				// Add base P tag and do auto focus, give it a min height if el has one
				style.minHeight = el.clientHeight + 'px';
				style.minWidth = el.clientWidth + 'px';

				if ( s.mode !== Medium.inlineMode && s.mode !== Medium.inlineRichMode ) {
					this.setupContents();

					if (childCount === 0 && el.firstChild) {
						cursor.set(this, 0, el.firstChild);
					}
				}
			}
			el.placeHolderActive = true;
		} else if (el.placeHolderActive) {
			el.placeHolderActive = false;
			style.display = 'none';
			el.className = utils.trim(el.className.replace(s.cssClasses.clear, ''));
			this.setupContents();
		}
	},

	/**
	 * Cleans element
	 * @param {HtmlElement} [el] default is settings.element
	 */
	clean: function (el) {

		/*
		 * Deletes invalid nodes
		 * Removes Attributes
		 */
		var s = this.settings,
			placeholderClass = s.cssClasses.placeholder,
			attributesToRemove = (s.attributes || {}).remove || [],
			tags = s.tags || {},
			onlyOuter = tags.outerLevel || null,
			onlyInner = tags.innerLevel || null,
			outerSwitch = {},
			innerSwitch = {},
			paragraphTag = (tags.paragraph || '').toUpperCase(),
			html = this.html,
			attr,
			text,
			j;

		el = el || s.element;

		if (s.mode === Medium.inlineRichMode) {
			onlyOuter = s.tags.innerLevel;
		}

		if (onlyOuter !== null) {
			for (j = 0; j < onlyOuter.length; j++) {
				outerSwitch[onlyOuter[j].toUpperCase()] = true;
			}
		}

		if (onlyInner !== null) {
			for (j = 0; j < onlyInner.length; j++) {
				innerSwitch[onlyInner[j].toUpperCase()] = true;
			}
		}

		utils.traverseAll(el, {
			element: function(child, i, depth, parent) {
				var nodeName = child.nodeName,
					shouldDelete = true,
					attrValue;

				// Remove attributes
				for (j = 0; j < attributesToRemove.length; j++) {
					attr = attributesToRemove[j];
					if (child.hasAttribute(attr)) {
						attrValue = child.getAttribute(attr);
						if (attrValue !== placeholderClass && (!attrValue.match('medium-') && attr === 'class')) {
							child.removeAttribute(attr);
						}
					}
				}

				if ( onlyOuter === null && onlyInner === null ) {
					return;
				}

				if (depth  === 1 && outerSwitch[nodeName] !== undefined) {
					shouldDelete = false;
				} else if (depth > 1 && innerSwitch[nodeName] !== undefined) {
					shouldDelete = false;
				}

				// Convert tags or delete
				if (shouldDelete) {
					if (w.getComputedStyle(child, null).getPropertyValue('display') === 'block') {
						if (paragraphTag.length > 0 && paragraphTag !== nodeName) {
							utils.changeTag(child, paragraphTag);
						}

						if (depth > 1) {
							while (parent.childNodes.length > i) {
								parent.parentNode.insertBefore(parent.lastChild, parent.nextSibling);
							}
						}
					} else {
						switch (nodeName) {
							case 'BR':
								if (child === child.parentNode.lastChild) {
									if (child === child.parentNode.firstChild) {
										break;
									}
									text = d.createTextNode("");
									text.innerHTML = '&nbsp';
									child.parentNode.insertBefore(text, child);
									break;
								}
							default:
								while (child.firstChild !== null) {
									child.parentNode.insertBefore(child.firstChild, child);
								}
								utils.detachNode(child);
								break;
						}
					}
				}
			}
		});
	},
	/**
	 *
	 * @param {String|Object} html
	 * @param {Function} [callback]
	 * @param {Boolean} [skipChangeEvent]
	 * @returns {Medium}
	 */
	insertHtml: function (html, callback, skipChangeEvent) {
		var result = (new Medium.Html(this, html))
			.insert(this.settings.beforeInsertHtml),
			lastElement = result[result.length - 1];

		if (skipChangeEvent === true) {
			utils.triggerEvent(this.element, "change");
		}

		if (callback) {
			callback.apply(result);
		}

		switch (lastElement.nodeName) {
			//lists need their last child selected if it exists
			case 'UL':
			case 'OL':
			case 'DL':
				if (lastElement.lastChild !== null) {
					this.cursor.moveCursorToEnd(lastElement.lastChild);
					break;
				}
			default:
				this.cursor.moveCursorToEnd(lastElement);
		}

		return this;
	},

	addTag: function (tag, shouldFocus, isEditable, afterElement) {
		if (!this.settings.beforeAddTag(tag, shouldFocus, isEditable, afterElement)) {
			var newEl = d.createElement(tag),
				toFocus;

			if (typeof isEditable !== "undefined" && isEditable === false) {
				newEl.contentEditable = false;
			}
			if (newEl.innerHTML.length == 0) {
				newEl.innerHTML = ' ';
			}
			if (afterElement && afterElement.nextSibling) {
				afterElement.parentNode.insertBefore(newEl, afterElement.nextSibling);
				toFocus = afterElement.nextSibling;

			} else {
				this.element.appendChild(newEl);
				toFocus = this.lastChild();
			}

			if (shouldFocus) {
				this.cache.focusedElement = toFocus;
				this.cursor.set(this, 0, toFocus);
			}
			return newEl;
		}
		return null;
	},

	/**
	 *
	 * @param {String} tagName
	 * @param {Object} [attributes]
	 * @param {Boolean} [skipChangeEvent]
	 * @returns {Medium}
	 */
	invokeElement: function (tagName, attributes, skipChangeEvent) {
		var settings = this.settings,
			remove = attributes.remove || [];

		attributes = attributes || {};

		switch (settings.mode) {
			case Medium.inlineMode:
			case Medium.partialMode:
				return this;
			default:
		}

		//invoke works off class, so if it isn't there, we just add it
		if (remove.length > 0) {
			if (!utils.arrayContains(settings, 'class')) {
				remove.push('class');
			}
		}

		(new Medium.Element(this, tagName, attributes))
			.invoke(this.settings.beforeInvokeElement);

		if (skipChangeEvent === true) {
			utils.triggerEvent(this.element, "change");
		}

		return this;
	},

	/**
	 *
	 * @param {String} [value]
	 * @returns {Medium}
	 */
	value: function (value) {
		if (typeof value !== 'undefined') {
			this.element.innerHTML = value;

			this.clean();
			this.placeholders();

			this.makeUndoable();
		} else {
			return this.element.innerHTML;
		}

		return this;
	},

	/**
	 * Focus on element
	 * @returns {Medium}
	 */
	focus: function () {
		var el = this.element;
		el.focus();
		return this;
	},

	/**
	 * Select all text
	 * @returns {Medium}
	 */
	select: function () {
		utils.selectNode(Medium.activeElement = this.element);
		return this;
	},

	isActive: function () {
		return (Medium.activeElement === this.element);
	},

	setupContents: function () {
		var el = this.element,
			children = el.children,
			childNodes = el.childNodes,
			initialParagraph,
			s = this.settings;

		if (
			!s.tags.paragraph
			|| children.length > 0
			|| s.mode === Medium.inlineMode
			|| s.mode === Medium.inlineRichMode
		) {
			return Medium.Utilities;
		}

		//has content, but no children
		if (childNodes.length > 0) {
			initialParagraph = d.createElement(s.tags.paragraph);
			if (el.innerHTML.match('^[&]nbsp[;]')) {
				el.innerHTML = el.innerHTML.substring(6, el.innerHTML.length - 1);
			}
			initialParagraph.innerHTML = el.innerHTML;
			el.innerHTML = '';
			el.appendChild(initialParagraph);
			//this.cursor.set(this, initialParagraph.innerHTML.length, initialParagraph);
		} else {
			initialParagraph = d.createElement(s.tags.paragraph);
			initialParagraph.innerHTML = '&nbsp;';
			el.appendChild(initialParagraph);
			this.cursor.set(this, 0, el.firstChild);
		}

		return this;
	},

	destroy: function () {
		var el = this.element,
			settings = this.settings,
			placeholder = this.placeholder || null;

		if (placeholder !== null && placeholder.setup && placeholder.parentNode !== null) {
			//remove placeholder
			placeholder.parentNode.removeChild(placeholder);
			delete el.placeHolderActive;
		}

		//remove contenteditable
		el.removeAttribute('contenteditable');

		//remove classes
		el.className = utils.trim(el.className
			.replace(settings.cssClasses.editor, '')
			.replace(settings.cssClasses.clear, '')
			.replace(settings.cssClasses.editor + '-' + settings.mode, ''));

		//remove events
		this.action.destroy();

		if (this.settings.drag) {
			this.drag.destroy();
		}
	},

	// Clears the element and restores the placeholder
	clear: function () {
		this.element.innerHTML = '';
		this.placeholders();
	},

	/**
	 * Splits content in medium element at cursor
	 * @returns {DocumentFragment|null}
	 */
	splitAtCaret: function() {
		if (!this.isActive()) return null;

		var selector = (w.getSelection || d.selection),
			sel = selector(),
			offset = sel.focusOffset,
			node = sel.focusNode,
			el = this.element,
			range = d.createRange(),
			endRange = d.createRange(),
			contents;

		range.setStart(node, offset);
		endRange.selectNodeContents(el);
		range.setEnd(endRange.endContainer, endRange.endOffset);

		contents = range.extractContents();

		return contents;
	},

	/**
	 * Deletes selection
	 */
	deleteSelection: function() {
		if (!this.isActive()) return;

		var sel = rangy.getSelection(),
			range;

		if (sel.rangeCount > 0) {
			range = sel.getRangeAt(0);
			range.deleteContents();
		}
	},

	lastChild: function () {
		return this.element.lastChild;
	},

	bold: function () {

		switch (this.settings.mode) {
			case Medium.partialMode:
			case Medium.inlineMode:
				return this;
		}

		(new Medium.Element(this, 'bold'))
			.setClean(false)
			.invoke(this.settings.beforeInvokeElement);

		return this;
	},
	underline: function () {
		switch (this.settings.mode) {
			case Medium.partialMode:
			case Medium.inlineMode:
				return this;
		}

		(new Medium.Element(this, 'underline'))
			.setClean(false)
			.invoke(this.settings.beforeInvokeElement);

		return this;
	},
	italicize: function () {
		switch (this.settings.mode) {
			case Medium.partialMode:
			case Medium.inlineMode:
				return this;
		}

		(new Medium.Element(this, 'italic'))
			.setClean(false)
			.invoke(this.settings.beforeInvokeElement);

		return this;
	},
	quote: function () {

		return this;
	},
	/**
	 *
	 * @param {String} [text]
	 * @returns {boolean}
	 */
	paste: function (text) {
		var value = this.value(),
			length = value.length,
			totalLength,
			settings = this.settings,
			selection = this.selection,
			el = this.element,
			medium = this,
			postPaste = function(text) {
				text = text || '';
				if (text.length > 0) {
					el.focus();
					Medium.activeElement = el;
					selection.restoreSelection(sel);

					//encode the text first
					text = utils.encodeHtml(text);

					//cut down it's length
					totalLength = text.length + length;
					if (settings.maxLength > 0 && totalLength > settings.maxLength) {
						text = text.substring(0, settings.maxLength - length);
					}

					if (settings.mode !== Medium.inlineMode) {
						text = text.replace(/\n/g, '<br>');
					}

					(new Medium.Html(medium, text))
						.setClean(false)
						.insert(settings.beforeInsertHtml, true);

					medium.clean();
					medium.placeholders();
				}
			};

		medium.makeUndoable();

		if (text !== undefined) {
			postPaste(text);
		} else if (settings.pasteAsText) {
			var sel = selection.saveSelection();

			utils.pasteHook(this, postPaste);
		} else {
			setTimeout(function() {
				medium.clean();
				medium.placeholders();
			}, 20);
		}
		return true;
	},
	undo: function() {
		var undoable = this.undoable,
			stack = undoable.stack,
			can = stack.canUndo();

		if (can) {
			stack.undo();
		}

		return this;
	},
	redo: function() {
		var undoable = this.undoable,
			stack = undoable.stack,
			can = stack.canRedo();

		if (can) {
			stack.redo();
		}

		return this;
	}
};

//Modes
Medium.inlineMode = 'inline';
Medium.partialMode = 'partial';
Medium.richMode = 'rich';
Medium.inlineRichMode = 'inlineRich';
Medium.Messages = {
	pastHere: 'Paste Here'
};

Medium.defaultSettings = {
	element: null,
	modifier: 'auto',
	placeholder: "",
	autofocus: false,
	autoHR: true,
	mode: Medium.richMode,
	maxLength: -1,
	modifiers: {
		'b': 'bold',
		'i': 'italicize',
		'u': 'underline'
	},
	tags: {
		'break': 'br',
		'horizontalRule': 'hr',
		'paragraph': 'p',
		'outerLevel': ['pre', 'blockquote', 'figure'],
		'innerLevel': ['a', 'b', 'u', 'i', 'img', 'strong']
	},
	cssClasses: {
		editor: 'Medium',
		pasteHook: 'Medium-paste-hook',
		placeholder: 'Medium-placeholder',
		clear: 'Medium-clear'
	},
	attributes: {
		remove: ['style', 'class']
	},
	pasteAsText: true,
	beforeInvokeElement: function () {
		//this = Medium.Element
	},
	beforeInsertHtml: function () {
		//this = Medium.Html
	},
	maxLengthReached: function (element) {
		//element
	},
	beforeAddTag: function (tag, shouldFocus, isEditable, afterElement) {
	},
        onBlur: function() {},
        onFocus: function() {},
	keyContext: null,
	drag: false
};
(function(Medium, w, d) {
	"use strict";

	function isEditable(e) {
		if (e.hasOwnProperty('target') && e.target.getAttribute('contenteditable') === 'false') {
			utils.preventDefaultEvent(e);
			return false;
		}
		return true;
	}

	Medium.Action = function (medium) {
		this.medium = medium;

		this.handledEvents = {
			keydown: null,
			keyup: null,
			blur: null,
			focus: null,
			paste: null,
			click: null
		};

	};
	Medium.Action.prototype = {
		setup: function () {
			this
				.handleFocus()
				.handleBlur()
				.handleKeyDown()
				.handleKeyUp()
				.handlePaste()
				.handleClick();
		},
		destroy: function() {
			var el = this.medium.element;

			utils
				.removeEvent(el, 'focus', this.handledEvents.focus)
				.removeEvent(el, 'blur', this.handledEvents.blur)
				.removeEvent(el, 'keydown', this.handledEvents.keydown)
				.removeEvent(el, 'keyup', this.handledEvents.keyup)
				.removeEvent(el, 'paste', this.handledEvents.paste)
				.removeEvent(el, 'click', this.handledEvents.click);
		},
		handleFocus: function () {

			var medium = this.medium,
				el = medium.element;

			utils.addEvent(el, 'focus', this.handledEvents.focus = function(e) {
				e = e || w.event;

				if (!isEditable(e)) {
					return false;
				}

				Medium.activeElement = el;
                                medium.cache.originalVal = e.target.textContent;
                                medium.settings.onFocus(e);

				medium.placeholders();
			});

			return this;
		},
		handleBlur: function () {

			var medium = this.medium,
				el = medium.element;

			utils.addEvent(el, 'blur', this.handledEvents.blur = function(e) {
				e = e || w.event;

				if (Medium.activeElement === el) {
					Medium.activeElement = null;
				}
				
				medium.settings.onBlur(e);
				medium.placeholders();
			});

			return this;
		},
		handleKeyDown: function () {

			var action = this,
				medium = this.medium,
				settings = medium.settings,
				cache = medium.cache,
				el = medium.element;

			utils.addEvent(el, 'keydown', this.handledEvents.keydown = function(e) {
				e = e || w.event;

				if (!isEditable(e)) {
					return false;
				}

				var keepEvent = true;

				//in Chrome it sends out this event before every regular event, not sure why
				if (e.keyCode === 229) return;

				utils.isCommand(settings, e, function () {
					cache.cmd = true;
				}, function () {
					cache.cmd = false;
				});

				utils.isShift(e, function () {
					cache.shift = true;
				}, function () {
					cache.shift = false;
				});

				utils.isModifier(settings, e, function (cmd) {
					if (cache.cmd) {

						if ( (settings.mode === Medium.inlineMode) || (settings.mode === Medium.partialMode) ) {
							utils.preventDefaultEvent(e);
							return false;
						}

						var cmdType = typeof cmd;
						var fn = null;
						if (cmdType === "function") {
							fn = cmd;
						} else {
							fn = medium[cmd];
						}

						keepEvent = fn.call(medium, e);

						if (keepEvent === false || keepEvent === medium) {
							utils.preventDefaultEvent(e);
							utils.stopPropagation(e);
						}
						return true;
					}
					return false;
				});

				if (settings.maxLength !== -1) {
					var len = utils.text(el).length,
						hasSelection = false,
						selection = w.getSelection(),
						isSpecial = utils.isSpecial(e),
						isNavigational = utils.isNavigational(e);

					if (selection) {
						hasSelection = !selection.isCollapsed;
					}

					if (isSpecial || isNavigational) {
						return true;
					}

					if (len >= settings.maxLength && !hasSelection) {
						settings.maxLengthReached(el);
						utils.preventDefaultEvent(e);
						return false;
					}
				}

				switch (e.keyCode) {
                                        case key['enter']:
                                                if (action.enterKey(e) === false) {
                                                        utils.preventDefaultEvent(e);
                                                }
                                                break;
                                        case key['escape']:
                                                if (action.escKey(e) === false) {
							utils.preventDefaultEvent(e);
						}
						break;
					case key['backspace']:
					case key['delete']:
						action.backspaceOrDeleteKey(e);
						break;
				}

				return keepEvent;
			});

			return this;
		},
		handleKeyUp: function () {

			var action = this,
				medium = this.medium,
				settings = medium.settings,
				cache = medium.cache,
				cursor = medium.cursor,
				el = medium.element;

			utils.addEvent(el, 'keyup', this.handledEvents.keyup = function(e) {
				e = e || w.event;

				if (!isEditable(e)) {
					return false;
				}

				utils.isCommand(settings, e, function () {
					cache.cmd = false;
				}, function () {
					cache.cmd = true;
				});
				medium.clean();
				medium.placeholders();

				//here we have a key context, so if you need to create your own object within a specific context it is doable
				var keyContext;
				if (
					settings.keyContext !== null
					&& ( keyContext = settings.keyContext[e.keyCode] )
				) {
					var el = cursor.parent();

					if (el) {
						keyContext.call(medium, e, el);
					}
				}

				action.preserveElementFocus();
			});

			return this;
		},
		handlePaste: function() {
			var medium = this.medium,
				el = medium.element,
				text,
				i,
				max,
				data,
				cD,
				type,
				types;

			utils.addEvent(el, 'paste', this.handledEvents.paste = function(e) {
				e = e || w.event;

				if (!isEditable(e)) {
					return false;
				}

				i = 0;
				utils.preventDefaultEvent(e);
				text = '';
				cD = e.clipboardData;

				if (cD && (data = cD.getData)) {
					types = cD.types;
					max = types.length;
					for (i = 0; i < max; i++) {
						type = types[i];
						switch (type) {
							//case 'text/html':
							//	return medium.paste(cD.getData('text/html'));
							case 'text/plain':
								return medium.paste(cD.getData('text/plain'));
						}
					}
				}

				medium.paste();
			});

			return this;
		},
		handleClick: function() {
			var medium = this.medium,
				el = medium.element,
				cursor = medium.cursor;

			utils.addEvent(el, 'click', this.handledEvents.click = function(e) {
				if (!isEditable(e)) {
					cursor.caretToAfter(e.target);
				}

			});

			return this;
		},
                escKey: function (e) {
                    var medium = this.medium,
                        el = medium.element,
                        settings = medium.settings,
                        cache = medium.cache;

                    if( settings.mode === Medium.inlineMode || settings.mode === Medium.inlineRichMode ){
                        e.target.textContent = cache.originalVal;
                        
                        if (settings.element.blur) {
                            settings.element.blur();
                        } else if (settings.element.onblur) {
                            settings.element.onblur();
                        }   
                        return false;
                    }
                },
		enterKey: function (e) {
			var medium = this.medium,
				el = medium.element,
				settings = medium.settings,
				cache = medium.cache,
				cursor = medium.cursor;

			if( settings.mode === Medium.inlineMode || settings.mode === Medium.inlineRichMode ){
                            if (settings.element.blur) {
                                settings.element.blur();
                            } else if (settings.element.onblur) {
                                settings.element.onblur();
                            }	
                            return false;
			}

			if (cache.shift) {
				if (settings.tags['break']) {
					medium.addTag(settings.tags['break'], true);
					return false;
				}

			} else {

				var focusedElement = utils.atCaret(medium) || {},
					children = el.children,
					lastChild = focusedElement === el.lastChild ? el.lastChild : null,
					makeHR,
					secondToLast,
					paragraph;

				if (
					lastChild
					&& lastChild !== el.firstChild
					&& settings.autoHR
					&& settings.mode !== Medium.partialMode
					&& settings.tags.horizontalRule
				) {

					utils.preventDefaultEvent(e);

					makeHR =
						utils.text(lastChild) === ""
						&& lastChild.nodeName.toLowerCase() === settings.tags.paragraph;

					if (makeHR && children.length >= 2) {
						secondToLast = children[ children.length - 2 ];

						if (secondToLast.nodeName.toLowerCase() === settings.tags.horizontalRule) {
							makeHR = false;
						}
					}

					if (makeHR) {
						medium.addTag(settings.tags.horizontalRule, false, true, focusedElement);
						focusedElement = focusedElement.nextSibling;
					}

					if ((paragraph = medium.addTag(settings.tags.paragraph, true, null, focusedElement)) !== null) {
						paragraph.innerHTML = '';
						cursor.set(medium, 0, paragraph);
					}
				}
			}

			return true;
		},
		backspaceOrDeleteKey: function (e) {
			var medium = this.medium,
				cursor = medium.cursor,
				settings = medium.settings,
				el = medium.element;

			if (settings.onBackspaceOrDelete !== undefined) {
				var result = settings.onBackspaceOrDelete.call(medium, e, el);

				if (result) {
					return;
				}
			}

			if (el.lastChild === null) return;

			var lastChild = el.lastChild,
				beforeLastChild = lastChild.previousSibling,
				anchorNode = rangy.getSelection().anchorNode;

			if (
				lastChild
				&& settings.tags.horizontalRule
				&& lastChild.nodeName.toLocaleLowerCase() === settings.tags.horizontalRule
			) {
				el.removeChild(lastChild);
			} else if (
				lastChild
				&& beforeLastChild
				&& utils.text(lastChild).length < 1

				&& beforeLastChild.nodeName.toLowerCase() === settings.tags.horizontalRule
				&& lastChild.nodeName.toLowerCase() === settings.tags.paragraph
			) {
				el.removeChild(lastChild);
				el.removeChild(beforeLastChild);
			} else if (
				el.childNodes.length === 1
				&& lastChild
				&& !utils.text(lastChild).length
			) {
				utils.preventDefaultEvent(e);
				medium.setupContents();
			}
			else if ( anchorNode && anchorNode === el ) {
				medium.deleteSelection();
				medium.setupContents();
				cursor.set(medium, 0, el.firstChild);
			}
		},
		preserveElementFocus: function () {
			// Fetch node that has focus
			var anchorNode = w.getSelection ? w.getSelection().anchorNode : document.activeElement;
			if (anchorNode) {
				var medium = this.medium,
					cache = medium.cache,
					el = medium.element,
					s = medium.settings,
					cur = anchorNode.parentNode,
					children = el.children,
					diff = cur !== cache.focusedElement,
					elementIndex = 0,
					i;

				// anchorNode is our target if element is empty
				if (cur === s.element) {
					cur = anchorNode;
				}

				// Find our child index
				for (i = 0; i < children.length; i++) {
					if (cur === children[i]) {
						elementIndex = i;
						break;
					}
				}

				// Focused element is different
				if (diff) {
					cache.focusedElement = cur;
					cache.focusedElementIndex = elementIndex;
				}
			}
		}
	};

})(Medium, w, d);
(function(Medium) {
	"use strict";

	Medium.Cache = function () {
		this.initialized = false;
		this.cmd = false;
		this.focusedElement = null;
                this.originalVal = null;
	};

})(Medium);
(function(Medium) {
	"use strict";
	/*
	 * Handle Cursor Logic
	 */
	Medium.Cursor = function (medium) {
		this.medium = medium;
	};
	Medium.Cursor.prototype = {
		set: function (pos, el) {
			var range;

			if (d.createRange) {
				var selection = w.getSelection(),
					lastChild = this.medium.lastChild(),
					length = utils.text(lastChild).length - 1,
					toModify = el ? el : lastChild,
					theLength = ((typeof pos !== 'undefined') && (pos !== null) ? pos : length);

				range = d.createRange();
				range.setStart(toModify, theLength);
				range.collapse(true);
				selection.removeAllRanges();
				selection.addRange(range);
			} else {
				range = d.body.createTextRange();
				range.moveToElementText(el);
				range.collapse(false);
				range.select();
			}
		},
		//http://davidwalsh.name/caret-end
		moveCursorToEnd: function (el) {
			//get the browser selection object - it may or may not have a selected range
			var selection = rangy.getSelection(),

				//create a range object to set the caret positioning for
				range = rangy.createRange();


			//set the caret after the start node and at the end of the end node
			//Note: the end is set using endNode.length when the node is of the text type
			//and it is set using childNodes.length when the end node is of the element type
			range.setStartAfter(el);
			range.setEnd(el, el.length || el.childNodes.length);

			//apply this range to the selection object
			selection.removeAllRanges();
			selection.addRange(range);
		},
		moveCursorToAfter: function (el) {
			var sel = rangy.getSelection();
			if (sel.rangeCount) {
				var range = sel.getRangeAt(0);
				range.collapse(false);
				range.collapseAfter(el);
				sel.setSingleRange(range);
			}
		},
		parent: function () {
			var target = null, range;

			if (w.getSelection) {
				range = w.getSelection().getRangeAt(0);
				target = range.commonAncestorContainer;

				target = (target.nodeType === 1
					? target
					: target.parentNode
				);
			}

			else if (d.selection) {
				target = d.selection.createRange().parentElement();
			}

			if (target.tagName == 'SPAN') {
				target = target.parentNode;
			}

			return target;
		},
		caretToBeginning: function (el) {
			this.set(0, el);
		},
		caretToEnd: function (el) {
			this.moveCursorToEnd(el);
		},
		caretToAfter: function (el) {
			this.moveCursorToAfter(el);
		}
	};
})(Medium);
(function(Medium) {
	"use strict";
	Medium.Drag = function(medium) {
		this.medium = medium;

		var that = this,
			iconSrc = this.iconSrc.replace(/[{][{]([a-zA-Z]+)[}][}]/g, function(ignore, match) {
				if (that.hasOwnProperty(match)) {
					return that[match];
				}

				return ignore;
			}),
			icon = this.icon = d.createElement('img');

		icon.className = this.buttonClass;
		icon.setAttribute('contenteditable', 'false');
		icon.setAttribute('src', iconSrc);

		this.hide();
		this.element = null;
		this.protectedElement = null;
		this.handledEvents = {
			dragstart: null,
			dragend: null,
			mouseover: null,
			mouseout: null,
			mousemove: null
		};
	};
	Medium.Drag.prototype = {
		elementClass: 'Medium-focused',
		buttonClass: 'Medium-drag',

		//thank you ascii for not including a directional icon (boo!)
		//http://www.flaticon.com/free-icon/pointer-crosstree_10119
		iconSrc: 'data:image/svg+xml;utf8,\
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="21.424px" height="21.424px" viewBox="0 0 21.424 21.424" style="enable-background:new 0 0 21.424 21.424;" xml:space="preserve">\
	<g>\
		<g>\
			<path style="fill:{{iconColor}};" d="M13.616,17.709L13.616,17.709h0.781l-3.686,3.715l-3.685-3.715h0.781l0,0H13.616z M13.616,17.709 M14.007,17.709 M12.555,19.566 M8.87,19.566 M7.418,17.709 M7.809,17.709 M10.712,17.709"/>\
			<path style="fill:{{iconColor}};" d="M13.616,3.715L13.616,3.715h0.781L10.712,0L7.027,3.715h0.781l0,0H13.616z M13.616,3.715 M14.007,3.715 M12.555,1.858 M8.87,1.858 M7.418,3.715 M7.809,3.715 M10.712,3.715"/>\
			<path style="fill:{{iconColor}};" d="M3.716,13.616L3.716,13.616v0.781L0,10.712l3.716-3.685v0.781l0,0V13.616z M3.716,13.616 M3.716,14.007 M1.858,12.555 M1.858,8.87 M3.716,7.417 M3.716,7.808 M3.716,10.712"/>\
			<path style="fill:{{iconColor}};" d="M17.709,13.616L17.709,13.616v0.781l3.715-3.685l-3.715-3.685v0.781l0,0V13.616z M17.709,13.616 M17.709,14.007 M19.566,12.555 M19.566,8.87 M17.709,7.417 M17.709,7.808 M17.709,10.712"/>\
		</g>\
		<path style="fill-rule:evenodd;clip-rule:evenodd;fill:{{iconColor}};" d="M10.712,6.608c2.267,0,4.104,1.838,4.104,4.104 c0,2.266-1.837,4.104-4.104,4.104c-2.266,0-4.104-1.837-4.104-4.104C6.608,8.446,8.446,6.608,10.712,6.608L10.712,6.608z M10.712,7.515c-1.765,0-3.196,1.432-3.196,3.197s1.432,3.197,3.196,3.197c1.766,0,3.197-1.432,3.197-3.197 S12.478,7.515,10.712,7.515z"/>\
	</g>\
</svg>',
		iconColor: '#231F20',
		setup: function() {
			this
				.handleDragstart()
				.handleDragend()
				.handleMouseover()
				.handleMouseout()
				.handleMousemove();
		},
		destroy: function() {
			utils
				.removeEvent(this.icon, 'dragstart', this.handledEvents.dragstart)
				.removeEvent(this.icon, 'dragend', this.handledEvents.dragend)
				.removeEvent(this.icon, 'mouseover', this.handledEvents.mouseover)
				.removeEvent(this.icon, 'mouseout', this.handledEvents.mouseout)
				.removeEvent(this.medium.element, 'mousemove', this.handledEvents.mousemove);
		},
		hide: function() {
			utils.hide(this.icon);
		},
		handleDragstart: function() {

			var me = this;

			utils.addEvent(this.icon, 'dragstart', this.handledEvents.dragstart = function(e) {
				if (me.protectedElement !== null) return;

				e = e || w.event;

				me.protectedElement = utils.detachNode(me.element);

				me.icon.style.opacity = 0.00;
			});

			return this;
		},
		handleDragend: function() {
			var me = this;

			utils.addEvent(this.icon, 'dragend',  this.handledEvents.dragend = d.body.ondragend = function(e) {
				if (me.protectedElement === null) return;

				setTimeout(function() {
					me.cleanCanvas();
					me.protectedElement = null;
				}, 1);
			});

			return this;
		},
		handleMouseover: function() {
			var me = this;

			utils.addEvent(this.icon, 'mouseover', this.handledEvents.mouseover = function(e) {
				if (me.protectedElement !== null) return;

				utils
					.stopPropagation(e)
					.addClass(me.element, me.elementClass);

			});

			return this;
		},
		handleMouseout: function() {
			var me = this;

			utils.addEvent(this.icon, 'mouseout', this.handledEvents.mouseout = function(e) {
				if (me.protectedElement !== null) return;

				utils
					.stopPropagation(e)
					.removeClass(me.element, me.elementClass);
			});
			return this;
		},
		handleMousemove: function() {
			var me = this;

			utils.addEvent(this.medium.element, 'mousemove', this.handledEvents.mousemove = function(e) {
				e = e || w.event;
				var target = e.target || {};

				if (target.getAttribute('contenteditable') === 'false') {
					me.show(target);
				}
			});

			return this;
		},
		show: function(el) {
			if (el === this.icon && this.protectedElement === null) return;

			this.element = el;

			var style = this.icon.style,
				left = el.offsetLeft,
				top = el.offsetTop;

			el.dragIcon = this.icon;
			el.parentNode.appendChild(this.icon);

			style.opacity = 1;
			style.left = left + 'px';
			style.top = top + 'px';

			utils.show(this.icon);
		},
		cleanCanvas: function() {
			var target,
				inserted = false,
				buttons = d.getElementsByClassName(this.buttonClass);

			this.icon.style.opacity = 1;

			while (buttons.length > 0) {
				if (utils.isVisible(target = buttons[0])) {
					if (!inserted) {
						target.parentNode.insertBefore(this.element, target);
						inserted = true;
					}
					utils.detachNode(target);
				}
			}
			utils.detachNode(this.icon);
		}
	};
})(Medium);
(function(Medium) {
	"use strict";

	/**
	 * @param {Medium} medium
	 * @param {String} tagName
	 * @param {Object} [attributes]
	 * @constructor
	 */
	Medium.Element = function (medium, tagName, attributes) {
		this.medium = medium;
		this.element = medium.element;

		switch (tagName.toLowerCase()) {
			case 'bold':
				this.tagName = 'b';
				break;
			case 'italic':
				this.tagName = 'i';
				break;
			case 'underline':
				this.tagName = 'u';
				break;
			default:
				this.tagName = tagName;
		}

		this.attributes = attributes || {};
		this.clean = true;
	};

	Medium.Element.prototype = {
		/**
		 * @methodOf Medium.Element
		 * @param {Function} [fn]
		 */
		invoke: function (fn) {
			if (Medium.activeElement === this.element) {
				if (fn) {
					fn.apply(this);
				}

				var
					attr = this.attributes,
					tagName = this.tagName.toLowerCase(),
					applier,
					cl;

				if (attr.className !== undefined) {
					cl = (attr.className.split[' '] || [attr.className]).shift();
					delete attr.className;
				} else {
					cl = 'medium-' + tagName;
				}

				applier = rangy.createClassApplier(cl, {
					elementTagName: tagName,
					elementAttributes: this.attributes
				});

				this.medium.makeUndoable();

				applier.toggleSelection(w);

				if (this.clean) {
					//cleanup
					this.medium.clean();
					this.medium.placeholders();
				}


			}
		},

		/**
		 *
		 * @param {Boolean} clean
		 * @returns {Medium.Element}
		 */
		setClean: function (clean) {
			this.clean = clean;
			return this;
		}
	};
})(Medium);
(function(Medium) {
	"use strict";

	/**
	 * @constructor
	 * @param {Medium} medium
	 * @param {String|HtmlElement} html
	 */
	Medium.Html = function (medium, html) {
		this.html = html;
		this.medium = medium;
		this.clean = true;
		this.injector = new Medium.Injector();
	};

	Medium.Html.prototype = {
		/**
		 * @methodOf Medium.Html
		 * @param {Function} [fn]
		 * @param {Boolean} [selectInserted]
		 * @returns {HtmlElement}
		 */
		insert: function (fn, selectInserted) {
			if (Medium.activeElement === this.medium.element) {
				if (fn) {
					fn.apply(this);
				}

				var inserted = this.injector.inject(this.html, selectInserted);

				if (this.clean) {
					//cleanup
					this.medium.clean();
					this.medium.placeholders();
				}

				this.medium.makeUndoable();

				return inserted;
			} else {
				return null;
			}
		},

		/**
		 * @methodOf Medium.Html
		 * @param clean
		 * @returns {Medium.Html}
		 */
		setClean: function (clean) {
			this.clean = clean;
			return this;
		}
	};

})(Medium);
(function(Medium) {
	"use strict";

	/**
	 *
	 * @constructor
	 */
	Medium.Injector = function () {
	};

	Medium.Injector.prototype = {
		/**
		 * @methodOf Medium.Injector
		 * @param {String|HtmlElement} htmlRaw
		 * @returns {[HtmlElement|Node]}
		 */
		inject: function (htmlRaw) {
			var nodes = [],
				html,
				isConverted = false;

			if (typeof htmlRaw === 'string') {
				var htmlConverter = d.createElement('div');
				htmlConverter.innerHTML = htmlRaw;
				html = htmlConverter.childNodes;
				isConverted = true;
			} else {
				html = htmlRaw;
			}

			this.insertHTML('<span id="Medium-wedge"></span>');

			var wedge = d.getElementById('Medium-wedge'),
				parent = wedge.parentNode,
				i = 0;

			wedge.removeAttribute('id');

			if (isConverted) {
				//make an array of elements that are about to be inserted, can't use html because they will
				while (i < html.length) {
					nodes.push(html[i]);
					i++;
				}

				while (html.length > 0) {
            parent.insertBefore(html[0], wedge);
				}
			} else {
				nodes.push(html);
				parent.insertBefore(html, wedge);
			}
			parent.removeChild(wedge);
			wedge = null;

			return nodes;
		},

		//Thank you Tim Down (super uber genius): http://stackoverflow.com/questions/6690752/insert-html-at-caret-in-a-contenteditable-div/6691294#6691294
		insertHTML: function (html, selectPastedContent) {
			var sel, range;
			if (w.getSelection) {
				// IE9 and non-IE
				sel = w.getSelection();
				if (sel.getRangeAt && sel.rangeCount) {
					range = sel.getRangeAt(0);
					range.deleteContents();

					// Range.createContextualFragment() would be useful here but is
					// only relatively recently standardized and is not supported in
					// some browsers (IE9, for one)
					var el = d.createElement("div");
					el.innerHTML = html;
					var frag = d.createDocumentFragment(), node, lastNode;
					while ((node = el.firstChild)) {
						lastNode = frag.appendChild(node);
					}
					var firstNode = frag.firstChild;
					range.insertNode(frag);

					// Preserve the selection
					if (lastNode) {
						range = range.cloneRange();
						range.setStartAfter(lastNode);
						if (selectPastedContent) {
							range.setStartBefore(firstNode);
						} else {
							range.collapse(true);
						}
						sel.removeAllRanges();
						sel.addRange(range);
					}
				}
			} else if ((sel = d.selection) && sel.type != "Control") {
				// IE < 9
				var originalRange = sel.createRange();
				originalRange.collapse(true);
				sel.createRange().pasteHTML(html);
				if (selectPastedContent) {
					range = sel.createRange();
					range.setEndPoint("StartToStart", originalRange);
					range.select();
				}
			}
		}
	};
})(Medium);
(function(Medium) {
	"use strict";

	/*
	 * Handle Selection Logic
	 */
	Medium.Selection = function () {
	};
	Medium.Selection.prototype = {
		saveSelection: function () {
			if (w.getSelection) {
				var sel = w.getSelection();
				if (sel.rangeCount > 0) {
					return sel.getRangeAt(0);
				}
			} else if (d.selection && d.selection.createRange) { // IE
				return d.selection.createRange();
			}
			return null;
		},

		restoreSelection: function (range) {
			if (range) {
				if (w.getSelection) {
					var sel = w.getSelection();
					sel.removeAllRanges();
					sel.addRange(range);
				} else if (d.selection && range.select) { // IE
					range.select();
				}
			}
		}
	};
})(Medium);(function(Medium) {
	"use strict";
	Medium.Toolbar = function(medium, buttons) {
		this.medium = medium;

		var elementCreator = d.createElement('div');

		elementCreator.innerHTML = this.html;

		this.buttons = buttons;
		this.element = elementCreator.children[0];
		d.body.appendChild(this.element);
		this.active = false;
		this.busy = true;

		this.handledEvents = {
			scroll: null,
			mouseup: null,
			keyup: null
		};
	};

	Medium.Toolbar.prototype = {
		fixedClass: 'Medium-toolbar-fixed',
		showClass: 'Medium-toolbar-show',
		hideClass: 'Medium-toolbar-hide',

		html:
			'<div class="Medium-toolbar">\
				<div class="Medium-tail-outer">\
					<div class="Medium-tail-inner"></div>\
				</div>\
				<div id="Medium-buttons"></div>\
				<table id="Medium-options">\
					<tbody>\
						<tr>\
						</tr>\
					</tbody>\
				</table>\
			</div>',

		setup: function() {
			this
				.handleScroll()
				.handleMouseup()
				.handleKeyup();

		},
		destroy: function() {
			utils
				.removeEvent(w, 'scroll', this.handledEvents.scroll)
				.removeEvent(d, 'mouseup', this.handledEvents.mouseup)
				.removeEvent(d, 'keyup', this.handledEvents.keyup);
		},
		handleScroll: function() {
			var me = this;

			utils.addEvent(w, 'scroll', this.handledEvents.scroll = function() {
				if (me.active) {
					me.goToSelection();
				}
			});

			return this;
		},
		handleMouseup: function() {
			var me = this;

			utils.addEvent(d, 'mouseup', this.handledEvents.mouseup = function() {
				if (Medium.activeElement === me.medium.element && !me.busy) {
					me.goToSelection();
				}
			});

			return this;
		},
		handleKeyup: function() {
			var me = this;

			utils.addEvent(d, 'keyup', this.handledEvents.keyup = function() {
				if (Medium.activeElement === me.medium.element && !me.busy) {
					me.goToSelection();
				}
			});

			return this;
		},
		goToSelection: function() {
			var high = this.getHighlighted(),
				y = high.boundary.top - 5,
				el = this.element,
				style = el.style;

			if (w.scrollTop > 0) {
				utils.addClass(el, this.fixedClass);
			} else {
				utils.removeClass(el, this.fixedClass);
			}

			if (high !== null) {
				if (high.range.startOffset === high.range.endOffset && !high.text) {
					utils
						.removeClass(el, this.showClass)
						.addClass(el, this.hideClass);

					this.active = false;
				} else {
					utils
						.removeClass(el, this.hideClass)
						.removeClass(el, this.showClass);

					style.opacity = 0.01;
					utils.addClass(el, this.showClass);
					style.opacity = 1;
					style.top = (y - 65) + "px";
					style.left = (
					(
					high.boundary.left + (high.boundary.width / 2)
					)
					- (el.clientWidth / 2)
					) + "px";

					this.active = true;
				}
			}
		},

		getHighlighted: function() {
			var selection = w.getSelection(),
				range = (selection.anchorNode ? selection.getRangeAt(0) : false);

			if (!range) {
				return null;
			}

			return {
				selection : selection,
				range : range,
				text : utils.trim(range.toString()),
				boundary : range.getBoundingClientRect()
			};
		}
	};
})(Medium);
(function(Medium) {
	"use strict";

	/**
	 * @param {Medium} medium
	 * @constructor
	 */
	Medium.Undoable = function (medium) {
		var me = this,
			element = medium.settings.element,
			timer,
			startValue,
			stack = new Undo.Stack(),
			EditCommand = Undo.Command.extend({
				constructor: function (oldValue, newValue) {
					this.oldValue = oldValue;
					this.newValue = newValue;
				},
				execute: function () {
				},
				undo: function () {
					element.innerHTML = this.oldValue;
					medium.canUndo = stack.canUndo();
					medium.canRedo = stack.canRedo();
					medium.dirty = stack.dirty();
				},
				redo: function () {
					element.innerHTML = this.newValue;
					medium.canUndo = stack.canUndo();
					medium.canRedo = stack.canRedo();
					medium.dirty = stack.dirty();
				}
			}),
			makeUndoable = function (isInit) {
				var newValue = element.innerHTML;

				if (isInit) {
					startValue = element.innerHTML;
					stack.execute(new EditCommand(startValue, startValue));
				}

				// ignore meta key presses
				else if (newValue != startValue) {

					if (!me.movingThroughStack) {
						// this could try and make a diff instead of storing snapshots
						stack.execute(new EditCommand(startValue, newValue));
						startValue = newValue;
						medium.dirty = stack.dirty();
					}

					utils.triggerEvent(medium.settings.element, "change");
				}
			};

		this.medium = medium;
		this.timer = timer;
		this.stack = stack;
		this.makeUndoable = makeUndoable;
		this.EditCommand = EditCommand;
		this.movingThroughStack = false;

		utils
			.addEvent(element, 'keyup', function (e) {
				if (e.ctrlKey || e.keyCode === key.z) {
					utils.preventDefaultEvent(e);
					return;
				}

				// a way too simple algorithm in place of single-character undo
				clearTimeout(timer);
				timer = setTimeout(function () {
					makeUndoable();
				}, 250);
			})

			.addEvent(element, 'keydown', function (e) {
				if (!e.ctrlKey || e.keyCode !== key.z) {
					me.movingThroughStack = false;
					return;
				}

				utils.preventDefaultEvent(e);

				me.movingThroughStack = true;

				if (e.shiftKey) {
					stack.canRedo() && stack.redo()
				} else {
					stack.canUndo() && stack.undo();
				}
			});
	};
})(Medium);
(function(Medium) {
	"use strict";

	Medium.Utilities = {
		/*
		 * Keyboard Interface events
		 */
		isCommand: function (s, e, fnTrue, fnFalse) {
			if ((s.modifier === 'ctrl' && e.ctrlKey ) ||
				(s.modifier === 'cmd' && e.metaKey ) ||
				(s.modifier === 'auto' && (e.ctrlKey || e.metaKey) )
			) {
				return fnTrue.call();
			} else {
				return fnFalse.call();
			}
		},
		isShift: function (e, fnTrue, fnFalse) {
			if (e.shiftKey) {
				return fnTrue.call();
			} else {
				return fnFalse.call();
			}
		},
		isModifier: function (settings, e, fn) {
			var cmd = settings.modifiers[e.keyCode];
			if (cmd) {
				return fn.call(null, cmd);
			}
			return false;
		},
		special: (function () {
			var special = {};

			special[key['backspace']] = true;
			special[key['shift']] = true;
			special[key['ctrl']] = true;
			special[key['alt']] = true;
			special[key['delete']] = true;
			special[key['cmd']] = true;

			return special;
		})(),
		isSpecial: function (e) {
			return typeof Medium.Utilities.special[e.keyCode] !== 'undefined';
		},
		navigational: (function () {
			var navigational = {};

			navigational[key['upArrow']] = true;
			navigational[key['downArrow']] = true;
			navigational[key['leftArrow']] = true;
			navigational[key['rightArrow']] = true;

			return navigational;
		})(),
		isNavigational: function (e) {
			return typeof Medium.Utilities.navigational[e.keyCode] !== 'undefined';
		},

		/**
		 * @param element
		 * @param eventNamesString
		 * @param func
		 * @returns Medium.Utilities
		 */
		addEvents: function(element, eventNamesString, func) {
			var i = 0,
				eventName,
				eventNames = eventNamesString.split(' '),
				max = eventNames.length,
				utils = Medium.Utilities;

			for(;i < max; i++) {
				eventName = eventNames[i];
				if (eventName.length > 0) {
					utils.addEvent(element, eventName, func);
				}
			}

			return Medium.Utilities;
		},
		/*
		 * Handle Events
		 */
		addEvent: function addEvent(element, eventName, func) {
			if (element.addEventListener) {
				element.addEventListener(eventName, func, false);
			} else if (element.attachEvent) {
				element.attachEvent("on" + eventName, func);
			} else {
				element['on' + eventName] = func;
			}

			return Medium.Utilities;
		},
		removeEvent: function removeEvent(element, eventName, func) {
			if (element.removeEventListener) {
				element.removeEventListener(eventName, func, false);
			} else if (element.detachEvent) {
				element.detachEvent("on" + eventName, func);
			} else {
				element['on' + eventName] = null;
			}

			return Medium.Utilities;
		},
		preventDefaultEvent: function (e) {
			if (e.preventDefault) {
				e.preventDefault();
			} else {
				e.returnValue = false;
			}

			return Medium.Utilities;
		},
		stopPropagation: function(e) {
			e = e || window.event;
			e.cancelBubble = true;

			if (e.stopPropagation !== undefined) {
				e.stopPropagation();
			}

			return Medium.Utilities;
		},
		isEventSupported: function (element, eventName) {
			eventName = 'on' + eventName;
			var el = d.createElement(element.tagName),
				isSupported = (eventName in el);

			if (!isSupported) {
				el.setAttribute(eventName, 'return;');
				isSupported = typeof el[eventName] == 'function';
			}
			el = null;
			return isSupported;
		},
		triggerEvent: function (element, eventName) {
			var e;
			if (d.createEvent) {
				e = d.createEvent("HTMLEvents");
				e.initEvent(eventName, true, true);
				e.eventName = eventName;
				element.dispatchEvent(e);
			} else {
				e = d.createEventObject();
				element.fireEvent("on" + eventName, e);
			}

			return Medium.Utilities;
		},

		deepExtend: function (destination, source) {
			var property,
				propertyValue;

			for (property in source) if (source.hasOwnProperty(property)) {
				propertyValue = source[property];
				if (
					propertyValue !== undefined
					&& propertyValue !== null
					&& propertyValue.constructor !== undefined
					&& propertyValue.constructor === Object
				) {
					destination[property] = destination[property] || {};
					Medium.Utilities.deepExtend(destination[property], propertyValue);
				} else {
					destination[property] = propertyValue;
				}
			}
			return destination;
		},
		/*
		 * This is a Paste Hook. When the user pastes
		 * content, this ultimately converts it into
		 * plain text before inserting the data.
		 */
		pasteHook: function (medium, fn) {
			medium.makeUndoable();

			var tempEditable = d.createElement('div'),
				el = medium.element,
				existingValue,
				existingLength,
				overallLength,
				s = medium.settings,
				value,
				body = d.body,
				bodyParent = body.parentNode,
				scrollTop = bodyParent.scrollTop,
				scrollLeft = bodyParent.scrollLeft;

			tempEditable.className = s.cssClasses.pasteHook;
			tempEditable.setAttribute('contenteditable', true);

			body.appendChild(tempEditable);
			utils.selectNode(tempEditable);

			bodyParent.scrollTop = scrollTop;
			bodyParent.scrollLeft = scrollLeft;

			setTimeout(function () {
				value = utils.text(tempEditable);
				el.focus();
				if (s.maxLength > 0) {
					existingValue = utils.text(el);
					existingLength = existingValue.length;
					overallLength = existingLength + value.length;
					if (overallLength > existingLength) {
						value = value.substring(0, s.maxLength - existingLength);
					}
				}
				utils.detachNode( tempEditable );
				bodyParent.scrollTop = scrollTop;
				bodyParent.scrollLeft = scrollLeft;
				fn(value);
			}, 0);

			return Medium.Utilities;
		},
		traverseAll: function(element, options, depth) {
			var children = element.childNodes,
				length = children.length,
				i = 0,
				node;

			depth = depth || 1;

			options = options || {};

			if (length > 0) {
				for(;i < length;i++) {
					node = children[i];
					switch (node.nodeType) {
						case 1:
							Medium.Utilities.traverseAll(node, options, depth + 1);
							if (options.element !== undefined) options.element(node, i, depth, element);
							break;
						case 3:
							if (options.fragment !== undefined) options.fragment(node, i, depth, element);
					}

					//length may change
					length = children.length;
					//if length did change, and we are at the last item, this causes infinite recursion, so if we are at the last item, then stop to prevent this
					if (node === element.lastChild) {
						i = length;
					}
				}
			}
			return Medium.Utilities;
		},
		trim: function (string) {
			return string.replace(/^[\s]+|\s+$/g, '');
		},
		arrayContains: function(array, variable) {
			var i = array.length;
			while (i--) {
				if (array[i] === variable) {
					return true;
				}
			}
			return false;
		},
		addClass: function(el, className) {
			if (el.classList)
				el.classList.add(className);
			else
				el.className += ' ' + className;

			return Medium.Utilities;
		},
		removeClass: function(el, className) {
			if (el.classList)
				el.classList.remove(className);
			else
				el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			return Medium.Utilities;
		},
		hasClass: function(el, className) {
			if (el.classList)
				return el.classList.contains(className);
			else
				return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
		},
		isHidden: function(el) {
			return el.offsetWidth === 0 || el.offsetHeight === 0;
		},
		isVisible: function(el) {
			return el.offsetWidth !== 0 || el.offsetHeight !== 0;
		},
		encodeHtml: function ( html ) {
			return d.createElement( 'a' ).appendChild(
				d.createTextNode( html ) ).parentNode.innerHTML;
		},
		text: function (node, val) {
			if (val !== undefined) {
				if (node === null) {
					return this;
				}
				if (node.textContent !== undefined) {
					node.textContent = val;
				} else {
					node.innerText = val;
				}

				return this;
			}
			else if (node === null) {
				return this;
			}
			else if (node.innerText !== undefined) {
				return utils.trim(node.innerText);
			}

			else if (node.textContent !== undefined) {
				return utils.trim(node.textContent);
			}
			//document fragment
			else if (node.data !== undefined) {
				return utils.trim(node.data);
			}

			//for good measure
			return '';
		},
		changeTag: function (oldNode, newTag) {
			var newNode = d.createElement(newTag),
				node,
				nextNode;

			node = oldNode.firstChild;
			while (node) {
				nextNode = node.nextSibling;
				newNode.appendChild(node);
				node = nextNode;
			}

			oldNode.parentNode.insertBefore(newNode, oldNode);
			oldNode.parentNode.removeChild(oldNode);

			return newNode;
		},
		detachNode: function (el) {
			if (el.parentNode !== null) {
				el.parentNode.removeChild(el);
			}

			return this;
		},
		selectNode: function(el) {
			var range,
				selection;

			el.focus();

			if (d.body.createTextRange) {
				range = d.body.createTextRange();
				range.moveToElementText(el);
				range.select();
			} else if (w.getSelection) {
				selection = w.getSelection();
				range = d.createRange();
				range.selectNodeContents(el);
				selection.removeAllRanges();
				selection.addRange(range);
			}

			return this;
		},
		baseAtCaret: function (medium) {
			if (!medium.isActive()) return null;

			var sel = w.getSelection ? w.getSelection() : document.selection;

			if (sel.rangeCount) {
				var selRange = sel.getRangeAt(0),
					container = selRange.endContainer;

				switch (container.nodeType) {
					case 3:
						if (container.data && container.data.length != selRange.endOffset) return false;
						break;
				}

				return container;
			}

			return null;
		},
		atCaret: function (medium) {
			var container = this.baseAtCaret(medium) || {},
				el = medium.element;

			if (container === false) return null;

			while (container && container.parentNode !== el) {
				container = container.parentNode;
			}

			if (container && container.nodeType == 1) {
				return container;
			}

			return null;
		},
		hide: function(el) {
			el.style.display = 'none';
		},
		show: function(el) {
			el.style.display = '';
		},
		hideAnim: function(el) {
			el.style.opacity = 1;
		},
		showAnim: function(el) {
			el.style.opacity = 0.01;
			el.style.display = '';
		}
	};
})(Medium);
rangy.rangePrototype.insertNodeAtEnd = function (node) {
	var range = this.cloneRange();
	range.collapse(false);
	range.insertNode(node);
	range.detach();
	this.setEndAfter(node);
};

			return Medium;
		}()),
		utils = Medium.Utilities;

	if (typeof define === 'function' && define['amd']) {
		define(function () { return Medium; });
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = Medium;
	} else if (typeof this !== 'undefined') {
		this.Medium = Medium;
	}

}).call(this, window, document);


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
			urlTip.hide();
			clearTimeout(user.local_save_timer);
			user.feedback.html(user.cloud.savingLocally);
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
			> jouer avec 
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
			user.hasChanged = true;
			
			// update Status feedback after 3 seconds otherwise UI feels too nervous.
			// 
			user.feedback.html(user.cloud.savedLocally);
			user.local_save_timer = setTimeout(
				function(){
					
					//user.feedback.text('Saved locally.');
					// Save online
					user.sync();
				}, 1000
			);
			
			
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

