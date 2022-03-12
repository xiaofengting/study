---
lang: zh-CN
title: 项目结构
description: 页面的描述
---

每个页面由 4 个基本文件组成：  
1、`.js` 文件：页面的脚本文件，存放页面的数据、事件处理函数等。  
2、`.json` 文件：当前页面的配置文件，配置窗口的外观、表现等。  
3、`.wxml` 文件：页面的模板结构文件。  
4、`.wxss` 文件：当前页面的样式表文件。

常见组件：  
`view`、`scroll-view`、`swiper`、`text`、`button`、`image`。

数据绑定：  
1、在.js文件， `data` 对象 中定义数据。  
2、在.wxml文件，使用 `{{ }}` 使用数据。

事件绑定：  
1、在.js文件，`btnTapHandler(e) { console.log(e) }`  
2、在.wxml文件：  
`<button type="primary" bindtap="btnTapHandler">按钮</button>`

常用的事件：  
1、tap：手指触摸后马上离开，类似click  
绑定方式：bindtap 或 bind:tap  
2、input：文本框的输入事件  
绑定方式：bindinput 或 bind:input  
3、change：单选框、多选框  
绑定方式：bindchange 或 bind:change






