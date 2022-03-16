
const navbar = [
  { text: '首页', link: '/' },
  { text: '纯CSS合集', link: '/css_collection/' },
  { text: 'github', link: 'https://github.com/xiaofengting/study' }
  // { text: 'Node.js', link: '/node/' },
]

const sidebar = {
  '/css_collection': [
    '/css_collection/README.md',
    '/css_collection/loading/index.md',
    '/css_collection/loading2/index.md',
  ],
}

module.exports = {
  base: "/study/",
  // 站点配置
  lang: 'zh-CN',
  title: 'rua',
  description: '七海的小站',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    navbar,
    sidebar,
    contributors: false,
    lastUpdated: false,
  },
}
