// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import 'ultra-ui/styles/theme.css'
import 'ultra-ui/styles/index.js'
import { vLoading } from 'ultra-ui/components/loading/directive.js'
import 'ultra-ui/components/loading/style.css'
import 'ultra-ui/components/context-menu/style.js'
import * as UltraUI from 'ultra-ui/components/index.js'
import 'ultra-ui/components/button/style.js'
import 'ultra-ui/components/loading/style.js'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    Object.keys(UltraUI)
      .filter(key => key.startsWith('U'))
      .forEach(key => {
        const component = UltraUI[key]

        app.component(key, component)
      })

    app.directive('loading', vLoading)
  }
} satisfies Theme
