/*! build package in 2022/7/28 16:08:56 ! */
import{u as b,a as T}from"./useWaterMark-e856eaeb.mjs";import{r as M,e as u,a as $,f as O,i as S,j as L,o as g,k as j,p as A,l as E,m as y,c as B}from"./entry-19ffd059.mjs";var C=()=>M;const v=p=>(A("data-v-0d89e0cb"),p=p(),E(),p),z={class:"trend"},D=v(()=>y("div",{class:"chart-title"},"Big Model Trend",-1)),k=v(()=>y("div",{id:"trend-container",class:"chart-container"},null,-1)),I=[D,k],N=$({__name:"Trend",setup(p){let l,m,c;const w=async()=>{await T().then(_=>{var r;m=(r=_[0])==null?void 0:r.last_updated,c=_.reduce((s,e,t)=>{var x,f,h;if(t==0)return s;const i=+new Date(e.release_date);let a=new Array;return e.parameters_dense&&(e.parameters_max_dense=Math.max.call(null,...(x=e.parameters_dense)==null?void 0:x.map(o=>Number(o.replace("~","").replace("B",""))))),e.parameters_MoE&&(e.parameters_max_moe=Math.max.call(null,...(f=e.parameters_MoE)==null?void 0:f.map(o=>Number(o.replace("~","").replace("B",""))))),e.domain.includes("Text")&&((h=e.language)==null||h.forEach(o=>{if(["English","Chinese","Multilingual"].includes(o))if(s[`Text (${o})`]||(s[`Text (${o})`]=[]),e.parameters_dense&&e.parameters_MoE)a=[i,Math.log2(e.parameters_max_dense),e.parameters_max_dense,...Object.values(e)],s[`Text (${o})`].push(a),a=new Array,a=[i,Math.log2(e.parameters_max_moe),e.parameters_max_moe,...Object.values(e)],s[`Text (${o})`].push(a);else{const n=e.parameters_max_dense||e.parameters_max_moe;a=[i,Math.log2(n),n,...Object.values(e)],s[`Text (${o})`].push(a)}else if(s["Text (Others)"]||(s["Text (Others)"]=[]),e.parameters_dense&&e.parameters_MoE)a=[i,Math.log2(e.parameters_max_dense),e.parameters_max_dense,...Object.values(e)],s["Text (Others)"].push(a),a=new Array,a=[i,Math.log2(e.parameters_max_moe),e.parameters_max_moe,...Object.values(e)],s["Text (Others)"].push(a);else{const n=e.parameters_max_dense||e.parameters_max_moe;a=[i,Math.log2(n),n,...Object.values(e)],s["Text (Others)"].push(a)}})),e.domain.forEach(o=>{if(o!=="Text")if(s[o]||(s[o]=[]),e.parameters_dense&&e.parameters_MoE)a=[i,Math.log2(e.parameters_max_dense),e.parameters_max_dense,...Object.values(e)],s[o].push(a),a=new Array,a=[i,Math.log2(e.parameters_max_moe),e.parameters_max_moe,...Object.values(e)],s[o].push(a);else{const n=e.parameters_max_dense||e.parameters_max_moe;a=[i,Math.log2(n),n,...Object.values(e)],s[o].push(a)}}),s},{})})},d={"Text (English)":"#459f48","Text (Chinese)":"#f8b947","Text (Multilingual)":"#2f2efc","Text (Others)":"#f8f849",Vision:"#fc1515",Audio:"#8a148a",Code:"#45f8fb"};return O(()=>{setTimeout(async()=>{l=C().init(document.getElementById("trend-container")),await w();let r={tooltip:{show:!0,formatter(e){return`<div style="display:flex;flex-direction:column;row-gap:2px;">
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
            </div>`}},legend:{data:["Text (English)","Text (Chinese)","Text (Multilingual)","Text (Others)","Vision","Audio","Code"],top:10},grid:{bottom:88,left:68,right:48},xAxis:{type:"time",interval:24*60*60*1e3*30,min(e){return e.min-24*60*60*1e3*30},max(e){return e.max+24*60*60*1e3*30*2},splitLine:{show:!0,lineStyle:{color:"#fff",alignWithLabel:!0}},axisTick:{show:!1,alignWithLabel:!0},axisLine:{show:!1},axisLabel:{showMinLabel:!0,formatter(e,t){if(t%3===0)return`${new Date(e).getFullYear()}-${new Date(e).getMonth()+1}`}}},yAxis:{type:"value",min:-1,splitLine:{show:!0,lineStyle:{color:"#fff"}},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,formatter(e){return`{a|2}{b|${e}}`},rich:{b:{fontSize:10,padding:[10,0,0,2]}}}},series:Object.keys(c).map(e=>({name:e,data:c[e],type:"scatter",symbolSize:function(t){return t[1]*3+10},label:{show:!1,formatter:function(t){return t.data[3]},rotate:45,color:"#000",fontSize:8},itemStyle:{color:d[e]},emphasis:{label:{show:!0,formatter:function(t){return t.data[3]},rotate:0,position:"top",fontSize:14}}}))};S().value&&(r={tooltip:{show:!0,formatter(e){return`<div style="display:flex;flex-direction:column;row-gap:2px;">
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
            </div>`},extraCssText:"transform:rotate(90deg)"},grid:{top:140,bottom:48,left:68},legend:{data:["Text (English)","Text (Chinese)","Text (Multilingual)","Text (Others)","Vision","Audio","Code"],top:10},xAxis:{type:"value",position:"top",splitLine:{show:!0,lineStyle:{color:"#fff"}},axisLabel:{show:!0,formatter(e){return`{a|2}{b|${e}}`},rich:{b:{fontSize:10,padding:[10,0,0,2]}}}},yAxis:{type:"time",interval:24*60*60*1e3*30,min(e){return e.min-24*60*60*1e3*30},max(e){return e.max+24*60*60*1e3*30*2},splitLine:{show:!0,lineStyle:{color:"#fff"}},axisLabel:{rotate:-45,showMinLabel:!0,formatter(e,t){if(t%3===0)return`${new Date(e).getFullYear()}-${new Date(e).getMonth()+1}`}}},series:Object.keys(c).map(e=>({name:e,data:c[e].map(t=>{const i=t[0],a=t[1];return t[0]=a,t[1]=i,t}),type:"scatter",symbolSize:function(t){return t[0]*2+2},label:{show:!1,formatter:function(t){return t.data[3]},rotate:45,color:"#000",fontSize:8},itemStyle:{color:d[e]}}))}),l.setOption(r),l.on("rendered",function(){b({domId:"trend-container",text:m})}),window.onresize=()=>{l.resize()}},1e3)}),L(()=>{l==null||l.dispose()}),(_,r)=>(g(),j("div",z,I))}});var V=u(N,[["__scopeId","data-v-0d89e0cb"]]);const W={};function F(p,l){const m=V;return g(),B(m)}var Y=u(W,[["render",F]]);export{Y as default};
