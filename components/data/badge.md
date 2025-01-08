# Badge 徽章

之前我一直叫它角标，后来很多人叫它徽章，我也不知道为什么，也许听起来很吊 。

## 基础用法

就像你手机上的 app 一样，提示你有多少条消息。

可以换个其他的颜色。

::: demo
render(components/data/badge/basic.vue)
:::

## 点状徽章

点状徽章。

::: demo
render(components/data/badge/dot.vue)
:::

## 属性

```ts
/** 徽章组件属性 */
interface BadgeProps extends ComponentProps {
  /** 显示值 */
  value?: number
  /** 类别 */
  type?: ColorType
  /** 自定义背景色 */
  color?: string
  /** 是否隐藏 Badge */
  hidden?: boolean
  /** 最大值 {{max}}+ */
  max?: number
  /** 是否显示小圆点 */
  dot?: boolean
}
```
