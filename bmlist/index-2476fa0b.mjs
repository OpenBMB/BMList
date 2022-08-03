/*! build package in 2022/8/3 10:54:34 ! */
import{e as O,a as T,b as S,r as j,f as A,h as E,i as B,o as M,j as C,k as d,w as z,v as D,u as b,l as $,t as k,p as N,m as F,c as I}from"./entry-296af46b.mjs";import{u as V,a as U}from"./useState-8f5c17a4.mjs";var P=()=>O;const u=p=>(N("data-v-b1d9524c"),p=p(),F(),p),R={class:"trend"},W=u(()=>d("div",{class:"chart-title"},"Big Model Trend",-1)),Y={style:{position:"relative"}},q=u(()=>d("div",{id:"trend-container",class:"chart-container"},null,-1)),G={class:"watermark"},H=u(()=>d("br",null,null,-1)),J=$(" @OpenBMB "),K=S({__name:"Trend",setup(p){let n,c=j(""),r;const m=V();m.value={loading:!0,isLoadFailed:!1};const f=A(),L=()=>{var _;return fetch(`${(_=f==null?void 0:f.app)==null?void 0:_.baseURL}all_models.json`).then(i=>i.json()).then(i=>{var h;m.value={loading:!1,isLoadFailed:!1},c.value=(h=i==null?void 0:i[0])==null?void 0:h.last_updated,r=i.reduce((a,e,x)=>{var v,y,w;if(x==0)return a;const o=+new Date(e.release_date);let t=new Array;return e.parameters_dense&&(e.parameters_max_dense=Math.max.call(null,...(v=e.parameters_dense)==null?void 0:v.map(s=>Number(s.replace("~","").replace("B",""))))),e.parameters_MoE&&(e.parameters_max_moe=Math.max.call(null,...(y=e.parameters_MoE)==null?void 0:y.map(s=>Number(s.replace("~","").replace("B",""))))),e.domain.includes("Text")&&((w=e.language)==null||w.forEach(s=>{if(["English","Chinese","Multilingual"].includes(s))if(a[`Text (${s})`]||(a[`Text (${s})`]=[]),e.parameters_dense&&e.parameters_MoE)t=[o,Math.log2(e.parameters_max_dense),e.parameters_max_dense,...Object.values(e)],a[`Text (${s})`].push(t),t=new Array,t=[o,Math.log2(e.parameters_max_moe),e.parameters_max_moe,...Object.values(e)],a[`Text (${s})`].push(t);else{const l=e.parameters_max_dense||e.parameters_max_moe;t=[o,Math.log2(l),l,...Object.values(e)],a[`Text (${s})`].push(t)}else if(a["Text (Others)"]||(a["Text (Others)"]=[]),e.parameters_dense&&e.parameters_MoE)t=[o,Math.log2(e.parameters_max_dense),e.parameters_max_dense,...Object.values(e)],a["Text (Others)"].push(t),t=new Array,t=[o,Math.log2(e.parameters_max_moe),e.parameters_max_moe,...Object.values(e)],a["Text (Others)"].push(t);else{const l=e.parameters_max_dense||e.parameters_max_moe;t=[o,Math.log2(l),l,...Object.values(e)],a["Text (Others)"].push(t)}})),e.domain.forEach(s=>{if(s!=="Text")if(a[s]||(a[s]=[]),e.parameters_dense&&e.parameters_MoE)t=[o,Math.log2(e.parameters_max_dense),e.parameters_max_dense,...Object.values(e)],a[s].push(t),t=new Array,t=[o,Math.log2(e.parameters_max_moe),e.parameters_max_moe,...Object.values(e)],a[s].push(t);else{const l=e.parameters_max_dense||e.parameters_max_moe;t=[o,Math.log2(l),l,...Object.values(e)],a[s].push(t)}}),a},{})}).catch(()=>{r=[],m.value={loading:!0,isLoadFailed:!0}})},g={"Text (English)":"#459f48","Text (Chinese)":"#f8b947","Text (Multilingual)":"#2f2efc","Text (Others)":"#f8f849",Vision:"#fc1515",Audio:"#8a148a",Code:"#45f8fb"};return E(()=>{setTimeout(async()=>{n=P().init(document.getElementById("trend-container")),await L();let i={tooltip:{show:!0,formatter(a){return`<div style="display:flex;flex-direction:column;row-gap:2px;">
                    <div class="flex-row" >
                      <span class="canvas-tooltip__circle" style="--canvas-tooltip__color:${a.color}"></span>
                      <span style="margin-right: 8px;">Time: </span>
                      <span style="margin-inline-start: auto;">${a.data[4]}</span>
                    </div>
                    <div class="flex-row" >
                      <span class="canvas-tooltip__circle" style="--canvas-tooltip__color:${a.color}"></span>
                      <span style="margin-right: 8px;">Name: </span>
                      <span style="margin-inline-start: auto;"> ${a.data[3]}  </span>
                    </div>
                    <div class="flex-row" >
                      <span class="canvas-tooltip__circle" style="--canvas-tooltip__color:${a.color}"></span>
                      <span style="margin-right: 8px;">Affiliation: </span>
                      <span style="margin-inline-start: auto;">${a.data[5].join(",  ")}  </span>
                    </div>
                    <div class="flex-row" >
                      <span class="canvas-tooltip__circle" style="--canvas-tooltip__color:${a.color}"></span>
                      <span style="margin-right: 8px;">Parameters: </span>
                      <span style="margin-inline-start: auto;">${Math.ceil(a.data[2]*100)/100} B </span>
                    </div>
            </div>`}},legend:{data:["Text (English)","Text (Chinese)","Text (Multilingual)","Text (Others)","Vision","Audio","Code"],top:10},grid:{bottom:88,left:68,right:48},xAxis:{type:"time",interval:24*60*60*1e3*30,min(a){return a.min-24*60*60*1e3*30},max(a){return a.max+24*60*60*1e3*30*2},splitLine:{show:!0,lineStyle:{color:"#fff",alignWithLabel:!0}},axisTick:{show:!1,alignWithLabel:!0},axisLine:{show:!1},axisLabel:{showMinLabel:!0,formatter(a,e){if(e%3===0)return`${new Date(a).getFullYear()}-${new Date(a).getMonth()+1}`}}},yAxis:{type:"value",min:-1,splitLine:{show:!0,lineStyle:{color:"#fff"}},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,formatter(a){return`{a|2}{b|${a}}`},rich:{b:{fontSize:10,padding:[10,0,0,2]}}}},series:Object.keys(r).map(a=>({name:a,data:r[a],type:"scatter",symbolSize:function(e){return e[1]*3+10},label:{show:!1,formatter:function(e){return e.data[3]},rotate:45,color:"#000",fontSize:8},itemStyle:{color:g[a]},emphasis:{label:{show:!0,formatter:function(e){return e.data[3]},rotate:0,position:"top",fontSize:14}}}))};U().value&&(i={tooltip:{show:!0,formatter(a){return`<div style="display:flex;flex-direction:column;row-gap:2px;">
                    <div class="flex-row" >
                      <span class="canvas-tooltip__circle" style="--canvas-tooltip__color:${a.color}"></span>
                      <span style="margin-right: 8px;">Time: </span>
                      <span style="margin-inline-start: auto;">${a.data[4]}</span>
                    </div>
                    <div class="flex-row" >
                      <span class="canvas-tooltip__circle" style="--canvas-tooltip__color:${a.color}"></span>
                      <span style="margin-right: 8px;">Name: </span>
                      <span style="margin-inline-start: auto;"> ${a.data[3]}  </span>
                    </div>
                    <div class="flex-row" >
                      <span class="canvas-tooltip__circle" style="--canvas-tooltip__color:${a.color}"></span>
                      <span style="margin-right: 8px;">Affiliation: </span>
                      <span style="margin-inline-start: auto;">${a.data[5].join(",  ")}  </span>
                    </div>
                    <div class="flex-row" >
                      <span class="canvas-tooltip__circle" style="--canvas-tooltip__color:${a.color}"></span>
                      <span style="margin-right: 8px;">Parameters: </span>
                      <span style="margin-inline-start: auto;">${Math.ceil(a.data[2]*100)/100} B </span>
                    </div>
            </div>`},extraCssText:"transform:rotate(90deg)"},grid:{top:140,bottom:48,left:68},legend:{data:["Text (English)","Text (Chinese)","Text (Multilingual)","Text (Others)","Vision","Audio","Code"],top:10},xAxis:{type:"value",position:"top",splitLine:{show:!0,lineStyle:{color:"#fff"}},axisLabel:{show:!0,rotate:90,formatter(a){return`{a|2}{b|${a}}`},rich:{b:{fontSize:10,padding:[10,0,0,2]}}}},yAxis:{type:"time",inverse:!0,interval:24*60*60*1e3*30,min(a){return a.min-24*60*60*1e3*30},max(a){return a.max+24*60*60*1e3*30*2},splitLine:{show:!0,lineStyle:{color:"#fff"}},axisLabel:{rotate:-45,showMinLabel:!0,formatter(a,e){if(e%3===0)return`${new Date(a).getFullYear()}-${new Date(a).getMonth()+1}`}}},series:Object.keys(r).map(a=>({name:a,data:r[a].map(e=>{const x=e[0],o=e[1];return e[0]=o,e[1]=x,e}).reverse(),type:"scatter",symbolSize:function(e){return e[0]*2+2},label:{show:!1,formatter:function(e){return e.data[3]},rotate:45,color:"#000",fontSize:8},itemStyle:{color:g[a]}}))}),n.setOption(i),window.onresize=()=>{n.resize()}},1e3)}),B(()=>{n==null||n.dispose()}),(_,i)=>(M(),C("div",R,[W,d("div",Y,[q,z(d("div",G,[$(" Last updated: "+k(b(c))+" ",1),H,J],512),[[D,b(c)!=""]])])]))}});var Q=T(K,[["__scopeId","data-v-b1d9524c"]]);const X={};function Z(p,n){const c=Q;return M(),I(c)}var te=T(X,[["render",Z]]);export{te as default};
