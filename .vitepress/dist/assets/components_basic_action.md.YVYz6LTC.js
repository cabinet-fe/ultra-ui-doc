import{d,k as C,a2 as o,o as u,c as i,a as e,f as a,A as s,F as _,K as f,b as r,H as b,u as v,a7 as x}from"./chunks/framework.Dtab5t9n.js";const B=d({__name:"basic",setup(c){const p=["查看","编辑","审批"],t=C(2);return(m,n)=>{const D=o("u-number-input"),A=o("u-action"),E=o("u-action-group");return u(),i("div",null,[e("div",null,[n[1]||(n[1]=e("span",null,"最大显示按钮数: ",-1)),a(D,{style:{width:"100px"},step:1,min:1,modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=l=>t.value=l),clearable:!1},null,8,["modelValue"])]),a(E,{max:t.value},{default:s(()=>[(u(),i(_,null,f(p,l=>a(A,null,{default:s(()=>[r(b(l),1)]),_:2},1024)),64)),a(A,{"need-confirm":"",type:"danger"},{default:s(()=>n[2]||(n[2]=[r("删除")])),_:1})]),_:1},8,["max"])])}}}),y=JSON.parse('{"title":"Action 操作按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/basic/action.md","filePath":"components/basic/action.md","lastUpdated":1730110089000}'),F={name:"components/basic/action.md"},V=d({...F,setup(c){return(p,t)=>{const m=o("v-demo"),n=o("ClientOnly");return u(),i("div",null,[t[1]||(t[1]=e("h1",{id:"action-操作按钮",tabindex:"-1"},[r("Action 操作按钮 "),e("a",{class:"header-anchor",href:"#action-操作按钮","aria-label":'Permalink to "Action 操作按钮"'},"​")],-1)),t[2]||(t[2]=e("p",null,"Action 提供了一种便捷地操作交互体验。例如超出多少按钮隐藏，点击按钮需要确认等。",-1)),t[3]||(t[3]=e("p",null,"在数据表格和卡片中这个组件应该很常用。",-1)),a(n,null,{default:s(()=>[a(m,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%3E%0D%0A%20%20%20%20%3Cdiv%3E%0D%0A%20%20%20%20%20%20%3Cspan%3E%E6%9C%80%E5%A4%A7%E6%98%BE%E7%A4%BA%E6%8C%89%E9%92%AE%E6%95%B0%3A%20%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cu-number-input%0D%0A%20%20%20%20%20%20%20%20style%3D%22width%3A%20100px%22%0D%0A%20%20%20%20%20%20%20%20%3Astep%3D%221%22%0D%0A%20%20%20%20%20%20%20%20%3Amin%3D%221%22%0D%0A%20%20%20%20%20%20%20%20v-model%3D%22max%22%0D%0A%20%20%20%20%20%20%20%20%3Aclearable%3D%22false%22%0D%0A%20%20%20%20%20%20%2F%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%0D%0A%20%20%20%20%3Cu-action-group%20%3Amax%3D%22max%22%3E%0D%0A%20%20%20%20%20%20%3Cu-action%20v-for%3D%22button%20of%20buttons%22%3E%7B%7B%20button%20%7D%7D%3C%2Fu-action%3E%0D%0A%20%20%20%20%20%20%3Cu-action%20need-confirm%20type%3D%22danger%22%3E%E5%88%A0%E9%99%A4%3C%2Fu-action%3E%0D%0A%20%20%20%20%3C%2Fu-action-group%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aconst%20buttons%20%3D%20%5B'%E6%9F%A5%E7%9C%8B'%2C%20'%E7%BC%96%E8%BE%91'%2C%20'%E5%AE%A1%E6%89%B9'%5D%0D%0A%0D%0Aconst%20max%20%3D%20ref(2)%0D%0A%3C%2Fscript%3E%0D%0A",title:" 基础操作按钮",component:B,"use-data":v(x)},{default:s(()=>t[0]||(t[0]=[e("p",null,"render(basic/action/basic.vue)",-1)])),_:1},8,["use-data"])]),_:1})])}}});export{y as __pageData,V as default};