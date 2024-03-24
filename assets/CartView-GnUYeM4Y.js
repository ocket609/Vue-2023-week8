import{a as b}from"./axios-G2rPRu76.js";import{_ as m,c as n,b as t,F as g,g as y,t as l,d as f,w as v,f as x,r as w,o as c,j as k,v as C,e as L}from"./index--tY1Jd-a.js";var V={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_NAME:"qoo",BASE_URL:"/Vue-2023-week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:p,VITE_NAME:h}=V,E={data(){return{cart:{},status:{cartQtyLoading:""}}},methods:{getCart(){const e=`${p}/api/${h}/cart`;b.get(e).then(s=>{console.log("cart",s.data.data),this.cart=s.data.data}).catch(s=>{console.log(s),alert(s.response.data.message)})},adjustCartQty(e,s=1){const a=`${p}/api/${h}/cart/${e.id}`,i={product_id:e.product_id,qty:s};console.log(i),this.status.cartQtyLoading=e.id,b.put(a,{data:i}).then(d=>{console.log(d.data),this.status.cartQtyLoading="",this.getCart()}).catch(d=>{console.log(d.response.data.message)})},removeCartItem(e){const s=`${p}/api/${h}/cart/${e}`;this.status.cartQtyLoading=e,b.delete(s).then(a=>{console.log(a.data),this.status.cartQtyLoading="",alert(a.data.message),this.getCart()}).catch(a=>{console.log(a.data.message),alert(a.response.data.message)})}},mounted(){this.getCart()}},$={class:"container"},q={class:"mt-3"},N=t("h3",{class:"mt-3 mb-4"},"購物車",-1),Q={class:"row"},T={class:"col-md-8"},R={class:"table"},j=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"border-0 ps-0"},"商品"),t("th",{scope:"col",class:"border-0"},"數量"),t("th",{scope:"col",class:"border-0"},"小計"),t("th",{scope:"col",class:"border-0"})])],-1),I={class:"border-bottom border-top"},U={scope:"row",class:"border-0 px-0 font-weight-normal py-4"},D=["src"],S={class:"mb-0 fw-bold ms-3 d-inline-block"},A={class:"border-0 align-middle",style:{"max-width":"160px"}},B={class:"input-group pe-5"},M={class:"input-group-prepend"},F=["onClick","disabled"],O=t("i",{class:"bi bi-dash"},null,-1),P=[O],z=["onClick"],G=t("i",{class:"bi bi-trash3-fill"},null,-1),H=[G],J=["onUpdate:modelValue","disabled"],K={class:"input-group-append"},W=["onClick"],X=t("i",{class:"bi bi-plus"},null,-1),Y=[X],Z={class:"border-0 align-middle"},tt={class:"mb-0 ms-auto"},ot=t("td",{class:"border-0 align-middle"},[t("i",{class:"fas fa-times"})],-1),st=x('<div class="input-group w-50 mb-3"><input type="text" class="form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none" placeholder="Coupon Code" aria-label="Recipient&#39;s username" aria-describedby="button-addon2"><div class="input-group-append"><button class="btn btn-outline-dark border-bottom border-top-0 border-start-0 border-end-0 rounded-0" type="button" id="button-addon2"><i class="bi bi-send"></i></button></div></div>',1),et={class:"col-md-4"},at={class:"border p-4 mb-4"},dt=t("h4",{class:"fw-bold mb-4"},"訂單金額",-1),nt={class:"table text-muted border-bottom"},ct=t("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"訂單金額",-1),rt={class:"text-end border-0 px-0 pt-4"},lt=t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"付款方式"),t("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"ApplePay")],-1),it={class:"d-flex justify-content-between mt-4"},_t=t("p",{class:"mb-0 h4 fw-bold"},"總計",-1),bt={class:"mb-0 h4 fw-bold"},pt=t("div",{class:"my-5"},[t("h3",{class:"fw-bold"},"Lorem ipsum dolor sit amet")],-1);function ht(e,s,a,i,d,_){const u=w("RouterLink");return c(),n("div",$,[t("div",q,[N,t("div",Q,[t("div",T,[t("table",R,[j,(c(!0),n(g,null,y(d.cart.carts,o=>(c(),n("tbody",{key:o.id},[t("tr",I,[t("th",U,[t("img",{src:o.product.imageUrl,alt:"",style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,D),t("p",S,l(o.product.title),1)]),t("td",A,[t("div",B,[t("div",M,[o.qty>1?(c(),n("button",{key:0,class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon1",onClick:r=>{o.qty--,_.adjustCartQty(o,o.qty)},disabled:o.qty===1},P,8,F)):(c(),n("button",{key:1,type:"button",class:"btn btn-outline-danger",onClick:r=>_.removeCartItem(o.id)},H,8,z))]),k(t("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1","onUpdate:modelValue":r=>o.qty=r,disabled:o.id===d.status.cartQtyLoading,readonly:""},null,8,J),[[C,o.qty]]),t("div",K,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2",onClick:r=>{o.qty++,_.adjustCartQty(o,o.qty)}},Y,8,W)])])]),t("td",Z,[t("p",tt,"NT$"+l(o.total),1)]),ot])]))),128))]),st]),t("div",et,[t("div",at,[dt,t("table",nt,[t("tbody",null,[t("tr",null,[ct,t("td",rt,"NT$"+l(d.cart.total),1)]),lt])]),t("div",it,[_t,t("p",bt,"NT$"+l(d.cart.final_total),1)]),f(u,{to:"/checkout",class:"btn btn-dark w-100 mt-4"},{default:v(()=>[L("結帳")]),_:1})])])]),pt])])}const gt=m(E,[["render",ht]]);export{gt as default};