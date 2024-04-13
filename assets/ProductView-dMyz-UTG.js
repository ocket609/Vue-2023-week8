import{a as p}from"./axios-G2rPRu76.js";import{_ as h,a as m,c as l,b as t,F as b,g as v,d as a,w as u,t as i,h as g,v as x,i as f,r as y,o as r,e as _}from"./index-FqLUPrDT.js";import{c as w}from"./cartStore-d1_PvKHS.js";var E={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_NAME:"qoo",BASE_URL:"/Vue-2023-week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:k,VITE_NAME:V}=E,C={data(){return{product:{},qty:1}},methods:{getProduct(){const{id:n}=this.$route.params,o=`${k}/api/${V}/product/${n}`;p.get(o).then(e=>{console.log(e),console.log(e.data.product),this.product=e.data.product}).catch(e=>{console.log(e),alert(e.response.data.message)})},...m(w,["addToCart"])},mounted(){console.log(this.$route),this.getProduct()}},T={class:"container"},q={class:"row align-items-center"},N={class:"col-md-7"},R={id:"carouselExampleControls",class:"carousel slide","data-ride":"carousel"},U={class:"carousel-inner"},L={class:"carousel-item active"},D=["src"],M=["src"],P=t("a",{class:"carousel-control-prev",href:"#carouselExampleControls",role:"button","data-slide":"prev"},[t("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),t("span",{class:"sr-only"},"Previous")],-1),S=t("a",{class:"carousel-control-next",href:"#carouselExampleControls",role:"button","data-slide":"next"},[t("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),t("span",{class:"sr-only"},"Next")],-1),A={class:"col-md-5"},B={"aria-label":"breadcrumb"},I={class:"breadcrumb bg-white px-0 mb-0 py-3"},j={class:"breadcrumb-item"},F={class:"breadcrumb-item"},O={class:"breadcrumb-item active","aria-current":"page"},H={class:"fw-bold h1 mb-1"},z={class:"mb-0 text-muted text-end"},G={class:"h4 fw-bold text-end"},J={class:"row align-items-center"},K={class:"col-6"},Q={class:"input-group my-3 bg-light rounded"},W={class:"input-group-prepend"},X=["disabled"],Y=t("i",{class:"bi bi-dash"},null,-1),Z=[Y],$={class:"input-group-append"},tt=t("i",{class:"bi bi-plus"},null,-1),st=[tt],ot={class:"col-6"},et={class:"row my-5"},ct={class:"col-md-4"},it={class:"col-md-3"},nt={class:"text-muted"},lt=t("h3",{class:"fw-bold"},null,-1);function rt(n,o,e,dt,s,at){const d=y("RouterLink");return r(),l("div",T,[t("div",q,[t("div",N,[t("div",R,[t("div",U,[t("div",L,[t("img",{src:s.product.imageUrl,class:"object-fit-cover",width:"650",height:"500",alt:"主視圖"},null,8,D)]),(r(!0),l(b,null,v(s.product.imagesUrl,c=>(r(),l("div",{key:c.imagesUrl,class:"carousel-item"},[t("img",{src:c,class:"object-fit-cover",width:"650",alt:"配圖"},null,8,M)]))),128))]),P,S])]),t("div",A,[t("nav",B,[t("ol",I,[t("li",j,[a(d,{class:"text-muted",to:"/"},{default:u(()=>[_("Home")]),_:1})]),t("li",F,[a(d,{class:"text-muted",to:"/products"},{default:u(()=>[_("產品")]),_:1})]),t("li",O,i(s.product.title),1)])]),t("h2",H,i(s.product.title),1),t("p",z,[t("del",null,"NT$"+i(s.product.origin_price),1)]),t("p",G,"NT$"+i(s.product.price),1),t("div",J,[t("div",K,[t("div",Q,[t("div",W,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon1",onClick:o[0]||(o[0]=c=>s.qty--),disabled:s.qty===1},Z,8,X)]),g(t("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none bg-light",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1",value:"1","onUpdate:modelValue":o[1]||(o[1]=c=>s.qty=c)},null,512),[[x,s.qty]]),t("div",$,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2",onClick:o[2]||(o[2]=c=>s.qty++)},st)])])]),t("div",ot,[t("a",{href:"./checkout.html",class:"text-nowrap btn btn-dark w-100 py-2",onClick:o[3]||(o[3]=f(c=>n.addToCart(s.product.id,s.qty),["prevent"]))},"加入購物車")])])])]),t("div",et,[t("div",ct,[t("p",null,i(s.product.description),1)]),t("div",it,[t("p",nt,i(s.product.content),1)])]),lt])}const ht=h(C,[["render",rt]]);export{ht as default};
