# Dropdown 下拉框

用于显示一组可选项或操作项，便于用户选择和执行操作

## 基础用法

基础的下拉框用法，支持 hover 和 click 两种触发方式，可以包含任意内容。

::: demo
render(components/feedback/dropdown/basic.vue)
:::

## 进阶用法

展示如何通过编程方式控制下拉框的显示位置，支持虚拟触发元素，适用于更复杂的交互场景。

::: demo
render(components/feedback/dropdown/virtual.vue)
:::

## 自适应宽度

下拉框可以根据内容自动调整宽度，也可以通过 width 和 minWidth 属性来控制宽度范围。

::: demo
render(components/feedback/dropdown/width.vue)
:::

## 属性

```ts
/** 下拉框组件属性 */
interface DropdownProps {
  /**
   * 触发方式
   * @default 'hover'
   */
  trigger?: 'hover' | 'click' | 'custom'
  /**
   * 宽度
   * @default - 跟随触发宽度
   */
  width?: string
  /**
   * 最小宽度
   */
  minWidth?: string
  /**
   * 内容容器标签
   */
  contentTag?: string
  /** 内容容器类 */
  contentClass?: unknown
  /** 内容容器样式 */
  contentStyle?: CSSProperties | string
  /** 显示下拉框 */
  visible?: boolean
  /** 禁用 */
  disabled?: boolean
  /**
   * 点击外部是否隐藏
   */
  clickWhetherHide?: boolean
}
```

## 事件

```ts
/** 下拉框组件定义的事件 */
interface DropdownEmits {
  /** 下拉框显示或隐藏事件 */
  (e: 'update:visible', visible: boolean): void
}
```

## 方法

```ts
/** 下拉框组件暴露的属性和方法 */
interface DropdownExposed {
  /**
   * 打开
   * @param trigger 触发元素
   */
  open(trigger?: {
    /** 虚拟触发元素 */
    virtual?: HTMLElement
    /**
     * 真实触发元素
     * @description 如果不指定则和虚拟触发元素一致
     */
    real?: HTMLElement
  }): void
  /** 关闭 */
  close(): void
  /** 更新下拉框位置 */
  updateDropdown(): void
}
```
