# React BaiduMap

<p align="center">
  <img src="https://bmap.jser-club.com/home.png" width="200px">
</p>
<p align="center">基于 React 的百度地图组件</p>

[![npm](https://img.shields.io/npm/v/rc-bmap.svg)]()
[![license](https://img.shields.io/github/license/jserwang/rc-bmap.svg)]()

## 文档

[https://bmap.jser-club.com](https://bmap.jser-club.com)

## 开始

### 安装

```bash
yarn add rc-bmap # 或者：npm install --save rc-bmap
```

### 使用
``` js
import React from 'react';
import { render } from 'react-dom';
import { Map } from 'rc-bmap';

render(<Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv" />, 
  document.getElementById('app')
);

```

更多用法，见[官网](https://bmap.jser-club.com)。

更多示例，见[示例](https://bmap.jser-club.com/examples/)

## 协议

[MIT 许可证](https://opensource.org/licenses/MIT)

## 如何本地启动demo

* 进入`examples`目录，执行 

```bash
yarn install # 安装相关依赖
npm run dev # 启动本地服务
```

## 如何启动本地文档
* 进入`docs`目录，执行

```bash
vuepress dev # 文档由vuepress驱动
```
