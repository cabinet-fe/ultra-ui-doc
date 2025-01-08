# Action 操作按钮

Action 提供了一种便捷地操作交互体验。例如超出多少按钮隐藏，点击按钮需要确认等。

在数据表格和卡片中这个组件应该很常用。

## 基础使用

最大显示按钮数量默认是 3。你可以自行选择。

:::demo
render(components/basic/action/basic.vue)
:::

## 属性

```ts
/** 操作组件属性 */
interface ActionProps extends ButtonProps {
  /** 是否需要确认 */
  needConfirm?: boolean

  /** 是否为下拉菜单中的操作项 */
  inDropdown?: boolean
}

/** 操作组组件属性 */
interface ActionGroupProps {
  /** 最大可显示数量 */
  max?: number
}
```

## 事件

```ts
/** 操作组件定义的事件 */
interface ActionEmits {
  /**
   * 当操作不需要确认时，点击action按钮触发
   * 当操作需要确认时，点击弹框中的确认按钮触发
   */
  (e: 'run'): void
}
```
