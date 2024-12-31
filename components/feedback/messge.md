# Message 消息提示
用于主动操作后的反馈提示

## 基础用法
::: demo
render(components/feedback/message/basic.vue)
:::

## 配置项
| 属性名   | 描述                   | 默认值 | 可选值       | 必填 | 类型                |
|----------|------------------------|--------|--------------|------|---------------------|
| message  | 消息内容               | -      | -            | 是   | `string`           |
| type     | 消息类型               | default | success、warn、info、error、default | 否   | `MessageType`   |
| closable | 是否可以关闭           | false      |             | 否   | `boolean`          |
| duration | 持续时间, 单位ms       | 3000   | -            | 否   | `number`           |
| html     | 渲染html               | false      | -            | 否   | `boolean`          |
| icon     | 图标                   | -      | -            | 否   | `DefineComponent`   |
| onClose  | 关闭时的回调函数           | -      | -            | 否   | `Function`   |
| onClosed | 关闭后的回调函数      | -      | -            | 否   | `Function`   |
