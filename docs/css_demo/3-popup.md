---
lang: zh-CN
title: 弹框
sidebarDepth: 0
---

<a href="#popup_target">打开弹框</a>
<section id="popup_target" class="popup-container">
  <div class="popup">
    <a href="#_1-弹框" class="back">关闭弹框</a>
  </div>
</section>

**重点：**

1. `:target`选择器

`:target` 可以选择当前的 `#` 锚点，
配合 `display: none / flex;` 切换弹框遮罩的展示。

2. flex 布局

弹框遮罩使用flex居中布局，弹框内容包含在内。

:::: code-group
::: code-group-item HTML
```html
<a href="#popup_target">打开弹框</a>
<section id="popup_target" class="popup-container">
  <div class="popup">
    <a href="#" class="back">关闭弹框</a>
  </div>
</section>
```
:::
::: code-group-item CSS
```css{1-3,9}
.popup-container:target {
  display: flex;
}
.popup-container {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: hsla(0, 0%, 40%, 0.6);
}
.popup {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  background-color: #e5e5e5;
  border-radius: 10px;
}
```
:::
::::


<style scoped>
.popup-container:target {
  display: flex;
}
.popup-container {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: hsla(0, 0%, 40%, 0.6);
}
.popup {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  background-color: #e5e5e5;
  border-radius: 10px;
}
</style>
