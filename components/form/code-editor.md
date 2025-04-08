# CodeEditor 代码编辑器

表单中用于编辑代码的高级输入控件。

## 介绍

代码编辑器支持多种编程语言，可以与表单组件结合使用。

## 基础使用

代码编辑器支持多种编程语言，可以与表单组件结合使用。

::: demo
render(components/form/code-editor/basic.vue)
:::

## 语言支持

代码编辑器支持多种编程语言，通过 `language` 属性指定。

## 禁用与只读

通过 `disabled` 和 `readonly` 属性可以控制编辑器的状态。

## 属性

```ts
/** 代码编辑器组件属性 */
interface CodeEditorProps extends FormComponentProps {
  /** modelValue */
  modelValue?: string
  /** 编程语言 */
  language?: string
}
```

## 事件

```ts
export interface CodeEditorEmits {
  /** 输入时持续更新 */
  (e: 'update:modelValue', value: string): void
}
```
