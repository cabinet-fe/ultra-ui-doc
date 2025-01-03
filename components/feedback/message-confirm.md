# MessageConfirm 消息确认框
比message更明确的消息提示，需要经过确认才能关闭
## 基础用法
::: demo
render(components/feedback/message-confirm/basic.vue)
:::

## 配置项
| 属性名   | 描述                   | 默认值 | 可选值       | 必填 | 类型                |
|----------|------------------------|--------|--------------|------|---------------------|
| title   | 消息标题               | -      | -            | 否   | `string`           |
| message  | 消息内容               | -      | -            | 是   | `string`           |
| confirmButtonType | 消息类型  | - | primary、info、success、warning、danger| 否 |`ColorType`   |
| confirmButtonText | 确认按钮文字   | -     | -         | 否   | `string`          |
| cancelButtonText | 取消按钮文字，不传则没有取消按钮 | - | -  | 否   | `string`           |
| onClose  | 关闭时的回调函数，回参action: cancel/confirm | -      | -  | 否   | `Function`   |