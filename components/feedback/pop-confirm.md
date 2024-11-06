# PopConfirm 弹出确认框

用于在重要操作或敏感操作之前，提示用户确认其行为，以避免误操作或提供额外的提示信息。

## 基础用法

基于 [Tip 弹出提示](/components/feedback/tip) 的提示框

::: demo
render(feedback/pop-confirm/basic.vue)
:::

## 自定义文字、图标

::: demo
render(feedback/pop-confirm/custom.vue)
:::

## 属性

| 属性名      | 类型      | 必填 | 描述             |
| ----------- | --------- | ---- | ---------------- |
| title       | string    | 否   | 弹出框的标题文字 |
| icon        | Component | 否   | 显示的图标组件   |
| confirmText | string    | 否   | 确认按钮的文字   |
| cancelText  | string    | 否   | 取消按钮的文字   |

## 事件

| 事件名  | 参数 | 描述                   |
| ------- | ---- | ---------------------- |
| confirm | 无   | 用户点击确认按钮时触发 |
| cancel  | 无   | 用户点击取消按钮时触发 |
