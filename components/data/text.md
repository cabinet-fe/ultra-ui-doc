# Text 文本

语义化组件，可以给文字添加高亮。

## 基础使用

它的语义化意义大于高亮。

::: demo
render(components/data/text/basic.vue)
:::

## 属性

```ts
/** 文本组件属性 */
interface TextProps {
  /** 使用预设文本类型, 默认content正文 */
  as?: 'main-title' | 'title' | 'sub-title' | 'content' | 'additional'
  /** 文本大小, 与as同时指定时会覆盖as */
  fontSize?: string | number
  /** 是否删除 */
  deleted?: boolean
  /** 下划线 */
  underline?: boolean
  /** 粗体, 与as同时指定时会覆盖as中的字体粗细 */
  bold?: boolean
  /** 斜体 */
  italic?: boolean
  /** 高亮 */
  highlight?: string | string[]
}
```

## 事件

```ts
/** 文本组件定义的事件 */
interface TextEmits {
  (e: 'update:modelValue', value: string): void
}
```
