!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.f408090c.js","./File-legacy.e2dfe592.js","./icon-legacy.f3af4af3.js","./index-legacy.d9eb13bb.js","./index-legacy.064c9724.js","./Layout-legacy.5b9a77fa.js","./index-legacy.2c515917.js","./FolderTree-legacy.7671f68a.js","./index-legacy.6d30a689.js"],(function(e){"use strict";var t,r,i,o,c,u,a,l;return{setters:[function(n){t=n.cO,r=n.w,i=n.a,o=n.e,c=n.B,u=n.cp,a=n.cP},function(n){l=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=n(t(),1)[0];function f(){var n,t=null===(n=e())||void 0===n?void 0:n.content,r=a(t).text;t&&window.open(r(),"_blank")}r((function(){f()}));var y=i();return o(u,{get loading(){return e.loading},get children(){return o(l,{get children(){return o(c,{onClick:f,get children(){return y("home.preview.open_in_new_window")}})}})}})}))}}}))}();
