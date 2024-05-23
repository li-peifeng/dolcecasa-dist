import{e as T,a7 as q,dl as R,a3 as c,aJ as D,dm as C,cr as m,aL as E,cl as $,dn as U,aX as J,ba as X,_ as G,o as K,bb as z,n as A,j as Q,r as M,c as p,a9 as Y,S as Z,aA as ee,ak as te,g as j,dp as L}from"./index.e49c1bef.js";import{O as re,A as se}from"./icon.62d65b94.js";import{A as le,H as oe,a as ne,b as ae,c as ie,V as ue}from"./video_box.b079e9d7.js";import{n as ce}from"./index.45bfc67c.js";import"./useTitle.88c0ce30.js";import"./Layout.a731d9a0.js";import"./index.b5cf27c3.js";import"./FolderTree.68204e36.js";import"./index.78999331.js";import"./_commonjs-dynamic-modules.30ae7933.js";const pe=te("<span></span>"),_e=()=>{var _,P,S;const{pathname:w,searchParams:F}=T(),{proxyLink:h}=q(),y=R();let u=c.objs.filter(e=>e.type===re.VIDEO);u.length===0&&(u=[c.obj]);const g=()=>{const e=u.findIndex(l=>l.name===c.obj.name);e<u.length-1&&y(j(L(location.pathname),u[e+1].name)+"?auto_fullscreen="+s.fullscreen)},I=()=>{const e=u.findIndex(l=>l.name===c.obj.name);e>0&&y(j(L(location.pathname),u[e-1].name)+"?auto_fullscreen="+s.fullscreen)};let s,i={id:w(),container:"#video-player",title:c.obj.name,volume:.5,autoplay:D("video_autoplay"),autoSize:!1,autoMini:!0,controls:[{name:"previous-button",index:10,position:"left",html:'<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" height="22" width="22" class="icon icon-tabler icon-tabler-player-track-prev-filled" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" stroke-width="0" fill="currentColor"></path><path d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" stroke-width="0" fill="currentColor"></path></svg>',tooltip:"Previous",click:function(){I()}},{name:"next-button",index:11,position:"left",html:'<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" height="22" width="22" class="icon icon-tabler icon-tabler-player-track-next-filled" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" stroke-width="0" fill="currentColor"></path><path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" stroke-width="0" fill="currentColor"></path></svg>',tooltip:"Next",click:function(){g()}}],loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[le],whitelist:[],settings:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,l){const n=new oe;n.loadSource(l),n.attachMedia(e),e.src||(e.src=l)}},lang:["en","zh-cn","zh-tw"].includes(C().toLowerCase())?C().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const f=c.related.filter(e=>{for(const l of[".srt",".ass",".vtt"])if(e.name.endsWith(l))return!0;return!1}),b=c.related.find(e=>{for(const l of[".xml"])if(e.name.endsWith(l))return!0;return!1});if(f.length!=0){let a=function(t){switch(e?"ass":"webvtt"){case"ass":s.subtitle.show=!1,s.emit("artplayer-plugin-ass:visible",t);break;case"webvtt":default:s.subtitle.show=t,s.emit("artplayer-plugin-ass:visible",!1);break}},e=!1;const l=f[0];m(l.name).toLowerCase()==="ass"?(e=!0,(_=i.plugins)==null||_.push(ne({subUrl:h(l,!0)}))):i.subtitle={url:h(l,!0),type:m(l.name)};const n=[{id:"setting_subtitle_display",html:"Display",tooltip:"Show",switch:!0,onSwitch:function(t){var r;t.tooltip=t.switch?"Hide":"Show",a(!t.switch);const o=(r=i.settings)==null?void 0:r.find(d=>d.id==="setting_subtitle");return o&&(o.tooltip=t.tooltip),!t.switch}}];f.forEach((t,o)=>{n.push({default:o===0,html:(()=>{const r=pe.cloneNode(!0);return r.style.setProperty("max-width","200px"),r.style.setProperty("overflow","hidden"),r.style.setProperty("text-overflow","ellipsis"),r.style.setProperty("word-break","break-all"),r.style.setProperty("white-space","normal"),r.style.setProperty("display","-webkit-box"),r.style.setProperty("-webkit-line-clamp","2"),r.style.setProperty("-webkit-box-orient","vertical"),r.style.setProperty("font-size","12px"),E(r,()=>t.name),$(()=>U(r,"title",t.name)),r})(),name:t.name,url:h(t,!0)})}),(P=i.settings)==null||P.push({id:"setting_subtitle",html:"Subtitle",tooltip:"Show",icon:se({size:24}),selector:n,onSelect:function(t){var r,d;m(t.name).toLowerCase()==="ass"?(e=!0,this.emit("artplayer-plugin-ass:switch",t.url),a(!0)):(e=!1,this.subtitle.switch(t.url,{name:t.name}),this.once("subtitleLoad",a.bind(this,!0)));const o=n.find(O=>O.id==="setting_subtitle_display");return o&&!o.switch&&((d=(r=o.$html)==null?void 0:r.click)==null||d.call(r)),o==null?void 0:o.tooltip}})}b&&((S=i.plugins)==null||S.push(ae({danmuku:h(b,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})));const[he,v]=J(()=>X.post("/fs/other",{path:w(),password:G(),method:"video_preview"}));K(async()=>{const e=await v();H(e.code!==200),z(e,l=>{const n=l.video_preview_play_info.live_transcoding_task_list.filter(t=>t.url);if(n.length===0){A.error("No transcoding video found");return}i.url=n[n.length-1].url,i.quality=n.map((t,o)=>({html:t.template_id,url:t.url,default:o===n.length-1})),s=new ie(i);let a;switch(F.auto_fullscreen){case"true":a=!0;case"false":a=!1;default:a=!1}s.on("ready",()=>{s.fullscreen=a}),s.on("video:ended",()=>{!W()||g()}),k=window.setInterval(N,1e3*60*14)})});let k,x;async function N(){const e=await v();z(e,async l=>{const n=l.video_preview_play_info.live_transcoding_task_list.filter(o=>o.url);if(n.length===0){A.error("No transcoding video found");return}const a=n.map((o,r)=>({html:o.template_id,url:o.url,default:r===n.length-1}));i.quality=a,s.quality=a,x=s.currentTime;let t=s.playing;await s.switchUrl(a[a.length-1].url),t||s.pause(),setTimeout(()=>{s.seek=x},1e3)})}Q(()=>{s==null||s.destroy(),window.clearInterval(k)});const[W,V]=M(),[B,H]=M(!1);return p(ue,{onAutoNextChange:V,get children(){return[p(Y,{w:"$full",h:"60vh",id:"video-player"}),p(Z,{get when(){return B()},get children(){return p(ee,{w:"100%",h:"60vh",bgColor:"black",get children(){return p(ce,{size:"4rem"})}})}})]}})};export{_e as default};
