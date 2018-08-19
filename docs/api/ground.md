# Ground

## bounds

- 类型：[Bounds](/api/#bounds)
- 默认值：`undefined`
- 描述：设置图层显示的矩形区域

## imageURL

- 类型：`string`
- 默认值：`undefined`
- 描述：图层地址

## opacity

- 类型：`number`
- 默认值：`undefined`
- 描述：图层透明度

## maxZoom

- 类型：`number`
- 默认值：`undefined`
- 描述：图层显示的最大级别

## minZoom

- 类型：`number`
- 默认值：`undefined`
- 描述：图层显示的最小级别

## events

- 类型：`Object`
- 默认值：`undefined`
- 描述 [绑定事件](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b18)

| 事件     | 参数                | 描述                       |
| -------- | ------------------- | -------------------------- |
| click    | event{type, target} | 鼠标点击图层后会触发此事件 |
| dblclick | event{type, target} | 鼠标双击图层后会触发此事件 |
