import{e as u,l as c,a4 as l,o as m,c as p,g as n,B as s,d as i,F as _,a,v as b,a9 as A}from"./chunks/framework.CVV5GBIh.js";const E=u({__name:"basic",setup(D){const o=c(!1);return(t,e)=>{const d=l("u-button"),f=l("u-dialog");return m(),p(_,null,[n(d,{onClick:e[0]||(e[0]=r=>o.value=!0)},{default:s(()=>e[2]||(e[2]=[i("打开")])),_:1}),n(f,{style:{width:"500px"},title:"标题",modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=r=>o.value=r)},{default:s(()=>e[3]||(e[3]=[i(" 弹框内容 ")])),_:1},8,["modelValue"])],64)}}}),C=JSON.parse('{"title":"Dialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/feedback/dialog.md","filePath":"components/feedback/dialog.md","lastUpdated":1730369134000}'),g={name:"components/feedback/dialog.md"},k=u({...g,setup(D){return(o,t)=>{const e=l("v-demo"),d=l("ClientOnly");return m(),p("div",null,[t[1]||(t[1]=a("h1",{id:"dialog-对话框",tabindex:"-1"},[i("Dialog 对话框 "),a("a",{class:"header-anchor",href:"#dialog-对话框","aria-label":'Permalink to "Dialog 对话框"'},"​")],-1)),t[2]||(t[2]=a("p",null,"对话框时最常用的交互反馈组件之一，",-1)),t[3]||(t[3]=a("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),n(d,null,{default:s(()=>[n(e,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-button%20%40click%3D%22visible%20%3D%20true%22%3E%E6%89%93%E5%BC%80%3C%2Fu-button%3E%0D%0A%0D%0A%20%20%3Cu-dialog%20style%3D%22width%3A%20500px%22%20title%3D%22%E6%A0%87%E9%A2%98%22%20v-model%3D%22visible%22%3E%0D%0A%20%20%20%20%E5%BC%B9%E6%A1%86%E5%86%85%E5%AE%B9%0D%0A%20%20%3C%2Fu-dialog%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aconst%20visible%20%3D%20ref(false)%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:E,"use-data":b(A)},{default:s(()=>t[0]||(t[0]=[a("p",null,"render(feedback/dialog/basic.vue)",-1)])),_:1},8,["use-data"])]),_:1})])}}});export{C as __pageData,k as default};
