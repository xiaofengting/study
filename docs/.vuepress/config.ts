
const navbar = [
  { text: '首页', link: '/' },
  { text: 'CSS奇技淫巧', link: '/css_demo/' },
  { text: '微信小程序', link: '/wxmp/' },
  { text: 'github', link: 'https://github.com/xiaofengting/study' }
  // { text: 'Node.js', link: '/node/' },
]

const sidebar = {
  '/wxmp': ['/wxmp/README.md'],
  // '/node': ['/node/README.md'],
  '/css_demo': [
    '/css_demo/README.md',
    '/css_demo/animate-hang-star/index.md',
    {
      text: '文字特效',
      link: '/css_demo/color-font/index.md',
      children: [
        '/css_demo/color-font/index.md',
        '/css_demo/color-spotlight/index.md',
        '/css_demo/color-shine-font/index.md',
      ],
    },
    {
      text: 'loading特效',
      link: '/css_demo/line-text-loading/index.md',
      children: [
        '/css_demo/line-text-loading/index.md',
        '/css_demo/glow-ring-loading/index.md',
        '/css_demo/square-sandglass-loading/index.md',
        '/css_demo/color-loading/index.md',
        '/css_demo/glassmorphism-loading/index.md',
        '/css_demo/glassmorphism-loading-2/index.md',
        '/css_demo/cube-climb-loading/index.md',
      ],
    },
    '/css_demo/preview-iphone/index.md',
    '/css_demo/color-square-bg/index.md',
    '/css_demo/menu-hover-line/index.md',
    '/css_demo/menu-hover-bg/index.md',
    '/css_demo/css-tooltip/index.md',
    '/css_demo/css-popup/index.md',
    '/css_demo/css-slide/index.md',
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
