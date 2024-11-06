# Select 下拉选择器(单选)

用于在预设的选项列表中选择单一项，通常用于[表单](/components/form/form.html#完全演示)

## 基本用法

:::demo
render(form/select/basic.vue)
:::

## 开启过滤

:::demo
render(form/select/filter.vue)
:::

## 回显自动定位

:::demo
render(form/select/view.vue)
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
