---
lang: zh-CN
title: 普通轮播图
sidebarDepth: 0
---

<div class="slide-container">
  <ul class="slide-list">
    <li class="slide-item"> 1 </li>
    <li class="slide-item"> 2 </li>
    <li class="slide-item"> 3 </li>
    <li class="slide-item"> 1 </li>
  </ul>
</div>

**重点：**

1. `:target`选择器

`:target` 可以选择当前的 `#` 锚点，
配合 `display: none / flex;` 切换弹框遮罩的展示。

2. flex 布局

弹框遮罩使用flex居中布局，弹框内容包含在内。

:::: code-group
::: code-group-item HTML
```html
<div class="slide-container">
  <ul class="slide-list">
    <li class="slide-item"> 1 </li>
    <li class="slide-item"> 2 </li>
    <li class="slide-item"> 3 </li>
    <li class="slide-item"> 1 </li>
  </ul>
</div>
```
:::
::: code-group-item CSS
```css
.slide-container {
  --width: 16rem;
  overflow: hidden;
  width: var(--width);
}
.slide-list {
  width: calc(var(--width) * 4);
  animation: slide-move 5s ease 1s infinite;
  padding: 0;
  margin: 0;
}
.slide-item {
  font-size: 4rem;
  float: left;
  box-sizing: border-box;
  width: var(--width);
  text-align: center;
  color: #fff;
  border: .2rem solid #dc00d4;
  background-color: #ffdd1c;
  list-style: none;
}
@keyframes slide-move {
  0% {
    transform: translate(calc(0 * var(--width)));
  }
  33% {
    transform: translate(calc(-1 * var(--width)));
  }
  66% {
    transform: translate(calc(-2 * var(--width)));
  }
  100% {
    transform: translate(calc(-3 * var(--width)));
  }
}
```
:::
::::


<style>
@keyframes slide-move {
  0% {
    transform: translate(calc(0 * var(--width)));
  }
  33% {
    transform: translate(calc(-1 * var(--width)));
  }
  66% {
    transform: translate(calc(-2 * var(--width)));
  }
  100% {
    transform: translate(calc(-3 * var(--width)));
  }
}
</style>
<style scoped>
.slide-container {
  --width: 16rem;
  overflow: hidden;
  width: var(--width);
}
.slide-list {
  width: calc(var(--width) * 4);
  animation: slide-move 5s ease 1s infinite;
  padding: 0;
  margin: 0;
}
.slide-item {
  font-size: 4rem;
  float: left;
  box-sizing: border-box;
  width: var(--width);
  text-align: center;
  color: #fff;
  border: .2rem solid #dc00d4;
  background-color: #ffdd1c;
  list-style: none;
}
</style>
