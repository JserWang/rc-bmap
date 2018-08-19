# Boundary

## name

- 类型 `string`
- 默认值 `undefined`
- 描述 行政区域名字

## onError

- 类型 `Function`
- 默认值 `undefined`
- 描述 初始化失败回调

## autoViewport

- 类型 `boolean`
- 默认值 `undefined`
- 描述 加完成后是否自动移动

## strokeColor

- 类型 `string`
- 默认值 `undefined`
- 描述 边线颜色

## fillColor

- 类型 `string`
- 默认值 `undefined`
- 描述 填充颜色。当参数为空时，圆形将没有填充效果

## strokeWeight

- 类型：`number`
- 默认值：`undefined`
- 描述：边线的宽度，以像素为单位

## strokeOpacity

- 类型：`number`
- 默认值：`undefined`
- 描述：边线透明度，取值范围 0 - 1

## fillOpacity

- 类型：`number`
- 默认值：`undefined`
- 描述：填充的透明度，取值范围 0 - 1

## strokeStyle

- 类型：`string`
- 默认值：`undefined`
- 描述：边线的样式，solid 或 dashed

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

## events

- 类型：`Object`
- 默认值：`undefined`
- 描述：[绑定事件](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b54)

| 事件       | 参数                              | 描述                               |
| ---------- | --------------------------------- | ---------------------------------- |
| click      | event{type, target, point, pixel} | 点击多边形后会触发此事件           |
| dblclick   | event{type, target, point, pixel} | 双击多边形后会触发此事件           |
| mousedown  | event{type, target, point, pixel} | 鼠标在多边形上按下触发此事件       |
| mouseup    | event{type, target, point, pixel} | 鼠标在多边形释放触发此事件         |
| mouseout   | event{type, target, point, pixel} | 鼠标离开多边形时触发此事件         |
| mouseover  | event{type, target, point, pixel} | 当鼠标进入多边形区域时会触发此事件 |
| remove     | event{type, target}               | 移除多边形时触发                   |
| lineupdate | event{type, target}               | 覆盖物的属性发生变化时触发         |
