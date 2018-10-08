# React BaiduMap

<p align="center">
  <img src="https://bmap.jser-club.com/home.png" width="200px">
</p>
<p align="center">基于 React 的百度地图组件</p>

[![npm](https://img.shields.io/npm/v/rc-bmap.svg)]()
[![license](https://img.shields.io/github/license/jserwang/rc-bmap.svg)]()

## 文档

[https://bmap.jser-club.com](https://bmap.jser-club.com)

next分支正在进行重构，master为当前最新release分支。

## 协议

[MIT 许可证](https://opensource.org/licenses/MIT)

## 本地开发

与`demo`结合的最佳实践。

1. 将`demo`工程`clone`至本地。
  ``` bash
  git clone https://github.com/jser-club/rc-bmap-demo.git
  ```
2. 安装`demo`工程所需依赖。
  ``` bash
  cd 你刚clone的工程目录
  yarn install
  ```
3. 进入`rc-bmap`工程的目录，执行
  ``` bash
  yarn link
  ```
4. 进入`rc-bmap-dmeo`工程目录执行
  ``` bash
  yarn link rc-bmap
  ```
5. 修改完`rc-bmap`的源码后，在`rc-bmap`工程执行
  ``` bash
  yarn run build
  ```
6. 在`demo`重新点击按钮运行，即可看到最新修改后的效果
