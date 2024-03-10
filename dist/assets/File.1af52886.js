import{e,an as O,av as _,af as T,a0 as i,a3 as l,bD as I,aW as y,aE as h,bT as P,ca as x,a as b,j as d,cb as k,c2 as v,al as L,ad as $,B as m,ah as A,E as D,ai as S,c3 as E,S as g,ax as j,a8 as f,c7 as V,K as R,cc as C,U as o,V as a,c8 as M,cd as z,k as F,b1 as B,X as W,Y as U,aj as X}from"./index.df0febc8.js";import{g as H,O as c}from"./icon.333b6697.js";import{p as G}from"./index.2740ef81.js";import{T as K}from"./Layout.2f45d311.js";const Y=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(O,{boxSize:"$20",get fallback(){return e(_,{get color(){return T()},boxSize:"$20",get as(){return H(i.obj)}})},get src(){return i.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(I,{size:"lg",css:{wordBreak:"break-all"},get children(){return i.obj.name}}),e(y,{color:"$neutral10",size:"sm",get children(){return[h(()=>P(i.obj.size))," \xB7 ",h(()=>x(i.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),w=()=>{const r=b(),n=d(()=>k(i.obj.name)),{currentObjLink:s}=v();return e(g,{get when(){return n().length},get children(){return e(L,{get children(){return[e($,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:G})},get children(){return r("home.preview.open_with")}}),e(A,{get children(){return e(D,{get each(){return n()},children:t=>e(S,{as:"a",target:"_blank",get href(){return E(t.value,{raw_url:i.raw_url,name:i.obj.name,d_url:s(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=b(),{copyCurrentRawLink:s}=j();return e(Y,{get children(){return[e(f,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>s(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return i.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(w,{})}})]}})},q=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),J=r=>{const{currentObjLink:n}=v(),s=d(()=>E(r.scheme,{raw_url:i.raw_url,name:i.obj.name,d_url:n(!0),ts:!0}));return e(C,{w:"$full",h:"70vh",get children(){return[e(V.iframe,{w:"$full",h:"$full",get src(){return s()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:K,onClick:()=>{window.open(s(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return R()},p:"$1",boxSize:"$7"})]}})},N=r=>()=>e(J,{scheme:r}),Q=[{name:"HTML render",exts:["html"],component:o(()=>a(()=>import("./html.257fd8e4.js"),["assets/html.257fd8e4.js","assets/index.df0febc8.js","assets/index.3f528441.css"]))},{name:"Aliyun Video Previewer",type:c.VIDEO,provider:/^Aliyundrive(Open)?$/,component:o(()=>a(()=>import("./aliyun_video.8b59091e.js"),["assets/aliyun_video.8b59091e.js","assets/index.df0febc8.js","assets/index.3f528441.css","assets/icon.333b6697.js","assets/index.10ee6f39.js","assets/index.2740ef81.js","assets/Layout.2f45d311.js","assets/index.438e32f1.js","assets/FolderTree.66403bbc.js","assets/index.9cfbd5c1.js","assets/video_box.bd948cd0.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.3edb2052.js"]))},{name:"Markdown",type:c.TEXT,component:o(()=>a(()=>import("./markdown.55fd32e8.js"),["assets/markdown.55fd32e8.js","assets/index.df0febc8.js","assets/index.3f528441.css"]))},{name:"Markdown with word wrap",type:c.TEXT,component:o(()=>a(()=>import("./markdown_with_word_wrap.e0d14fa8.js"),["assets/markdown_with_word_wrap.e0d14fa8.js","assets/index.df0febc8.js","assets/index.3f528441.css"]))},{name:"Url Open",exts:["url"],component:o(()=>a(()=>import("./url.c02e3b20.js"),["assets/url.c02e3b20.js","assets/index.df0febc8.js","assets/index.3f528441.css","assets/icon.333b6697.js","assets/index.10ee6f39.js","assets/index.2740ef81.js","assets/Layout.2f45d311.js","assets/index.438e32f1.js","assets/FolderTree.66403bbc.js","assets/index.9cfbd5c1.js"]))},{name:"Text Editor",type:c.TEXT,exts:["url"],component:o(()=>a(()=>import("./text-editor.fd81a88c.js"),["assets/text-editor.fd81a88c.js","assets/index.df0febc8.js","assets/index.3f528441.css","assets/index.4b005130.js"]))},{name:"Image",type:c.IMAGE,component:o(()=>a(()=>import("./image.d510f7b1.js"),["assets/image.d510f7b1.js","assets/index.df0febc8.js","assets/index.3f528441.css","assets/ImageWithError.456e4095.js"]))},{name:"Video",type:c.VIDEO,component:o(()=>a(()=>import("./video.314e5bbd.js"),["assets/video.314e5bbd.js","assets/index.df0febc8.js","assets/index.3f528441.css","assets/icon.333b6697.js","assets/index.10ee6f39.js","assets/index.2740ef81.js","assets/Layout.2f45d311.js","assets/index.438e32f1.js","assets/FolderTree.66403bbc.js","assets/index.9cfbd5c1.js","assets/video_box.bd948cd0.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.3edb2052.js"]))},{name:"Audio",type:c.AUDIO,component:o(()=>a(()=>import("./audio.7e410e1b.js"),["assets/audio.7e410e1b.js","assets/audio.448b9a9c.css","assets/index.df0febc8.js","assets/index.3f528441.css","assets/icon.333b6697.js","assets/index.10ee6f39.js","assets/index.2740ef81.js","assets/Layout.2f45d311.js","assets/index.438e32f1.js","assets/FolderTree.66403bbc.js","assets/index.9cfbd5c1.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:o(()=>a(()=>import("./ipa.74cad558.js"),["assets/ipa.74cad558.js","assets/index.df0febc8.js","assets/index.3f528441.css","assets/icon.333b6697.js","assets/index.10ee6f39.js","assets/index.2740ef81.js","assets/Layout.2f45d311.js","assets/index.438e32f1.js","assets/FolderTree.66403bbc.js","assets/index.9cfbd5c1.js"]))},{name:"Plist",exts:["plist"],component:o(()=>a(()=>import("./plist.69b71737.js"),["assets/plist.69b71737.js","assets/index.df0febc8.js","assets/index.3f528441.css","assets/icon.333b6697.js","assets/index.10ee6f39.js","assets/index.2740ef81.js","assets/Layout.2f45d311.js","assets/index.438e32f1.js","assets/FolderTree.66403bbc.js","assets/index.9cfbd5c1.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:o(()=>a(()=>import("./aliyun_office.bd8c9170.js"),["assets/aliyun_office.bd8c9170.js","assets/index.df0febc8.js","assets/index.3f528441.css"]))},{name:"Asciinema",exts:["cast"],component:o(()=>a(()=>import("./asciinema.4276fc38.js"),["assets/asciinema.4276fc38.js","assets/asciinema.53412307.css","assets/index.df0febc8.js","assets/index.3f528441.css"]))}],Z=r=>{const n=[];return Q.forEach(t=>{var u;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((u=t.exts)==null?void 0:u.includes(M(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),z(r.name).forEach(t=>{n.push({name:t.key,component:N(t.value)})}),n.push({name:"Download",component:o(()=>a(()=>Promise.resolve().then(()=>q),void 0))}),n},ee=()=>{const r=d(()=>Z({...i.obj,provider:i.provider})),[n,s]=F(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(f,{w:"$full",spacing:"$2",get children(){return[e(B,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{s(r().find(u=>u.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(w,{})]}}),e(W,{get fallback(){return e(U,{})},get children(){return e(X,{get component(){return n().component}})}})]}})}})},ae=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{Y as F,ae as a};
