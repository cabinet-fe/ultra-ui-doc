import{d as E,D as A,B as h,o,b as g,c as D,j as i,G as t,w as p,k as d,a as e,ah as y,u}from"./chunks/framework.DSODM362.js";import{j as C}from"./chunks/theme.DTamNouo.js";const m=E({__name:"pattern",setup(F){const n=A("");return(s,a)=>{const l=h("u-input");return o(),g(l,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=k=>n.value=k),placeholder:"请输入小写字母",pattern:/^[a-z]*$/},null,8,["modelValue"])}}}),c={class:"mb-4"},B={class:"mb-4"},v=E({__name:"prefix-suffix",setup(F){const n=A("");return(s,a)=>{const l=h("u-input"),k=h("u-icon");return o(),D("div",null,[i("div",c,[a[3]||(a[3]=i("span",null,"前缀字符串",-1)),t(l,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=r=>n.value=r),prefix:"+86"},null,8,["modelValue"])]),i("div",B,[a[4]||(a[4]=i("span",null,"后缀字符串",-1)),t(l,{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=r=>n.value=r),placeholder:"填写上一句",suffix:", 映日荷花别样红"},null,8,["modelValue"])]),i("div",null,[a[5]||(a[5]=i("span",null,"后缀插槽",-1)),t(l,{modelValue:n.value,"onUpdate:modelValue":a[2]||(a[2]=r=>n.value=r)},{suffix:p(()=>[t(k,null,{default:p(()=>[t(d(C))]),_:1})]),_:1},8,["modelValue"])])])}}}),f=E({__name:"basic",setup(F){const n=A("");return(s,a)=>{const l=h("u-input");return o(),g(l,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=k=>n.value=k)},null,8,["modelValue"])}}}),V=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/input.md","filePath":"components/form/input.md","lastUpdated":1736304376000}'),_={name:"components/form/input.md"},P=E({..._,setup(F){return(n,s)=>{const a=h("v-demo"),l=h("ClientOnly");return o(),D("div",null,[s[3]||(s[3]=i("h1",{id:"input-输入框",tabindex:"-1"},[e("Input 输入框 "),i("a",{class:"header-anchor",href:"#input-输入框","aria-label":'Permalink to "Input 输入框"'},"​")],-1)),s[4]||(s[4]=i("p",null,"表单中最基础的输入控件之一。",-1)),s[5]||(s[5]=i("h2",{id:"基础使用",tabindex:"-1"},[e("基础使用 "),i("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),s[6]||(s[6]=i("p",null,"它的用法就算没有文档，我相信你也会使用。",-1)),t(l,null,{default:p(()=>[t(a,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-input%20v-model%3D%22value%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20shallowRef%20%7D%20from%20'vue'%0D%0A%0D%0Aconst%20value%20%3D%20shallowRef('')%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:f,"use-data":d(u)},{default:p(()=>s[0]||(s[0]=[i("p",null,"render(components/form/input/basic.vue)",-1)])),_:1},8,["use-data"])]),_:1}),s[7]||(s[7]=i("h2",{id:"前缀和后缀",tabindex:"-1"},[e("前缀和后缀 "),i("a",{class:"header-anchor",href:"#前缀和后缀","aria-label":'Permalink to "前缀和后缀"'},"​")],-1)),s[8]||(s[8]=i("p",null,"前缀和后缀都有两种方式去插入，简单的字符串直接使用属性，复杂的使用插槽。",-1)),t(l,null,{default:p(()=>[t(a,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%3E%0D%0A%20%20%20%20%3Cdiv%20class%3D%22mb-4%22%3E%0D%0A%20%20%20%20%20%20%3Cspan%3E%E5%89%8D%E7%BC%80%E5%AD%97%E7%AC%A6%E4%B8%B2%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cu-input%20v-model%3D%22value%22%20prefix%3D%22%2B86%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%3Cdiv%20class%3D%22mb-4%22%3E%0D%0A%20%20%20%20%20%20%3Cspan%3E%E5%90%8E%E7%BC%80%E5%AD%97%E7%AC%A6%E4%B8%B2%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cu-input%0D%0A%20%20%20%20%20%20%20%20v-model%3D%22value%22%0D%0A%20%20%20%20%20%20%20%20placeholder%3D%22%E5%A1%AB%E5%86%99%E4%B8%8A%E4%B8%80%E5%8F%A5%22%0D%0A%20%20%20%20%20%20%20%20suffix%3D%22%2C%20%E6%98%A0%E6%97%A5%E8%8D%B7%E8%8A%B1%E5%88%AB%E6%A0%B7%E7%BA%A2%22%0D%0A%20%20%20%20%20%20%2F%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%3Cdiv%3E%0D%0A%20%20%20%20%20%20%3Cspan%3E%E5%90%8E%E7%BC%80%E6%8F%92%E6%A7%BD%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cu-input%20v-model%3D%22value%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23suffix%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cu-icon%3E%3CSearch%20%2F%3E%3C%2Fu-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-input%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20shallowRef%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20Search%20%7D%20from%20'icon-ultra'%0D%0A%0D%0Aconst%20value%20%3D%20shallowRef('')%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:v,"use-data":d(u)},{default:p(()=>s[1]||(s[1]=[i("p",null,"render(components/form/input/prefix-suffix.vue)",-1)])),_:1},8,["use-data"])]),_:1}),s[9]||(s[9]=i("h2",{id:"模式",tabindex:"-1"},[e("模式 "),i("a",{class:"header-anchor",href:"#模式","aria-label":'Permalink to "模式"'},"​")],-1)),s[10]||(s[10]=i("p",null,[e("模式是用来限制输入框的输入内容的，通过 "),i("code",null,"pattern"),e(" 属性指定。")],-1)),s[11]||(s[11]=i("p",null,"其实很多时候你可以使用表单校验来限制用户输入，但是校验防呆不防傻。",-1)),t(l,null,{default:p(()=>[t(a,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-input%20v-model%3D%22value%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%B0%8F%E5%86%99%E5%AD%97%E6%AF%8D%22%20%3Apattern%3D%22%2F%5E%5Ba-z%5D*%24%2F%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20shallowRef%20%7D%20from%20'vue'%0D%0A%0D%0Aconst%20value%20%3D%20shallowRef('')%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:m,"use-data":d(u)},{default:p(()=>s[2]||(s[2]=[i("p",null,"render(components/form/input/pattern.vue)",-1)])),_:1},8,["use-data"])]),_:1}),s[12]||(s[12]=y("",4))])}}});export{V as __pageData,P as default};
