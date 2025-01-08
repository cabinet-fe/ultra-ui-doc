<<<<<<<< HEAD:docs/assets/components_layout_grid.md.CZXhnuy-.lean.js
import"./chunks/theme.CFwMseYr.js";import{d as h,g as B,a4 as p,l as o,A as x,B as i,b as t,c as r,v as n,I as c,m as A,L as g,F as u,t as y,x as w,u as F,a9 as b}from"./chunks/framework.Cggwgzyo.js";const j=h({__name:"responsive",setup(E){const m={xs:2,sm:3,md:4,lg:6},e=B(50),a=B(),D=d=>d?d.name==="xs"||d.name==="sm"?1:2:0;return(d,s)=>{const k=p("u-button"),v=p("u-number-input"),C=p("u-grid-item"),f=p("u-grid"),_=p("u-dialog");return o(),x(_,{title:"将弹框最大化测试"},{trigger:i(()=>[t(k,null,{default:i(()=>s[2]||(s[2]=[r("打开")])),_:1})]),default:i(()=>[n("div",null,[s[3]||(s[3]=n("span",null,"grid宽度: ",-1)),t(v,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=l=>e.value=l),step:10,min:30,max:100,style:{width:"100px"},clearable:!1,suffix:"vw"},null,8,["modelValue"]),n("span",null,"当前断点: "+c(a.value),1)]),s[4]||(s[4]=n("div",null,"对象断点",-1)),t(f,{gap:8,cols:m,class:"gap-2 mb-4",style:y({width:`${e.value}vw`}),onBreakpointChange:s[1]||(s[1]=l=>a.value=l.name)},{default:i(()=>[(o(),A(u,null,g(6,l=>t(C,{span:1,class:"h-20 bg-blue-200 flex items-center justify-center",key:l},{default:i(()=>[r(c(l),1)]),_:2},1024)),64))]),_:1},8,["style"]),s[5]||(s[5]=n("div",null,"函数断点",-1)),t(f,{gap:8,cols:D,class:"gap-2",style:y({width:`${e.value}vw`})},{default:i(()=>[(o(),A(u,null,g(6,l=>t(C,{span:1,class:"h-20 bg-blue-200 flex items-center justify-center",key:l},{default:i(()=>[r(c(l),1)]),_:2},1024)),64))]),_:1},8,["style"])]),_:1})}}}),V=h({__name:"basic",setup(E){const m=[{span:2},{span:4},{span:6}];return(e,a)=>{const D=p("u-grid-item"),d=p("u-grid");return o(),A(u,null,[a[0]||(a[0]=n("div",null,"24格",-1)),t(d,{gap:6,class:"mb-6"},{default:i(()=>[(o(),A(u,null,g(m,(s,k)=>t(D,{key:k,span:s.span,class:"h-20 bg-blue-200 flex items-center justify-center"},{default:i(()=>[r(" 占"+c(s.span)+"格 ",1)]),_:2},1032,["span"])),64))]),_:1}),a[1]||(a[1]=n("div",null,"12格",-1)),t(d,{cols:12,gap:6},{default:i(()=>[(o(),A(u,null,g(12,s=>t(D,{class:"h-20 bg-blue-200 flex items-center justify-center"},{default:i(()=>[r(c(s),1)]),_:2},1024)),64)),(o(),A(u,null,g(m,(s,k)=>t(D,{span:s.span,class:"h-20 bg-blue-200 flex items-center justify-center",key:k},{default:i(()=>[r(" 占"+c(s.span)+"格 ",1)]),_:2},1032,["span"])),64))]),_:1})],64)}}}),G=JSON.parse('{"title":"Grid 栅格布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/layout/grid.md","filePath":"components/layout/grid.md","lastUpdated":1734403386000}'),P={name:"components/layout/grid.md"},S=h({...P,setup(E){return(m,e)=>{const a=p("v-demo"),D=p("ClientOnly");return o(),A("div",null,[e[2]||(e[2]=w(`<h1 id="grid-栅格布局" tabindex="-1">Grid 栅格布局 <a class="header-anchor" href="#grid-栅格布局" aria-label="Permalink to &quot;Grid 栅格布局&quot;">​</a></h1><p>Grid 组件有两种使用方式：</p><ol><li>基础用法：如果传给 <code>grid</code> 组件的 <code>cols</code> 属性是 <code>number</code> 类型，则表示固定列数。</li><li>响应式布局： 如果传给 <code>grid</code> 组件的 <code>cols</code> 属性是 <code>object</code> 类型，表示响应式布局。</li><li>二者兼得：你也可以给 <code>grid</code> 组件的 <code>cols</code> 属性传入函数，详情请查看 <a href="#响应式布局">响应式布局</a>。</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>grid</code> 组件的 <code>cols</code> 属性为 <code>object</code> 类型时，受到 <code>BreakCols</code> 类型的约束。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 断点列 */</span></span>
========
import"./chunks/theme.CyqPL267.js";import{d as h,g as B,a4 as p,l as o,A as x,B as i,b as t,c as r,v as n,I as c,m as A,L as g,F as u,t as y,x as w,u as F,a9 as b}from"./chunks/framework.Cggwgzyo.js";const j=h({__name:"responsive",setup(E){const m={xs:2,sm:3,md:4,lg:6},e=B(50),a=B(),D=d=>d?d.name==="xs"||d.name==="sm"?1:2:0;return(d,s)=>{const k=p("u-button"),v=p("u-number-input"),C=p("u-grid-item"),f=p("u-grid"),_=p("u-dialog");return o(),x(_,{title:"将弹框最大化测试"},{trigger:i(()=>[t(k,null,{default:i(()=>s[2]||(s[2]=[r("打开")])),_:1})]),default:i(()=>[n("div",null,[s[3]||(s[3]=n("span",null,"grid宽度: ",-1)),t(v,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=l=>e.value=l),step:10,min:30,max:100,style:{width:"100px"},clearable:!1,suffix:"vw"},null,8,["modelValue"]),n("span",null,"当前断点: "+c(a.value),1)]),s[4]||(s[4]=n("div",null,"对象断点",-1)),t(f,{gap:8,cols:m,class:"gap-2 mb-4",style:y({width:`${e.value}vw`}),onBreakpointChange:s[1]||(s[1]=l=>a.value=l.name)},{default:i(()=>[(o(),A(u,null,g(6,l=>t(C,{span:1,class:"h-20 bg-blue-200 flex items-center justify-center",key:l},{default:i(()=>[r(c(l),1)]),_:2},1024)),64))]),_:1},8,["style"]),s[5]||(s[5]=n("div",null,"函数断点",-1)),t(f,{gap:8,cols:D,class:"gap-2",style:y({width:`${e.value}vw`})},{default:i(()=>[(o(),A(u,null,g(6,l=>t(C,{span:1,class:"h-20 bg-blue-200 flex items-center justify-center",key:l},{default:i(()=>[r(c(l),1)]),_:2},1024)),64))]),_:1},8,["style"])]),_:1})}}}),V=h({__name:"basic",setup(E){const m=[{span:2},{span:4},{span:6}];return(e,a)=>{const D=p("u-grid-item"),d=p("u-grid");return o(),A(u,null,[a[0]||(a[0]=n("div",null,"24格",-1)),t(d,{gap:6,class:"mb-6"},{default:i(()=>[(o(),A(u,null,g(m,(s,k)=>t(D,{key:k,span:s.span,class:"h-20 bg-blue-200 flex items-center justify-center"},{default:i(()=>[r(" 占"+c(s.span)+"格 ",1)]),_:2},1032,["span"])),64))]),_:1}),a[1]||(a[1]=n("div",null,"12格",-1)),t(d,{cols:12,gap:6},{default:i(()=>[(o(),A(u,null,g(12,s=>t(D,{class:"h-20 bg-blue-200 flex items-center justify-center"},{default:i(()=>[r(c(s),1)]),_:2},1024)),64)),(o(),A(u,null,g(m,(s,k)=>t(D,{span:s.span,class:"h-20 bg-blue-200 flex items-center justify-center",key:k},{default:i(()=>[r(" 占"+c(s.span)+"格 ",1)]),_:2},1032,["span"])),64))]),_:1})],64)}}}),G=JSON.parse('{"title":"Grid 栅格布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/layout/grid.md","filePath":"components/layout/grid.md","lastUpdated":1734403386000}'),P={name:"components/layout/grid.md"},S=h({...P,setup(E){return(m,e)=>{const a=p("v-demo"),D=p("ClientOnly");return o(),A("div",null,[e[2]||(e[2]=w(`<h1 id="grid-栅格布局" tabindex="-1">Grid 栅格布局 <a class="header-anchor" href="#grid-栅格布局" aria-label="Permalink to &quot;Grid 栅格布局&quot;">​</a></h1><p>Grid 组件有两种使用方式：</p><ol><li>基础用法：如果传给 <code>grid</code> 组件的 <code>cols</code> 属性是 <code>number</code> 类型，则表示固定列数。</li><li>响应式布局： 如果传给 <code>grid</code> 组件的 <code>cols</code> 属性是 <code>object</code> 类型，表示响应式布局。</li><li>二者兼得：你也可以给 <code>grid</code> 组件的 <code>cols</code> 属性传入函数，详情请查看 <a href="#响应式布局">响应式布局</a>。</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>grid</code> 组件的 <code>cols</code> 属性为 <code>object</code> 类型时，受到 <code>BreakCols</code> 类型的约束。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 断点列 */</span></span>
>>>>>>>> 98acb69a5f3e7fcc34f0ed6e5e1673a0c9a9fb1a:docs/assets/components_layout_grid.md.DSV9OObj.lean.js
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BreakCols</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 超小尺寸 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  xs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 小尺寸 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  sm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 中等尺寸 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  md</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 大尺寸 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  lg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 中大尺寸 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  xl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 默认尺寸 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>默认情况下 <code>grid</code> 是一个 24 格栅格布局，当然你可以通过 <code>cols</code> 属性来重置它。</p>`,6)),t(D,null,{default:i(()=>[t(a,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%3E24%E6%A0%BC%3C%2Fdiv%3E%0D%0A%20%20%3Cu-grid%20%3Agap%3D%226%22%20class%3D%22mb-6%22%3E%0D%0A%20%20%20%20%3Cu-grid-item%0D%0A%20%20%20%20%20%20v-for%3D%22(item%2C%20index)%20of%20items%22%0D%0A%20%20%20%20%20%20%3Akey%3D%22index%22%0D%0A%20%20%20%20%20%20%3Aspan%3D%22item.span%22%0D%0A%20%20%20%20%20%20class%3D%22h-20%20bg-blue-200%20flex%20items-center%20justify-center%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%E5%8D%A0%7B%7B%20item.span%20%7D%7D%E6%A0%BC%0D%0A%20%20%20%20%3C%2Fu-grid-item%3E%0D%0A%20%20%3C%2Fu-grid%3E%0D%0A%0D%0A%20%20%3Cdiv%3E12%E6%A0%BC%3C%2Fdiv%3E%0D%0A%20%20%3Cu-grid%20%3Acols%3D%2212%22%20%3Agap%3D%226%22%3E%0D%0A%20%20%20%20%3Cu-grid-item%0D%0A%20%20%20%20%20%20class%3D%22h-20%20bg-blue-200%20flex%20items-center%20justify-center%22%0D%0A%20%20%20%20%20%20v-for%3D%22i%20of%2012%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%7B%7B%20i%20%7D%7D%0D%0A%20%20%20%20%3C%2Fu-grid-item%3E%0D%0A%0D%0A%20%20%20%20%3Cu-grid-item%0D%0A%20%20%20%20%20%20%3Aspan%3D%22item.span%22%0D%0A%20%20%20%20%20%20class%3D%22h-20%20bg-blue-200%20flex%20items-center%20justify-center%22%0D%0A%20%20%20%20%20%20v-for%3D%22(item%2C%20index)%20of%20items%22%0D%0A%20%20%20%20%20%20%3Akey%3D%22index%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%E5%8D%A0%7B%7B%20item.span%20%7D%7D%E6%A0%BC%0D%0A%20%20%20%20%3C%2Fu-grid-item%3E%0D%0A%20%20%3C%2Fu-grid%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aconst%20items%20%3D%20%5B%7B%20span%3A%202%20%7D%2C%20%7B%20span%3A%204%20%7D%2C%20%7B%20span%3A%206%20%7D%5D%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:V,"use-data":F(b)},{default:i(()=>e[0]||(e[0]=[n("p",null,"render(components/layout/grid/basic.vue)",-1)])),_:1},8,["use-data"])]),_:1}),e[3]||(e[3]=n("h2",{id:"响应式布局",tabindex:"-1"},[r("响应式布局 "),n("a",{class:"header-anchor",href:"#响应式布局","aria-label":'Permalink to "响应式布局"'},"​")],-1)),e[4]||(e[4]=n("p",null,[r("通过 "),n("code",null,"cols"),r(" 属性来设置不同断点下的列数。")],-1)),t(D,null,{default:i(()=>[t(a,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-dialog%20title%3D%22%E5%B0%86%E5%BC%B9%E6%A1%86%E6%9C%80%E5%A4%A7%E5%8C%96%E6%B5%8B%E8%AF%95%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%23trigger%3E%20%3Cu-button%3E%E6%89%93%E5%BC%80%3C%2Fu-button%3E%20%3C%2Ftemplate%3E%0D%0A%0D%0A%20%20%20%20%3Cdiv%3E%0D%0A%20%20%20%20%20%20%3Cspan%3Egrid%E5%AE%BD%E5%BA%A6%3A%20%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cu-number-input%0D%0A%20%20%20%20%20%20%20%20v-model%3D%22width%22%0D%0A%20%20%20%20%20%20%20%20%3Astep%3D%2210%22%0D%0A%20%20%20%20%20%20%20%20%3Amin%3D%2230%22%0D%0A%20%20%20%20%20%20%20%20%3Amax%3D%22100%22%0D%0A%20%20%20%20%20%20%20%20style%3D%22width%3A%20100px%22%0D%0A%20%20%20%20%20%20%20%20%3Aclearable%3D%22false%22%0D%0A%20%20%20%20%20%20%20%20suffix%3D%22vw%22%0D%0A%20%20%20%20%20%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cspan%3E%E5%BD%93%E5%89%8D%E6%96%AD%E7%82%B9%3A%20%7B%7B%20point%20%7D%7D%3C%2Fspan%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%0D%0A%20%20%20%20%3Cdiv%3E%E5%AF%B9%E8%B1%A1%E6%96%AD%E7%82%B9%3C%2Fdiv%3E%0D%0A%20%20%20%20%3Cu-grid%0D%0A%20%20%20%20%20%20%3Agap%3D%228%22%0D%0A%20%20%20%20%20%20%3Acols%3D%22cols%22%0D%0A%20%20%20%20%20%20class%3D%22gap-2%20mb-4%22%0D%0A%20%20%20%20%20%20%3Astyle%3D%22%7B%20width%3A%20%60%24%7Bwidth%7Dvw%60%20%7D%22%0D%0A%20%20%20%20%20%20%40breakpoint-change%3D%22point%20%3D%20%24event.name%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%3Cu-grid-item%0D%0A%20%20%20%20%20%20%20%20%3Aspan%3D%221%22%0D%0A%20%20%20%20%20%20%20%20class%3D%22h-20%20bg-blue-200%20flex%20items-center%20justify-center%22%0D%0A%20%20%20%20%20%20%20%20v-for%3D%22i%20of%206%22%0D%0A%20%20%20%20%20%20%20%20%3Akey%3D%22i%22%0D%0A%20%20%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%20%20%7B%7B%20i%20%7D%7D%0D%0A%20%20%20%20%20%20%3C%2Fu-grid-item%3E%0D%0A%20%20%20%20%3C%2Fu-grid%3E%0D%0A%0D%0A%20%20%20%20%3Cdiv%3E%E5%87%BD%E6%95%B0%E6%96%AD%E7%82%B9%3C%2Fdiv%3E%0D%0A%20%20%20%20%3Cu-grid%0D%0A%20%20%20%20%20%20%3Agap%3D%228%22%0D%0A%20%20%20%20%20%20%3Acols%3D%22colsFn%22%0D%0A%20%20%20%20%20%20class%3D%22gap-2%22%0D%0A%20%20%20%20%20%20%3Astyle%3D%22%7B%20width%3A%20%60%24%7Bwidth%7Dvw%60%20%7D%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%3Cu-grid-item%0D%0A%20%20%20%20%20%20%20%20%3Aspan%3D%221%22%0D%0A%20%20%20%20%20%20%20%20class%3D%22h-20%20bg-blue-200%20flex%20items-center%20justify-center%22%0D%0A%20%20%20%20%20%20%20%20v-for%3D%22i%20of%206%22%0D%0A%20%20%20%20%20%20%20%20%3Akey%3D%22i%22%0D%0A%20%20%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%20%20%7B%7B%20i%20%7D%7D%0D%0A%20%20%20%20%20%20%3C%2Fu-grid-item%3E%0D%0A%20%20%20%20%3C%2Fu-grid%3E%0D%0A%20%20%3C%2Fu-dialog%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20type%20BreakCols%2C%20type%20Breakpoint%20%7D%20from%20'ultra-ui'%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aconst%20cols%3A%20BreakCols%20%3D%20%7B%0D%0A%20%20xs%3A%202%2C%0D%0A%20%20sm%3A%203%2C%0D%0A%20%20md%3A%204%2C%0D%0A%20%20lg%3A%206%0D%0A%7D%0D%0A%0D%0Aconst%20width%20%3D%20ref(50)%0D%0Aconst%20point%20%3D%20ref%3CBreakpoint%3E()%0D%0A%0D%0Aconst%20colsFn%20%3D%20(point%3F%3A%20Breakpoint)%20%3D%3E%20%7B%0D%0A%20%20if%20(!point)%20return%200%0D%0A%20%20if%20(point.name%20%3D%3D%3D%20'xs'%20%7C%7C%20point.name%20%3D%3D%3D%20'sm')%20return%201%0D%0A%20%20return%202%0D%0A%7D%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:j,"use-data":F(b)},{default:i(()=>e[1]||(e[1]=[n("p",null,"render(components/layout/grid/responsive.vue)",-1)])),_:1},8,["use-data"])]),_:1})])}}});export{G as __pageData,S as default};
