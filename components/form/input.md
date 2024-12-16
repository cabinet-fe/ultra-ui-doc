# Input 输入框

表单中最基础的输入控件之一。

## 基础使用

它的用法就算没有文档，我相信你也会使用。

::: demo
render(components/form/input/basic.vue)
:::

## 前缀和后缀

前缀和后缀都有两种方式去插入，简单的字符串直接使用属性，复杂的使用插槽。

::: demo
render(components/form/input/prefix-suffix.vue)
:::

## 模式

模式是用来限制输入框的输入内容的，通过 `pattern` 属性指定。

其实很多时候你可以使用表单校验来限制用户输入，但是校验防呆不防傻。

::: demo
render(components/form/input/pattern.vue)
:::

## 属性

```ts
/** 输入框组件属性 */
export interface InputProps extends FormComponentProps {
  /** modelValue */
  modelValue?: string
  /** 占位符 */
  placeholder?: string
  /** 前缀 */
  prefix?: string
  /** 后缀 */
  suffix?: string
  /** 是否可清除 */
  clearable?: boolean
  /** 原生只读 */
  nativeReadonly?: boolean
  /**
   * 模式
   * @description 如果指定请保证有一个符合模式的默认值
   */
  pattern?: RegExp
}
```

## 事件

```ts
export interface InputEmits {
  /** 输入时持续更新 */
  (e: 'update:modelValue', value: string): void
  /** 在输入框失焦时触发更新 */
  (e: 'change', value: string): void
  /** 后缀点击事件 */
  (e: 'suffix:click', value?: string): void
  /** 前缀点击事件 */
  (e: 'prefix:click', value?: string): void
  /** 聚焦事件 */
  (e: 'focus', value?: string): void
  /** 清除事件 */
  (e: 'clear'): void
  /** 失焦事件 */
  (e: 'blur', value?: string): void
  /** 原生输入事件 */
  (e: 'native:input', ev: Event): void
}
```
