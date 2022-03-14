---
lang: zh-CN
title: 玻璃拟态loading
sidebarDepth: 0
---

<div class="glass-container">
  <div class="glass-loader">
    <span></span>
    <span></span>
  </div>
</div>

<style>
@keyframes glass-loader-one {
  0%, 100% {
    transform: translateX(-80px);
  }
  50% {
    transform: translateX(80px);
  }
}
</style>

<style scoped>
.glass-container {
  height: 300px;
  background-color: #eafdff;
  padding-top: 10px;
}
.glass-loader {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 50px 100px 100px;
}
.glass-loader span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:#5989ff;
  border-radius: 50%;
  animation: glass-loader-one ease-in-out 2s infinite;
}
.glass-loader span:nth-child(2) {
  background-color: rgba(56, 109, 241, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation-delay: -1s;
}
.glass-loader span::before {
  content: '';
  position: absolute;
  bottom: -100px;
  left: -20%;
  width: 140%;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(rgba(0,0,0,0.1),transparent,transparent);
}
html.dark .glass-container {
  background-color: transparent;
}
</style>


**重点：**

1. `backdrop-filter` 属性为背后的区域添加效果。

本例中，一个白色半透明的圆 在 另一个蓝色圆前面。  
白色半透明的圆`backdrop-filter`属性设置了模糊滤镜。使得两圆相交时产生了类似玻璃的效果。

2. 巧用 `animation-delay`

两个圆的动画相同，均为2s，白色圆的动画提前1s，用更少的代码产生了相交动画。

3. `radial-gradient()` 径向渐变。

中间灰色，周围透明的径向渐变创造圆形的影子。


:::: code-group
::: code-group-item HTML
@[code{18-23} html](./index.html)
:::
::: code-group-item CSS
@[code css{32,33,35,45}](./style.css)
:::
::::

