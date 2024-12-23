# 主题

所有的主题都是基于 css 的变量系统，配置主题实际上就是配置这些 css 变量。

## 定义

```ts
// theme 定义

type Theme = {
  /** 主题色 */
  color: {
    /** 主要颜色 */
    primary: string
    /** 成功颜色 */
    success: string
    /** 警告颜色 */
    warning: string
    /** 危险颜色 */
    danger: string
    /** 信息颜色 */
    info: string
    /** 禁用颜色 */
    disabled: string
    /** 默认颜色 */
    default: string
  }
  /** 背景色 */
  bgColor: {
    /** 底部背景色 */
    bottom: string
    /** 中部背景色 */
    middle: string
    /** 顶部背景色 */
    top: string
    /** 悬停背景色 */
    hover: string
    /** 黑色背景 */
    black: string
  }

  border: {
    /** 边框颜色 */
    color: string
    /** 边框宽度 */
    width: number
    /** 边框样式 */
    style: string
  }
  /** 文字色 */
  textColor: {
    /** 标题文字颜色 */
    title: string
    /** 主要文字颜色 */
    main: string
    /** 占位符文字颜色 */
    placeholder: string
    /** 次要文字颜色 */
    second: string
    /** 辅助文字颜色 */
    assist: string
    /** 禁用文字颜色 */
    disabled: string
    /** 白色文字 */
    white: string
  }
  /** 圆角大小 */
  radius: {
    /** 小圆角 */
    small: number
    /** 默认圆角 */
    default: number
    /** 大圆角 */
    large: number
  }
  /** 表单组件高度 */
  formComponentHeight: {
    /** 小尺寸表单组件高度 */
    small: number
    /** 默认尺寸表单组件高度 */
    default: number
    /** 大尺寸表单组件高度 */
    large: number
  }
  /** 菜单高度 */
  menuHeight: {
    /** 小尺寸菜单高度 */
    small: number
    /** 默认尺寸菜单高度 */
    default: number
    /** 大尺寸菜单高度 */
    large: number
  }
  /** 字体族 */
  fontFamily: string
  /** 标题字体大小 */
  fontSizeTitle: {
    /** 小尺寸标题字体 */
    small: number
    /** 默认尺寸标题字体 */
    default: number
    /** 大尺寸标题字体 */
    large: number
  }
  /** 正文字体大小 */
  fontSizeMain: {
    /** 小尺寸正文字体 */
    small: number
    /** 默认尺寸正文字体 */
    default: number
    /** 大尺寸正文字体 */
    large: number
  }
  /** 辅助文字字体大小 */
  fontSizeAssist: {
    /** 小尺寸辅助文字字体 */
    small: number
    /** 默认尺寸辅助文字字体 */
    default: number
    /** 大尺寸辅助文字字体 */
    large: number
  }
  /** 阴影 */
  shadow: {
    /** 阴影颜色 */
    color: string
    /** 阴影水平偏移 */
    x: number
    /** 阴影垂直偏移 */
    y: number
    /** 阴影模糊半径 */
    blur: number
    /** 阴影扩散半径 */
    spread: number
  }
  /** 标签尺寸 */
  tag: {
    /** 小尺寸标签 */
    small: number
    /** 默认尺寸标签 */
    default: number
    /** 大尺寸标签 */
    large: number
  }
  /** 间距 */
  gap: {
    /** 小间距 */
    small: number
    /** 默认间距 */
    default: number
    /** 大间距 */
    large: number
  }
  /** 断点 */
  breakpoint: {
    /** 超小屏幕断点 */
    xs: number
    /** 小屏幕断点 */
    sm: number
    /** 中等屏幕断点 */
    md: number
    /** 大屏幕断点 */
    lg: number
  }
}
```

## 更改主题变量

以一个辅助色为例，更改主题色并重新加载，即可看到主题的更新。

::: demo
render(components/theme.vue)
:::

你可以参照上面的样式，更改所有的主题色。ultra-ui 也提供了一个主题配置组件，可以可视化实时调整主题样式。

## 扩展主题

🚧 施工中...

## 最佳实践

主题依赖于 css3 的变量引用，因此你想在主题变量生效时让你自己后续的页面和业务组件同样地获得对应的变化，请**多多**使用这些变量。
