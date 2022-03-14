---
lang: zh-CN
title: 玻璃拟态loading-2
sidebarDepth: 0
---

<div class="glass-container">
  <div class="glass-loader">
    <span></span>
    <span></span>
  </div>
</div>

<style>
@keyframes glass-loader-two {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<style scoped>
.glass-container {
  height: 300px;
  background-color: #eafdff;
  padding-top: 40px;
  display: flex;
  justify-content: center;
}
.glass-loader {
  position: relative;
  width: 180px;
  height: 180px;
}
.glass-loader span:nth-child(1) {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background-color: rgba(233, 30, 99, 0.05);
  border-radius: 50%;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 2;
}
.glass-loader span:nth-child(2) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
  z-index: 1;
  overflow: hidden;
  animation: glass-loader-two 1s linear infinite;
}
.glass-loader span:nth-child(2)::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 100%;
  height: 100%;
  background: #ff6198;
}
.glass-loader span:nth-child(1)::before {
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

本例中，一个白色半透明的圆 在 另一个红色1/4圆前面。  
白色半透明的圆`backdrop-filter`属性设置了模糊滤镜，产生了类似玻璃的效果。

2. `radial-gradient()` 径向渐变创造影子。


:::: code-group
::: code-group-item HTML
@[code{18-23} html](./index.html)
:::
::: code-group-item CSS
@[code css{63}](./style.css)
:::
::::

