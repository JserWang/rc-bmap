# Polyline

## points

- 类型：[Point](/api/#point)[]
- 默认值：`undefined`
- 描述：指定位置的坐标

## strokeColor

- 类型：`string`
- 默认值：`undefined`
- 描述：折线颜色

## strokeWeight

- 类型：`number`
- 默认值：`undefined`
- 描述：折线的宽度，以像素为单位

## strokeOpacity

- 类型：`number`
- 默认值：`undefined`
- 描述：折线的透明度，取值范围 0 - 1

## strokeStyle

- 类型：`string`
- 默认值：`undefined`
- 描述：折线的样式，solid 或 dashed

## massClear

- 类型：`boolean`
- 默认值：`true`
- 描述：是否在调用 map.clearOverlays 清除此覆盖物

## editing

- 类型：`boolean`
- 默认值：`false`
- 描述：是否启用线编辑

## clicking

- 类型：`boolean`
- 默认值：`true`
- 描述：是否响应点击事件

## event

- 类型：`Object`
- 默认值：`undefined`
- 描述：[绑定事件](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11)

| 事件       | 参数                              | 描述                             |
| ---------- | --------------------------------- | -------------------------------- |
| click      | event{type, target, point, pixel} | 点击折线后会触发此事件           |
| dblclick   | event{type, target, point, pixel} | 双击折线后会触发此事件           |
| mousedown  | event{type, target, point, pixel} | 鼠标在折线上按下触发此事件       |
| mouseup    | event{type, target, point, pixel} | 鼠标在折线释放触发此事件         |
| mouseout   | event{type, target, point, pixel} | 鼠标离开折线时触发此事件         |
| mouseover  | event{type, target, point, pixel} | 当鼠标进入折线区域时会触发此事件 |
| remove     | event{type, target}               | 移除折线时触发                   |
| lineupdate | event{type, target}               | 覆盖物的属性发生变化时触发       |
