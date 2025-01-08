# Number 数字

通过 number 组件，让你的数字看起来高大上一点。

## 基础使用

默认情况下，数字会自动进行千分位处理。

::: demo
render(components/data/number/basic.vue)
:::

## 动画

可以为数字开启一段动画。

duration 属性可以设置动画的持续时间，默认值为 1000ms。

::: demo
render(components/data/number/anime.vue)
:::

## 属性

```ts
/** 数字组件属性 */
interface NumberProps {
  /** 数字数值 */
  value: number
  /**
   * 格式化。
   * currency: 货币； percent：百分比; decimal 默认十进制
   */
  format?: 'currency' | 'percent' | 'decimal'
  /** 对齐方式 */
  align?: 'left' | 'center' | 'right'
  /**
   * 开启补间动画
   * @default false
   */
  tween?: boolean
  /** 动画持续时间 */
  duration?: number
  /** 精度 */
  precision?: number
  /** 最大精度 */
  maxPrecision?: number
  /** 最小精度 */
  minPrecision?: number
}
```
