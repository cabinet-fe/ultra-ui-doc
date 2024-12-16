# Form 表单

表单组件时 UltraUI 中最核心的组件之一，它和你见过的其他 UI 库不同，它还可以根据容器宽度自动布局，支持跨表单校验，高性能，一键只读模式。

这些功能不需要你写额外的代码，相反，你只需要写更少的代码就能使用这些功能。

接下来我们将用一系列的例子来向你展示它的强大之处。

## 基础展示

表单由`FormModel`类和`form`组件组成，`FormModel`类用于定义表单数据和校验规则，`form`组件用于渲染表单。

这个例子展示了一个基础的登录表单,包含用户名和密码两个字段。你会发现我们并没有使用`u-form-item`来包裹表单输入组件，这是因为 form 在渲染前劫持了这些组件的 VNode 节点，当程序识别到这是一个表单组件时(通过`field`属性)，会自动将这些组件包裹在`u-form-item`组件中。

::: details 提示
其实你也是可以手动使用 u-form-item 来包裹表单输入组件的，比如你在实现一个组合输入控件的时候。但绝大多数情况下，你可以通过实现`v-model`并在输入控件上添加`field`属性来绑定表单模型数据。
:::

:::demo
render(components/form/basic.vue)
:::

## 性能

这个例子展示了表单组件的性能优势。示例分为表单输入和数据绑定输入两种方式,通过检测控件输入事件来开始检测更新用时。

打开调试面板，在`性能`一栏将 cpu 性能调到最低，然后提高渲染数量，并分别测试表单输入和数据绑定输入的渲染用时，你会发现性能的巨大差距。这得益于表单组件内部优化的更新机制。

:::demo
render(components/form/performance.vue)
:::

## 校验

这个例子展示了表单的校验功能。要校验表单非常简单，你只需要调用 FormModel 实例的`validate`方法即可。同时，你也可以调用`resetData`方法来重置表单数据到初始状态。

示例包含了必填校验、自定义校验规则等常见的校验场景。

:::demo
render(components/form/validate.vue)
:::

## 嵌套数据

这个例子展示了如何处理嵌套的表单数据结构。表单组件支持任意深度的数据嵌套,你只需要使用点号来访问嵌套字段即可。

:::demo
render(components/form/nest.vue)
:::

## 表单只读和禁用

这个例子展示了表单的只读和禁用状态。你可以通过设置`readonly`和`disabled`属性来控制整个表单的状态,也可以单独控制某个表单项的状态。

:::demo
render(components/form/readonly-and-disabled.vue)
:::

## 单模型跨表单

这个例子展示了如何在多个表单之间共享同一个数据模型。你可以将同一个 FormModel 实例传递给多个表单组件,实现数据的统一管理和校验。

:::demo
render(components/form/multi.vue)
:::

## 完全演示

这个例子完整地展示了表单组件的各种特性,包括:

- 各种类型的表单控件
- 表单校验
- 只读/禁用状态
- 嵌套数据
- 动态表单项
- 自适应布局

:::demo
render(components/form/full.vue)
:::

## Form 属性

| 属性名     | 类型             | 必填 | 描述              |
| ---------- | ---------------- | ---- | ----------------- |
| model      | Model            | 是   | 表单数据模型      |
| labelWidth | string \| number | 否   | 表单项 label 宽度 |
| noTips     | boolean          | 否   | 是否不显示 tips   |
| readonly   | boolean          | 否   | 是否只读          |
| disabled   | boolean          | 否   | 是否禁用          |
| size       | ComponentSize    | 否   | 组件尺寸          |

## FormItem 属性

| 属性名     | 类型                                                                                           | 必填 | 描述                             |
| ---------- | ---------------------------------------------------------------------------------------------- | ---- | -------------------------------- |
| labelWidth | string \| number                                                                               | 否   | 标签宽度                         |
| tips       | string                                                                                         | 否   | 在表单控件内时的提示             |
| span       | number \| 'full' \| Record<BreakpointName, 'full' \| number> & \{ default: number \| 'full' \} | 否   | 所占列的大小, 详情查看 Grid 组件 |
| label      | string                                                                                         | 否   | 表单标签文字                     |
| field      | string                                                                                         | 否   | 表单项字段                       |
| disabled   | boolean                                                                                        | 否   | 是否禁用                         |
| readonly   | boolean                                                                                        | 否   | 是否只读                         |
| size       | ComponentSize                                                                                  | 否   | 组件尺寸                         |
