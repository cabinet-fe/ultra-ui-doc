# NumberInput 数字输入框

顾名思义，专门用来输入数字的控件。

## 基础使用

它的很多属性继承自 `input` 组件，所以你可以参考 [属性段落](#属性) 和 [input 文档](./input.md) 来使用。

::: demo
render(form/number-input/basic.vue)
:::

## 货币模式

通过 `currency` 属性开启货币模式，开启后会自动将数字进行千分位分隔。

::: demo
render(form/number-input/currency.vue)
:::

## 最大值和最小值

通过 `max` 和 `min` 属性来指定最大值和最小值。

::: demo
render(form/number-input/max-min.vue)
:::

## 步进

通过 `step` 属性来指定步长，可以指定为数字，也可以指定为布尔值，为布尔值时步长默认为 1。

::: demo
render(form/number-input/step.vue)
:::

## 精度

精度涉及到三个属性：`precision`、`minPrecision`、`maxPrecision`。

- `precision` 表示固定精度，无论数字小数位数多少，都只显示 `precision` 位小数。
- `minPrecision` 表示最小精度，即小数点后至少显示 `minPrecision` 位小数。
- `maxPrecision` 表示最大精度，即小数点后最多显示 `maxPrecision` 位小数。

::: demo
render(form/number-input/precision.vue)
:::

## 属性

```ts
/** 数字输入组件属性 */
export interface NumberInputProps extends Omit<InputProps, 'modelValue'> {
  modelValue?: number
  /** 是否为货币模式 */
  currency?: boolean
  /** 精度 */
  precision?: number
  /** 最小精度 */
  minPrecision?: number
  /** 最大精度 */
  maxPrecision?: number
  /** 步进, 指定为数字时开启累加按钮并将该值作为累加的步长, 为true则步长默认为1 */
  step?: boolean | number
  /** 最大值 */
  max?: number
  /** 最小值 */
  min?: number
}
```
