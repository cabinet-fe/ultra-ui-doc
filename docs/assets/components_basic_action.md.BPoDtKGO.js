import{R as d}from"./chunks/theme.C5M20ToJ.js";import{d as c,g as v,a4 as s,l as i,m as r,v as n,b as a,B as l,F as b,L as B,u as A,c as u,I as _,a9 as x}from"./chunks/framework.Cggwgzyo.js";const g={class:"mb-2"},F=c({__name:"basic",setup(E){const D=["查看","编辑","审批"],t=v(2);return(m,e)=>{const p=s("u-action"),C=s("u-action-group"),f=s("u-number-input");return i(),r("div",null,[n("div",g,[a(C,{max:t.value},{default:l(()=>[(i(),r(b,null,B(D,o=>a(p,{onRun:V=>A(d).success(`点击了${o}按钮`)},{default:l(()=>[u(_(o),1)]),_:2},1032,["onRun"])),64)),a(p,{"need-confirm":"",type:"danger",onRun:e[0]||(e[0]=o=>A(d).success("已删除"))},{default:l(()=>e[2]||(e[2]=[u(" 删除 ")])),_:1})]),_:1},8,["max"])]),n("div",null,[e[3]||(e[3]=n("span",{class:"pl-3"},"最大显示按钮数: ",-1)),a(f,{style:{width:"100px"},step:1,min:1,modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=o=>t.value=o),clearable:!1},null,8,["modelValue"])])])}}}),P=JSON.parse('{"title":"Action 操作按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/basic/action.md","filePath":"components/basic/action.md","lastUpdated":1734403386000}'),y={name:"components/basic/action.md"},R=c({...y,setup(E){return(D,t)=>{const m=s("v-demo"),e=s("ClientOnly");return i(),r("div",null,[t[1]||(t[1]=n("h1",{id:"action-操作按钮",tabindex:"-1"},[u("Action 操作按钮 "),n("a",{class:"header-anchor",href:"#action-操作按钮","aria-label":'Permalink to "Action 操作按钮"'},"​")],-1)),t[2]||(t[2]=n("p",null,"Action 提供了一种便捷地操作交互体验。例如超出多少按钮隐藏，点击按钮需要确认等。",-1)),t[3]||(t[3]=n("p",null,"在数据表格和卡片中这个组件应该很常用。",-1)),t[4]||(t[4]=n("h2",{id:"基础使用",tabindex:"-1"},[u("基础使用 "),n("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),t[5]||(t[5]=n("p",null,"最大显示按钮数量默认是 3。你可以自行选择。",-1)),a(e,null,{default:l(()=>[a(m,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%3E%0D%0A%20%20%20%20%3Cdiv%20class%3D%22mb-2%22%3E%0D%0A%20%20%20%20%20%20%3Cu-action-group%20%3Amax%3D%22max%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-action%0D%0A%20%20%20%20%20%20%20%20%20%20v-for%3D%22button%20of%20buttons%22%0D%0A%20%20%20%20%20%20%20%20%20%20%40run%3D%22message.success(%60%E7%82%B9%E5%87%BB%E4%BA%86%24%7Bbutton%7D%E6%8C%89%E9%92%AE%60)%22%0D%0A%20%20%20%20%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%7B%20button%20%7D%7D%0D%0A%20%20%20%20%20%20%20%20%3C%2Fu-action%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-action%20need-confirm%20type%3D%22danger%22%20%40run%3D%22message.success('%E5%B7%B2%E5%88%A0%E9%99%A4')%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%E5%88%A0%E9%99%A4%0D%0A%20%20%20%20%20%20%20%20%3C%2Fu-action%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-action-group%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%0D%0A%20%20%20%20%3Cdiv%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22pl-3%22%3E%E6%9C%80%E5%A4%A7%E6%98%BE%E7%A4%BA%E6%8C%89%E9%92%AE%E6%95%B0%3A%20%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cu-number-input%0D%0A%20%20%20%20%20%20%20%20style%3D%22width%3A%20100px%22%0D%0A%20%20%20%20%20%20%20%20%3Astep%3D%221%22%0D%0A%20%20%20%20%20%20%20%20%3Amin%3D%221%22%0D%0A%20%20%20%20%20%20%20%20v-model%3D%22max%22%0D%0A%20%20%20%20%20%20%20%20%3Aclearable%3D%22false%22%0D%0A%20%20%20%20%20%20%2F%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20message%20%7D%20from%20'ultra-ui'%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aconst%20buttons%20%3D%20%5B'%E6%9F%A5%E7%9C%8B'%2C%20'%E7%BC%96%E8%BE%91'%2C%20'%E5%AE%A1%E6%89%B9'%5D%0D%0A%0D%0Aconst%20max%20%3D%20ref(2)%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:F,"use-data":A(x)},{default:l(()=>t[0]||(t[0]=[n("p",null,"render(components/basic/action/basic.vue)",-1)])),_:1},8,["use-data"])]),_:1})])}}});export{P as __pageData,R as default};