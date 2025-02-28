# Cascade 级联选择器

级联选择器，用于多级数据的选择。

## 基础用法

级联选择器大部分情况都用作单选，其中单选时数据结构始终是一个以`分隔符`连接的字符串，例如`a/b/c`。

级联时，可以指定严格模式，这样只有当选择到最后一级时，才会触发值更新事件。

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
