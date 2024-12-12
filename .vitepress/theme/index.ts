// https://vitepress.dev/guide/custom-theme
import { defineComponent, h, onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { VDemo } from 'vitepress-demo-container/components'
import { UltraUI } from 'ultra-ui/install'
import {
  loadTheme,
  UITheme,
  type Theme as UltraTheme
} from 'ultra-ui/styles/theme'
import './style.css'
import { WebCache } from 'cat-kit/fe'
import 'virtual:uno.css'

export default {
  extends: DefaultTheme,
  Layout: defineComponent({
    setup() {
      onMounted(() => {
        const cachedTheme = WebCache.local.get<UltraTheme>('theme') || undefined
        const theme = cachedTheme ? new UITheme(cachedTheme) : undefined
        loadTheme(theme)
      })
      return () => {
        return h(DefaultTheme.Layout, null, {
          // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
      }
    }
  }),
  enhanceApp({ app, router, siteData }) {
    app.use(UltraUI)
    app.component('VDemo', VDemo)
  }
} satisfies Theme
