import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  base: '/english-starter/',
  theme: defaultTheme({
    logo: '/images/leaf.svg',
    contributors: false,
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Recipe',
        link: 'https://rhymeyang.github.io/recipe/',
      },
      {
        text: 'English',
        link: 'https://rhymeyang.github.io/english-starter/',
      },
      {
        text: 'Semester 3',
        link: 'https://rhymeyang.github.io/Se/',
      }
    ],
    sidebar: {
      '/': [
        {
          text: 'Main Pages',
          children: [
            '/',
            '/Organized/sec1.md',
            '/Organized/sec2.md',
          ],
        },
        {
          text: 'Vocabulary',
          collapsable: true,
          children: [
            { text: 'Unregular Verb', link: '/Vocabulary/Verb.md' },
           
          ],
        },
        {
          text: 'IELTS',
          collapsable: true,
          children: [
            { text: 'General', link: '/IELTS/General.md' },
            { text: 'General Writing 1', link: '/IELTS/Writing01.md' },
            { text: 'General Writing 2', link: '/IELTS/Writing02.md' },
          ],
        },
        {
          text: 'Article',
          collapsable: true,
          children: [
            { text: 'cyber risks in real estate', link: '/Article/Real.md' },
            { text: 'Smart Building Market', link: '/Article/smartBuilding.md' },
            { text: 'Canadian Businesses Cyber Threats', link: '/Article/SurveyBusiness.md' },

          ],
        }
      ]
    },
  }),



  lang: 'zh-CN',
  title: "Vicky's Page",
  description: 'VuePress Site',

})

