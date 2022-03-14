---
lang: zh-CN
title: 方块攀爬loading
sidebarDepth: 0
---

<div class="outer-container">
  <div class="climb-container">
    <div class="climb-box">
      <div class="climb-cube"></div>
    </div>
  </div>
</div>

<style>
@keyframes cube-climb-boxmove {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-150px);
  }
}
@keyframes cube-climb-cubemove {
  0% {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(90deg);
  }
  65% {
    transform: rotate(85deg);
  }
  70% {
    transform: rotate(90deg);
  }
  75% {
    transform: rotate(87.5deg);
  }
  80%, 100% {
    transform: rotate(90deg);
  }
}
</style>

<style scoped>
.outer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  background-color: #22272e;
  overflow: hidden;
}
.climb-container {
  position: relative;
  width: 100%;
  transform: rotate(-35deg);
}
.climb-container .climb-box { 
  position: relative;
  left: -150px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% + 300px);
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
  animation: cube-climb-boxmove 1.5s ease-in-out infinite;
}
.climb-box .climb-cube {
  position: relative;
  width: 150px;
  height: 150px;
  background-color: #03e9f4;
  box-shadow: 0 0 5px rgba(3, 233, 244, 1),
              0 0 25px rgba(3, 233, 244, 1),
              0 0 50px rgba(3, 233, 244, 1),
              0 0 100px rgba(3, 233, 244, 1),
              0 0 200px rgba(3, 233, 244, 1);
  transform-origin: bottom right;
  animation: cube-climb-cubemove 1.5s ease-in-out infinite;
}
</style>


**重点：**

1. `-webkit-box-reflect` 倒影

这个CSS属性是非标准的，谨慎使用。  
在一个特定方向上创建倒影。

2. 攀爬动画的实现。

内层的方块以右下角为中心向前旋转。  
包括方块的元素向后移动。  
最外的倾斜35度，创造斜坡。


:::: code-group
::: code-group-item HTML
@[code{18-24} html](./index.html)
:::
::: code-group-item CSS
@[code css{22}](./style.css)
:::
::::

