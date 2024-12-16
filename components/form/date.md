# DatePicker 日期选择器

这个日期选择器相当轻量，性能也非常好。它的渲染性能是`element-plus`的 2-5 倍，相当炸裂。

::: tip
在`DevTools`的`Performance`面板中，将 CPU 速度减慢 20 倍，点击`下个月`按钮测得。
:::

## 基础使用

推荐使用 `cat-kit/fe` 的 `date` 函数生成日期字符串。

通过 `type` 属性控制日期的类型。

::: demo
render(components/form/date-picker/basic.vue)
:::
