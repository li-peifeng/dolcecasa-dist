import{e,an as O,av as _,af as T,a0 as i,a3 as l,bD as I,aW as y,aE as h,bT as P,ca as x,a as b,j as d,cb as k,c2 as v,al as L,ad as $,B as m,ah as A,E as D,ai as S,c3 as E,S as g,ax as j,a8 as f,c7 as V,K as R,cc as C,U as o,V as a,c8 as M,cd as z,k as F,b1 as B,X as W,Y as U,aj as X}from"./index.28ddc39c.js";import{g as H,O as c}from"./icon.5895e13d.js";import{p as G}from"./index.e2b9f287.js";import{T as K}from"./Layout.0ff79616.js";const Y=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(O,{boxSize:"$20",get fallback(){return e(_,{get color(){return T()},boxSize:"$20",get as(){return H(i.obj)}})},get src(){return i.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(I,{size:"lg",css:{wordBreak:"break-all"},get children(){return i.obj.name}}),e(y,{color:"$neutral10",size:"sm",get children(){return[h(()=>P(i.obj.size))," \xB7 ",h(()=>x(i.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),w=()=>{const r=b(),n=d(()=>k(i.obj.name)),{currentObjLink:s}=v();return e(g,{get when(){return n().length},get children(){return e(L,{get children(){return[e($,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:G})},get children(){return r("home.preview.open_with")}}),e(A,{get children(){return e(D,{get each(){return n()},children:t=>e(S,{as:"a",target:"_blank",get href(){return E(t.value,{raw_url:i.raw_url,name:i.obj.name,d_url:s(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=b(),{copyCurrentRawLink:s}=j();return e(Y,{get children(){return[e(f,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>s(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return i.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(w,{})}})]}})},q=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),J=r=>{const{currentObjLink:n}=v(),s=d(()=>E(r.scheme,{raw_url:i.raw_url,name:i.obj.name,d_url:n(!0),ts:!0}));return e(C,{w:"$full",h:"70vh",get children(){return[e(V.iframe,{w:"$full",h:"$full",get src(){return s()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:K,onClick:()=>{window.open(s(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return R()},p:"$1",boxSize:"$7"})]}})},N=r=>()=>e(J,{scheme:r}),Q=[{name:"HTML render",exts:["html"],component:o(()=>a(()=>import("./html.be9ed8fa.js"),["assets/html.be9ed8fa.js","assets/index.28ddc39c.js","assets/index.613562ce.css"]))},{name:"Aliyun Video Previewer",type:c.VIDEO,provider:/^Aliyundrive(Open)?$/,component:o(()=>a(()=>import("./aliyun_video.26a581d2.js"),["assets/aliyun_video.26a581d2.js","assets/index.28ddc39c.js","assets/index.613562ce.css","assets/icon.5895e13d.js","assets/index.a43344fa.js","assets/index.e2b9f287.js","assets/Layout.0ff79616.js","assets/index.a32bfd31.js","assets/FolderTree.c248bd07.js","assets/index.b648dd20.js","assets/video_box.aef3fc64.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.281e5400.js"]))},{name:"Markdown",type:c.TEXT,component:o(()=>a(()=>import("./markdown.eaf19377.js"),["assets/markdown.eaf19377.js","assets/index.28ddc39c.js","assets/index.613562ce.css"]))},{name:"Markdown with word wrap",type:c.TEXT,component:o(()=>a(()=>import("./markdown_with_word_wrap.e30941ad.js"),["assets/markdown_with_word_wrap.e30941ad.js","assets/index.28ddc39c.js","assets/index.613562ce.css"]))},{name:"Url Open",exts:["url"],component:o(()=>a(()=>import("./url.906af943.js"),["assets/url.906af943.js","assets/index.28ddc39c.js","assets/index.613562ce.css","assets/icon.5895e13d.js","assets/index.a43344fa.js","assets/index.e2b9f287.js","assets/Layout.0ff79616.js","assets/index.a32bfd31.js","assets/FolderTree.c248bd07.js","assets/index.b648dd20.js"]))},{name:"Text Editor",type:c.TEXT,exts:["url"],component:o(()=>a(()=>import("./text-editor.30b4d1a4.js"),["assets/text-editor.30b4d1a4.js","assets/index.28ddc39c.js","assets/index.613562ce.css","assets/index.7e376419.js"]))},{name:"Image",type:c.IMAGE,component:o(()=>a(()=>import("./image.3078e1e9.js"),["assets/image.3078e1e9.js","assets/index.28ddc39c.js","assets/index.613562ce.css","assets/ImageWithError.67957d30.js"]))},{name:"Video",type:c.VIDEO,component:o(()=>a(()=>import("./video.1216d928.js"),["assets/video.1216d928.js","assets/index.28ddc39c.js","assets/index.613562ce.css","assets/icon.5895e13d.js","assets/index.a43344fa.js","assets/index.e2b9f287.js","assets/Layout.0ff79616.js","assets/index.a32bfd31.js","assets/FolderTree.c248bd07.js","assets/index.b648dd20.js","assets/video_box.aef3fc64.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.281e5400.js"]))},{name:"Audio",type:c.AUDIO,component:o(()=>a(()=>import("./audio.44c0dd27.js"),["assets/audio.44c0dd27.js","assets/audio.e5b5af14.css","assets/index.28ddc39c.js","assets/index.613562ce.css","assets/icon.5895e13d.js","assets/index.a43344fa.js","assets/index.e2b9f287.js","assets/Layout.0ff79616.js","assets/index.a32bfd31.js","assets/FolderTree.c248bd07.js","assets/index.b648dd20.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:o(()=>a(()=>import("./ipa.9e521986.js"),["assets/ipa.9e521986.js","assets/index.28ddc39c.js","assets/index.613562ce.css","assets/icon.5895e13d.js","assets/index.a43344fa.js","assets/index.e2b9f287.js","assets/Layout.0ff79616.js","assets/index.a32bfd31.js","assets/FolderTree.c248bd07.js","assets/index.b648dd20.js"]))},{name:"Plist",exts:["plist"],component:o(()=>a(()=>import("./plist.fa4b51f7.js"),["assets/plist.fa4b51f7.js","assets/index.28ddc39c.js","assets/index.613562ce.css","assets/icon.5895e13d.js","assets/index.a43344fa.js","assets/index.e2b9f287.js","assets/Layout.0ff79616.js","assets/index.a32bfd31.js","assets/FolderTree.c248bd07.js","assets/index.b648dd20.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:o(()=>a(()=>import("./aliyun_office.91186bfc.js"),["assets/aliyun_office.91186bfc.js","assets/index.28ddc39c.js","assets/index.613562ce.css"]))},{name:"Asciinema",exts:["cast"],component:o(()=>a(()=>import("./asciinema.399f6705.js"),["assets/asciinema.399f6705.js","assets/asciinema.53412307.css","assets/index.28ddc39c.js","assets/index.613562ce.css"]))}],Z=r=>{const n=[];return Q.forEach(t=>{var u;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((u=t.exts)==null?void 0:u.includes(M(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),z(r.name).forEach(t=>{n.push({name:t.key,component:N(t.value)})}),n.push({name:"Download",component:o(()=>a(()=>Promise.resolve().then(()=>q),void 0))}),n},ee=()=>{const r=d(()=>Z({...i.obj,provider:i.provider})),[n,s]=F(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(f,{w:"$full",spacing:"$2",get children(){return[e(B,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{s(r().find(u=>u.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(w,{})]}}),e(W,{get fallback(){return e(U,{})},get children(){return e(X,{get component(){return n().component}})}})]}})}})},ae=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{Y as F,ae as a};
