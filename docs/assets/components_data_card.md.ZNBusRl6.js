import{a8 as C,a4 as i,l as h,A as u,B as n,b as a,c as o,d as F,u as p,m,x as k,v as r,a9 as A}from"./chunks/framework.Cggwgzyo.js";import{s as B,b as y,m as _,C as f}from"./chunks/theme.CFwMseYr.js";const b={};function x(E,t){const s=i("u-card-header"),e=i("u-card-content"),l=i("u-card-action"),d=i("u-card");return h(),u(d,{integrate:""},{default:n(()=>[a(s,null,{default:n(()=>t[0]||(t[0]=[o("这是标题")])),_:1}),a(e,null,{default:n(()=>t[1]||(t[1]=[o("这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容")])),_:1}),a(l,null,{default:n(()=>t[2]||(t[2]=[o("这是尾部操作")])),_:1})]),_:1})}const v=C(b,[["render",x]]),P=F({__name:"basic",setup(E){const t=f({circle:!0,iconSize:18,loading:!1});return(s,e)=>{const l=i("u-card-cover"),d=i("u-text"),c=i("u-button"),D=i("u-card-action"),g=i("u-card");return h(),u(g,{width:"400"},{default:n(()=>[a(l,{src:"http://5b0988e595225.cdn.sohucs.com/images/20190625/2a57bb7082f84e33b53dd79b30b949df.jpeg"}),a(D,{style:{display:"flex","justify-content":"space-between","align-items":"center"}},{default:n(()=>[a(d,{"max-rows":1,as:"title"},{default:n(()=>e[0]||(e[0]=[o(" 卡片描述 ")])),_:1}),a(p(t),{tag:"span",size:"small"},{default:n(()=>[a(c,{icon:p(B),type:"primary"},null,8,["icon"]),a(c,{icon:p(y),type:"warning"},null,8,["icon"]),a(c,{icon:p(_)},null,8,["icon"])]),_:1})]),_:1})]),_:1})}}}),N=JSON.parse('{"title":"Card 卡片","description":"","frontmatter":{},"headers":[],"relativePath":"components/data/card.md","filePath":"components/data/card.md","lastUpdated":1734355318000}'),w={name:"components/data/card.md"},j=F({...w,setup(E){return(t,s)=>{const e=i("v-demo"),l=i("ClientOnly");return h(),m("div",null,[s[2]||(s[2]=k('<h1 id="card-卡片" tabindex="-1">Card 卡片 <a class="header-anchor" href="#card-卡片" aria-label="Permalink to &quot;Card 卡片&quot;">​</a></h1><p>显示一组内容，通常包含标题、描述、操作等。</p><p>卡片由 4 个子组件组成，分别是<code>u-card-header</code>、<code>u-card-content</code>、<code>u-card-action</code>、<code>u-card-cover</code>。这样做的目的是为了方便用户自由组合，并减少 dom 的渲染数量。</p><h2 id="基础卡片" tabindex="-1">基础卡片 <a class="header-anchor" href="#基础卡片" aria-label="Permalink to &quot;基础卡片&quot;">​</a></h2><p>当卡片像这样配点图片，展示内容时，它才会显得好看，如果全是文字，就会显得很丑陋。</p>',5)),a(l,null,{default:n(()=>[a(e,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-card%20width%3D%22400%22%3E%0D%0A%20%20%20%20%3Cu-card-cover%0D%0A%20%20%20%20%20%20src%3D%22http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190625%2F2a57bb7082f84e33b53dd79b30b949df.jpeg%22%0D%0A%20%20%20%20%2F%3E%0D%0A%0D%0A%20%20%20%20%3Cu-card-action%0D%0A%20%20%20%20%20%20style%3D%22display%3A%20flex%3B%20justify-content%3A%20space-between%3B%20align-items%3A%20center%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%3Cu-text%20%3Amax-rows%3D%221%22%20as%3D%22title%22%3E%20%E5%8D%A1%E7%89%87%E6%8F%8F%E8%BF%B0%20%3C%2Fu-text%3E%0D%0A%20%20%20%20%20%20%3Cbutton-common-props%20tag%3D%22span%22%20size%3D%22small%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%20%3Aicon%3D%22Star%22%20type%3D%22primary%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%20%3Aicon%3D%22Lock%22%20type%3D%22warning%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cu-button%20%3Aicon%3D%22MoreFilled%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Fbutton-common-props%3E%0D%0A%20%20%20%20%3C%2Fu-card-action%3E%0D%0A%20%20%3C%2Fu-card%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20MoreFilled%2C%20Star%2C%20Lock%20%7D%20from%20'icon-ultra'%0D%0Aimport%20%7B%20type%20ButtonProps%2C%20useComponentProps%20%7D%20from%20'ultra-ui'%0D%0A%0D%0Aconst%20ButtonCommonProps%20%3D%20useComponentProps%3CButtonProps%3E(%7B%0D%0A%20%20circle%3A%20true%2C%0D%0A%20%20%2F%2F%20type%3A%20'primary'%2C%0D%0A%20%20%2F%2F%20text%3A%20true%2C%0D%0A%20%20iconSize%3A%2018%2C%0D%0A%20%20loading%3A%20false%0D%0A%7D)%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:P,"use-data":p(A)},{default:n(()=>s[0]||(s[0]=[r("p",null,"render(components/data/card/basic.vue)",-1)])),_:1},8,["use-data"])]),_:1}),s[3]||(s[3]=r("h2",{id:"融入模式",tabindex:"-1"},[o("融入模式 "),r("a",{class:"header-anchor",href:"#融入模式","aria-label":'Permalink to "融入模式"'},"​")],-1)),s[4]||(s[4]=r("p",null,"有时候，卡片的阴影和边框会和周围的样式格格不入，这时候你可以尝试融入模式，其实就是去掉边框和阴影。",-1)),a(l,null,{default:n(()=>[a(e,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-card%20integrate%3E%0D%0A%20%20%20%20%3Cu-card-header%3E%E8%BF%99%E6%98%AF%E6%A0%87%E9%A2%98%3C%2Fu-card-header%3E%0D%0A%20%20%20%20%3Cu-card-content%0D%0A%20%20%20%20%20%20%3E%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%E8%BF%99%E6%98%AF%E5%86%85%E5%AE%B9%3C%2Fu-card-content%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%3Cu-card-action%3E%E8%BF%99%E6%98%AF%E5%B0%BE%E9%83%A8%E6%93%8D%E4%BD%9C%3C%2Fu-card-action%3E%0D%0A%20%20%3C%2Fu-card%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%3C%2Fscript%3E%0D%0A",title:"",component:v,"use-data":p(A)},{default:n(()=>s[1]||(s[1]=[r("p",null,"render(components/data/card/integrate.vue)",-1)])),_:1},8,["use-data"])]),_:1}),s[5]||(s[5]=k(`<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 卡片组件属性 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CardProps</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ComponentProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 宽度 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 融合样式，卡片不再有阴影 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  integrate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CardActionProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 右对齐 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  alignRight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CardContentProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 封面模式 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  cover</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CardCoverProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 封面图片地址 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 封面高度 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  height</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,2))])}}});export{N as __pageData,j as default};
