(function(){function k(b,e){for(var a=0,d=b.length;a<d;++a)e(b[a])}function l(b,e,a){var d=b.getCursor(),g=a(b,d),c=g;for(/^[\w$_]*$/.test(g.string)||(g=c={start:d.ch,end:d.ch,string:"",state:g.state,className:"."==g.string?"property":null});"property"==c.className;){c=a(b,{line:d.line,ch:c.start});if("."!=c.string)return;c=a(b,{line:d.line,ch:c.start});if(")"==c.string){var h=1;do switch(c=a(b,{line:d.line,ch:c.start}),c.string){case ")":h++;break;case "(":h--}while(0<h);c=a(b,{line:d.line,ch:c.start});
if("variable"==c.className)c.className="function";else return}if(!f)var f=[];f.push(c)}return{list:m(g,f,e),from:{line:d.line,ch:g.start},to:{line:d.line,ch:g.end}}}function n(b,e){var a=b.getTokenAt(e);e.ch==a.start+1&&"."==a.string.charAt(0)?(a.end=a.start,a.string=".",a.className="property"):/^\.[\w$_]*$/.test(a.string)&&(a.className="property",a.start++,a.string=a.string.replace(/\./,""));return a}function m(b,e,a){function d(a){var b;if(b=0==a.indexOf(h)){a:if(Array.prototype.indexOf)b=-1!=c.indexOf(a);
else{for(b=c.length;b--;)if(c[b]===a){b=!0;break a}b=!1}b=!b}b&&c.push(a)}function g(a){"string"==typeof a?k(p,d):a instanceof Array?k(q,d):a instanceof Function&&k(r,d);for(var b in a)d(b)}var c=[],h=b.string;if(e){a=e.pop();var f;for("variable"==a.className?f=window[a.string]:"string"==a.className?f="":"atom"==a.className?f=1:"function"==a.className&&(null==window.jQuery||"$"!=a.string&&"jQuery"!=a.string||"function"!=typeof window.jQuery?null!=window._&&"_"==a.string&&"function"==typeof window._&&
(f=window._()):f=window.jQuery());null!=f&&e.length;)f=f[e.pop().string];null!=f&&g(f)}else{for(e=b.state.localVars;e;e=e.next)d(e.name);g(window);k(a,d)}return c}CodeMirror.javascriptHint=function(b){return l(b,s,function(b,a){return b.getTokenAt(a)})};CodeMirror.coffeescriptHint=function(b){return l(b,t,n)};var p="charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search".split(" "),q="length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight ".split(" "),
r=["prototype","apply","call","bind"],s="break case catch continue debugger default delete do else false finally for function if in instanceof new null return switch throw true try typeof var void while with".split(" "),t="and break catch class continue delete do else extends false finally for if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes".split(" ")})();