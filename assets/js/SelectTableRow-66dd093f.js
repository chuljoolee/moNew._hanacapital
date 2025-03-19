import{b as R,r as C,j as k,k as M,w as y,p as h,u as x,q as b,s as u,v as d,C as E,x as i,y as _,D as T,a as H,F as O,l as j,n as N}from"./vue-c1e56059.js";import{_ as A}from"./index-9e106429.js";const D={"basic-table":"_basic-table_1gp87_1","basic-table__left-line":"_basic-table__left-line_1gp87_74","basic-table__padding-none":"_basic-table__padding-none_1gp87_77","select-table":"_select-table_1gp87_101","select-table__caption":"_select-table__caption_1gp87_108","select-table__head":"_select-table__head_1gp87_126","select-table__body":"_select-table__body_1gp87_130","select-table__radio":"_select-table__radio_1gp87_135","select-table__radio-text":"_select-table__radio-text_1gp87_177","select-table--disabled":"_select-table--disabled_1gp87_209","select-table--maxrow-5":"_select-table--maxrow-5_1gp87_212"},U=()=>({wrap:"",head:"",body:"",caption:"",table:"",disabled:""}),V={props:{classNames:{Type:Object,default(){return U()}},once:{Type:Boolean,default:!0},label:{Type:String,default:null},captionId:{Type:String,default:null},caption:{Type:String,default:null},disabled:{Type:Boolean,default:!1},maxRow:{Type:Number,default:5},onSelected:{Type:Function,default(){return()=>{}}},onUnSelected:{Type:Function,default(){return()=>{}}}},setup(e,s){let l=!1,t=!1;const a=R({items:[],count:0,once:{value:!1},callback:{}}),n=C(null),o=C(null),S=k(()=>{const{classNames:c}=e;return Object.assign(U(),c)}),g=k(()=>!!s.slots.head),r=k(()=>!!s.slots.colgroup),f=c=>{const m=a.count;return a.items.push(Object.assign({},c,{key:m})),a.count++,m},v=c=>{const m=a.items.findIndex(L=>L.key===c);a.items.splice(m,1)},w=()=>{e.once?a.items[0]&&a.items[0].select():a.items.forEach(c=>{c.select()})},B=()=>{a.items.forEach(c=>{c.unSelect()})},F=()=>{t||(l=!0,o.value.scrollLeft=n.value.scrollLeft,l=!1)},I=()=>{l||(t=!0,n.value.scrollLeft=o.value.scrollLeft,t=!1)};return M(()=>{a.once.value=e.once,a.callback.onSelected=e.onSelected,a.callback.onUnSelected=e.onUnSelected}),y(()=>e.once,c=>{a.once.value=c}),y(()=>e.onSelected,c=>{a.callback.onSelected=c}),y(()=>e.onUnSelected,c=>{a.callback.onUnSelected=c}),h("selectTableStyleModule",x()),h("selectTable",{items:a.items,itemsAdd:f,itemsRemove:v,allSelect:w,allUnSelect:B,once:a.once,callback:a.callback}),{head:n,body:o,customClassNames:S,isHead:g,isColgroup:r,allSelect:w,allUnSelect:B,headScroll:F,bodyScroll:I}}},q=["aria-label","aria-describedby"],z=["id"],G={role:"rowgroup"},J={key:0},K={role:"rowgroup"},P={key:0};function Q(e,s,l,t,a,n){return b(),u("div",{class:i([e.$style["select-table"],{[e.$style["select-table--disabled"]]:l.disabled,[t.customClassNames.disabled]:l.disabled,[e.$style[`select-table--maxrow-${l.maxRow}`]]:l.maxRow},t.customClassNames.wrap]),role:"table","aria-label":l.label,"aria-describedby":l.captionId},[d("div",{class:i([e.$style["select-table__caption"],t.customClassNames.caption]),id:l.captionId},E(l.caption),11,z),t.isHead?(b(),u("div",{key:0,ref:"head",class:i([e.$style["select-table__head"],t.customClassNames.head]),onScroll:s[0]||(s[0]=(...o)=>t.headScroll&&t.headScroll(...o))},[d("div",{class:i([e.$style["basic-table"],t.customClassNames.table])},[d("table",G,[t.isColgroup?(b(),u("colgroup",J,[_(e.$slots,"colgroup")])):T("",!0),d("thead",null,[_(e.$slots,"head")])])],2)],34)):T("",!0),d("div",{ref:"body",class:i([e.$style["select-table__body"],t.customClassNames.body]),onScroll:s[1]||(s[1]=(...o)=>t.bodyScroll&&t.bodyScroll(...o))},[d("div",{class:i([e.$style["basic-table"],t.customClassNames.table])},[d("table",K,[t.isColgroup?(b(),u("colgroup",P,[_(e.$slots,"colgroup")])):T("",!0),d("tbody",null,[_(e.$slots,"default")])])],2)],34)],10,q)}const W={$style:D},le=A(V,[["render",Q],["__cssModules",W]]),p=(e,s,l)=>{e&&e.callback&&e.callback[s]&&e.callback[s](l)},X={props:{initialActive:{Type:Boolean,default:!1},onSelected:{Type:Function,default(){return()=>{}}},onUnSelected:{Type:Function,default(){return()=>{}}},action:{Type:Boolean,default:!0},actionType:{Type:String,default:"toggle"},disabled:{Type:Boolean,default:!1}},setup(e){const s=H("selectTable",{}),l=R({key:null,selected:{value:!1},disabled:{value:!1},radioClick:!1}),t=C(null),a=()=>{l.selected.value||(s.once.value&&s.allUnSelect(),l.selected.value=!0,N(()=>{e.onSelected(t),p(s,"onSelected",t)}))},n=()=>{l.selected.value&&(l.selected.value=!1,N(()=>{e.onUnSelected(t),p(s,"onUnSelected",t)}))},o=()=>{l.selected.value?n():a()},S=()=>{const{disabled:r,actionType:f}=e,{radioClick:v}=l;!r&&!v&&(f==="toggle"?o():f==="select"&&a()),l.radioClick=!1},g=()=>{l.radioClick=!0};return O(()=>{l.disabled.value=e.disabled}),M(()=>{s&&s.itemsAdd&&(l.key=s.itemsAdd({select:a,unSelect:n,toggle:o})),e.initialActive&&a()}),j(()=>{s&&s.itemsRemove&&s.itemsRemove(l.key)}),y(()=>e.disabled,r=>{l.disabled.value=r}),h("selectTableRow",{disabled:l.disabled,selected:l.selected,select:a,unSelect:n,toggle:o,radioClick:g}),{state:l,row:t,select:a,unSelect:n,toggle:o,click:S}}},Y=["tabindex","title"];function Z(e,s,l,t,a,n){return b(),u("tr",{ref:"row",tabindex:l.disabled?"-1":"0",class:i([{"is-selected":t.state.selected.value,"is-disabled":l.disabled}]),onClick:s[0]||(s[0]=()=>{l.action&&t.click()}),title:t.state.selected.value?"선택 됨":null},[_(e.$slots,"default",{select:t.select,unSelect:t.unSelect,toggle:t.toggle,selected:t.state.selected.value})],10,Y)}const te=A(X,[["render",Z]]);export{le as S,te as a};
