# Checkbox 复选框

勾上还是不勾上，这是个问题。

## 基础使用

单独出现时，表示是否。

成组出现时，表示多选。

::: demo
render(components/form/checkbox/basic.vue)
:::

## 属性

```ts
/** 复选框组件属性 */
interface CheckboxProps extends FormComponentProps {
  /** 部分选中 */
  indeterminate?: boolean
  /** 是否选中  */
  modelValue?: boolean
}
```

## 事件

```ts
interface CheckboxEmits {
  (name: 'update:modelValue', checked: boolean): void
  (name: 'change', checked: boolean, e: MouseEvent): void
}
```
