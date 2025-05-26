# Tip 弹出提示

用于在页面中展示简洁的提示信息,帮助用户更好地理解操作或内容

## 基础用法

跟所有的 UI 库一样,支持 9 种不同方向的展示
::: demo
render(components/feedback/tip/basic.vue)
:::

## 虚拟触发

虚拟触发的好处是可以节省渲染资源,
比如在列表中, 想象一下，如果每个列表项都使用 tip, 那么就会造成很大的渲染压力, 这时候就可以使用虚拟触发来节省渲染资源。

::: demo
render(components/feedback/tip/virtual.vue)
:::

## 属性

```ts
type TipDirection = 'top' | 'bottom' | 'left' | 'right'

type TipAlign = 'start' | 'center' | 'end'

/** tip提示组件组件属性 */
interface TipProps {
  /**提示内容 */
  content?: string
  /** 是否显示 */
  visible: boolean
  /** 自定义tip样式 */
  style?: CSSProperties | string
  /** 自定义tip的class */
  class?: string | string[] | Record<string, boolean>
  /**触发tip方式 */
  trigger?: 'hover' | 'click'
  /**
   * 方向
   * @default 'auto'
   */
  direction?: TipDirection

  /** 隐藏箭头 */
  hideArrow?: boolean

  /**
   * 对齐方式
   * @default 'center'
   */
  alignment?: TipAlign

  /**
   * tip内容标签
   */
  contentTag?: string
}
```

## 事件

```ts
/** tip提示组件组件定义的事件 */
interface TipEmits {
  /** 显示状态变化 */
  (e: 'update:visible', value: boolean): void
}
```
