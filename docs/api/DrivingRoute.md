

# DrivingRoute

## renderOptions
* 类型  Object
* 默认值  {}
* 描述 结果呈现设置


## policy
* 类型  Enum
* 默认值 [DrivingPolicy](/guide/constants.html#drivingpolicy).NORMAL
* 描述 设置地图类型
* 描述 驾车策略

##  onSearchComplete
* 类型  Function
* 默认值 null
* 描述 检索完成后的回调函数。参数： results: DrivingRouteResult


## onMarkersSet
* 类型  Function
* 默认值 null
* 描述 标注添加完成后的回调函数。 参数： pois: Array，起点和目的地点数组，通过marker属性可得到其对应的标注

## onInfoHtmlSet
* 类型  Function
* 默认值 null
* 描述 标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过marker属性可得到当前的标注。html: HTMLElement，气泡内的DOM元素

## onPolylinesSet
* 类型  Function
* 默认值 null
* 描述 折线添加完成后的回调函数。 参数： routes: Array，驾车线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物



