# Tip 弹出提示

用于在页面中展示简洁的提示信息,帮助用户更好地理解操作或内容

## 基础用法

跟所有的 UI 库一样,支持 9 种不同方向的展示
::: demo
render(components/feedback/tip/basic.vue)
:::

## 虚拟触发

::: demo
render(components/feedback/tip/virtual.vue)
:::

## 属性

| 属性名     | 类型                                                | 必填 | 描述                                                           |
| ---------- | --------------------------------------------------- | ---- | -------------------------------------------------------------- |
| content    | string                                              | 是   | 显示在提示框中的内容文本                                       |
| style      | `CSSProperties` \| `string`                         | 否   | 自定义 Tip 提示框的样式，可以是样式对象或字符串                |
| class      | `string` \| `string[]` \| `Record<string, boolean>` | 否   | 自定义 Tip 提示框的 class 名称                                 |
| trigger    | `hover` \| `click`                                  | 否   | 触发提示框的方式，可选择悬停 hover 或点击 click，默认为`hover` |
| direction  | `top` \| `bottom` \| `left` \| `right`              | 否   | 提示框的弹出方向，默认值为 `auto`                              |
| hideArrow  | boolean                                             | 否   | 是否隐藏提示框的小箭头，默认不隐藏                             |
| alignment  | `start` \| `center` \| `end`                        | 否   | 提示框内容的对齐方式，默认为 `center`                          |
| contentTag | string                                              | 否   | 用于渲染提示内容的标签类型，默认为 `div`                       |

## 事件

| 事件名            | 参数类型 | 描述                           |
| ----------------- | -------- | ------------------------------ |
| update:modelValue | string   | 当提示框的内容更新时触发此事件 |

## 方法

| 方法名 | 描述       |
| ------ | ---------- |
| close  | 关闭提示框 |
