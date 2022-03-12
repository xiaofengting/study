---
lang: zh-CN
title: 彩色的loading
sidebarDepth: 0
---

<section class="color-loading-container">
  <div class="color-loading">
    <span style="--idx:1;"></span>
    <span style="--idx:2;"></span>
    <span style="--idx:3;"></span>
    <span style="--idx:4;"></span>
    <span style="--idx:5;"></span>
    <span style="--idx:6;"></span>
    <span style="--idx:7;"></span>
    <span style="--idx:8;"></span>
    <span style="--idx:9;"></span>
    <span style="--idx:10;"></span>
    <span style="--idx:11;"></span>
    <span style="--idx:12;"></span>
    <span style="--idx:13;"></span>
    <span style="--idx:14;"></span>
    <span style="--idx:15;"></span>
    <span style="--idx:16;"></span>
    <span style="--idx:17;"></span>
    <span style="--idx:18;"></span>
    <span style="--idx:19;"></span>
    <span style="--idx:20;"></span>
  </div>
</section>

**重点：**

1. `rotate()` 配合 局部CSS变量。

本例中，有20个重合元素，每个元素的`::before`是一个位于该元素左上角的小圆点。  
配合局部CSS变量，旋转元素，使得 小圆点 位于一个圈上。

2. `animation-delay` 配合 局部CSS变量。

本例中，共20个小圆点，做缩放动画。  
由于动画延迟不同，看起来有旋转效果。每个点的延迟时间使用局部CSS变量计算。

3. `hue-rotate()` 滤镜，色调旋转。

配合animation属性，实现彩色的切换效果。


:::: code-group
::: code-group-item HTML
```html
<section class="color-loading-container">
  <div class="color-loading">
    <span style="--idx:1;"></span>
    <span style="--idx:2;"></span>
    <span style="--idx:3;"></span>
    <span style="--idx:4;"></span>
    <span style="--idx:5;"></span>
    <span style="--idx:6;"></span>
    <span style="--idx:7;"></span>
    <span style="--idx:8;"></span>
    <span style="--idx:9;"></span>
    <span style="--idx:10;"></span>
    <span style="--idx:11;"></span>
    <span style="--idx:12;"></span>
    <span style="--idx:13;"></span>
    <span style="--idx:14;"></span>
    <span style="--idx:15;"></span>
    <span style="--idx:16;"></span>
    <span style="--idx:17;"></span>
    <span style="--idx:18;"></span>
    <span style="--idx:19;"></span>
    <span style="--idx:20;"></span>
  </div>
</section>
```
:::
::: code-group-item CSS
```css{19,30,111,115}
.color-loading-container {
  display: flex;
  height: 300px;
  animation: color-loading-bg 10s linear infinite;
  align-items: center;
  justify-content: center;
}
.color-loading-container .color-loading {
  position: relative;
  width: 80px;
  height: 80px;
}
.color-loading-container .color-loading span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(18deg * var(--idx)));
}
.color-loading-container .color-loading span::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;
  content: "";
  transform: scale(0);
  animation: color-loading-item 2s linear infinite;
  animation-delay: calc(0.1s * var(--idx));
  border-radius: 50%;
  background-color: #0f0;
  box-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 40px #0f0, 0 0 60px #0f0;
}
@keyframes color-loading-bg {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

@keyframes color-loading-item {
  0% {
    transform: scale(1);
  }
  80%, 100% {
    transform: scale(0);
  }
}
```
:::
::::


<style scoped>
.color-loading-container {
  display: flex;
  height: 300px;
  animation: color-loading-bg 10s linear infinite;
  align-items: center;
  justify-content: center;
}
.color-loading-container .color-loading {
  position: relative;
  width: 80px;
  height: 80px;
}
.color-loading-container .color-loading span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(18deg * var(--idx)));
}
.color-loading-container .color-loading span::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;
  content: "";
  transform: scale(0);
  animation: color-loading-item 2s linear infinite;
  animation-delay: calc(0.1s * var(--idx));
  border-radius: 50%;
  background-color: #0f0;
  box-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 40px #0f0, 0 0 60px #0f0;
}
</style>