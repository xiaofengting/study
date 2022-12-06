import { defineUserConfig } from 'vuepress'
const { defaultTheme } = require('vuepress')

const navbar = [
  { text: '首页', link: '/' },
  // { text: '程序员面试金典', link: '/ts_leetcode/' },
  { text: '纯CSS', link: '/css_collection/' },
  // { text: '主页', link: 'https://xiaofengting.github.io/css_animation/' },
  // { text: 'nikki', link: 'https://xiaofengting.github.io/nikki-photo/' },
  { text: 'github', link: 'https://github.com/xiaofengting/study' }
  // { text: 'Node.js', link: '/node/' },
]

const fs = require("fs");
const path = require("path");
const files = fs.readdirSync(path.resolve(__dirname, '../ts_leetcode'))
let filearr: string[] = []
files.forEach((item: string) => {
  filearr.push(item)
})
filearr.sort((a, b) => {
  if (a === 'README.md') return -1
  if (b === 'README.md') return 1
  let ca = +a.split('.')[0]
  let cb = +b.split('.')[0]
  return ca - cb
})

const sidebar = {
  '/ts_leetcode': filearr,
  '/css_collection': [
    '/css_collection/README.md',
    '/css_collection/loading/index.md',
  ],
}

export default defineUserConfig({
  base: "/try_vuepress_note/",
  // 站点配置
  lang: 'zh',
  title: 'rua',
  description: '七海的小站',
  // 主题和它的配置
  theme: defaultTheme(
    {
      navbar,
      sidebar,
      contributors: false,
      lastUpdated: false,
    }
  ),
})
