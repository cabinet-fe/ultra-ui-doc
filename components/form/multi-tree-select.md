# MultiTreeSelect 树形选择器(多选)

用于在树形结构中选择多个节点,结合了 [Tree](/components/data/tree.html) 和 [Dropdown](/components/feedback/dropdown.html) 两个组件的功能

## 基本用法

:::demo
render(form/multi-tree-select/basic.vue)
:::

## 禁止某节点

:::demo
render(form/multi-tree-select/disabled-node.vue)
:::

## 自定义节点内容

:::demo
render(form/multi-tree-select/custom.vue)
:::

## 属性

| 属性名          | 类型                     | 必填 | 描述                           |
| --------------- | ------------------------ | ---- | ------------------------------ |
| modelValue      | `string[]` \| `number[]` | 否   | 绑定的节点值数组，支持多个值   |
| placeholder     | string                   | 否   | 自定义占位文字                 |
| clearable       | boolean                  | 否   | 是否支持清除已选项             |
| filterable      | boolean                  | 否   | 是否启用搜索功能               |
| visibilityLimit | number                   | 否   | 可见节点数量限制，默认值为 `3` |
| minWidth        | string                   | 否   | 组件最小宽度，默认为 `280px`   |

## 事件

| 事件名 | 参数                            | 描述             |
| ------ | ------------------------------- | ---------------- |
| clear  | 无                              | 清除已选项时触发 |
| change | checked: Record<string, any>[]` | 已选项变化时触发 |
