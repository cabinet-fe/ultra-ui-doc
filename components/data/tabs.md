# Tabs 标签页

简单好用的标签页，不传入内容时，你甚至可以把它当成单选框组来用。

## 基础用法

通过配置来演示一下。

::: demo
render(components/data/tabs/basic.vue)
:::

## 属性

```ts
export type TabItem = {
  /**
   * 标题名称
   * @description 如果不穿则以key为名称
   */
  name?: string
  /**
   * 标签页唯一标识
   */
  key: string
  /** 是否禁用 */
  disabled?: boolean
}

/** 标签页组件组件属性 */
export interface TabsProps extends ComponentProps {
  modelValue?: string
  /** 标签项 */
  items: TabItem[]
  /** 显示位置 */
  position?: 'left' | 'right' | 'top' | 'bottom'
  /** 是否可以动态编辑 */
  editable?: boolean
  /**
   * 是否保活
   * @default false
   */
  keepAlive?: boolean
}
```

## 事件

```ts
/** 标签页组件组件定义的事件 */
interface TabsEmits {
  (e: 'update:modelValue', value: string | number): void
  (e: 'update:items', items: TabItem[]): void
  (e: 'update:active', active: string | number): void
  (e: 'delete', item: TabItem, index: number): void
  (e: 'create'): void
  (e: 'click', item: TabItem, index: number): void
}
```
