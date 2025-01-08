import{o as d}from"./chunks/theme.C7FIwhvk.js";import{d as c,s as l,l as i,m as A,a8 as D,x as B,b as a,B as n,a4 as r,u as p,v as m,a9 as u}from"./chunks/framework.Cggwgzyo.js";const f=c({__name:"basic",setup(E){const o=l(),e=d("css",{name:"transform",target:o,keepEnterTo:!0}),s=()=>{e.toggle(t=>!t)};return(t,h)=>(i(),A("div",{class:"box",ref_key:"boxRef",ref:o,onClick:s},"点击",512))}}),C=D(f,[["__scopeId","data-v-e7fe6133"]]),g=JSON.parse('{"title":"useTransition 过渡","description":"","frontmatter":{},"headers":[],"relativePath":"compositions/use-transition.md","filePath":"compositions/use-transition.md","lastUpdated":1734403386000}'),_={name:"compositions/use-transition.md"},x=c({..._,setup(E){return(o,e)=>{const s=r("v-demo"),t=r("ClientOnly");return i(),A("div",null,[e[1]||(e[1]=B('<h1 id="usetransition-过渡" tabindex="-1">useTransition 过渡 <a class="header-anchor" href="#usetransition-过渡" aria-label="Permalink to &quot;useTransition 过渡&quot;">​</a></h1><p>Vue 3 的过渡系统已经相当好用和简洁了，但是有时候我们还需要在 <code>v-if</code> 和 <code>v-show</code> 之外使用过渡。</p><p>因而，我们提供了 <code>useTransition</code> 组合式方法，用于在任何时候使用过渡。</p><h2 id="css-过渡" tabindex="-1">css 过渡 <a class="header-anchor" href="#css-过渡" aria-label="Permalink to &quot;css 过渡&quot;">​</a></h2><p>useTransition 的第一个参数是过渡方式，有 <code>css</code> 和 <code>style</code> 两种。</p><p>使用 <code>css</code> 过渡时，需要使用 <code>name</code> 属性指定过渡的名称，<code>target</code> 属性指定过渡的目标元素。这时跟你在 Vue 3 中使用 <code>transition</code> 组件时体验是一样的, 只不过 useTransition 方法需要你调用 返回的 <code>toggle</code> 或者 <code>enter</code> 和 <code>leave</code> 方法去触发进入和离开状态。</p><p>其中 <code>name</code> 和 <code>target</code> 是必选参数，<code>keepEnterTo</code> 是可选参数，用于指定是否保留过渡后的状态。<code>name</code> 和 <code>target</code> 可以是一个 Vue 响应式对象(即用 ref 或 shallowRef 包裹的值)。</p>',7)),a(t,null,{default:n(()=>[a(s,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20class%3D%22box%22%20ref%3D%22boxRef%22%20%40click%3D%22handleClick%22%3E%E7%82%B9%E5%87%BB%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20useTransition%20%7D%20from%20'ultra-ui'%0D%0Aimport%20%7B%20shallowRef%20%7D%20from%20'vue'%0D%0A%0D%0Aconst%20boxRef%20%3D%20shallowRef%3CHTMLElement%3E()%0D%0A%0D%0Aconst%20t%20%3D%20useTransition('css'%2C%20%7B%0D%0A%20%20name%3A%20'transform'%2C%0D%0A%20%20target%3A%20boxRef%2C%0D%0A%20%20%2F%2F%20%E5%8F%AF%E4%BB%A5%E4%BF%9D%E7%95%99%E8%BF%87%E6%B8%A1%E5%90%8E%E7%9A%84%E7%8A%B6%E6%80%81%EF%BC%8C%E8%BF%99%E6%A0%B7%E4%BD%A0%E5%B0%B1%E4%B8%8D%E9%9C%80%E8%A6%81%E6%8C%87%E5%AE%9A%E4%B8%80%E4%B8%AA%E5%88%9D%E5%A7%8B%E7%8A%B6%E6%80%81%E4%BB%A5%E5%85%8D%E5%87%BA%E7%8E%B0%E9%97%AA%E7%83%81%0D%0A%20%20keepEnterTo%3A%20true%0D%0A%7D)%0D%0A%0D%0Aconst%20handleClick%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20%2F%2F%20%E4%B9%9F%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%20t.enter()%20%E5%92%8C%20t.leave()%20%E6%96%B9%E6%B3%95%E6%9D%A5%E8%A7%A6%E5%8F%91%E8%BF%87%E6%B8%A1%EF%BC%8C%0D%0A%20%20%2F%2F%20%E4%BB%96%E4%BB%AC%E5%88%86%E5%88%AB%E6%98%AF%20t.toggle(true)%20%E5%92%8C%20t.toggle(false)%20%E7%9A%84%E7%AE%80%E5%86%99%0D%0A%20%20t.toggle(active%20%3D%3E%20!active)%0D%0A%7D%0D%0A%3C%2Fscript%3E%0D%0A%0D%0A%3Cstyle%20scoped%3E%0D%0A.box%20%7B%0D%0A%20%20height%3A%20100px%3B%0D%0A%20%20width%3A%20100px%3B%0D%0A%20%20background-color%3A%20%23ccc%3B%0D%0A%20%20will-change%3A%20transform%3B%0D%0A%7D%0D%0A%0D%0A.transform-enter-active%2C%0D%0A.transform-leave-active%20%7B%0D%0A%20%20transition%3A%20transform%200.5s%20cubic-bezier(0.34%2C%201.56%2C%200.64%2C%201)%3B%0D%0A%7D%0D%0A%0D%0A.transform-enter-to%2C%0D%0A.transform-leave-from%20%7B%0D%0A%20%20transform%3A%20translate(100px%2C%200)%20scale(1.5)%20rotate(180deg)%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E%0D%0A",title:"",component:C,"use-data":p(u)},{default:n(()=>e[0]||(e[0]=[m("p",null,"render(compositions/use-transition/basic.vue)",-1)])),_:1},8,["use-data"])]),_:1})])}}});export{g as __pageData,x as default};
