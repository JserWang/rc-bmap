# PointCollection

## points

- 类型：[Point](/api/#point)[]
- 默认值：`undefined`
- 描述：点集合

## shape

- 类型：[Enum](/guide/constants.html#shapetype)
- 默认值：`undefined`
- 描述：海量点的预设形状

## size

- 类型：[Enum](/guide/constants.html#sizetype)
- 默认值：`undefined`
- 描述：海量点的预设尺寸

## color

- 类型：`string`
- 默认值：`'#fa937e'`
- 描述：海量点的颜色

## events

- 类型：`Object`
- 默认值：`undefined`
- 描述：[绑定事件](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b20)

| 事件      | 参数                      | 描述                     |
| --------- | ------------------------- | ------------------------ |
| click     | event{type, target,point} | 鼠标点击点时会触发此事件 |
| mouseover | event{type, target,point} | 鼠标移入点时会触发该事件 |
| mouseout  | event{type, target,point} | 鼠标移出点时会触发该事件 |
