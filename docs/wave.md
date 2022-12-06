---
navbar: false
---

<div class="div-wave"><div class="div-text">A Css Wave</div></div>

<style>
.page .theme-default-content {
  padding: 0;
  margin: 0;
}
.div-wave {
  position: relative;
  align-items: center;
  height: 50vh;
  width: 100vw;
  background-color: #76daff;
  overflow: hidden;
}
.div-wave::before, .div-wave::after {
  content: "";
  position: absolute;
  left: 50%;
  min-width: 300vw;
  min-height: 300vw;
  background-color: #fff;
  animation-name: rotate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.div-wave::before {
  bottom: 16vh;
  border-radius: 45%;
  animation-duration: 10s;
}
.div-wave::after {
  bottom: 12vh;
  opacity: .5;
  border-radius: 47%;
  animation-duration: 10s;
}
@keyframes rotate {
  0% {
      transform: translate(-50%, 0) rotateZ(0deg);
  }
  50% {
      transform: translate(-50%, -2%) rotateZ(180deg);
  }
  100% {
      transform: translate(-50%, 0%) rotateZ(360deg);
  }
}
.div-wave .div-text {
  position: relative;
  color: #333;
  z-index: 10;
  text-align: center;
  height: 50vh;
  line-height: 50vh;
  font-size: 8vw;
  text-shadow: 3px 3px 2px #999;
}
</style>
