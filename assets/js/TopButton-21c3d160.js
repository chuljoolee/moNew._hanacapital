import{q as a,s as c,I as f,j as u,k as d,T as _,J as m,v as h,K as y,x as b,E as g}from"./vue-c1e56059.js";import{_ as B}from"./index-9e106429.js";const w={xmlns:"http://www.w3.org/2000/svg",width:"52",height:"52",fill:"none",viewBox:"0 0 52 52"};function x(s,o){return a(),c("svg",w,o[0]||(o[0]=[f('<g filter="url(#filter0_d_7764_284698)"><circle cx="26" cy="24" r="18" fill="#fff" fill-opacity=".6" shape-rendering="crispEdges"></circle></g><path fill="#15181F" d="M19.578 22.922a.833.833 0 0 0 1.179 0L26 17.678l5.244 5.244a.833.833 0 1 0 1.178-1.178L26.59 15.91a.833.833 0 0 0-1.179 0l-5.833 5.833a.833.833 0 0 0 0 1.178"></path><path fill="#15181F" d="M25.166 17.333a.833.833 0 0 1 1.667 0V31.5a.833.833 0 0 1-1.667 0z"></path><defs><filter id="filter0_d_7764_284698" width="52" height="52" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0.560784 0 0 0 0 0.560784 0 0 0 0 0.560784 0 0 0 0.36 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_7764_284698"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_7764_284698" result="shape"></feBlend></filter></defs>',4)]))}const T={render:x},C="_button_1pwsg_1",v="_button__icon_1pwsg_43",M="_button__text_1pwsg_49",N={button:C,button__icon:v,button__text:M},l=()=>({wrap:"",text:"",icon:""}),S={inheritAttrs:!1,components:{BtnTop:T},props:{type:{Type:String,default:"button"},classNames:{Type:Object,default(){return l()}}},setup(s){const o=u(()=>{const{classNames:e}=s;return Object.assign(l(),e)}),n=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},t=()=>{const e=document.querySelector(".button_top"),r=document.documentElement.scrollTop;e&&(r>20?(e.style.opacity="1",e.style.transition="0.3s"):(e.style.opacity="0",e.style.transition="0.3s"))};return d(()=>{document.addEventListener("scroll",t,!0)}),_(()=>{document.removeEventListener("scroll",t,!1)}),{customClassNames:o,onScroll:t,toTop:n}}},k=["type"];function E(s,o,n,t,e,r){const i=m("BtnTop");return a(),c("button",g(s.$attrs,{type:n.type,class:[[s.$style.button,t.customClassNames.wrap],"button_top"],onClick:o[0]||(o[0]=(...p)=>t.toTop&&t.toTop(...p))}),[h("span",{class:b([s.$style.button__icon,t.customClassNames.icon])},[y(i)],2)],16,k)}const F={$style:N},G=B(S,[["render",E],["__cssModules",F]]);export{G as T};
