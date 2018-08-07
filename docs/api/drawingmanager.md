# DrawingManager

## anchor
* 类型 `string`
* 默认值 `BMAP_ANCHOR_BOTTOM_RIGHT`
* 描述 表示控件的定位，默认定位到右下角

## offset
* 类型 `Object`
* 默认值 `{ width: 10, height: 10 }`
* 描述 标注的位置偏移值

## circleOptions
* 类型 `Object`
* 默认值 
```
{
  strokeColor:"red",    //边线颜色。
  fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
  strokeWeight: 3,       //边线的宽度，以像素为单位。
  strokeOpacity: 0.8,	   //边线透明度，取值范围0 - 1。
  fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
  strokeStyle: 'solid' //边线的样式，solid或dashed。
}
```
* 描述 Circle类构造函数的可选参数

## polylineOptions
* 类型 `Object`
* 默认值 同 `circleOptions`
* 描述 所画的点的可选参数

## rectangleOptions
* 类型 `Object`
* 默认值 同 `circleOptions`
* 描述 所画的点的可选参数

## markerOptions
* 类型 `Object`
* 默认值 同 `circleOptions`
* 描述 所画的点的可选参数

## drawingModes
* 类型 Array[[DrawingMode](/guide/constants.html#drawingmode)]
* 默认值 `undefined`
* 描述 绘制工具支持绘制的图形

## events
* 类型 `Object`
* 默认值 `undefined`
* 描述 `绑定事件`

| 事件名 | 描述 |
| ----- | --- |
| circlecomplete | 绘制圆完成事件 |
| markercomplete | 绘制点完成事件 |
| overlaycomplete | 鼠标绘制完成事件 |
| polygoncomplete | 绘制多边形完成事件 |
| polylinecomplete | 绘制线完成事件 |
| rectanglecomplete | 绘制矩形完成事件 |
