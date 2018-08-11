# Geolocation

## anchor
* 类型 [Enum](/guide/constants.html#controlanchor)
* 默认值 [ControlAnchor](/guide/constants.html#controlanchor).BOTTOM_LEFT
* 描述 控件的停靠位置，默认定位到地图的右下角

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
* 类型 `Icon`字面量值
* 默认值 `undefined`
* 描述 自定义定位中心点的Icon样式
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
* 描述 回调函数

| 事件名 | 描述 |
| ----- | --- |
| locationSuccess | 定位成功后触发此事件 |
| locationError | 定位失败后触发此事件 |
