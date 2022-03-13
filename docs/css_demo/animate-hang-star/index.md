---
lang: zh-CN
title: 挂着的星星
sidebarDepth: 0
---

<div class="decoration-hang decoration-hang-moon hang-1"></div>
<div class="decoration-hang hang-2"></div>
<div class="qiuqian"></div>

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
@[code{18-20} html](./index.html)
:::
::: code-group-item CSS
@[code css](./style.css)
:::
::::

