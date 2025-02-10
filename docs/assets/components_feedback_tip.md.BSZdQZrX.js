import{d as E,D as A,B as p,o as k,c as r,G as i,w as t,a as e,j as l,_ as u,ah as F,k as d,u as D}from"./chunks/framework.DSODM362.js";const c={ref:"triggerDom"},C=E({__name:"virtual",setup(o){const n=A();return(s,a)=>{const h=p("u-button"),g=p("u-tip");return k(),r("div",null,[i(h,{onClick:a[0]||(a[0]=R=>n.value.trigger({triggerDom:s.$refs.triggerDom,content:"7777"}))},{default:t(()=>a[1]||(a[1]=[e("触发按钮")])),_:1}),l("span",c,"实际触发位置",512),i(g,{ref_key:"tipRef",ref:n,trigger:"click"},null,512)])}}}),y={},m={class:"basic-box"},f={class:"row center"},b={class:"row"},B={class:"row"},_={class:"row"},v={class:"row center"};function x(o,n){const s=p("u-button"),a=p("u-tip");return k(),r("div",m,[l("div",f,[i(a,{direction:"top",alignment:"start",content:"我是 Top Start"},{default:t(()=>[i(s,null,{default:t(()=>n[0]||(n[0]=[e("top-start")])),_:1})]),_:1}),i(a,{direction:"top",alignment:"center",content:"我是 Top Center"},{default:t(()=>[i(s,null,{default:t(()=>n[1]||(n[1]=[e("top")])),_:1})]),_:1}),i(a,{direction:"top",alignment:"end",content:"我是 Top End"},{default:t(()=>[i(s,null,{default:t(()=>n[2]||(n[2]=[e("top-end")])),_:1})]),_:1})]),l("div",b,[i(a,{direction:"left",alignment:"start",content:"我是 Left Start"},{default:t(()=>[i(s,null,{default:t(()=>n[3]||(n[3]=[e("left-start")])),_:1})]),_:1}),i(a,{direction:"right",alignment:"start",content:"我是 Right Start"},{default:t(()=>[i(s,null,{default:t(()=>n[4]||(n[4]=[e("right-start")])),_:1})]),_:1})]),l("div",B,[i(a,{direction:"left",alignment:"center",content:"我是 Left Center"},{default:t(()=>[i(s,{class:"mt-3 mb-3"},{default:t(()=>n[5]||(n[5]=[e("left")])),_:1})]),_:1}),i(a,{direction:"right",alignment:"center",content:"我是 Right Center"},{default:t(()=>[i(s,null,{default:t(()=>n[6]||(n[6]=[e("right")])),_:1})]),_:1})]),l("div",_,[i(a,{direction:"left",alignment:"end",content:"我是 Left End"},{default:t(()=>[i(s,null,{default:t(()=>n[7]||(n[7]=[e("left-end")])),_:1})]),_:1}),i(a,{direction:"right",alignment:"end",content:"我是 Right End"},{default:t(()=>[i(s,null,{default:t(()=>n[8]||(n[8]=[e("right-end")])),_:1})]),_:1})]),l("div",v,[i(a,{direction:"bottom",alignment:"start",content:"我是 Bottom Start"},{default:t(()=>[i(s,null,{default:t(()=>n[9]||(n[9]=[e("bottom-start")])),_:1})]),_:1}),i(a,{direction:"bottom",alignment:"center",content:"我是 Bottom Center"},{default:t(()=>[i(s,null,{default:t(()=>n[10]||(n[10]=[e("bottom")])),_:1})]),_:1}),i(a,{direction:"bottom",alignment:"end",content:"我是 Bottom End"},{default:t(()=>[i(s,null,{default:t(()=>n[11]||(n[11]=[e("bottom-end")])),_:1})]),_:1})])])}const T=u(y,[["render",x],["__scopeId","data-v-87d973a6"]]),P=JSON.parse('{"title":"Tip 弹出提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/feedback/tip.md","filePath":"components/feedback/tip.md","lastUpdated":1736304376000}'),w={name:"components/feedback/tip.md"},V=E({...w,setup(o){return(n,s)=>{const a=p("v-demo"),h=p("ClientOnly");return k(),r("div",null,[s[2]||(s[2]=l("h1",{id:"tip-弹出提示",tabindex:"-1"},[e("Tip 弹出提示 "),l("a",{class:"header-anchor",href:"#tip-弹出提示","aria-label":'Permalink to "Tip 弹出提示"'},"​")],-1)),s[3]||(s[3]=l("p",null,"用于在页面中展示简洁的提示信息,帮助用户更好地理解操作或内容",-1)),s[4]||(s[4]=l("h2",{id:"基础用法",tabindex:"-1"},[e("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),s[5]||(s[5]=l("p",null,"跟所有的 UI 库一样,支持 9 种不同方向的展示",-1)),i(h,null,{default:t(()=>[i(a,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20class%3D%22basic-box%22%3E%0D%0A%20%20%20%20%3Cdiv%20class%3D%22row%20center%22%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22top%22%20alignment%3D%22start%22%20content%3D%22%E6%88%91%E6%98%AF%20Top%20Start%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Etop-start%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22top%22%20alignment%3D%22center%22%20content%3D%22%E6%88%91%E6%98%AF%20Top%20Center%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Etop%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22top%22%20alignment%3D%22end%22%20content%3D%22%E6%88%91%E6%98%AF%20Top%20End%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Etop-end%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%0D%0A%20%20%20%20%3Cdiv%20class%3D%22row%22%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22left%22%20alignment%3D%22start%22%20content%3D%22%E6%88%91%E6%98%AF%20Left%20Start%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Eleft-start%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22right%22%20alignment%3D%22start%22%20content%3D%22%E6%88%91%E6%98%AF%20Right%20Start%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Eright-start%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%0D%0A%20%20%20%20%3Cdiv%20class%3D%22row%22%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22left%22%20alignment%3D%22center%22%20content%3D%22%E6%88%91%E6%98%AF%20Left%20Center%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%20class%3D%22mt-3%20mb-3%22%3Eleft%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22right%22%20alignment%3D%22center%22%20content%3D%22%E6%88%91%E6%98%AF%20Right%20Center%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Eright%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%0D%0A%20%20%20%20%3Cdiv%20class%3D%22row%22%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22left%22%20alignment%3D%22end%22%20content%3D%22%E6%88%91%E6%98%AF%20Left%20End%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Eleft-end%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22right%22%20alignment%3D%22end%22%20content%3D%22%E6%88%91%E6%98%AF%20Right%20End%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Eright-end%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%0D%0A%20%20%20%20%3Cdiv%20class%3D%22row%20center%22%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22bottom%22%20alignment%3D%22start%22%20content%3D%22%E6%88%91%E6%98%AF%20Bottom%20Start%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Ebottom-start%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22bottom%22%20alignment%3D%22center%22%20content%3D%22%E6%88%91%E6%98%AF%20Bottom%20Center%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Ebottom%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20direction%3D%22bottom%22%20alignment%3D%22end%22%20content%3D%22%E6%88%91%E6%98%AF%20Bottom%20End%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%3Ebottom-end%3C%2Fu-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cstyle%20scoped%3E%0D%0A.basic-box%20%7B%0D%0A%20%20width%3A%20600px%3B%0D%0A%7D%0D%0A%0D%0A.basic-box%20.row%20%7B%0D%0A%20%20display%3A%20flex%3B%0D%0A%20%20align-items%3A%20center%3B%0D%0A%20%20justify-content%3A%20space-between%3B%0D%0A%7D%0D%0A%0D%0A.basic-box%20.center%20%7B%0D%0A%20%20justify-content%3A%20center%3B%0D%0A%7D%0D%0A%0D%0A.basic-box%20.center%20%3E%20*%20%7B%0D%0A%20%20margin%3A%200%2010px%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E%0D%0A",title:"",component:T,"use-data":d(D)},{default:t(()=>s[0]||(s[0]=[l("p",null,"render(components/feedback/tip/basic.vue)",-1)])),_:1},8,["use-data"])]),_:1}),s[6]||(s[6]=l("h2",{id:"虚拟触发",tabindex:"-1"},[e("虚拟触发 "),l("a",{class:"header-anchor",href:"#虚拟触发","aria-label":'Permalink to "虚拟触发"'},"​")],-1)),i(h,null,{default:t(()=>[i(a,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%3E%0D%0A%20%20%20%20%3Cu-button%0D%0A%20%20%20%20%20%20%40click%3D%22tipRef.trigger(%7B%20triggerDom%3A%20%24refs.triggerDom%2C%20content%3A%20'7777'%20%7D)%22%0D%0A%20%20%20%20%20%20%3E%E8%A7%A6%E5%8F%91%E6%8C%89%E9%92%AE%3C%2Fu-button%0D%0A%20%20%20%20%3E%0D%0A%0D%0A%20%20%20%20%3Cspan%20ref%3D%22triggerDom%22%3E%E5%AE%9E%E9%99%85%E8%A7%A6%E5%8F%91%E4%BD%8D%E7%BD%AE%3C%2Fspan%3E%0D%0A%0D%0A%20%20%20%20%3Cu-tip%20ref%3D%22tipRef%22%20trigger%3D%22click%22%3E%20%3C%2Fu-tip%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20shallowRef%20%7D%20from%20%22vue%22%0D%0A%0D%0Aconst%20tipRef%20%3D%20shallowRef()%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:C,"use-data":d(D)},{default:t(()=>s[1]||(s[1]=[l("p",null,"render(components/feedback/tip/virtual.vue)",-1)])),_:1},8,["use-data"])]),_:1}),s[7]||(s[7]=F(`<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TipDirection</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;top&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bottom&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;left&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;right&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TipAlign</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;start&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;center&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;end&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** tip提示组件组件属性 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TipProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**提示内容 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  content</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 自定义tip样式 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CSSProperties</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 自定义tip的class */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**触发tip方式 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  trigger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;hover&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;click&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 方向</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">auto</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  direction</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TipDirection</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 隐藏箭头 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  hideArrow</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 对齐方式</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">center</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  alignment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TipAlign</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * tip内容标签</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  contentTag</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** tip提示组件组件定义的事件 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TipEmits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 当提示框的内容更新时触发此事件 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;update:modelValue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="暴露的属性和方法" tabindex="-1">暴露的属性和方法 <a class="header-anchor" href="#暴露的属性和方法" aria-label="Permalink to &quot;暴露的属性和方法&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TipExpose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 关闭提示框 */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,6))])}}});export{P as __pageData,V as default};
