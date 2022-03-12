---
lang: zh-CN
title: 挂着的星星
sidebarDepth: 0
---

<div class="decoration-hang decoration-hang-moon hang-1"></div>
<div class="decoration-hang hang-2"></div>
<div class="qiuqian"></div>


点击右上角切换 白天、黑夜 查看效果。

**重点：**

1. `animation-fill-mode: forwards;`

保持最后一个关键帧。  
如本例中，星星初始为 `transform: translateY(-100%);` 不可见，
在下坠动画中变为 `transform: translateY(0);`，随后保持在这里。

2. `infinite alternate;`  

来回播放动画。如本例中，小人来回摇晃。


:::: code-group
::: code-group-item HTML
```html
<div class="decoration-hang decoration-hang-moon hang-1"></div>
<div class="decoration-hang hang-2"></div>
<div class="qiuqian"></div>
```
:::
::: code-group-item CSS
```css
.decoration-hang {
  position: fixed;
  top: 0;
  width: 30px;
}
.decoration-hang::before {
  content: "";
  display: block;
  margin-left: calc(50% - 0.5px);
  width: 1px;
  background-color: #7a6a4d;
  height: calc(100% - 30px);
}
.decoration-hang::after {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  margin-top: -5px;
  background-image: url(/images/star.svg);
  background-position: center top;
  background-size: contain;
  background-repeat: no-repeat;
  animation: rotate-decoration 6s linear 0s infinite;
}
.decoration-hang-moon::after {
  background-image: url(/images/moon.svg);
}
.hang-1 {
  right: 20%;
  height: 30%;
}
.hang-2 {
  right: 10%;
  height: 45%;
}
.decoration-hang {
  transform: translateY(-100%);
}
.qiuqian {
  position: fixed;
  top: 60px;
  right: 10px;
  width: 130px;
  height: 200px;
  background-size: contain;
  background-position: bottom left;
  transform-origin: 50% -100%;
  background-repeat: no-repeat;
  background-image: url(/images/qiuqian.png);
  transform: rotate(-10deg);
  animation: shake-decoration 2s infinite alternate;
}
html.dark .qiuqian {
  animation: none;
  transform: translate(110%, -100%);
}
html.dark .hang-1 {
  animation: down-decoration 0.6s ease 0.2s forwards;
}
html.dark .hang-2 {
  animation: down-decoration 0.6s ease 0.4s forwards;
}
```
:::
::: code-group-item keyframes
```css
@keyframes rotate-decoration {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-360deg);
  }
}
@keyframes down-decoration {
  0% {
    transform: translateY(-100%);
  }
  20% {
    transform: translateY(0%);
  }
  40% {
    transform: translateY(-3%);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(-1.5%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes shake-decoration {
  0% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(10deg);
  }
}
```
:::
::::


<style scoped>
html.dark .qiuqian {
  animation: none;
  transform: translate(110%, -100%);
}
html.dark .hang-1 {
  animation: down-decoration 0.6s ease 0.2s forwards;
}
html.dark .hang-2 {
  animation: down-decoration 0.6s ease 0.4s forwards;
}
.hang-1 {
  right: 20%;
  height: 30%;
}
.hang-2 {
  right: 10%;
  height: 45%;
}
.decoration-hang {
  transform: translateY(-100%);
}
.qiuqian {
  position: fixed;
  top: 60px;
  right: 10px;
  width: 130px;
  height: 200px;
  background-size: contain;
  background-position: bottom left;
  transform-origin: 50% -100%;
  background-repeat: no-repeat;
  background-image: url(/images/qiuqian.png);
  transform: rotate(-10deg);
  animation: shake-decoration 2s infinite alternate;
}
</style>

