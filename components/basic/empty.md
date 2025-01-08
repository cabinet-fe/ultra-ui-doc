# Empty 空状态

没数据的时候美化一下，显得不那么单调。但应该很少用到，因为业务都已经集成了，但谁说得准呢。

## 基础用法

通过`text`属性设置文字，`size`属性设置大小。

::: demo
render(components/basic/empty/basic.vue)
:::

## 属性

```ts
/** 空内容组件属性 */
interface EmptyProps {
  /** 图标大小, 默认48 */
  size?: number

  /** 空文本 */
  text?: string
}
```
