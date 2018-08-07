# BusLineSearch

## renderOptions
* 类型  Object
* 默认值 {}
* 描述 RenderOptions结果呈现设置

## onGetBusListComplete
* 类型  Function
* 默认值 undefined
* 描述 设置公交列表查询后的回调函数.参数：rs: BusListResult类型

## onGetBusLineComplete
* 类型  undefined
* 默认值 null
* 描述 设置公交线路查询后的回调函数.参数：rs: BusLine类型

## onBusListHtmlSet
* 类型  Function
* 默认值 undefined
* 描述 公交列表结果页渲染后回调函数.参数：container: HTMLElement，结果列表所用的HTML元素

## onBusLineHtmlSet
* 类型  Function
* 默认值 undefined
* 描述 公交线路结果页渲染后回调函数.参数：container: HTMLElement，结果列表所用的HTML元素

## onPolylinesSet
* 类型  Function
* 默认值 undefined
* 描述 添加公交线时候回调函数.参数：ply:Polyline 公交线路几何对象

## onMarkersSet
* 类型  Function
* 默认值 undefined
* 描述 添加公交站点时候回调函数.参数：sts:Array公交站坐标组成的Marker对象数组
