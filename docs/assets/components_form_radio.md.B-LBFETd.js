import{d as C,D as p,B as c,o as A,b as g,c as E,F as h,C as F,j as l,G as o,w as r,a as n,t as b,ah as V,k as _,u as f}from"./chunks/framework.DSODM362.js";const R=C({__name:"disabled-item",setup(v){const d=p(),e=[{label:"前端开发",value:"1"},{label:"后端开发",value:"2"},{label:"数据库",value:"3"},{label:"云计算",value:"4"}];return(u,t)=>{const D=c("u-radio-group");return A(),g(D,{items:e,modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=a=>d.value=a),"disabled-item":a=>a.value==="2"},null,8,["modelValue","disabled-item"])}}}),k=C({__name:"disabled",setup(v){const d=p(),e=p(),u=[{label:"前端开发",value:"1"},{label:"后端开发",value:"2"},{label:"数据库",value:"3"},{label:"云计算",value:"4"}],t=[{name:"前端开发",id:"1"},{name:"后端开发",id:"2"},{name:"数据库",id:"3"},{name:"云计算",id:"4"}];return(D,a)=>{const B=c("u-radio");return A(),E("div",null,[(A(),E(h,null,F(u,({label:s,value:i})=>o(B,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=m=>d.value=m),value:i,disabled:i==="3"},{default:r(()=>[n(b(s),1)]),_:2},1032,["modelValue","value","disabled"])),64)),l("div",null,[(A(),E(h,null,F(t,({name:s,id:i})=>o(B,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=m=>e.value=m),value:i,disabled:i==="4"},{default:r(()=>[n(b(s)+"-"+b(i),1)]),_:2},1032,["modelValue","value","disabled"])),64))])])}}}),x=C({__name:"block",setup(v){const d=p(),e=[{label:"前端开发",value:"1"},{label:"后端开发",value:"2"},{label:"数据库",value:"3"},{label:"云计算",value:"4"}];return(u,t)=>{const D=c("u-radio-group");return A(),g(D,{items:e,modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=a=>d.value=a),block:""},null,8,["modelValue"])}}}),y=C({__name:"group",setup(v){const d=p(),e=[{label:"前端开发",value:"1"},{label:"后端开发",value:"2"},{label:"数据库",value:"3"},{label:"云计算",value:"4"}];return(u,t)=>{const D=c("u-radio-group");return A(),g(D,{items:e,modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=a=>d.value=a)},null,8,["modelValue"])}}}),w=C({__name:"basic",setup(v){const d=p(),e=p(),u=[{label:"前端开发",value:"1"},{label:"后端开发",value:"2"}],t=[{name:"数据库",id:"1"},{name:"云计算",id:"2"}];return(D,a)=>{const B=c("u-radio");return A(),E("div",null,[(A(),E(h,null,F(u,({label:s,value:i})=>o(B,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=m=>d.value=m),value:i},{default:r(()=>[n(b(s),1)]),_:2},1032,["modelValue","value"])),64)),l("div",null,[(A(),E(h,null,F(t,({name:s,id:i})=>o(B,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=m=>e.value=m),value:i},{default:r(()=>[n(b(s)+"-"+b(i),1)]),_:2},1032,["modelValue","value"])),64))])])}}}),q=JSON.parse('{"title":"RadioGroup 单选框组","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/radio.md","filePath":"components/form/radio.md","lastUpdated":1734355318000}'),P={name:"components/form/radio.md"},S=C({...P,setup(v){return(d,e)=>{const u=c("v-demo"),t=c("ClientOnly");return A(),E("div",null,[e[5]||(e[5]=V('<h1 id="radiogroup-单选框组" tabindex="-1">RadioGroup 单选框组 <a class="header-anchor" href="#radiogroup-单选框组" aria-label="Permalink to &quot;RadioGroup 单选框组&quot;">​</a></h1><p>一组单选框的容器，允许用户在多个选项中选择一个</p><details class="details custom-block"><summary>提示</summary><p>在这里，你将了解两种 Radio 组件的使用方法</p><ul><li><a href="/ultra-ui-doc/components/form/radio.html#基本用法">u-radio</a> 适用于单个选择项的简单选择场景。</li><li><a href="/ultra-ui-doc/components/form/radio.html#单选框组">u-radio-group</a> 提供分组功能，方便用户在多个选项中快速选择。</li></ul><p>通过示例探索它们的应用效果吧！</p></details><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2>',4)),o(t,null,{default:r(()=>[o(u,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%3E%0D%0A%20%20%20%20%3Cu-radio%20v-for%3D%22%7B%20label%2C%20value%20%7D%20of%20items%22%20v-model%3D%22radio1%22%20%3Avalue%3D%22value%22%3E%0D%0A%20%20%20%20%20%20%7B%7B%20label%20%7D%7D%0D%0A%20%20%20%20%3C%2Fu-radio%3E%0D%0A%20%20%20%20%3Cdiv%3E%0D%0A%20%20%20%20%20%20%3Cu-radio%20v-for%3D%22%7B%20name%2C%20id%20%7D%20of%20items2%22%20v-model%3D%22radio2%22%20%3Avalue%3D%22id%22%3E%0D%0A%20%20%20%20%20%20%20%20%7B%7B%20name%20%7D%7D-%7B%7B%20id%20%7D%7D%0D%0A%20%20%20%20%20%20%3C%2Fu-radio%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20shallowRef%20%7D%20from%20%22vue%22%0D%0A%0D%0Aconst%20radio1%20%3D%20shallowRef()%0D%0Aconst%20radio2%20%3D%20shallowRef()%0D%0A%0D%0Aconst%20items%20%3D%20%5B%0D%0A%20%20%7B%20label%3A%20%22%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%22%2C%20value%3A%20%221%22%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91%22%2C%20value%3A%20%222%22%20%7D%2C%0D%0A%5D%0D%0Aconst%20items2%20%3D%20%5B%0D%0A%20%20%7B%20name%3A%20%22%E6%95%B0%E6%8D%AE%E5%BA%93%22%2C%20id%3A%20%221%22%20%7D%2C%0D%0A%20%20%7B%20name%3A%20%22%E4%BA%91%E8%AE%A1%E7%AE%97%22%2C%20id%3A%20%222%22%20%7D%2C%0D%0A%5D%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:w,"use-data":_(f)},{default:r(()=>e[0]||(e[0]=[l("p",null,"render(components/form/radio/basic.vue)",-1)])),_:1},8,["use-data"])]),_:1}),e[6]||(e[6]=l("h2",{id:"单选框组",tabindex:"-1"},[n("单选框组 "),l("a",{class:"header-anchor",href:"#单选框组","aria-label":'Permalink to "单选框组"'},"​")],-1)),o(t,null,{default:r(()=>[o(u,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-radio-group%20%3Aitems%3D%22items%22%20v-model%3D%22radio1%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20shallowRef%20%7D%20from%20%22vue%22%0D%0A%0D%0Aconst%20radio1%20%3D%20shallowRef()%0D%0A%0D%0Aconst%20items%20%3D%20%5B%0D%0A%20%20%7B%20label%3A%20%22%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%22%2C%20value%3A%20%221%22%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91%22%2C%20value%3A%20%222%22%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22%E6%95%B0%E6%8D%AE%E5%BA%93%22%2C%20value%3A%20%223%22%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22%E4%BA%91%E8%AE%A1%E7%AE%97%22%2C%20value%3A%20%224%22%20%7D%2C%0D%0A%5D%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:y,"use-data":_(f)},{default:r(()=>e[1]||(e[1]=[l("p",null,"render(components/form/radio/group.vue)",-1)])),_:1},8,["use-data"])]),_:1}),e[7]||(e[7]=l("h2",{id:"block-布局",tabindex:"-1"},[n("Block 布局 "),l("a",{class:"header-anchor",href:"#block-布局","aria-label":'Permalink to "Block 布局"'},"​")],-1)),o(t,null,{default:r(()=>[o(u,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-radio-group%20%3Aitems%3D%22items%22%20v-model%3D%22radio1%22%20block%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20shallowRef%20%7D%20from%20%22vue%22%0D%0A%0D%0Aconst%20radio1%20%3D%20shallowRef()%0D%0A%0D%0Aconst%20items%20%3D%20%5B%0D%0A%20%20%7B%20label%3A%20%22%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%22%2C%20value%3A%20%221%22%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91%22%2C%20value%3A%20%222%22%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22%E6%95%B0%E6%8D%AE%E5%BA%93%22%2C%20value%3A%20%223%22%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22%E4%BA%91%E8%AE%A1%E7%AE%97%22%2C%20value%3A%20%224%22%20%7D%2C%0D%0A%5D%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:x,"use-data":_(f)},{default:r(()=>e[2]||(e[2]=[l("p",null,"render(components/form/radio/block.vue)",-1)])),_:1},8,["use-data"])]),_:1}),e[8]||(e[8]=l("h2",{id:"禁用某一项",tabindex:"-1"},[n("禁用某一项 "),l("a",{class:"header-anchor",href:"#禁用某一项","aria-label":'Permalink to "禁用某一项"'},"​")],-1)),e[9]||(e[9]=l("p",null,[n("单选框禁用某项时，可使用 "),l("code",null,"disabled"),n(" 属性")],-1)),o(t,null,{default:r(()=>[o(u,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%3E%0D%0A%20%20%20%20%3Cu-radio%0D%0A%20%20%20%20%20%20v-for%3D%22%7B%20label%2C%20value%20%7D%20of%20items%22%0D%0A%20%20%20%20%20%20v-model%3D%22radio1%22%0D%0A%20%20%20%20%20%20%3Avalue%3D%22value%22%0D%0A%20%20%20%20%20%20%3Adisabled%3D%22value%20%3D%3D%3D%20'3'%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%7B%7B%20label%20%7D%7D%0D%0A%20%20%20%20%3C%2Fu-radio%3E%0D%0A%20%20%20%20%3Cdiv%3E%0D%0A%20%20%20%20%20%20%3Cu-radio%0D%0A%20%20%20%20%20%20%20%20v-for%3D%22%7B%20name%2C%20id%20%7D%20of%20items2%22%0D%0A%20%20%20%20%20%20%20%20v-model%3D%22radio2%22%0D%0A%20%20%20%20%20%20%20%20%3Avalue%3D%22id%22%0D%0A%20%20%20%20%20%20%20%20%3Adisabled%3D%22id%20%3D%3D%3D%20'4'%22%0D%0A%20%20%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%20%20%7B%7B%20name%20%7D%7D-%7B%7B%20id%20%7D%7D%0D%0A%20%20%20%20%20%20%3C%2Fu-radio%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20shallowRef%20%7D%20from%20%22vue%22%0D%0A%0D%0Aconst%20radio1%20%3D%20shallowRef()%0D%0Aconst%20radio2%20%3D%20shallowRef()%0D%0A%0D%0Aconst%20items%20%3D%20%5B%0D%0A%20%20%7B%20label%3A%20%22%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%22%2C%20value%3A%20%221%22%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91%22%2C%20value%3A%20%222%22%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22%E6%95%B0%E6%8D%AE%E5%BA%93%22%2C%20value%3A%20%223%22%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22%E4%BA%91%E8%AE%A1%E7%AE%97%22%2C%20value%3A%20%224%22%20%7D%2C%0D%0A%5D%0D%0Aconst%20items2%20%3D%20%5B%0D%0A%20%20%7B%20name%3A%20%22%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%22%2C%20id%3A%20%221%22%20%7D%2C%0D%0A%20%20%7B%20name%3A%20%22%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91%22%2C%20id%3A%20%222%22%20%7D%2C%0D%0A%20%20%7B%20name%3A%20%22%E6%95%B0%E6%8D%AE%E5%BA%93%22%2C%20id%3A%20%223%22%20%7D%2C%0D%0A%20%20%7B%20name%3A%20%22%E4%BA%91%E8%AE%A1%E7%AE%97%22%2C%20id%3A%20%224%22%20%7D%2C%0D%0A%5D%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:k,"use-data":_(f)},{default:r(()=>e[3]||(e[3]=[l("p",null,"render(components/form/radio/disabled.vue)",-1)])),_:1},8,["use-data"])]),_:1}),e[10]||(e[10]=l("p",null,[n("单选框组中禁用特定选项，请使用 "),l("code",null,"disabled-item"),n(" 属性。")],-1)),o(t,null,{default:r(()=>[o(u,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-radio-group%0D%0A%20%20%20%20%3Aitems%3D%22items%22%0D%0A%20%20%20%20v-model%3D%22radio1%22%0D%0A%20%20%20%20%3Adisabled-item%3D%22(item%3ARecord%3Cstring%2Cany%3E)%20%3D%3E%20item.value%20%3D%3D%3D%20'2'%22%0D%0A%20%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20shallowRef%20%7D%20from%20%22vue%22%0D%0A%0D%0Aconst%20radio1%20%3D%20shallowRef()%0D%0A%0D%0Aconst%20items%20%3D%20%5B%0D%0A%20%20%7B%20label%3A%20%22%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%22%2C%20value%3A%20%221%22%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91%22%2C%20value%3A%20%222%22%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22%E6%95%B0%E6%8D%AE%E5%BA%93%22%2C%20value%3A%20%223%22%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22%E4%BA%91%E8%AE%A1%E7%AE%97%22%2C%20value%3A%20%224%22%20%7D%2C%0D%0A%5D%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:R,"use-data":_(f)},{default:r(()=>e[4]||(e[4]=[l("p",null,"render(components/form/radio/disabled-item.vue)",-1)])),_:1},8,["use-data"])]),_:1}),e[11]||(e[11]=V('<h2 id="radio-属性" tabindex="-1">Radio 属性 <a class="header-anchor" href="#radio-属性" aria-label="Permalink to &quot;Radio 属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>value</td><td><code>number</code> | <code>string</code> | <code>boolean</code></td><td>否</td><td>单选框的值</td></tr><tr><td>modelValue</td><td><code>number</code> | <code>string</code> | <code>boolean</code></td><td>否</td><td>绑定的值</td></tr><tr><td>label</td><td>string</td><td>否</td><td>单选框显示的文本</td></tr><tr><td>disabled</td><td>boolean</td><td>否</td><td>是否禁用整个单选框</td></tr></tbody></table><h2 id="radio-事件" tabindex="-1">Radio 事件 <a class="header-anchor" href="#radio-事件" aria-label="Permalink to &quot;Radio 事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>参数类型</th><th>描述</th></tr></thead><tbody><tr><td>update:modelValue</td><td><code>number</code> | <code>string</code> | <code>boolean</code></td><td>单选框的值更新时触发事件</td></tr></tbody></table><h2 id="radiogroup-属性" tabindex="-1">RadioGroup 属性 <a class="header-anchor" href="#radiogroup-属性" aria-label="Permalink to &quot;RadioGroup 属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>modelValue</td><td><code>string</code> | <code>number</code> | <code>boolean</code></td><td>否</td><td>绑定值，表示当前选中的单选框值</td></tr><tr><td>items</td><td>Record&lt;string, any&gt;[]</td><td>是</td><td>单选框项，数组形式，包含多个选项的数据</td></tr><tr><td>valueKey</td><td>string</td><td>否</td><td>选项值的字段名称，默认为 <code>&#39;value&#39;</code></td></tr><tr><td>labelKey</td><td>string</td><td>否</td><td>标签文本的字段名称，默认为 <code>&#39;label&#39;</code></td></tr><tr><td>disabled</td><td>boolean</td><td>否</td><td>是否禁用单选框组，设置为 <code>true</code> 时，所有选项将禁用</td></tr><tr><td>disabledItem</td><td>(item: Record&lt;string, any&gt;) =&gt; boolean</td><td>否</td><td>禁用特定选项的函数，返回 <code>true</code> 时禁用该选项</td></tr><tr><td>block</td><td>boolean</td><td>否</td><td>是否采用块级布局，设置为 <code>true</code> 时，单选框项将按列显示</td></tr></tbody></table><h2 id="radiogroup-事件" tabindex="-1">RadioGroup 事件 <a class="header-anchor" href="#radiogroup-事件" aria-label="Permalink to &quot;RadioGroup 事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>update:modelValue</td><td><code>modelValue: Val</code> 选中的值</td><td>值更新事件，触发时传递最新的选中值</td></tr><tr><td>change</td><td><code>item: Record&lt;string, any&gt;</code> 当前选中的选项数据</td><td>选项更新事件，触发时传递当前选中的选项</td></tr></tbody></table>',8))])}}});export{q as __pageData,S as default};
