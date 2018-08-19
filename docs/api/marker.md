# Marker

## point

- 类型：`Point`
- 默认值：`undefined`
- 描述：添加标注的位置

## offset

- 类型：[Size](/api/#size)
- 默认值：`{ width: 0, height: 0 }`
- 描述：标注的位置偏移值

## icon

- 类型：[Icon](/api/#icon)
- 默认值：`undefined`
- 描述：标注所用的图标对象

## massClear

- 类型：`boolean`
- 默认值：`true`
- 描述：是否在调用 map.clearOverlays 清除此覆盖物

## dragging

- 类型：`boolean`
- 默认值：`false`
- 描述：是否启用拖拽

## clicking

- 类型：`boolean`
- 默认值：`true`
- 描述：是否响应点击事件

## raiseOnDrag

- 类型：`boolean`
- 默认值：`false`
- 描述：拖拽标注时，标注是否开启离开地图表面效果

## draggingCursor

- 类型：`string`
- 默认值：`undefined`
- 描述：拖拽标注时的鼠标指针样式

## rotation

- 类型：`number`
- 默认值：`undefined`
- 描述：旋转角度

## shadow

- 类型：[Icon](/api/#icon)
- 默认值：`undefined`
- 描述：阴影图标

## title

- 类型：`string`
- 默认值：`undefined`
- 描述：鼠标移到 marker 上的显示内容

## contextMenu

- 类型：[ContextMenu](/api/#contextmenu)
- 默认值：`undefined`
- 描述：右键菜单

## events

- 类型：`Object`
- 默认值：`undefined`
- 描述：为[绑定事件](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a3b2)

|事件	|参数	|描述|
|----|-----|-----|
|click|	event{type, target}|	点击标注图标后会触发此事件|
|dblclick|	event{type, target, point,pixel}|	双击标注图标后会触发此事件|
|mousedown	|event{type, target, point,pixel}	|鼠标在标注图上按下触发此事件|
|mouseup	|event{type, target, point,pixel}|	鼠标在标注图上释放触发此事件|
|mouseout	|event{type, target, point,pixel}|	鼠标离开标注时触发此事件|
|mouseover	|event{type, target, point,pixel}|	当鼠标进入标注图标区域时会触发此事件|
|remove|	event{type, target}	|移除标注时触发|
|infowindowclose	|event{type, target}|	信息窗在此标注上关闭时触发此事件|
|infowindowopen|	event{type, target}	|信息窗在此标注上打开时触发此事件|
|dragstart	|event{type, target}|	开始拖拽标注时触发此事件|
|dragging|	event{type, target, pixel, point}	|拖拽标注过程中触发此事件|
|dragend|	event{type, target, pixel, point}	|拖拽结束时触发此事件|
|rightclick	|event{type, target}	|右键点击标注时触发此事件|
