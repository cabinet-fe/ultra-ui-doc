# MultiSelect 下拉选择器(多选)

用于在预设的选项列表中选择多项，通常用于[表单](/components/form/form.html#完全演示)

## 基本用法

展示了多选下拉选择器的基础功能，包括选项的多选、清空等操作。

:::demo
render(form/multi-select/basic.vue)
:::

## 最大可选数量

通过设置 `max` 属性来限制最多可选择的选项数量，达到限制后其他选项将被禁用。

:::demo
render(form/multi-select/max.vue)
:::

## 最大展示数量

使用 `visibility-limit` 属性控制选中项的最大显示数量，超出限制时将以 "+N" 的形式显示剩余数量。

:::demo
render(form/multi-select/visibilityLimit.vue)
:::

## 属性

| 属性名          | 类型                                                            | 必填 | 描述                                                                     |
| --------------- | --------------------------------------------------------------- | ---- | ------------------------------------------------------------------------ |
| modelValue      | `Array<any>`                                                    | 否   | 绑定值，存储用户当前选中的选项列表                                       |
| options         | `Option[]` \| `(qs: string) => Promise<Option[]>` \| `Option[]` | 否   | 列表选项，支持数组或函数形式。若传入函数，自动启用 `filterable` 功能     |
| valueKey        | string                                                          | 否   | 选项中的值字段名称，用于获取选项的值                                     |
| labelKey        | string                                                          | 否   | 选项中的标签字段名称，用于显示选项的标签                                 |
| clearable       | boolean                                                         | 否   | 是否可清除，允许用户通过清空按钮清除当前选择                             |
| placeholder     | string                                                          | 否   | 占位符，在没有选中项时显示的提示文本                                     |
| filterable      | boolean                                                         | 否   | 是否启用搜索功能，启用后可以根据输入内容过滤选项                         |
| visibilityLimit | number                                                          | 否   | 最大展示数量，当选中数量超过此值时，显示为简略形式，隐藏多余选项,默认`3` |
| max             | number                                                          | 否   | 最大可选数量，达到此数量后禁止继续选择其他选项                           |

## 事件

| 事件名            | 参数类型     | 描述                                           |
| ----------------- | ------------ | ---------------------------------------------- |
| update:modelValue | `Array<any>` | 当选中项发生变化时触发，传递当前选中的选项列表 |
| change            | Option[]     | 当选中项更改时触发，传递更新后的选项数组       |
