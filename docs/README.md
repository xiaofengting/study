---
home: true
heroImage: images/hero.png
heroText: 七海的小站
tagline: 萌新
actions:
  - text: 微信小程序
    link: /wxmp
    type: primary
---
<style lang="scss" scoped>
.hang-1 {
  left: 10%;
  height: 30%;
}
.hang-2 {
  left: 20%;
  height: 25%;
}
.hang-3 {
  right: 20%;
  height: 45%;
}
.hang-4 {
  right: 10%;
  height: 30%;
}
.decoration-hang {
  transform: translateY(-100%);
}
.rihe {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 170px;
  height: 300px;
  background-size: contain;
  background-position: bottom left;
  transform-origin: bottom left;
  background-repeat: no-repeat;
  background-image: url(images/rihe.png);
  transform: translate(0, 0);
  transition: transform 1s;
}
.shan {
  position: absolute;
  top: 120px;
  right: 45px;
  width: 30px;
  height: 20px;
  display: block;
  background-size: contain;
  background-position: bottom left;
  background-repeat: no-repeat;
  background-image: url(images/shan.png);
  animation: shanin-decoration 1s infinite;
}
html.dark {
  .shan {
    display: none;
  }
  .rihe {
    transform: translate(-70%, 70%);
  }
  .hang-1 {
    animation: down-decoration 0.6s ease 0.2s forwards;
  }
  .hang-2 {
    animation: down-decoration 0.6s ease 0.4s forwards;
  }
  .hang-3 {
    animation: down-decoration 0.6s ease 0.5s forwards;
  }
  .hang-4 {
    animation: down-decoration 0.6s ease 0.3s forwards;
  }
}
</style>

<div class="decoration-hang hang-1"></div>
<div class="decoration-hang hang-2"></div>
<div class="decoration-hang decoration-hang-moon hang-3"></div>
<div class="decoration-hang hang-4"></div>

<div class="rihe">
  <div class="shan"></div>
</div>

