# Dropdown 下拉框

用于显示一组可选项或操作项，便于用户选择和执行操作

## 基础用法

::: demo
render(feedback/dropdown/basic.vue)
:::

## 进阶用法

::: demo
render(feedback/dropdown/virtual.vue)
:::

## 自适应宽度

::: demo
render(feedback/dropdown/width.vue)
:::

## 属性

| 属性名       | 类型                         | 必填 | 描述                               |
| ------------ | ---------------------------- | ---- | ---------------------------------- |
| trigger      | `hover`\| `click`\| `custom` | 否   | 触发方式，默认为`hover`            |
| width        | string                       | 否   | 下拉框宽度，默认为跟随触发元素宽度 |
| minWidth     | string                       | 否   | 下拉框的最小宽度                   |
| contentTag   | string                       | 否   | 内容容器的标签                     |
| contentClass | `string` \| `string[]`       | 否   | 内容容器的类名                     |
| visible      | boolean                      | 否   | 是否显示下拉框                     |
| disabled     | boolean                      | 否   | 是否禁用下拉框                     |

## 事件

| 事件名         | 参数类型 | 描述                 |
| -------------- | -------- | -------------------- |
| update:visible | boolean  | 下拉框显示或隐藏事件 |

## 方法

| 方法名         | 参数类型                                                  | 描 述                                                                                          |
| -------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| open           | `trigger?: { virtual?: HTMLElement, real?: HTMLElement }` | 打开下拉框，接受一个可选的触发元素对象,[进阶用法](/components/feedback/dropdown.html#进阶用法) |
| close          | -                                                         | 关闭下拉框                                                                                     |
| updateDropdown | -                                                         | 触发位置变化                                                                                   |
