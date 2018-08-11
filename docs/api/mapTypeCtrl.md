# MapTypeCtrl

## anchor
* 类型：[Enum](/guide/constants.html#controlanchor)
* 默认值：[ControlAnchor](/guide/constants.html#controlanchor).TOP_RIGHT
* 描述：控件的停靠位置

## offset
* 类型：[Size](/api/#size)
* 默认值：`{ width: 10, height: 10 }`
* 描述：控件的偏移值

## type
* 类型：[Enum](/guide/constants.html#maptypecontroltype)
* 默认值：[MapTypeControlType](/guide/constants.html#maptypecontroltype).HORIZONTAL
* 描述：控件样式

## mapTypes
* 类型：[Enum](/guide/constants.html#maptype)[]
* 默认值：[[MapType](/guide/constants.html#maptype).NORMAL, [MapType](/guide/constants.html#maptype).PERSPECTIVE, [MapType](/guide/constants.html#maptype).SATELLITE, [MapType](/guide/constants.html#maptype).HYBRID]
* 描述：控件展示的地图类型，默认为普通图、卫星图、卫星加路网混合图和三维图。通过此属性可配置控件展示的地图类型
