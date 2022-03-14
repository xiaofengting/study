---
lang: zh-CN
title: 发光彩环loading
sidebarDepth: 0
---

<div class="loading-container">
  <div class="glow-ring-loading"></div>
</div>

<style>
@keyframes glow-ring-loading {
  0% {
    transform: rotate(0deg);
    filter: hue-rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
</style>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}
.glow-ring-loading {
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
  animation: glow-ring-loading 2s linear infinite;
}
.glow-ring-loading::before {
  content: '';
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  right: 6px;
  background: #fff;
  border-radius: 50%;
  z-index: 100;
}
.glow-ring-loading::after {
  content: '';
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
  border-radius: 50%;
  z-index: 1;
  filter: blur(30px);
}
html.dark .loading-container {
  background-color: #22272e;
}
html.dark .glow-ring-loading::before {
  background-color: #22272e;
}
</style>


**重点：**

1. `::before`和`::after`巧用。

`::before`负责中间的黑色部分，遮挡剩余部分实现圆环效果。  
元素本体负责从有色到透明的线性渐变的圆。  
`::after`负责最外层的模糊。


:::: code-group
::: code-group-item HTML
@[code{18-20} html](./index.html)
:::
::: code-group-item CSS
@[code css](./style.css)
:::
::::

