// https://vitepress.dev/guide/custom-theme
import { App, defineComponent, h, onMounted, watch } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData, type Theme } from 'vitepress'
import { VDemo } from 'vitepress-demo-container/components'
import { UltraUI } from 'ultra-ui/install'
import { loadTheme, lightTheme, darkTheme } from 'ultra-ui/styles/theme'
import './style.css'
import 'virtual:uno.css'

export default {
  extends: DefaultTheme,
  Layout: defineComponent({
    setup() {
      const { isDark } = useData()

      onMounted(() => {
        loadTheme(isDark.value ? darkTheme : lightTheme)
      })

      watch(isDark, d => {
        loadTheme(d ? darkTheme : lightTheme)
      })
      return () => {
        return h(DefaultTheme.Layout, null, {
          // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
      }
    }
  }),
  enhanceApp({ app, router, siteData }) {
    app.use(UltraUI as any)
    app.component('VDemo', VDemo)
  }
} satisfies Theme
