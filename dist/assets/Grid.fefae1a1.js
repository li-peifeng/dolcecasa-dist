import{c as t,l as a,J as m,a2 as p,cm as s}from"./index.9949964a.js";import{G as u}from"./GridItem.c5fd3dec.js";import"./Folder.52756cbf.js";import{a as c}from"./helper.558b2ade.js";import"./index.3206d5d4.js";import"./index.f215c001.js";import"./ImageWithError.d1b85361.js";import"./icon.eac04f6a.js";import"./index.35b7640f.js";import"./Layout.d1d87394.js";import"./FolderTree.03a0e9da.js";import"./index.b7c6df52.js";import"./Paginator.60248559.js";import"./index.5ca5eaa4.js";const L=()=>{const{isMouseSupported:r,registerSelectContainer:e,captureContentMenu:o}=c();return e(),t(s,{"oncapture:contextmenu":o,get classList(){return{"viselect-container":r()}},w:"$full",gap:"$1",get templateColumns(){return`repeat(auto-fill, minmax(${parseInt(a.grid_item_size)+20}px,1fr))`},get children(){return t(m,{get each(){return p.objs},children:(i,n)=>t(u,{obj:i,get index(){return n()}})})}})};export{L as default};
