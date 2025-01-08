# Table 表格

表格组件是 UltraUI 中使用频率非常高的组件之一，它的强大恐怖如斯。

## 基础使用

下面是一个简单的学生信息表格，展示了表格组件的基本使用方法。

::: demo
render(components/data/table/basic.vue)
:::

## 显示序号

序号会自动固定到左侧。

::: demo
render(components/data/table/index.vue)
:::

## 固定表头 & 大数据渲染

有时候你的数据会有亿点点多，而且你不希望数据滚动后看不到表头，很简单，给表头加上一个固定高度或最大高度。

这时候你就拥有了可以渲染大量数据的表格了。

下面是 1w 条数据的渲染。

::: demo
render(components/data/table/big-data.vue)
:::

::: tip 提示
理论上来讲渲染 10 万条数据也是 ok 的，但是这样会导致非常大的常驻内存损耗，建议数据在 1w 条以内。
:::

## 多级表头

定义一个表头很简单，只需要将列定义为一个`森林结构`即可。

::: demo
render(components/data/table/multi-level-header.vue)
:::

## 插槽渲染

通过 `column:[key]` 来渲染单元格，通过 `header:[key]` 来渲染表头。

当然，你也可以在 `columns` 的定义中使用 `render` 方法来渲染单元格，使用 `nameRender` 来渲染表头，如果你习惯使用渲染函数的话。

::: demo
render(components/data/table/slot.vue)
:::

## 插槽穿透

插槽穿透对于基于 table 二次封装的上层组件很有用。

## 多选和单选

记得指定 `row-key` 来标识唯一性。

::: demo
render(components/data/table/select-and-check.vue)
:::

## 树形表格

你可以指定`default-expand-all`属性来默认展开全部。

`tree`属性可以指定一个字符串，表示子级字段的 key 值。

::: demo
render(components/data/table/tree.vue)
:::

## 属性

```ts
/**
 * 表格列节点
 * TreeNode 类型是在cat-kit中定义。
 */
interface TableColumnNode extends TreeNode<TableColumn> {
  /** 子列 */
  children?: TableColumnNode[] | undefined
  /** 父列 */
  parent: TableColumnNode | null
  /** 叶子节点数量 */
  leafs?: number
  key: string
  name: string
  align: TableColumnAlign
  width: number | undefined
  minWidth: number | undefined
  fixed: 'left' | 'right' | undefined
  isLastFixed: boolean
  isFirstFixed: boolean
  style: Record<string, number>
}

/**
 * 合计上下文
 */
interface TableSummaryContext {
  /** 总数 */
  total: number
  /** 所有行数据 */
  rows: TableRow[]
  /** 当前列 */
  column: TableColumnNode
}

/** 表格行 */
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

/** 表格列 */
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
   * 表头对齐方式, 如果没有指定，则默认使用align属性
   * @default TableColumn['align']
   */
  headerAlign?: TableColumnAlign
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

/** 表格组件属性 */
interface TableProps<
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

## 事件

```ts
/** 表格组件定义的事件 */
interface TableEmits<
  DataItem extends Record<string, any> = Record<string, any>
> {
  /** 多选 */
  (e: 'update:checked', value: DataItem[]): void
  /** 单选 */
  (e: 'update:selected', value: DataItem | undefined): void
  /** 数据更新 */
  (e: 'update:data', value: DataItem[]): void
  /** 行数据更新 */
  (e: 'update:rows', rows: TableRow<DataItem>[]): void
  /** 树形数据森林结构更新 */
  (e: 'update:forest', rows?: Forest<TableRow<DataItem>>): void
  /** 行点击事件 */
  (e: 'row-click', row: TableRow<DataItem>): void
  /** 当前行变更 */
  (e: 'update:currentRow', row?: TableRow<DataItem>): void
}
```

## 暴露的属性和方法

```ts
/** 表格组件暴露的属性和方法(组件内部使用) */
interface _TableExposed {
  el?: HTMLElement
  /** 清除选中的项 */
  clearChecked: () => void
  /** 清除单选的选项 */
  clearSelected: () => void
  /** 通过数据获取表格行 */
  getRowByData: (data: Record<string, any>) => TableRow | undefined
  /** 获取合计行 */
  getSummaryRow: () => Record<string, any>
}
```
