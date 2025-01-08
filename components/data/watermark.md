# Watermark 水印

水印组件，可以给页面打上属于你的印记。

## 基础使用

进入这个页面时，你就已经会看到水印。

::: demo
render(components/data/watermark/basic.vue)
:::

## 属性

```ts
/** watermark组件属性 */
interface WatermarkProps {
  /** 文字 */
  text?: string
  /** 图片 */
  image?: string
  /** 是否传送到body下 */
  appendToBody?: boolean
  /** 旋转弧度 */
  route?: number
  /** 字体大小 */
  fontSize?: number
}
```
