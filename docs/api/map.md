# Map

## ak

- 类型：`string`
- 默认值：`undefined`
- 描述：加载地图时所需 ak

## center

- 类型：[Point](/api/#point)
- 默认值：`{ lng: 116.404, lat: 39.915 }`
- 描述：设初始化地图中心点，默认值为 { lng: 116.404, lat: 39.915 }

## zoom

- 类型：`number`
- 默认值：`15`
- 描述：将视图切换到指定的缩放等级，中心点坐标不变。

## placeHolder

- 类型：`string | ReactElement`
- 默认值：`"地图加载中..."`
- 描述：地图未加载完成时，展示内容

## mapMounted

- 类型：`Function`
-  默认值：`undefined`
- 描述：地图渲染完成后回调函数

## minZoom

- 类型：`number`
- 默认值：`3`
- 描述：地图允许的最小级别，取值不得小于地图类型所允许的最小级别

## maxZoom

- 类型：`number`
- 默认值：`19`
- 描述：地图允许的最大级别。取值不得大于地图类型所允许的最大级别

## defaultCursor

- 类型：`string`
- 默认值：`undefined`
- 描述：设置地图默认的鼠标指针样式。参数 cursor 应符合 CSS 的 cursor 属性规范

## draggingCursor

- 类型：`string`
- 默认值：`undefined`
- 描述：设置拖拽地图时的鼠标指针样式。参数 cursor 应符合 CSS 的 cursor 属性规范

## mapStyle

- 类型：`Object`
- 默认值：`undefined`
- 描述：设置地图样式，样式包括地图底图颜色和地图要素是否展示两部分
- 用法：

若您使用[百度地图个性化模板时](http://lbsyun.baidu.com/custom/list.htm)，可传递如下值：

```js
{
  style: "midnight";
}
```

若您使用[百度地图图形编辑工具](http://lbsyun.baidu.com/img-editor.html)，可传递如下值：

```js
{
  styleJson: mapStyle,
}
```

## mapType

- 类型：[Enum](/guide/constants.html#maptype)
- 默认值：[MapType](/guide/constants.html#maptype).NORMAL
- 描述：设置地图类型

## highResolution

- 类型：`boolean`
- 默认值：`true`
- 描述：是否启用使用高分辨率地图

## autoResize

- 类型：`boolean`
- 默认值：`true`
- 描述：是否自动适应地图容器变化

## mapClick

- 类型：`boolean`
- 默认值：`true`
- 描述：是否开启底图可点功能

## dragging

- 类型：`boolean`
- 默认值：`true`
- 描述：是否启用地图拖拽

## scrollWheelZoom

- 类型：`boolean`
- 默认值：`false`
- 描述：是否启用滚轮放大缩小

## doubleClickZoom

- 类型：`boolean`
- 默认值：`true`
- 描述：是否启用双击放大

## keyboard

- 类型：`boolean`
- 默认值：`true`
- 描述：是否启用键盘操作

## inertialDragging

- 类型：`boolean`
- 默认值：`false`
- 描述：是否启用地图惯性拖拽

## continuousZoom

- 类型：`boolean`
- 默认值：`true`
- 描述：是否启用连续缩放效果

## pinchToZoom

- 类型：`boolean`
- 默认值：`true`
- 描述：是否启用双指操作缩放

## events

- 类型：`Object`
- 默认值：`undefined`
- 描述：为地图[绑定事件](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0)

|事件|	参数|	描述|
|----|----|----|
|click|	{type, target, point, pixel, overlay}	|左键单击地图时触发此事件。 当双击时，产生的事件序列为： click click dblclick|
|dblclick|	{type, target, pixel, point}|	鼠标双击地图时会触发此事件|
|rightclick|	{type, target, point, pixel, overlay}|	右键单击地图时触发此事件。 当双击时，产生的事件序列为： rightclick rightclick rightdblclick|
|rightdblclick|	{type, target, point, pixel, overlay}	|右键双击地图时触发此事件|
|maptypechange	|{type, target}	|地图类型发生变化时触发此事件|
|mousemove|	{type, target, point, pixel, overlay}	|鼠标在地图区域移动过程中触发此事件|
|mouseover|	{type, target}	|鼠标移入地图区域时触发此事件|
|mouseout	|{type, target}|	鼠标移出地图区域时触发此事件|
|movestart|	{type, target}	|地图移动开始时触发此事件|
|moving	|{type, target}	|地图移动过程中触发此事件|
|moveend|	{type, target}|	地图移动结束时触发此事件|
|zoomstart	|{type, target}	|地图更改缩放级别开始时触发触发此事件|
|zoomend	|{type, target}	|地图更改缩放级别结束时触发触发此事件|
|addoverlay|	{type, target}	|当使用Map.addOverlay()方法向地图中添加单个覆盖物时会触发此事件|
|addcontrol|	{type, target}|	当使用Map.addControl()方法向地图中添加单个控件时会触发此事件|
|removecontrol|	{type, target}|	当使用Map.removeControl()方法移除单个控件时会触发此事件|
|removeoverlay|	{type, target}	|当使用Map.removeOverlay()方法移除单个覆盖物时会触发此事件|
|clearoverlays|	{type, target}	|当使用Map.clearOverlays()方法一次性移除全部覆盖物时会触发此事件|
|dragstart|	{type, target, pixel, point}|	开始拖拽地图时触发|
|dragging	|{type, target, pixel, point}	|拖拽地图过程中触发|
|dragend	|{type, target, pixel, point}|	停止拖拽地图时触发|
|addtilelayer|	{type, target}|	添加一个自定义地图图层时触发此事件|
|removetilelayer|	{type, target}|	移除一个自定义地图图层时触发此事件|
|load|	{type, target, pixel, point, zoom}	|调用Map.centerAndZoom()方法时会触发此事件。这表示位置、缩放层级已经确定，但可能还在载入地图图块|
|resize	|{type, target, size}	|地图可视区域大小发生变化时会触发此事件|
|hotspotclick|{type, target, spots}	|点击热区时触发此事件|
|hotspotover|	{type, target, spots}|	鼠标移至热区时触发此事件|
|hotspotout|	{type, target, spots}	|鼠标移出热区时触发此事件|
|tilesloaded|	{type, target}|	当地图所有图块完成加载时触发此事件|
|touchstart|	{type, target, point,pixel}	|触摸开始时触发此事件，仅适用移动设备|
|touchmove|	{type, target, point,pixel}|	触摸移动时触发此事件，仅适用移动设备|
|touchend|	{type, target, point,pixel}|	触摸结束时触发此事件，仅适用移动设备|
|longpress|	{type, target, point,pixel}|	长按事件，仅适用移动设备|


## contextMenu

- 类型：[ContextMenu](/api/#contextmenu)
- 默认值：`undefined`
- 描述：为地图设置右键菜单
- 用法：

```js
{
  items: [
    {
      text: "放大",
      callback: function() {
        global.bMapInstance.zoomIn();
      }
    },
    {
      text: "缩小",
      callback: function() {
        global.bMapInstance.zoomOut();
      },
      separator: true
    }
  ];
}
```
