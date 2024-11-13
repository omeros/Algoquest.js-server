(function(){"use strict";var n={9519:function(n,e,o){var l=o(5130),u=o(3367),t=o(6768);function a(n,e,o,l,u,a){const i=(0,t.g2)("BoundApp");return(0,t.uX)(),(0,t.Wv)(i)}var i=o(144),s=o(4232),d=o(8047),r=o.n(d);const c="/api/";var v=r().create({withCredentials:!0});const b={postBoundToAlgoquest:p};async function p(n,e){const o=`${c}algoquest`,l={mainBound:n,bounds:e};return v.post(o,l).then((n=>(console.log("Post created successfully:",n.data),n.data))).catch((n=>{console.error("Error creating post:",n.message)}))}var f={__name:"bound-preview",props:{bound:Object,main:{type:Boolean,default:!1},answer:{type:Boolean,default:!1}},setup(n){const e=n,o=(0,i.KR)(null),l=(0,i.KR)({position:"absolute",width:"0px",height:"0px",top:"0px",left:"0px",border:"",backgroundColor:"",zIndex:"1"}),u=(0,i.KR)(""),a=(0,i.KR)(""),d=(0,i.KR)("1");function r(n){const e=n.right-n.left,u=n.up-n.down,t=(n.left+n.right)/2,a=(n.up+n.down)/2;l.value.width=`${e}px`,l.value.height=`${u}px`,l.value.left=t-e/2+"px",l.value.top=a-u/2+"px",o.value&&(o.value.classList.remove("scale-in"),o.value.offsetWidth,o.value.classList.add("scale-in"))}function c(n,e){const o=Math.ceil(n),l=Math.floor(e);return Math.floor(Math.random()*(l-o)+o)}return(0,t.nT)((()=>{if(e.answer)a.value="transparent",u.value="5px dashed black",d.value="10",l.value.backgroundColor=a.value,l.value.border=u.value,l.value.zIndex=d.value;else{if(e.main)a.value="#2d68f2",u.value="2px solid black",d.value="1";else{const n=c(0,255),e=c(0,255),o=c(0,255);a.value=`rgba(${n}, ${e}, ${o}, 0.9)`,u.value="2px solid black",d.value="1"}if(l.value.backgroundColor=a.value,l.value.border=u.value,l.value.zIndex=d.value,e.bound){const n=e.bound.right-e.bound.left,o=e.bound.up-e.bound.down;l.value.width=`${n}px`,l.value.height=`${o}px`,l.value.top=`${e.bound.down}px`,l.value.left=`${e.bound.left}px`}o.value&&o.value.classList.remove("scale-in")}})),(0,t.wB)((()=>e.bound),(n=>{e.answer&&n&&r(n)}),{immediate:!0,deep:!0}),(n,e)=>((0,t.uX)(),(0,t.CE)("div",{ref_key:"elementRef",ref:o,class:"my-element",style:(0,s.Tr)(l.value)},null,4))}};const g=f;var h=g;const m={class:"bound-list-container"};var k={__name:"bound-list",props:{bounds:{type:Array,default:()=>[]},mainBound:{type:Object,default:()=>({})},answerBound:{type:Object,default:()=>({})}},setup(n){const e=n;return(n,o)=>((0,t.uX)(),(0,t.CE)("div",m,[(0,t.bF)(h,{bound:e.answerBound,main:!1,answer:!0},null,8,["bound"]),(0,t.bF)(h,{bound:e.mainBound,main:!0,answer:!1},null,8,["bound"]),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.bounds,((n,e)=>((0,t.uX)(),(0,t.CE)("div",{key:e},[(0,t.bF)(h,{bound:n,main:!1,answer:!1},null,8,["bound"])])))),128))]))}};const B=k;var w=B;o(4114);const y=(0,u.nY)("bound.store",{state:()=>({mainBound:{left:null,right:null,up:null,down:null},bounds:[],answerBound:{left:null,right:null,up:null,down:null}}),getters:{getBounds:n=>(console.log("store - getBounds- state.bounds:",n.bounds),n.bounds),getMainBound:n=>(console.log("store - getMainBound- state.mainBound:",n.mainBound),n.mainBound)},actions:{addCoverBound(n){console.log("store addCoverBound-this.bounds:",this.bounds),this.bounds.push(n)},addCoverBounds(n){this.bounds=n},addMainBound(n){console.log("store addMainBound-this.mainBound1:",this.mainBound),this.mainBound=n,console.log("store addMainBound-this.mainBound2:",this.mainBound)},clearBounds(){this.mainBound={left:null,right:null,up:null,down:null},this.answerBound={left:null,right:null,up:null,down:null},this.bounds=[]},updateAnswerBound(n){console.log("updateAnswerBound:",n),this.answerBound=n}},sendDataToAgoquest(){}}),L={class:"modal-content"},C={class:"modal-container"};function R(n,e,o,u,a,i){return(0,t.uX)(),(0,t.CE)("div",{class:"modal-overlay",onClick:e[1]||(e[1]=(0,l.D$)(((...n)=>i.close&&i.close(...n)),["self"]))},[(0,t.Lk)("div",L,[(0,t.Lk)("div",C,[(0,t.Lk)("button",{class:"modal-close",onClick:e[0]||(e[0]=(...n)=>i.close&&i.close(...n))},"×"),(0,t.RG)(n.$slots,"default",{},void 0,!0)])])])}var x={name:"MyModal",methods:{close(){this.$emit("close")}}},M=o(1241);const _=(0,M.A)(x,[["render",R],["__scopeId","data-v-329a4440"]]);var K=_;const T={class:"body"},W={class:"header-container"},X={class:"header"},A={class:"btn-container"},E={class:"btn-container-inner"},O={class:"add-rec-btn",style:{}},$={class:"defalutMainbound"},j={class:"config-btn-container"},F={class:"run-btn-container"},J=["disabled"],U={style:{height:"82vh"}},V={class:"modal-inner-container"},z=(0,t.Lk)("h2",{style:{"text-align":"center"}},"Main Bound size",-1),q={class:"bound-input-container"},I={class:"bound-input-container"},Y={style:{display:"flex","justify-content":"center"}},P={class:"modal-inner-container"},Q=(0,t.Lk)("h2",{style:{"text-align":"center"}},"Cover Bound size",-1),H={class:"bound-input-container"},D={class:"bound-input-container"},G={style:{display:"flex","justify-content":"center"}},N={style:{},class:"explain"},S=(0,t.Lk)("img",{src:"https://res.cloudinary.com/omerphoto/image/upload/v1731521344/explain2_sacwlc.png",alt:""},null,-1),Z=[S],nn={key:2,style:{"background-color":"rgb(128, 209, 35)",height:"200px"}},en={key:3};var on={__name:"bound-app",setup(n){(0,l.$9)((n=>({d02c2a8c:(0,i.R1)(v),"5cac54d1":r.value,f802ba36:c.value}))),(0,t.hi)((()=>{sn&&clearTimeout(sn)}));const e=y(),{mainBound:o,bounds:a,answerBound:d}=(0,u.bP)(e),r=(0,i.KR)("lightgrey"),c=(0,i.KR)("rgb(197, 136, 255");let v="lightgrey";const p=(0,i.Kh)(a),f=(0,i.KR)(!1),g=(0,i.KR)(!1),h=(0,i.KR)(!0),m=(0,i.KR)(!1),k=(0,i.KR)(!1),B=(0,i.KR)(!1),L=(0,i.KR)(!1),C=(0,i.KR)(!1),R=(0,i.KR)(!1),x=(0,i.KR)(!1);let M,_,S,on,ln,un,tn,an,sn=null;function dn(){B.value=!0}function rn(){L.value=!0}function cn(){B.value=!1,console.log("mainBoundX1:",M),console.log("mainBoundX2:",_),console.log("mainBoundY1:",S),console.log("mainBoundY2:",on),_<=M&&(C.value=!0),S<=on&&(R.value=!0);const n={left:M,right:_,up:S,down:on};e.addMainBound(n)}function vn(){L.value=!1,console.log("coverBoundX1:",ln),console.log("coverBoundX2:",un),console.log("coverBoundY1:",tn),console.log("coverBoundY2:",an);const n={left:ln,right:un,up:tn,down:an};e.addCoverBound(n)}function bn(){g.value=!1,m.value=!1,h.value=!0,k.value=!1,e.clearBounds()}function pn(){m.value=!0,sn&&clearTimeout(sn),k.value=!1,sn=setTimeout((()=>{k.value=!0,m.value=!1,r.value="lightgreen"}),2e3);const n=window.innerWidth,o=window.innerHeight,l=fn(0,n),u=fn(0,l),t=fn(0,o),a=fn(0,t);console.log(u,a);const i={left:u,right:l,up:t,down:a};e.addCoverBound(i)}function fn(n,e){const o=Math.ceil(n),l=Math.floor(e);return Math.floor(Math.random()*(l-o)+o)}async function gn(){if(console.log("run function!"),r.value="rgb(247, 3, 15)",m.value=!1,g.value=!1,k.value=!1,clearTimeout(sn),f.value)console.log("calculation in progress!");else try{console.log(" run function - !isCalculate"),f.value=!0;const n=await b.postBoundToAlgoquest(o.value,a.value);e.updateAnswerBound(n),f.value=!1,g.value=!0,k.value=!1}catch(n){console.error("Error running bound service:",n)}finally{r.value="lightgreen",setTimeout((()=>{r.value="lightgrey"}),500)}}function hn(){const n=window.innerWidth-window.innerWidth/50,o=window.innerHeight-window.innerHeight/5;h.value=!1,m.value=!0;const l={left:0,right:n,up:o,down:0};e.addMainBound(l)}function mn(){x.value?c.value="lightgrey":c.value="grey",x.value=!x.value}return console.log("boundsReactiv:",p),(n,e)=>((0,t.uX)(),(0,t.CE)("div",T,[(0,t.Lk)("div",W,[(0,t.Lk)("div",X,[(0,t.Lk)("div",A,[(0,t.Lk)("div",E,[(0,t.Lk)("div",O,[(0,t.Lk)("button",{id:"big-add",class:"config-add-btn",style:{cursor:"pointer","margin-left":"0vw"},onClick:e[0]||(e[0]=n=>dn())},"Main Rectangle"),(0,t.Lk)("button",{id:"small-add",class:"config-add-btn",style:{cursor:"pointer","margin-left":"0vw"},onClick:e[1]||(e[1]=n=>rn())}," Cover Rectangle")]),(0,t.Lk)("div",$,[(0,t.Lk)("button",{class:(0,s.C4)(["config-btn",{"lazy-btn-activ":h.value}]),onClick:e[2]||(e[2]=n=>hn())},"i'm lazy",2)]),(0,t.Lk)("div",j,[(0,t.Lk)("button",{class:(0,s.C4)(["new-btn",{"finish-btn-activ":g.value}]),onClick:e[3]||(e[3]=n=>bn())},"New",2),(0,t.Lk)("button",{class:(0,s.C4)(["random-btn",{"random-btn-activ":m.value}]),onClick:e[4]||(e[4]=n=>pn())},"Random",2)])]),(0,t.Lk)("div",F,[(0,t.Lk)("button",{class:"explain-btn",onClick:e[5]||(e[5]=n=>mn())},"Explain"),(0,t.Lk)("button",{class:(0,s.C4)(["run-btn",{"run-btn-active":f.value,"run-btn-debaunce":k.value}]),onClick:e[6]||(e[6]=n=>gn()),disabled:f.value},(0,s.v_)(f.value?"Calculating":g.value?"Finished":"Run"),11,J)])])])]),(0,t.Lk)("div",U,[(0,t.bF)(w,{bounds:(0,i.R1)(a),mainBound:(0,i.R1)(o),answerBound:(0,i.R1)(d)},null,8,["bounds","mainBound","answerBound"])]),B.value?((0,t.uX)(),(0,t.Wv)(K,{key:0,onClose:e[12]||(e[12]=n=>B.value=!1)},{default:(0,t.k6)((()=>[(0,t.Lk)("div",V,[z,(0,t.Lk)("div",null,[(0,t.Lk)("div",q,[(0,t.eW)(" Top "),(0,t.bo)((0,t.Lk)("input",{class:"bound-input",type:"number","onUpdate:modelValue":e[7]||(e[7]=n=>(0,i.i9)(S)?S.value=n:S=n)},null,512),[[l.Jo,(0,i.R1)(S)]]),(0,t.eW)(" Bottom "),(0,t.bo)((0,t.Lk)("input",{class:"bound-input",type:"number","onUpdate:modelValue":e[8]||(e[8]=n=>(0,i.i9)(on)?on.value=n:on=n)},null,512),[[l.Jo,(0,i.R1)(on)]])]),(0,t.Lk)("div",I,[(0,t.eW)(" Left "),(0,t.bo)((0,t.Lk)("input",{class:"bound-input",type:"number","onUpdate:modelValue":e[9]||(e[9]=n=>(0,i.i9)(M)?M.value=n:M=n)},null,512),[[l.Jo,(0,i.R1)(M)]]),(0,t.eW)(" Right "),(0,t.bo)((0,t.Lk)("input",{class:"bound-input",type:"number","onUpdate:modelValue":e[10]||(e[10]=n=>(0,i.i9)(_)?_.value=n:_=n)},null,512),[[l.Jo,(0,i.R1)(_)]])])]),(0,t.Lk)("div",Y,[(0,t.Lk)("button",{class:"modal-add-btn",onClick:e[11]||(e[11]=n=>cn())},"Add")])])])),_:1})):(0,t.Q3)("",!0),L.value?((0,t.uX)(),(0,t.Wv)(K,{key:1,onClose:e[18]||(e[18]=n=>L.value=!1)},{default:(0,t.k6)((()=>[(0,t.Lk)("div",P,[Q,(0,t.Lk)("div",null,[(0,t.Lk)("div",H,[(0,t.eW)(" Top "),(0,t.bo)((0,t.Lk)("input",{class:"bound-input",type:"number","onUpdate:modelValue":e[13]||(e[13]=n=>(0,i.i9)(tn)?tn.value=n:tn=n)},null,512),[[l.Jo,(0,i.R1)(tn)]]),(0,t.eW)(" Bottom "),(0,t.bo)((0,t.Lk)("input",{class:"bound-input",type:"number","onUpdate:modelValue":e[14]||(e[14]=n=>(0,i.i9)(an)?an.value=n:an=n)},null,512),[[l.Jo,(0,i.R1)(an)]])]),(0,t.Lk)("div",D,[(0,t.eW)(" Left "),(0,t.bo)((0,t.Lk)("input",{class:"bound-input",type:"number","onUpdate:modelValue":e[15]||(e[15]=n=>(0,i.i9)(ln)?ln.value=n:ln=n)},null,512),[[l.Jo,(0,i.R1)(ln)]]),(0,t.eW)(" Right "),(0,t.bo)((0,t.Lk)("input",{class:"bound-input",type:"number","onUpdate:modelValue":e[16]||(e[16]=n=>(0,i.i9)(un)?un.value=n:un=n)},null,512),[[l.Jo,(0,i.R1)(un)]])])]),(0,t.Lk)("div",G,[(0,t.Lk)("button",{class:"modal-add-btn",onClick:e[17]||(e[17]=n=>vn())},"Add")])])])),_:1})):(0,t.Q3)("",!0),(0,t.bF)(l.eB,{name:"scale"},{default:(0,t.k6)((()=>[(0,t.bo)((0,t.Lk)("div",N,Z,512),[[l.aG,x.value]])])),_:1}),C.value?((0,t.uX)(),(0,t.CE)("div",nn," left should be smaller then rigth")):(0,t.Q3)("",!0),R.value?((0,t.uX)(),(0,t.CE)("div",en," Top should be bigger then Bottom")):(0,t.Q3)("",!0)]))}};const ln=on;var un=ln,tn={name:"App",components:{BoundApp:un}};const an=(0,M.A)(tn,[["render",a]]);var sn=an;const dn=(0,u.Ey)(),rn=(0,l.Ef)(sn);rn.use(dn),rn.mount("#app")}},e={};function o(l){var u=e[l];if(void 0!==u)return u.exports;var t=e[l]={exports:{}};return n[l].call(t.exports,t,t.exports,o),t.exports}o.m=n,function(){var n=[];o.O=function(e,l,u,t){if(!l){var a=1/0;for(r=0;r<n.length;r++){l=n[r][0],u=n[r][1],t=n[r][2];for(var i=!0,s=0;s<l.length;s++)(!1&t||a>=t)&&Object.keys(o.O).every((function(n){return o.O[n](l[s])}))?l.splice(s--,1):(i=!1,t<a&&(a=t));if(i){n.splice(r--,1);var d=u();void 0!==d&&(e=d)}}return e}t=t||0;for(var r=n.length;r>0&&n[r-1][2]>t;r--)n[r]=n[r-1];n[r]=[l,u,t]}}(),function(){o.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(e,{a:e}),e}}(),function(){o.d=function(n,e){for(var l in e)o.o(e,l)&&!o.o(n,l)&&Object.defineProperty(n,l,{enumerable:!0,get:e[l]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={524:0};o.O.j=function(e){return 0===n[e]};var e=function(e,l){var u,t,a=l[0],i=l[1],s=l[2],d=0;if(a.some((function(e){return 0!==n[e]}))){for(u in i)o.o(i,u)&&(o.m[u]=i[u]);if(s)var r=s(o)}for(e&&e(l);d<a.length;d++)t=a[d],o.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return o.O(r)},l=self["webpackChunklargest_square_game"]=self["webpackChunklargest_square_game"]||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var l=o.O(void 0,[504],(function(){return o(9519)}));l=o.O(l)})();
//# sourceMappingURL=app.bacf1390.js.map