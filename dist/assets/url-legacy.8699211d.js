!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,i,o=[],c=!0,u=!1;try{for(e=e.call(n);!(c=(r=e.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==e.return||e.return()}finally{if(u)throw i}}return o}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.f1c251c4.js","./File-legacy.33338cf0.js","./icon-legacy.de667aa3.js","./index-legacy.86ca4768.js","./useTitle-legacy.76b3f3b5.js","./Layout-legacy.dc202140.js","./index-legacy.ea437369.js","./FolderTree-legacy.c66f8606.js","./index-legacy.115136c3.js"],(function(t){"use strict";var e,r,i,o,c,u,a,l;return{setters:[function(n){e=n.di,r=n.z,i=n.d,o=n.c,c=n.G,u=n.aa,a=n.dj},function(n){l=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=n(e(),1)[0];function f(){var n,e=null===(n=t())||void 0===n?void 0:n.content,r=a(e).text;e&&window.open(r(),"_blank")}r((function(){f()}));var d=i();return o(u,{get loading(){return t.loading},get children(){return o(l,{get children(){return o(c,{onClick:f,get children(){return d("home.preview.open_in_new_window")}})}})}})}))}}}))}();
