# RadioGroup 单选框组

一组单选框的容器，允许用户在多个选项中选择一个

::: details 提示
在这里，你将了解两种 Radio 组件的使用方法

- [u-radio](/components/form/radio.html#基本用法) 适用于单个选择项的简单选择场景。
- [u-radio-group](/components/form/radio.html#单选框组) 提供分组功能，方便用户在多个选项中快速选择。

通过示例探索它们的应用效果吧！
:::

## 基本用法

:::demo
render(components/form/radio/basic.vue)
:::

## 单选框组

:::demo
render(components/form/radio/group.vue)
:::

## Block 布局

:::demo
render(components/form/radio/block.vue)
:::

## 禁用某一项

单选框禁用某项时，可使用 `disabled` 属性
:::demo
render(components/form/radio/disabled.vue)
:::
单选框组中禁用特定选项，请使用 `disabled-item` 属性。
:::demo
render(components/form/radio/disabled-item.vue)
:::

## Radio 属性

| 属性名     | 类型                              | 必填 | 描述               |
| ---------- | --------------------------------- | ---- | ------------------ |
| value      | `number` \| `string` \| `boolean` | 否   | 单选框的值         |
| modelValue | `number` \| `string` \| `boolean` | 否   | 绑定的值           |
| label      | string                            | 否   | 单选框显示的文本   |
| disabled   | boolean                           | 否   | 是否禁用整个单选框 |

## Radio 事件

| 事件名            | 参数类型                          | 描述                     |
| ----------------- | --------------------------------- | ------------------------ |
| update:modelValue | `number` \| `string` \| `boolean` | 单选框的值更新时触发事件 |

## RadioGroup 属性

| 属性名       | 类型                                   | 必填 | 描述                                                   |
| ------------ | -------------------------------------- | ---- | ------------------------------------------------------ |
| modelValue   | `string` \| `number` \| `boolean`      | 否   | 绑定值，表示当前选中的单选框值                         |
| items        | Record<string, any>[]                  | 是   | 单选框项，数组形式，包含多个选项的数据                 |
| valueKey     | string                                 | 否   | 选项值的字段名称，默认为 `'value'`                     |
| labelKey     | string                                 | 否   | 标签文本的字段名称，默认为 `'label'`                   |
| disabled     | boolean                                | 否   | 是否禁用单选框组，设置为 `true` 时，所有选项将禁用     |
| disabledItem | (item: Record<string, any>) => boolean | 否   | 禁用特定选项的函数，返回 `true` 时禁用该选项           |
| block        | boolean                                | 否   | 是否采用块级布局，设置为 `true` 时，单选框项将按列显示 |

## RadioGroup 事件

| 事件名            | 参数                                           | 描述                                   |
| ----------------- | ---------------------------------------------- | -------------------------------------- |
| update:modelValue | `modelValue: Val` 选中的值                     | 值更新事件，触发时传递最新的选中值     |
| change            | `item: Record<string, any>` 当前选中的选项数据 | 选项更新事件，触发时传递当前选中的选项 |
