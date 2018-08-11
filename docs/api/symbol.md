# Symbol

`Symbol` 继承自 `Marker`，享有 `Marker` 中的所有属性设置

## path
* 类型：[Enum](/guide/constants.html#symbolshapetype)
* 默认值：[SymbolShapeType](/guide/constants.html#symbolshapetype).FORWARD_CLOSED_ARROW
* 描述：设置矢量图标的路径

## anchor
* 类型：[Size](/api/#size)
* 默认值：{ width: 0, height: 0 }
* 描述：符号的位置偏移值

## fillColor
* 类型：`string`
* 默认值：`undefined`
* 描述：设置矢量图标的填充颜色。支持颜色常量字符串、十六进制、RGB、RGBA等格式

## fillOpacity
* 类型：`number`
* 默认值：`undefined`
* 描述：设置矢量图标填充透明度，范围0~1

## scale
* 类型：`number`
* 默认值：`undefined`
* 描述：设置矢量图标的缩放比例

## rotation
* 类型：`number`
* 默认值：`undefined`
* 描述：设置矢量图标的旋转角度,参数为角度

## strokeColor
* 类型：`string`
* 默认值：`undefined`
* 描述：设置矢量图标的线填充颜色,支持颜色常量字符串、十六进制、RGB、RGBA等格式

## strokeOpacity
* 类型：`number`
* 默认值：`undefined`
* 描述：设置矢量图标线的透明度,opacity范围0~1

## strokeWeight	
* 类型：`number`
* 默认值：`undefined`
* 描述：旋设置线宽。如果此属性没有指定，则线宽跟scale数值相同
