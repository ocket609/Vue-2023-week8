import{a as _}from"./axios-G2rPRu76.js";import{_ as h,a as m,c as i,b as t,F as b,g as v,d as l,w as u,t as e,h as f,f as g,r as x,o as n,e as p}from"./index--tY1Jd-a.js";import{c as w}from"./cartStore-gr4-ul1T.js";var y={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_NAME:"qoo",BASE_URL:"/Vue-2023-week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:E,VITE_NAME:k}=y,V={data(){return{product:{}}},methods:{getProduct(){const{id:a}=this.$route.params,c=`${E}/api/${k}/product/${a}`;_.get(c).then(o=>{console.log(o),console.log(o.data.product),this.product=o.data.product}).catch(o=>{console.log(o),alert(o.response.data.message)})},...m(w,["addToCart"])},mounted(){console.log(this.$route),this.getProduct()}},N={class:"container"},T={class:"row align-items-center"},C={class:"col-md-7"},L={id:"carouselExampleControls",class:"carousel slide","data-ride":"carousel"},R={class:"carousel-inner"},S={class:"carousel-item active"},U=["src"],P=["src"],A=t("a",{class:"carousel-control-prev",href:"#carouselExampleControls",role:"button","data-slide":"prev"},[t("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),t("span",{class:"sr-only"},"Previous")],-1),B=t("a",{class:"carousel-control-next",href:"#carouselExampleControls",role:"button","data-slide":"next"},[t("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),t("span",{class:"sr-only"},"Next")],-1),D={class:"col-md-5"},I={"aria-label":"breadcrumb"},M={class:"breadcrumb bg-white px-0 mb-0 py-3"},$={class:"breadcrumb-item"},j={class:"breadcrumb-item"},F={class:"breadcrumb-item active","aria-current":"page"},O={class:"fw-bold h1 mb-1"},q={class:"mb-0 text-muted text-end"},H={class:"h4 fw-bold text-end"},z={class:"row align-items-center"},G=g('<div class="col-6"><div class="input-group my-3 bg-light rounded"><div class="input-group-prepend"><button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1"><i class="fas fa-minus"></i></button></div><input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1"><div class="input-group-append"><button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2"><i class="fas fa-plus"></i></button></div></div></div>',1),J={class:"col-6"},K={class:"row my-5"},Q={class:"col-md-4"},W={class:"col-md-3"},X={class:"text-muted"},Y=t("h3",{class:"fw-bold"},"Lorem ipsum dolor sit amet",-1);function Z(a,c,o,tt,s,st){const d=x("RouterLink");return n(),i("div",N,[t("div",T,[t("div",C,[t("div",L,[t("div",R,[t("div",S,[t("img",{src:s.product.imageUrl,class:"object-fit-cover",width:"650",height:"500",alt:"主視圖"},null,8,U)]),(n(!0),i(b,null,v(s.product.imagesUrl,r=>(n(),i("div",{key:r.imagesUrl,class:"carousel-item"},[t("img",{src:r,class:"object-fit-cover",width:"650",alt:"配圖"},null,8,P)]))),128))]),A,B])]),t("div",D,[t("nav",I,[t("ol",M,[t("li",$,[l(d,{class:"text-muted",to:"/"},{default:u(()=>[p("Home")]),_:1})]),t("li",j,[l(d,{class:"text-muted",to:"/products"},{default:u(()=>[p("產品")]),_:1})]),t("li",F,e(s.product.title),1)])]),t("h2",O,e(s.product.title),1),t("p",q,[t("del",null,"NT$"+e(s.product.origin_price),1)]),t("p",H,"NT$"+e(s.product.price),1),t("div",z,[G,t("div",J,[t("a",{href:"./checkout.html",class:"text-nowrap btn btn-dark w-100 py-2",onClick:c[0]||(c[0]=f(r=>a.addToCart(s.product.id),["prevent"]))},"加入購物車")])])])]),t("div",K,[t("div",Q,[t("p",null,e(s.product.description),1)]),t("div",W,[t("p",X,e(s.product.content),1)])]),Y])}const at=h(V,[["render",Z]]);export{at as default};