# Tip 弹出提示

用于在页面中展示简洁的提示信息,帮助用户更好地理解操作或内容

## 基础用法

跟所有的 UI 库一样,支持 9 种不同方向的展示
::: demo
render(components/feedback/tip/basic.vue)
:::

## 虚拟触发

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
  /** 当提示框的内容更新时触发此事件 */
  (e: 'update:modelValue', value: string): void
}
```

## 暴露的属性和方法

```ts
interface TipExpose {
  /** 关闭提示框 */
  close(): void
}
```
