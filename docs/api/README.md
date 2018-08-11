# Map

## ak
* 类型 `string`
* 默认值 `undefined`
* 描述 加载地图时所需ak

## placeHolder
* 类型 `string 或 ReactElement`
* 默认值 `"地图加载中..."`
* 描述 地图未加载完成时，展示内容

## mapMounted
* 类型 `Function`
* 默认值 `undefined`
* 描述 地图渲染完成后回调函数

## minZoom
* 类型 `number`
* 默认值 `3`
* 描述 地图允许的最小级别，取值不得小于地图类型所允许的最小级别

## maxZoom
* 类型 `number`
* 默认值 `19`
* 描述 地图允许的最大级别。取值不得大于地图类型所允许的最大级别

## defaultCursor
* 类型 `string`
* 默认值 `undefined`
* 描述 设置地图默认的鼠标指针样式。参数cursor应符合CSS的cursor属性规范

## draggingCursor
* 类型 `string`
* 默认值 `undefined`
* 描述 设置拖拽地图时的鼠标指针样式。参数cursor应符合CSS的cursor属性规范

## mapStyle
* 类型 `Object`
* 默认值 `undefined`
* 描述 设置地图样式，样式包括地图底图颜色和地图要素是否展示两部分

若您使用[百度地图个性化模板时](http://lbsyun.baidu.com/custom/list.htm)，可传递如下值：

``` js
{
  style: 'midnight'
}
```

若您使用[百度地图图形编辑工具](http://lbsyun.baidu.com/img-editor.html)，可传递如下值：

``` js
{
  styleJson: mapStyle,
}
```

## center
* 类型 `Object`
* 默认值 `{ lng: 116.404, lat: 39.915 }`
* 描述 设初始化地图中心点，默认值为 { lng: 116.404, lat: 39.915 }

## mapType
* 类型 `Enum`
* 默认值 [MapType](/guide/constants.html#maptype).NORMAL
* 描述 设置地图类型

## zoom
* 类型 `number`
* 默认值 `15`
* 描述 将视图切换到指定的缩放等级，中心点坐标不变。

## highResolution
* 类型 `boolean`
* 默认值 `true`
* 描述 是否启用使用高分辨率地图

## autoResize
* 类型 `boolean`
* 默认值 `true`
* 描述 是否自动适应地图容器变化

## mapClick
* 类型 `boolean`
* 默认值 `true`
* 描述 是否开启底图可点功能

## dragging
* 类型 `boolean`
* 默认值 `true`
* 是否启用地图拖拽

## scrollWheelZoom
* 类型 `boolean`
* 默认值 `false`
* 描述 是否启用滚轮放大缩小

## doubleClickZoom
* 类型 `boolean`
* 默认值 `true`
* 描述 是否启用双击放大

## keyboard
* 类型 `boolean`
* 默认值 `true`
* 描述 是否启用键盘操作

## inertialDragging
* 类型 `boolean`
* 默认值 `false`
* 描述 是否启用地图惯性拖拽

## continuousZoom
* 类型 `boolean`
* 默认值 `true`
* 描述 是否启用连续缩放效果

## pinchToZoom
* 类型 `boolean`
* 默认值 `true`
* 描述 是否启用双指操作缩放

## events
* 类型 `Object`
* 默认值 `undefined`
* 描述 为地图[绑定事件](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b0)

## contextMenu
* 类型 `ContextMenu`字面量值
* 默认值 `undefined`
* 描述 为地图设置右键菜单

``` js
contextMenu: {
  items: [
    {
      text, // 设置菜单项显示的文本
      width, // 指定此菜单项的宽度，菜单以最长的菜单项宽度为准
      callback, // 当菜单项被点击时，系统将会以当前菜单弹出的地理坐标点作为参数调用回调函数callback
      iconUrl, // 指定此菜单项的icon URL（大小为17px*17px)
      disabled, // 是否禁用
    }
  ]
}
```

如：
``` js
{
  items: [{
    text: '放大',
    callback: function() {global.bMapInstance.zoomIn()},
  },
  {
    text: '缩小',
    callback: function() {global.bMapInstance.zoomOut()},
    separator: true,
  }]
}
```