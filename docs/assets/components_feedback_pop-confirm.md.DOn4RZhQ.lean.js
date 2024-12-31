import{f as _}from"./chunks/theme.M8-lg1iK.js";import{d as p,a4 as a,l as m,A as E,B as n,b as o,c as u,u as s,m as b,x as f,v as l,a9 as A}from"./chunks/framework.Cggwgzyo.js";const h=p({__name:"custom",setup(D){const c=()=>{console.log("confirm")},t=()=>{console.log("cancel")};return(r,e)=>{const d=a("u-button"),i=a("u-pop-confirm");return m(),E(i,{title:"自定义文字、图标",onConfirm:c,onCancel:t,"confirm-text":"继续","cancel-text":"结束",icon:s(_)},{reference:n(()=>[o(d,null,{default:n(()=>e[0]||(e[0]=[u("自定义")])),_:1})]),_:1},8,["icon"])}}}),C=p({__name:"basic",setup(D){const c=()=>{console.log("confirm")},t=()=>{console.log("cancel")};return(r,e)=>{const d=a("u-button"),i=a("u-pop-confirm");return m(),E(i,{title:"确定要删除吗？",onConfirm:c,onCancel:t,alignment:"start"},{reference:n(()=>[o(d,null,{default:n(()=>e[0]||(e[0]=[u("删除")])),_:1})]),_:1})}}}),g=JSON.parse('{"title":"PopConfirm 弹出确认框","description":"","frontmatter":{},"headers":[],"relativePath":"components/feedback/pop-confirm.md","filePath":"components/feedback/pop-confirm.md","lastUpdated":1734403386000}'),B={name:"components/feedback/pop-confirm.md"},k=p({...B,setup(D){return(c,t)=>{const r=a("v-demo"),e=a("ClientOnly");return m(),b("div",null,[t[2]||(t[2]=f('<h1 id="popconfirm-弹出确认框" tabindex="-1">PopConfirm 弹出确认框 <a class="header-anchor" href="#popconfirm-弹出确认框" aria-label="Permalink to &quot;PopConfirm 弹出确认框&quot;">​</a></h1><p>用于在重要操作或敏感操作之前，提示用户确认其行为，以避免误操作或提供额外的提示信息。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>基于 <a href="/ultra-ui-doc/components/feedback/tip.html">Tip 弹出提示</a> 的提示框</p>',4)),o(e,null,{default:n(()=>[o(r,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-pop-confirm%0D%0A%20%20%20%20title%3D%22%E7%A1%AE%E5%AE%9A%E8%A6%81%E5%88%A0%E9%99%A4%E5%90%97%EF%BC%9F%22%0D%0A%20%20%20%20%40confirm%3D%22confirmEvent%22%0D%0A%20%20%20%20%40cancel%3D%22cancelEvent%22%0D%0A%20%20%20%20alignment%3D%22start%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Ctemplate%20%23reference%3E%0D%0A%20%20%20%20%20%20%3Cu-button%3E%E5%88%A0%E9%99%A4%3C%2Fu-button%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fu-pop-confirm%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aconst%20confirmEvent%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20console.log('confirm')%0D%0A%7D%0D%0Aconst%20cancelEvent%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20console.log('cancel')%0D%0A%7D%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:C,"use-data":s(A)},{default:n(()=>t[0]||(t[0]=[l("p",null,"render(components/feedback/pop-confirm/basic.vue)",-1)])),_:1},8,["use-data"])]),_:1}),t[3]||(t[3]=l("h2",{id:"自定义文字、图标",tabindex:"-1"},[u("自定义文字、图标 "),l("a",{class:"header-anchor",href:"#自定义文字、图标","aria-label":'Permalink to "自定义文字、图标"'},"​")],-1)),o(e,null,{default:n(()=>[o(r,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-pop-confirm%0D%0A%20%20%20%20title%3D%22%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%87%E5%AD%97%E3%80%81%E5%9B%BE%E6%A0%87%22%0D%0A%20%20%20%20%40confirm%3D%22confirmEvent%22%0D%0A%20%20%20%20%40cancel%3D%22cancelEvent%22%0D%0A%20%20%20%20confirm-text%3D%22%E7%BB%A7%E7%BB%AD%22%0D%0A%20%20%20%20cancel-text%3D%22%E7%BB%93%E6%9D%9F%22%0D%0A%20%20%20%20%3Aicon%3D%22Wps%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Ctemplate%20%23reference%3E%0D%0A%20%20%20%20%20%20%3Cu-button%3E%E8%87%AA%E5%AE%9A%E4%B9%89%3C%2Fu-button%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fu-pop-confirm%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20Wps%20%7D%20from%20%22icon-ultra%22%0D%0Aconst%20confirmEvent%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20console.log(%22confirm%22)%0D%0A%7D%0D%0Aconst%20cancelEvent%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20console.log(%22cancel%22)%0D%0A%7D%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:h,"use-data":s(A)},{default:n(()=>t[1]||(t[1]=[l("p",null,"render(components/feedback/pop-confirm/custom.vue)",-1)])),_:1},8,["use-data"])]),_:1}),t[4]||(t[4]=f('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>否</td><td>弹出框的标题文字</td></tr><tr><td>icon</td><td>Component</td><td>否</td><td>显示的图标组件</td></tr><tr><td>confirmText</td><td>string</td><td>否</td><td>确认按钮的文字</td></tr><tr><td>cancelText</td><td>string</td><td>否</td><td>取消按钮的文字</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>confirm</td><td>无</td><td>用户点击确认按钮时触发</td></tr><tr><td>cancel</td><td>无</td><td>用户点击取消按钮时触发</td></tr></tbody></table>',4))])}}});export{g as __pageData,k as default};