# Marker

## offset
* 类型 `Object`
* 默认值 { width: 0,height: 0 }
* 描述 标注的位置偏移值

## icon
* 类型 `Icon字面量值`
* 默认值 undefined
* 描述 标注所用的图标对象

## enableMassClear
* 类型 	`boolean`
* 默认值  true
* 描述 是否在调用map.clearOverlays清除此覆盖物

## enableDragging
* 类型 	`boolean`
* 默认值  false
* 描述 是否启用拖拽

## enableClicking
* 类型 	`boolean`
* 默认值  true
* 描述 是否响应点击事件

## raiseOnDrag
* 类型 	`boolean`
* 默认值  false
* 描述 拖拽标注时，标注是否开启离开地图表面效果

## draggingCursor
* 类型 	`string`
* 默认值  undefined
* 描述 拖拽标注时的鼠标指针样式

## rotation
* 类型 	`number`
* 默认值  undefined
* 描述 旋转角度

## shadow
* 类型 	`Icon`
* 默认值  Icon字面量值
* 描述 阴影图标

## title
* 类型 	`string`
* 默认值 undefined
* 描述 鼠标移到marker上的显示内容

## contextMenu
* 类型 `ContextMenu`字面量值
* 默认值 `undefined`
* 描述 marker右键菜单

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