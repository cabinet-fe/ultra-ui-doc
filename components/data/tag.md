# Tag 标签

挺好看的，挺好看的。

## 基础使用

这个样式应该是最好看的，比较推荐这样使用。

::: demo
render(components/data/tag/basic.vue)
:::

## 暗色模式

这个配合黑暗模式可能看起来更加协调一点。

::: demo
render(components/data/tag/dark.vue)
:::

## 圆角标签

...

::: demo
render(components/data/tag/round.vue)
:::

## 属性

```ts
/** 标签组件属性 */
interface TagProps {
  type?: ColorType
  /** 是否可移除 */
  closable?: boolean
  /** 尺寸大小 */
  size?: ComponentSize
  /** 是否为圆角 */
  round?: boolean
  /** 深色 */
  dark?: boolean
}
```

## 事件

```ts
interface TagEmits {
  (e: 'close'): void
}
```
