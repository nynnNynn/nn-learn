import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NN Love Learning',
  description: '宁宁爱学习',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'LC', link: '/leetcode/' },
      { text: '计算机科学', link: '/cs/' },
      { text: '数学', link: '/math/' },
      { text: '语言文学', link: '/literature/' },
      { text: '经济与管理', link: '/economics/' },
      { text: '生命科学', link: '/medicine/' },
      { text: '艺术与设计', link: '/arts/' }
    ],

    sidebar: {
      '/cs/': [
        {
          text: '计算机科学',
          items: [
            { text: '学科概览', link: '/cs/' },
            { text: '数据结构复习', link: '/cs/data-structures' },
            { text: '机器学习入门', link: '/cs/ml-intro' }
          ]
        }
      ],
      '/math/': [
        {
          text: '数学',
          items: [
            { text: '学科概览', link: '/math/' },
            { text: '微积分要点', link: '/math/calculus' },
            { text: '线性代数速写', link: '/math/linear-algebra' }
          ]
        }
      ],
      '/literature/': [
        {
          text: '语言文学',
          items: [
            { text: '学科概览', link: '/literature/' },
            { text: '唐诗精读：王维', link: '/literature/tang-wangwei' },
            { text: '现代散文片段', link: '/literature/modern-prose' }
          ]
        }
      ],
      '/economics/': [
        {
          text: '经济与管理',
          items: [
            { text: '学科概览', link: '/economics/' },
            { text: '供求与均衡', link: '/economics/supply-demand' },
            { text: '博弈论速写', link: '/economics/game-theory' }
          ]
        }
      ],
      '/medicine/': [
        {
          text: '生命科学',
          items: [
            { text: '学科概览', link: '/medicine/' },
            { text: '循环系统概要', link: '/medicine/cardiovascular' },
            { text: '免疫基础速记', link: '/medicine/immunology' }
          ]
        }
      ],
      '/arts/': [
        {
          text: '艺术与设计',
          items: [
            { text: '学科概览', link: '/arts/' },
            { text: '构图与留白', link: '/arts/composition' },
            { text: '色彩理论备忘', link: '/arts/color-theory' }
          ]
        }
      ]
    },

    socialLinks: []
  }
})
