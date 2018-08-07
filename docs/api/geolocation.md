# Geolocation

## anchor
* 类型 `Enum`
* 默认值 [ControlAnchor](/guide/constants.html#controlanchor).BOTTOM_LEFT
* 描述 	控件的停靠位置，默认定位到地图的右下角

## offset
* 类型 `Object`
* 默认值 `{ width: 0, height: 0 }`
* 描述 控件的水平偏移值

## showAddressBar
* 类型 `boolean`
* 默认值 `true`
* 描述 是否显示定位信息面板。

## autoLocation
* 类型 `boolean`
* 默认值 `false`
* 描述 添加控件时是否进行定位。

## locationIcon
* 类型 `Icon`
* 默认值 `undefined`
* 描述 类型 `Icon` 字面量值
``` js
const icon = {
  url: 'http://api0.map.bdimg.com/images/copyright_logo.png',
  size: { width: 100, height: 100 },
  opts: {
    imageSize: { width, height },,
    imageOffset: { width, height },,
    infoWindowAnchor: { width, height },
    printImageUrl: "",
  }
};

```

## events
* 类型 `Object`
* 默认值 `undefined`
* 描述 为地图[绑定事件](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b5)
