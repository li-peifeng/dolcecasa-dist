!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],u=!0,c=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.b33e0cca.js","./useTitle-legacy.9fa011c1.js","./index-legacy.2f2ddf23.js","./LinkWithBase-legacy.193d334c.js","./index-legacy.95f7488d.js"],(function(t,n){"use strict";var r,o,i,u,c,a,l,s,d,g,m,f,p,h,b,v,y,$,E,A,S,j,w,C,I,k,O,x,L,P,T,R,_,D,U,G,Y,z,B,N,V,W,M,X,F,H,Q,Z,q,J,K,ee,te,ne,re,oe,ie,ue,ce,ae,le,se,de;return{setters:[function(e){r=e.c,o=e.K,i=e.a6,u=e.q,c=e.aE,a=e.aF,l=e.bM,s=e.a2,d=e.a1,g=e.e,m=e.d,f=e.R,p=e.U,h=e.Q,b=e.S,v=e.I,y=e.bN,$=e.r,E=e.bO,A=e.as,S=e.a9,j=e.ar,w=e.Y,C=e.Z,I=e.bP,k=e.bQ,O=e.bR,x=e.bS,L=e.bT,P=e.bU,T=e.bV,R=e.bW,_=e.bX,D=e.bY,U=e.bZ,G=e.b_,Y=e.aJ,z=e.a,B=e.ah,N=e.b$,V=e.n,W=e.bk,M=e.be,X=e.bf,F=e.bg,H=e.bh,Q=e.bi,Z=e.c0,q=e.aw,J=e.c1,K=e.c2},function(e){ee=e.c,te=e.I,ne=e.d,re=e.e,oe=e.f,ie=e.g,ue=e.b},function(e){ce=e.c,ae=e.d,le=e.e},function(e){se=e.A},function(e){de=e.S}],execute:function(){var ge=t("G",function(e){return e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e}(ge||{})),me=t("F",function(e){return e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e}(me||{})),fe=function(e){var t=u((function(){if(!c.is_admin(a())){if(void 0===e.role)return!1;if(e.role===l.GENERAL&&!c.is_general(a()))return!1}return!0}));return r(d,{get fallback(){return r(pe,e)},get children(){return[r(s,{get when(){return!t()},children:null}),r(s,{get when(){return e.children},get children(){return r(he,e)}})]}})},pe=function(e){var t=g().pathname,n=m(),o=function(){return t()===e.to};return r(se,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:f,get href(){return e.to},onClick:function(t){if(Se(),e.refresh){var n;null===(n=t.stopPropagation)||void 0===n||n.call(t);var r=e.to;r.startsWith("http")||(r=p(r)),window.open(r,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:o()?"$info4":h(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return o()?"$info4":""},get color(){return o()?"$info11":""},get external(){return e.external},get children(){return[r(b,{get when(){return e.icon},get children(){return r(v,{mr:"$2",get as(){return e.icon}})}}),r(y,{get children(){return n(e.title)}})]}})},he=function(t){var n=g().pathname,o=e($(n().includes(t.to)),2),i=o[0],u=o[1],c=m();return r(S,{w:"$full",get children(){return[r(E,{justifyContent:"space-between",onClick:function(){u(!i())},w:"$full",alignItems:"center",get _hover(){return{bgColor:h()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[r(A,{get children(){return[r(b,{get when(){return t.icon},get children(){return r(v,{mr:"$2",get as(){return t.icon}})}}),r(y,{get children(){return c(t.title)}})]}}),r(v,{as:ce,get transform(){return i()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),r(b,{get when(){return i()},get children(){return r(S,{pl:"$2",get children(){return r(be,{get items(){return t.children}})}})}})]}})},be=function(e){return r(i,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return r(o,{get each(){return e.items},children:function(e){return r(fe,e)}})}})};var ve=w((function(){return C((function(){return n.import("./Common-legacy.3341345a.js")}),void 0)})),ye=[{title:"manage.sidemenu.profile",icon:I,to:"/@amore",role:l.GUEST,component:w((function(){return C((function(){return n.import("./Profile-legacy.016c7cdd.js")}),void 0)}))},{title:"manage.sidemenu.settings",icon:k,to:"/@amore/settings",children:[{title:"manage.sidemenu.site",icon:O,to:"/@amore/settings/site",component:function(){return r(ve,{get group(){return ge.SITE}})}},{title:"manage.sidemenu.style",icon:x,to:"/@amore/settings/style",component:function(){return r(ve,{get group(){return ge.STYLE}})}},{title:"manage.sidemenu.preview",icon:L,to:"/@amore/settings/preview",component:function(){return r(ve,{get group(){return ge.PREVIEW}})}},{title:"manage.sidemenu.global",icon:P,to:"/@amore/settings/global",component:function(){return r(ve,{get group(){return ge.GLOBAL}})}},{title:"manage.sidemenu.sso",icon:ee,to:"/@amore/settings/sso",component:function(){return r(ve,{get group(){return ge.SSO}})}},{title:"manage.sidemenu.ldap",icon:ee,to:"/@amore/settings/ldap",component:function(){return r(ve,{get group(){return ge.LDAP}})}},{title:"manage.sidemenu.s3",icon:T,to:"/@amore/settings/s3",component:w((function(){return C((function(){return n.import("./S3-legacy.24c4b222.js")}),void 0)}))},{title:"manage.sidemenu.other",icon:R,to:"/@amore/settings/other",component:w((function(){return C((function(){return n.import("./Other-legacy.7c2d44aa.js")}),void 0)}))}]},{title:"manage.sidemenu.tasks",icon:function(e){return j({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)},to:"/@amore/tasks",children:[{title:"manage.sidemenu.offline_download",icon:te,to:"/@amore/tasks/aria2",component:w((function(){return C((function(){return n.import("./offline_download-legacy.01e8862c.js")}),void 0)}))},{title:"manage.sidemenu.upload",icon:_,to:"/@amore/tasks/upload",component:w((function(){return C((function(){return n.import("./Upload-legacy.6f1b5503.js")}),void 0)}))},{title:"manage.sidemenu.copy",icon:ne,to:"/@amore/tasks/copy",component:w((function(){return C((function(){return n.import("./Copy-legacy.9fb5f3de.js")}),void 0)}))}]},{title:"manage.sidemenu.users",icon:D,to:"/@amore/users",component:w((function(){return C((function(){return n.import("./Users-legacy.4e2cb700.js")}),void 0)}))},{title:"manage.sidemenu.storages",icon:U,to:"/@amore/storages",component:w((function(){return C((function(){return n.import("./Storages-legacy.78372479.js")}),void 0)}))},{title:"manage.sidemenu.metas",icon:de,to:"/@amore/metas",component:w((function(){return C((function(){return n.import("./Metas-legacy.19285130.js")}),void 0)}))},{title:"manage.sidemenu.indexes",icon:G,to:"/@amore/indexes",component:w((function(){return C((function(){return n.import("./indexes-legacy.0ab0a086.js")}),void 0)}))},{title:"manage.sidemenu.backup-restore",to:"/@amore/backup-restore",icon:ae,component:w((function(){return C((function(){return n.import("./backup-restore-legacy.c421febb.js")}),void 0)}))},{title:"manage.sidemenu.home",icon:re,to:"/",role:l.GUEST,refresh:!0}],$e=Y(),Ee=$e.isOpen,Ae=$e.onOpen,Se=$e.onClose,je=function(){var e=m(),t=g().to;return r(S,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return z("$background","$neutral2")()},get children(){return[r(E,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[r(A,{spacing:"$2",get children(){return[r(B,{"aria-label":"menu",get icon(){return r(le,{})},display:{"@sm":"none"},onClick:Ae,size:"sm"}),r(y,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:function(){t("/@amore")},get children(){return e("manage.title")}})]}}),r(A,{spacing:"$1",get children(){return r(B,{"aria-label":"logout",get icon(){return r(oe,{})},onClick:function(){N(),V.success(e("manage.logout_success")),t("/@tiamo?redirect=".concat(encodeURIComponent(location.pathname)))},size:"sm"})}})]}}),r(W,{get opened(){return Ee()},placement:"left",onClose:Se,get children(){return[r(M,{}),r(X,{get children(){return[r(F,{}),r(H,{color:"$info9",get children(){return e("manage.title")}}),r(Q,{get children(){return r(be,{items:ye})}})]}})]}})]}})},we=[{to:"/storages/add",component:w((function(){return C((function(){return n.import("./AddOrEdit-legacy.19b577cf.js")}),void 0)}))},{to:"/storages/edit/:id",component:w((function(){return C((function(){return n.import("./AddOrEdit-legacy.19b577cf.js")}),void 0)}))},{to:"/users/add",component:w((function(){return C((function(){return n.import("./AddOrEdit-legacy.a1a6f7b3.js")}),void 0)}))},{to:"/users/edit/:id",component:w((function(){return C((function(){return n.import("./AddOrEdit-legacy.a1a6f7b3.js")}),void 0)}))},{to:"/metas/add",component:w((function(){return C((function(){return n.import("./AddOrEdit-legacy.6036fbec.js")}),void 0)}))},{to:"/metas/edit/:id",component:w((function(){return C((function(){return n.import("./AddOrEdit-legacy.6036fbec.js")}),void 0)}))},{to:"/2fa",component:w((function(){return C((function(){return n.import("./2fa-legacy.96115fc3.js")}),void 0)}))},{to:"/messenger",component:w((function(){return C((function(){return n.import("./Messenger-legacy.2599795d.js")}),void 0)}))}],Ce=function(e){return ie(e.title),r(q,{h:"$full",get children(){return r(y,{get children(){return e.title}})}})},Ie=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.forEach((function(t){t.children?e(t.children,n):n.push({to:Z(t.to,"/@amore"),component:t.component||function(){return r(Ce,{get title(){return t.title},get to(){return t.to||"empty"}})}})})),n}(ye).concat(we),ke=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var e=m();return ue((function(){return e("manage.title")})),r(S,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[r(je,{}),r(E,{w:"$full",h:"calc(100vh - 64px)",get children(){return[r(S,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return z("$background","$neutral2")()},overflowY:"auto",get children(){return r(be,{items:ye})}}),r(S,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return r(J,{get children(){return r(o,{each:Ie,children:function(e){return r(K,{get path(){return e.to},get component(){return e.component}})}})}})}})]}})]}})}},Symbol.toStringTag,{value:"Module"}));t("i",ke)}}}))}();
