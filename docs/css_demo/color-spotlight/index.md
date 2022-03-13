---
lang: zh-CN
title: 彩色文字聚光灯
sidebarDepth: 0
---

<p data-light="这是一行很长的文字" class="color-light">这是一行很长的文字</p>

<style>
@keyframes color-spotlight-font {
  0% {
    -webkit-clip-path: circle(60px at 0% 50%);
    clip-path: circle(60px at 0% 50%);
  }
  50% {
    -webkit-clip-path: circle(60px at 100% 50%);
    clip-path: circle(60px at 100% 50%);
  }
  100% {
    -webkit-clip-path: circle(60px at 0% 50%);
    clip-path: circle(60px at 0% 50%);
  }
}
</style>

<style scoped>
.color-light {
  font-size: 60px;
  position: relative;
  user-select: none;
  color: #333;
}
.color-light::after {
  position: absolute;
  top: 0;
  left: 0;
  content: attr(data-light);
  animation: color-spotlight-font 6s linear infinite alternate;
  color: transparent;
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
  background-position: center center;
  -webkit-background-clip: text;
  background-clip: text;
  clip-path: circle(60px at 0% 50%);
}
</style>


切换夜晚模式，效果更好。

**重点：**

1. `attr()`函数，获取元素属性值。

可用于`::after`等伪类获取原标签的内容。

本例中，`::after`的content设置为p元素的`data-light`属性。  
再通过绝对定位的方式，实现彩色文本覆盖灰色文本的效果。

2. `clip-path` 裁剪方式创建元素的可显示区域。

本例中，使用了较为简单的 `circle()` 画圆函数，
不断改变圆心位置，实现聚光灯效果。  
`circle(半径 at 圆心x轴位置, 圆心y轴位置)`


:::: code-group
::: code-group-item HTML
@[code{18-18} html](./index.html)
:::
::: code-group-item CSS
@[code css{22,25,36,41}](./style.css)
:::
::::

