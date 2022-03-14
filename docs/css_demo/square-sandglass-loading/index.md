---
lang: zh-CN
title: 方块沙漏loading
sidebarDepth: 0
---

<div class="loader-container">
  <div class="loader"></div>
</div>

<style>
@keyframes square-sandglass {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  25% {
    transform: translate(-50%, -50%) rotate(180deg);
  }
  50% {
    transform: translate(-50%, -50%) rotate(180deg);
  }
  75% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes square-sandglass-bg {
  0% {
    height: 0;
  }
  25% {
    height: 0;
  }
  50% {
    height: 42px;
  }
  75% {
    height: 42px;
  }
  100% {
    height: 0;
  }
}
</style>

<style scoped>
.loader-container {
  position: relative;
  height: 200px;
}
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 3px solid #262626;
  animation: square-sandglass 2s linear infinite;
}
.loader::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  margin: -1px;
  height: 42px;
  width: 42px;
  background-color: #262626;
  animation: square-sandglass-bg 2s linear infinite;
}
html.dark .loader {
  border: 3px solid #fff;
}
html.dark .loader::before {
  background-color: #fff;
}
</style>


**重点：**

1. Chrome上不知为何有 `::after` 与border有空隙。

使用 `margin: -1px;` 填补空隙。


:::: code-group
::: code-group-item HTML
@[code{18-20} html](./index.html)
:::
::: code-group-item CSS
@[code css](./style.css)
:::
::::

