import{u as pt,a as b,b as O,s as ee,n as z,c as nt,p as J,g as ft,f as bt,_ as rt,l as te,o as Le,d as _,e,P as wt,h as _t,i as kt,j as H,k as $,m as vt,q as ve,r as $t,t as yt,v as Ct,w as $e,M as W,x as q,y as j,z as G,S as w,I as ye,T as xt,F as St,A as re,B as C,C as K,D as ie,E as ce,G as Mt,H as Ot,J as Ft,K as Be,L as ot,N as Rt,O as It,Q as Tt,R as me,U as pe,V as fe,W as Ae,X as Pe,Y as Ce,Z as be,$ as M,a0 as I,a1 as Et,a2 as B,a3 as X,a4 as se,a5 as zt,a6 as Lt,a7 as Fe,a8 as U,a9 as xe,aa as Se,ab as Bt,ac as we,ad as De,ae as at,af as he,ag as le,ah as He,ai as ne,aj as At,ak as Pt,al as je,am as V,an as Dt,ao as Ht,ap as jt,aq as h,ar as Vt,as as Nt,at as Ut,au as Wt,av as lt,aw as it,ax as qt,ay as st,az as y,aA as Re,aB as Gt,aC as Kt,aD as Xt,aE as Ge,aF as Ke,aG as Jt,aH as Yt,aI as Qt,aJ as Zt,aK as en,aL as L,aM as tn,aN as A,aO as nn,aP as rn,aQ as on,aR as an,aS as ln,aT as sn,aU as cn,aV as un,aW as Me,aX as dn,aY as gn,aZ as Xe,a_ as hn,a$ as mn,b0 as pn,b1 as Je,b2 as fn,b3 as bn,b4 as wn,b5 as _n,b6 as kn,b7 as vn,b8 as $n,b9 as yn,ba as Cn,bb as Ee,bc as xn,bd as Sn,be as Mn,bf as On,bg as Fn,bh as Rn,bi as In,bj as Tn,bk as En,bl as zn,bm as Ln,bn as Bn,bo as An,bp as Pn,bq as Dn}from"./index.14df8b30.js";import{u as Hn,B as ct,a as ut,I as jn,b as Vn}from"./index.e0c7a264.js";import{u as T,r as Nn,a as Un,R as Wn}from"./index.64d9aa1b.js";import{F as qn,M as Ve}from"./FolderTree.68606dbf.js";import{A as Gn,F as dt,C as Kn,a as Xn,b as Jn,B as Yn,c as Qn,T as Zn,d as Ye,e as er}from"./index.c50ad09b.js";function ke(t){return t==null||t===""}function tr(t){return t==null}async function nr(t,n){let r="/downloads/alist";const o=await nt.post(t,{id:Math.random().toString(),jsonrpc:"2.0",method:"aria2.getGlobalOption",params:["token:"+n]});return console.log(o),o.status===200&&(ke(o.data.result.dir)||(r=o.data.result.dir),r=r.endsWith("/")?r.slice(0,-1):r),r}const rr=()=>{const{rawLinks:t}=pt(),n=b(),{pathname:r}=O();return{batchDownloadSelected:()=>{t(!0).forEach(l=>{window.open(l,"_blank")})},sendToAria2:async()=>{const o=ee(),l=async(s,a)=>{var c;if(a.is_dir){const u=await bt(J(r(),s,a.name),rt());if(u.code!==200)return u.message;const d=[];for(const m of(c=u.data.content)!=null?c:[]){const k=await l(J(s,a.name),m);if(typeof k=="string")return k;d.push(...k)}return d}else return[{path:J(s,a.name),dir:s,url:ft(J(r(),s),a,"direct",!0),name:a.name}]},{aria2_rpc_url:i,aria2_rpc_secret:g}=te;if(!i){z.warning(n("home.toolbar.aria2_not_set"));return}try{let s="/downloads/alist";s=await nr(i,g);let a=!1;z.info(`${n("home.package_download.fetching_struct")}`);for(const c of o){const u=await l("",c);if(typeof u!="object"||u.length===void 0)return z.error(`${n("home.package_download.fetching_struct_failed")}: ${u}`),u;for(let d=0;d<u.length;d++){if(ke(u[d].path)||tr(u[d].dir)||ke(u[d].url)||ke(u[d].name)){z.error(`${n("home.package_download.fetching_struct_failed")}: ${JSON.stringify(u[d])}`);continue}a||(a=!0,z.info(`${n("home.package_download.downloading")}`));const m=await nt.post(i,{id:Math.random().toString(),jsonrpc:"2.0",method:"aria2.addUri",params:["token:"+g,[u[d].url],{out:u[d].name,dir:s+u[d].dir,"check-certificate":"false"}]});console.log(m)}}z.success(n("home.toolbar.send_aria2_success"))}catch(s){console.error(s),z.error(`failed to send to aria2: ${s}`)}}}},or=t=>(t=Array.isArray(t)?t[0]:t,t instanceof Element?t:void 0),ar=(t,n)=>{const r={once:!0};t.addEventListener("motioncomplete",n,r),_(t.removeEventListener.bind(t,"motioncomplete",n,r))},lr=t=>{let{initial:n=!0}=t;Le(()=>n=!0);let r=!1,o=[],l=[],i=[];return _(()=>{i.concat(l).forEach(g=>g()),l=i=o=[]}),e(Ct.Provider,{value:{addCleanup:g=>l.push(g),addMount:g=>o.push(g),initial:()=>n},get children(){return e(wt.Provider,{value:void 0,get children(){return _t(()=>{const g=kt(()=>t.children),s=H(()=>or(g())),[a,c]=$(),[u,d]=$();return vt(ve(s,v=>{i.push(...l),l=[],$t(()=>{t.exitBeforeEnter?(c(),k(()=>!r&&m(v))):(m(v),k())})})),[a,u];function m(v){c(v),o.forEach(E=>E()),o=[]}function k(v){var oe;const E=()=>{d(),i.forEach(ae=>ae()),i=[],v==null||v()},p=d((oe=a())!=null?oe:u());if(!p)return E();const x=yt.get(p);if(!x||!x.getOptions().exit)return E();x.setActive("exit",r=!0),ar(p,()=>{r=!1,E()})}})}})}})},Ie=t=>{var s;const[n,r]=$((s=t.defaultValue)!=null?s:""),o=b();let l;const i=()=>{const a=n().lastIndexOf(".");setTimeout(()=>{a>0&&t.isRenamingFile?l.setSelectionRange(0,a):l.select()},10)};$e(()=>{l&&(l.focus(),i()),_(()=>{l&&l.setSelectionRange(0,0)})});const g=()=>{var a;if(!n()){z.warning(o("global.empty_input"));return}(a=t.onSubmit)==null||a.call(t,n()),r("")};return e(K,{blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},initialFocus:"#modal-input",get children(){return[e(W,{}),e(q,{get children(){return[e(j,{get children(){return o(t.title)}}),e(G,{get children(){return[e(w,{get when(){return t.topSlot},get children(){return t.topSlot}}),e(w,{get when(){return t.type==="text"},get fallback(){return e(ye,{id:"modal-input",get type(){return t.type},get value(){return n()},ref:a=>l=a,onInput:a=>{r(a.currentTarget.value)},onFocus:i,onKeyDown:a=>{a.key==="Enter"&&g()}})},get children(){return e(xt,{id:"modal-input",get value(){return n()},ref:a=>l=a,onInput:a=>{r(a.currentTarget.value)},onFocus:i})}}),e(w,{get when(){return t.tips},get children(){return e(St,{get children(){return t.tips}})}}),e(w,{get when(){return t.bottomSlot},get children(){return t.bottomSlot}})]}}),e(re,{display:"flex",gap:"$2",get children(){return[e(C,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return o("global.cancel")}}),e(C,{get loading(){return t.loading},onClick:()=>g(),get children(){return o("global.ok")}})]}})]}})]}})},ir=()=>{const{pathname:t}=O(),n=H(()=>["",...t().split("/").filter(Boolean)]),r=b(),{setPathAs:o}=T(),l=H(()=>{const i={_after:{content:"",bgColor:"$background",position:"absolute",height:"100%",width:"99vw",zIndex:-1,transform:"translateX(-50%)",left:"50%",top:0}};switch(te.position_of_header_navbar){case"only_navbar_sticky":return{...i,position:"sticky",zIndex:"$sticky",top:0};case"sticky":return{...i,position:"sticky",zIndex:"$sticky",top:60};default:return{_after:void 0,position:void 0,zIndex:void 0,top:void 0}}});return e(Tt,ie(l,{background:"$background",class:"nav",w:"$full",get children(){return e(ce,{get each(){return n()},children:(i,g)=>{const s=H(()=>g()===n().length-1),a=n().slice(0,g()+1).join("/"),c=Mt(a);let u=()=>i;return u()===""&&(u=()=>me("home_icon")+r("manage.sidemenu.home")),e(Ot,{class:"nav-item",get children(){return[e(Ft,{class:"nav-link",css:{wordBreak:"break-all"},color:"unset",get _hover(){return{bgColor:Be(),color:"unset"}},_active:{transform:"scale(.95)",transition:"0.1s"},cursor:"pointer",p:"$1",rounded:"$lg",get currentPage(){return s()},get as(){return s()?void 0:ot},get href(){return Rt(c)},onMouseEnter:()=>o(a),children:u}),e(w,{get when(){return!s()},get children(){return e(It,{class:"nav-separator"})}})]}})}})}}))},sr=pe(()=>fe(()=>import("./Folder.ebb8ca99.js").then(t=>t.F),["assets/Folder.ebb8ca99.js","assets/Folder.b511ba9e.css","assets/index.14df8b30.js","assets/index.66bd594c.css","assets/icon.f4da41a1.js","assets/index.e0c7a264.js","assets/index.c50ad09b.js","assets/index.1749f1d4.js","assets/video_box.e90d7fc0.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.64d9aa1b.js","assets/Paginator.8d9602e1.js"])),cr=pe(()=>fe(()=>import("./File.bed61457.js").then(t=>t.a),["assets/File.bed61457.js","assets/index.14df8b30.js","assets/index.66bd594c.css","assets/icon.f4da41a1.js","assets/index.e0c7a264.js","assets/index.c50ad09b.js","assets/index.1749f1d4.js"])),ur=pe(()=>fe(()=>import("./Password.1693ff98.js"),["assets/Password.1693ff98.js","assets/index.14df8b30.js","assets/index.66bd594c.css","assets/index.64d9aa1b.js","assets/index.c50ad09b.js"])),[dr,gr]=$();let Qe=!0;const hr=()=>{const t=Ae("white","$neutral3"),{pathname:n}=O(),{handlePathChange:r}=T();let o=n();return $e(ve(n,l=>{Hn(),Qe||Un(),Qe=!1,Nn(o,window.scrollY),r(l),o=l})),e(X,{ref:l=>gr(l),class:"obj-box",w:"$full",rounded:"$xl",get bgColor(){return t()},p:"$2",shadow:"$lg",spacing:"$2",get children(){return e(Pe,{get fallback(){return e(Ce,{})},get children(){return e(be,{get children(){return[e(M,{get when(){return I.err},get children(){return e(Et,{get msg(){return I.err},disableColor:!0})}}),e(M,{get when(){return[B.FetchingObj,B.FetchingObjs].includes(I.state)},get children(){return e(Ce,{})}}),e(M,{get when(){return I.state===B.NeedPassword},get children(){return e(ur,{})}}),e(M,{get when(){return[B.Folder,B.FetchingMore].includes(I.state)},get children(){return e(sr,{})}}),e(M,{get when(){return I.state===B.File},get children(){return e(cr,{})}})]}})}})}})},gt=t=>{const n=me("home_container");return e(be,{get fallback(){return e(se,{w:"min(99%, 980px)",get children(){return t.children}})},get children(){return e(M,{when:n==="hope_container",get children(){return e(zt,{get children(){return t.children}})}})}})};function mr(){const{to:t}=O(),n=Lt(),[r,o]=$(),[l,i]=$(),[g,s]=$(-999),a=()=>s(0),c=()=>{const d=dr(),m=l();if(!d||!m)return;const k=d.offsetLeft>50?16:0;m.clientWidth<d.offsetLeft-k?s(0):s(`calc(-100% + ${d.offsetLeft}px - ${k}px)`)};let u;return Le(()=>{const d=r();d==null||d.setPath(n.pathname),u=requestAnimationFrame(c),window.addEventListener("resize",c),_(()=>window.removeEventListener("resize",c))}),$e(ve(()=>I.state,()=>{cancelAnimationFrame(u),u=requestAnimationFrame(c)})),$e(ve(()=>n.pathname,()=>{const d=r();d==null||d.setPath(n.pathname)})),e(se,{get as(){return Fe.div},initial:{x:-999},get animate(){return{x:g()}},zIndex:"$overlay",pos:"fixed",left:3,top:3,h:"calc(100vh - 6px)",minW:180,p:"$2",overflow:"auto",shadow:"$lg",rounded:"$lg",bgColor:"white",_dark:{bgColor:"$neutral3"},onMouseEnter:a,onMouseLeave:c,ref:d=>i(d),get children(){return e(qn,{autoOpen:!0,showEmptyIcon:!0,onChange:d=>t(d),handle:d=>o(d)})}})}function pr(){const t=H(()=>te.show_sidebar!=="none");return e(w,{get when(){return t()},get children(){return e(mr,{})}})}const fr=()=>e(gt,{get children(){return e(X,{class:"body",mt:"$1",py:"$2",px:"2%",minH:"80vh",w:"$full",gap:"$4",get children(){return[e(ir,{}),e(hr,{}),e(pr,{})]}})}}),br=we("<span> - </span>"),wr=()=>{const t=b();return e(X,{class:"footer",w:"$full",py:"$4",get children(){return e(U,{spacing:"$1",get children(){return[e(Gn,{as:ot,get href(){return xe.is_guest(Se())?"/@login":"/@manage"},get children(){return t(xe.is_guest(Se())?"login.login":"home.footer.manage")}}),br.cloneNode(!0),e(Bt,{href:"https://peifeng.li",external:!0,get children(){return t("home.footer.powered_by")}})]}})}})},Ze={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},ue="^\\s*",de="\\s*$",Y="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",Q="([0-9A-Fa-f])",Z="([0-9A-Fa-f]{2})",_r=new RegExp(`${ue}rgb\\s*\\(${Y},${Y},${Y}\\)${de}`),kr=new RegExp(`${ue}rgba\\s*\\(${Y},${Y},${Y},${Y}\\)${de}`),vr=new RegExp(`${ue}#${Q}${Q}${Q}${de}`),$r=new RegExp(`${ue}#${Z}${Z}${Z}${de}`),yr=new RegExp(`${ue}#${Q}${Q}${Q}${Q}${de}`),Cr=new RegExp(`${ue}#${Z}${Z}${Z}${Z}${de}`);function S(t){return parseInt(t,16)}function ht(t){try{let n;if(n=$r.exec(t))return[S(n[1]),S(n[2]),S(n[3]),1];if(n=_r.exec(t))return[D(n[1]),D(n[5]),D(n[9]),1];if(n=kr.exec(t))return[D(n[1]),D(n[5]),D(n[9]),ze(n[13])];if(n=vr.exec(t))return[S(n[1]+n[1]),S(n[2]+n[2]),S(n[3]+n[3]),1];if(n=Cr.exec(t))return[S(n[1]),S(n[2]),S(n[3]),ze(S(n[4])/255)];if(n=yr.exec(t))return[S(n[1]+n[1]),S(n[2]+n[2]),S(n[3]+n[3]),ze(S(n[4]+n[4])/255)];if(t in Ze)return ht(Ze[t]);throw new Error(`[seemly/rgba]: Invalid color value ${t}.`)}catch(n){throw n}}function xr(t){return t>1?1:t<0?0:t}function et(t,n,r,o){return`rgba(${D(t)}, ${D(n)}, ${D(r)}, ${xr(o)})`}function tt(t,n){const[r,o,l,i=1]=Array.isArray(t)?t:ht(t);return n.alpha?et(r,o,l,n.alpha):et(r,o,l,i)}function ze(t){const n=Math.round(Number(t)*100)/100;return n>1?1:n<0?0:n}function D(t){const n=Math.round(Number(t));return n>255?255:n<0?0:n}const Sr={list:dt,grid:ct,image:ut},Mr=()=>{const t=b();return e(je,{get children(){return[e(De,{as:at,get color(){return he()},get bgColor(){return tt(he(),{alpha:.15})},get _hover(){return{bgColor:tt(he(),{alpha:.2})}},"aria-label":"switch layout",compact:!0,size:"lg",get icon(){return e(be,{get children(){return[e(M,{get when(){return le()==="list"},get children(){return e(dt,{})}}),e(M,{get when(){return le()==="grid"},get children(){return e(ct,{})}}),e(M,{get when(){return le()==="image"},get children(){return e(ut,{})}})]}})}}),e(He,{get children(){return e(ce,{get each(){return Object.entries(Sr)},children:n=>e(ne,{get icon(){return e(At,{get component(){return n[1]}})},onSelect:()=>{Pt(n[0])},get children(){return t(`home.layouts.${n[0]}`)}})})}})]}})};function Or(t){return V({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M9 11l3 3 8-8"/><path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9"/>'},t)}function Fr(t){return V({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><rect width="12" height="12" x="8" y="8" rx="2"/><path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"/>'},t)}function bo(t){return V({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M11 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-5M10 14L20 4M15 4h5v5"/>'},t)}function Rr(t){return V({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M14 3v4a1 1 0 001 1h4"/><path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2zM9 15h6"/><path d="M12.5 17.5L15 15l-2.5-2.5"/>'},t)}function Ir(t){return V({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M10 14a3.5 3.5 0 005 0l4-4a3.5 3.5 0 00-5-5l-.5.5"/><path d="M14 10a3.5 3.5 0 00-5 0l-4 4a3.5 3.5 0 005 5l.5-.5"/>'},t)}function Tr(t){return V({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><circle cx="15" cy="15" r="4"/><path d="M18.5 18.5L21 21M4 6h16M4 12h4M4 18h4"/>'},t)}const Er=()=>{const t=me("logo").split(`
`),n=Ae(t[0],t.pop()),r=H(()=>{switch(te.position_of_header_navbar){case"sticky":return{position:"sticky",zIndex:"$sticky",top:0};default:return{position:void 0,zIndex:void 0,top:void 0}}});return e(Vt,ie(r,{bgColor:"$background",class:"header",w:"$full",get children(){return e(gt,{get children(){return e(U,{px:"calc(2% + 0.5rem)",py:"$2",w:"$full",justifyContent:"space-between",get children(){return[e(U,{class:"header-left",h:"52px",get children(){return e(Dt,{get src(){return n()},h:"$full",w:"auto",get fallback(){return e(Ht,{})}})}}),e(U,{class:"header-right",spacing:"$2",get children(){return e(w,{get when(){return I.state===B.Folder},get children(){return[e(at,{"aria-label":"Search",compact:!0,size:"lg",get icon(){return e(be,{get children(){return[e(M,{get when(){return le()==="list"},get children(){return e(Tr,{})}}),e(M,{get when(){return le()==="grid"},get children(){return e(jt,{})}}),e(M,{get when(){return le()==="image"},get children(){return e(Kn,{})}})]}})},onClick:()=>{h.emit("tool","search")}}),e(Mr,{})]}})}})]}})}})}}))};function zr(t){return V({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M11 8v6h1V8h2.5l-3-3-3 3zM1 3h1.5v1H1V3zM3 3h1.5v1H3V3zM5 3h1v1.5H5V3zM1 6.5h1V8H1V6.5zM2.5 7H4v1H2.5V7zM4.5 7H6v1H4.5V7zM1 4.5h1V6H1V4.5zM5 5h1v1.5H5V5zM5 11v3H2v-3h3zm1-1H1v5h5v-5z"/>'},t)}function wo(t){return V({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M14 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zM2 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zm1.5 5.5A1.5 1.5 0 005 13v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v2c0 .55.45 1 1 1s1-.45 1-1v-2a1.5 1.5 0 001.5-1.5V6h-9v5.5zM12.472 5a4.5 4.5 0 00-2.025-3.276l.5-1.001a.5.5 0 00-.895-.447L9.55 1.28l-.13-.052a4.504 4.504 0 00-2.84 0l-.13.052L5.948.276a.5.5 0 00-.895.447l.5 1.001A4.499 4.499 0 003.528 5v.5H12.5V5h-.028zM6.5 4a.5.5 0 01-.001-1h.002A.5.5 0 016.5 4zm3 0a.5.5 0 01-.001-1h.003a.5.5 0 01-.001 1z"/>'},t)}function Lr(t){return V({a:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},c:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>'},t)}const N={rename:{icon:Xn,color:"$accent9"},copy:{icon:Fr,color:"$success9"},move:{icon:Rr,color:"$warning9"},delete:{icon:Nt,color:"$danger9"},copy_link:{icon:Ir,color:"$info9"},mkdir:{icon:Jn,p:!0},recursive_move:{icon:zr,p:!0},remove_empty_directory:{icon:Lr,p:!0},batch_rename:{icon:Yn,p:!0},new_file:{icon:Qn,p:!0},cancel_select:{icon:Zn},download:{icon:Ut,color:"$primary9"}},Oe=t=>{const n=Wt.findIndex(o=>o===t.name);if(n!==-1&&!xe.can(Se(),n))return null;const r=b();return e(it,{placement:"top",withArrow:!0,get label(){return r(`home.toolbar.${t.name}`)},get children(){return e(lt,ie({get class(){return`toolbar-${t.name}`},get _hover(){return{bgColor:Be()}},_focus:{outline:"none"},cursor:"pointer",boxSize:"$7",rounded:"$md",get p(){var o;return(o=N[t.name])!=null&&o.p?"$1_5":"$1"},_active:{transform:"scale(.94)",transition:"0.2s"},get as(){var o;return(o=N[t.name])==null?void 0:o.icon},get color(){var o;return(o=N[t.name])==null?void 0:o.color}},t))}})},R=t=>{const n=b();return e(it,{get disabled(){return!t.tips},placement:"left",withArrow:!0,get label(){return n(`home.toolbar.${t.tips}`)},get children(){return e(lt,ie({get color(){return he()},get _hover(){return{bgColor:he(),color:"white"}},_focus:{outline:"none"},cursor:"pointer",boxSize:"$8",rounded:"$lg",p:"$1",_active:{transform:"scale(.94)",transition:"0.2s"},get as(){return t.icon}},t))}})},Br=()=>{const t=b(),{copySelectedPreviewPage:n,copySelectedRawLink:r}=qt(),o="neutral";return e(je,{placement:"top",offset:10,get children(){return[e(De,{as:Oe,name:"copy_link"}),e(He,{get children(){return[e(ne,{colorScheme:o,onSelect:()=>{n()},get children(){return t("home.toolbar.preview_page")}}),e(ne,{colorScheme:o,onSelect:()=>{r()},get children(){return t("home.toolbar.down_link")}}),e(ne,{colorScheme:o,onSelect:()=>{r(!0)},get children(){return t("home.toolbar.encode_down_link")}})]}})]}})},Ar=we("<p></p>"),Pr=()=>{const t=b(),n="neutral",{batchDownloadSelected:r,sendToAria2:o}=rr();return e(je,{placement:"top",offset:10,get children(){return[e(De,{as:Oe,name:"download"}),e(He,{get children(){return[e(ne,{colorScheme:n,onSelect:r,get children(){return t("home.toolbar.batch_download")}}),e(w,{get when(){return xe.is_admin(Se())||st("package_download")},get children(){return e(ne,{colorScheme:n,onSelect:()=>{h.emit("tool","package_download")},get children(){return t("home.toolbar.package_download")}})}}),e(ne,{colorScheme:n,onSelect:o,get children(){return t("home.toolbar.send_aria2")}})]}})]}})},Dr=pe(()=>fe(()=>import("./PackageDownload.e13c1de4.js"),["assets/PackageDownload.e13c1de4.js","assets/index.14df8b30.js","assets/index.66bd594c.css"])),Hr=()=>{const t=b(),n=s=>{if(s==="package_download"){if(!st("package_download"))return;o()}};h.on("tool",n),_(()=>{h.off("tool",n)});const{isOpen:r,onOpen:o,onClose:l}=y(),[i,g]=$("pre_tips");return e(K,{blockScrollOnMount:!1,get opened(){return r()},onClose:l,closeOnOverlayClick:!1,closeOnEsc:!1,get children(){return[e(W,{}),e(q,{get children(){return[e(j,{get children(){return t("home.toolbar.package_download")}}),e(Pe,{get fallback(){return e(Ce,{})},get children(){return e(w,{get when(){return i()==="pre_tips"},get fallback(){return e(Dr,{onClose:l})},get children(){return[e(G,{get children(){const s=Ar.cloneNode(!0);return Re(s,()=>t("home.toolbar.pre_package_download-tips")),s}}),e(re,{display:"flex",gap:"$2",get children(){return[e(C,{onClick:l,colorScheme:"neutral",get children(){return t("global.cancel")}}),e(C,{colorScheme:"info",onClick:()=>{g("package_download")},get children(){return t("global.confirm")}})]}})]}})}})]}})]}})},jr=()=>{const t=H(()=>[B.Folder,B.FetchingMore].includes(I.state)&&Gt()&&Kt());return e(lr,{exitBeforeEnter:!0,get children(){return e(w,{get when(){return t()},get children(){return e(se,{class:"center-toolbar",pos:"fixed",bottom:"$4",right:"50%",w:"max-content",color:"$neutral11",get as(){return Fe.div},initial:{opacity:0,scale:.9,x:"50% ",y:10},animate:{opacity:1,scale:1,x:"50%",y:0},exit:{opacity:0,scale:.9},transition:{duration:.2},get children(){return e(U,{p:"$2",get bgColor(){return Ae("white","#000000d0")()},spacing:"$1",shadow:"0px 10px 30px -5px rgba(0, 0, 0, 0.3)",rounded:"$lg",css:{backdropFilter:"blur(8px)"},get children(){return[e(ce,{each:["rename","move","copy","delete"],children:n=>e(Oe,{name:n,onClick:()=>{h.emit("tool",n)}})}),e(Br,{}),e(Pr,{}),e(Oe,{name:"cancel_select",onClick:()=>{Xt(!1)}})]}})}})}})}})},Vr=()=>{const{isOpen:t,onToggle:n}=y({defaultIsOpen:localStorage.getItem("more-open")==="true",onClose:()=>localStorage.setItem("more-open","false"),onOpen:()=>localStorage.setItem("more-open","true")}),r=H(()=>t()?"$4":"$5"),o=H(()=>I.state===B.Folder),{refresh:l}=T();return e(se,{class:"left-toolbar-box",pos:"fixed",get right(){return r()},get bottom(){return r()},get children(){return e(w,{get when(){return t()},get fallback(){return e(R,{class:"toolbar-toggle",as:Ye,onClick:()=>{n()}})},get children(){return e(X,{class:"left-toolbar",p:"$1",rounded:"$lg",spacing:"$1",bgColor:"$neutral1",get as(){return Fe.div},initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.6},transition:{duration:.2},get children(){return[e(X,{spacing:"$1",class:"left-toolbar-in",get children(){return[e(w,{get when(){return Ge(()=>!!o(),!0)()&&(Ke("write")||I.write)},get children(){return[e(R,{as:Wn,tips:"refresh",onClick:()=>{l(void 0,!0)}}),e(R,{get as(){return N.new_file.icon},tips:"new_file",onClick:()=>{h.emit("tool","new_file")}}),e(R,{get as(){return N.mkdir.icon},p:"$1_5",tips:"mkdir",onClick:()=>{h.emit("tool","mkdir")}}),e(R,{get as(){return N.recursive_move.icon},tips:"recursive_move",onClick:()=>{h.emit("tool","recursiveMove")}}),e(R,{get as(){return N.remove_empty_directory.icon},tips:"remove_empty_directory",onClick:()=>{h.emit("tool","removeEmptyDirectory")}}),e(R,{get as(){return N.batch_rename.icon},tips:"batch_rename",onClick:()=>{h.emit("tool","batchRename")}}),e(R,{as:Jt,tips:"upload",onClick:()=>{h.emit("tool","upload")}})]}}),e(w,{get when(){return Ge(()=>!!o(),!0)()&&Ke("offline_download")},get children(){return e(R,{as:jn,pl:"0",tips:"offline_download",onClick:()=>{h.emit("tool","offline_download")}})}}),e(w,{get when(){return Yt()},get children(){return e(R,{as:er,tips:"toggle_markdown_toc",onClick:()=>{Qt(i=>!i)}})}}),e(R,{tips:"toggle_checkbox",as:Or,onClick:Zt}),e(R,{as:en,tips:"local_settings",onClick:()=>{h.emit("tool","local_settings")}})]}}),e(R,{tips:"more",as:Ye,onClick:n})]}})}})}})},Nr=()=>{const{isOpen:t,onOpen:n,onClose:r}=y(),[o,l]=L(tn),{pathname:i}=O(),{refresh:g}=T(),s=a=>{a==="copy"&&n()};return h.on("tool",s),_(()=>{h.off("tool",s)}),e(Ve,{get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(i(),a,ee().map(u=>u.name));A(c,()=>{g(),r()})}})},Ur=()=>{const{isOpen:t,onOpen:n,onClose:r}=y(),[o,l]=L(nn),{pathname:i}=O(),{refresh:g}=T(),s=a=>{a==="move"&&n()};return h.on("tool",s),_(()=>{h.off("tool",s)}),e(Ve,{get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(i(),a,ee().map(u=>u.name));A(c,()=>{g(),r()})}})},Wr=we("<p></p>"),qr=()=>{const t=b(),{isOpen:n,onOpen:r,onClose:o}=y(),[l,i]=L(rn),{refresh:g}=T(),{pathname:s}=O(),a=c=>{c==="delete"&&r()};return h.on("tool",a),_(()=>{h.off("tool",a)}),e(K,{blockScrollOnMount:!1,get opened(){return n()},onClose:o,size:{"@initial":"xs","@md":"md"},get children(){return[e(W,{}),e(q,{get children(){return[e(j,{get children(){return t("home.toolbar.delete")}}),e(G,{get children(){const c=Wr.cloneNode(!0);return Re(c,()=>t("home.toolbar.delete-tips")),c}}),e(re,{display:"flex",gap:"$2",get children(){return[e(C,{onClick:o,colorScheme:"neutral",get children(){return t("global.cancel")}}),e(C,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const c=await i(s(),ee().map(u=>u.name));A(c,()=>{g(),o()})},get children(){return t("global.confirm")}})]}})]}})]}})},Gr=()=>{const{isOpen:t,onOpen:n,onClose:r}=y(),o=b(),[l,i]=L(on),{pathname:g}=O(),{refresh:s}=T(),a=c=>{if(c==="rename"){if(!an()){z.warning(o("home.toolbar.only_one-tips"));return}n()}};return h.on("tool",a),_(()=>{h.off("tool",a)}),e(w,{get when(){return t()},get children(){return e(Ie,{title:"home.toolbar.input_new_name",get isRenamingFile(){return!ee()[0].is_dir},get opened(){return t()},onClose:r,get defaultValue(){var c,u;return(u=(c=ee()[0])==null?void 0:c.name)!=null?u:""},get loading(){return l()},onSubmit:async c=>{const u=await i(J(g(),ee()[0].name),c);A(u,()=>{s(),r()})}})}})},Kr=()=>{const{isOpen:t,onOpen:n,onClose:r}=y(),[o,l]=L(ln),{refresh:i}=T(),{pathname:g}=O(),s=a=>{a==="new_file"&&n()};return h.on("tool",s),_(()=>{h.off("tool",s)}),e(Ie,{title:"home.toolbar.input_filename",get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(J(g(),a),rt());A(c,()=>{i(),r()})}})},Xr=()=>{const{isOpen:t,onOpen:n,onClose:r}=y(),[o,l]=L(sn),{pathname:i}=O(),{refresh:g}=T(),s=a=>{a==="mkdir"&&n()};return h.on("tool",s),_(()=>{h.off("tool",s)}),e(Ie,{title:"home.toolbar.input_dir_name",get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(J(i(),a));A(c,()=>{g(),r()})}})},Jr=we("<p></p>"),Yr=()=>{const{isOpen:t,onOpen:n,onClose:r}=y(),{isOpen:o,onOpen:l,onClose:i}=y(),[g,s]=L(cn),{pathname:a}=O(),{refresh:c}=T(),u=m=>{m==="recursiveMove"&&n()};h.on("tool",u),_(()=>{h.off("tool",u)});const d=b();return[e(K,{blockScrollOnMount:!1,get opened(){return t()},onClose:()=>r(),size:{"@initial":"xs","@md":"md"},get children(){return[e(W,{}),e(q,{get children(){return[e(j,{get children(){return d("home.toolbar.recursive_move")}}),e(G,{get children(){const m=Jr.cloneNode(!0);return Re(m,()=>d("home.toolbar.recursive_move_directory-tips")),m}}),e(re,{display:"flex",gap:"$2",get children(){return[e(C,{onClick:()=>r(),colorScheme:"neutral",get children(){return d("global.cancel")}}),e(C,{onClick:()=>{r(),l()},colorScheme:"danger",get children(){return d("global.confirm")}})]}})]}})]}}),e(Ve,{get opened(){return o()},onClose:i,get loading(){return g()},onSubmit:async m=>{const k=await s(a(),m);A(k,()=>{c(),i()})}})]},Qr=we("<p></p>"),Zr=()=>{const{isOpen:t,onOpen:n,onClose:r}=y(),{pathname:o}=O(),[l,i]=L(un),{refresh:g}=T(),s=c=>{c==="removeEmptyDirectory"&&n()};h.on("tool",s),_(()=>{h.off("tool",s)});const a=b();return e(K,{blockScrollOnMount:!1,get opened(){return t()},onClose:r,size:{"@initial":"xs","@md":"md"},get children(){return[e(W,{}),e(q,{get children(){return[e(j,{get children(){return a("home.toolbar.remove_empty_directory")}}),e(G,{get children(){const c=Qr.cloneNode(!0);return Re(c,()=>a("home.toolbar.remove_empty_directory-tips")),c}}),e(re,{display:"flex",gap:"$2",get children(){return[e(C,{onClick:r,colorScheme:"neutral",get children(){return a("global.cancel")}}),e(C,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const c=await i(o());A(c,()=>{g(),r()})},get children(){return a("global.confirm")}})]}})]}})]}})},eo=t=>e(Fe.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return e(U,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:Be()}},get children(){return[e(Me,{w:{"@initial":"50%","@md":"50%"},class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return t.obj.src_name},get children(){return t.obj.src_name}}),e(Me,{w:{"@initial":"50%","@md":"50%"},class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return t.obj.new_name},get children(){return t.obj.new_name}})]}})}}),to=()=>{const{isOpen:t,onOpen:n,onClose:r}=y(),{isOpen:o,onOpen:l,onClose:i}=y(),[g,s]=L(dn),{pathname:a}=O(),{refresh:c}=T(),[u,d]=$("1"),[m,k]=$(""),[v,E]=$(""),[p,x]=$("string"),[oe,ae]=$([]),F=b(),Ne=()=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:"left",cursor:"pointer"}),Ue=f=>{f==="batchRename"&&l()};h.on("tool",Ue),_(()=>{h.off("tool",Ue)});const Te=()=>{if(!m()||!v()){z.warning(F("global.empty_input"));return}const f=new RegExp(m(),"g");let ge;if(u()==="1")ge=I.objs.filter(P=>P.name.match(m())).map(P=>({src_name:P.name,new_name:P.name.replace(f,v())}));else{let P=v();ge=I.objs.map(_e=>{let We="";const qe=_e.name.lastIndexOf(".");qe!==-1&&(We=_e.name.substring(qe+1));const mt={src_name:_e.name,new_name:m()+P+"."+We};return P=(parseInt(P)+1).toString().padStart(P.length,"0"),mt})}ae(ge),n(),i()};return[e(K,{blockScrollOnMount:!1,get opened(){return o()},onClose:i,initialFocus:"#modal-input1",size:{"@initial":"xs","@md":"md"},get children(){return[e(W,{}),e(q,{get children(){return[e(w,{get when(){return u()==="1"},get children(){return e(j,{get children(){return F("home.toolbar.regular_rename")}})}}),e(w,{get when(){return u()==="2"},get children(){return e(j,{get children(){return F("home.toolbar.sequential_renaming_desc")}})}}),e(G,{get children(){return[e(gn,{defaultValue:"1",style:{margin:"20px 0"},onChange:f=>{d(f),f==="1"?x("string"):f==="2"&&x("number")},get children(){return e(U,{spacing:"$4",get children(){return[e(Xe,{value:"1",get children(){return F("home.toolbar.regex_rename")}}),e(Xe,{value:"2",get children(){return F("home.toolbar.sequential_renaming")}})]}})}}),e(X,{spacing:"$2",get children(){return[e(ye,{id:"modal-input1",type:"string",get value(){return m()},onInput:f=>{k(f.currentTarget.value)},onKeyDown:f=>{f.key==="Enter"&&Te()}}),e(ye,{id:"modal-input2",get type(){return p()},get value(){return v()},onInput:f=>{E(f.currentTarget.value)},onKeyDown:f=>{f.key==="Enter"&&Te()}})]}})]}}),e(re,{display:"flex",gap:"$2",get children(){return[e(C,{onClick:()=>{d("1"),x("string"),i()},colorScheme:"neutral",get children(){return F("global.cancel")}}),e(C,{onClick:()=>Te(),get disabled(){return!m()||!v()},get children(){return F("global.ok")}})]}})]}})]}}),e(K,{size:"xl",get opened(){return t()},onClose:r,get children(){return[e(W,{}),e(q,{get children(){return[e(j,{get children(){return F("home.toolbar.regex_rename_preview")}}),e(G,{get children(){return e(X,{class:"list",w:"$full",spacing:"$1",get children(){return[e(U,{class:"title",w:"$full",p:"$2",get children(){return[e(Me,ie({w:{"@initial":"50%","@md":"50%"}},Ne,{get children(){return F("home.toolbar.regex_rename_preview_old_name")}})),e(Me,ie({w:{"@initial":"50%","@md":"50%"}},Ne,{get children(){return F("home.toolbar.regex_rename_preview_new_name")}}))]}}),e(ce,{get each(){return oe()},children:(f,ge)=>e(eo,{obj:f,get index(){return ge()}})})]}})}}),e(re,{display:"flex",gap:"$2",get children(){return[e(C,{onClick:()=>{ae([]),d("1"),x("string"),r(),i()},colorScheme:"neutral",get children(){return F("global.cancel")}}),e(C,{onClick:()=>{ae([]),r(),l()},colorScheme:"neutral",get children(){return F("global.back")}}),e(C,{get loading(){return g()},onClick:async()=>{const f=await s(a(),oe());A(f,()=>{ae([]),k(""),E(""),d("1"),x("string"),c(),i(),r()})},get disabled(){return oe().length==0},get children(){return F("global.ok")}})]}})]}})]}})]},no=["delete_on_upload_succeed","delete_on_upload_failed","delete_never","delete_always"],ro=()=>{const t=b(),[n,r]=$([]),[o,l]=L(()=>hn.get("/public/offline_download_tools")),[i,g]=$(""),[s,a]=$("delete_on_upload_succeed");Le(async()=>{const p=await l();mn(p,x=>{r(x),g(x[0])})});const{isOpen:c,onOpen:u,onClose:d}=y(),[m,k]=L(pn),{pathname:v}=O(),E=p=>{p==="offline_download"&&u()};return h.on("tool",E),_(()=>{h.off("tool",E)}),e(Ie,{title:"home.toolbar.offline_download",type:"text",get opened(){return c()},onClose:d,get loading(){return o()||m()},get tips(){return t("home.toolbar.offline_download-tips")},get topSlot(){return e(se,{mb:"$2",get children(){return e(Je,{get value(){return i()},onChange:p=>g(p),get options(){return n().map(p=>({value:p,label:p}))}})}})},get bottomSlot(){return e(se,{mb:"$2",get children(){return e(Je,{get value(){return s()},onChange:p=>a(p),get options(){return no.map(p=>({value:p,label:t(`home.toolbar.delete_policy.${p}`)}))}})}})},onSubmit:async p=>{const x=await k(v(),p.split(`
`),i(),s());A(x,()=>{d()})}})},oo=t=>{const n=b(),r=g=>{g===t.name&&l()};h.on("tool",r),_(()=>{h.off("tool",r)});const{isOpen:o,onOpen:l,onClose:i}=y();return e(K,{get blockScrollOnMount(){return t.blockScrollOnMount},get opened(){return o()},onClose:i,closeOnOverlayClick:!1,closeOnEsc:!1,size:{"@initial":"xs","@md":"md","@lg":"lg","@xl":"xl","@2xl":"2xl"},get children(){return[e(W,{}),e(q,{get children(){return[e(fn,{}),e(j,{get children(){return n(t.title)}}),e(G,{get children(){return e(w,{get when(){return o()},get children(){return e(Pe,{get fallback(){return e(Ce,{})},get children(){return t.children}})}})}})]}})]}})};function ao(t){const n=b();return e(Bn,{get children(){return[e(Cn,{get children(){return n(`home.local_settings.${t.key}`)}}),e(be,{get fallback(){return e(ye,{get value(){return te[t.key]},onInput:r=>{Ee(t.key,r.currentTarget.value)}})},get children(){return[e(M,{get when(){return t.type==="select"},get children(){return e(xn,{get id(){return t.key},get defaultValue(){return te[t.key]},onChange:r=>Ee(t.key,r),get children(){return[e(Sn,{get children(){return[e(Mn,{get children(){return n("global.choose")}}),e(On,{}),e(Fn,{})]}}),e(Rn,{get children(){return e(In,{get children(){return e(ce,{get each(){return t.options},children:r=>e(Tn,{value:r,get children(){return[e(En,{get children(){return n(`home.local_settings.${t.key}_options.${r}`)}}),e(zn,{})]}})})}})}})]}})}}),e(M,{get when(){return t.type==="boolean"},get children(){return e(Ln,{get defaultChecked(){return te[t.key]==="true"},onChange:r=>{Ee(t.key,r.currentTarget.checked.toString())}})}})]}})]}})}const lo=()=>{const{isOpen:t,onOpen:n,onClose:r}=y(),o=b(),l=i=>{i==="local_settings"&&n()};return h.on("tool",l),_(()=>{h.off("tool",l)}),e(yn,{get opened(){return t()},placement:"right",onClose:r,get children(){return[e(bn,{}),e(wn,{get children(){return[e(_n,{}),e(kn,{color:"$info9",get children(){return o("home.toolbar.local_settings")}}),e(vn,{get children(){return e(X,{spacing:"$2",get children(){return e(ce,{each:$n,children:i=>e(ao,i)})}})}})]}})]}})},io=pe(()=>fe(()=>import("./Upload.b9d86747.js"),["assets/Upload.b9d86747.js","assets/index.14df8b30.js","assets/index.66bd594c.css","assets/index.64d9aa1b.js"])),so=()=>[e(Nr,{}),e(Ur,{}),e(Gr,{}),e(qr,{}),e(Kr,{}),e(Xr,{}),e(Yr,{}),e(Zr,{}),e(to,{}),e(ro,{}),e(Hr,{}),e(oo,{name:"upload",title:"home.toolbar.upload",get children(){return e(io,{})}}),e(lo,{})],co=()=>e(Pn,{get children(){return[e(Vr,{}),e(jr,{}),e(so,{}),e(An,{})]}}),uo=()=>{Vn(me("site_title"));const t=me("announcement");return t&&z.render(()=>e(Dn,{children:t})),[e(Er,{}),e(co,{}),e(fr,{}),e(wr,{})]},_o=Object.freeze(Object.defineProperty({__proto__:null,default:uo},Symbol.toStringTag,{value:"Module"}));export{wo as I,_o as L,bo as T,N as o,rr as u};
