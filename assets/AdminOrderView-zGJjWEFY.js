import{a as h}from"./axios-G2rPRu76.js";import{m as D,D as V}from"./DelModal-UOA9LAjW.js";import{_ as M,o as n,c as s,b as e,t as l,l as v,F as _,g,h as C,p as $,d as m,r as b,n as E,i as k}from"./index-FqLUPrDT.js";import{P as w}from"./PaginationComponent-Y2PavmMS.js";const U={props:{order:{type:Object,default(){return{}}}},data(){return{modal:"",tempOrder:{},isPaid:!1}},emits:["update-paid"],mixins:[D],watch:{order(){this.tempOrder=this.order}}},I={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},L={class:"modal-dialog modal-xl",role:"document"},S={class:"modal-content border-0"},N=e("div",{class:"modal-header bg-dark text-white"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},[e("span",null,"訂單細節")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),R={class:"modal-body"},A={class:"row"},B={class:"col-md-4"},T=e("h3",null,"用戶資料",-1),j={key:0},q=e("th",null,"姓名：",-1),F=e("th",null,"Email：",-1),z=e("th",null,"電話：",-1),G=e("th",null,"地址：",-1),H={class:"col-md-8"},J=e("h3",null,"訂單細節",-1),K=e("th",null,"訂單編號：",-1),Q=e("th",null,"下單時間：",-1),W=e("th",null,"付款時間：",-1),X={key:0,class:"text-success"},Y={key:1},Z=e("th",null,"付款狀態：",-1),ee={key:0},te={key:1},oe=e("th",null,"總金額：",-1),le=e("h3",null,"選購商品",-1),ne=e("thead",null,[e("tr",null,[e("th",null,"產品名稱"),e("th",null,"數量 / 單位"),e("th",null,"小計")])],-1),se={class:"text-end"},de={class:"d-flex justify-content-end"},re={class:"form-check"},ae={class:"form-check-label",for:"flexCheckDefault"},ie={key:0},ce={key:1},ue={class:"modal-footer"},pe=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function _e(o,r,i,p,t,u){return n(),s("div",I,[e("div",L,[e("div",S,[N,e("div",R,[e("div",A,[e("div",B,[T,e("table",null,[t.tempOrder.user?(n(),s("tbody",j,[e("tr",null,[q,e("td",null,l(t.tempOrder.user.name),1)]),e("tr",null,[F,e("td",null,l(t.tempOrder.user.email),1)]),e("tr",null,[z,e("td",null,l(t.tempOrder.user.tel),1)]),e("tr",null,[G,e("td",null,l(t.tempOrder.user.address),1)])])):v("",!0)])]),e("div",H,[J,e("table",null,[e("tbody",null,[e("tr",null,[K,e("td",null,l(t.tempOrder.id),1)]),e("tr",null,[Q,e("td",null,l(o.$filters.date(t.tempOrder.create_at)),1)]),e("tr",null,[W,e("td",null,[t.tempOrder.paid_date?(n(),s("span",X,l(o.$filters.date(t.tempOrder.paid_date)),1)):(n(),s("span",Y,"時間不正確"))])]),e("tr",null,[Z,e("td",null,[t.tempOrder.is_paid?(n(),s("strong",ee,"已付款")):(n(),s("span",te,"尚未付款"))])]),e("tr",null,[oe,e("td",null,"$"+l(t.tempOrder.total),1)])])]),le,e("table",null,[ne,(n(!0),s(_,null,g(t.tempOrder.products,a=>(n(),s("tbody",{key:a.id},[e("tr",null,[e("th",null,l(a.product.title),1),e("td",null,l(a.qty)+" / "+l(a.product.unit),1),e("td",se,"$"+l(a.total),1)])]))),128))]),e("div",de,[e("div",re,[C(e("input",{type:"checkbox",class:"form-check-input",value:"",id:"flexCheckDefault","onUpdate:modelValue":r[0]||(r[0]=a=>t.tempOrder.is_paid=a)},null,512),[[$,t.tempOrder.is_paid]]),e("label",ae,[t.tempOrder.is_paid?(n(),s("span",ie,"已付款")):(n(),s("span",ce,"未付款"))])])])])])]),e("div",ue,[pe,e("button",{type:"button",class:"btn btn-primary",onClick:r[1]||(r[1]=a=>o.$emit("update-paid",t.tempOrder))},"修改付款狀態")])])])],512)}const he=M(U,[["render",_e]]);var me={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_NAME:"qoo",BASE_URL:"/Vue-2023-week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:f,VITE_NAME:O}=me,be={data(){return{orders:{},tempOrder:{},currentPage:1,pagination:{}}},components:{OrderModal:he,DelModal:V,PaginationComponent:w},methods:{getOrder(o=1){const r=`${f}/api/${O}/admin/orders?page=${o}`;this.currentPage=o,h.get(r).then(i=>{this.orders=i.data.orders,this.pagination=i.data.pagination}).catch(i=>{console.log(i.response.data.message)})},openModal(o){this.tempOrder={...o},this.$refs.orderModal.openModal()},updatePaid(o){const r=`${f}/api/${O}/admin/order/${o.id}`,i={is_paid:o.is_paid};h.put(r,{data:i}).then(p=>{console.log(p.data.orders),this.$refs.orderModal.hideModal(),this.getOrder(this.currentPage)}).catch(p=>{alert(p.response.data.message)})},delOpenModel(o){this.tempOrder={...o},this.$refs.delModal.openModal()},delOrder(){const o=`${f}/api/${O}/admin/order/${this.tempOrder.id}`;h.delete(o).then(r=>{this.$refs.delModal.hideModal(),this.getOrder(this.currentPage)}).catch(r=>{alert(r.response.data.message)})}},mounted(){this.getOrder()},computed:{x:function(){var o;return(o=this.orders[6])==null?void 0:o.user.email}}},fe=e("h2",null,"訂單",-1),Oe={class:"container"},ge={class:"table mt-4"},ye=e("thead",null,[e("tr",null,[e("th",null,"購買時間"),e("th",null,"Email"),e("th",null,"訂單編號"),e("th",null,"購買款項"),e("th",null,"應付金額"),e("th",null,"是否付款"),e("th",null,"編輯")])],-1),ke={class:"form-check"},Me=["id","onUpdate:modelValue","onChange"],ve=["for"],Ce={key:0},$e={key:1},xe={class:"btn-group"},Pe=["onClick"],De=["onClick"];function Ve(o,r,i,p,t,u){const a=b("OrderModal"),x=b("DelModal"),P=b("PaginationComponent");return n(),s(_,null,[fe,e("div",Oe,[e("table",ge,[ye,e("tbody",null,[(n(!0),s(_,null,g(t.orders,d=>{var y;return n(),s(_,{key:d.id},[t.orders.length?(n(),s("tr",{key:0,class:E({"text-secondary":!d.is_paid})},[e("td",null,l(o.$filters.date(d.create_at)),1),e("td",null,l((y=d.user)==null?void 0:y.email),1),e("td",null,l(d.id),1),e("td",null,[e("p",null,"共 "+l(d.num)+" 項",1),e("ul",null,[(n(!0),s(_,null,g(d.products,c=>(n(),s("li",{key:c.id},l(c.product.title)+" / 數量："+l(c.product.unit),1))),128))])]),e("td",null,l(d.total),1),e("td",null,[e("div",ke,[C(e("input",{type:"checkbox",class:"form-check-input",id:`paidSwitch${d.id}`,"onUpdate:modelValue":c=>d.is_paid=c,onChange:c=>u.updatePaid(d)},null,40,Me),[[$,d.is_paid]]),e("label",{class:"form-check-label",for:`paidSwitch${d.id}`},[d.is_paid?(n(),s("span",Ce,"已付款")):(n(),s("span",$e,"未付款"))],8,ve)])]),e("td",null,[e("div",xe,[e("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:k(c=>u.openModal(d),["prevent"])},"檢視",8,Pe),e("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:k(c=>u.delOpenModel(d),["prevent"])},"刪除",8,De)])])],2)):v("",!0)],64)}),128))])]),m(a,{ref:"orderModal",order:t.tempOrder,onUpdatePaid:u.updatePaid},null,8,["order","onUpdatePaid"]),m(x,{ref:"delModal",item:t.tempOrder,onDelItem:u.delOrder},null,8,["item","onDelItem"])]),m(P,{pages:t.pagination,"get-products":u.getOrder},null,8,["pages","get-products"])],64)}const Le=M(be,[["render",Ve]]);export{Le as default};
