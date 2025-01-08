# DatePicker 日期选择器

这个日期选择器相当轻量，性能也非常好。它的渲染性能是`element-plus`的 2-5 倍，相当炸裂。

::: tip
在`DevTools`的`Performance`面板中，将 CPU 速度减慢 20 倍，点击`下个月`按钮测得。
:::

## 基础使用

推荐使用 `cat-kit/fe` 的 `date` 函数生成日期字符串。

通过 `type` 属性控制日期的类型。

::: demo
render(components/form/date-picker/basic.vue)
:::

## 属性

```ts
/** date-picker组件属性 */
interface DatePickerProps extends FormComponentProps {
  modelValue?: string
  /** 占位 */
  placeholder?: string
  /** 日期类型 */
  type?: 'date' | 'month' | 'year'
  /** 日期格式化 */
  format?: string
  /** 日期值格式化, 当没有指定时默认使用format属性，仅当值和显示的内容不一致时才需要使用到该属性 */
  valueFormat?: string
  /** 最小可选日期 */
  disabledDate?: (date: Dater) => boolean
}
```

## 事件

```ts
/** date-picker组件定义的事件 */
interface DatePickerEmits {
  (e: 'update:modelValue', value: string): void
}
```
