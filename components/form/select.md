# Select 下拉选择器(单选)

用于在预设的选项列表中选择单一项，通常用于[表单](/components/form/form.html#完全演示)

## 基本用法

Select 组件提供了简单直观的选择界面。你可以通过 v-model 指令实现数据的双向绑定，通过 options 属性提供可选项列表。组件会根据选中值自动更新显示文本，同时支持默认值的设置。

:::demo
render(components/form/select/basic.vue)
:::

## 开启过滤

在处理大量选项数据时，过滤功能能够帮助用户快速找到目标选项。启用 filterable 属性后，用户可以通过输入关键字对选项进行实时过滤，匹配规则默认采用选项标签的模糊匹配。如果选项数据是通过函数获取的，过滤会自动触发重新请求。

:::demo
render(components/form/select/filter.vue)
:::

## 回显自动定位

为了优化大量选项时的用户体验，Select 组件实现了智能的滚动定位功能。当用户选中某个选项时，如果该选项不在可视区域内，组件会自动将其滚动到视图中心位置，确保用户可以立即看到选中的内容。这个功能在处理长列表时特别有用。

:::demo
render(components/form/select/view.vue)
:::

## 属性

| 属性名      | 类型                                                            | 必填 | 描述                                                                 |
| ----------- | --------------------------------------------------------------- | ---- | -------------------------------------------------------------------- |
| modelValue  | any                                                             | 否   | 绑定值，存储用户当前选择的选项                                       |
| text        | string                                                          | 否   | 显示的文本内容                                                       |
| options     | `Option[]` \| `(qs: string) => Promise<Option[]>` \| `Option[]` | 否   | 列表选项，支持数组或函数形式。若传入函数，自动启用 `filterable` 功能 |
| valueKey    | string                                                          | 否   | 选项中的值字段名称，用于获取选项的值,默认`value`                     |
| labelKey    | string                                                          | 否   | 选项中的标签字段名称，用于显示选项的标签,默认`label`                 |
| clearable   | boolean                                                         | 否   | 是否可清除，允许用户通过清空按钮清除当前选择                         |
| placeholder | string                                                          | 否   | 占位符，在没有选中项时显示的提示文本                                 |
| filterable  | boolean                                                         | 否   | 是否启用搜索功能，启用后可以根据输入内容过滤选项,默认`false`         |

## 事件

| 事件名            | 参数类型 | 描述                                           |
| ----------------- | -------- | ---------------------------------------------- |
| update:label      | string   | 更新选项标签时触发该事件，传递更新后的标签     |
| update:modelValue | any      | 更新绑定值时触发该事件，传递更新后的值         |
| change            | Option   | 选中项发生变化时触发该事件，传递当前选中的选项 |
