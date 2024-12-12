import{d as h,s as k,a4 as e,l as o,A as u,m as c,x as n,b as l,B as p,u as m,v as g,a9 as E}from"./chunks/framework.B3Y8v91g.js";const y=h({__name:"basic",setup(r){const i=k();return(s,a)=>{const t=e("u-password-input");return o(),u(t,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=d=>i.value=d)},null,8,["modelValue"])}}}),f=JSON.parse('{"title":"PasswordInput 密码输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/password-input.md","filePath":"components/form/password-input.md","lastUpdated":1731924102000}'),F={name:"components/form/password-input.md"},v=h({...F,setup(r){return(i,s)=>{const a=e("v-demo"),t=e("ClientOnly");return o(),c("div",null,[s[1]||(s[1]=n('<h1 id="passwordinput-密码输入框" tabindex="-1">PasswordInput 密码输入框 <a class="header-anchor" href="#passwordinput-密码输入框" aria-label="Permalink to &quot;PasswordInput 密码输入框&quot;">​</a></h1><p>如果不是浏览器默认输入框那弄不掉的恶心人的样式，就不会出现这个组件了。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>它的很多属性继承自 <code>input</code> 组件，所以你可以参考 <a href="#属性">属性段落</a> 和 <a href="./input.html">input 文档</a> 来使用。</p>',4)),l(t,null,{default:p(()=>[l(a,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-password-input%20v-model%3D%22value%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20shallowRef%20%7D%20from%20'vue'%0D%0A%0D%0Aconst%20value%20%3D%20shallowRef()%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:y,"use-data":m(E)},{default:p(()=>s[0]||(s[0]=[g("p",null,"render(form/password-input/basic.vue)",-1)])),_:1},8,["use-data"])]),_:1}),s[2]||(s[2]=n(`<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 密码输入组件属性 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PasswordInputProps</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InputProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  modelValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 密码输入组件定义的事件 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PasswordInputEmits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;update:modelValue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,4))])}}});export{f as __pageData,v as default};