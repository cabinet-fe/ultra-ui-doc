# Grid 栅格布局

Grid 组件有两种使用方式：

1. 基础用法：如果传给 `grid` 组件的 `cols` 属性是 `number` 类型，则表示固定列数。
2. 响应式布局： 如果传给 `grid` 组件的 `cols` 属性是 `object` 类型，表示响应式布局。
3. 二者兼得：你也可以给 `grid` 组件的 `cols` 属性传入函数，详情请查看 [响应式布局](#响应式布局)。

::: tip
`grid` 组件的 `cols` 属性为 `object` 类型时，受到 `BreakCols` 类型的约束。

```ts
/** 断点列 */
export interface BreakCols {
  /** 超小尺寸 */
  xs?: number
  /** 小尺寸 */
  sm?: number
  /** 中等尺寸 */
  md?: number
  /** 大尺寸 */
  lg?: number
  /** 中大尺寸 */
  xl?: number
  /** 默认尺寸 */
  default?: number
}
```

:::

## 基础用法

默认情况下 `grid` 是一个 24 格栅格布局，当然你可以通过 `cols` 属性来重置它。

::: demo
render(layout/grid/basic.vue)
:::

## 响应式布局

通过 `cols` 属性来设置不同断点下的列数。

::: demo
render(layout/grid/responsive.vue)
:::
