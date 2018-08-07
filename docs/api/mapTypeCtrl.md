# MapTypeCtrl

## anchor
* 类型 `Enum`
* 默认值 [ANCHOR](/guide/constants.html#controlanchor).TOP_RIGHT
* 描述 控件的停靠位置

## offset
* 类型 `Object`
* 默认值 `{ width: 10, height: 10 }`
* 描述 控件的偏移值

## type
* 类型 `Enum`
* 默认值 [TYPE](/guide/constants.html#maptypecontroltype).HORIZONTAL
* 描述 控件样式

## mapTypes
* 类型 `Array`
* 默认值 [[MAP_TYPE](/guide/constants.html#maptype).NORMAL, [MAP_TYPE](/guide/constants.html#maptype).PERSPECTIVE, [MAP_TYPE](/guide/constants.html#maptype).SATELLITE, [MAP_TYPE](/guide/constants.html#maptype).HYBRID]
* 描述 控件展示的地图类型，默认为普通图、卫星图、卫星加路网混合图和三维图。通过此属性可配置控件展示的地图类型
