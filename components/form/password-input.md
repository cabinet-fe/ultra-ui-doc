# PasswordInput 密码输入框

如果不是浏览器默认输入框那弄不掉的恶心人的样式，就不会出现这个组件了。

## 基础用法

它的很多属性继承自 `input` 组件，所以你可以参考 [属性段落](#属性) 和 [input 文档](./input.md) 来使用。

::: demo
render(components/form/password-input/basic.vue)
:::

## 属性

```ts
/** 密码输入组件属性 */
export interface PasswordInputProps extends InputProps {
  modelValue?: string
}
```

## 事件

```ts
/** 密码输入组件定义的事件 */
export interface PasswordInputEmits {
  (e: 'update:modelValue', value: string): void
}
```
