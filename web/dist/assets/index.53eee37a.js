import{o as e,c as s,a,w as t,r as l,C as o,T as i,M as n,p as r,b as d,d as c,F as u,e as h,f as g,t as m,g as b,h as p,i as v,j as y,k as f}from"./vendor.61578379.js";!function(e=".",s="__import__"){try{self[s]=new Function("u","return import(u)")}catch(a){const t=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[s]=e=>new Promise(((a,o)=>{const i=new URL(e,t);if(self[s].moduleMap[i])return a(self[s].moduleMap[i]);const n=new Blob([`import * as m from '${i}';`,`${s}.moduleMap['${i}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){o(new Error(`Failed to import: ${e}`)),l(r)},onload(){a(self[s].moduleMap[i]),l(r)}});document.head.appendChild(r)})),self[s].moduleMap={}}}("/assets/");var k="/resources/CatwikiLogo.svg";const w={class:"container"},x={id:"top"},B=a("img",{src:k},null,-1),R=a("footer",null,[a("img",{src:k}),a("span",null,"©ngosangns - devchallenge.io 2020")],-1),j={expose:[],setup:o=>(o,i)=>{const n=l("router-link"),r=l("router-view");return e(),s("div",w,[a("div",x,[a(n,{to:"/"},{default:t((()=>[B])),_:1})]),a(r),R])}};const M={name:"HomePage",data:()=>({top4:[],searchResults:{display:!1,loading:!1,values:[]},searchBoxMobile:null,toast:{obj:null,message:null}}),methods:{getTop4:function(){o.get("/api/breeds/",{responseType:"json"}).then((e=>{this.top4=e.data.slice(0,4)})).catch((()=>{this.toast.obj=new i(document.getElementById("danger-toast")),this.toast.message="Error while requesting",this.toast.obj.show()})).finally((()=>{let e=document.querySelectorAll(".top-4 .loading");for(let s of e)s.parentNode.removeChild(s)}))},search(e){let s;s=e?e.target.value:document.getElementById("search-input").value,""!=s&&(this.searchResults.display=!0,this.searchResults.loading=!0,o.get("/api/search/?q="+s,{responseType:"json"}).then((e=>{this.searchResults.values=e.data})).catch((()=>{this.toast.obj=new i(document.getElementById("danger-toast")),this.toast.message="Error while requesting",this.toast.obj.show()})).finally((()=>{this.searchResults.loading=!1})))},blurSearchBox:function(e){setTimeout((()=>{this.searchResults.display=!1}),100)},displaySearchBox:function(){this.searchResults.values.length&&(this.searchResults.display=!0)},displaySearchBoxMobile:function(){this.searchBoxMobile=new n(document.getElementById("search-dialog-mobile"),{backdrop:!1}),this.searchBoxMobile.show()},blurSearchBoxMobile:function(){this.searchBoxMobile&&this.searchBoxMobile.hide()}},created:function(){this.getTop4()}},S=b("data-v-9309c93c");r("data-v-9309c93c");const _={id:"featured"},E=a("img",{class:"background",src:"/resources/HeroImagelg.png"},null,-1),T={class:"float"},C=a("img",{src:k},null,-1),L=a("h4",null,"Get to know more about your cat breed",-1),I={id:"search-mobile"},q=p(" Search "),U=a("i",{class:"bi bi-search"},null,-1),F={id:"search-dialog-mobile",class:"modal fade","data-bs-backdrop":"static",tabindex:"-1"},N={class:"modal-dialog modal-fullscreen"},O={class:"modal-content"},$={class:"modal-body"},H={style:{display:"flex","justify-content":"flex-end","margin-bottom":"1rem"}},P={class:"search-box-mobile input-group mb-3 bg-white"},K=a("i",{class:"bi bi-search"},null,-1),A={key:0,id:"search-results",class:"search-results card"},G={class:"card-body"},W={key:0},z={key:1},D=a("li",null,"No data",-1),J={key:2,style:{display:"flex","justify-content":"center"}},Q=a("div",{class:"spinner-border",role:"status"},[a("span",{class:"visually-hidden"},"Loading...")],-1),V={id:"search-desktop"},X={class:"search-box input-group mb-3 bg-white"},Y=a("i",{class:"bi bi-search"},null,-1),Z={key:0,id:"search-results",class:"search-results card"},ee={class:"card-body"},se={key:0},ae={key:1},te=a("li",null,"No data",-1),le={key:2,style:{display:"flex","justify-content":"center"}},oe=a("div",{class:"spinner-border",role:"status"},[a("span",{class:"visually-hidden"},"Loading...")],-1),ie={class:"more"},ne=a("h2",null,"Most Searched Breeds",-1),re=p("66+ Breeds For you to discover"),de={class:"see-more"},ce=p("See more "),ue=a("i",{class:"bi bi-arrow-right"},null,-1),he={class:"top-4"},ge={class:"title"},me=a("div",{class:"img"},null,-1),be=a("h4",{class:"title"},null,-1),pe=a("div",{class:"grid2"},[a("div",{class:"left"},[a("h3",null,"Why should you have a cat?"),a("span",null," Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves "),a("a",null,[p("Read more "),a("i",{class:"bi bi-arrow-right"})])]),a("div",{class:"right"},[a("img",{src:"/resources/image2.png"}),a("img",{src:"/resources/image1.png"}),a("img",{src:"/resources/image3.png"})])],-1),ve={id:"danger-toast",class:"toast bg-danger",role:"alert","aria-live":"assertive","aria-atomic":"true"},ye={class:"toast-body"},fe=a("button",{type:"button",class:"btn-close btn-close-white ms-auto me-2","data-bs-dismiss":"toast","aria-label":"Close"},null,-1);d();const ke=S(((t,o,i,n,r,d)=>{const b=l("router-link");return e(),s("div",null,[a("div",_,[E,a("div",T,[C,L,a("div",I,[a("div",{class:"search-trigger-mobile",onClick:o[1]||(o[1]=(...e)=>d.displaySearchBoxMobile&&d.displaySearchBoxMobile(...e))},[q,U]),a("div",F,[a("div",N,[a("div",O,[a("div",$,[a("div",H,[a("button",{type:"button",class:"btn-close",onClick:o[2]||(o[2]=(...e)=>d.blurSearchBoxMobile&&d.blurSearchBoxMobile(...e))})]),a("div",P,[a("input",{type:"text",id:"search-input-mobile",class:"form-control",placeholder:"Enter your breed",onKeyup:o[3]||(o[3]=c(((...e)=>d.search&&d.search(...e)),["enter"]))},null,32),a("button",{type:"button",class:"btn",onClick:o[4]||(o[4]=(...e)=>d.search&&d.search(...e))},[K])]),t.searchResults.display?(e(),s("div",A,[a("div",G,[!t.searchResults.loading&&t.searchResults.values.length?(e(),s("ul",W,[(e(!0),s(u,null,h(t.searchResults.values,(t=>(e(),s("li",{key:t,onClick:o[5]||(o[5]=(...e)=>d.blurSearchBoxMobile&&d.blurSearchBoxMobile(...e))},[a(b,{to:"/info/"+t.id},{default:S((()=>[p(m(t.name),1)])),_:2},1032,["to"])])))),128))])):g("",!0),t.searchResults.loading||t.searchResults.values.length?g("",!0):(e(),s("ul",z,[D])),t.searchResults.loading?(e(),s("div",J,[Q])):g("",!0)])])):g("",!0)])])])])]),a("div",V,[a("div",X,[a("input",{type:"text",id:"search-input",class:"form-control",placeholder:"Enter your breed",onKeyup:o[6]||(o[6]=c(((...e)=>d.search&&d.search(...e)),["enter"])),onBlur:o[7]||(o[7]=(...e)=>d.blurSearchBox&&d.blurSearchBox(...e)),onFocus:o[8]||(o[8]=(...e)=>d.displaySearchBox&&d.displaySearchBox(...e))},null,32),a("button",{type:"button",class:"btn",onClick:o[9]||(o[9]=(...e)=>d.search&&d.search(...e))},[Y])]),t.searchResults.display?(e(),s("div",Z,[a("div",ee,[!t.searchResults.loading&&t.searchResults.values.length?(e(),s("ul",se,[(e(!0),s(u,null,h(t.searchResults.values,(t=>(e(),s("li",{key:t},[a(b,{to:"/info/"+t.id},{default:S((()=>[p(m(t.name),1)])),_:2},1032,["to"])])))),128))])):g("",!0),t.searchResults.loading||t.searchResults.values.length?g("",!0):(e(),s("ul",ae,[te])),t.searchResults.loading?(e(),s("div",le,[oe])):g("",!0)])])):g("",!0)])]),a("div",ie,[ne,a("div",null,[a("h3",null,[a(b,{to:"/most-searched"},{default:S((()=>[re])),_:1})]),a("div",de,[a(b,{to:"/most-searched"},{default:S((()=>[ce,ue])),_:1})])])]),a("div",he,[(e(!0),s(u,null,h(t.top4,(t=>(e(),s("div",{class:"card",key:t.id},[a(b,{to:"/info/"+t.id},{default:S((()=>[a("div",{class:"img",style:"background: url("+t.image.url+")"},null,4)])),_:2},1032,["to"]),a("h4",ge,[a(b,{to:"/info/"+t.id},{default:S((()=>[p(m(t.name),1)])),_:2},1032,["to"])])])))),128)),(e(),s(u,null,h(4,(e=>a("div",{class:"card loading",key:e},[me,be]))),64))])]),pe,a("div",ve,[a("div",ye,m(t.toast.message),1),fe])])}));M.render=ke,M.__scopeId="data-v-9309c93c";const we={name:"InfoPage",props:["id"],data:()=>({loading:!0,value:null,toast:{obj:null,message:null}}),mounted:function(){o.get("/api/breeds/"+this.id,{responseType:"json"}).then((e=>{e.data.info.length&&(this.value=e.data,this.value.info=this.value.info[0]),console.log(e.data)})).catch((()=>{this.toast.obj=new bootstrap.Toast(document.getElementById("danger-toast")),this.toast.message="Error while requesting",this.toast.obj.show()})).finally((()=>{this.loading=!1}))}},xe=b("data-v-3d711b04");r("data-v-3d711b04");const Be={key:0},Re={class:"info"},je={class:"img"},Me={class:"detail"},Se=a("b",null,"Temperament",-1),_e=a("b",null,"Origin",-1),Ee=a("b",null,"Life Span",-1),Te={class:"other-photos"},Ce=a("h3",null,"Other photos",-1),Le={class:"grid"},Ie={key:1,class:"loading"},qe=a("div",{class:"spinner-border",role:"status"},[a("span",{class:"visually-hidden"},"Loading...")],-1),Ue={key:2,class:"loading"},Fe=a("div",{class:"alert alert-danger",role:"alert"}," No data! ",-1),Ne={id:"danger-toast",class:"toast bg-danger",role:"alert","aria-live":"assertive","aria-atomic":"true"},Oe={class:"toast-body"},$e=a("button",{type:"button",class:"btn-close btn-close-white ms-auto me-2","data-bs-dismiss":"toast","aria-label":"Close"},null,-1);d();const He=xe(((t,l,o,i,n,r)=>(e(),s("div",null,[!t.loading&&t.value?(e(),s("div",Be,[a("div",Re,[a("div",je,[a("div",{style:"background-image: url("+t.value.info.url+")"},null,4)]),a("div",Me,[a("h2",null,m(t.value.info.breeds[0].name),1),a("p",null,m(t.value.info.breeds[0].description),1),a("div",null,[a("p",null,[Se,p(": "+m(t.value.info.breeds[0].temperament),1)]),a("p",null,[_e,p(": "+m(t.value.info.breeds[0].origin),1)]),a("p",null,[Ee,p(": "+m(t.value.info.breeds[0].life_span)+" years",1)])])])]),a("div",Te,[Ce,a("div",Le,[(e(!0),s(u,null,h(t.value.other_images,(t=>(e(),s("div",{key:t},[a("div",{class:"img",style:"background-image: url("+t.url+")"},null,4)])))),128))])])])):g("",!0),t.loading?(e(),s("div",Ie,[qe])):g("",!0),t.loading||t.value?g("",!0):(e(),s("div",Ue,[Fe])),a("div",Ne,[a("div",Oe,m(t.toast.message),1),$e])]))));we.render=He,we.__scopeId="data-v-3d711b04";const Pe={name:"MostSearched",data:()=>({list:null,loading:!0,toast:{obj:null,message:null}}),methods:{getTop10:function(){o.get("/api/breeds/",{responseType:"json"}).then((e=>{this.list=e.data.slice(0,10),console.log(this.list)})).catch((()=>{this.toast.obj=new bootstrap.Toast(document.getElementById("danger-toast")),this.toast.message="Error while requesting",this.toast.obj.show()})).finally((()=>{this.loading=!1}))}},mounted:function(){this.getTop10()}},Ke=b("data-v-3c5c213d");r("data-v-3c5c213d");const Ae=a("h2",{class:"title"},"Top 10 most searched breeds",-1),Ge={key:0,class:"list"},We={class:"img"},ze={class:"description"},De={key:1,class:"loading"},Je=a("div",{class:"spinner-border",role:"status"},[a("span",{class:"visually-hidden"},"Loading...")],-1),Qe={key:2,class:"loading"},Ve={id:"danger-toast",class:"toast bg-danger",role:"alert","aria-live":"assertive","aria-atomic":"true"},Xe={class:"toast-body"},Ye=a("button",{type:"button",class:"btn-close btn-close-white ms-auto me-2","data-bs-dismiss":"toast","aria-label":"Close"},null,-1);d();const Ze=Ke(((t,o,i,n,r,d)=>{const c=l("router-link");return e(),s("div",null,[Ae,!t.loading&&t.list?(e(),s("div",Ge,[(e(!0),s(u,null,h(t.list,(t=>(e(),s("div",{key:t,class:"item"},[a("div",We,[a("div",{style:"background-image: url('"+t.image.url+"')"},null,4)]),a("div",ze,[a("h3",null,[a(c,{to:"/info/"+t.id},{default:Ke((()=>[p(m(t.name),1)])),_:2},1032,["to"])]),a("p",null,m(t.description),1)])])))),128))])):g("",!0),t.loading?(e(),s("div",De,[Je])):g("",!0),t.loading||t.list?g("",!0):(e(),s("div",Qe," No data! ")),a("div",Ve,[a("div",Xe,m(t.toast.message),1),Ye])])}));Pe.render=Ze,Pe.__scopeId="data-v-3c5c213d";const es=v(j),ss=[{path:"/",component:M},{path:"/info/:id",component:we,props:!0},{path:"/most-searched",component:Pe},{path:"/:pathMatch(.*)*",component:M}],as=y({mode:"history",history:f(),routes:ss});es.use(as),es.mount("#app");
