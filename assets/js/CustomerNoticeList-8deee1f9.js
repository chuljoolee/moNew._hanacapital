import{R as y,k,T as x,A as I,H as a,J as o,q as i,K as e,v as s,x as _,s as $,N as g,M as w,L as C}from"./vue-c1e56059.js";import{_ as T,b as v,c as L,T as N,S,l as R}from"./index-9e106429.js";import{P as H}from"./PageContents-1df8324b.js";import{I as A,a as M}from"./InputBlockCell-d7e6e489.js";import{B as P}from"./BasicSelect-b3b422b7.js";import{I as V}from"./dropdown-5c299e7b.js";import"./vendor-58bdd0ff.js";import"./chart-387708a7.js";import"./SelectButton-f1b412cc.js";import"./PopupTitle-44083e3f.js";import"./ToastPopup-29747444.js";import"./ToastPopupHead-d9b90fc7.js";import"./check-l-b746aa41.js";const U="_empty_rihc7_1",q="_empty__text_rihc7_6",z="_board_rihc7_14",E="_board__list_rihc7_17",F="_board__item_rihc7_22",J="_board__link_rihc7_33",K="_board__title_rihc7_25",j="_board__text_rihc7_67",D="_board__sub_rihc7_83",G="_board__info_rihc7_30",O={empty:U,empty__text:q,board:z,board__list:E,board__item:F,"board__item--mark":"_board__item--mark_rihc7_25","board__title-text":"_board__title-text_rihc7_25","board__item--hidden":"_board__item--hidden_rihc7_29","board__info-item":"_board__info-item_rihc7_30",board__link:J,board__title:K,board__text:j,board__sub:D,board__info:G,"board__info-item--hits":"_board__info-item--hits_rihc7_143"},Q={components:{PageContents:H,InputBlock:A,InputBlockCell:M,BasicSelect:P,BasicInput:v,BasicHr:L,TextButton:N,SearchButton:S,RouterLink:y,IconArrow:V},setup(){const t={ui:{header:R()}};k(()=>{t.ui.header.setTitle(()=>"공지사항"),t.ui.header.setLeftButtons(()=>["back"]),t.ui.header.setRightButtons(()=>[])}),x(()=>{t.ui.header.setTitle(),t.ui.header.setLeftButtons(),t.ui.header.setRightButtons()})}},W={class:"inline-wrap align-center row-margin-contents"};function X(t,n,Z,tt,et,ot){const c=o("BasicSelect"),r=o("InputBlockCell"),l=o("BasicInput"),d=o("SearchButton"),m=o("InputBlock"),u=o("BasicHr"),p=o("RouterLink"),b=o("IconArrow"),h=o("TextButton"),B=o("PageContents");return i(),I(B,null,{default:a(()=>[e(m,null,{default:a(()=>[e(r,null,{default:a(()=>[e(c,{option:[{value:"1",text:"전체"},{value:"2",text:"제목"},{value:"3",text:"내용"}],buttonTitle:"검색 조건 선택하기",layerTitle:"검색 조건을 선택해 주세요",classNames:{wrap:"input-width-category"},defaultValue:"1"})]),_:1}),e(r,{flexible:!0},{default:a(()=>[e(l,{type:"search",title:"검색어 입력",placeholder:"검색어 입력"})]),_:1}),e(r,{type:"search"},{default:a(()=>[e(d)]),_:1})]),_:1}),e(u,{className:"row-margin-container-medium"}),s("div",{class:_(t.$style.empty)},[s("p",{class:_(t.$style.empty__text)},"검색된 결과가 없습니다.",2)],2),s("div",{class:_(t.$style.board)},[s("ul",{class:_(t.$style.board__list)},[(i(),$(w,null,g(10,f=>s("li",{key:f,class:_(t.$style.board__item)},[e(p,{to:"/customer/notice-detail",class:_(t.$style.board__link)},{default:a(()=>[s("span",{class:_(t.$style.board__title)},[s("span",{class:_(t.$style["board__title-text"])}," 전화권유 상담원 현황 ",2)],2),s("span",{class:_(t.$style.board__text)},"2022.10.25",2)]),_:1},8,["class"])],2)),64))],2)],2),s("div",W,[e(h,{classNames:{wrap:"text-body-4 color-gray"}},{rightIcon:a(()=>[e(b)]),default:a(()=>[n[0]||(n[0]=C(" 더보기 "))]),_:1})])]),_:1})}const Y={$style:O},ht=T(Q,[["render",X],["__cssModules",Y]]);export{ht as default};
