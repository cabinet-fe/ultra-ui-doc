// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import * as UltraUI from 'ultra-ui/components/index'
import 'ultra-ui/components/button/style'

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
  }
} satisfies Theme
