# Menu 菜单

## 基础使用

::: demo
render(components/data/menu/basic.vue)
:::

## 属性

```ts
interface MenuItem {
  /** 图标 */
  icon?: string | DefineComponent
  /** 菜单标题 */
  title: string
  /** 菜单路径 */
  path: string
  /** 是否禁用 */
  disabled?: boolean
  /** 子菜单 */
  children?: MenuItem[]

  [key: string]: any
}

/** 菜单组件组件属性 */
interface MenuProps {
  /** 当前路径 */
  currentPath?: string
  /** 是否折叠 */
  collapsed?: boolean
  /** 仅允许一个菜单可以打开 */
  uniqueOpened?: boolean
  /** 菜单列表 */
  menus?: MenuItem[]
}
```

## 事件

```ts
/** 菜单组件组件定义的事件 */
interface MenuEmits {
  (e: 'item-click', item: MenuItem): void
}
```
