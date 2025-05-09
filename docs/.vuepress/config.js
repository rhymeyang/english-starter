import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  base: '/english-starter/',
  theme: defaultTheme({
    logo: 'favicon.ico',
    contributors: false,
    navbar: [
      {
        text: 'Vivian',
        link: '/../vivian/',
      },
      {
        text: 'Recipe',
        link: '/../recipe/',
      },
      {
        text: 'English',
        link: '/../english-starter/',
      },
      {
        text: 'Semester 3',
        link: '/../Se/',
      }
    ],
    sidebar: {
      '/': [
        {
          text: 'Main Pages',
          children: [
            '/',
          ],
        },
        {
          text: 'Sharon',
          children: [
            '/General/Sharon/60.md',
          ],
        },
        {
          text: 'LEC - Journal',
          children: [
            '/General/LEC/Journal/110.md',
            '/General/LEC/Journal/122.md',
          ],
        },
        {
          text: 'LEC - News - 读懂英语新闻',
          children: [
            '/General/LEC/News/100.md',
            '/General/LEC/News/196.md',
            '/General/LEC/News/215.md',
            '/General/LEC/News/224.md',
            '/General/LEC/News/225.md',
          ],
        },
        {
          text: 'Driving Test',
          children: [
            '/Drive/01.md',

          ],
        },
        {
          text: 'Duolingo',
          children: [
            '/Duo/Organized/sec01.md',
            '/Duo/Organized/sec02.md',
            '/Duo/Organized/sec03.md',
            '/Duo/Organized/sec04.md',
            '/Duo/Organized/sec05.md',
            '/Duo/Organized/sec06.md',
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
          text: 'Grammar',
          collapsable: true,
          children: [
            { text: 'Tense', link: '/Grammar/Tense.md' },
            { text: 'Subjunctive Mood', link: '/Grammar/SubjunctiveMood.md' },

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
            '/Article/ChinaPopulation.md',
            '/Article/Model.md',
            '/Article/Real.md',
            '/Article/smartBuilding.md',
            '/Article/SurveyBusiness.md',
            '/Article/WhitePeopleMeal.md',
            '/Article/Bitcoin.md',
            '/Article/Tesla.md',
          ],
        }
      ]
    },
  }),



  lang: 'zh-CN',
  title: "Vicky's Page",
  description: 'VuePress Site',

})

