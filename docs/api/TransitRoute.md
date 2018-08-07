

# TransitRoute

## renderOptions
* 类型  Object
* 默认值 {}
* 描述 搜索结果的呈现设置


##   policy
类型  Enum
* 默认值 [DrivingPolicy](/guide/constants.html#drivingpolicy).NORMAL
* 描述 市内公交的策略参数

## intercityPolicy
类型  Enum
* 默认值 [IntercityPolicy](/guide/constants.html#intercitypolicy).NORMAL
* 描述 跨城公交的换乘策略参数 

## transitTypePolicy
*类型  Enum
* 默认值 [TransitTypePolicy](/guide/constants.html#transittypePolicy).NORMAL
* 描述 跨城公交的交通方式策略参数

## pageCapacity
* 类型  Function
* 默认值 null
* 描述 返回方案的个数

## onSearchComplete
* 类型  Function
* 默认值 null
* 描述 检索完成后的回调函数。参数：results: TransitRouteResult，公交导航结果

## onMarkersSet
* 类型  Function
* 默认值 null
* 描述 	标注添加完成后的回调函数。参数：pois: Array ，起点和目的地数组。transfers: Array ，公交车站数组


## onInfoHtmlSet
* 类型  Function
* 默认值 null
* 描述 气泡内容创建后的回调函数。参数：poi: LocalResultPoi，表示当前气泡对应的点（可以是起点、终点或换乘车站）html: HTMLElement，气泡内的DOM元素


# onPolylinesSet
* 类型  Function
* 默认值 null
* 描述  	折线添加完成后的回调函数。参数：lines: Array ，公交线路数组。routes: Array ，步行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物

# onResultsHtmlSet
* 类型  Function
* 默认值 null
* 描述 结果列表添加完成后的回调函数。参数：container: 结果列表所用的HTML元素
