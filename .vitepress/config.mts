import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NN Love Learning',
  description: '宁宁爱学习',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'LC', link: '/leetcode/' },
      { text: '面经', link: '/interview/' },
      { text: 'JS', link: '/javascript/' },
    ],

    sidebar: {
      '/javascript/': [
        {
          text: 'JS手写题',
          items: [
            { text: '概览', link: '/javascript/' },
            { text: '整体大纲', link: '/javascript/main' },
          ]
        }
      ],
      
    },

    socialLinks: []
  }
})
