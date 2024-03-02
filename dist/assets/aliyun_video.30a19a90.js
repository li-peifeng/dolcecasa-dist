import{e as O,a7 as T,dn as M,a3 as u,aI as R,dp as P,ct as y,aK as B,cl as D,dq as E,aW as H,b9 as $,_ as U,o as J,ba as S,n as A,j as K,r as C,c as p,a9 as G,S as Q,ay as X,az as Y,g as Z,dr as ee}from"./index.0815bc43.js";import{O as te,A as se}from"./icon.e087e630.js";import{A as ae,a as re,V as ne}from"./video_box.839207c2.js";import{H as le,a as ie,b as oe}from"./hls.29d574aa.js";import{m as ue}from"./index.6b08b23d.js";import"./useTitle.42abcf6d.js";import"./Layout.1af02456.js";import"./index.34888a6c.js";import"./FolderTree.637a3ad9.js";import"./index.0c1fad14.js";import"./_commonjs-dynamic-modules.30ae7933.js";const ce=Y("<span></span>"),xe=()=>{var _,k,x;const{pathname:m,searchParams:L}=O(),{proxyLink:d}=T(),W=M();let c=u.objs.filter(t=>t.type===te.VIDEO);c.length===0&&(c=[u.obj]);const z=()=>{const t=c.findIndex(n=>n.name===u.obj.name);t<c.length-1&&W(Z(ee(location.pathname),c[t+1].name)+"?auto_fullscreen="+r.fullscreen)};let r,o={id:m(),container:"#video-player",title:u.obj.name,volume:.5,autoplay:R("video_autoplay"),autoSize:!1,autoMini:!0,controls:[],loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!1,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[ae],whitelist:[],settings:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(t,n){const l=new le;l.loadSource(n),l.attachMedia(t),t.src||(t.src=n)}},lang:["en","zh-cn","zh-tw"].includes(P().toLowerCase())?P().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const h=u.related.filter(t=>{for(const n of[".srt",".ass",".vtt"])if(t.name.endsWith(n))return!0;return!1}),w=u.related.find(t=>{for(const n of[".xml"])if(t.name.endsWith(n))return!0;return!1});if(h.length!=0){let i=function(e){switch(t?"ass":"webvtt"){case"ass":r.subtitle.show=!1,r.emit("artplayer-plugin-ass:visible",e);break;case"webvtt":default:r.subtitle.show=e,r.emit("artplayer-plugin-ass:visible",!1);break}},t=!1;const n=h[0];y(n.name).toLowerCase()==="ass"?(t=!0,(_=o.plugins)==null||_.push(ie({subUrl:d(n,!0)}))):o.subtitle={url:d(n,!0),type:y(n.name)};const l=[{id:"setting_subtitle_display",html:"Display",tooltip:"Show",switch:!0,onSwitch:function(e){var s;e.tooltip=e.switch?"Hide":"Show",i(!e.switch);const a=(s=o.settings)==null?void 0:s.find(f=>f.id==="setting_subtitle");return a&&(a.tooltip=e.tooltip),!e.switch}}];h.forEach((e,a)=>{l.push({default:a===0,html:(()=>{const s=ce.cloneNode(!0);return s.style.setProperty("max-width","200px"),s.style.setProperty("overflow","hidden"),s.style.setProperty("text-overflow","ellipsis"),s.style.setProperty("word-break","break-all"),s.style.setProperty("white-space","normal"),s.style.setProperty("display","-webkit-box"),s.style.setProperty("-webkit-line-clamp","2"),s.style.setProperty("-webkit-box-orient","vertical"),s.style.setProperty("font-size","12px"),B(s,()=>e.name),D(()=>E(s,"title",e.name)),s})(),name:e.name,url:d(e,!0)})}),(k=o.settings)==null||k.push({id:"setting_subtitle",html:"Subtitle",tooltip:"Show",icon:se({size:24}),selector:l,onSelect:function(e){var s,f;y(e.name).toLowerCase()==="ass"?(t=!0,this.emit("artplayer-plugin-ass:switch",e.url),i(!0)):(t=!1,this.subtitle.switch(e.url,{name:e.name}),this.once("subtitleLoad",i.bind(this,!0)));const a=l.find(q=>q.id==="setting_subtitle_display");return a&&!a.switch&&((f=(s=a.$html)==null?void 0:s.click)==null||f.call(s)),a==null?void 0:a.tooltip}})}w&&((x=o.plugins)==null||x.push(oe({danmuku:d(w,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})));const[pe,g]=H(()=>$.post("/fs/other",{path:m(),password:U(),method:"video_preview"}));J(async()=>{const t=await g();V(t.code!==200),S(t,n=>{const l=n.video_preview_play_info.live_transcoding_task_list.filter(e=>e.url);if(l.length===0){A.error("No transcoding video found");return}o.url=l[l.length-1].url,o.quality=l.map((e,a)=>({html:e.template_id,url:e.url,default:a===l.length-1})),r=new re(o);let i;switch(L.auto_fullscreen){case"true":i=!0;case"false":i=!1;default:i=!1}r.on("ready",()=>{r.fullscreen=i}),r.on("video:ended",()=>{!I()||z()}),b=window.setInterval(F,1e3*60*14)})});let b,v;async function F(){const t=await g();S(t,async n=>{const l=n.video_preview_play_info.live_transcoding_task_list.filter(a=>a.url);if(l.length===0){A.error("No transcoding video found");return}const i=l.map((a,s)=>({html:a.template_id,url:a.url,default:s===l.length-1}));o.quality=i,r.quality=i,v=r.currentTime;let e=r.playing;await r.switchUrl(i[i.length-1].url),e||r.pause(),setTimeout(()=>{r.seek=v},1e3)})}K(()=>{r==null||r.destroy(),window.clearInterval(b)});const[I,j]=C(),[N,V]=C(!1);return p(ne,{onAutoNextChange:j,get children(){return[p(G,{w:"$full",h:"60vh",id:"video-player"}),p(Q,{get when(){return N()},get children(){return p(X,{w:"100%",h:"60vh",bgColor:"black",get children(){return p(ue,{size:"4rem"})}})}})]}})};export{xe as default};
