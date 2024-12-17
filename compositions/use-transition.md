# useTransition 过渡

Vue 3 的过渡系统已经相当好用和简洁了，但是有时候我们还需要在 `v-if` 和 `v-show` 之外使用过渡。

因而，我们提供了 `useTransition` 组合式方法，用于在任何时候使用过渡。

## css 过渡

useTransition 的第一个参数是过渡方式，有 `css` 和 `style` 两种。

使用 `css` 过渡时，需要使用 `name` 属性指定过渡的名称，`target` 属性指定过渡的目标元素。这时跟你在 Vue 3 中使用 `transition` 组件时体验是一样的, 只不过 useTransition 方法需要你调用 返回的 `toggle` 或者 `enter` 和 `leave` 方法去触发进入和离开状态。

其中 `name` 和 `target` 是必选参数，`keepEnterTo` 是可选参数，用于指定是否保留过渡后的状态。`name` 和 `target` 可以是一个 Vue 响应式对象(即用 ref 或 shallowRef 包裹的值)。

::: demo
render(compositions/use-transition/basic.vue)
:::
