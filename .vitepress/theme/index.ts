// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import 'ultra-ui/styles/theme.css'
import 'ultra-ui/styles/anime/fade.css'
import 'ultra-ui/styles/index.js'
import 'ultra-ui/components/context-menu/style.js'
import 'ultra-ui/components/message/style.js'
import 'ultra-ui/components/message-confirm/style.js'

import 'vitepress-demo-container/components/style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // // ...
    // Object.keys(UltraUI)
    //   .filter(key => key.startsWith('U'))
    //   .forEach(key => {
    //     const component = UltraUI[key]
    //     app.component(key, component)
    //   })
    // app.directive('loading', vLoading)
  }
} satisfies Theme
