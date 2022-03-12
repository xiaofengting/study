---
lang: zh-CN
title: 苹果设备切换展示
sidebarDepth: 0
---

<div class="container">
  <span class="choice ipad">ipad</span>
  <span class="choice mini">mini</span>
  <span class="choice iphone">iphone</span>

  <div class="device"></div>
</div>


**重点：**

1. `::before`、`::after`

这两个添加了content的伪类，会出现在布局树中，可以当作div控制样式。  
本例中，苹果设备的展示图分成三部分构成：div本体、`::before`、`::after`。  
其中上方 `· ——` 的效果，12px左边框、2px右边框、2px灰色宽度即可完成。

2. `~` 选择器

`~` 可以选择排着这之后的所有兄弟元素。可以和 `:hover` 结合使用。

本例中，iphone按钮为第三个子元素，默认选中，不会切换设备样式。  
设备展示图 为第四个子元素。  
ipad、mini按钮实际是前两个元素，利用`~`控制 iphone按钮 和 设备展示图。


:::: code-group
::: code-group-item HTML
```html
<div class="container">
  <span class="choice ipad">ipad</span>
  <span class="choice mini">mini</span>
  <span class="choice iphone">iphone</span>

  <div class="device"></div>
</div>
```
:::
::: code-group-item hover前样式
```css
/* 基础样式 */
.container {
  position: relative;
  width: 200px;
  height: 200px;
}
.choice {
  line-height: 32px;
  position: absolute;
  display: inline-block;
  width: 80px;
  height: 32px;
  cursor: pointer;
  transition: 0.2s;
  text-align: center;
  color: silver;
  border-radius: 10px;
  background-color: #484f5e;
}
.iphone {
  top: 0;
  left: 0;
  color: var(--c-brand);
}
.device {
  top: 0;
  left: 100px;
}
.mini {
  top: 40px;
  left: 0;
}
.ipad {
  top: 80px;
  left: 0;
}
.device,
.device::before,
.device::after {
  transition: 0.4s cubic-bezier(0.5, 1.7, 0.5, 1.2);
}
// 初始为 样式1
.device {
  position: relative;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 59px;
  height: 124px;
  margin: 0 auto;
  border: solid #484f5e;
  border-width: 18px 4px;
  border-radius: 6px;
  background: linear-gradient(120deg, #ddd 30%, #ccc 30%);
}
.device::before {
  position: absolute;
  top: -10px;
  width: 2px;
  height: 2px;
  content: "";
  border: solid #a5adbe;
  border-width: 0 12px 0 2px;
}
.device::after {
  position: absolute;
  bottom: -13px;
  width: 8px;
  height: 8px;
  content: "";
  border-radius: 50%;
  background-color: white;
}
```
:::
::: code-group-item hover后样式
```css
/* hover后 选择按钮样式 */
.mini:hover,
.ipad:hover {
  color: var(--c-brand);
}
.mini:hover ~ .iphone,
.ipad:hover ~ .iphone {
  color: silver !important;
}
/* hover后 苹果设备样式 */
.mini:hover ~ .device {
  width: 93px;
  height: 138px;
  border: solid #484f5e;
  border-width: 14px 5px;
  border-radius: 10px;
}
.mini:hover ~ .device::before {
  top: -8px;
}
.mini:hover ~ .device::after {
  bottom: -11px;
}
.ipad:hover ~ .device {
  width: 134px;
  height: 176px;
  border: solid #484f5e;
  border-width: 18px 13px;
  border-radius: 12px;
}
.ipad:hover ~ .device::before {
  top: -10px;
}
.ipad:hover ~ .device::after {
  bottom: -13px;
}
```
:::
::::


<style scoped>
/* 基础样式 */
.container {
  position: relative;
  width: 200px;
  height: 200px;
}
.choice {
  line-height: 32px;
  position: absolute;
  display: inline-block;
  width: 80px;
  height: 32px;
  cursor: pointer;
  transition: 0.2s;
  text-align: center;
  color: silver;
  border-radius: 10px;
  background-color: #484f5e;
}
.iphone {
  top: 0;
  left: 0;
  color: var(--c-brand);
}
.device {
  top: 0;
  left: 100px;
}
.mini {
  top: 40px;
  left: 0;
}
.ipad {
  top: 80px;
  left: 0;
}
.device,
.device::before,
.device::after {
  transition: 0.4s cubic-bezier(0.5, 1.7, 0.5, 1.2);
}
.device {
  position: relative;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 59px;
  height: 124px;
  margin: 0 auto;
  border: solid #484f5e;
  border-width: 18px 4px;
  border-radius: 6px;
  background: linear-gradient(120deg, #ddd 30%, #ccc 30%);
}
.device::before {
  position: absolute;
  top: -10px;
  width: 2px;
  height: 2px;
  content: "";
  border: solid #a5adbe;
  border-width: 0 12px 0 2px;
}
.device::after {
  position: absolute;
  bottom: -13px;
  width: 8px;
  height: 8px;
  content: "";
  border-radius: 50%;
  background-color: white;
}
/* hover后 选择按钮样式 */
.mini:hover,
.ipad:hover {
  color: var(--c-brand);
}
.mini:hover ~ .iphone,
.ipad:hover ~ .iphone {
  color: silver !important;
}
/* hover后 苹果设备样式 */
.mini:hover ~ .device {
  width: 93px;
  height: 138px;
  border: solid #484f5e;
  border-width: 14px 5px;
  border-radius: 10px;
}
.mini:hover ~ .device::before {
  top: -8px;
}
.mini:hover ~ .device::after {
  bottom: -11px;
}
.ipad:hover ~ .device {
  width: 134px;
  height: 176px;
  border: solid #484f5e;
  border-width: 18px 13px;
  border-radius: 12px;
}
.ipad:hover ~ .device::before {
  top: -10px;
}
.ipad:hover ~ .device::after {
  bottom: -13px;
}
</style>
