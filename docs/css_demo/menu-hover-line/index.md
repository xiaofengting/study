---
lang: zh-CN
title: 线填充悬停文字菜单
sidebarDepth: 0
---

<ul class="colorful-menu">
  <li style="--clr: #00ade1">
    <a href="#" data-text="&nbsp;&nbsp;HOME&nbsp;">&nbsp;&nbsp;HOME&nbsp;</a>
  </li>
  <li style="--clr: #ffdd1c">
    <a href="#" data-text="&nbsp;&nbsp;ABOUT&nbsp;">&nbsp;&nbsp;ABOUT&nbsp;</a>
  </li>
  <li style="--clr: #00dc82">
    <a href="#" data-text="&nbsp;&nbsp;SERVICES&nbsp;">&nbsp;&nbsp;SERVICES&nbsp;</a>
  </li>
  <li style="--clr: #dc00d4">
    <a href="#" data-text="&nbsp;&nbsp;CONTACT&nbsp;">&nbsp;&nbsp;CONTACT&nbsp;</a>
  </li>
</ul>

<style scoped>
.colorful-menu li {
  position: relative;
  list-style: none;
}
.colorful-menu li a {
  position: relative;
  font-size: 30px;
  text-decoration: none;
  overflow-wrap: normal;
  color: transparent;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
}
.colorful-menu li a::before {
  content: attr(data-text);
  position: absolute;
  color: var(--clr);
  z-index: 1;
  width: 0;
  overflow: hidden;
  transition: 1s;
  border-right: 8px solid var(--clr);
  -webkit-text-stroke: 1px var(--clr);
}
.colorful-menu li a:hover {
  text-decoration: none;
}
.colorful-menu li a:hover::before {
  width: 100%;
  filter: drop-shadow(0 0 25px var(--clr));
}
html.dark .colorful-menu li a {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
}
</style>


切换夜晚模式，效果更好。

**重点：**

1. 局部CSS变量

本例中，四个菜单项设置了同名的CSS变量`--clr`表示颜色，但值不同。  
用在了 `::before` 的字体颜色、文字描边颜色、右边框颜色、`drop-shadow`阴影颜色。

2. `-webkit-text-stroke` 文字描边效果

a标签中，color透明，`text-stroke`白色，有种字体镂空的效果。  
`::before`中，color和`text-stroke`同色，有种字体加粗的效果。

3. `drop-shadow()` 阴影滤镜。

这种滤镜可以给非透明部分增加阴影效果。  
不仅仅可以用于文字，也可用于有透明部分的图片。

:::: code-group
::: code-group-item HTML
@[code{18-31} html](./index.html)
:::
::: code-group-item CSS
@[code css{10,11,22,29}](./style.css)
:::
::::

