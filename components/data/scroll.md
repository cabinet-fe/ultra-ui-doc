# Scroll 滚动容器

说实话，我也不知道现代这些浏览器怎么搞的，发展了几十年了，滚动条样式居然还这么丑，害的我不仅要优化滚动条样式，还要想方设法地优化滚动条性能。

## 基础用法

跟在普通的容器里面一样，给容器设置高度即可。

::: demo
render(components/data/scroll/basic.vue)
:::

## 控制滚动

通过滚动条暴露的 api 可以控制滚动。

其实更好地做法是通过`el.scrollIntoView`来控制，但是没办法写都写好了，演示一下。
::: demo
render(components/data/scroll/control.vue)
:::

## 属性

```ts
/** 滚动条组件属性 */
interface ScrollProps {
  /**
   * 容器元素标签名
   * @default div
   */
  tag?: string
  /**
   * 容器高度
   * @default 100%
   */
  height?: string | number

  /**
   * 总是显示滚动条
   * @default false
   */
  always?: boolean

  /**
   * 内容样式
   */
  contentStyle?: string | CSSProperties

  /**
   * 容器样式
   */
  containerStyle?: string | CSSProperties

  /** 内容类名 */
  contentClass?: unknown

  /** 容器类名 */
  containerClass?: string | string[]

  /** 拖拽防抖时间 */
  dragDebounce?: number
}
```

## 事件

```ts
type ScrollPosition = {
  /** 横向位置 */
  x?: number
  /** 纵向位置 */
  y?: number
  /** 横向滚动宽度 */
  sw?: number
  /** 纵向滚动高度 */
  sh?: number
  /** 横向可视宽度 */
  cw?: number
  /** 纵向可视高度 */
  ch?: number
}

interface ScrollEmits {
  /** 滚动事件 */
  (e: 'scroll', position: Required<ScrollPosition>): void
  /** 尺寸调整事件 */
  (e: 'resize', targets: HTMLElement[]): void
}
```

## 暴露的属性和方法

```ts
interface ScrollExposed {
  /**
   * 滚动至
   * @param position 位置
   */
  scrollTo(position: ScrollPosition): void

  /**
   * 更新滚动条状态
   */
  update(): void

  /** 滚动内容元素引用 */
  contentRef?: HTMLElement

  /** 滚动容器元素引用 */
  containerRef?: HTMLElement

  /** 滚动容器元素引用 */
  el?: HTMLElement
}
```
