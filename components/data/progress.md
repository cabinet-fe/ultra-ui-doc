# Progress 进度条

显示进度。

## 完全演示

这里的用法基本上满足很多情况了。

::: demo
render(components/data/progress/basic.vue)
:::

## 属性

```ts
/** progress组件属性 */
interface ProgressProps {
  /** 类型 */
  type: ColorType | ((percentage: number) => ColorType)
  /** 圆形进度条尺寸 */
  size?: number | string
  /** 进度百分比 */
  percentage?: number
  /** 是否圆形进度条 */
  circle?: boolean
}
```
