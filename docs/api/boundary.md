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

| 方法                                  | 返回值 | 描述                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| get(name: String, callback: function) | null   | 返回行政区域的边界。 name: 查询省、直辖市、地级市、或县的名称。 callback:执行查询后，数据返回到客户端的回调函数，数据以回调函数的参数形式返回。返回结果是一个数组，数据格式如下： arr[0] = "x1, y1; x2, y2; x3, y3; ..." arr[1] = "x1, y1; x2, y2; x3, y3; ..." arr[2] = "x1, y1; x2, y2; ..." … 否则回调函数的参数为 null |
