# Tree 树形控件

用来展示层级结构的数据。和表格一样，它也无压力支持大数据渲染。并且只需要指定高度就可以了。

## 基础使用

最简单的演示。

::: demo
render(components/data/tree/basic.vue)
:::

## 自定义节点

通过默认插槽，可以自定义节点内容。

插槽携带两个参数：

- `node` 树节点对象
- `data` 当前节点数据

```ts
abstract class _TreeNode<
  Data extends Record<string, any> = Record<string, any>
> {
  /** 节点数据 */
  data: Data
  /** 父节点 */
  abstract parent: any
  /** 子节点 */
  abstract children?: any[]
  /** 当前节点的索引 */
  index: number
  /** 树深 */
  get depth(): number
  /** 节点数量 */
  get size(): number
  /** 是否是叶子节点 */
  get isLeaf(): boolean
  constructor(data: Data, index: number)
  /**
   * 从给定的起始索引开始，减小数组中元素的索引属性。
   * @param arr - 需要重新排序的元素数组。
   * @param startIndex - 开始重新排序的索引。
   */
  private static resort
  /**
   * 深度优先遍历
   * @param cb 递归回调
   * @param childrenKey 子节点key
   * @returns
   */
  dft(
    cb: (item: this) => boolean | void,
    childrenKey?: string
  ): false | undefined
  /**
   * 广度优先遍历
   * @param cb 递归回调
   * @param childrenKey 子节点key
   * @returns
   */
  bft(cb: (item: this) => boolean | void, childrenKey?: string): void
  /**
   * 从父节点中移除当前节点
   * @returns 移除成功返回true，否则返回false
   */
  remove(): boolean
  /**
   * 从当前节点中移除子节点
   * @param childNode 要移除的子节点
   */
  removeChild<Node extends TreeNode<any>>(childNode: Node): void
  /**
   * 在当前节点的子节点最后添加一个子节点。
   * @param data 节点数据
   */
  append(data: Data): void
  /**
   * 插入节点到当前节点的子节点列表中。
   * 如果节点的索引大于当前节点子节点的长度，抛出错误。
   * 如果当前节点没有子节点，则将节点作为唯一子节点。
   * 如果当前节点有子节点，则将节点插入到指定索引的位置，并重新排序子节点列表。
   *
   * @param data 要插入的节点的数据
   * @param index 插入索引
   */
  insert(data: Data, index: number): void
  /**
   * 在当前节点的下一个位置添加一个新节点。
   * @param data 节点数据
   */
  addToNext(data: Data): void
  /**
   * 在当前节点的上一个位置添加一个新节点。
   * @param data 节点数据
   */
  addToPrev(data: Data): void
}

export interface TreeNode<DataItem extends Record<string, any>>
  extends _TreeNode<DataItem> {
  parent: TreeNode<DataItem> | null
  children?: TreeNode<DataItem>[]
  /** 值key */
  valueKey: string
  /** 标签key */
  labelKey: string
  /** 是否���见 */
  visible: boolean
  /** 是否展开 */
  expanded: boolean
  /** 是否加载中 */
  loading: boolean
  /** 是否加载完成 */
  loaded: boolean
  /** 是否选中 */
  checked: boolean
  /** 是否半选中 */
  indeterminate: boolean
  /** 是否禁用 */
  disabled: boolean
  /** 标签 */
  label: string
  /** 父节点是否展开 */
  parentExpanded: boolean
  /** 唯一key */
  key: string | number
}
```

::: demo
render(components/data/tree/custom.vue)
:::
