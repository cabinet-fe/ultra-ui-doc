# PopConfirm 弹出确认框

用于在重要操作或敏感操作之前，提示用户确认其行为，以避免误操作或提供额外的提示信息。

## 基础用法

基于 [Tip 弹出提示](/components/feedback/tip) 的提示框

::: demo
render(components/feedback/pop-confirm/basic.vue)
:::

## 自定义文字、图标

::: demo
render(components/feedback/pop-confirm/custom.vue)
:::

## 属性

```ts
/** 气泡确认框组件属性 */
interface PopConfirmProps
  extends Pick<TipProps, 'alignment' | 'direction' | 'trigger' | 'contentTag'> {
  /**文字 */
  title?: string
  /**icon 图标*/
  icon?: Component
  /**icon 颜色 */
  iconColor?: string
  /**
   * 确认按钮文字
   */
  confirmText?: string
  /**
   * 取消按钮文字
   */
  cancelText?: string
}
```

## 事件

```ts
/** 气泡确认框组件定义的事件 */
interface PopConfirmEmits {
  /** 确认事件 */
  (event: 'confirm'): void
  /** 取消事件 */
  (event: 'cancel'): void
}
```
