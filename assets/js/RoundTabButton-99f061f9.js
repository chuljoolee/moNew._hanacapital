import{b as k,j as u,F as p,w as U,p as b,u as B,q as l,s as M,A as i,H as _,y as v,x as r,B as d,a as f,E as g,v as j,R as x}from"./vue-c1e56059.js";import{_ as N,d as T,e as R}from"./index-9e106429.js";const h={"round-tab":"_round-tab_1rkfe_1","round-tab__list":"_round-tab__list_1rkfe_4","round-tab__item":"_round-tab__item_1rkfe_15","round-tab__button":"_round-tab__button_1rkfe_24","round-tab__text":"_round-tab__text_1rkfe_58","round-tab__item--active":"_round-tab__item--active_1rkfe_65"},y=()=>({wrap:"",list:""}),w={components:{UiTabList:T},props:{classNames:{Type:Object,default(){return y()}},useUiTab:{Type:Boolean,default:!1}},setup(e){const n=k({useUiTab:{value:null}}),s=u(()=>{const{classNames:a}=e;return Object.assign(y(),a)}),t=u(()=>{const{useUiTab:a}=e;return a?T:"ul"});return p(()=>{n.useUiTab.value=e.useUiTab}),U(()=>e.useUiTab,a=>{n.useUiTab.value=a}),b("roundTabStyleModule",B()),b("roundTab",{useUiTab:n.useUiTab}),{customClassNames:s,setComponent:t}}};function S(e,n,s,t,a,c){return l(),M("div",{class:r([e.$style["round-tab"],t.customClassNames.wrap])},[(l(),i(d(t.setComponent),{class:r([e.$style["round-tab__list"],t.customClassNames.list])},{default:_(()=>[v(e.$slots,"default")]),_:3},8,["class"]))],2)}const O={$style:h},$=N(w,[["render",S],["__cssModules",O]]),C=()=>({item:"",button:"",text:""}),L={inheritAttrs:!1,props:{classNames:{Type:Object,default(){return C()}},link:{Type:String,default:null},tagName:{Type:String,default:"div"},active:{Type:Boolean,default:!1}},setup(e){const n=f("roundTabStyleModule"),s=f("roundTab",{}),t=u(()=>{const{classNames:o}=e;return Object.assign(C(),o)}),a=u(()=>{const{useUiTab:o}=s;return o.value?R:"li"}),c=u(()=>{const{useUiTab:o}=s,{tagName:m}=e;return o.value?"div":m==="RouterLink"?x:m});return{styleModule:n,customClassNames:t,setItemComponent:a,setButtonComponent:c}}};function A(e,n,s,t,a,c){return l(),i(d(t.setItemComponent),{class:r([t.styleModule["round-tab__item"],{[t.styleModule["round-tab__item--active"]]:s.active},t.customClassNames.item]),link:s.link},{default:_(()=>[(l(),i(d(t.setButtonComponent),g(e.$attrs,{class:[t.styleModule["round-tab__button"],t.customClassNames.button],title:s.active?"선택 됨":null}),{default:_(()=>[j("span",{class:r([t.styleModule["round-tab__text"],t.customClassNames.text])},[v(e.$slots,"default")],2)]),_:3},16,["class","title"]))]),_:3},8,["class","link"])}const q=N(L,[["render",A]]);export{$ as R,q as a};
