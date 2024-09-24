import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: './images/logo.png',
    navbar: false,
    sidebar: {
      '/': [
        {
          text: 'Main Pages',  // Sidebar section title
          children: [
            '/',              // Links to README.md (home page)
            '/Organized/sec1.md',
            '/Organized/sec2.md',
          ],
        },
        {
          text: 'Additional Pages',  // Another section title
          collapsable: true,         // This section is collapsible
          children: [
            '/Doc2/page3.md',      // Links to folder/page3.md
          ],
        }
      ]
    },
  }),



  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
})

