# Slider 滑块

滑块组件核心是 hooks 里面的 useSlide 实现的，支持应用于表单，支持点击

## 基础用法

普通的滑块

:::demo
render(components/form/slider/basic.vue)
:::

## 步长

:::demo
render(components/form/slider/step.vue)
:::

## 范围 + 步长 + 显示断点

:::demo
render(components/form/slider/range.vue)
:::

## 垂直 + 范围 + 步长 + 显示断点

:::demo
render(components/form/slider/vertical.vue)
:::

## slider 属性

| 属性名     | 类型    | 必填 | 描述                   |
| ---------- | ------- | ---- | ---------------------- |
| min        | number  | 否   | 滑块的最小值(默认 0)   |
| max        | number  | 否   | 滑块的最大值(默认 100) |
| show-stops | boolean | 否   | 是否显示断点           |
| step       | number  | 否   | 步长(传入步长数)       |
| range      | boolean | 否   | 是否开启范围模式       |
| readonly   | boolean | 否   | 是否只读               |
| disabled   | boolean | 否   | 是否禁用               |
