import{_}from"./index-9e106429.js";import{b as d,j as a,w as f,q as n,s as i,x as l,D as p}from"./vue-c1e56059.js";const g={"product-icon":"_product-icon_urho3_1","product-icon__img":"_product-icon__img_urho3_11"},E="/moNew._hanacapital/",m=()=>({wrap:"",img:""}),y={props:{classNames:{Type:Object,default(){return m()}},size:{Type:String,default:null},src:{Type:String,default:null}},setup(r){const o=d({isError:!1}),e=a(()=>{const{classNames:t}=r;return Object.assign(m(),t)}),s=a(()=>{const{src:t=""}=r;return t.match(/^\//)?E+t.replace(/^\//,""):t}),c=()=>{o.isError=!0};return f(()=>r.src,()=>{o.isError=!1}),{state:o,customClassNames:e,imgSrc:s,onError:c}}},N=["src"];function C(r,o,e,s,c,t){return n(),i("span",{class:l([r.$style["product-icon"],{"is-error":s.state.isError,[r.$style[`product-icon--size-${e.size}`]]:e.size},s.customClassNames.wrap])},[e.src?(n(),i("img",{key:0,src:s.imgSrc,alt:"",class:l([r.$style["product-icon__img"],s.customClassNames.img]),onError:o[0]||(o[0]=(...u)=>s.onError&&s.onError(...u))},null,42,N)):p("",!0)],2)}const h={$style:g},S=_(y,[["render",C],["__cssModules",h]]);export{S as P};
