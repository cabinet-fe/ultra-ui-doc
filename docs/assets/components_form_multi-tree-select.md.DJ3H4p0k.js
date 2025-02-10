import{d as s,D as o,B as u,o as i,b as E,w as d,a as B,t as b,c as h,ah as v,G as r,j as a,k as m,u as c}from"./chunks/framework.DSODM362.js";const _=s({__name:"custom",setup(C){const t=o(),e=o([{name:"前端开发",id:1},{name:"后端开发",id:2,children:[{name:"Node.js",id:3,children:[{name:"Express",id:4,children:[{name:"中间件",id:5},{name:"路由",id:6},{name:"控制器",id:7}]}]},{name:"Python",id:8,children:[{name:"Flask",id:9},{name:"Django",id:10},{name:"FastAPI",id:11}]}]},{name:"数据库",id:12},{name:"DevOps",id:13},{name:"云计算",id:14}]);return(D,l)=>{const n=u("u-multi-tree-select");return i(),E(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=A=>t.value=A),data:e.value,"label-key":"name","value-key":"id",filterable:""},{default:d(({data:A})=>[B(b(A.name)+" "+b(A.id),1)]),_:1},8,["modelValue","data"])}}}),f=s({__name:"disabled-node",setup(C){const t=o(),e=o([{label:"前端开发",value:1},{label:"后端开发",value:2,children:[{label:"Node.js",value:3,children:[{label:"Express",value:4,children:[{label:"中间件",value:5},{label:"路由",value:6},{label:"控制器",value:7}]}]},{label:"Python",value:8,children:[{label:"Flask",value:9},{label:"Django",value:10},{label:"FastAPI",value:11}]}]},{label:"数据库",value:12},{label:"DevOps",value:13},{label:"云计算",value:14}]),D=l=>l.value%4===0;return(l,n)=>{const A=u("u-multi-tree-select");return i(),E(A,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=p=>t.value=p),data:e.value,filterable:"",disabledNode:D},null,8,["modelValue","data"])}}}),F=s({__name:"basic",setup(C){const t=o(),e=o([{label:"前端开发",value:1},{label:"后端开发",value:2,children:[{label:"Node.js",value:3,children:[{label:"Express",value:4,children:[{label:"中间件",value:5},{label:"路由",value:6},{label:"控制器",value:7}]}]},{label:"Python",value:8,children:[{label:"Flask",value:9},{label:"Django",value:10},{label:"FastAPI",value:11}]}]},{label:"数据库",value:12},{label:"DevOps",value:13},{label:"云计算",value:14}]);return(D,l)=>{const n=u("u-multi-tree-select");return i(),E(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=A=>t.value=A),data:e.value,filterable:""},null,8,["modelValue","data"])}}}),k=JSON.parse('{"title":"MultiTreeSelect 树形选择器(多选)","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/multi-tree-select.md","filePath":"components/form/multi-tree-select.md","lastUpdated":1734403386000}'),P={name:"components/form/multi-tree-select.md"},x=s({...P,setup(C){return(t,e)=>{const D=u("v-demo"),l=u("ClientOnly");return i(),h("div",null,[e[3]||(e[3]=v('<h1 id="multitreeselect-树形选择器-多选" tabindex="-1">MultiTreeSelect 树形选择器(多选) <a class="header-anchor" href="#multitreeselect-树形选择器-多选" aria-label="Permalink to &quot;MultiTreeSelect 树形选择器(多选)&quot;">​</a></h1><p>用于在树形结构中选择多个节点,结合了 <a href="/ultra-ui-doc/components/data/tree.html">Tree</a> 和 <a href="/ultra-ui-doc/components/feedback/dropdown.html">Dropdown</a> 两个组件的功能</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>展示了树形选择器的基础功能,包括节点的多选、展开/收起等操作。</p>',4)),r(l,null,{default:d(()=>[r(D,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-multi-tree-select%20v-model%3D%22treeSelect%22%20%3Adata%3D%22data%22%20filterable%3E%0D%0A%20%20%3C%2Fu-multi-tree-select%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20shallowRef%20%7D%20from%20%22vue%22%0D%0A%0D%0Aconst%20treeSelect%20%3D%20shallowRef()%0D%0Aconst%20data%20%3D%20shallowRef%3Cany%5B%5D%3E(%5B%0D%0A%20%20%7B%20label%3A%20%22%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%22%2C%20value%3A%201%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20label%3A%20%22%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91%22%2C%0D%0A%20%20%20%20value%3A%202%2C%0D%0A%20%20%20%20children%3A%20%5B%0D%0A%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20label%3A%20%22Node.js%22%2C%0D%0A%20%20%20%20%20%20%20%20value%3A%203%2C%0D%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22Express%22%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%204%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20%22%E4%B8%AD%E9%97%B4%E4%BB%B6%22%2C%20value%3A%205%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20%22%E8%B7%AF%E7%94%B1%22%2C%20value%3A%206%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20%22%E6%8E%A7%E5%88%B6%E5%99%A8%22%2C%20value%3A%207%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20label%3A%20%22Python%22%2C%0D%0A%20%20%20%20%20%20%20%20value%3A%208%2C%0D%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20%22Flask%22%2C%20value%3A%209%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20%22Django%22%2C%20value%3A%2010%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20%22FastAPI%22%2C%20value%3A%2011%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5D%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22%E6%95%B0%E6%8D%AE%E5%BA%93%22%2C%20value%3A%2012%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22DevOps%22%2C%20value%3A%2013%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22%E4%BA%91%E8%AE%A1%E7%AE%97%22%2C%20value%3A%2014%20%7D%2C%0D%0A%5D)%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:F,"use-data":m(c)},{default:d(()=>e[0]||(e[0]=[a("p",null,"render(components/form/multi-tree-select/basic.vue)",-1)])),_:1},8,["use-data"])]),_:1}),e[4]||(e[4]=a("h2",{id:"禁止某节点",tabindex:"-1"},[B("禁止某节点 "),a("a",{class:"header-anchor",href:"#禁止某节点","aria-label":'Permalink to "禁止某节点"'},"​")],-1)),e[5]||(e[5]=a("p",null,"通过配置可以禁用特定节点,被禁用的节点无法选中。",-1)),r(l,null,{default:d(()=>[r(D,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-multi-tree-select%0D%0A%20%20%20%20v-model%3D%22treeSelect%22%0D%0A%20%20%20%20%3Adata%3D%22data%22%0D%0A%20%20%20%20filterable%0D%0A%20%20%20%20%3AdisabledNode%3D%22disabledNode%22%0D%0A%20%20%3E%0D%0A%20%20%3C%2Fu-multi-tree-select%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20shallowRef%20%7D%20from%20%22vue%22%0D%0A%0D%0Aconst%20treeSelect%20%3D%20shallowRef()%0D%0Aconst%20data%20%3D%20shallowRef%3Cany%5B%5D%3E(%5B%0D%0A%20%20%7B%20label%3A%20%22%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%22%2C%20value%3A%201%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20label%3A%20%22%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91%22%2C%0D%0A%20%20%20%20value%3A%202%2C%0D%0A%20%20%20%20children%3A%20%5B%0D%0A%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20label%3A%20%22Node.js%22%2C%0D%0A%20%20%20%20%20%20%20%20value%3A%203%2C%0D%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22Express%22%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%204%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20%22%E4%B8%AD%E9%97%B4%E4%BB%B6%22%2C%20value%3A%205%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20%22%E8%B7%AF%E7%94%B1%22%2C%20value%3A%206%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20%22%E6%8E%A7%E5%88%B6%E5%99%A8%22%2C%20value%3A%207%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20label%3A%20%22Python%22%2C%0D%0A%20%20%20%20%20%20%20%20value%3A%208%2C%0D%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20%22Flask%22%2C%20value%3A%209%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20%22Django%22%2C%20value%3A%2010%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20%22FastAPI%22%2C%20value%3A%2011%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5D%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22%E6%95%B0%E6%8D%AE%E5%BA%93%22%2C%20value%3A%2012%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22DevOps%22%2C%20value%3A%2013%20%7D%2C%0D%0A%20%20%7B%20label%3A%20%22%E4%BA%91%E8%AE%A1%E7%AE%97%22%2C%20value%3A%2014%20%7D%2C%0D%0A%5D)%0D%0A%0D%0Aconst%20disabledNode%20%3D%20(data%3ARecord%3Cstring%2Cany%3E)%20%3D%3E%20%7B%0D%0A%20%20return%20data.value%20%25%204%20%3D%3D%3D%200%0D%0A%7D%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:f,"use-data":m(c)},{default:d(()=>e[1]||(e[1]=[a("p",null,"render(components/form/multi-tree-select/disabled-node.vue)",-1)])),_:1},8,["use-data"])]),_:1}),e[6]||(e[6]=a("h2",{id:"自定义节点内容",tabindex:"-1"},[B("自定义节点内容 "),a("a",{class:"header-anchor",href:"#自定义节点内容","aria-label":'Permalink to "自定义节点内容"'},"​")],-1)),e[7]||(e[7]=a("p",null,"支持自定义节点的渲染内容,可以根据需要添加图标或其他元素。",-1)),r(l,null,{default:d(()=>[r(D,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-multi-tree-select%0D%0A%20%20%20%20v-model%3D%22treeSelect%22%0D%0A%20%20%20%20%3Adata%3D%22data%22%0D%0A%20%20%20%20label-key%3D%22name%22%0D%0A%20%20%20%20value-key%3D%22id%22%0D%0A%20%20%20%20filterable%0D%0A%20%20%20%20v-slot%3D%22%7B%20data%20%7D%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%7B%7B%20data.name%20%7D%7D%20%7B%7B%20data.id%20%7D%7D%0D%0A%20%20%3C%2Fu-multi-tree-select%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20shallowRef%20%7D%20from%20%22vue%22%0D%0A%0D%0Aconst%20treeSelect%20%3D%20shallowRef()%0D%0Aconst%20data%20%3D%20shallowRef%3Cany%5B%5D%3E(%5B%0D%0A%20%20%7B%20name%3A%20%22%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%22%2C%20id%3A%201%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20name%3A%20%22%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91%22%2C%0D%0A%20%20%20%20id%3A%202%2C%0D%0A%20%20%20%20children%3A%20%5B%0D%0A%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20name%3A%20%22Node.js%22%2C%0D%0A%20%20%20%20%20%20%20%20id%3A%203%2C%0D%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20%22Express%22%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%204%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20name%3A%20%22%E4%B8%AD%E9%97%B4%E4%BB%B6%22%2C%20id%3A%205%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20name%3A%20%22%E8%B7%AF%E7%94%B1%22%2C%20id%3A%206%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20name%3A%20%22%E6%8E%A7%E5%88%B6%E5%99%A8%22%2C%20id%3A%207%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20name%3A%20%22Python%22%2C%0D%0A%20%20%20%20%20%20%20%20id%3A%208%2C%0D%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%20name%3A%20%22Flask%22%2C%20id%3A%209%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%20name%3A%20%22Django%22%2C%20id%3A%2010%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%20name%3A%20%22FastAPI%22%2C%20id%3A%2011%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5D%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%20name%3A%20%22%E6%95%B0%E6%8D%AE%E5%BA%93%22%2C%20id%3A%2012%20%7D%2C%0D%0A%20%20%7B%20name%3A%20%22DevOps%22%2C%20id%3A%2013%20%7D%2C%0D%0A%20%20%7B%20name%3A%20%22%E4%BA%91%E8%AE%A1%E7%AE%97%22%2C%20id%3A%2014%20%7D%2C%0D%0A%5D)%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:_,"use-data":m(c)},{default:d(()=>e[2]||(e[2]=[a("p",null,"render(components/form/multi-tree-select/custom.vue)",-1)])),_:1},8,["use-data"])]),_:1}),e[8]||(e[8]=v('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>modelValue</td><td><code>string[]</code> | <code>number[]</code></td><td>否</td><td>绑定的节点值数组，支持多个值</td></tr><tr><td>placeholder</td><td>string</td><td>否</td><td>自定义占位文字</td></tr><tr><td>clearable</td><td>boolean</td><td>否</td><td>是否支持清除已选项</td></tr><tr><td>filterable</td><td>boolean</td><td>否</td><td>是否启用搜索功能</td></tr><tr><td>visibilityLimit</td><td>number</td><td>否</td><td>可见节点数量限制，默认值为 <code>3</code></td></tr><tr><td>minWidth</td><td>string</td><td>否</td><td>组件最小宽度，默认为 <code>280px</code></td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>clear</td><td>无</td><td>清除已选项时触发</td></tr><tr><td>change</td><td>checked: Record&lt;string, any&gt;[]`</td><td>已选项变化时触发</td></tr></tbody></table>',4))])}}});export{k as __pageData,x as default};
