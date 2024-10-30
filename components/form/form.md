# Form 表单

表单组件时 UltraUI 中最核心的组件之一，它和你见过的其他 UI 库不同，它还可以根据容器宽度自动布局，支持跨表单校验，高性能，一键只读模式。

这些功能不需要你写额外的代码，相反，你只需要写更少的代码就能使用这些功能。

接下来我们将用一系列的例子来向你展示它的强大之处。

## 基础展示

:::demo
render(form/form/basic.vue)
:::

## 校验

:::demo
render(form/form/validate.vue)
:::

## 嵌套数据

:::demo
render(form/form/nest.vue)
:::

## 表单只读和禁用

:::demo
render(form/form/readonly-and-disabled.vue)
:::

## 完全演示

下面这个演示较为完全地展示了表单组件，ultra-ui 的表单的核心是一个叫作 `FormModel` 的类，
`FormModel` 意为表单模型，这也是它可以实现跨表单数据校验的关键。

一个 form 组件接收这些表单模型，并根据表单中的输入组件上定义的 field 属性，将表单数据和模型绑定。这样的一个好处是让表单的定义和表单校验规则的定义在一起而减少心智负担。并且相比于其他的 UI 库，`ultra-ui` 的表单输入组件无需在外层包裹一个 `u-form-item` 组件，然而这不是绝对的，有时候你想通过`u-form-item`组件来进行布局，从而让他在整个表单里面显得整齐。
