# Label

## offset

- 类型：[Size](/api/#size)
- 默认值：`{ width: 0, height: 0 }`
- 描述：文本标注的位置偏移值

## point

- 类型：[Point](/api/#point)
- 默认值：`undefined`
- 描述：文本标注的位置

## massClear

- 类型：`boolean`
- 默认值：`true`
- 描述：是否在调用 map.clearOverlays 清除此覆盖物

## content

- 类型：`string`
- 默认值：`undefined`
- 描述：显示标签

## title

- 类型：`string`
- 默认值：`undefined`
- 描述：鼠标悬浮显示文字

## zIndex

- 类型：`number`
- 默认值：`undefined`
- 描述：同 html 的 z-index

## style

- 类型：`Object`
- 默认值：`undefined`
- 描述：标签样式

## events

- 类型：`Object`
- 默认值：`undefined`
- 描述：[绑定事件](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b9)

| 事件       | 参数                | 描述                                 |
| ---------- | ------------------- | ------------------------------------ |
| click      | event{type, target} | 点击文本标注后会触发此事件           |
| dblclick   | event{type, target} | 双击文本标注后会触发此事件           |
| mousedown  | event{type, target} | 鼠标在文本标注上按下触发此事件       |
| mouseup    | event{type, target} | 鼠标在文本标注释放触发此事件         |
| mouseout   | event{type, target} | 鼠标离开文本标注时触发此事件         |
| mouseover  | event{type, target} | 当鼠标进入文本标注区域时会触发此事件 |
| remove     | event{type, target} | 移除文本标注时触发                   |
| rightclick | event{type, target} | 右键点击标注时触发此事件             |
