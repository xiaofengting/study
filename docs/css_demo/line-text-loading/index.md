---
lang: zh-CN
title: 线填充文字loading
sidebarDepth: 0
---

<p class="text-loading" data-text="Loading...">Loading...</p>

<style>
@keyframes line-text-loading {
  0%,10%,100% {
    width: 0%;
  }
  70%,90% {
    width: 100%;
  }
}
</style>

<style scoped>
.text-loading {
  position: relative;
  font-size: 40px;
  color: transparent;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  display: inline-block;
}
.text-loading::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: #01fe87;
  -webkit-text-stroke: 1px #01fe87;
  border-right: 2px solid #01fe87;
  overflow: hidden;
  animation: line-text-loading 6s linear infinite;
}
html.dark .text-loading {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
}
</style>


**重点：**

1. `-webkit-text-stroke` 文字描边效果。

本例中，下层文字开启了文字描边效果。  
上层文字覆盖下层文字，使用改变宽度的动画。


:::: code-group
::: code-group-item HTML
@[code{18-18} html](./index.html)
:::
::: code-group-item CSS
@[code css](./style.css)
:::
::::

