# Scroll 滚动容器

说实话，我也不知道现代这些浏览器怎么搞的，发展了几十年了，滚动条样式居然还这么丑，害的我不仅要优化滚动条样式，还要想方设法地优化滚动条性能。

## 基础用法

跟在普通的容器里面一样，给容器设置高度即可。

::: demo
render(components/data/scroll/basic.vue)
:::

## 控制滚动

通过滚动条暴露的 api 可以控制滚动。

其实更好地做法是通过`el.scrollIntoView`来控制，但是没办法写都写好了，演示一下。
::: demo
render(components/data/scroll/control.vue)
:::
