import{e as d,r as g,a3 as s,o as u,c as m,d as i,I as c,g as p,a as n,B as l,v as A,a8 as _}from"./chunks/framework.B865yEVI.js";const v=d({__name:"basic",setup(D){const a=g({current:1,size:10});return(e,t)=>{const r=s("u-paginator");return u(),m("div",null,[i(c(a)+" ",1),p(r,{"page-number":a.current,"onUpdate:pageNumber":t[0]||(t[0]=o=>a.current=o),"page-size":a.size,"onUpdate:pageSize":t[1]||(t[1]=o=>a.size=o),total:120},null,8,["page-number","page-size"])])}}}),b=JSON.parse('{"title":"Paginator 分页器","description":"","frontmatter":{},"headers":[],"relativePath":"components/data/paginator.md","filePath":"components/data/paginator.md","lastUpdated":1730369134000}'),f={name:"components/data/paginator.md"},z=d({...f,setup(D){return(a,e)=>{const t=s("v-demo"),r=s("ClientOnly");return u(),m("div",null,[e[1]||(e[1]=n("h1",{id:"paginator-分页器",tabindex:"-1"},[i("Paginator 分页器 "),n("a",{class:"header-anchor",href:"#paginator-分页器","aria-label":'Permalink to "Paginator 分页器"'},"​")],-1)),e[2]||(e[2]=n("p",null,"通过分页器，来对数据进行分页处理(基本上是把数据丢到后端)。",-1)),e[3]||(e[3]=n("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),p(r,null,{default:l(()=>[p(t,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%3E%0D%0A%20%20%20%20%7B%7B%20pageState%20%7D%7D%0D%0A%20%20%20%20%3Cu-paginator%0D%0A%20%20%20%20%20%20v-model%3Apage-number%3D%22pageState.current%22%0D%0A%20%20%20%20%20%20v-model%3Apage-size%3D%22pageState.size%22%0D%0A%20%20%20%20%20%20%3Atotal%3D%22120%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20reactive%20%7D%20from%20'vue'%0D%0A%0D%0Aconst%20pageState%20%3D%20reactive(%7B%0D%0A%20%20current%3A%201%2C%0D%0A%20%20size%3A%2010%0D%0A%7D)%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:v,"use-data":A(_)},{default:l(()=>e[0]||(e[0]=[n("p",null,"render(data/paginator/basic.vue)",-1)])),_:1},8,["use-data"])]),_:1})])}}});export{b as __pageData,z as default};
