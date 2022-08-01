/*! build package in 2022/8/1 17:34:05 ! */
import{a as L,b as F,r as M,e as P,f as v,o as t,h as s,i as l,w as r,F as V,j as D,k as a,t as o,l as z,m as S,p as R,c as A,q as $,s as b,v as k,x as q,y as G}from"./entry-145e75e7.mjs";import{u as H}from"./useData-2ac80d2a.mjs";const f=T=>(q("data-v-12d33132"),T=T(),G(),T),J={class:"list flex-col"},K=S("Select"),Q=S("Reset"),W={class:"total-num"},X={class:"table-box"},Y={class:"tag-box flex-row"},Z={class:"tag-box flex-row"},ee={class:"tag-box flex-row"},ae={key:0},le={key:0},te=["href"],oe={key:0},ne=f(()=>a("br",null,null,-1)),se={key:1},re={key:0},ie=["href"],de={key:0},_e=["href"],ue={key:0},pe=["href"],ce={class:"mobile-list"},fe=f(()=>a("span",{class:"label"},"Name:",-1)),we=f(()=>a("span",{class:"label"},"release_date",-1)),he=f(()=>a("span",{class:"label"},"domain",-1)),me=f(()=>a("span",{class:"label"},"affiliation",-1)),ge=f(()=>a("span",{class:"label"},"language",-1)),ve=f(()=>a("span",{class:"label"},"paper/news",-1)),be=["href"],ke=f(()=>a("span",{class:"label"},"parameters",-1)),ye=f(()=>a("span",{class:"label"},"model",-1)),xe=["href"],Ve=f(()=>a("span",{class:"label"},"code",-1)),De=["href"],Te=f(()=>a("span",{class:"label"},"api",-1)),Ee=["href"],Me=F({__name:"List",setup(T){const y=M([]),h=M([]),d=M({startTime:"",endTime:"",affiliation:[],language:[]}),I=M([]),C=M([]),O=()=>{var m,n,x,c;I.value=[...new Set((n=(m=y.value)==null?void 0:m.slice(1))==null?void 0:n.reduce((w,_)=>_.affiliation?[...w,..._.affiliation]:w,[]))].sort(),C.value=[...new Set((c=(x=y.value)==null?void 0:x.slice(1))==null?void 0:c.map(w=>w.language||"-").flat())].sort()};P(()=>{H().then(m=>{y.value=m.map(n=>(n.model||(n.model=""),n.code||(n.code=""),n.api||(n.api=""),n)),h.value=y.value.slice(1),O(),console.log(C)})});const B=()=>{d.value={startTime:"",endTime:"",affiliation:[],language:[]},h.value=y.value.slice(1)},U=()=>{var c,w;const m=(c=y.value)==null?void 0:c.slice(1);if((w=Object.values(d.value))!=null&&w.every(_=>_==null||(_==null?void 0:_.length)===0)){h.value=m;return}const n=Object.keys(d.value).filter(_=>{var p;return((p=d.value[_])==null?void 0:p.length)!=0}),x=n==null?void 0:n.reduce((_,p)=>p==="startTime"?_.filter(g=>+new Date(g.release_date)>=+new Date(d.value.startTime)):p==="endTime"?_.filter(g=>+new Date(g.release_date)<=+new Date(d.value.endTime)):["language","affiliation"].includes(p)?_.filter(g=>{var u;return d.value[p]=="-"?!g[p]:((u=d.value[p].filter(N=>{var j;return(j=g[p])==null?void 0:j.includes(N)}))==null?void 0:u.length)>0}):_,m);h.value=x};return(m,n)=>{const x=v("el-date-picker"),c=v("el-form-item"),w=v("el-option"),_=v("el-select"),p=v("el-button"),g=v("el-form"),u=v("el-table-column"),N=v("el-table"),j=R;return t(),s("div",J,[l(j,null,{default:r(()=>[l(g,{model:d.value,inline:"",size:"default",class:"search-box flex-row"},{default:r(()=>[l(c,{label:"Start Date"},{default:r(()=>[l(x,{modelValue:d.value.startTime,"onUpdate:modelValue":n[0]||(n[0]=e=>d.value.startTime=e),type:"date",placeholder:"Start Date",style:{width:"clamp(2.5rem, 10.58vw + -0.14rem, 10.42vw)"}},null,8,["modelValue"])]),_:1}),l(c,{label:"End Date"},{default:r(()=>[l(x,{modelValue:d.value.endTime,"onUpdate:modelValue":n[1]||(n[1]=e=>d.value.endTime=e),type:"date",placeholder:"End Date",style:{width:"clamp(2.5rem, 10.58vw + -0.14rem, 10.42vw)"}},null,8,["modelValue"])]),_:1}),l(c,{label:"Affiliation"},{default:r(()=>[l(_,{modelValue:d.value.affiliation,"onUpdate:modelValue":n[2]||(n[2]=e=>d.value.affiliation=e),placeholder:"Select Affiliation",multiple:"","collapse-tags":"","collapse-tags-tooltip":"",clearable:"",style:{width:"clamp(2.5rem, 25vw + -3.75rem, 20.83vw)"}},{default:r(()=>[(t(!0),s(V,null,D(I.value,(e,i)=>(t(),A(w,{key:i,label:e,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(c,{label:"Language"},{default:r(()=>[l(_,{modelValue:d.value.language,"onUpdate:modelValue":n[3]||(n[3]=e=>d.value.language=e),placeholder:"Select Language",multiple:"","collapse-tags":"","collapse-tags-tooltip":"",clearable:"",style:{width:"clamp(2.5rem, 15.38vw + -1.35rem, 13.89vw)"}},{default:r(()=>[(t(!0),s(V,null,D(C.value,(e,i)=>(t(),A(w,{key:i,label:e,value:e},{default:r(()=>[S(o(e),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(c,{style:{"margin-inline-start":"auto"}},{default:r(()=>[l(p,{type:"primary",onClick:U},{default:r(()=>[K]),_:1}),l(p,{type:"",onClick:B},{default:r(()=>[Q]),_:1})]),_:1})]),_:1},8,["model"]),a("div",W,"Total "+o(h.value.length),1),a("div",X,[l(N,{data:h.value,style:{width:"100%"},"highlight-current-row":"",border:"",stripe:""},{default:r(()=>[l(u,{fixed:"",type:"index",width:"50","class-name":"table-index"}),l(u,{fixed:"",prop:"name",label:"Name",width:"200","show-overflow-tooltip":"",sortable:""}),l(u,{prop:"release_date",label:"Release Date",width:"200","show-overflow-tooltip":"",sortable:""}),l(u,{prop:"domain",label:"Domain",width:"150"},{default:r(e=>[a("div",Y,[(t(!0),s(V,null,D(e.row.domain&&e.row.domain.sort(),(i,E)=>(t(),s("span",{key:i.id,class:$(["tag",i==="Text"?"tag2":i==="Vision"?"tag3":i==="Audio"?"tag1":`tag${E%4+4}`])},o(i),3))),128))])]),_:1}),l(u,{prop:"affiliation",label:"Affiliation",width:"260","show-overflow-tooltip":""},{default:r(e=>[a("div",Z,[(t(!0),s(V,null,D(e.row.affiliation,(i,E)=>(t(),s("span",{key:i.id,class:$(["tag",`tag${E%7+1}`])},o(i),3))),128))])]),_:1}),l(u,{prop:"language",label:"Language",width:"200"},{default:r(e=>[a("div",ee,[(t(!0),s(V,null,D(e.row.language,(i,E)=>(t(),s("span",{key:i.id,class:$(["tag",i==="English"?"tag2":i==="Multilingual"?"tag3":i==="Chinese"?"tag1":`tag${E%4+4}`])},o(i),3))),128)),e.row.language?z("",!0):(t(),s("span",ae,"-"))])]),_:1}),l(u,{prop:"paper/news",label:"Paper/News","show-overflow-tooltip":"",width:"300"},{default:r(e=>[e.row["paper/news"]?(t(),s("a",{key:1,href:e.row["paper/news"],target:"_blank"},o(e.row["paper/news"]),9,te)):(t(),s("span",le,"/"))]),_:1}),l(u,{prop:"parameters",label:"# of Parameters",width:"200"},{default:r(e=>[e.row.parameters_dense&&e.row.parameters_MoE?(t(),s("span",oe,[S(" dense: "+o(e.row.parameters_dense&&e.row.parameters_dense.join(" , ")),1),ne,S(" MoE:"+o(e.row.parameters_MoE&&e.row.parameters_MoE.join(" , ")),1)])):(t(),s("span",se,o(e.row.parameters_dense&&e.row.parameters_dense.join(" , "))+" "+o(e.row.parameters_MoE&&e.row.parameters_MoE.join(" , ")),1))]),_:1}),l(u,{prop:"model",label:"Model","show-overflow-tooltip":"",width:"300",sortable:""},{default:r(e=>[e.row.model?(t(),s("a",{key:1,href:e.row.model,target:"_blank"},o(e.row.model),9,ie)):(t(),s("span",re,"-"))]),_:1}),l(u,{prop:"code",label:"Code","show-overflow-tooltip":"",width:"300",sortable:""},{default:r(e=>[e.row.code?(t(),s("a",{key:1,href:e.row.code,target:"_blank"},o(e.row.code),9,_e)):(t(),s("span",de,"-"))]),_:1}),l(u,{prop:"api",label:"API","show-overflow-tooltip":"",width:"300",sortable:""},{default:r(e=>[e.row.api?(t(),s("a",{key:1,href:e.row.api,target:"_blank"},o(e.row.api),9,pe)):(t(),s("span",ue,"-"))]),_:1})]),_:1},8,["data"])]),a("div",ce,[(t(!0),s(V,null,D(h.value,(e,i)=>(t(),s("ul",{key:i},[a("li",null,[fe,a("span",null,o(e.name),1)]),a("li",null,[we,a("span",null,o(e.release_date),1)]),a("li",null,[he,a("span",null,o(e.domain&&e.domain.join(",")),1)]),a("li",null,[me,a("span",null,o(e.affiliation.join(",")),1)]),a("li",null,[ge,a("span",null,o(e.language&&e.language.join(",")),1)]),a("li",null,[ve,b(a("a",{href:e["paper/news"],target:"_blank",class:"link"},o(e["paper/news"]),9,be),[[k,e["paper/news"]]]),b(a("span",null," - ",512),[[k,!e["paper/news"]]])]),a("li",null,[ke,a("span",null,o(e.parameters_dense?`dense:${e.parameters_dense}`:"")+" "+o(e.parameters_MoE?`MoE:${e.parameters_MoE}`:""),1)]),a("li",null,[ye,b(a("a",{href:e.model,target:"_blank",class:"link"},o(e.model),9,xe),[[k,e.model]]),b(a("span",null," - ",512),[[k,!e.model]])]),a("li",null,[Ve,b(a("a",{href:e.code,target:"_blank",class:"link"},o(e.code),9,De),[[k,e.code]]),b(a("span",null," - ",512),[[k,!e.code]])]),a("li",null,[Te,b(a("a",{href:e.api,target:"_blank",class:"link"},o(e.api),9,Ee),[[k,e.api]]),b(a("span",null," - ",512),[[k,!e.api]])])]))),128))])]),_:1})])}}});var Se=L(Me,[["__scopeId","data-v-12d33132"]]);const je={};function Ce(T,y){const h=Se;return t(),A(h)}var Ae=L(je,[["render",Ce]]);export{Ae as default};
