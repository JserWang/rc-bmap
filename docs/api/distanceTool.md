# DistanceTool

## followText

- 类型：`string`
- 默认值：`"单击确定地点，双击结束"`
- 描述：测距过程中，提示框文字

## unit

- 类型：`string`
- 默认值：`"metric"`
- 描述：测距结果所用的单位制，"metric"表示米制，"us"表示美国传统单位

## lineColor

- 类型：`string`
- 默认值：`"#ff6319"`
- 描述：折线颜色

## lineStroke

- 类型：`number`
- 默认值：`2`
- 描述：折线线宽

## opacity

- 类型：`number`
- 默认值：`0.8`
- 描述：折线透明度

## lineStyle

- 类型：`string`
- 默认值：`"solid"`
- 描述：`solid`或`dashed`

## cursor

- 类型：`string`
- 默认值：`"http://api.map.baidu.com/images/ruler.cur"`
- 描述：跟随的鼠标样式

## events

- 类型：`Object`
- 默认值：`undefined`
- 描述：绑定事件

| 事件名     | 描述                                       |
| ---------- | ------------------------------------------ |
| onaddpoint | 测距过程中，每次点击底图添加节点时触发     |
| ondrawend  | 测距时，每次双击底图结束当前测距折线时触发 |
