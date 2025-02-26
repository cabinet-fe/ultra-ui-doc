# 级联选择器

级联选择器，用于多级数据的选择。

## 基础用法

::: demo
render(components/form/cascade/basic.vue)
:::

## 属性

```ts
/** 级联选择器组件属性 */
export interface CascadeProps extends FormComponentProps {
  /**
   * 分隔符
   * @default '/'
   */
  separator?: string
  /** 数据值 */
  modelValue?: string[] | string
  /** 级联数据项的标签字段 */
  labelKey?: string
  /** 级联数据项的值字段 */
  valueKey?: string
  /** 占位符 */
  placeholder?: string
  /** 是否可清除 */
  clearable?: boolean
  /** 子级字段 */
  childrenKey?: string
  /** 严格模式 */
  strict?: boolean
  /**
   * 数据项
   */
  data?: Record<string, any>[]

  /**
   * 禁用项
   */
  disabledNode?: (item: Record<string, any>) => boolean
  /**
   * 多选
   */
  multiple?: boolean
  /**
   * 搜索
   */
  filterable?: boolean
  visibilityLimit?: number
}
```

## 事件

```ts
/** 级联选择器组件定义的事件 */
export interface CascadeEmits {
  (e: 'update:modelValue', value?: string | string[]): void
  (
    e: 'change',
    value: string[],
    label: string[],
    data: Record<string, any>[]
  ): void
  (
    e: 'change',
    value?: string,
    label?: string,
    item?: Record<string, any>
  ): void
  (e: 'clear'): void
}
```
