# Table 表格

表格组件是 UltraUI 中使用频率非常高的组件之一，它的强大恐怖如斯。

## 基础使用

下面是一个简单的学生信息表格，展示了表格组件的基本使用方法。

::: demo
render(data/table/basic.vue)
:::

## 显示序号

序号会自动固定到左侧。

::: demo
render(data/table/index.vue)
:::

## 固定表头 & 大数据渲染

有时候你的数据会有亿点点多，而且你不希望数据滚动后看不到表头，很简单，给表头加上一个固定高度。

这时候你就拥有了可以渲染大量数据的表格了。

还没结束，你可以发现代码中表格高度用的是最大高度，试着把表格数据降到 0.

::: demo
render(data/table/big-data.vue)
:::

## 多级表头

定义一个表头很简单，只需要将列定义为一个`森林结构`即可。

::: demo
render(data/table/multi-level-header.vue)
:::

## 插槽渲染

通过 `column:[key]` 来渲染单元格，通过 `header:[key]` 来渲染表头。

当然，你也可以在 `columns` 的定义中使用 `render` 方法来渲染单元格，使用 `nameRender` 来渲染表头，如果你习惯使用渲染函数的话。

::: demo
render(data/table/slot.vue)
:::

## 多选和单选

记得指定 `row-key` 来标识唯一性。

::: demo
render(data/table/select-and-check.vue)
:::

## 树形表格

你可以指定`default-expand-all`属性来默认展开全部。

`tree`属性可以指定一个字符串，表示子级字段的 key 值。

::: demo
render(data/table/tree.vue)
:::

## Table 属性

```ts
/** 表格组件属性 */
export interface TableProps<
  DataItem extends Record<string, any> = Record<string, any>
> {
  size?: ComponentSize
  /** 表格数据 */
  data?: DataItem[]
  /** 表格列 */
  columns?: TableColumn[]
  /** 多选时的已选项 */
  checked?: DataItem[]
  /**
   * 单选时的已选项
   * @description 该属性需要指定rowKey来表示唯一性
   */
  selected?: DataItem
  /**
   * 多选
   * @description 该属性需要指定rowKey来表示唯一性
   */
  checkable?: boolean
  /** 索引 */
  showIndex?: boolean
  /** 单选 */
  selectable?: boolean
  /**
   * 标记为一个树形组件
   * @default false
   * @description 如果传入了一个字符串则代表树的子节点的key值
   */
  tree?: boolean | string
  /**
   * 作用域插槽
   * @description
   * 使用此插槽可以自定义使用外部组件的插槽而无需一级一级的嵌套
   */
  slots?: Readonly<Slots>
  /** 单元格合并 */
  mergeCell?: (ctx: TableColumnRenderContext) =>
    | {
        rowspan: number
        colspan: number
      }
    | undefined
  /** 高亮当前选中行 */
  highlightCurrent?: boolean
  /** 当前选中行 */
  currentRow?: TableRow<DataItem>
  /**
   * 行key
   * @description 用于标识行的唯一性，对于单选和多选来说是必须的
   */
  rowKey?: string

  /**  默认展开全部 */
  defaultExpandAll?: boolean
  /** 文本溢出省略 */
  textEllipsis?: boolean
}
```

## TableColumn 属性

```ts
interface TableColumn {
  /** 列的唯一键 */
  key: string
  /** 列的名称 */
  name: string
  /** 表头渲染，优先级大于name属性 */
  nameRender?: (ctx: {
    column: TableColumnNode
  }) =>
    | VNode
    | string
    | null
    | undefined
    | (VNode | string | null | undefined)[]
  /** 列最大宽度 */
  width?: number
  /** 列最小宽度 */
  minWidth?: number
  /**
   * 列固定方式，为嵌套表头时此值无效
   * @default 'left'
   */
  fixed?: 'left' | 'right'
  /**
   * 列对齐方式
   * @default 'left'
   */
  align?: TableColumnAlign
  /** 列渲染 */
  render?: (scope: TableColumnRenderContext) => RenderReturn
  /** 子列 */
  children?: TableColumn[]
  /** 表尾合计 */
  summary?: boolean | ((ctx: TableSummaryContext) => RenderReturn)
  [key: string]: any
}
```

## TableRow 属性

```ts
interface TableRow<DataItem extends Record<string, any> = Record<string, any>>
  extends TreeNode<DataItem> {
  /** 是否展开 */
  expanded: boolean
  /** 操作中 */
  operating: boolean
  /** 是否选中 */
  checked: boolean
  /** 是否为当前点击的行 */
  isCurrent: boolean
  /** id */
  uid: number | string
  indexes: number[]
  /** 子row */
  children?: TableRow<DataItem>[]
  /** 父row */
  parent: TableRow<DataItem> | null
}
```
