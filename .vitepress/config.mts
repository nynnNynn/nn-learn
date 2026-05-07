import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NN Love Learning',
  description: '宁宁爱学习',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'LC', link: '/leetcode/' },
    ],

    sidebar: {
      // '/cs/': [
      //   {
      //     text: '计算机科学',
      //     items: [
      //       { text: '学科概览', link: '/cs/' },
      //       { text: '数据结构复习', link: '/cs/data-structures' },
      //       { text: '机器学习入门', link: '/cs/ml-intro' }
      //     ]
      //   }
      // ],
    },

    socialLinks: []
  }
})
