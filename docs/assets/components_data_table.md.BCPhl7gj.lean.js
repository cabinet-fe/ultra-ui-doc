import{G as o,d as D}from"./chunks/theme.DTamNouo.js";import{d as E,B as A,o as y,b as m,k as h,p as x,D as f,c as M,G as l,j as i,w as t,a as k,t as B,F as _,ab as T,ac as w,ah as v,u as F}from"./chunks/framework.DSODM362.js";const I=E({__name:"tree",setup(g){const r=o([{name:"单位编码",key:"code",fixed:"left"},{name:"单位名称",key:"name",fixed:"left"},{name:"单位类型",key:"type"},{name:"单位地址",key:"address"},{name:"单位电话",key:"phone"}],{align:"center"}),s=Array.from({length:10}).map((n,a)=>({code:`${a+1}`.padStart(3,"0"),name:`单位${a+1}`,type:"单位",address:"单位地址",phone:"单位电话",children:Array.from({length:Math.round(Math.random()*3)}).map((d,C)=>({code:`${a+1}`.padStart(3,"0")+`${C+1}`.padStart(3,"0"),name:`单位${a+1}-${C+1}`,type:"部门",address:"单位地址",phone:"单位电话"}))}));return(n,a)=>{const d=A("u-table");return y(),m(d,{data:h(s),columns:h(r),tree:"",style:{"max-height":"400px"}},null,8,["data","columns"])}}}),R=E({__name:"select-and-check",setup(g){const r=o([{name:"学生ID",key:"studentId"},{name:"姓名",key:"name",fixed:"left"},{name:"性别",key:"gender"},{name:"出生日期",key:"birthDate"},{name:"年级",key:"grade"},{name:"班级",key:"class"},{name:"入学日期",key:"enrollmentDate",fixed:"right"},{name:"家庭住址",key:"address"}],{align:"center"}),s=x(!0),n=x(!1),a=f([]),d=f(),C=Array.from({length:10}).map((u,e)=>({studentId:e+1,name:`学生${e+1}`,gender:e%2===0?"男":"女",birthDate:D("1995-01-01").calc(Math.round(Math.random()*180),"days").format("yyyy-MM-dd"),grade:Math.ceil(Math.random()*6),class:`班级${e+1}`,enrollmentDate:D(Date.now()+Math.round(Math.random()*100)*864e5).format("yyyy-MM-dd"),address:`地址${e+1}`}));return(u,e)=>{const b=A("u-table"),c=A("u-checkbox");return y(),M(_,null,[l(b,{data:h(C),columns:h(r),checkable:n.value,selectable:s.value,checked:a.value,"onUpdate:checked":e[0]||(e[0]=p=>a.value=p),"row-key":"studentId",selected:d.value,"onUpdate:selected":e[1]||(e[1]=p=>d.value=p)},null,8,["data","columns","checkable","selectable","checked","selected"]),i("div",null,[l(c,{modelValue:s.value,"onUpdate:modelValue":[e[2]||(e[2]=p=>s.value=p),e[3]||(e[3]=p=>p&&(n.value=!1))]},{default:t(()=>e[6]||(e[6]=[k("单选")])),_:1},8,["modelValue"]),l(c,{modelValue:n.value,"onUpdate:modelValue":[e[4]||(e[4]=p=>n.value=p),e[5]||(e[5]=p=>p&&(s.value=!1))]},{default:t(()=>e[7]||(e[7]=[k("多选")])),_:1},8,["modelValue"])]),i("div",null,"单选数据: "+B(d.value),1),i("div",null,"多选数据:"+B(a.value),1)],64)}}}),$={style:{color:"red"}},P=E({__name:"slot",setup(g){const r=o([{name:"学生ID",key:"studentId",nameRender:({column:a})=>a.name},{name:"姓名",key:"name",fixed:"left",width:200},{name:"性别",key:"gender"},{name:"出生日期",key:"birthDate"},{name:"年级",key:"grade"},{name:"班级",key:"class"},{name:"入学日期",key:"enrollmentDate",fixed:"right"},{name:"家庭住址",key:"address"}],{align:"center"}),s=f([]);function n(){s.value=[...s.value,{studentId:s.value.length+1,name:`学生${s.value.length+1}`,gender:s.value.length%2===0?"男":"女",birthDate:D("1995-01-01").calc(Math.round(Math.random()*180),"days").format("yyyy-MM-dd"),grade:Math.ceil(Math.random()*6),class:`班级${s.value.length+1}`,enrollmentDate:D(Date.now()+Math.round(Math.random()*100)*864e5).format("yyyy-MM-dd"),address:`地址${s.value.length+1}`}]}return(a,d)=>{const C=A("u-input"),u=A("u-tip"),e=A("u-tag"),b=A("u-table"),c=A("u-button");return y(),M(_,null,[l(b,{data:s.value,columns:h(r)},{"column:name":t(({model:p})=>[l(C,T(w(p)),null,16)]),"header:gender":t(({column:p})=>[l(u,{content:"aaa"},{default:t(()=>[i("span",$,B(p.name),1)]),_:2},1024)]),"column:gender":t(({val:p})=>[l(e,{type:p==="男"?"primary":"danger"},{default:t(()=>[k(B(p),1)]),_:2},1032,["type"])]),_:1},8,["data","columns"]),i("div",null,[l(c,{onClick:n},{default:t(()=>d[0]||(d[0]=[k("添加数据")])),_:1})])],64)}}}),S=E({__name:"multi-level-header",setup(g){const r=o([{name:"学生ID",key:"studentId",fixed:"left"},{name:"基础信息",key:"base",children:[{name:"姓名",key:"name",fixed:"left"},{name:"性别",key:"gender"},{name:"出生日期",key:"birthDate"},{name:"家庭住址",key:"address"}]},{name:"入学信息",key:"enrollment",children:[{name:"年级",key:"grade"},{name:"班级",key:"class"},{name:"入学日期",key:"enrollmentDate"}]}],{align:"center"}),s=Array.from({length:10}).map((n,a)=>({studentId:a+1,name:`学生${a+1}`,gender:a%2===0?"男":"女",birthDate:D("1995-01-01").calc(Math.round(Math.random()*180),"days").format("yyyy-MM-dd"),grade:Math.ceil(Math.random()*6),class:`班级${a+1}`,enrollmentDate:D(Date.now()+Math.round(Math.random()*100)*864e5).format("yyyy-MM-dd"),address:`地址${a+1}`}));return(n,a)=>{const d=A("u-table");return y(),m(d,{data:h(s),columns:h(r)},null,8,["data","columns"])}}}),N=E({__name:"big-data",setup(g){const r=o([{name:"学生ID",key:"studentId"},{name:"姓名",key:"name",fixed:"left"},{name:"性别",key:"gender"},{name:"出生日期",key:"birthDate"},{name:"年级",key:"grade"},{name:"班级",key:"class"},{name:"入学日期",key:"enrollmentDate",fixed:"right"},{name:"家庭住址",key:"address"}],{align:"center"}),s=Array.from({length:1e4}).map((n,a)=>({studentId:a+1,name:`学生${a+1}`,gender:a%2===0?"男":"女",birthDate:D("1995-01-01").calc(Math.round(Math.random()*180),"days").format("yyyy-MM-dd"),grade:Math.ceil(Math.random()*6),class:`班级${a+1}`,enrollmentDate:D(Date.now()+Math.round(Math.random()*100)*864e5).format("yyyy-MM-dd"),address:`地址${a+1}`}));return(n,a)=>{const d=A("u-table");return y(),m(d,{data:h(s),columns:h(r),style:{"max-height":"400px"}},null,8,["data","columns"])}}}),V=E({__name:"index",setup(g){const r=o([{name:"姓名",key:"name",fixed:"left"},{name:"性别",key:"gender"},{name:"出生日期",key:"birthDate"},{name:"年级",key:"grade"},{name:"班级",key:"class"},{name:"入学日期",key:"enrollmentDate",fixed:"right"},{name:"家庭住址",key:"address"}],{align:"center"}),s=Array.from({length:10}).map((n,a)=>({name:`学生${a+1}`,gender:a%2===0?"男":"女",birthDate:D("1995-01-01").calc(Math.round(Math.random()*180),"days").format("yyyy-MM-dd"),grade:Math.ceil(Math.random()*6),class:`班级${a+1}`,enrollmentDate:D(Date.now()+Math.round(Math.random()*100)*864e5).format("yyyy-MM-dd"),address:`地址${a+1}`}));return(n,a)=>{const d=A("u-table");return y(),m(d,{data:h(s),columns:h(r),"show-index":""},null,8,["data","columns"])}}}),q=E({__name:"basic",setup(g){const r=o([{name:"学生ID",key:"studentId"},{name:"姓名",key:"name",fixed:"left"},{name:"性别",key:"gender"},{name:"出生日期",key:"birthDate"},{name:"年级",key:"grade"},{name:"班级",key:"class"},{name:"入学日期",key:"enrollmentDate",fixed:"right"},{name:"家庭住址",key:"address"}],{align:"center"}),s=Array.from({length:10}).map((n,a)=>({studentId:a+1,name:`学生${a+1}`,gender:a%2===0?"男":"女",birthDate:D("1995-01-01").calc(Math.round(Math.random()*180),"days").format("yyyy-MM-dd"),grade:Math.ceil(Math.random()*6),class:`班级${a+1}`,enrollmentDate:D(Date.now()+Math.round(Math.random()*100)*864e5).format("yyyy-MM-dd"),address:`地址${a+1}`}));return(n,a)=>{const d=A("u-table");return y(),m(d,{data:h(s),columns:h(r)},null,8,["data","columns"])}}}),O=JSON.parse('{"title":"Table 表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/data/table.md","filePath":"components/data/table.md","lastUpdated":1736304376000}'),U={name:"components/data/table.md"},G=E({...U,setup(g){return(r,s)=>{const n=A("v-demo"),a=A("ClientOnly");return y(),M("div",null,[s[7]||(s[7]=i("h1",{id:"table-表格",tabindex:"-1"},[k("Table 表格 "),i("a",{class:"header-anchor",href:"#table-表格","aria-label":'Permalink to "Table 表格"'},"​")],-1)),s[8]||(s[8]=i("p",null,"表格组件是 UltraUI 中使用频率非常高的组件之一，它的强大恐怖如斯。",-1)),s[9]||(s[9]=i("h2",{id:"基础使用",tabindex:"-1"},[k("基础使用 "),i("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),s[10]||(s[10]=i("p",null,"下面是一个简单的学生信息表格，展示了表格组件的基本使用方法。",-1)),l(a,null,{default:t(()=>[l(n,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-table%20%3Adata%3D%22data%22%20%3Acolumns%3D%22columns%22%3E%20%3C%2Fu-table%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20date%20%7D%20from%20'cat-kit%2Ffe'%0D%0Aimport%20%7B%20defineTableColumns%20%7D%20from%20'ultra-ui'%0D%0A%0D%0Aconst%20columns%20%3D%20defineTableColumns(%0D%0A%20%20%5B%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%AD%A6%E7%94%9FID'%2C%20key%3A%20'studentId'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%A7%93%E5%90%8D'%2C%20key%3A%20'name'%2C%20fixed%3A%20'left'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E6%80%A7%E5%88%AB'%2C%20key%3A%20'gender'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%87%BA%E7%94%9F%E6%97%A5%E6%9C%9F'%2C%20key%3A%20'birthDate'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%B9%B4%E7%BA%A7'%2C%20key%3A%20'grade'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E7%8F%AD%E7%BA%A7'%2C%20key%3A%20'class'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%85%A5%E5%AD%A6%E6%97%A5%E6%9C%9F'%2C%20key%3A%20'enrollmentDate'%2C%20fixed%3A%20'right'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%AE%B6%E5%BA%AD%E4%BD%8F%E5%9D%80'%2C%20key%3A%20'address'%20%7D%0D%0A%20%20%5D%2C%0D%0A%20%20%7B%20align%3A%20'center'%20%7D%0D%0A)%0D%0A%0D%0Aconst%20data%20%3D%20Array.from(%7B%20length%3A%2010%20%7D).map((_%2C%20index)%20%3D%3E%20(%7B%0D%0A%20%20studentId%3A%20index%20%2B%201%2C%0D%0A%20%20name%3A%20%60%E5%AD%A6%E7%94%9F%24%7Bindex%20%2B%201%7D%60%2C%0D%0A%20%20gender%3A%20index%20%25%202%20%3D%3D%3D%200%20%3F%20'%E7%94%B7'%20%3A%20'%E5%A5%B3'%2C%0D%0A%20%20birthDate%3A%20date('1995-01-01')%0D%0A%20%20%20%20.calc(Math.round(Math.random()%20*%20180)%2C%20'days')%0D%0A%20%20%20%20.format('yyyy-MM-dd')%2C%0D%0A%20%20grade%3A%20Math.ceil(Math.random()%20*%206)%2C%0D%0A%20%20class%3A%20%60%E7%8F%AD%E7%BA%A7%24%7Bindex%20%2B%201%7D%60%2C%0D%0A%20%20enrollmentDate%3A%20date(%0D%0A%20%20%20%20Date.now()%20%2B%20Math.round(Math.random()%20*%20100)%20*%2086400000%0D%0A%20%20).format('yyyy-MM-dd')%2C%0D%0A%20%20address%3A%20%60%E5%9C%B0%E5%9D%80%24%7Bindex%20%2B%201%7D%60%0D%0A%7D))%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:q,"use-data":h(F)},{default:t(()=>s[0]||(s[0]=[i("p",null,"render(components/data/table/basic.vue)",-1)])),_:1},8,["use-data"])]),_:1}),s[11]||(s[11]=i("h2",{id:"显示序号",tabindex:"-1"},[k("显示序号 "),i("a",{class:"header-anchor",href:"#显示序号","aria-label":'Permalink to "显示序号"'},"​")],-1)),s[12]||(s[12]=i("p",null,"序号会自动固定到左侧。",-1)),l(a,null,{default:t(()=>[l(n,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-table%20%3Adata%3D%22data%22%20%3Acolumns%3D%22columns%22%20show-index%3E%20%3C%2Fu-table%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20date%20%7D%20from%20'cat-kit%2Ffe'%0D%0Aimport%20%7B%20defineTableColumns%20%7D%20from%20'ultra-ui'%0D%0A%0D%0Aconst%20columns%20%3D%20defineTableColumns(%0D%0A%20%20%5B%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%A7%93%E5%90%8D'%2C%20key%3A%20'name'%2C%20fixed%3A%20'left'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E6%80%A7%E5%88%AB'%2C%20key%3A%20'gender'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%87%BA%E7%94%9F%E6%97%A5%E6%9C%9F'%2C%20key%3A%20'birthDate'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%B9%B4%E7%BA%A7'%2C%20key%3A%20'grade'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E7%8F%AD%E7%BA%A7'%2C%20key%3A%20'class'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%85%A5%E5%AD%A6%E6%97%A5%E6%9C%9F'%2C%20key%3A%20'enrollmentDate'%2C%20fixed%3A%20'right'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%AE%B6%E5%BA%AD%E4%BD%8F%E5%9D%80'%2C%20key%3A%20'address'%20%7D%0D%0A%20%20%5D%2C%0D%0A%20%20%7B%20align%3A%20'center'%20%7D%0D%0A)%0D%0A%0D%0Aconst%20data%20%3D%20Array.from(%7B%20length%3A%2010%20%7D).map((_%2C%20index)%20%3D%3E%20(%7B%0D%0A%20%20name%3A%20%60%E5%AD%A6%E7%94%9F%24%7Bindex%20%2B%201%7D%60%2C%0D%0A%20%20gender%3A%20index%20%25%202%20%3D%3D%3D%200%20%3F%20'%E7%94%B7'%20%3A%20'%E5%A5%B3'%2C%0D%0A%20%20birthDate%3A%20date('1995-01-01')%0D%0A%20%20%20%20.calc(Math.round(Math.random()%20*%20180)%2C%20'days')%0D%0A%20%20%20%20.format('yyyy-MM-dd')%2C%0D%0A%20%20grade%3A%20Math.ceil(Math.random()%20*%206)%2C%0D%0A%20%20class%3A%20%60%E7%8F%AD%E7%BA%A7%24%7Bindex%20%2B%201%7D%60%2C%0D%0A%20%20enrollmentDate%3A%20date(%0D%0A%20%20%20%20Date.now()%20%2B%20Math.round(Math.random()%20*%20100)%20*%2086400000%0D%0A%20%20).format('yyyy-MM-dd')%2C%0D%0A%20%20address%3A%20%60%E5%9C%B0%E5%9D%80%24%7Bindex%20%2B%201%7D%60%0D%0A%7D))%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:V,"use-data":h(F)},{default:t(()=>s[1]||(s[1]=[i("p",null,"render(components/data/table/index.vue)",-1)])),_:1},8,["use-data"])]),_:1}),s[13]||(s[13]=i("h2",{id:"固定表头-大数据渲染",tabindex:"-1"},[k("固定表头 & 大数据渲染 "),i("a",{class:"header-anchor",href:"#固定表头-大数据渲染","aria-label":'Permalink to "固定表头 & 大数据渲染"'},"​")],-1)),s[14]||(s[14]=i("p",null,"有时候你的数据会有亿点点多，而且你不希望数据滚动后看不到表头，很简单，给表头加上一个固定高度或最大高度。",-1)),s[15]||(s[15]=i("p",null,"这时候你就拥有了可以渲染大量数据的表格了。",-1)),s[16]||(s[16]=i("p",null,"下面是 1w 条数据的渲染。",-1)),l(a,null,{default:t(()=>[l(n,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-table%20%3Adata%3D%22data%22%20%3Acolumns%3D%22columns%22%20style%3D%22max-height%3A%20400px%22%3E%20%3C%2Fu-table%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20date%20%7D%20from%20'cat-kit%2Ffe'%0D%0Aimport%20%7B%20defineTableColumns%20%7D%20from%20'ultra-ui'%0D%0A%0D%0Aconst%20columns%20%3D%20defineTableColumns(%0D%0A%20%20%5B%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%AD%A6%E7%94%9FID'%2C%20key%3A%20'studentId'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%A7%93%E5%90%8D'%2C%20key%3A%20'name'%2C%20fixed%3A%20'left'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E6%80%A7%E5%88%AB'%2C%20key%3A%20'gender'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%87%BA%E7%94%9F%E6%97%A5%E6%9C%9F'%2C%20key%3A%20'birthDate'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%B9%B4%E7%BA%A7'%2C%20key%3A%20'grade'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E7%8F%AD%E7%BA%A7'%2C%20key%3A%20'class'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%85%A5%E5%AD%A6%E6%97%A5%E6%9C%9F'%2C%20key%3A%20'enrollmentDate'%2C%20fixed%3A%20'right'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%AE%B6%E5%BA%AD%E4%BD%8F%E5%9D%80'%2C%20key%3A%20'address'%20%7D%0D%0A%20%20%5D%2C%0D%0A%20%20%7B%20align%3A%20'center'%20%7D%0D%0A)%0D%0A%0D%0Aconst%20data%20%3D%20Array.from(%7B%20length%3A%2010000%20%7D).map((_%2C%20index)%20%3D%3E%20(%7B%0D%0A%20%20studentId%3A%20index%20%2B%201%2C%0D%0A%20%20name%3A%20%60%E5%AD%A6%E7%94%9F%24%7Bindex%20%2B%201%7D%60%2C%0D%0A%20%20gender%3A%20index%20%25%202%20%3D%3D%3D%200%20%3F%20'%E7%94%B7'%20%3A%20'%E5%A5%B3'%2C%0D%0A%20%20birthDate%3A%20date('1995-01-01')%0D%0A%20%20%20%20.calc(Math.round(Math.random()%20*%20180)%2C%20'days')%0D%0A%20%20%20%20.format('yyyy-MM-dd')%2C%0D%0A%20%20grade%3A%20Math.ceil(Math.random()%20*%206)%2C%0D%0A%20%20class%3A%20%60%E7%8F%AD%E7%BA%A7%24%7Bindex%20%2B%201%7D%60%2C%0D%0A%20%20enrollmentDate%3A%20date(%0D%0A%20%20%20%20Date.now()%20%2B%20Math.round(Math.random()%20*%20100)%20*%2086400000%0D%0A%20%20).format('yyyy-MM-dd')%2C%0D%0A%20%20address%3A%20%60%E5%9C%B0%E5%9D%80%24%7Bindex%20%2B%201%7D%60%0D%0A%7D))%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:N,"use-data":h(F)},{default:t(()=>s[2]||(s[2]=[i("p",null,"render(components/data/table/big-data.vue)",-1)])),_:1},8,["use-data"])]),_:1}),s[17]||(s[17]=i("div",{class:"tip custom-block"},[i("p",{class:"custom-block-title"},"提示"),i("p",null,"理论上来讲渲染 10 万条数据也是 ok 的，但是这样会导致非常大的常驻内存损耗，建议数据在 1w 条以内。")],-1)),s[18]||(s[18]=i("h2",{id:"多级表头",tabindex:"-1"},[k("多级表头 "),i("a",{class:"header-anchor",href:"#多级表头","aria-label":'Permalink to "多级表头"'},"​")],-1)),s[19]||(s[19]=i("p",null,[k("定义一个表头很简单，只需要将列定义为一个"),i("code",null,"森林结构"),k("即可。")],-1)),l(a,null,{default:t(()=>[l(n,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-table%20%3Adata%3D%22data%22%20%3Acolumns%3D%22columns%22%3E%20%3C%2Fu-table%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20date%20%7D%20from%20'cat-kit%2Ffe'%0D%0Aimport%20%7B%20defineTableColumns%20%7D%20from%20'ultra-ui'%0D%0A%0D%0Aconst%20columns%20%3D%20defineTableColumns(%0D%0A%20%20%5B%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%AD%A6%E7%94%9FID'%2C%20key%3A%20'studentId'%2C%20fixed%3A%20'left'%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20name%3A%20'%E5%9F%BA%E7%A1%80%E4%BF%A1%E6%81%AF'%2C%0D%0A%20%20%20%20%20%20key%3A%20'base'%2C%0D%0A%20%20%20%20%20%20children%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%7B%20name%3A%20'%E5%A7%93%E5%90%8D'%2C%20key%3A%20'name'%2C%20fixed%3A%20'left'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%20name%3A%20'%E6%80%A7%E5%88%AB'%2C%20key%3A%20'gender'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%20name%3A%20'%E5%87%BA%E7%94%9F%E6%97%A5%E6%9C%9F'%2C%20key%3A%20'birthDate'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%20name%3A%20'%E5%AE%B6%E5%BA%AD%E4%BD%8F%E5%9D%80'%2C%20key%3A%20'address'%20%7D%0D%0A%20%20%20%20%20%20%5D%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20name%3A%20'%E5%85%A5%E5%AD%A6%E4%BF%A1%E6%81%AF'%2C%0D%0A%20%20%20%20%20%20key%3A%20'enrollment'%2C%0D%0A%20%20%20%20%20%20children%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%7B%20name%3A%20'%E5%B9%B4%E7%BA%A7'%2C%20key%3A%20'grade'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%20name%3A%20'%E7%8F%AD%E7%BA%A7'%2C%20key%3A%20'class'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%20name%3A%20'%E5%85%A5%E5%AD%A6%E6%97%A5%E6%9C%9F'%2C%20key%3A%20'enrollmentDate'%20%7D%0D%0A%20%20%20%20%20%20%5D%0D%0A%20%20%20%20%7D%0D%0A%20%20%5D%2C%0D%0A%20%20%7B%20align%3A%20'center'%20%7D%0D%0A)%0D%0A%0D%0Aconst%20data%20%3D%20Array.from(%7B%20length%3A%2010%20%7D).map((_%2C%20index)%20%3D%3E%20(%7B%0D%0A%20%20studentId%3A%20index%20%2B%201%2C%0D%0A%20%20name%3A%20%60%E5%AD%A6%E7%94%9F%24%7Bindex%20%2B%201%7D%60%2C%0D%0A%20%20gender%3A%20index%20%25%202%20%3D%3D%3D%200%20%3F%20'%E7%94%B7'%20%3A%20'%E5%A5%B3'%2C%0D%0A%20%20birthDate%3A%20date('1995-01-01')%0D%0A%20%20%20%20.calc(Math.round(Math.random()%20*%20180)%2C%20'days')%0D%0A%20%20%20%20.format('yyyy-MM-dd')%2C%0D%0A%20%20grade%3A%20Math.ceil(Math.random()%20*%206)%2C%0D%0A%20%20class%3A%20%60%E7%8F%AD%E7%BA%A7%24%7Bindex%20%2B%201%7D%60%2C%0D%0A%20%20enrollmentDate%3A%20date(%0D%0A%20%20%20%20Date.now()%20%2B%20Math.round(Math.random()%20*%20100)%20*%2086400000%0D%0A%20%20).format('yyyy-MM-dd')%2C%0D%0A%20%20address%3A%20%60%E5%9C%B0%E5%9D%80%24%7Bindex%20%2B%201%7D%60%0D%0A%7D))%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:S,"use-data":h(F)},{default:t(()=>s[3]||(s[3]=[i("p",null,"render(components/data/table/multi-level-header.vue)",-1)])),_:1},8,["use-data"])]),_:1}),s[20]||(s[20]=v("",3)),l(a,null,{default:t(()=>[l(n,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-table%20%3Adata%3D%22data%22%20%3Acolumns%3D%22columns%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%23column%3Aname%3D%22%7B%20model%20%7D%22%3E%0D%0A%20%20%20%20%20%20%3Cu-input%20v-bind%3D%22model%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%0D%0A%20%20%20%20%3Ctemplate%20%23header%3Agender%3D%22%7B%20column%20%7D%22%3E%0D%0A%20%20%20%20%20%20%3Cu-tip%20content%3D%22aaa%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20style%3D%22color%3A%20red%22%3E%7B%7B%20column.name%20%7D%7D%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3C%2Fu-tip%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%0D%0A%20%20%20%20%3Ctemplate%20%23column%3Agender%3D%22%7B%20val%20%7D%22%3E%0D%0A%20%20%20%20%20%20%3Cu-tag%20%3Atype%3D%22val%20%3D%3D%3D%20'%E7%94%B7'%20%3F%20'primary'%20%3A%20'danger'%22%3E%7B%7B%20val%20%7D%7D%3C%2Fu-tag%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fu-table%3E%0D%0A%0D%0A%20%20%3Cdiv%3E%0D%0A%20%20%20%20%3Cu-button%20%40click%3D%22handleAdd%22%3E%E6%B7%BB%E5%8A%A0%E6%95%B0%E6%8D%AE%3C%2Fu-button%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20date%20%7D%20from%20'cat-kit%2Ffe'%0D%0Aimport%20%7B%20defineTableColumns%20%7D%20from%20'ultra-ui'%0D%0Aimport%20%7B%20h%2C%20shallowRef%20%7D%20from%20'vue'%0D%0A%0D%0Aconst%20columns%20%3D%20defineTableColumns(%0D%0A%20%20%5B%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20name%3A%20'%E5%AD%A6%E7%94%9FID'%2C%0D%0A%20%20%20%20%20%20key%3A%20'studentId'%2C%0D%0A%20%20%20%20%20%20nameRender%3A%20(%7B%20column%20%7D)%20%3D%3E%20column.name%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%A7%93%E5%90%8D'%2C%20key%3A%20'name'%2C%20fixed%3A%20'left'%2C%20width%3A%20200%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E6%80%A7%E5%88%AB'%2C%20key%3A%20'gender'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%87%BA%E7%94%9F%E6%97%A5%E6%9C%9F'%2C%20key%3A%20'birthDate'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%B9%B4%E7%BA%A7'%2C%20key%3A%20'grade'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E7%8F%AD%E7%BA%A7'%2C%20key%3A%20'class'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%85%A5%E5%AD%A6%E6%97%A5%E6%9C%9F'%2C%20key%3A%20'enrollmentDate'%2C%20fixed%3A%20'right'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%AE%B6%E5%BA%AD%E4%BD%8F%E5%9D%80'%2C%20key%3A%20'address'%20%7D%0D%0A%20%20%5D%2C%0D%0A%20%20%7B%20align%3A%20'center'%20%7D%0D%0A)%0D%0A%0D%0Aconst%20data%20%3D%20shallowRef%3CRecord%3Cstring%2C%20any%3E%5B%5D%3E(%5B%5D)%0D%0A%0D%0Afunction%20handleAdd()%20%7B%0D%0A%20%20data.value%20%3D%20%5B%0D%0A%20%20%20%20...data.value%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20studentId%3A%20data.value.length%20%2B%201%2C%0D%0A%20%20%20%20%20%20name%3A%20%60%E5%AD%A6%E7%94%9F%24%7Bdata.value.length%20%2B%201%7D%60%2C%0D%0A%20%20%20%20%20%20gender%3A%20data.value.length%20%25%202%20%3D%3D%3D%200%20%3F%20'%E7%94%B7'%20%3A%20'%E5%A5%B3'%2C%0D%0A%20%20%20%20%20%20birthDate%3A%20date('1995-01-01')%0D%0A%20%20%20%20%20%20%20%20.calc(Math.round(Math.random()%20*%20180)%2C%20'days')%0D%0A%20%20%20%20%20%20%20%20.format('yyyy-MM-dd')%2C%0D%0A%20%20%20%20%20%20grade%3A%20Math.ceil(Math.random()%20*%206)%2C%0D%0A%20%20%20%20%20%20class%3A%20%60%E7%8F%AD%E7%BA%A7%24%7Bdata.value.length%20%2B%201%7D%60%2C%0D%0A%20%20%20%20%20%20enrollmentDate%3A%20date(%0D%0A%20%20%20%20%20%20%20%20Date.now()%20%2B%20Math.round(Math.random()%20*%20100)%20*%2086400000%0D%0A%20%20%20%20%20%20).format('yyyy-MM-dd')%2C%0D%0A%20%20%20%20%20%20address%3A%20%60%E5%9C%B0%E5%9D%80%24%7Bdata.value.length%20%2B%201%7D%60%0D%0A%20%20%20%20%7D%0D%0A%20%20%5D%0D%0A%7D%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:P,"use-data":h(F)},{default:t(()=>s[4]||(s[4]=[i("p",null,"render(components/data/table/slot.vue)",-1)])),_:1},8,["use-data"])]),_:1}),s[21]||(s[21]=i("h2",{id:"插槽穿透",tabindex:"-1"},[k("插槽穿透 "),i("a",{class:"header-anchor",href:"#插槽穿透","aria-label":'Permalink to "插槽穿透"'},"​")],-1)),s[22]||(s[22]=i("p",null,"插槽穿透对于基于 table 二次封装的上层组件很有用。",-1)),s[23]||(s[23]=i("h2",{id:"多选和单选",tabindex:"-1"},[k("多选和单选 "),i("a",{class:"header-anchor",href:"#多选和单选","aria-label":'Permalink to "多选和单选"'},"​")],-1)),s[24]||(s[24]=i("p",null,[k("记得指定 "),i("code",null,"row-key"),k(" 来标识唯一性。")],-1)),l(a,null,{default:t(()=>[l(n,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-table%0D%0A%20%20%20%20%3Adata%3D%22data%22%0D%0A%20%20%20%20%3Acolumns%3D%22columns%22%0D%0A%20%20%20%20%3Acheckable%3D%22checkable%22%0D%0A%20%20%20%20%3Aselectable%3D%22selectable%22%0D%0A%20%20%20%20v-model%3Achecked%3D%22checked%22%0D%0A%20%20%20%20row-key%3D%22studentId%22%0D%0A%20%20%20%20v-model%3Aselected%3D%22selected%22%0D%0A%20%20%3E%0D%0A%20%20%3C%2Fu-table%3E%0D%0A%20%20%3Cdiv%3E%0D%0A%20%20%20%20%3Cu-checkbox%0D%0A%20%20%20%20%20%20v-model%3D%22selectable%22%0D%0A%20%20%20%20%20%20%40update%3Amodel-value%3D%22%24event%20%26%26%20(checkable%20%3D%20false)%22%0D%0A%20%20%20%20%20%20%3E%E5%8D%95%E9%80%89%3C%2Fu-checkbox%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%3Cu-checkbox%0D%0A%20%20%20%20%20%20v-model%3D%22checkable%22%0D%0A%20%20%20%20%20%20%40update%3Amodel-value%3D%22%24event%20%26%26%20(selectable%20%3D%20false)%22%0D%0A%20%20%20%20%20%20%3E%E5%A4%9A%E9%80%89%3C%2Fu-checkbox%0D%0A%20%20%20%20%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%20%20%3Cdiv%3E%E5%8D%95%E9%80%89%E6%95%B0%E6%8D%AE%3A%20%7B%7B%20selected%20%7D%7D%3C%2Fdiv%3E%0D%0A%20%20%3Cdiv%3E%E5%A4%9A%E9%80%89%E6%95%B0%E6%8D%AE%3A%7B%7B%20checked%20%7D%7D%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20date%20%7D%20from%20'cat-kit%2Ffe'%0D%0Aimport%20%7B%20defineTableColumns%20%7D%20from%20'ultra-ui'%0D%0Aimport%20%7B%20ref%2C%20shallowRef%20%7D%20from%20'vue'%0D%0A%0D%0Aconst%20columns%20%3D%20defineTableColumns(%0D%0A%20%20%5B%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%AD%A6%E7%94%9FID'%2C%20key%3A%20'studentId'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%A7%93%E5%90%8D'%2C%20key%3A%20'name'%2C%20fixed%3A%20'left'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E6%80%A7%E5%88%AB'%2C%20key%3A%20'gender'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%87%BA%E7%94%9F%E6%97%A5%E6%9C%9F'%2C%20key%3A%20'birthDate'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%B9%B4%E7%BA%A7'%2C%20key%3A%20'grade'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E7%8F%AD%E7%BA%A7'%2C%20key%3A%20'class'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%85%A5%E5%AD%A6%E6%97%A5%E6%9C%9F'%2C%20key%3A%20'enrollmentDate'%2C%20fixed%3A%20'right'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%AE%B6%E5%BA%AD%E4%BD%8F%E5%9D%80'%2C%20key%3A%20'address'%20%7D%0D%0A%20%20%5D%2C%0D%0A%20%20%7B%20align%3A%20'center'%20%7D%0D%0A)%0D%0A%0D%0Aconst%20selectable%20%3D%20ref(true)%0D%0Aconst%20checkable%20%3D%20ref(false)%0D%0A%0D%0Aconst%20checked%20%3D%20shallowRef(%5B%5D)%0D%0Aconst%20selected%20%3D%20shallowRef()%0D%0A%0D%0Aconst%20data%20%3D%20Array.from(%7B%20length%3A%2010%20%7D).map((_%2C%20index)%20%3D%3E%20(%7B%0D%0A%20%20studentId%3A%20index%20%2B%201%2C%0D%0A%20%20name%3A%20%60%E5%AD%A6%E7%94%9F%24%7Bindex%20%2B%201%7D%60%2C%0D%0A%20%20gender%3A%20index%20%25%202%20%3D%3D%3D%200%20%3F%20'%E7%94%B7'%20%3A%20'%E5%A5%B3'%2C%0D%0A%20%20birthDate%3A%20date('1995-01-01')%0D%0A%20%20%20%20.calc(Math.round(Math.random()%20*%20180)%2C%20'days')%0D%0A%20%20%20%20.format('yyyy-MM-dd')%2C%0D%0A%20%20grade%3A%20Math.ceil(Math.random()%20*%206)%2C%0D%0A%20%20class%3A%20%60%E7%8F%AD%E7%BA%A7%24%7Bindex%20%2B%201%7D%60%2C%0D%0A%20%20enrollmentDate%3A%20date(%0D%0A%20%20%20%20Date.now()%20%2B%20Math.round(Math.random()%20*%20100)%20*%2086400000%0D%0A%20%20).format('yyyy-MM-dd')%2C%0D%0A%20%20address%3A%20%60%E5%9C%B0%E5%9D%80%24%7Bindex%20%2B%201%7D%60%0D%0A%7D))%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:R,"use-data":h(F)},{default:t(()=>s[5]||(s[5]=[i("p",null,"render(components/data/table/select-and-check.vue)",-1)])),_:1},8,["use-data"])]),_:1}),s[25]||(s[25]=i("h2",{id:"树形表格",tabindex:"-1"},[k("树形表格 "),i("a",{class:"header-anchor",href:"#树形表格","aria-label":'Permalink to "树形表格"'},"​")],-1)),s[26]||(s[26]=i("p",null,[k("你可以指定"),i("code",null,"default-expand-all"),k("属性来默认展开全部。")],-1)),s[27]||(s[27]=i("p",null,[i("code",null,"tree"),k("属性可以指定一个字符串，表示子级字段的 key 值。")],-1)),l(a,null,{default:t(()=>[l(n,{"source-code":"%3Ctemplate%3E%0D%0A%20%20%3Cu-table%20%3Adata%3D%22data%22%20%3Acolumns%3D%22columns%22%20tree%20style%3D%22max-height%3A%20400px%22%3E%0D%0A%20%20%3C%2Fu-table%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20defineTableColumns%20%7D%20from%20'ultra-ui'%0D%0A%0D%0Aconst%20columns%20%3D%20defineTableColumns(%0D%0A%20%20%5B%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%8D%95%E4%BD%8D%E7%BC%96%E7%A0%81'%2C%20key%3A%20'code'%2C%20fixed%3A%20'left'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%8D%95%E4%BD%8D%E5%90%8D%E7%A7%B0'%2C%20key%3A%20'name'%2C%20fixed%3A%20'left'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%8D%95%E4%BD%8D%E7%B1%BB%E5%9E%8B'%2C%20key%3A%20'type'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%8D%95%E4%BD%8D%E5%9C%B0%E5%9D%80'%2C%20key%3A%20'address'%20%7D%2C%0D%0A%20%20%20%20%7B%20name%3A%20'%E5%8D%95%E4%BD%8D%E7%94%B5%E8%AF%9D'%2C%20key%3A%20'phone'%20%7D%0D%0A%20%20%5D%2C%0D%0A%20%20%7B%20align%3A%20'center'%20%7D%0D%0A)%0D%0A%0D%0Aconst%20data%20%3D%20Array.from(%7B%20length%3A%2010%20%7D).map((_%2C%20index)%20%3D%3E%20(%7B%0D%0A%20%20code%3A%20%60%24%7Bindex%20%2B%201%7D%60.padStart(3%2C%20'0')%2C%0D%0A%20%20name%3A%20%60%E5%8D%95%E4%BD%8D%24%7Bindex%20%2B%201%7D%60%2C%0D%0A%20%20type%3A%20'%E5%8D%95%E4%BD%8D'%2C%0D%0A%20%20address%3A%20'%E5%8D%95%E4%BD%8D%E5%9C%B0%E5%9D%80'%2C%0D%0A%20%20phone%3A%20'%E5%8D%95%E4%BD%8D%E7%94%B5%E8%AF%9D'%2C%0D%0A%20%20children%3A%20Array.from(%7B%20length%3A%20Math.round(Math.random()%20*%203)%20%7D).map(%0D%0A%20%20%20%20(_%2C%20ci)%20%3D%3E%20(%7B%0D%0A%20%20%20%20%20%20code%3A%20%60%24%7Bindex%20%2B%201%7D%60.padStart(3%2C%20'0')%20%2B%20%60%24%7Bci%20%2B%201%7D%60.padStart(3%2C%20'0')%2C%0D%0A%20%20%20%20%20%20name%3A%20%60%E5%8D%95%E4%BD%8D%24%7Bindex%20%2B%201%7D-%24%7Bci%20%2B%201%7D%60%2C%0D%0A%20%20%20%20%20%20type%3A%20'%E9%83%A8%E9%97%A8'%2C%0D%0A%20%20%20%20%20%20address%3A%20'%E5%8D%95%E4%BD%8D%E5%9C%B0%E5%9D%80'%2C%0D%0A%20%20%20%20%20%20phone%3A%20'%E5%8D%95%E4%BD%8D%E7%94%B5%E8%AF%9D'%0D%0A%20%20%20%20%7D)%0D%0A%20%20)%0D%0A%7D))%0D%0A%3C%2Fscript%3E%0D%0A",title:"",component:I,"use-data":h(F)},{default:t(()=>s[6]||(s[6]=[i("p",null,"render(components/data/table/tree.vue)",-1)])),_:1},8,["use-data"])]),_:1}),s[28]||(s[28]=v("",6))])}}});export{O as __pageData,G as default};
