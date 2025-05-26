# TableEditor 表格编辑器

基于 Table 组件的可编辑表格，支持单元格编辑、行编辑等功能，适用于需要在表格中直接编辑数据的场景。

## 基础使用

表格编辑器提供了便捷的数据编辑功能，可以直接在表格中编辑数据。

::: demo
render(components/data/table-editor/basic.vue)
:::

## 属性

TableEditor 继承了 Table 组件的所有属性，并在此基础上扩展了编辑相关的功能。

```ts
/** 表格编辑器组件属性 */
interface TableEditorProps extends Omit<TableProps, 'data'> {
  /** 表格数据 */
  modelValue?: any[]
}
```

## 事件

```ts
/** 表格编辑器组件定义的事件 */
interface TableEditorEmits<
  DataItem extends Record<string, any> = Record<string, any>
> extends TableEmits<DataItem> {
  /** 数据变更事件 */
  (e: 'update:modelValue', value: DataItem[]): void
}
```

## 插槽

TableEditor 支持与 Table 组件相同的插槽系统：

- `column:[key]` - 自定义单元格内容
- `header:[key]` - 自定义表头内容
