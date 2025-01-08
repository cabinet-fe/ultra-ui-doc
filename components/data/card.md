# Card 卡片

显示一组内容，通常包含标题、描述、操作等。

卡片由 4 个子组件组成，分别是`u-card-header`、`u-card-content`、`u-card-action`、`u-card-cover`。这样做的目的是为了方便用户自由组合，并减少 dom 的渲染数量。

## 基础卡片

当卡片像这样配点图片，展示内容时，它才会显得好看，如果全是文字，就会显得很丑陋。

::: demo
render(components/data/card/basic.vue)
:::

## 融入模式

有时候，卡片的阴影和边框会和周围的样式格格不入，这时候你可以尝试融入模式，其实就是去掉边框和阴影。

::: demo
render(components/data/card/integrate.vue)
:::

## 属性

```ts
/** 卡片组件属性 */
interface CardProps extends ComponentProps {
  /** 宽度 */
  width?: string | number

  /** 融合样式，卡片不再有阴影 */
  integrate?: boolean
}

export interface CardActionProps {
  /** 右对齐 */
  alignRight?: boolean
}

export interface CardContentProps {
  /** 封面模式 */
  cover?: boolean
}

export interface CardCoverProps {
  /** 封面图片地址 */
  src: string
  /** 封面高度 */
  height?: string | number
}
```
