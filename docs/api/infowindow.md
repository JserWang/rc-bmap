# InfoWindow

## title

- 类型：`string`
- 默认值：`undefined`
- 描述：信息窗标题文字，支持 HTML 内容

## content

- 类型：`string`
- 默认值：`undefined`
- 描述：信息窗显示文字，支持 HTML 内容

## point

- 类型：[Point](/api/#point)
- 默认值：`undefined`
- 描述：显示位置坐标

## offset

- 类型：[Size](/api/#size)
- 默认值：`undefined`
- 描述：信息窗位置偏移值

## width

- 类型：`number`
- 默认值：`undefined`
- 描述：信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为 0，则信息窗口的宽度将按照其内容自动调整

## height

- 类型：`number`
- 默认值：`undefined`
- 描述：信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为 0，则信息窗口的高度将按照其内容自动调整

## maxWidth

- 类型：`number`
- 默认值：`undefined`
- 描述：信息窗最大化时的宽度，单位像素。取值范围：220 - 730

## autoPan

- 类型：`boolean`
- 默认值：`true`
- 描述：是否开启信息窗口打开时地图自动移动

## closeOnClick

- 类型：`boolean`
- 默认值：`true`
- 描述：是否开启点击地图关闭信息窗口

## displayMessage

- 类型：`boolean`
- 默认值：`true`
- 描述：是否在信息窗里显示短信发送按钮

## message

- 类型：`string`
- 默认值：`true`
- 描述：自定义部分的短信内容

## events

- 类型：`Object`
- 默认值：`undefined`
- 描述：[绑定事件](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7)

| 事件       | 参数                       | 描述                               |
| ---------- | -------------------------- | ---------------------------------- |
| close      | event{type, target, point} | 信息窗口被关闭时触发此事件         |
| open       | event{type, target, point} | 信息窗口被打开时触发此事件         |
| maximize   | event{type, target}        | 信息窗口最大化后触发此事件         |
| restore    | event{type, target}        | 信息窗口还原时触发此事件           |
| clickclose | event{type, target}        | 点击信息窗口的关闭按钮时触发此事件 |
