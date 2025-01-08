# 类型

一些通用类型可以在此处找到。

## 组件通用类型

```ts
export type ComponentSize = 'small' | 'default' | 'large'

export type ColorType = 'primary' | 'info' | 'success' | 'warning' | 'danger'

/** 断点名称 */
export type BreakpointName = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/** 组件通用属性 */
export interface ComponentProps {
  /** 组件尺寸 */
  size?: ComponentSize
}

/** 表单组件通用属性 */
export interface FormComponentProps extends ComponentProps {
  /** 在表单控件内时的提示 */
  tips?: string
  /** 所占列的大小 */
  span?:
    | number
    | 'full'
    | ({
        [key in BreakpointName]?: 'full' | number
      } & { default: number | 'full' })
  /** 表单标签文字 */
  label?: string
  /** 表单项字段 */
  field?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readonly?: boolean
}

/** 带有服务端交互功能的组件属性 */
export interface PropsWithServerQuery {
  /** 请求接口地址 */
  api?: string
  /** 请求查询参数 */
  query?: Record<string, any>
}
```

## 辅助类型

```ts
import type { VNode } from 'vue'

export type Null<T> = null | T

export type Undef<T> = undefined | T

/** 自定义事件, 可以指定target类型 */
export interface DefineEvent<T = HTMLElement> extends Omit<Event, 'target'> {
  target: T
}

/** 解构VueExpose中被引用的实例 */
export type DeconstructValue<E extends Record<string, any>> = {
  [K in keyof E]: E[K] extends { value: infer V } ? V : E[K]
}

/** 索引类型 */
export type Index<Keys extends string, Val> = {
  [key in Keys]?: Val
}

/**
 * 渲染函数返回内容
 */
export type RenderReturn =
  | (undefined | VNode | string | null | number)[]
  | undefined
  | VNode
  | string
  | null
  | number
```
