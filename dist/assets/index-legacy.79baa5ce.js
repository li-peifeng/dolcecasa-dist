!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],u=!0,c=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.8b784e06.js","./index-legacy.fcd5e5d9.js","./index-legacy.a6f05cff.js","./index-legacy.b3fe9603.js"],(function(n,t){"use strict";var r,o,i,u,c,a,l,s,d,g,m,f,p,h,v,b,y,$,E,A,j,S,w,C,I,k,O,x,L,P,R,T,_,D,G,z,N,U,Y,B,M,V,W,H,X,q,J,F,K,Q,Z,ee,ne,te,re,oe,ie,ue,ce,ae,le,se,de;return{setters:[function(e){r=e.c,o=e.J,i=e.a5,u=e.m,c=e.ac,a=e.ad,l=e.bH,s=e.a1,d=e.a0,g=e.e,m=e.d,f=e.Q,p=e.R,h=e.O,v=e.S,b=e.I,y=e.bI,$=e.q,E=e.bJ,A=e.aa,j=e.a6,S=e.ao,w=e.X,C=e.Y,I=e.bK,k=e.aC,O=e.a,x=e.ag,L=e.bL,P=e.n,R=e.bd,T=e.b7,_=e.b8,D=e.b9,G=e.ba,z=e.bb,N=e.bM,U=e.as,Y=e.bN,B=e.bO},function(e){M=e.d,V=e.e,W=e.f,H=e.g,X=e.h,q=e.i,J=e.j,F=e.k,K=e.l,Q=e.I,Z=e.m,ee=e.n,ne=e.o,te=e.p,re=e.q,oe=e.r,ie=e.s,ue=e.c},function(e){ce=e.A,ae=e.c,le=e.d,se=e.e},function(e){de=e.S}],execute:function(){var ge=n("G",function(e){return e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e}(ge||{})),me=n("F",function(e){return e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e}(me||{})),fe=function(e){var n=u((function(){if(!c.is_admin(a())){if(void 0===e.role)return!1;if(e.role===l.GENERAL&&!c.is_general(a()))return!1}return!0}));return r(d,{get fallback(){return r(pe,e)},get children(){return[r(s,{get when(){return!n()},children:null}),r(s,{get when(){return e.children},get children(){return r(he,e)}})]}})},pe=function(e){var n=g().pathname,t=m(),o=function(){return n()===e.to};return r(ce,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:f,get href(){return e.to},onClick:function(n){if(je(),e.refresh){var t;null===(t=n.stopPropagation)||void 0===t||t.call(n);var r=e.to;r.startsWith("http")||(r=p(r)),window.open(r,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:o()?"$info4":h(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return o()?"$info4":""},get color(){return o()?"$info11":""},get external(){return e.external},get children(){return[r(v,{get when(){return e.icon},get children(){return r(b,{mr:"$2",get as(){return e.icon}})}}),r(y,{get children(){return t(e.title)}})]}})},he=function(n){var t=g().pathname,o=e($(t().includes(n.to)),2),i=o[0],u=o[1],c=m();return r(j,{w:"$full",get children(){return[r(E,{justifyContent:"space-between",onClick:function(){u(!i())},w:"$full",alignItems:"center",get _hover(){return{bgColor:h()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[r(A,{get children(){return[r(v,{get when(){return n.icon},get children(){return r(b,{mr:"$2",get as(){return n.icon}})}}),r(y,{get children(){return c(n.title)}})]}}),r(b,{as:ae,get transform(){return i()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),r(v,{get when(){return i()},get children(){return r(j,{pl:"$2",get children(){return r(ve,{get items(){return n.children}})}})}})]}})},ve=function(e){return r(i,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return r(o,{get each(){return e.items},children:function(e){return r(fe,e)}})}})};var be=w((function(){return C((function(){return t.import("./Common-legacy.5576dadb.js")}),void 0)})),ye=[{title:"manage.sidemenu.profile",icon:M,to:"/@amore",role:l.GUEST,component:w((function(){return C((function(){return t.import("./Profile-legacy.488fe33d.js")}),void 0)}))},{title:"manage.sidemenu.settings",icon:V,to:"/@amore/settings",children:[{title:"manage.sidemenu.site",icon:W,to:"/@amore/settings/site",component:function(){return r(be,{get group(){return ge.SITE}})}},{title:"manage.sidemenu.style",icon:H,to:"/@amore/settings/style",component:function(){return r(be,{get group(){return ge.STYLE}})}},{title:"manage.sidemenu.preview",icon:X,to:"/@amore/settings/preview",component:function(){return r(be,{get group(){return ge.PREVIEW}})}},{title:"manage.sidemenu.global",icon:q,to:"/@amore/settings/global",component:function(){return r(be,{get group(){return ge.GLOBAL}})}},{title:"manage.sidemenu.sso",icon:J,to:"/@amore/settings/sso",component:function(){return r(be,{get group(){return ge.SSO}})}},{title:"manage.sidemenu.ldap",icon:J,to:"/@amore/settings/ldap",component:function(){return r(be,{get group(){return ge.LDAP}})}},{title:"manage.sidemenu.s3",icon:F,to:"/@amore/settings/s3",component:w((function(){return C((function(){return t.import("./S3-legacy.e736d745.js")}),void 0)}))},{title:"manage.sidemenu.other",icon:K,to:"/@amore/settings/other",component:w((function(){return C((function(){return t.import("./Other-legacy.207c0a09.js")}),void 0)}))}]},{title:"manage.sidemenu.tasks",icon:function(e){return S({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)},to:"/@amore/tasks",children:[{title:"manage.sidemenu.offline_download",icon:Q,to:"/@amore/tasks/aria2",component:w((function(){return C((function(){return t.import("./offline_download-legacy.554451b9.js")}),void 0)}))},{title:"manage.sidemenu.upload",icon:Z,to:"/@amore/tasks/upload",component:w((function(){return C((function(){return t.import("./Upload-legacy.96c67917.js")}),void 0)}))},{title:"manage.sidemenu.copy",icon:ee,to:"/@amore/tasks/copy",component:w((function(){return C((function(){return t.import("./Copy-legacy.19d01083.js")}),void 0)}))}]},{title:"manage.sidemenu.users",icon:ne,to:"/@amore/users",component:w((function(){return C((function(){return t.import("./Users-legacy.7c813f79.js")}),void 0)}))},{title:"manage.sidemenu.storages",icon:I,to:"/@amore/storages",component:w((function(){return C((function(){return t.import("./Storages-legacy.b34af989.js")}),void 0)}))},{title:"manage.sidemenu.metas",icon:de,to:"/@amore/metas",component:w((function(){return C((function(){return t.import("./Metas-legacy.fbc20bec.js")}),void 0)}))},{title:"manage.sidemenu.indexes",icon:te,to:"/@amore/indexes",component:w((function(){return C((function(){return t.import("./indexes-legacy.d30f655d.js")}),void 0)}))},{title:"manage.sidemenu.backup-restore",to:"/@amore/backup-restore",icon:le,component:w((function(){return C((function(){return t.import("./backup-restore-legacy.72bbb895.js")}),void 0)}))},{title:"manage.sidemenu.home",icon:re,to:"/",role:l.GUEST,refresh:!0}],$e=k(),Ee=$e.isOpen,Ae=$e.onOpen,je=$e.onClose,Se=function(){var e=m(),n=g().to;return r(j,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return O("$background","$neutral2")()},get children(){return[r(E,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[r(A,{spacing:"$2",get children(){return[r(x,{"aria-label":"menu",get icon(){return r(se,{})},display:{"@sm":"none"},onClick:Ae,size:"sm"}),r(y,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:function(){n("/@amore")},get children(){return e("manage.title")}})]}}),r(A,{spacing:"$1",get children(){return r(x,{"aria-label":"logout",get icon(){return r(oe,{})},onClick:function(){L(),P.success(e("manage.logout_success")),n("/@tiamo?redirect=".concat(encodeURIComponent(location.pathname)))},size:"sm"})}})]}}),r(R,{get opened(){return Ee()},placement:"left",onClose:je,get children(){return[r(T,{}),r(_,{get children(){return[r(D,{}),r(G,{color:"$info9",get children(){return e("manage.title")}}),r(z,{get children(){return r(ve,{items:ye})}})]}})]}})]}})},we=[{to:"/storages/add",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.04924238.js")}),void 0)}))},{to:"/storages/edit/:id",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.04924238.js")}),void 0)}))},{to:"/users/add",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.86d20f93.js")}),void 0)}))},{to:"/users/edit/:id",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.86d20f93.js")}),void 0)}))},{to:"/metas/add",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.19a57333.js")}),void 0)}))},{to:"/metas/edit/:id",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.19a57333.js")}),void 0)}))},{to:"/2fa",component:w((function(){return C((function(){return t.import("./2fa-legacy.c2aa65eb.js")}),void 0)}))},{to:"/messenger",component:w((function(){return C((function(){return t.import("./Messenger-legacy.f19ce7ff.js")}),void 0)}))}],Ce=function(e){return ie(e.title),r(U,{h:"$full",get children(){return r(y,{get children(){return e.title}})}})},Ie=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.forEach((function(n){n.children?e(n.children,t):t.push({to:N(n.to,"/@amore"),component:n.component||function(){return r(Ce,{get title(){return n.title},get to(){return n.to||"empty"}})}})})),t}(ye).concat(we),ke=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var e=m();return ue((function(){return e("manage.title")})),r(j,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[r(Se,{}),r(E,{w:"$full",h:"calc(100vh - 64px)",get children(){return[r(j,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return O("$background","$neutral2")()},overflowY:"auto",get children(){return r(ve,{items:ye})}}),r(j,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return r(Y,{get children(){return r(o,{each:Ie,children:function(e){return r(B,{get path(){return e.to},get component(){return e.component}})}})}})}})]}})]}})}},Symbol.toStringTag,{value:"Module"}));n("i",ke)}}}))}();
