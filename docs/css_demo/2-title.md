---
lang: zh-CN
title: 2. title提示气泡
sidebarDepth: 0
---

<p data-title="这里是很长的一段提示。这里是很长的一段提示。这里是很长的一段提示。这里是很长的一段提示" class="title-after">悬浮查看提示</p>

**重点：**

1. `::after`

普通的title没有太多效果，可使用`::after`实现。

2. `attr()`函数，获取元素属性值。

可用于`::after`等伪类获取原标签的内容。

本例中，p元素的data-title属性设置为需要展示的title内容，
`::after`的content设置为这个属性即可。


:::: code-group
::: code-group-item HTML
```html
<p
  data-title="这里是很长的一段提示。这里是很长的一段提示。这里是很长的一段提示。这里是很长的一段提示"
  class="title-after"
>
  悬浮查看提示
</p>
```
:::
::: code-group-item SCSS
```scss{2,5}
.title-after {
  position: relative;
}
.title-after:hover::after {
  content: attr(data-title);
  font-size: 14px;
  position: absolute;
  z-index: 1;
  top: 24px;
  left: 0;
  max-width: 160px;
  padding: 12px;
  border: 1px #aaa solid;
  border-radius: 10px;
  background-color: #ffc;
}
```
:::
::::


<style lang="scss" scoped>
.title-after {
  position: relative;
}
.title-after:hover::after {
  content: attr(data-title);
  font-size: 14px;
  position: absolute;
  z-index: 1;
  top: 24px;
  left: 0;
  max-width: 160px;
  padding: 12px;
  border: 1px #aaa solid;
  border-radius: 10px;
  background-color: #ffc;
}
</style>
