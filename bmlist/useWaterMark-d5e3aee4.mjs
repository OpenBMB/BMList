/*! build package in 2022/7/27 18:58:22 ! */
import{m as r}from"./entry-f6f371e6.mjs";var s=()=>fetch("https://raw.githubusercontent.com/OpenBMB/BMList/main/all_models.json").then(t=>t.json()),c=()=>r;const l=({text:t,domId:n="chart-container"})=>{const a=document.querySelector(`#${n} canvas`),e=a.getContext("2d");return e.textAlign="center",e.textBaseline="middle",e.globalAlpha=.4,e.font="24px Microsoft Yahei",t=`Last updated: ${t||new Date().toLocaleDateString()}`,e.fillText(t,380,160),t="@OpenBMB",e.fillText(t,300,210),a};export{s as a,c as b,l as u};