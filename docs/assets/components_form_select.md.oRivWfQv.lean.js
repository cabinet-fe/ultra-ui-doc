import{d as u,s as A,a4 as p,l as c,A as f,u as s,m as _,x as h,b as d,B as n,v as a,c as b,a9 as D}from"./chunks/framework.Cggwgzyo.js";const v=u({__name:"view",setup(m){const l=A("30"),t=Array.from({length:80}).map((o,e)=>({label:`选项${e}`,value:e+""}));return(o,e)=>{const r=p("u-select");return c(),f(r,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=i=>l.value=i),options:s(t),filterable:""},null,8,["modelValue","options"])}}}),C=u({__name:"filter",setup(m){const l=A(),t=Array.from({length:80}).map((o,e)=>({label:`选项${e}`,value:e+""}));return(o,e)=>{const r=p("u-select");return c(),f(r,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=i=>l.value=i),options:s(t),filterable:""},null,8,["modelValue","options"])}}}),E=u({__name:"basic",setup(m){const l=A(),t=Array.from({length:80}).map((o,e)=>({label:`选项${e}`,value:e+""}));return(o,e)=>{const r=p("u-select");return c(),f(r,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=i=>l.value=i),options:s(t)},null,8,["modelValue","options"])}}}),x=JSON.parse('{"title":"Select 下拉选择器(单选)","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/select.md","filePath":"components/form/select.md","lastUpdated":1734355318000}'),B={name:"components/form/select.md"},y=u({...B,setup(m){return(l,t)=>{const o=p("v-demo"),e=p("ClientOnly");return c(),_("div",null,[t[3]||(t[3]=h('<h1 id="select-下拉选择器-单选" tabindex="-1">Select 下拉选择器(单选) <a class="header-anchor" href="#select-下拉选择器-单选" aria-label="Permalink to &quot;Select 下拉选择器(单选)&quot;">​</a></h1><p>用于在预设的选项列表中选择单一项，通常用于<a href="/ultra-ui-doc/components/form/form.html#完全演示">表单</a></p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>Select 组件提供了简单直观的选择界面。你可以通过 v-model 指令实现数据的双向绑定，通过 options 属性提供可选项列表。组件会根据选中值自动更新显示文本，同时支持默认值的设置。</p>',4)),d(e,null,{default:n(()=>[d(o,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-select%20v-model%3D%22selected%22%20%3Aoptions%3D%22options%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20shallowRef%20%7D%20from%20%22vue%22%0D%0A%0D%0Aconst%20selected%20%3D%20shallowRef()%0D%0A%0D%0Aconst%20options%20%3D%20Array.from(%7B%20length%3A%2080%20%7D).map((_%2C%20i)%20%3D%3E%20(%7B%0D%0A%20%20label%3A%20%60%E9%80%89%E9%A1%B9%24%7Bi%7D%60%2C%0D%0A%20%20value%3A%20i%20%2B%20%22%22%2C%0D%0A%7D))%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:E,"use-data":s(D)},{default:n(()=>t[0]||(t[0]=[a("p",null,"render(components/form/select/basic.vue)",-1)])),_:1},8,["use-data"])]),_:1}),t[4]||(t[4]=a("h2",{id:"开启过滤",tabindex:"-1"},[b("开启过滤 "),a("a",{class:"header-anchor",href:"#开启过滤","aria-label":'Permalink to "开启过滤"'},"​")],-1)),t[5]||(t[5]=a("p",null,"在处理大量选项数据时，过滤功能能够帮助用户快速找到目标选项。启用 filterable 属性后，用户可以通过输入关键字对选项进行实时过滤，匹配规则默认采用选项标签的模糊匹配。如果选项数据是通过函数获取的，过滤会自动触发重新请求。",-1)),d(e,null,{default:n(()=>[d(o,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-select%20v-model%3D%22selected%22%20%3Aoptions%3D%22options%22%20filterable%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20shallowRef%20%7D%20from%20%22vue%22%0D%0A%0D%0Aconst%20selected%20%3D%20shallowRef()%0D%0A%0D%0Aconst%20options%20%3D%20Array.from(%7B%20length%3A%2080%20%7D).map((_%2C%20i)%20%3D%3E%20(%7B%0D%0A%20%20label%3A%20%60%E9%80%89%E9%A1%B9%24%7Bi%7D%60%2C%0D%0A%20%20value%3A%20i%20%2B%20%22%22%2C%0D%0A%7D))%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:C,"use-data":s(D)},{default:n(()=>t[1]||(t[1]=[a("p",null,"render(components/form/select/filter.vue)",-1)])),_:1},8,["use-data"])]),_:1}),t[6]||(t[6]=a("h2",{id:"回显自动定位",tabindex:"-1"},[b("回显自动定位 "),a("a",{class:"header-anchor",href:"#回显自动定位","aria-label":'Permalink to "回显自动定位"'},"​")],-1)),t[7]||(t[7]=a("p",null,"为了优化大量选项时的用户体验，Select 组件实现了智能的滚动定位功能。当用户选中某个选项时，如果该选项不在可视区域内，组件会自动将其滚动到视图中心位置，确保用户可以立即看到选中的内容。这个功能在处理长列表时特别有用。",-1)),d(e,null,{default:n(()=>[d(o,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-select%20v-model%3D%22selected%22%20%3Aoptions%3D%22options%22%20filterable%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20shallowRef%20%7D%20from%20%22vue%22%0D%0A%0D%0Aconst%20selected%20%3D%20shallowRef('30')%0D%0A%0D%0Aconst%20options%20%3D%20Array.from(%7B%20length%3A%2080%20%7D).map((_%2C%20i)%20%3D%3E%20(%7B%0D%0A%20%20label%3A%20%60%E9%80%89%E9%A1%B9%24%7Bi%7D%60%2C%0D%0A%20%20value%3A%20i%20%2B%20%22%22%2C%0D%0A%7D))%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:v,"use-data":s(D)},{default:n(()=>t[2]||(t[2]=[a("p",null,"render(components/form/select/view.vue)",-1)])),_:1},8,["use-data"])]),_:1}),t[8]||(t[8]=h('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>modelValue</td><td>any</td><td>否</td><td>绑定值，存储用户当前选择的选项</td></tr><tr><td>text</td><td>string</td><td>否</td><td>显示的文本内容</td></tr><tr><td>options</td><td><code>Option[]</code> | <code>(qs: string) =&gt; Promise&lt;Option[]&gt;</code> | <code>Option[]</code></td><td>否</td><td>列表选项，支持数组或函数形式。若传入函数，自动启用 <code>filterable</code> 功能</td></tr><tr><td>valueKey</td><td>string</td><td>否</td><td>选项中的值字段名称，用于获取选项的值,默认<code>value</code></td></tr><tr><td>labelKey</td><td>string</td><td>否</td><td>选项中的标签字段名称，用于显示选项的标签,默认<code>label</code></td></tr><tr><td>clearable</td><td>boolean</td><td>否</td><td>是否可清除，允许用户通过清空按钮清除当前选择</td></tr><tr><td>placeholder</td><td>string</td><td>否</td><td>占位符，在没有选中项时显示的提示文本</td></tr><tr><td>filterable</td><td>boolean</td><td>否</td><td>是否启用搜索功能，启用后可以根据输入内容过滤选项,默认<code>false</code></td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>参数类型</th><th>描述</th></tr></thead><tbody><tr><td>update:label</td><td>string</td><td>更新选项标签时触发该事件，传递更新后的标签</td></tr><tr><td>update:modelValue</td><td>any</td><td>更新绑定值时触发该事件，传递更新后的值</td></tr><tr><td>change</td><td>Option</td><td>选中项发生变化时触发该事件，传递当前选中的选项</td></tr></tbody></table>',4))])}}});export{x as __pageData,y as default};
