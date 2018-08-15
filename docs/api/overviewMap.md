# OverviewMap

## anchor

- 类型：[Enum](/guide/constants.html#controlanchor)
- 默认值：[ControlAnchor](/guide/constants.html#controlanchor).BOTTOM_LEFT
- 描述：控件的停靠位置，默认定位到地图的右下角

## offset

- 类型：[Size](/api/#size)
- 默认值：`{ width: 0, height: 0 }`
- 描述：控件的偏移值

## size

- 类型：[Size](/api/#size)
- 默认值：`{ width: 150, height: 150 }`
- 描述：缩略地图控件的大小

## isOpen

- 类型：`boolean`
- 默认值：`false`
- 描述：缩略地图添加到地图后的开合状态

## events

- 类型：`Object`
- 默认值：`undefined`
- 描述：[绑定事件](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b7)

| 事件         | 描述                                     |
| ------------ | ---------------------------------------- |
| viewchanged  | 缩略地图开合状态发生变化后触发此事件     |
| viewchanging | 缩略地图开合状态发生变化过程中触发此事件 |
