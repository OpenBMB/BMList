/*! build package in 2022/8/3 10:54:34 ! */
import{a as I,b as z,r as E,f as P,s as q,x as k,o as t,j as s,y as l,z as n,F as V,A as D,k as a,t as o,B as G,l as j,C as H,c as A,D as N,w as y,v as x,p as J,m as K}from"./entry-296af46b.mjs";import{u as Q}from"./useState-8f5c17a4.mjs";const h=T=>(J("data-v-01abffe4"),T=T(),K(),T),W={class:"list flex-col"},X=j("Select"),Y=j("Reset"),Z={class:"total-num"},ee={class:"table-box"},ae={class:"tag-box flex-row"},le={class:"tag-box flex-row"},te={class:"tag-box flex-row"},oe={key:0},se={key:0},ne=["href"],re={key:0},ie=h(()=>a("br",null,null,-1)),de={key:1},ue={key:0},_e=["href"],pe={key:0},ce=["href"],fe={key:0},he=["href"],we={class:"mobile-list"},ge=h(()=>a("span",{class:"label"},"Name:",-1)),me=h(()=>a("span",{class:"label"},"release_date",-1)),ve=h(()=>a("span",{class:"label"},"domain",-1)),be=h(()=>a("span",{class:"label"},"affiliation",-1)),ke=h(()=>a("span",{class:"label"},"language",-1)),ye=h(()=>a("span",{class:"label"},"paper/news",-1)),xe=["href"],Ve=h(()=>a("span",{class:"label"},"parameters",-1)),De=h(()=>a("span",{class:"label"},"model",-1)),Te=["href"],Se=h(()=>a("span",{class:"label"},"code",-1)),Ee=["href"],je=h(()=>a("span",{class:"label"},"api",-1)),Me=["href"],Ce=z({__name:"List",setup(T){let v=E([]);const g=E([]),d=E({startTime:"",endTime:"",affiliation:[],language:[]}),F=E([]),B=E([]),O=()=>{var m,i,_,f;F.value=[...new Set((i=(m=v.value)==null?void 0:m.slice(1))==null?void 0:i.reduce((w,u)=>u.affiliation?[...w,...u.affiliation]:w,[]))].sort(),B.value=[...new Set((f=(_=v.value)==null?void 0:_.slice(1))==null?void 0:f.map(w=>w.language||"-").flat())].sort()},C=Q();C.value={loading:!0,isLoadFailed:!1};const L=P();q(()=>{var m;fetch(`${(m=L==null?void 0:L.app)==null?void 0:m.baseURL}all_models.json`).then(i=>i.json()).then(i=>{C.value={loading:!1,isLoadFailed:!1},v.value=i.map(_=>(_.model||(_.model=""),_.code||(_.code=""),_.api||(_.api=""),_)),g.value=v.value.slice(1),O()}).catch(()=>{v.value=[],C.value={loading:!0,isLoadFailed:!0}})});const U=()=>{d.value={startTime:"",endTime:"",affiliation:[],language:[]},g.value=v.value.slice(1)},R=()=>{var f,w;const m=(f=v.value)==null?void 0:f.slice(1);if((w=Object.values(d.value))!=null&&w.every(u=>u==null||(u==null?void 0:u.length)===0)){g.value=m;return}const i=Object.keys(d.value).filter(u=>{var c;return((c=d.value[u])==null?void 0:c.length)!=0}),_=i==null?void 0:i.reduce((u,c)=>c==="startTime"?u.filter(b=>+new Date(b.release_date)>=+new Date(d.value.startTime)):c==="endTime"?u.filter(b=>+new Date(b.release_date)<=+new Date(d.value.endTime)):["language","affiliation"].includes(c)?u.filter(b=>{var p;return d.value[c]=="-"?!b[c]:((p=d.value[c].filter($=>{var M;return(M=b[c])==null?void 0:M.includes($)}))==null?void 0:p.length)>0}):u,m);g.value=_};return(m,i)=>{const _=k("el-date-picker"),f=k("el-form-item"),w=k("el-option"),u=k("el-select"),c=k("el-button"),b=k("el-form"),p=k("el-table-column"),$=k("el-table"),M=H;return t(),s("div",W,[l(M,null,{default:n(()=>[l(b,{model:d.value,inline:"",size:"default",class:"search-box flex-row"},{default:n(()=>[l(f,{label:"Start Date"},{default:n(()=>[l(_,{modelValue:d.value.startTime,"onUpdate:modelValue":i[0]||(i[0]=e=>d.value.startTime=e),type:"date",placeholder:"Start Date",style:{width:"clamp(2.5rem, 10.58vw + -0.14rem, 10.42vw)"}},null,8,["modelValue"])]),_:1}),l(f,{label:"End Date"},{default:n(()=>[l(_,{modelValue:d.value.endTime,"onUpdate:modelValue":i[1]||(i[1]=e=>d.value.endTime=e),type:"date",placeholder:"End Date",style:{width:"clamp(2.5rem, 10.58vw + -0.14rem, 10.42vw)"}},null,8,["modelValue"])]),_:1}),l(f,{label:"Affiliation"},{default:n(()=>[l(u,{modelValue:d.value.affiliation,"onUpdate:modelValue":i[2]||(i[2]=e=>d.value.affiliation=e),placeholder:"Select Affiliation",multiple:"","collapse-tags":"","collapse-tags-tooltip":"",clearable:"",style:{width:"clamp(2.5rem, 25vw + -3.75rem, 20.83vw)"}},{default:n(()=>[(t(!0),s(V,null,D(F.value,(e,r)=>(t(),A(w,{key:r,label:e,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(f,{label:"Language"},{default:n(()=>[l(u,{modelValue:d.value.language,"onUpdate:modelValue":i[3]||(i[3]=e=>d.value.language=e),placeholder:"Select Language",multiple:"","collapse-tags":"","collapse-tags-tooltip":"",clearable:"",style:{width:"clamp(2.5rem, 15.38vw + -1.35rem, 13.89vw)"}},{default:n(()=>[(t(!0),s(V,null,D(B.value,(e,r)=>(t(),A(w,{key:r,label:e,value:e},{default:n(()=>[j(o(e),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(f,{style:{"margin-inline-start":"auto"}},{default:n(()=>[l(c,{type:"primary",onClick:R},{default:n(()=>[X]),_:1}),l(c,{type:"",onClick:U},{default:n(()=>[Y]),_:1})]),_:1})]),_:1},8,["model"]),a("div",Z,"Total "+o(g.value.length),1),a("div",ee,[l($,{data:g.value,style:{width:"100%"},"highlight-current-row":"",border:"",stripe:""},{default:n(()=>[l(p,{fixed:"",type:"index",width:"50","class-name":"table-index"}),l(p,{fixed:"",prop:"name",label:"Name",width:"200","show-overflow-tooltip":"",sortable:""}),l(p,{prop:"release_date",label:"Release Date",width:"200","show-overflow-tooltip":"",sortable:""}),l(p,{prop:"domain",label:"Domain",width:"150"},{default:n(e=>[a("div",ae,[(t(!0),s(V,null,D(e.row.domain&&e.row.domain.sort(),(r,S)=>(t(),s("span",{key:r.id,class:N(["tag",r==="Text"?"tag2":r==="Vision"?"tag3":r==="Audio"?"tag1":`tag${S%4+4}`])},o(r),3))),128))])]),_:1}),l(p,{prop:"affiliation",label:"Affiliation",width:"260","show-overflow-tooltip":""},{default:n(e=>[a("div",le,[(t(!0),s(V,null,D(e.row.affiliation,(r,S)=>(t(),s("span",{key:r.id,class:N(["tag",`tag${S%7+1}`])},o(r),3))),128))])]),_:1}),l(p,{prop:"language",label:"Language",width:"200"},{default:n(e=>[a("div",te,[(t(!0),s(V,null,D(e.row.language,(r,S)=>(t(),s("span",{key:r.id,class:N(["tag",r==="English"?"tag2":r==="Multilingual"?"tag3":r==="Chinese"?"tag1":`tag${S%4+4}`])},o(r),3))),128)),e.row.language?G("",!0):(t(),s("span",oe,"-"))])]),_:1}),l(p,{prop:"paper/news",label:"Paper/News","show-overflow-tooltip":"",width:"300"},{default:n(e=>[e.row["paper/news"]?(t(),s("a",{key:1,href:e.row["paper/news"],target:"_blank"},o(e.row["paper/news"]),9,ne)):(t(),s("span",se,"/"))]),_:1}),l(p,{prop:"parameters",label:"# of Parameters",width:"200"},{default:n(e=>[e.row.parameters_dense&&e.row.parameters_MoE?(t(),s("span",re,[j(" dense: "+o(e.row.parameters_dense&&e.row.parameters_dense.join(" , ")),1),ie,j(" MoE:"+o(e.row.parameters_MoE&&e.row.parameters_MoE.join(" , ")),1)])):(t(),s("span",de,o(e.row.parameters_dense&&e.row.parameters_dense.join(" , "))+" "+o(e.row.parameters_MoE&&e.row.parameters_MoE.join(" , ")),1))]),_:1}),l(p,{prop:"model",label:"Model","show-overflow-tooltip":"",width:"300",sortable:""},{default:n(e=>[e.row.model?(t(),s("a",{key:1,href:e.row.model,target:"_blank"},o(e.row.model),9,_e)):(t(),s("span",ue,"-"))]),_:1}),l(p,{prop:"code",label:"Code","show-overflow-tooltip":"",width:"300",sortable:""},{default:n(e=>[e.row.code?(t(),s("a",{key:1,href:e.row.code,target:"_blank"},o(e.row.code),9,ce)):(t(),s("span",pe,"-"))]),_:1}),l(p,{prop:"api",label:"API","show-overflow-tooltip":"",width:"300",sortable:""},{default:n(e=>[e.row.api?(t(),s("a",{key:1,href:e.row.api,target:"_blank"},o(e.row.api),9,he)):(t(),s("span",fe,"-"))]),_:1})]),_:1},8,["data"])]),a("div",we,[(t(!0),s(V,null,D(g.value,(e,r)=>(t(),s("ul",{key:r},[a("li",null,[ge,a("span",null,o(e.name),1)]),a("li",null,[me,a("span",null,o(e.release_date),1)]),a("li",null,[ve,a("span",null,o(e.domain&&e.domain.join(",")),1)]),a("li",null,[be,a("span",null,o(e.affiliation.join(",")),1)]),a("li",null,[ke,a("span",null,o(e.language&&e.language.join(",")),1)]),a("li",null,[ye,y(a("a",{href:e["paper/news"],target:"_blank",class:"link"},o(e["paper/news"]),9,xe),[[x,e["paper/news"]]]),y(a("span",null," - ",512),[[x,!e["paper/news"]]])]),a("li",null,[Ve,a("span",null,o(e.parameters_dense?`dense:${e.parameters_dense}`:"")+" "+o(e.parameters_MoE?`MoE:${e.parameters_MoE}`:""),1)]),a("li",null,[De,y(a("a",{href:e.model,target:"_blank",class:"link"},o(e.model),9,Te),[[x,e.model]]),y(a("span",null," - ",512),[[x,!e.model]])]),a("li",null,[Se,y(a("a",{href:e.code,target:"_blank",class:"link"},o(e.code),9,Ee),[[x,e.code]]),y(a("span",null," - ",512),[[x,!e.code]])]),a("li",null,[je,y(a("a",{href:e.api,target:"_blank",class:"link"},o(e.api),9,Me),[[x,e.api]]),y(a("span",null," - ",512),[[x,!e.api]])])]))),128))])]),_:1})])}}});var Le=I(Ce,[["__scopeId","data-v-01abffe4"]]);const $e={};function Ne(T,v){const g=Le;return t(),A(g)}var Be=I($e,[["render",Ne]]);export{Be as default};
