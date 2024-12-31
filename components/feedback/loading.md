# Loading 加载

通过指令的方式，提供多种加载样式，用于在数据加载或操作进行时向用户展示反馈。

## 基本用法

在需要使用的页面中引入 vLoading 指令

:::demo
render(components/feedback/loading/basic.vue)
:::

## 不同类型的动画效果

默认 spinner，选择不同的类型查看效果

:::demo
render(components/feedback/loading/type.vue)
:::

## 属性

| 属性名 | 类型                                      | 必填 | 描述                    |
| ------ | ----------------------------------------- | ---- | ----------------------- |
| type   | `classic` \| `line` \| `dot` \| `spinner` | 否   | 动画效果,默认 `spinner` |
