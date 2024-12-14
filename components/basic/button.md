# Button 按钮

按钮用于触发一个即时操作，如提交表单、确认操作、取消操作等。

## 类型

按钮有多种类型，用不同的颜色来区分不同的操作含义：

- 主要按钮：用于强调页面上最主要的操作
- 次要按钮：用于一般性的操作
- 成功按钮：表示成功、确认类操作
- 警告按钮：需要谨慎操作的场景
- 危险按钮：表示危险、删除类操作

::: demo
render(basic/button/type.vue)
:::

## 尺寸

按钮提供了三种尺寸：大、中(默认)、小。
根据使用场景选择合适的按钮尺寸。

::: demo
render(basic/button/size.vue)
:::

## 圆形按钮

圆形按钮常用于图标按钮的展示，适合放置在一些特定区域。

::: demo
render(basic/button/circle.vue)
:::

## 禁用状态

当操作不可用时，可以使用禁用状态的按钮来阻止用户进行操作。

::: demo
render(basic/button/disabled.vue)
:::

## 加载状态

用于操作需要一段时间才能完成的场景，可以使用加载状态来给予用户反馈。

::: demo
render(basic/button/loading.vue)
:::

## 朴素按钮

朴素按钮的样式更加简约，适用于次要操作或需要弱化展示的场景。

::: demo
render(basic/button/plain.vue)
:::

## 文本按钮

文本按钮没有边框和背景色，常用于表格内的编辑、删除等操作，或者一些不需要强调的操作。

::: demo
render(basic/button/text.vue)
:::

## 按钮组

按钮组可以将一组相关的按钮放在一起，用于展示一组相关的操作选项。

::: demo
render(basic/button/group.vue)
:::
