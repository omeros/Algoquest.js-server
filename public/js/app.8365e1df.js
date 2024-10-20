(function(){"use strict";var n={3830:function(n,e,o){var u=o(5130),l=o(3367),t=o(6768);function a(n,e,o,u,l,a){const i=(0,t.g2)("BoundApp");return(0,t.uX)(),(0,t.Wv)(i)}var i=o(144),s=o(4232),d=o(8047),r=o.n(d);const c="/api/";var v=r().create({withCredentials:!0});const p={postBoundToAlgoquest:b};async function b(n,e){const o=`${c}algoquest`,u={mainBound:n,bounds:e};return v.post(o,u).then((n=>(console.log("Post created successfully:",n.data),n.data))).catch((n=>{console.error("Error creating post:",n.message)}))}var f={__name:"bound-preview",props:{bound:Object,main:{type:Boolean,default:!1},answer:{type:Boolean,default:!1}},setup(n){const e=n,o=(0,i.KR)(null),u=(0,i.KR)({position:"absolute",width:"0px",height:"0px",top:"0px",left:"0px",border:"",backgroundColor:"",zIndex:"1"}),l=(0,i.KR)(""),a=(0,i.KR)(""),d=(0,i.KR)("1");function r(n){const e=n.right-n.left,l=n.up-n.down,t=(n.left+n.right)/2,a=(n.up+n.down)/2;u.value.width=`${e}px`,u.value.height=`${l}px`,u.value.left=t-e/2+"px",u.value.top=a-l/2+"px",o.value&&(o.value.classList.remove("scale-in"),o.value.offsetWidth,o.value.classList.add("scale-in"))}function c(n,e){const o=Math.ceil(n),u=Math.floor(e);return Math.floor(Math.random()*(u-o)+o)}return(0,t.nT)((()=>{if(e.answer)a.value="transparent",l.value="5px dashed black",d.value="10",u.value.backgroundColor=a.value,u.value.border=l.value,u.value.zIndex=d.value;else{if(e.main)a.value="#2d68f2",l.value="2px solid black",d.value="1";else{const n=c(0,255),e=c(0,255),o=c(0,255);a.value=`rgba(${n}, ${e}, ${o}, 0.9)`,l.value="2px solid black",d.value="1"}if(u.value.backgroundColor=a.value,u.value.border=l.value,u.value.zIndex=d.value,e.bound){const n=e.bound.right-e.bound.left,o=e.bound.up-e.bound.down;u.value.width=`${n}px`,u.value.height=`${o}px`,u.value.top=`${e.bound.down}px`,u.value.left=`${e.bound.left}px`}o.value&&o.value.classList.remove("scale-in")}})),(0,t.wB)((()=>e.bound),(n=>{e.answer&&n&&r(n)}),{immediate:!0,deep:!0}),(n,e)=>((0,t.uX)(),(0,t.CE)("div",{ref_key:"elementRef",ref:o,class:"my-element",style:(0,s.Tr)(u.value)},null,4))}};const g=f;var h=g;const m={class:"bound-list-container"};var B={__name:"bound-list",props:{bounds:{type:Array,default:()=>[]},mainBound:{type:Object,default:()=>({})},answerBound:{type:Object,default:()=>({})}},setup(n){const e=n;return(n,o)=>((0,t.uX)(),(0,t.CE)("div",m,[(0,t.bF)(h,{bound:e.answerBound,main:!1,answer:!0},null,8,["bound"]),(0,t.bF)(h,{bound:e.mainBound,main:!0,answer:!1},null,8,["bound"]),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.bounds,((n,e)=>((0,t.uX)(),(0,t.CE)("div",{key:e},[(0,t.bF)(h,{bound:n,main:!1,answer:!1},null,8,["bound"])])))),128))]))}};const w=B;var y=w;o(4114);const k=(0,l.nY)("bound.store",{state:()=>({mainBound:{left:null,right:null,up:null,down:null},bounds:[],answerBound:{left:null,right:null,up:null,down:null}}),getters:{getBounds:n=>(console.log("store - getBounds- state.bounds:",n.bounds),n.bounds),getMainBound:n=>(console.log("store - getMainBound- state.mainBound:",n.mainBound),n.mainBound)},actions:{addCoverBound(n){console.log("store addCoverBound-this.bounds:",this.bounds),this.bounds.push(n)},addCoverBounds(n){this.bounds=n},addMainBound(n){console.log("store addMainBound-this.mainBound1:",this.mainBound),this.mainBound=n,console.log("store addMainBound-this.mainBound2:",this.mainBound)},clearBounds(){this.mainBound={left:null,right:null,up:null,down:null},this.answerBound={left:null,right:null,up:null,down:null},this.bounds=[]},updateAnswerBound(n){console.log("updateAnswerBound:",n),this.answerBound=n}},sendDataToAgoquest(){}}),L={class:"body"},R={class:"header-container"},C={class:"header"},x={class:"input-container",style:{padding:"1.5vw 1vw"}},M={style:{display:"flex"}},O={style:{display:"flex"}},T={class:"btn-container"},K={class:"add-rec-btn",style:{}},W={class:"defalutMainbound"},E={class:"config-btn-container"},_={class:"run-btn-container"},A=["disabled"],$={style:{height:"82vh"}};var U={__name:"bound-app",setup(n){(0,u.$9)((n=>({"14c1383c":(0,i.R1)(c),"5445aca9":r.value}))),(0,t.hi)((()=>{q&&clearTimeout(q)}));const e=k(),{mainBound:o,bounds:a,answerBound:d}=(0,l.bP)(e),r=(0,i.KR)("lightgrey");let c="lightgrey";const v=(0,i.Kh)(a),b=(0,i.KR)(!1),f=(0,i.KR)(!1),g=(0,i.KR)(!0),h=(0,i.KR)(!1),m=(0,i.KR)(!1);let B,w,U,X,j,F,J,V,q=null;function I(){console.log("mainBoundX1:",B),console.log("mainBoundX2:",w),console.log("mainBoundY1:",U),console.log("mainBoundY2:",X);const n={left:B,right:w,up:U,down:X};e.addMainBound(n)}function P(){console.log("coverBoundX1:",j),console.log("coverBoundX2:",F),console.log("coverBoundY1:",J),console.log("coverBoundY2:",V);const n={left:j,right:F,up:J,down:V};e.addCoverBound(n)}function z(){f.value=!1,h.value=!1,g.value=!0,m.value=!1,e.clearBounds()}function Y(){h.value=!0,q&&clearTimeout(q),m.value=!1,q=setTimeout((()=>{m.value=!0,h.value=!1,r.value="lightgreen"}),2e3);const n=window.innerWidth,o=window.innerHeight,u=D(0,n),l=D(0,u),t=D(0,o),a=D(0,t);console.log(l,a);const i={left:l,right:u,up:t,down:a};e.addCoverBound(i)}function D(n,e){const o=Math.ceil(n),u=Math.floor(e);return Math.floor(Math.random()*(u-o)+o)}async function H(){if(console.log("run function!"),r.value="rgb(247, 3, 15)",h.value=!1,f.value=!1,m.value=!1,clearTimeout(q),b.value)console.log("calculation in progress!");else try{console.log(" run function - !isCalculate"),b.value=!0;const n=await p.postBoundToAlgoquest(o.value,a.value);e.updateAnswerBound(n),b.value=!1,f.value=!0,m.value=!1}catch(n){console.error("Error running bound service:",n)}finally{r.value="lightgreen",setTimeout((()=>{r.value="lightgrey"}),500)}}function N(){g.value=!1,h.value=!0;const n={left:0,right:1850,up:700,down:0};e.addMainBound(n)}return console.log("boundsReactiv:",v),(n,e)=>((0,t.uX)(),(0,t.CE)("div",L,[(0,t.Lk)("div",R,[(0,t.Lk)("div",C,[(0,t.Lk)("div",x,[(0,t.Lk)("div",M,[(0,t.Lk)("div",null,[(0,t.eW)(" LEFT "),(0,t.bo)((0,t.Lk)("input",{class:"bound-input",type:"number","onUpdate:modelValue":e[0]||(e[0]=n=>(0,i.i9)(B)?B.value=n:B=n)},null,512),[[u.Jo,(0,i.R1)(B)]]),(0,t.eW)(" RIGHT "),(0,t.bo)((0,t.Lk)("input",{class:"bound-input",type:"number","onUpdate:modelValue":e[1]||(e[1]=n=>(0,i.i9)(w)?w.value=n:w=n)},null,512),[[u.Jo,(0,i.R1)(w)]]),(0,t.eW)(" UP "),(0,t.bo)((0,t.Lk)("input",{class:"bound-input",type:"number","onUpdate:modelValue":e[2]||(e[2]=n=>(0,i.i9)(U)?U.value=n:U=n)},null,512),[[u.Jo,(0,i.R1)(U)]]),(0,t.eW)(" DOWN "),(0,t.bo)((0,t.Lk)("input",{class:"bound-input",type:"number","onUpdate:modelValue":e[3]||(e[3]=n=>(0,i.i9)(X)?X.value=n:X=n)},null,512),[[u.Jo,(0,i.R1)(X)]])])]),(0,t.Lk)("div",O,[(0,t.Lk)("div",null,[(0,t.eW)(" LEFT "),(0,t.bo)((0,t.Lk)("input",{class:"bound-input",type:"number","onUpdate:modelValue":e[4]||(e[4]=n=>(0,i.i9)(j)?j.value=n:j=n)},null,512),[[u.Jo,(0,i.R1)(j)]]),(0,t.eW)(" RIGHT "),(0,t.bo)((0,t.Lk)("input",{class:"bound-input",type:"number","onUpdate:modelValue":e[5]||(e[5]=n=>(0,i.i9)(F)?F.value=n:F=n)},null,512),[[u.Jo,(0,i.R1)(F)]]),(0,t.eW)(" UP "),(0,t.bo)((0,t.Lk)("input",{class:"bound-input",type:"number","onUpdate:modelValue":e[6]||(e[6]=n=>(0,i.i9)(J)?J.value=n:J=n)},null,512),[[u.Jo,(0,i.R1)(J)]]),(0,t.eW)(" DOWN "),(0,t.bo)((0,t.Lk)("input",{class:"bound-input",type:"number","onUpdate:modelValue":e[7]||(e[7]=n=>(0,i.i9)(V)?V.value=n:V=n)},null,512),[[u.Jo,(0,i.R1)(V)]])])])]),(0,t.Lk)("div",T,[(0,t.Lk)("div",K,[(0,t.Lk)("button",{id:"big-add",class:"config-btn",style:{cursor:"pointer","margin-left":"0vw"},onClick:e[8]||(e[8]=n=>I())},"Main Rectangle"),(0,t.Lk)("button",{id:"small-add",class:"config-btn",style:{cursor:"pointer","margin-left":"0vw"},onClick:e[9]||(e[9]=n=>P())}," Cover Rectangle")]),(0,t.Lk)("div",W,[(0,t.Lk)("button",{class:(0,s.C4)(["config-btn",{"lazy-btn-activ":g.value}]),onClick:e[10]||(e[10]=n=>N())},"i'm lazy",2)]),(0,t.Lk)("div",E,[(0,t.Lk)("button",{class:(0,s.C4)(["config-btn",{"finish-btn-activ":f.value}]),onClick:e[11]||(e[11]=n=>z())},"New",2),(0,t.Lk)("button",{class:(0,s.C4)(["config-btn",{"random-btn-activ":h.value}]),onClick:e[12]||(e[12]=n=>Y())},"Random",2)]),(0,t.Lk)("div",_,[(0,t.Lk)("button",{class:(0,s.C4)(["run-btn",{"run-btn-active":b.value,"run-btn-debaunce":m.value}]),onClick:e[13]||(e[13]=n=>H()),disabled:b.value},(0,s.v_)(b.value?"Calculating":f.value?"Finished":"Run"),11,A)])])])]),(0,t.Lk)("div",$,[(0,t.bF)(y,{bounds:(0,i.R1)(a),mainBound:(0,i.R1)(o),answerBound:(0,i.R1)(d)},null,8,["bounds","mainBound","answerBound"])])]))}};const X=U;var j=X,F={name:"App",components:{BoundApp:j}},J=o(1241);const V=(0,J.A)(F,[["render",a]]);var q=V;const I=(0,l.Ey)(),P=(0,u.Ef)(q);P.use(I),P.mount("#app")}},e={};function o(u){var l=e[u];if(void 0!==l)return l.exports;var t=e[u]={exports:{}};return n[u].call(t.exports,t,t.exports,o),t.exports}o.m=n,function(){var n=[];o.O=function(e,u,l,t){if(!u){var a=1/0;for(r=0;r<n.length;r++){u=n[r][0],l=n[r][1],t=n[r][2];for(var i=!0,s=0;s<u.length;s++)(!1&t||a>=t)&&Object.keys(o.O).every((function(n){return o.O[n](u[s])}))?u.splice(s--,1):(i=!1,t<a&&(a=t));if(i){n.splice(r--,1);var d=l();void 0!==d&&(e=d)}}return e}t=t||0;for(var r=n.length;r>0&&n[r-1][2]>t;r--)n[r]=n[r-1];n[r]=[u,l,t]}}(),function(){o.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(e,{a:e}),e}}(),function(){o.d=function(n,e){for(var u in e)o.o(e,u)&&!o.o(n,u)&&Object.defineProperty(n,u,{enumerable:!0,get:e[u]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={524:0};o.O.j=function(e){return 0===n[e]};var e=function(e,u){var l,t,a=u[0],i=u[1],s=u[2],d=0;if(a.some((function(e){return 0!==n[e]}))){for(l in i)o.o(i,l)&&(o.m[l]=i[l]);if(s)var r=s(o)}for(e&&e(u);d<a.length;d++)t=a[d],o.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return o.O(r)},u=self["webpackChunksquare_game"]=self["webpackChunksquare_game"]||[];u.forEach(e.bind(null,0)),u.push=e.bind(null,u.push.bind(u))}();var u=o.O(void 0,[504],(function(){return o(3830)}));u=o.O(u)})();
//# sourceMappingURL=app.8365e1df.js.map