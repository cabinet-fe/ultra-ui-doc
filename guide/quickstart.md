# 快速开始

ultra-ui 使用 cat-kit 库进行辅助开发，并且在构建时将 cat-kit 移除，意味着你需要在你的项目中安装 cat-kit。

cat-kit 是一个辅助开发库，提供了一些实用的功能，[点击](https://cabinet-fe.github.io/cat-kit/)查看文档。

## 安装

::: code-group

```sh [bun]
bun add ultra-ui cat-kit
```

```sh [pnpm]
pnpm add ultra-ui cat-kit
```

:::

## 全局引入

使用这个组件的最简单的方式是导入 ultra-ui 的安装插件进行全局引入。

```ts
// 你的入口文件main.ts

import { createApp, h } from 'vue'
import App from './App.vue'
import { UltraUI } from 'ultra-ui/install'
import { loadTheme } from 'ultra-ui'

// 如果你在ssr环境中使用，请在onMounted中调用loadTheme
loadTheme()

const app = createApp({
  render: () => h(App)
})

app.use(UltraUI)
```

## 按需引入 (推荐)

1. 首先安装 vite 插件

::: code-group

```sh [bun]
bun add unplugin-vue-components vite-helper -D
```

```sh [pnpm]
pnpm add unplugin-vue-components vite-helper -D
```

:::

2. 在入口文件中引入主题和基础样式

```ts
// main.ts
import { loadTheme } from 'ultra-ui/styles'

loadTheme()
```

3. 在 vite 配置中引入插件

```ts
//vite.config.ts
import Components from 'unplugin-vue-components/vite'
import { defineServerProxy, UltraUIResolver } from 'vite-helper'

export default defineConfig({
  plugins: [
    Components({
      resolvers: [UltraUIResolver],
      dts: true
    })
  ],

  // 如果你在项目中也同样使用scss并想使用开箱即用的mixins,vars,functions
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        additionalData: `
            @use 'ultra-ui/styles/mixins' as m;
            @use 'ultra-ui/styles/vars' as vars;
            @use 'ultra-ui/styles/functions' as fn;
          `
      }
    }
  }
})
```
