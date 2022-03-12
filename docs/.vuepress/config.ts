
const navbar = [
  { text: '首页', link: '/' },
  { text: 'CSS效果', link: '/css_demo/' },
  { text: '微信小程序', link: '/wxmp/' },
  // { text: 'Node.js', link: '/node/' },
]

const sidebar = {
  '/wxmp': ['/wxmp/README.md'],
  // '/node': ['/node/README.md'],
  '/css_demo': [
    '/css_demo/README.md',
    '/css_demo/1-hang-star.md',
    '/css_demo/2-title.md',
    '/css_demo/3-popup.md',
    '/css_demo/4-color-font.md',
    '/css_demo/5-spotlight.md',
    '/css_demo/6-iphone.md',
    '/css_demo/7-color-cube.md',
    '/css_demo/8-hover-menu.md',
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
    lastUpdated: false
  }
}
