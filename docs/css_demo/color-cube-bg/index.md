---
lang: zh-CN
title: 上浮的方块背景
sidebarDepth: 0
---

<section class="square-container">
  <div style="--cube-clr: #00ade1">
    <div style="--cube-width: 29.1428px;--cube-top: 139.245px;--cube-left: 111.166px"
      class="square"></div>
    <div style="--cube-width: 14.1958px;--cube-top: 255.527px;--cube-left: 70.5486px"
      class="square"></div>
    <div style="--cube-width: 12.9605px;--cube-top: 278.053px;--cube-left: 304.432px"
      class="square"></div>
    <div style="--cube-width: 14.4174px;--cube-top: 211.741px;--cube-left: 157.492px"
      class="square"></div>
    <div style="--cube-width: 46.6886px;--cube-top: 72.3386px;--cube-left: 219.376px"
      class="square"></div>
    <div style="--cube-width: 46.5338px;--cube-top: 208.181px;--cube-left: 76.4858px"
      class="square"></div>
    <div style="--cube-width: 11.1528px;--cube-top: 159.194px;--cube-left: 268.805px"
      class="square"></div>
    <div style="--cube-width: 36.7187px;--cube-top: 211.735px;--cube-left: 236.819px"
      class="square"></div>
  </div>
  <div style="--cube-clr: #ffdd1c">
    <div style="--cube-width: 20.9258px;--cube-top: 29.152px;--cube-left: 59.2898px"
      class="square"></div>
    <div style="--cube-width: 48.2854px;--cube-top: 52.6189px;--cube-left: 241.678px"
      class="square"></div>
    <div style="--cube-width: 31.4971px;--cube-top: 37.2805px;--cube-left: 105.165px"
      class="square"></div>
    <div style="--cube-width: 12.4987px;--cube-top: 114.353px;--cube-left: 272.986px"
      class="square"></div>
    <div style="--cube-width: 13.3769px;--cube-top: 287.25px;--cube-left: 190.459px"
      class="square"></div>
    <div style="--cube-width: 17.3405px;--cube-top: 6.31758px;--cube-left: 209.075px"
      class="square"></div>
    <div style="--cube-width: 36.8997px;--cube-top: 189.012px;--cube-left: 329.246px"
      class="square"></div>
    <div style="--cube-width: 14.319px;--cube-top: 142.392px;--cube-left: 374.442px"
      class="square"></div>
  </div>
  <div style="--cube-clr: #00dc82">
    <div style="--cube-width: 41.4074px;--cube-top: 221.601px;--cube-left: 41.1165px"
      class="square"></div>
    <div style="--cube-width: 29.3183px;--cube-top: 286.311px;--cube-left: 159.656px"
      class="square"></div>
    <div style="--cube-width: 29.0176px;--cube-top: 184.874px;--cube-left: 176.169px"
      class="square"></div>
    <div style="--cube-width: 33.3529px;--cube-top: 99.3757px;--cube-left: 52.1612px"
      class="square"></div>
    <div style="--cube-width: 48.5515px;--cube-top: 100.878px;--cube-left: 197.682px"
      class="square"></div>
    <div style="--cube-width: 47.0393px;--cube-top: 284.958px;--cube-left: 134.359px"
      class="square"></div>
    <div style="--cube-width: 36.6437px;--cube-top: 194.69px;--cube-left: 151.853px"
      class="square"></div>
    <div style="--cube-width: 19.1926px;--cube-top: 195.621px;--cube-left: 42.9305px"
      class="square"></div>
  </div>
  <div style="--cube-clr: #dc00d4">
    <div style="--cube-width: 16.4371px;--cube-top: 23.2326px;--cube-left: 86.4207px"
      class="square"></div>
    <div style="--cube-width: 23.8054px;--cube-top: 128.988px;--cube-left: 268.957px"
      class="square"></div>
    <div style="--cube-width: 11.7464px;--cube-top: 101.716px;--cube-left: 27.8849px"
      class="square"></div>
    <div style="--cube-width: 27.3413px;--cube-top: 42.7529px;--cube-left: 368.557px"
      class="square"></div>
    <div style="--cube-width: 44.8875px;--cube-top: 179.163px;--cube-left: 93.8491px"
      class="square"></div>
    <div style="--cube-width: 35.4839px;--cube-top: 150.453px;--cube-left: 219.708px"
      class="square"></div>
    <div style="--cube-width: 27.7506px;--cube-top: 196.518px;--cube-left: 59.7307px"
      class="square"></div>
    <div style="--cube-width: 30.8406px;--cube-top: 214.999px;--cube-left: 275.623px"
      class="square"></div>
  </div>
</section>

<style>
@keyframes color-cube-bg-up {
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
  width: 450px;
  overflow: hidden;
  position: relative;
}
.square {
  width: var(--cube-width);
  height: var(--cube-width);
  top: var(--cube-top);
  left: var(--cube-left);
  position: absolute;
  pointer-events: none;
  background-color: var(--cube-clr);
  animation: color-cube-bg-up 5s linear infinite;
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

