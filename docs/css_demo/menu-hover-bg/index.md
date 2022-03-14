---
lang: zh-CN
title: 悬停背景菜单
sidebarDepth: 0
---

<section class="menu-bg-container">
  <ul>
    <li class="menu-bg-item">
      <a href="#" data-text="home">home</a>
    </li>
    <li class="menu-bg-item">
      <a href="#" data-text="about">about</a>
    </li>
    <li class="menu-bg-item">
      <a href="#" data-text="service">service</a>
    </li>
    <li class="menu-bg-item">
      <a href="#" data-text="team">team</a>
    </li>
    <li class="menu-bg-item">
      <a href="#" data-text="contact">contact</a>
    </li>
  </ul>
</section>

<style scoped>
.menu-bg-container {
  position: relative;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.menu-bg-container ul {
  display: flex;
  flex-direction: column;
  margin: 0;
  line-height: 1.2;
}
.menu-bg-item {
  list-style: none;
}
.menu-bg-item a {
  display: block;
  text-decoration: none;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
}
.menu-bg-item a::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  font-size: 3em;
  color: #2196f3;
  opacity: 0;
  line-height: 200px;
  transition: 0.5s;
}
.menu-bg-item:hover a::before {
  opacity: 1;
}
html.dark .menu-bg-item a {
  color: #fff;
}
</style>


**重点：**

1. `position="absolute"`

相对于最近position不为static的父级元素来定位。  
本例中，五个元素的`::before`相对于共同的外层容器元素定位。

:::: code-group
::: code-group-item HTML
@[code{18-36} html](./index.html)
:::
::: code-group-item CSS
@[code{1-45} css{2,30,44}](./style.css)
:::
::::

