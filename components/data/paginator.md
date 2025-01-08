# Paginator 分页器

通过分页器，来对数据进行分页处理(基本上是把数据丢到后端)。

## 基础用法

我们的分页器默认的一页数据量很大，这是因为你通常不用为你的表格渲染而担心，当然你也可以指定数据量选择列表。

::: demo
render(components/data/paginator/basic.vue)
:::

## 自定义分页数量

通过设置 `page-size-options` 属性，可以自定义每页显示的数据量选项。

::: demo
render(components/data/paginator/custom.vue)
:::

## 简易模式

当数据量较少时，可以使用简易模式的分页器，只显示上一页、下一页和页码输入框。

::: demo
render(components/data/paginator/simple.vue)
:::

## 属性

```ts
/** 分页器组件组件属性 */
interface PaginatorProps {
  /** 当前处于第几页 */
  pageNumber?: number
  /** 每页显示的数量 */
  pageSize?: number
  /** 大小模式 */
  size?: 'large' | 'default' | 'small'
  /** 数据总数 */
  total?: number
  /** 每页显示数量选项 */
  pageSizeOptions?: Array<number>
  /** 简洁模式 */
  simple?: boolean
}
```

## 事件

```ts
/** 分页器组件组件定义的事件 */
interface PaginatorEmits {
  (e: 'update:pageNumber', value: number): void
  (e: 'update:pageSize', value: number): void
}
```

## 暴露的属性和方法

```ts
/** 分页器组件组件暴露的属性和方法 */
export interface PaginatorExposed {
  el?: HTMLElement
}
```
