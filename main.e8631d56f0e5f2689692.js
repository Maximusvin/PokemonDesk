(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+iL7":function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},"5aCR":function(t,n,e){},"D/wG":function(t,n,e){var r=e("Hvpk"),o=e("nRc6").f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},HRgQ:function(t,n,e){var r=e("nEaP"),o=e("fT8P"),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},Hvpk:function(t,n,e){var r=e("+iL7");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},OPH6:function(t,n,e){},QfWi:function(t,n,e){"use strict";e.r(n);e("5aCR"),e("OPH6"),e("D/wG");var r={name:"Picahu",defaultHP:100,damageHP:100,elHP:document.getElementById("health-character"),elProgressBar:document.getElementById("progressbar-character")},o={name:"Charmander",defaultHP:100,damageHP:100,elHP:document.getElementById("health-enemy"),elProgressBar:document.getElementById("progressbar-enemy")},i={btn:document.getElementById("btn-kick")},c=function(t){a(t),u(t)},a=function(t){t.elHP.textContent=t.damageHP+" / "+t.defaultHP},u=function(t){t.elProgressBar.style.width=t.damageHP+"%"},f=function(t,n){n.damageHP<t?(n.damageHP=0,alert("Персонаж "+n.name+" проиграл"),i.btn.disabled=!0):n.damageHP-=t,c(n)},l=function(t){return Math.ceil(Math.random()*t)};i.btn.addEventListener("click",(function(){f(l(20),r),f(l(20),o)})),c(r),c(o)},W9fh:function(t,n,e){var r=e("fT8P");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},fT8P:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},gDYM:function(t,n,e){var r=e("fT8P");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},nEaP:function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e("pCvA"))},nRc6:function(t,n,e){var r=e("Hvpk"),o=e("xwiM"),i=e("gDYM"),c=e("W9fh"),a=Object.defineProperty;n.f=r?a:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},pCvA:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},xwiM:function(t,n,e){var r=e("Hvpk"),o=e("+iL7"),i=e("HRgQ");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.e8631d56f0e5f2689692.js.map