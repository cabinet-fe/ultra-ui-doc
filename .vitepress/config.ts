import { defineConfig } from 'vitepress'
import { DemoContainer } from 'vitepress-demo-container/plugins'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Ultra UI',
  description: '一个优雅的，高性能的，高开发体验的组件库',
  themeConfig: {
    logo: '/logo.png',

    outline: {
      label: '当前页面'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '找不到该结果：',
            resetButtonTitle: '清除查询',
            footer: {
              navigateText: '切换',
              closeText: '关闭',
              selectText: '选择'
            },
            displayDetails: '显示列表详情'
          }
        }
      }
    },

    footer: {
      message: 'MIT Licensed',
      copyright: '© 2022-PRESENT 前端小分队'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/basic/button' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',

          items: [
            { text: '快速开始', link: '/guide/' },
            { text: '主题', link: '/guide/theme' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          base: '/components/basic/',
          items: [
            { text: 'Button 按钮', link: 'button' },
            { text: 'Card 卡片', link: 'card' },
            { text: 'Action 操作按钮', link: 'action' }
          ]
        },
        {
          text: '数据组件',
          base: '/components/data/',
          items: [{ text: 'Table 表格', link: 'table' }]
        }
      ]
    },

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
      md.use(DemoContainer, {
        demoRootDir: path.resolve(__dirname, '../examples')
      })
    }
  },

  vite: {
    ssr: {
      noExternal: ['ultra-ui', 'vitepress']
    }
  }
})
