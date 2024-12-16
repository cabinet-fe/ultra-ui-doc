# Textarea 文本域

可输入多行文本的区域，用户可以自由输入、删除、编辑文本内容

## 基本用法

::: demo
render(components/form/textarea/basic.vue)
:::

## 自适应高度

::: demo
render(components/form/textarea/auto-size.vue)
:::

## 长度限制

::: demo
render(components/form/textarea/maxlength.vue)
:::

## 属性

| 属性名         | 类型    | 必填 | 描述                                  |
| -------------- | ------- | ---- | ------------------------------------- |
| modelValue     | string  | 是   | 文本域的值                            |
| height         | string  | 否   | 文本域的高度                          |
| placeholder    | string  | 否   | 文本域的占位符                        |
| disabled       | boolean | 否   | 文本域是否禁用                        |
| readonly       | boolean | 否   | 文本域是否只读                        |
| resize         | boolean | 否   | 是否允许用户调整文本域大小,默认`true` |
| rows           | number  | 否   | 文本域的行数                          |
| cols           | number  | 否   | 文本域的列数                          |
| maxlength      | number  | 否   | 文本域的最大字数                      |
| showCount      | boolean | 否   | 是否显示字符数                        |
| clearable      | boolean | 否   | 是否提供清空按钮,默认`true`           |
| nativeReadonly | boolean | 否   | 原生只读属性                          |
| autoSize       | boolean | 否   | 是否自适应大小 ,默认`false`           |

## 事件

| 事件名            | 参数类型 | 描述                                                                              |
| ----------------- | -------- | --------------------------------------------------------------------------------- |
| update:modelValue | string   | 当 `modelValue` 值改变时触发，传递更新后的值                                      |
| change            | string   | 当 `modelValue` 改变，并且文本框失去焦点或用户按下 Enter 键时触发，传递当前文本值 |
| focus             | 无       | 文本框获取焦点时触发                                                              |
| blur              | 无       | 文本框失去焦点时触发                                                              |
| clear             | 无       | 当用户点击清空按钮时触发                                                          |
