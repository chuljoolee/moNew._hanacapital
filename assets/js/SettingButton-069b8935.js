import{q as i,s as _,v as a,j as l,J as d,A as p,H as y,K as f,x as r,C as b,E as g,B as h,R as C}from"./vue-c1e56059.js";import{_ as N}from"./index-9e106429.js";const x={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"};function v(t,s){return i(),_("svg",x,s[0]||(s[0]=[a("path",{fill:"#15181F","fill-rule":"evenodd",d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8","clip-rule":"evenodd"},null,-1),a("path",{fill:"#15181F","fill-rule":"evenodd",d:"m14.678 4.981-1.625-1.463c-.6-.54-1.507-.54-2.106 0L9.322 4.98a5.8 5.8 0 0 1-2.106 1.21l-2.014.644A1.585 1.585 0 0 0 4.13 8.627l.473 2.635a5.8 5.8 0 0 1-.032 2.229l-.389 1.853a1.586 1.586 0 0 0 .96 1.8l2.46.982c.528.211 1.022.5 1.466.855l1.95 1.56c.575.461 1.39.461 1.966 0l1.95-1.56a5.8 5.8 0 0 1 1.466-.855l2.46-.983a1.586 1.586 0 0 0 .96-1.799l-.389-1.853a5.8 5.8 0 0 1-.032-2.23l.474-2.634a1.585 1.585 0 0 0-1.074-1.792l-2.013-.644a5.8 5.8 0 0 1-2.107-1.21m-.222-3.037a3.667 3.667 0 0 0-4.912 0L7.918 3.408a3.7 3.7 0 0 1-1.34.77l-2.013.644a3.7 3.7 0 0 0-2.506 4.18l.473 2.635c.085.47.078.951-.02 1.419l-.389 1.853a3.7 3.7 0 0 0 2.241 4.198l2.46.983c.335.134.65.317.932.543l1.95 1.561a3.67 3.67 0 0 0 4.587 0l1.95-1.56c.283-.227.598-.41.933-.544l2.46-.983a3.7 3.7 0 0 0 2.24-4.198l-.388-1.853a3.7 3.7 0 0 1-.02-1.419l.473-2.635a3.7 3.7 0 0 0-2.505-4.18l-2.014-.644a3.7 3.7 0 0 1-1.34-.77z","clip-rule":"evenodd"},null,-1)]))}const S={render:v},w="_button_106uy_1",B="_button__text_106uy_52",T="_button__icon_106uy_19",k={button:w,button__text:B,button__icon:T},u=()=>({wrap:"",text:"",icon:""}),L={inheritAttrs:!1,components:{IconSetting:S},props:{classNames:{Type:Object,default(){return u()}},tagName:{Type:String,default:"button"},type:{Type:String,default:"button"},theme:{Type:String,default:null},text:{Type:String,default:"설정"}},setup(t){const s=l(()=>{const{classNames:n}=t;return Object.assign(u(),n)}),o=l(()=>{const{tagName:n}=t;return n==="RouterLink"?C:n}),e=l(()=>{const{tagName:n,type:c}=t;return n==="button"?c:null});return{customClassNames:s,setComponent:o,setType:e}}};function j(t,s,o,e,n,c){const m=d("IconSetting");return i(),p(h(e.setComponent),g(t.$attrs,{type:e.setType,class:[t.$style.button,{[t.$style[`button--theme-${o.theme}`]]:o.theme},e.customClassNames.wrap]}),{default:y(()=>[a("span",{class:r([t.$style.button__icon,e.customClassNames.icon])},[f(m)],2),a("span",{class:r([t.$style.button__text,e.customClassNames.text])},b(o.text),3)]),_:1},16,["type","class"])}const A={$style:k},R=N(L,[["render",j],["__cssModules",A]]);export{R as S};
