# 安装

## 兼容性
当前针对BaiduMap **v3.0** 进行封装，请确保您的使用版本为3.0，3.0与2.0相比，部分内部api已废弃或变更。

## 申请AK
使用百度地图的前，请确保您已拥有一个AK，若您没有暂时还没有，可以[点击链接进行申请](http://lbsyun.baidu.com/apiconsole/key)。

::: tip 友情提示：
若您想在任何地方使用您所申请的AK时，在申请AK的页面中白名单可以填写: 0.0.0.0
:::

## 添加依赖
``` bash
# 安装
yarn add rc-bmap # 或者：npm install --save rc-bmap

```

## 开发版本
::: tip 提示
当您想通过自己的封装或者对源码进行修改时，才需要进行此步骤
:::
``` bash
git clone https://github.com/JserWang/rc-bmap.git
cd rc-bmap
git checkout dev
npm run build # 这时，您可以看到最新的开发版本lib

```
