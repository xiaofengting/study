---
lang: zh-CN
title: 彩色文字
sidebarDepth: 0
---

<p class="color-font">这是一行彩色文字</p>

<style>
@keyframes color-font-text {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 300%;
  }
}
</style>

<style scoped>
.color-font {
  font-size: 60px;
  background-position: 0%;
  animation: color-font-text 3s linear infinite;
  background-image: linear-gradient(
    90deg,
    #ff0000,
    #ffa500,
    #ffff00,
    #00ff00,
    #00a5ff,
    #0000ff,
    #a500ff
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: 300%;
}
</style>


**重点：**

1. `-webkit-background-clip: text;` 背景裁剪在文字内。

配合`color: transparent;` 文字透明。  
`background-image` 设置为彩虹色的线性渐变完成。


:::: code-group
::: code-group-item HTML
@[code{18-18} html](./index.html)
:::
::: code-group-item CSS
@[code css{11,23,24}](./style.css)
:::
::::

