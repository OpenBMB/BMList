/*! build package in 2022/7/29 17:40:10 ! */
import{E as M,e as v,a as $,r as O,y as S,A as L,B as A,o as w,i as E,l as m,C as j,D as B,u as y,p as b,t as C,v as D,x as z,c as N}from"./entry-391ec57d.mjs";import{u as k}from"./useData-2ac80d2a.mjs";var I=()=>M;const x=p=>(D("data-v-0a6f7b4e"),p=p(),z(),p),V={class:"trend"},F=x(()=>m("div",{class:"chart-title"},"Big Model Trend",-1)),P={style:{position:"relative"}},U=x(()=>m("div",{id:"trend-container",class:"chart-container"},null,-1)),W={class:"watermark"},Y=x(()=>m("br",null,null,-1)),q=b(" @OpenBMB "),G=$({__name:"Trend",setup(p){let n,c=O(""),_;const T=async()=>{await k().then(d=>{var r;c.value=(r=d[0])==null?void 0:r.last_updated,_=d.reduce((s,e,t)=>{var h,u,g;if(t==0)return s;const i=+new Date(e.release_date);let a=new Array;return e.parameters_dense&&(e.parameters_max_dense=Math.max.call(null,...(h=e.parameters_dense)==null?void 0:h.map(o=>Number(o.replace("~","").replace("B",""))))),e.parameters_MoE&&(e.parameters_max_moe=Math.max.call(null,...(u=e.parameters_MoE)==null?void 0:u.map(o=>Number(o.replace("~","").replace("B",""))))),e.domain.includes("Text")&&((g=e.language)==null||g.forEach(o=>{if(["English","Chinese","Multilingual"].includes(o))if(s[`Text (${o})`]||(s[`Text (${o})`]=[]),e.parameters_dense&&e.parameters_MoE)a=[i,Math.log2(e.parameters_max_dense),e.parameters_max_dense,...Object.values(e)],s[`Text (${o})`].push(a),a=new Array,a=[i,Math.log2(e.parameters_max_moe),e.parameters_max_moe,...Object.values(e)],s[`Text (${o})`].push(a);else{const l=e.parameters_max_dense||e.parameters_max_moe;a=[i,Math.log2(l),l,...Object.values(e)],s[`Text (${o})`].push(a)}else if(s["Text (Others)"]||(s["Text (Others)"]=[]),e.parameters_dense&&e.parameters_MoE)a=[i,Math.log2(e.parameters_max_dense),e.parameters_max_dense,...Object.values(e)],s["Text (Others)"].push(a),a=new Array,a=[i,Math.log2(e.parameters_max_moe),e.parameters_max_moe,...Object.values(e)],s["Text (Others)"].push(a);else{const l=e.parameters_max_dense||e.parameters_max_moe;a=[i,Math.log2(l),l,...Object.values(e)],s["Text (Others)"].push(a)}})),e.domain.forEach(o=>{if(o!=="Text")if(s[o]||(s[o]=[]),e.parameters_dense&&e.parameters_MoE)a=[i,Math.log2(e.parameters_max_dense),e.parameters_max_dense,...Object.values(e)],s[o].push(a),a=new Array,a=[i,Math.log2(e.parameters_max_moe),e.parameters_max_moe,...Object.values(e)],s[o].push(a);else{const l=e.parameters_max_dense||e.parameters_max_moe;a=[i,Math.log2(l),l,...Object.values(e)],s[o].push(a)}}),s},{})})},f={"Text (English)":"#459f48","Text (Chinese)":"#f8b947","Text (Multilingual)":"#2f2efc","Text (Others)":"#f8f849",Vision:"#fc1515",Audio:"#8a148a",Code:"#45f8fb"};return S(()=>{setTimeout(async()=>{n=I().init(document.getElementById("trend-container")),await T();let r={tooltip:{show:!0,formatter(e){return`<div style="display:flex;flex-direction:column;row-gap:2px;">
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
            </div>`}},legend:{data:["Text (English)","Text (Chinese)","Text (Multilingual)","Text (Others)","Vision","Audio","Code"],top:10},grid:{bottom:88,left:68,right:48},xAxis:{type:"time",interval:24*60*60*1e3*30,min(e){return e.min-24*60*60*1e3*30},max(e){return e.max+24*60*60*1e3*30*2},splitLine:{show:!0,lineStyle:{color:"#fff",alignWithLabel:!0}},axisTick:{show:!1,alignWithLabel:!0},axisLine:{show:!1},axisLabel:{showMinLabel:!0,formatter(e,t){if(t%3===0)return`${new Date(e).getFullYear()}-${new Date(e).getMonth()+1}`}}},yAxis:{type:"value",min:-1,splitLine:{show:!0,lineStyle:{color:"#fff"}},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,formatter(e){return`{a|2}{b|${e}}`},rich:{b:{fontSize:10,padding:[10,0,0,2]}}}},series:Object.keys(_).map(e=>({name:e,data:_[e],type:"scatter",symbolSize:function(t){return t[1]*3+10},label:{show:!1,formatter:function(t){return t.data[3]},rotate:45,color:"#000",fontSize:8},itemStyle:{color:f[e]},emphasis:{label:{show:!0,formatter:function(t){return t.data[3]},rotate:0,position:"top",fontSize:14}}}))};L().value&&(r={tooltip:{show:!0,formatter(e){return`<div style="display:flex;flex-direction:column;row-gap:2px;">
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
            </div>`},extraCssText:"transform:rotate(90deg)"},grid:{top:140,bottom:48,left:68},legend:{data:["Text (English)","Text (Chinese)","Text (Multilingual)","Text (Others)","Vision","Audio","Code"],top:10},xAxis:{type:"value",position:"top",splitLine:{show:!0,lineStyle:{color:"#fff"}},axisLabel:{show:!0,rotate:90,formatter(e){return`{a|2}{b|${e}}`},rich:{b:{fontSize:10,padding:[10,0,0,2]}}}},yAxis:{type:"time",inverse:!0,interval:24*60*60*1e3*30,min(e){return e.min-24*60*60*1e3*30},max(e){return e.max+24*60*60*1e3*30*2},splitLine:{show:!0,lineStyle:{color:"#fff"}},axisLabel:{rotate:-45,showMinLabel:!0,formatter(e,t){if(t%3===0)return`${new Date(e).getFullYear()}-${new Date(e).getMonth()+1}`}}},series:Object.keys(_).map(e=>({name:e,data:_[e].map(t=>{const i=t[0],a=t[1];return t[0]=a,t[1]=i,t}).reverse(),type:"scatter",symbolSize:function(t){return t[0]*2+2},label:{show:!1,formatter:function(t){return t.data[3]},rotate:45,color:"#000",fontSize:8},itemStyle:{color:f[e]}}))}),console.log(r),n.setOption(r),window.onresize=()=>{n.resize()}},1e3)}),A(()=>{n==null||n.dispose()}),(d,r)=>(w(),E("div",V,[F,m("div",P,[U,j(m("div",W,[b(" Last updated: "+C(y(c))+" ",1),Y,q],512),[[B,y(c)!=""]])])]))}});var H=v(G,[["__scopeId","data-v-0a6f7b4e"]]);const J={};function K(p,n){const c=H;return w(),N(c)}var X=v(J,[["render",K]]);export{X as default};
