import{_ as r,o as n,c as i,b as a,n as o,h as l,F as c,g as d,t as g}from"./index--irw_gya.js";const _={props:["pages","getProducts"]},u={"aria-label":"Page navigation example"},p={class:"pagination"},m=a("span",{"aria-hidden":"true"},"«",-1),h=[m],k=["onClick"],v=a("span",{"aria-hidden":"true"},"»",-1),P=[v];function b(f,s,e,x,C,B){return n(),i("nav",u,[a("ul",p,[a("li",{class:o(["page-item",{disabled:!e.pages.has_pre}])},[a("a",{class:"page-link","aria-label":"Previous",onClick:s[0]||(s[0]=l(t=>e.getProducts(e.pages.current_page-1),["prevent"]))},h)],2),(n(!0),i(c,null,d(e.pages.total_pages,t=>(n(),i("li",{class:o(["page-item",{active:t===e.pages.current_page}]),key:t+123},[a("a",{class:"page-link",onClick:l(y=>e.getProducts(t),["prevent"])},g(t),9,k)],2))),128)),a("li",{class:o(["page-item",{disabled:!e.pages.has_next}])},[a("a",{class:"page-link","aria-label":"Next",onClick:s[1]||(s[1]=l(t=>e.getProducts(e.pages.current_page+1),["prevent"]))},P)],2)])])}const N=r(_,[["render",b]]);export{N as P};
