import{a}from"./axios-G2rPRu76.js";import{_ as h,c as n,b as t,t as r,F as u,h as m,j as b,o as l}from"./index-4BTZusAp.js";var f={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_NAME:"qoo",BASE_URL:"/Vue-2023-week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:i,VITE_NAME:_}=f,x={data(){return{order:{},orderProduct:[]}},methods:{getOrder(){const{id:d}=this.$route.params,e=`${i}/api/${_}/order/${d}`;a.get(e).then(s=>{console.log(s),console.log(s.data.order),this.order=s.data.order}).catch(s=>{console.log(s),alert(s.response.data.message)})},orderPay(){const{id:d}=this.$route.params,e=`${i}/api/${_}/pay/${d}`;a.post(e).then(s=>{console.log(s),this.order.is_paid=!0,alert(s.data.message),this.$router.push("/")}).catch(s=>{console.log(s),alert(s.response.data.message)})}},mounted(){console.log(this.$route),this.getOrder()}},v={class:"container"},g=t("div",{class:"row justify-content-center"},[t("div",{class:"col-md-8"},[t("h3",{class:"fw-bold mb-4 pt-3"},"付款頁面")])],-1),w={class:"row flex-row-reverse justify-content-center pb-5"},y={class:"col-md-8"},$={class:"border p-4 mb-4"},E={class:"border p-4 mb-4"},V=t("h4",null,"訂單編號",-1),j={class:"mb-2"},k=t("h4",{class:"mb-4"},"訂單細項",-1),T=["src"],N={class:"w-100"},P={class:"d-flex justify-content-between"},O={class:"mb-0 fw-bold"},R={class:"mb-0"},A={class:"mb-0 fw-bold"},B={class:"table mt-4 border-top border-bottom text-muted"},D=t("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"小計",-1),I={class:"text-end border-0 px-0 pt-4"},L=t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"付款方式"),t("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"ApplePay")],-1),M={class:"d-flex justify-content-between mt-4"},S=t("p",{class:"mb-0 h4 fw-bold"},"總計",-1),U={class:"mb-0 h4 fw-bold"},q={class:"d-flex flex-column-reverse flex-md-row mt-4 justify-content-center align-items-md-center align-items-end w-100"};function C(d,e,s,F,c,p){return l(),n("div",v,[g,t("div",w,[t("div",y,[t("div",$,[t("div",E,[V,t("h5",null,r(c.order.id),1)]),t("div",j,[k,(l(!0),n(u,null,m(c.order.products,o=>(l(),n("div",{class:"d-flex mb-2",key:o.id},[t("img",{src:o.product.imageUrl,alt:"",class:"me-2",style:{width:"48px",height:"48px","object-fit":"cover"}},null,8,T),t("div",N,[t("div",P,[t("p",O,r(o.product.title),1),t("p",R,"NT$"+r(o.final_total),1)]),t("p",A,"x"+r(o.qty),1)])]))),128))]),t("table",B,[t("tbody",null,[t("tr",null,[D,t("td",I,"NT$"+r(c.order.total),1)]),L])]),t("div",M,[S,t("p",U,"NT$"+r(c.order.total),1)])]),t("div",q,[t("button",{type:"button",class:"btn btn-dark py-3 px-7",onClick:e[0]||(e[0]=b(o=>p.orderPay(),["prevent"]))},"確認結帳")])])])])}const H=h(x,[["render",C]]);export{H as default};