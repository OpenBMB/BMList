/*! build package in 2022/7/28 16:08:56 ! */
import{u as w,a as L}from"./useWaterMark-e856eaeb.mjs";import{e as u,a as v,f as M,h as k,i as O,j as S,o as h,k as _,p as j,l as I,m as d,q as g}from"./entry-19ffd059.mjs";const T=r=>(j("data-v-d7cffcc4"),r=r(),I(),r),A={class:"model"},B=T(()=>d("div",{class:"chart-title"},"Model Numbers by Time",-1)),D=T(()=>d("div",{id:"model-time-container"},null,-1)),E=[B,D],P=v({__name:"ModelTime",setup(r){let o,c,a;const m=async()=>new Promise(n=>{L().then(i=>{var e;c=(e=i[0])==null?void 0:e.last_updated,a=i==null?void 0:i.reduce((t,s,p)=>{if(p==0)return t;const l=s.release_date.substring(0,s.release_date.lastIndexOf("/"));return t[l]?t[l]={count:t[l].count+1,...s}:t[l]={count:1,...s},t},{}),n(a)})});return M(()=>{setTimeout(async()=>{var e,t;o=k.init(document.getElementById("model-time-container")),await m();let n={color:"#2f2efc",tooltip:{show:!1,trigger:"axis"},grid:{bottom:80,left:68,right:48},xAxis:{type:"category",data:Object.keys(a),min:-1,max:Object.keys(a).length,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#fff",alignWithLabel:!0}},axisTick:{show:!1,alignWithLabel:!0},axisLine:{show:!1},axisLabel:{rotate:45}},yAxis:{type:"value",interval:2,max(s){return s.max+1},splitLine:{show:!0,lineStyle:{color:"#fff"}},axisTick:{show:!1},axisLine:{show:!1}},series:[{data:(e=Object.values(a))==null?void 0:e.map(s=>s.count),type:"bar",barWidth:"60%",label:{show:!0,position:"outside"}}]};O().value&&(n={color:"#2f2efc",grid:{bottom:48,left:60,right:48},xAxis:{type:"value",position:"top",splitLine:{show:!0,lineStyle:{color:"#fff",alignWithLabel:!0}},axisLabel:{rotate:90}},yAxis:{type:"category",min:-1,max:Object.keys(a).length,boundaryGap:!1,data:Object.keys(a).reverse(),splitLine:{show:!0,lineStyle:{color:"#fff"}},axisLabel:{rotate:-60,fontSize:10}},series:[{data:(t=Object.values(a))==null?void 0:t.map(s=>s.count).reverse(),type:"bar",barWidth:"60%",label:{show:!0,position:"inside",rotate:-90}}]}),o.setOption(n),o.on("rendered",function(){w({domId:"model-time-container",text:c})}),window.addEventListener("resize",()=>{o.resize()})},1e3)}),S(()=>{o==null||o.dispose()}),(n,i)=>(h(),_("div",A,E))}});var G=u(P,[["__scopeId","data-v-d7cffcc4"]]);const W=r=>(j("data-v-16f0f316"),r=r(),I(),r),N={class:"model"},U=W(()=>d("div",{class:"chart-title"},"Model Parameters by Time",-1)),V=W(()=>d("div",{id:"param-time-container"},null,-1)),q=[U,V],C=v({__name:"ParameterTime",setup(r){let o,c,a;const m=async()=>new Promise(n=>{L().then(i=>{var e;c=(e=i[0])==null?void 0:e.last_updated,a=i==null?void 0:i.reduce((t,s,p)=>{var x,y;if(p==0)return t;const l=s.release_date.substring(0,s.release_date.lastIndexOf("/")),$=[...(s==null?void 0:s.parameters_dense)||[],...(s==null?void 0:s.parameters_MoE)||[]].map(z=>Math.ceil(Number(z.replace("~","").replace("B","")))),f=Math.max.apply(null,$),b=[{...s,parameters:f}];return t[l]?t[l]={parameters:((x=t[l])==null?void 0:x.parameters)+f,data:[...(y=t[l])==null?void 0:y.data,...b]}:t[l]={parameters:f,data:b},t},{}),n(a)})});return M(()=>{setTimeout(async()=>{o=k.init(document.getElementById("param-time-container")),await m();let n={color:"#2f2efc",tooltip:{show:!1,trigger:"axis"},grid:{bottom:80,left:68,right:48},xAxis:{type:"category",data:Object.keys(a),min:-1,max:Object.keys(a).length,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#fff",alignWithLabel:!0}},axisTick:{show:!1,alignWithLabel:!0},axisLine:{show:!1},axisLabel:{rotate:45}},yAxis:{type:"value",interval:2,max(e){return Math.ceil(e.max)+1},splitLine:{show:!0,lineStyle:{color:"#fff"}},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,formatter(e){return`{a|2}{b|${e}}`},rich:{b:{fontSize:10,padding:[10,0,0,2]}}}},series:[{data:Object.values(a).map(e=>e.parameters<2?e.parameters:Math.ceil(Math.log2(e.parameters)*100)/100),type:"bar",barWidth:"60%",label:{show:!0,position:"outside",formatter(e){var t;return Math.ceil(((t=a[e.name])==null?void 0:t.parameters)*100)/100+" B"}}}]};O().value&&(n={color:"#2f2efc",grid:{bottom:48,left:60,right:48},xAxis:{type:"value",position:"top",splitLine:{show:!0,lineStyle:{color:"#fff",alignWithLabel:!0}},axisLabel:{rotate:90,show:!0,formatter(e){return`{a|2}{b|${e}}`},rich:{b:{fontSize:10,padding:[10,0,0,2]}}}},yAxis:{type:"category",min:-1,max:Object.keys(a).length,boundaryGap:!1,data:Object.keys(a).reverse(),splitLine:{show:!0,lineStyle:{color:"#fff"}},axisLabel:{rotate:-60,fontSize:10}},series:[{data:Object.values(a).map(e=>e.parameters<2?e.parameters:Math.ceil(Math.log2(e.parameters)*100)/100).reverse(),type:"bar",barWidth:"60%",label:{show:!0,position:"inside",rotate:-90,formatter(e){var t;return Math.ceil(((t=a[e.name])==null?void 0:t.parameters)*100)/100+" B"}}}]}),o.setOption(n),o.on("rendered",function(){w({domId:"param-time-container",text:c})}),window.addEventListener("resize",()=>{o.resize()})},1e3)}),S(()=>{o==null||o.dispose()}),(n,i)=>(h(),_("div",N,q))}});var F=u(C,[["__scopeId","data-v-16f0f316"]]);const H={},J={class:"time flex-col"};function K(r,o){const c=G,a=F;return h(),_("div",J,[g(c),g(a)])}var X=u(H,[["render",K],["__scopeId","data-v-5e159ec6"]]);export{X as default};
