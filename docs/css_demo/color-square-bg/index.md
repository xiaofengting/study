---
lang: zh-CN
title: 上浮的方块背景
sidebarDepth: 0
---

<section class="square-container">
  <div style="--square-clr: #00ade1">
    <div style="--square-width: 29.1428px;--square-top: 139.245px;--square-left: 111.166px"
      class="square"></div>
    <div style="--square-width: 14.1958px;--square-top: 255.527px;--square-left: 70.5486px"
      class="square"></div>
    <div style="--square-width: 12.9605px;--square-top: 278.053px;--square-left: 304.432px"
      class="square"></div>
    <div style="--square-width: 14.4174px;--square-top: 211.741px;--square-left: 157.492px"
      class="square"></div>
    <div style="--square-width: 46.6886px;--square-top: 72.3386px;--square-left: 219.376px"
      class="square"></div>
    <div style="--square-width: 46.5338px;--square-top: 208.181px;--square-left: 76.4858px"
      class="square"></div>
    <div style="--square-width: 11.1528px;--square-top: 159.194px;--square-left: 268.805px"
      class="square"></div>
    <div style="--square-width: 36.7187px;--square-top: 211.735px;--square-left: 236.819px"
      class="square"></div>
  </div>
  <div style="--square-clr: #ffdd1c">
    <div style="--square-width: 20.9258px;--square-top: 29.152px;--square-left: 59.2898px"
      class="square"></div>
    <div style="--square-width: 48.2854px;--square-top: 52.6189px;--square-left: 241.678px"
      class="square"></div>
    <div style="--square-width: 31.4971px;--square-top: 37.2805px;--square-left: 105.165px"
      class="square"></div>
    <div style="--square-width: 12.4987px;--square-top: 114.353px;--square-left: 272.986px"
      class="square"></div>
    <div style="--square-width: 13.3769px;--square-top: 287.25px;--square-left: 190.459px"
      class="square"></div>
    <div style="--square-width: 17.3405px;--square-top: 6.31758px;--square-left: 209.075px"
      class="square"></div>
    <div style="--square-width: 36.8997px;--square-top: 189.012px;--square-left: 329.246px"
      class="square"></div>
    <div style="--square-width: 14.319px;--square-top: 142.392px;--square-left: 374.442px"
      class="square"></div>
  </div>
  <div style="--square-clr: #00dc82">
    <div style="--square-width: 41.4074px;--square-top: 221.601px;--square-left: 41.1165px"
      class="square"></div>
    <div style="--square-width: 29.3183px;--square-top: 286.311px;--square-left: 159.656px"
      class="square"></div>
    <div style="--square-width: 29.0176px;--square-top: 184.874px;--square-left: 176.169px"
      class="square"></div>
    <div style="--square-width: 33.3529px;--square-top: 99.3757px;--square-left: 52.1612px"
      class="square"></div>
    <div style="--square-width: 48.5515px;--square-top: 100.878px;--square-left: 197.682px"
      class="square"></div>
    <div style="--square-width: 47.0393px;--square-top: 284.958px;--square-left: 134.359px"
      class="square"></div>
    <div style="--square-width: 36.6437px;--square-top: 194.69px;--square-left: 151.853px"
      class="square"></div>
    <div style="--square-width: 19.1926px;--square-top: 195.621px;--square-left: 42.9305px"
      class="square"></div>
  </div>
  <div style="--square-clr: #dc00d4">
    <div style="--square-width: 16.4371px;--square-top: 23.2326px;--square-left: 86.4207px"
      class="square"></div>
    <div style="--square-width: 23.8054px;--square-top: 128.988px;--square-left: 268.957px"
      class="square"></div>
    <div style="--square-width: 11.7464px;--square-top: 101.716px;--square-left: 27.8849px"
      class="square"></div>
    <div style="--square-width: 27.3413px;--square-top: 42.7529px;--square-left: 368.557px"
      class="square"></div>
    <div style="--square-width: 44.8875px;--square-top: 179.163px;--square-left: 93.8491px"
      class="square"></div>
    <div style="--square-width: 35.4839px;--square-top: 150.453px;--square-left: 219.708px"
      class="square"></div>
    <div style="--square-width: 27.7506px;--square-top: 196.518px;--square-left: 59.7307px"
      class="square"></div>
    <div style="--square-width: 30.8406px;--square-top: 214.999px;--square-left: 275.623px"
      class="square"></div>
  </div>
</section>

<style>
@keyframes color-square-bg-up {
  0% {
    transform: scale(0) translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1) translateY(-500%) rotate(360deg);
  }
}
</style>

<style scoped>
.square-container {
  height: 300px;
  overflow: hidden;
  position: relative;
}
.square {
  width: var(--square-width);
  height: var(--square-width);
  top: var(--square-top);
  left: var(--square-left);
  position: absolute;
  pointer-events: none;
  background-color: var(--square-clr);
  animation: color-square-bg-up 5s linear infinite;
}
</style>


**重点：**

1. 了解CSS变量

本例显然使用 JavaScript 创建元素更好。


:::: code-group
::: code-group-item HTML
@[code{18-59} html](./index.html)
:::
::: code-group-item CSS
@[code css](./style.css)
:::
::::

