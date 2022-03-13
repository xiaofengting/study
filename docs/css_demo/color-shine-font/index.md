---
lang: zh-CN
title: 彩色发光文字
sidebarDepth: 0
---

<div class="font-container">
  <h2>
    <span class="font-letter" style="--idx:1;">h</span>
    <span class="font-letter" style="--idx:2;">e</span>
    <span class="font-letter" style="--idx:3;">l</span>
    <span class="font-letter" style="--idx:4;">l</span>
    <span class="font-letter" style="--idx:5;">o</span>
    <span class="font-letter" style="--idx:6; margin-left: 10px;">w</span>
    <span class="font-letter" style="--idx:7;">o</span>
    <span class="font-letter" style="--idx:8;">r</span>
    <span class="font-letter" style="--idx:9;">l</span>
    <span class="font-letter" style="--idx:10;">d</span>
  </h2>
</div>

<style>
@keyframes font-shine-letter {
  0% {
    color: #fff;
    filter: blur(2px) hue-rotate(0deg);
    text-shadow: 0 0 10px #00b3ff,
    0 0 20px #00b3ff,
    0 0 40px #00b3ff,
    0 0 80px #00b3ff,
    0 0 120px #00b3ff,
    0 0 200px #00b3ff;
  }
  30%, 70% {
    color: #fff;
    filter: blur(2px) hue-rotate(360deg);
    text-shadow: 0 0 10px #00b3ff,
    0 0 20px #00b3ff,
    0 0 40px #00b3ff,
    0 0 80px #00b3ff,
    0 0 120px #00b3ff,
    0 0 200px #00b3ff;
  }
  100% {
    color: transparent;
    text-shadow: none;
    filter: blur(2px) hue-rotate(0deg);
  }
}
</style>

<style scoped>
.font-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  font-family: BadScript, cursive;
}
.font-container h2 {
  display: flex;
  color: transparent;
  font-size: 80px;
  margin: 0;
  border-bottom: none;
}
.font-letter {
  animation: font-shine-letter 3s linear infinite;
  animation-delay: calc(0.1s * var(--idx));
}
</style>


切换夜晚模式，效果更好。

**重点：**

1. `animation-delay` 配合 局部CSS变量。

本例中，每个字母一个变量，控制变色的延迟。

2. `hue-rotate()` 滤镜实现变色。

3. `text-shadow` 属性实现文本阴影。


:::: code-group
::: code-group-item HTML
@[code{18-31} html](./index.html)
:::
::: code-group-item CSS
@[code css{18,23}](./style.css)
:::
::::

