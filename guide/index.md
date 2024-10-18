# 指南

## 安装

```zsh
bun add ultra-ui

bun add unplugin-vue-components vite-helper -D
```

## 使用

```ts
// 在入口文件中引入一些通用的样式
import 'ultra-ui/styles/index'
import 'ultra-ui/styles/theme.css'
import 'ultra-ui/styles/anime/fade.css'
import 'ultra-ui/components/context-menu/style'
import 'ultra-ui/components/message/style'
import 'ultra-ui/components/message-confirm/style'
```

```ts
//vite.config.ts
import Components from 'unplugin-vue-components/vite'
import {
  defineServerProxy,
  UltraUIResolver,
  MetaComponentsResolver
} from 'vite-helper'

export default defineConfig({
  plugins: [
    Components({
      resolvers: [UltraUIResolver, MetaComponentsResolver],
      dts: '../components.d.ts'
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
