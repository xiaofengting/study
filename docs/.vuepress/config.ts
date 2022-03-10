module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'rua',
  description: '七海的小站',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    navbar: [
      { text: '首页', link: '/' },
      { text: '微信小程序', link: '/wxmp' },
      { text: 'Node.js', link: '/node' },
    ],
    sidebar: {
      '/wxmp': ['/wxmp/README.md', '/wxmp/base.md'],
      '/node': ['/node/README.md'],
    },
    lastUpdated: true
  }
}
