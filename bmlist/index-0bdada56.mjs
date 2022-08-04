/*! build package in 2022/8/4 11:07:53 ! */
import{e as L,a as M,b as S,r as j,f as E,h as A,i as B,o as T,j as C,k as m,w as D,v as F,u as w,l as $,t as k,p as z,m as N,c as I}from"./entry-2c5c1b23.mjs";import{u as V,a as P}from"./useState-921ad52e.mjs";var U=()=>L;const u=c=>(z("data-v-b5b64f40"),c=c(),N(),c),R={class:"trend"},W=u(()=>m("div",{class:"chart-title"},"Big Model Trend",-1)),Y={style:{position:"relative"}},q=u(()=>m("div",{id:"trend-container",class:"chart-container"},null,-1)),G={class:"watermark"},H=u(()=>m("br",null,null,-1)),J=$(" @OpenBMB "),K=S({__name:"Trend",setup(c){let p,d=j(""),i;const h=V();h.value={loading:!0,isLoadFailed:!1};const x=E(),O=()=>{var _;return fetch(`${(_=x==null?void 0:x.app)==null?void 0:_.baseURL}all_models.json`).then(l=>l.json()).then(l=>{var f;h.value={loading:!1,isLoadFailed:!1},d.value=(f=l==null?void 0:l[0])==null?void 0:f.last_updated,i=l.reduce((e,a,n)=>{var v,y,b;if(n==0)return e;const o=+new Date(a.release_date);let t=new Array;return a.parameters_dense&&(a.parameters_max_dense=Math.max.call(null,...(v=a.parameters_dense)==null?void 0:v.map(s=>Number(s.replace("~","").replace("B",""))))),a.parameters_MoE&&(a.parameters_max_moe=Math.max.call(null,...(y=a.parameters_MoE)==null?void 0:y.map(s=>Number(s.replace("~","").replace("B",""))))),a.domain.includes("Text")&&((b=a.language)==null||b.forEach(s=>{if(["English","Chinese","Multilingual"].includes(s))if(e[`Text (${s})`]||(e[`Text (${s})`]=[]),a.parameters_dense&&a.parameters_MoE)t=[o,Math.log2(a.parameters_max_dense),a.parameters_max_dense,...Object.values(a)],e[`Text (${s})`].push(t),t=new Array,t=[o,Math.log2(a.parameters_max_moe),a.parameters_max_moe,...Object.values(a)],e[`Text (${s})`].push(t);else{const r=a.parameters_max_dense||a.parameters_max_moe;t=[o,Math.log2(r),r,...Object.values(a)],e[`Text (${s})`].push(t)}else if(e["Text (Others)"]||(e["Text (Others)"]=[]),a.parameters_dense&&a.parameters_MoE)t=[o,Math.log2(a.parameters_max_dense),a.parameters_max_dense,...Object.values(a)],e["Text (Others)"].push(t),t=new Array,t=[o,Math.log2(a.parameters_max_moe),a.parameters_max_moe,...Object.values(a)],e["Text (Others)"].push(t);else{const r=a.parameters_max_dense||a.parameters_max_moe;t=[o,Math.log2(r),r,...Object.values(a)],e["Text (Others)"].push(t)}})),a.domain.forEach(s=>{if(s!=="Text")if(e[s]||(e[s]=[]),a.parameters_dense&&a.parameters_MoE)t=[o,Math.log2(a.parameters_max_dense),a.parameters_max_dense,...Object.values(a)],e[s].push(t),t=new Array,t=[o,Math.log2(a.parameters_max_moe),a.parameters_max_moe,...Object.values(a)],e[s].push(t);else{const r=a.parameters_max_dense||a.parameters_max_moe;t=[o,Math.log2(r),r,...Object.values(a)],e[s].push(t)}}),e},{})}).catch(()=>{i=[],h.value={loading:!0,isLoadFailed:!0}})},g={"Text (English)":"#459F48","Text (Chinese)":"#F8B947","Text (Multilingual)":"#2F2EFC","Text (Others)":"#FC832E",Vision:"#953ACE",Audio:"#E63D2A",Code:"#A57041",Protein:"#4BB2EE"};return A(()=>{setTimeout(async()=>{p=U().init(document.getElementById("trend-container")),await O(),console.log(Object.keys(i));let l={tooltip:{show:!0,formatter(e){return`<div style="display:flex;flex-direction:column;row-gap:2px;">
                    <div class="flex-row" >
                      <span class="canvas-tooltip__circle" style="--canvas-tooltip__color:${e.color}"></span>
                      <span style="margin-right: 8px;">Time: </span>
                      <span style="margin-inline-start: auto;">${e.data[4]}</span>
                    </div>
                    <div class="flex-row" >
                      <span class="canvas-tooltip__circle" style="--canvas-tooltip__color:${e.color}"></span>
                      <span style="margin-right: 8px;">Name: </span>
                      <span style="margin-inline-start: auto;"> ${e.data[3]}  </span>
                    </div>
                    <div class="flex-row" >
                      <span class="canvas-tooltip__circle" style="--canvas-tooltip__color:${e.color}"></span>
                      <span style="margin-right: 8px;">Affiliation: </span>
                      <span style="margin-inline-start: auto;">${e.data[5].join(",  ")}  </span>
                    </div>
                    <div class="flex-row" >
                      <span class="canvas-tooltip__circle" style="--canvas-tooltip__color:${e.color}"></span>
                      <span style="margin-right: 8px;">Parameters: </span>
                      <span style="margin-inline-start: auto;">${Math.ceil(e.data[2]*100)/100} B </span>
                    </div>
            </div>`}},legend:{data:[...Object.keys(i).filter(e=>e.includes("Text")),...Object.keys(i).filter(e=>!e.includes("Text")).sort()],top:10},grid:{bottom:88,left:68,right:48},xAxis:{type:"time",interval:24*60*60*1e3*30,min(e){return e.min-24*60*60*1e3*30},max(e){return e.max+24*60*60*1e3*30*2},splitLine:{show:!0,lineStyle:{color:"#fff",alignWithLabel:!0}},axisTick:{show:!1,alignWithLabel:!0},axisLine:{show:!1},axisLabel:{showMinLabel:!0,formatter(e,a){if(a%3===0)return`${new Date(e).getFullYear()}-${new Date(e).getMonth()+1}`}}},yAxis:{type:"value",min:-1,splitLine:{show:!0,lineStyle:{color:"#fff"}},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,formatter(e){return`{a|2}{b|${e}}`},rich:{b:{fontSize:10,padding:[10,0,0,2]}}}},series:Object.keys(i).map(e=>{var a;return{name:e,data:i[e],type:"scatter",symbolSize:function(n){return n[1]*3+10},label:{show:!1,formatter:function(n){return n.data[3]},rotate:45,color:"#000",fontSize:8},itemStyle:{color:(a=g[e])!=null?a:`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`},emphasis:{label:{show:!0,formatter:function(n){return n.data[3]},rotate:0,position:"top",fontSize:14}}}})};P().value&&(l={tooltip:{show:!0,formatter(e){return`<div style="display:flex;flex-direction:column;row-gap:2px;">
                    <div class="flex-row" >
                      <span class="canvas-tooltip__circle" style="--canvas-tooltip__color:${e.color}"></span>
                      <span style="margin-right: 8px;">Time: </span>
                      <span style="margin-inline-start: auto;">${e.data[4]}</span>
                    </div>
                    <div class="flex-row" >
                      <span class="canvas-tooltip__circle" style="--canvas-tooltip__color:${e.color}"></span>
                      <span style="margin-right: 8px;">Name: </span>
                      <span style="margin-inline-start: auto;"> ${e.data[3]}  </span>
                    </div>
                    <div class="flex-row" >
                      <span class="canvas-tooltip__circle" style="--canvas-tooltip__color:${e.color}"></span>
                      <span style="margin-right: 8px;">Affiliation: </span>
                      <span style="margin-inline-start: auto;">${e.data[5].join(",  ")}  </span>
                    </div>
                    <div class="flex-row" >
                      <span class="canvas-tooltip__circle" style="--canvas-tooltip__color:${e.color}"></span>
                      <span style="margin-right: 8px;">Parameters: </span>
                      <span style="margin-inline-start: auto;">${Math.ceil(e.data[2]*100)/100} B </span>
                    </div>
            </div>`},extraCssText:"transform:rotate(90deg)"},grid:{top:140,bottom:48,left:68},legend:{data:["Text (English)","Text (Chinese)","Text (Multilingual)","Text (Others)","Vision","Audio","Code"],top:10},xAxis:{type:"value",position:"top",splitLine:{show:!0,lineStyle:{color:"#fff"}},axisLabel:{show:!0,rotate:90,formatter(e){return`{a|2}{b|${e}}`},rich:{b:{fontSize:10,padding:[10,0,0,2]}}}},yAxis:{type:"time",inverse:!0,interval:24*60*60*1e3*30,min(e){return e.min-24*60*60*1e3*30},max(e){return e.max+24*60*60*1e3*30*2},splitLine:{show:!0,lineStyle:{color:"#fff"}},axisLabel:{rotate:-45,showMinLabel:!0,formatter(e,a){if(a%3===0)return`${new Date(e).getFullYear()}-${new Date(e).getMonth()+1}`}}},series:Object.keys(i).map(e=>({name:e,data:i[e].map(a=>{const n=a[0],o=a[1];return a[0]=o,a[1]=n,a}).reverse(),type:"scatter",symbolSize:function(a){return a[0]*2+2},label:{show:!1,formatter:function(a){return a.data[3]},rotate:45,color:"#000",fontSize:8},itemStyle:{color:g[e]}}))}),p.setOption(l),window.onresize=()=>{p.resize()}},1e3)}),B(()=>{p==null||p.dispose()}),(_,l)=>(T(),C("div",R,[W,m("div",Y,[q,D(m("div",G,[$(" Last updated: "+k(w(d))+" ",1),H,J],512),[[F,w(d)!=""]])])]))}});var Q=M(K,[["__scopeId","data-v-b5b64f40"]]);const X={};function Z(c,p){const d=Q;return T(),I(d)}var te=M(X,[["render",Z]]);export{te as default};
