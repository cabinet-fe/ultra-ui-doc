// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { VDemo } from 'vitepress-demo-container/components'
import { UltraUI } from 'ultra-ui/install'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(UltraUI)
    app.component('VDemo', VDemo)
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
