import{f as g}from"./chunks/theme.CFwMseYr.js";import{d as r,a4 as t,l as c,A as m,B as n,b as a,c as d,u as k,m as u,x as A,v as p,a9 as D}from"./chunks/framework.Cggwgzyo.js";const F=r({__name:"custom",setup(E){const e=()=>{console.log("confirm")},s=()=>{console.log("cancel")};return(l,i)=>{const o=t("u-button"),h=t("u-pop-confirm");return c(),m(h,{title:"自定义文字、图标",onConfirm:e,onCancel:s,"confirm-text":"继续","cancel-text":"结束",icon:k(g)},{reference:n(()=>[a(o,null,{default:n(()=>i[0]||(i[0]=[d("自定义")])),_:1})]),_:1},8,["icon"])}}}),f=r({__name:"basic",setup(E){const e=()=>{console.log("confirm")},s=()=>{console.log("cancel")};return(l,i)=>{const o=t("u-button"),h=t("u-pop-confirm");return c(),m(h,{title:"确定要删除吗？",onConfirm:e,onCancel:s,alignment:"start"},{reference:n(()=>[a(o,null,{default:n(()=>i[0]||(i[0]=[d("删除")])),_:1})]),_:1})}}}),_=JSON.parse('{"title":"PopConfirm 弹出确认框","description":"","frontmatter":{},"headers":[],"relativePath":"components/feedback/pop-confirm.md","filePath":"components/feedback/pop-confirm.md","lastUpdated":1734403386000}'),y={name:"components/feedback/pop-confirm.md"},b=r({...y,setup(E){return(e,s)=>{const l=t("v-demo"),i=t("ClientOnly");return c(),u("div",null,[s[2]||(s[2]=A('<h1 id="popconfirm-弹出确认框" tabindex="-1">PopConfirm 弹出确认框 <a class="header-anchor" href="#popconfirm-弹出确认框" aria-label="Permalink to &quot;PopConfirm 弹出确认框&quot;">​</a></h1><p>用于在重要操作或敏感操作之前，提示用户确认其行为，以避免误操作或提供额外的提示信息。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>基于 <a href="/ultra-ui-doc/components/feedback/tip.html">Tip 弹出提示</a> 的提示框</p>',4)),a(i,null,{default:n(()=>[a(l,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-pop-confirm%0D%0A%20%20%20%20title%3D%22%E7%A1%AE%E5%AE%9A%E8%A6%81%E5%88%A0%E9%99%A4%E5%90%97%EF%BC%9F%22%0D%0A%20%20%20%20%40confirm%3D%22confirmEvent%22%0D%0A%20%20%20%20%40cancel%3D%22cancelEvent%22%0D%0A%20%20%20%20alignment%3D%22start%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Ctemplate%20%23reference%3E%0D%0A%20%20%20%20%20%20%3Cu-button%3E%E5%88%A0%E9%99%A4%3C%2Fu-button%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fu-pop-confirm%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aconst%20confirmEvent%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20console.log('confirm')%0D%0A%7D%0D%0Aconst%20cancelEvent%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20console.log('cancel')%0D%0A%7D%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:f,"use-data":k(D)},{default:n(()=>s[0]||(s[0]=[p("p",null,"render(components/feedback/pop-confirm/basic.vue)",-1)])),_:1},8,["use-data"])]),_:1}),s[3]||(s[3]=p("h2",{id:"自定义文字、图标",tabindex:"-1"},[d("自定义文字、图标 "),p("a",{class:"header-anchor",href:"#自定义文字、图标","aria-label":'Permalink to "自定义文字、图标"'},"​")],-1)),a(i,null,{default:n(()=>[a(l,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-pop-confirm%0D%0A%20%20%20%20title%3D%22%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%87%E5%AD%97%E3%80%81%E5%9B%BE%E6%A0%87%22%0D%0A%20%20%20%20%40confirm%3D%22confirmEvent%22%0D%0A%20%20%20%20%40cancel%3D%22cancelEvent%22%0D%0A%20%20%20%20confirm-text%3D%22%E7%BB%A7%E7%BB%AD%22%0D%0A%20%20%20%20cancel-text%3D%22%E7%BB%93%E6%9D%9F%22%0D%0A%20%20%20%20%3Aicon%3D%22Wps%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Ctemplate%20%23reference%3E%0D%0A%20%20%20%20%20%20%3Cu-button%3E%E8%87%AA%E5%AE%9A%E4%B9%89%3C%2Fu-button%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fu-pop-confirm%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20Wps%20%7D%20from%20%22icon-ultra%22%0D%0Aconst%20confirmEvent%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20console.log(%22confirm%22)%0D%0A%7D%0D%0Aconst%20cancelEvent%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20console.log(%22cancel%22)%0D%0A%7D%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:F,"use-data":k(D)},{default:n(()=>s[1]||(s[1]=[p("p",null,"render(components/feedback/pop-confirm/custom.vue)",-1)])),_:1},8,["use-data"])]),_:1}),s[4]||(s[4]=A(`<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 气泡确认框组件属性 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PopConfirmProps</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Pick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TipProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;alignment&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;direction&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;trigger&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;contentTag&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**文字 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**icon 图标*/</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  icon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**icon 颜色 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  iconColor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 确认按钮文字</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  confirmText</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 取消按钮文字</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  cancelText</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 气泡确认框组件定义的事件 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PopConfirmEmits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 确认事件 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;confirm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 取消事件 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cancel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,4))])}}});export{_ as __pageData,b as default};
