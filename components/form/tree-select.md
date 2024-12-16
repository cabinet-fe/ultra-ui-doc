# TreeSelect 树形选择器(单选)

用于在树形结构中选择一个节点,结合了 [Tree](/components/data/tree.html) 和 [Dropdown](/components/feedback/dropdown.html) 两个组件的功能

## 基本用法

:::demo
render(components/form/tree-select/basic.vue)
:::

## 禁止某节点

:::demo
render(components/form/tree-select/disabled-node.vue)
:::

## 自定义节点内容

:::demo
render(components/form/tree-select/custom.vue)
:::

## 属性

| 属性名      | 类型                 | 必填 | 描述                       |
| ----------- | -------------------- | ---- | -------------------------- |
| modelValue  | `string` \| `number` | 否   | 绑定的节点值               |
| placeholder | string               | 否   | 自定义占位文字             |
| clearable   | boolean              | 否   | 是否支持清除已选项         |
| filterable  | boolean              | 否   | 是否启用搜索功能           |
| minWidth    | string               | 否   | 组件最小宽度，默认 `280px` |
| text        | string               | 否   | 显示的文本内容             |

## 事件

| 事件名      | 参数                                                                | 描述               |
| ----------- | ------------------------------------------------------------------- | ------------------ |
| clear       | 无                                                                  | 清除已选项时触发   |
| change      | `value?: string`\|`number` , `selectedData?`: `Record<string, any>` | 选项发生改变时触发 |
| update:text | `text?: string`                                                     | 更新显示文本时触发 |
