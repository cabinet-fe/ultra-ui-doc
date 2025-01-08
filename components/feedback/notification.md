# Notification 通知

## 基础用法
::: demo
render(components/feedback/notification/basic.vue)
:::

## 配置项
| 属性名   | 描述                   | 默认值 | 可选值       | 必填 | 类型                |
|----------|------------------------|--------|--------------|------|---------------------|
| title    | 通知标题               | -      | -            | 否   | `string` |
| message  | 通知内容               | -      | -            | 是   | `string`           |
| title    | 通知类型          | primary、info、success、warning、danger | 否   | `ColorType`   |
| closable | 是否可以关闭           | false      |             | 否   | `boolean`          |
| duration | 持续时间, 单位ms, 为0则不会关闭 | 3000   | -            | 否   | `number`           |
| buttonText | 通知按钮文字         | - | -      | 否 |      `string` |
| onClose  | 关闭时的回调函数           | -      | -            | 否   | `Function`   |
| onClick  | 点击时的回调函数      | -      | -            | 否   | `Function`   |
