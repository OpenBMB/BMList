/*! build package in 2022/7/27 18:58:22 ! */
import{u as T,a as M,b as v}from"./useWaterMark-d5e3aee4.mjs";import{e as x,a as O,f as $,h as j,o as f,i as E,p as A,j as L,k as u,c as S}from"./entry-f6f371e6.mjs";const g=n=>(A("data-v-02f751e4"),n=n(),L(),n),B={class:"trend"},k=g(()=>u("div",{class:"chart-title"},"Big Model Trend",-1)),C=g(()=>u("div",{id:"trend-container",class:"chart-container"},null,-1)),I=[k,C],z=O({__name:"Trend",setup(n){let i,_,p;const w=async()=>{await M().then(r=>{var m;_=(m=r[0])==null?void 0:m.last_updated,p=r.reduce((a,e,b)=>{var d,c,h;if(b==0)return a;const o=+new Date(e.release_date);let t=new Array;return e.parameters_dense&&(e.parameters_max_dense=Math.max.call(null,...(d=e.parameters_dense)==null?void 0:d.map(s=>Number(s.replace("~","").replace("B",""))))),e.parameters_MoE&&(e.parameters_max_moe=Math.max.call(null,...(c=e.parameters_MoE)==null?void 0:c.map(s=>Number(s.replace("~","").replace("B",""))))),e.domain.includes("Text")&&((h=e.language)==null||h.forEach(s=>{if(["English","Chinese","Multilingual"].includes(s))if(a[`Text (${s})`]||(a[`Text (${s})`]=[]),e.parameters_dense&&e.parameters_MoE)t=[o,Math.log2(e.parameters_max_dense),e.parameters_max_dense,...Object.values(e)],a[`Text (${s})`].push(t),t=new Array,t=[o,Math.log2(e.parameters_max_moe),e.parameters_max_moe,...Object.values(e)],a[`Text (${s})`].push(t);else{const l=e.parameters_max_dense||e.parameters_max_moe;t=[o,Math.log2(l),l,...Object.values(e)],a[`Text (${s})`].push(t)}else if(a["Text (Others)"]||(a["Text (Others)"]=[]),e.parameters_dense&&e.parameters_MoE)t=[o,Math.log2(e.parameters_max_dense),e.parameters_max_dense,...Object.values(e)],a["Text (Others)"].push(t),t=new Array,t=[o,Math.log2(e.parameters_max_moe),e.parameters_max_moe,...Object.values(e)],a["Text (Others)"].push(t);else{const l=e.parameters_max_dense||e.parameters_max_moe;t=[o,Math.log2(l),l,...Object.values(e)],a["Text (Others)"].push(t)}})),e.domain.forEach(s=>{if(s!=="Text")if(a[s]||(a[s]=[]),e.parameters_dense&&e.parameters_MoE)t=[o,Math.log2(e.parameters_max_dense),e.parameters_max_dense,...Object.values(e)],a[s].push(t),t=new Array,t=[o,Math.log2(e.parameters_max_moe),e.parameters_max_moe,...Object.values(e)],a[s].push(t);else{const l=e.parameters_max_dense||e.parameters_max_moe;t=[o,Math.log2(l),l,...Object.values(e)],a[s].push(t)}}),a},{})})},y={"Text (English)":"#459f48","Text (Chinese)":"#f8b947","Text (Multilingual)":"#2f2efc","Text (Others)":"#f8f849",Vision:"#fc1515",Audio:"#8a148a",Code:"#45f8fb"};return $(()=>{const r=v();setTimeout(async()=>{i=r.init(document.getElementById("trend-container")),await w();const m={tooltip:{show:!0,formatter(a){return`<div style="display:flex;flex-direction:column;row-gap:2px;">
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
            </div>`}},toolbox:{show:!1,feature:{saveAsImage:{show:!0}}},legend:{data:["Text (English)","Text (Chinese)","Text (Multilingual)","Text (Others)","Vision","Audio","Code"],top:10},grid:{bottom:88,left:68,right:48},xAxis:{type:"time",interval:24*60*60*1e3*30,min(a){return a.min-24*60*60*1e3*30},max(a){return a.max+24*60*60*1e3*30*2},splitLine:{show:!0,lineStyle:{color:"#fff",alignWithLabel:!0}},axisTick:{show:!1,alignWithLabel:!0},axisLine:{show:!1},axisLabel:{showMinLabel:!0,formatter(a,e){if(e%3===0)return`${new Date(a).getFullYear()}-${new Date(a).getMonth()+1}`}}},yAxis:{type:"value",min:-1,splitLine:{show:!0,lineStyle:{color:"#fff"}},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,formatter(a){return`{a|2}{b|${a}}`},rich:{b:{fontSize:10,padding:[10,0,0,2]}}}},series:Object.keys(p).map(a=>({name:a,data:p[a],type:"scatter",symbolSize:function(e){return e[1]*3+10},label:{show:!1,formatter:function(e){return e.data[3]},rotate:45,color:"#000",fontSize:8},itemStyle:{color:y[a]},emphasis:{label:{show:!0,formatter:function(e){return e.data[3]},rotate:0,position:"top",fontSize:14}}}))};i.setOption(m),i.on("rendered",function(){T({domId:"trend-container",text:_})}),window.onresize=()=>{i.resize()}},1e3)}),j(()=>{i==null||i.dispose()}),(r,m)=>(f(),E("div",B,I))}});var D=x(z,[["__scopeId","data-v-02f751e4"]]);const N={};function V(n,i){const _=D;return f(),S(_)}var F=x(N,[["render",V]]);export{F as default};
