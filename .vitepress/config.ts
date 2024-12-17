import { defineConfig } from 'vitepress'
import { DemoContainer } from 'vitepress-demo-container/plugins'
import path from 'path'
import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import { readFileLine } from 'cat-kit/be'
import UnoCSS from 'unocss/vite'
import { version } from 'ultra-ui/version'

// 获取es模块中的__dirname
const __dirname = fileURLToPath(path.dirname(import.meta.url))

const componentsTypeMap = {
  basic: '基础组件',
  data: '数据组件',
  form: '表单组件',
  layout: '布局组件',
  feedback: '反馈组件',
  other: '其他组件'
}

async function getSidebarItem(dirPath: string, mdName: string) {
  const lines = await readFileLine(
    path.join(dirPath, mdName),
    (i, str, content) => {
      if (content.length) return false
      str = str.trim()
      if (str && str.startsWith('# ')) {
        return true
      }
    }
  )

  const line = lines[0]!

  return {
    text: line.replace('#', '').trim(),
    link: mdName.slice(0, -3)
  }
}

const getComponentSidebar = async (type: keyof typeof componentsTypeMap) => {
  const typePath = path.resolve(__dirname, '../components', type)
  const mds = await fs.readdir(typePath)
  const items = await Promise.all(mds.map(md => getSidebarItem(typePath, md)))

  return {
    text: componentsTypeMap[type],
    base: `/components/${type}/`,
    items
  }
}

const getCompositionsSidebar = async () => {
  const compositionsPath = path.resolve(__dirname, '../compositions')
  const mds = await fs.readdir(compositionsPath)
  const items = await Promise.all(
    mds.map(md => getSidebarItem(compositionsPath, md))
  )
  return items
}

const basicSidebar = await getComponentSidebar('basic')
const dataSidebar = await getComponentSidebar('data')
const formSidebar = await getComponentSidebar('form')
const layoutSidebar = await getComponentSidebar('layout')
const feedbackSidebar = await getComponentSidebar('feedback')
const otherSidebar = await getComponentSidebar('other')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Ultra UI',
  description: '一个优雅的，高性能的，高开发体验的组件库',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/ultra-ui-doc/logo.png'
      }
    ]
  ],
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
      message: '基于 MIT 协议',
      copyright: '版权所有 © 2024-现在 苏州元智慧'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: `v${version}`, link: '/' },
      { text: '指南', link: '/guide/' },
      {
        text: '组件',
        // link: '/components/basic/button',
        items: [
          { text: '组件', link: '/components/basic/button' },
          { text: '组合式方法', link: '/compositions/use-config' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',

          items: [
            { text: '概述', link: '/guide/' },
            { text: '快速开始', link: '/guide/quickstart' },
            { text: '主题', link: '/guide/theme' }
          ]
        }
      ],
      '/components/': [
        basicSidebar,
        dataSidebar,
        formSidebar,
        layoutSidebar,
        feedbackSidebar,
        otherSidebar
      ],
      '/compositions/': [
        {
          text: '组合式方法',
          base: '/compositions/',
          items: await getCompositionsSidebar()
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
    resolve: {
      alias: []
    },

    ssr: {
      noExternal: ['ultra-ui']
    },
    server: {
      host: true
    },

    plugins: [UnoCSS()]
  },

  outDir: './docs',
  base: '/ultra-ui-doc/'
})
