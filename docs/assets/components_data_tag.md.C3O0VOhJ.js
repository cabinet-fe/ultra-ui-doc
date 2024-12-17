import{d as m,a4 as i,l,m as u,F as c,L as g,b as n,B as r,c as o,I as A,v as e,u as C,a9 as f}from"./chunks/framework.Cggwgzyo.js";const _={class:"flex flex-wrap gap-2"},y=m({__name:"round",setup(D){const d=["primary","info","success","warning","danger"];return(t,s)=>{const a=i("u-tag");return l(),u("div",_,[(l(),u(c,null,g(d,p=>n(a,{round:"",type:p},{default:r(()=>[o(A(p.toUpperCase()),1)]),_:2},1032,["type"])),64))])}}}),E={class:"flex flex-wrap gap-2"},x=m({__name:"dark",setup(D){const d=["primary","info","success","warning","danger"];return(t,s)=>{const a=i("u-tag");return l(),u("div",E,[n(a,{dark:""},{default:r(()=>s[0]||(s[0]=[o("默认")])),_:1}),(l(),u(c,null,g(d,p=>n(a,{dark:"",type:p},{default:r(()=>[o(A(p.toUpperCase()),1)]),_:2},1032,["type"])),64))])}}}),B={class:"flex flex-wrap gap-2"},F=m({__name:"basic",setup(D){const d=["primary","info","success","warning","danger"];return(t,s)=>{const a=i("u-tag");return l(),u("div",B,[n(a,null,{default:r(()=>s[0]||(s[0]=[o("默认")])),_:1}),(l(),u(c,null,g(d,p=>n(a,{type:p},{default:r(()=>[o(A(p.toUpperCase()),1)]),_:2},1032,["type"])),64))])}}}),k=JSON.parse('{"title":"Tag 标签","description":"","frontmatter":{},"headers":[],"relativePath":"components/data/tag.md","filePath":"components/data/tag.md","lastUpdated":1734355318000}'),v={name:"components/data/tag.md"},b=m({...v,setup(D){return(d,t)=>{const s=i("v-demo"),a=i("ClientOnly");return l(),u("div",null,[t[3]||(t[3]=e("h1",{id:"tag-标签",tabindex:"-1"},[o("Tag 标签 "),e("a",{class:"header-anchor",href:"#tag-标签","aria-label":'Permalink to "Tag 标签"'},"​")],-1)),t[4]||(t[4]=e("p",null,"挺好看的，挺好看的。",-1)),t[5]||(t[5]=e("h2",{id:"基础使用",tabindex:"-1"},[o("基础使用 "),e("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),t[6]||(t[6]=e("p",null,"这个样式应该是最好看的，比较推荐这样使用。",-1)),n(a,null,{default:r(()=>[n(s,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20class%3D%22flex%20flex-wrap%20gap-2%22%3E%0D%0A%20%20%20%20%3Cu-tag%3E%E9%BB%98%E8%AE%A4%3C%2Fu-tag%3E%0D%0A%20%20%20%20%3Cu-tag%20v-for%3D%22item%20of%20types%22%20%3Atype%3D%22item%22%3E%7B%7B%20item.toUpperCase()%20%7D%7D%3C%2Fu-tag%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20type%20%7B%20ColorType%20%7D%20from%20'ultra-ui%2Ftypes%2Fcomponent-common'%0D%0A%0D%0Aconst%20types%3A%20ColorType%5B%5D%20%3D%20%5B'primary'%2C%20'info'%2C%20'success'%2C%20'warning'%2C%20'danger'%5D%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:F,"use-data":C(f)},{default:r(()=>t[0]||(t[0]=[e("p",null,"render(components/data/tag/basic.vue)",-1)])),_:1},8,["use-data"])]),_:1}),t[7]||(t[7]=e("h2",{id:"暗色模式",tabindex:"-1"},[o("暗色模式 "),e("a",{class:"header-anchor",href:"#暗色模式","aria-label":'Permalink to "暗色模式"'},"​")],-1)),t[8]||(t[8]=e("p",null,"这个配合黑暗模式可能看起来更加协调一点。",-1)),n(a,null,{default:r(()=>[n(s,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20class%3D%22flex%20flex-wrap%20gap-2%22%3E%0D%0A%20%20%20%20%3Cu-tag%20dark%3E%E9%BB%98%E8%AE%A4%3C%2Fu-tag%3E%0D%0A%20%20%20%20%3Cu-tag%20v-for%3D%22item%20of%20types%22%20dark%20%3Atype%3D%22item%22%3E%0D%0A%20%20%20%20%20%20%7B%7B%20item.toUpperCase()%20%7D%7D%0D%0A%20%20%20%20%3C%2Fu-tag%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20type%20%7B%20ColorType%20%7D%20from%20'ultra-ui%2Ftypes%2Fcomponent-common'%0D%0A%0D%0Aconst%20types%3A%20ColorType%5B%5D%20%3D%20%5B'primary'%2C%20'info'%2C%20'success'%2C%20'warning'%2C%20'danger'%5D%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:x,"use-data":C(f)},{default:r(()=>t[1]||(t[1]=[e("p",null,"render(components/data/tag/dark.vue)",-1)])),_:1},8,["use-data"])]),_:1}),t[9]||(t[9]=e("h2",{id:"圆角标签",tabindex:"-1"},[o("圆角标签 "),e("a",{class:"header-anchor",href:"#圆角标签","aria-label":'Permalink to "圆角标签"'},"​")],-1)),t[10]||(t[10]=e("p",null,"...",-1)),n(a,null,{default:r(()=>[n(s,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20class%3D%22flex%20flex-wrap%20gap-2%22%3E%0D%0A%20%20%20%20%3Cu-tag%20v-for%3D%22item%20of%20types%22%20round%20%3Atype%3D%22item%22%3E%0D%0A%20%20%20%20%20%20%7B%7B%20item.toUpperCase()%20%7D%7D%0D%0A%20%20%20%20%3C%2Fu-tag%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20type%20%7B%20ColorType%20%7D%20from%20'ultra-ui%2Ftypes%2Fcomponent-common'%0D%0A%0D%0Aconst%20types%3A%20ColorType%5B%5D%20%3D%20%5B'primary'%2C%20'info'%2C%20'success'%2C%20'warning'%2C%20'danger'%5D%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:y,"use-data":C(f)},{default:r(()=>t[2]||(t[2]=[e("p",null,"render(components/data/tag/round.vue)",-1)])),_:1},8,["use-data"])]),_:1})])}}});export{k as __pageData,b as default};
