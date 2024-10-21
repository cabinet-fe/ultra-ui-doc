import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Ultra UI',
  description: '一个优雅的，高性能的，高开发体验的组件库',
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local'
    },

    footer: {
      message: 'MIT Licensed',
      copyright: '© 2022-PRESENT 前端小分队'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/basic/button' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/guide/' },
          { text: '主题', link: '/guide/theme' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cabinet-fe/ultra-ui' }
    ],
    lastUpdated: {
      text: '上次更新'
    }
  },
  lastUpdated: true,

  locales: {
    root: {
      label: 'Chinese',
      lang: 'zh',
      themeConfig: {
        lastUpdated: {
          text: '上次更新于'
        }
      }
    },

    zh: {
      label: 'Chinese',
      lang: 'zh'
    }
  },

  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin, {
        demoDir: path.resolve(__dirname, '../examples')
      })

      md.use(function (mi) {})
    }
  }
})
