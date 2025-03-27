# DateRangePicker 日期范围选择器

## 基础使用

和`date-picker`组件基本相同的用法，只不过输出的数据是一个长度为 2 的元组类型

:::demo 基础使用
render(components/form/date-range-picker/basic.vue)
:::

## 属性

```ts
/** date-range-picker组件属性 */
export interface DateRangePickerProps extends FormComponentProps {
  modelValue?: [string, string]
  /** 占位 */
  placeholder?: [string, string]
  /** 日期类型 */
  type?: 'date' | 'month' | 'year'
  /** 日期格式化 */
  format?: string
  /** 日期值格式化, 当没有指定时默认使用format属性，仅当值和显示的内容不一致时才需要使用到该属性 */
  valueFormat?: string
  /** 最小可选日期 */
  disabledDate?: (date: Dater) => boolean
  /** 是否显示清除按钮 */
  clearable?: boolean
}
```

## 事件

```ts
/** date-range-picker组件事件 */
export interface DateRangePickerEmits extends FormComponentEmits {
  (e: 'update:modelValue', value?: [string, string]): void
}
```
