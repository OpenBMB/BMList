/*! build package in 2022/8/3 14:29:55 ! */
import{e as O,a as M,b as S,r as E,f as j,h as A,i as B,o as $,j as C,k as m,w as D,v as F,u as b,l as T,t as z,p as k,m as N,c as I}from"./entry-f5baa1b3.mjs";import{u as V,a as P}from"./useState-775bb93e.mjs";var U=()=>O;const u=c=>(k("data-v-18412cb0"),c=c(),N(),c),R={class:"trend"},W=u(()=>m("div",{class:"chart-title"},"Big Model Trend",-1)),Y={style:{position:"relative"}},q=u(()=>m("div",{id:"trend-container",class:"chart-container"},null,-1)),G={class:"watermark"},H=u(()=>m("br",null,null,-1)),J=T(" @OpenBMB "),K=S({__name:"Trend",setup(c){let r,d=E(""),p;const h=V();h.value={loading:!0,isLoadFailed:!1};const x=j(),L=()=>{var _;return fetch(`${(_=x==null?void 0:x.app)==null?void 0:_.baseURL}all_models.json`).then(i=>i.json()).then(i=>{var f;h.value={loading:!1,isLoadFailed:!1},d.value=(f=i==null?void 0:i[0])==null?void 0:f.last_updated,p=i.reduce((e,a,l)=>{var v,y,w;if(l==0)return e;const o=+new Date(a.release_date);let t=new Array;return a.parameters_dense&&(a.parameters_max_dense=Math.max.call(null,...(v=a.parameters_dense)==null?void 0:v.map(s=>Number(s.replace("~","").replace("B",""))))),a.parameters_MoE&&(a.parameters_max_moe=Math.max.call(null,...(y=a.parameters_MoE)==null?void 0:y.map(s=>Number(s.replace("~","").replace("B",""))))),a.domain.includes("Text")&&((w=a.language)==null||w.forEach(s=>{if(["English","Chinese","Multilingual"].includes(s))if(e[`Text (${s})`]||(e[`Text (${s})`]=[]),a.parameters_dense&&a.parameters_MoE)t=[o,Math.log2(a.parameters_max_dense),a.parameters_max_dense,...Object.values(a)],e[`Text (${s})`].push(t),t=new Array,t=[o,Math.log2(a.parameters_max_moe),a.parameters_max_moe,...Object.values(a)],e[`Text (${s})`].push(t);else{const n=a.parameters_max_dense||a.parameters_max_moe;t=[o,Math.log2(n),n,...Object.values(a)],e[`Text (${s})`].push(t)}else if(e["Text (Others)"]||(e["Text (Others)"]=[]),a.parameters_dense&&a.parameters_MoE)t=[o,Math.log2(a.parameters_max_dense),a.parameters_max_dense,...Object.values(a)],e["Text (Others)"].push(t),t=new Array,t=[o,Math.log2(a.parameters_max_moe),a.parameters_max_moe,...Object.values(a)],e["Text (Others)"].push(t);else{const n=a.parameters_max_dense||a.parameters_max_moe;t=[o,Math.log2(n),n,...Object.values(a)],e["Text (Others)"].push(t)}})),a.domain.forEach(s=>{if(s!=="Text")if(e[s]||(e[s]=[]),a.parameters_dense&&a.parameters_MoE)t=[o,Math.log2(a.parameters_max_dense),a.parameters_max_dense,...Object.values(a)],e[s].push(t),t=new Array,t=[o,Math.log2(a.parameters_max_moe),a.parameters_max_moe,...Object.values(a)],e[s].push(t);else{const n=a.parameters_max_dense||a.parameters_max_moe;t=[o,Math.log2(n),n,...Object.values(a)],e[s].push(t)}}),e},{})}).catch(()=>{p=[],h.value={loading:!0,isLoadFailed:!0}})},g={"Text (English)":"#459F48","Text (Chinese)":"#F8B947","Text (Multilingual)":"#2F2EFC","Text (Others)":"#FC832E",Vision:"#953ACE",Audio:"#E63D2A",Code:"#A57041",Protein:"#4BB2EE"};return A(()=>{setTimeout(async()=>{r=U().init(document.getElementById("trend-container")),await L();let i={tooltip:{show:!0,formatter(e){return`<div style="display:flex;flex-direction:column;row-gap:2px;">
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
            </div>`}},legend:{data:Object.keys(p),top:10},grid:{bottom:88,left:68,right:48},xAxis:{type:"time",interval:24*60*60*1e3*30,min(e){return e.min-24*60*60*1e3*30},max(e){return e.max+24*60*60*1e3*30*2},splitLine:{show:!0,lineStyle:{color:"#fff",alignWithLabel:!0}},axisTick:{show:!1,alignWithLabel:!0},axisLine:{show:!1},axisLabel:{showMinLabel:!0,formatter(e,a){if(a%3===0)return`${new Date(e).getFullYear()}-${new Date(e).getMonth()+1}`}}},yAxis:{type:"value",min:-1,splitLine:{show:!0,lineStyle:{color:"#fff"}},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,formatter(e){return`{a|2}{b|${e}}`},rich:{b:{fontSize:10,padding:[10,0,0,2]}}}},series:Object.keys(p).map(e=>{var a;return{name:e,data:p[e],type:"scatter",symbolSize:function(l){return l[1]*3+10},label:{show:!1,formatter:function(l){return l.data[3]},rotate:45,color:"#000",fontSize:8},itemStyle:{color:(a=g[e])!=null?a:`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`},emphasis:{label:{show:!0,formatter:function(l){return l.data[3]},rotate:0,position:"top",fontSize:14}}}})};P().value&&(i={tooltip:{show:!0,formatter(e){return`<div style="display:flex;flex-direction:column;row-gap:2px;">
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
            </div>`},extraCssText:"transform:rotate(90deg)"},grid:{top:140,bottom:48,left:68},legend:{data:["Text (English)","Text (Chinese)","Text (Multilingual)","Text (Others)","Vision","Audio","Code"],top:10},xAxis:{type:"value",position:"top",splitLine:{show:!0,lineStyle:{color:"#fff"}},axisLabel:{show:!0,rotate:90,formatter(e){return`{a|2}{b|${e}}`},rich:{b:{fontSize:10,padding:[10,0,0,2]}}}},yAxis:{type:"time",inverse:!0,interval:24*60*60*1e3*30,min(e){return e.min-24*60*60*1e3*30},max(e){return e.max+24*60*60*1e3*30*2},splitLine:{show:!0,lineStyle:{color:"#fff"}},axisLabel:{rotate:-45,showMinLabel:!0,formatter(e,a){if(a%3===0)return`${new Date(e).getFullYear()}-${new Date(e).getMonth()+1}`}}},series:Object.keys(p).map(e=>({name:e,data:p[e].map(a=>{const l=a[0],o=a[1];return a[0]=o,a[1]=l,a}).reverse(),type:"scatter",symbolSize:function(a){return a[0]*2+2},label:{show:!1,formatter:function(a){return a.data[3]},rotate:45,color:"#000",fontSize:8},itemStyle:{color:g[e]}}))}),r.setOption(i),window.onresize=()=>{r.resize()}},1e3)}),B(()=>{r==null||r.dispose()}),(_,i)=>($(),C("div",R,[W,m("div",Y,[q,D(m("div",G,[T(" Last updated: "+z(b(d))+" ",1),H,J],512),[[F,b(d)!=""]])])]))}});var Q=M(K,[["__scopeId","data-v-18412cb0"]]);const X={};function Z(c,r){const d=Q;return $(),I(d)}var te=M(X,[["render",Z]]);export{te as default};
