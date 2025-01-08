# Dialog 对话框

对话框时最常用的交互反馈组件之一，

## 基础用法

::: demo
render(components/feedback/dialog/basic.vue)
:::

## 属性

```ts
/** 对话框组件属性 */
interface DialogProps {
  /** 显示或隐藏 */
  modelValue?: boolean
  /** 弹框标题，header的别名 */
  title?: string
  /** 弹框头部内容，别名是header */
  header?: string
  /** 大小尺寸 */
  size?: ComponentSize
  /** 显示模态层 */
  modal?: boolean
  /** 全屏 */
  fullscreen?: boolean
}
```

## 事件

```ts
/** 对话框组件定义的事件 */
interface DialogEmits {
  /** 更新对话框的显示 */
  (e: 'update:modelValue', visible: boolean): void
  /** 对话框完全关闭后触发的事件 */
  (e: 'closed'): void
}
```

## 暴露的属性和方法

```ts
/** 对话框组件暴露的属性和方法 */
interface DialogExposed {
  /** 关闭对话框 */
  close: () => void
}
```
