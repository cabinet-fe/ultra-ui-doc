import{d as p,s as m,a4 as a,l as u,m as s,b as e,B as n,c as i,v as r,a8 as b,x as C,u as c,a9 as E}from"./chunks/framework.Cggwgzyo.js";const f={ref:"triggerDom"},g=p({__name:"virtual",setup(D){const o=m();return(t,d)=>{const l=a("u-button"),A=a("u-tip");return u(),s("div",null,[e(l,{onClick:d[0]||(d[0]=T=>o.value.trigger({triggerDom:t.$refs.triggerDom,content:"7777"}))},{default:n(()=>d[1]||(d[1]=[i("触发按钮")])),_:1}),r("span",f,"实际触发位置",512),e(A,{ref_key:"tipRef",ref:o,trigger:"click"},null,512)])}}}),F={},h={class:"basic-box"},_={class:"row center"},v={class:"row"},x={class:"row"},B={class:"row"},k={class:"row center"};function w(D,o){const t=a("u-button"),d=a("u-tip");return u(),s("div",h,[r("div",_,[e(d,{direction:"top",alignment:"start",content:"我是 Top Start"},{default:n(()=>[e(t,null,{default:n(()=>o[0]||(o[0]=[i("top-start")])),_:1})]),_:1}),e(d,{direction:"top",alignment:"center",content:"我是 Top Center"},{default:n(()=>[e(t,null,{default:n(()=>o[1]||(o[1]=[i("top")])),_:1})]),_:1}),e(d,{direction:"top",alignment:"end",content:"我是 Top End"},{default:n(()=>[e(t,null,{default:n(()=>o[2]||(o[2]=[i("top-end")])),_:1})]),_:1})]),r("div",v,[e(d,{direction:"left",alignment:"start",content:"我是 Left Start"},{default:n(()=>[e(t,null,{default:n(()=>o[3]||(o[3]=[i("left-start")])),_:1})]),_:1}),e(d,{direction:"right",alignment:"start",content:"我是 Right Start"},{default:n(()=>[e(t,null,{default:n(()=>o[4]||(o[4]=[i("right-start")])),_:1})]),_:1})]),r("div",x,[e(d,{direction:"left",alignment:"center",content:"我是 Left Center"},{default:n(()=>[e(t,{class:"mt-3 mb-3"},{default:n(()=>o[5]||(o[5]=[i("left")])),_:1})]),_:1}),e(d,{direction:"right",alignment:"center",content:"我是 Right Center"},{default:n(()=>[e(t,null,{default:n(()=>o[6]||(o[6]=[i("right")])),_:1})]),_:1})]),r("div",B,[e(d,{direction:"left",alignment:"end",content:"我是 Left End"},{default:n(()=>[e(t,null,{default:n(()=>o[7]||(o[7]=[i("left-end")])),_:1})]),_:1}),e(d,{direction:"right",alignment:"end",content:"我是 Right End"},{default:n(()=>[e(t,null,{default:n(()=>o[8]||(o[8]=[i("right-end")])),_:1})]),_:1})]),r("div",k,[e(d,{direction:"bottom",alignment:"start",content:"我是 Bottom Start"},{default:n(()=>[e(t,null,{default:n(()=>o[9]||(o[9]=[i("bottom-start")])),_:1})]),_:1}),e(d,{direction:"bottom",alignment:"center",content:"我是 Bottom Center"},{default:n(()=>[e(t,null,{default:n(()=>o[10]||(o[10]=[i("bottom")])),_:1})]),_:1}),e(d,{direction:"bottom",alignment:"end",content:"我是 Bottom End"},{default:n(()=>[e(t,null,{default:n(()=>o[11]||(o[11]=[i("bottom-end")])),_:1})]),_:1})])])}const y=b(F,[["render",w],["__scopeId","data-v-87d973a6"]]),P=JSON.parse('{"title":"Tip 弹出提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/feedback/tip.md","filePath":"components/feedback/tip.md","lastUpdated":1730885906000}'),R={name:"components/feedback/tip.md"},q=p({...R,setup(D){return(o,t)=>{const d=a("v-demo"),l=a("ClientOnly");return u(),s("div",null,[t[2]||(t[2]=r("h1",{id:"tip-弹出提示",tabindex:"-1"},[i("Tip 弹出提示 "),r("a",{class:"header-anchor",href:"#tip-弹出提示","aria-label":'Permalink to "Tip 弹出提示"'},"​")],-1)),t[3]||(t[3]=r("p",null,"用于在页面中展示简洁的提示信息,帮助用户更好地理解操作或内容",-1)),t[4]||(t[4]=r("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),r("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),t[5]||(t[5]=r("p",null,"跟所有的 UI 库一样,支持 9 种不同方向的展示",-1)),e(l,null,{default:n(()=>[e(d,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20class%3D%22basic-box%22%3E%0D%0A%20%20%20%20%3Cdiv%20class%3D%22row%20center%22%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22top%22%20alignment%3D%22start%22%20content%3D%22%E6%88%91%E6%98%AF%20Top%20Start%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Etop-start%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22top%22%20alignment%3D%22center%22%20content%3D%22%E6%88%91%E6%98%AF%20Top%20Center%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Etop%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22top%22%20alignment%3D%22end%22%20content%3D%22%E6%88%91%E6%98%AF%20Top%20End%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Etop-end%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%0D%0A%20%20%20%20%3Cdiv%20class%3D%22row%22%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22left%22%20alignment%3D%22start%22%20content%3D%22%E6%88%91%E6%98%AF%20Left%20Start%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Eleft-start%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22right%22%20alignment%3D%22start%22%20content%3D%22%E6%88%91%E6%98%AF%20Right%20Start%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Eright-start%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%0D%0A%20%20%20%20%3Cdiv%20class%3D%22row%22%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22left%22%20alignment%3D%22center%22%20content%3D%22%E6%88%91%E6%98%AF%20Left%20Center%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%20class%3D%22mt-3%20mb-3%22%3Eleft%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22right%22%20alignment%3D%22center%22%20content%3D%22%E6%88%91%E6%98%AF%20Right%20Center%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Eright%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%0D%0A%20%20%20%20%3Cdiv%20class%3D%22row%22%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22left%22%20alignment%3D%22end%22%20content%3D%22%E6%88%91%E6%98%AF%20Left%20End%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Eleft-end%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22right%22%20alignment%3D%22end%22%20content%3D%22%E6%88%91%E6%98%AF%20Right%20End%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Eright-end%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%0D%0A%20%20%20%20%3Cdiv%20class%3D%22row%20center%22%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22bottom%22%20alignment%3D%22start%22%20content%3D%22%E6%88%91%E6%98%AF%20Bottom%20Start%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Ebottom-start%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22bottom%22%20alignment%3D%22center%22%20content%3D%22%E6%88%91%E6%98%AF%20Bottom%20Center%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Ebottom%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22bottom%22%20alignment%3D%22end%22%20content%3D%22%E6%88%91%E6%98%AF%20Bottom%20End%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Ebottom-end%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cstyle%20scoped%3E%0D%0A.basic-box%20%7B%0D%0A%20%20width%3A%20600px%3B%0D%0A%7D%0D%0A%0D%0A.basic-box%20.row%20%7B%0D%0A%20%20display%3A%20flex%3B%0D%0A%20%20align-items%3A%20center%3B%0D%0A%20%20justify-content%3A%20space-between%3B%0D%0A%7D%0D%0A%0D%0A.basic-box%20.center%20%7B%0D%0A%20%20justify-content%3A%20center%3B%0D%0A%7D%0D%0A%0D%0A.basic-box%20.center%20%3E%20*%20%7B%0D%0A%20%20margin%3A%200%2010px%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E%0D%0A",title:"",component:y,"use-data":c(E)},{default:n(()=>t[0]||(t[0]=[r("p",null,"render(components/feedback/tip/basic.vue)",-1)])),_:1},8,["use-data"])]),_:1}),t[6]||(t[6]=r("h2",{id:"虚拟触发",tabindex:"-1"},[i("虚拟触发 "),r("a",{class:"header-anchor",href:"#虚拟触发","aria-label":'Permalink to "虚拟触发"'},"​")],-1)),e(l,null,{default:n(()=>[e(d,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%3E%0D%0A%20%20%20%20%3Cu-button%0D%0A%20%20%20%20%20%20%40click%3D%22tipRef.trigger(%7B%20triggerDom%3A%20%24refs.triggerDom%2C%20content%3A%20'7777'%20%7D)%22%0D%0A%20%20%20%20%20%20%3E%E8%A7%A6%E5%8F%91%E6%8C%89%E9%92%AE%3C%2Fu-button%0D%0A%20%20%20%20%3E%0D%0A%0D%0A%20%20%20%20%3Cspan%20ref%3D%22triggerDom%22%3E%E5%AE%9E%E9%99%85%E8%A7%A6%E5%8F%91%E4%BD%8D%E7%BD%AE%3C%2Fspan%3E%0D%0A%0D%0A%20%20%20%20%3Cu-tip%20ref%3D%22tipRef%22%20trigger%3D%22click%22%3E%20%3C%2Fu-tip%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20shallowRef%20%7D%20from%20%22vue%22%0D%0A%0D%0Aconst%20tipRef%20%3D%20shallowRef()%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:g,"use-data":c(E)},{default:n(()=>t[1]||(t[1]=[r("p",null,"render(components/feedback/tip/virtual.vue)",-1)])),_:1},8,["use-data"])]),_:1}),t[7]||(t[7]=C('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>content</td><td>string</td><td>是</td><td>显示在提示框中的内容文本</td></tr><tr><td>style</td><td><code>CSSProperties</code> | <code>string</code></td><td>否</td><td>自定义 Tip 提示框的样式，可以是样式对象或字符串</td></tr><tr><td>class</td><td><code>string</code> | <code>string[]</code> | <code>Record&lt;string, boolean&gt;</code></td><td>否</td><td>自定义 Tip 提示框的 class 名称</td></tr><tr><td>trigger</td><td><code>hover</code> | <code>click</code></td><td>否</td><td>触发提示框的方式，可选择悬停 hover 或点击 click，默认为<code>hover</code></td></tr><tr><td>direction</td><td><code>top</code> | <code>bottom</code> | <code>left</code> | <code>right</code></td><td>否</td><td>提示框的弹出方向，默认值为 <code>auto</code></td></tr><tr><td>hideArrow</td><td>boolean</td><td>否</td><td>是否隐藏提示框的小箭头，默认不隐藏</td></tr><tr><td>alignment</td><td><code>start</code> | <code>center</code> | <code>end</code></td><td>否</td><td>提示框内容的对齐方式，默认为 <code>center</code></td></tr><tr><td>contentTag</td><td>string</td><td>否</td><td>用于渲染提示内容的标签类型，默认为 <code>div</code></td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>参数类型</th><th>描述</th></tr></thead><tbody><tr><td>update:modelValue</td><td>string</td><td>当提示框的内容更新时触发此事件</td></tr></tbody></table><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th>方法名</th><th>描述</th></tr></thead><tbody><tr><td>close</td><td>关闭提示框</td></tr></tbody></table>',6))])}}});export{P as __pageData,q as default};
