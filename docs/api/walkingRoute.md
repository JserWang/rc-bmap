# WalkingRoute

## location
* 类型 `Map | Point | String`
* 默认值 `Map`
* 描述 表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行

## renderOptions
* 类型 `Object`
* 默认值 `undwfined`
* 描述 搜索结果呈现设置

``` js
{
   panel: renderOptions.panel, //HTMLElement	结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。此属性对LocalCity无效。驾车路线规划无效
  selectFirstResult: renderOptions.selectFirstResult, //是否选择第一个检索结果。此属性仅对LocalSearch有效
  autoViewport: renderOptions.autoViewport, //检索结束后是否自动调整地图视野。此属性对LocalCity无效
}

```

## onSearchComplete
* 类型 `Function`
* 默认值 `undefined`
* 描述 检索完成后的回调函数。参数：results: WalkingRouteResult

## onMarkersSet
* 类型 `Function`
* 默认值 `undefined`
* 描述 标注添加完成后的回调函数。参数：pois: Array，起点和目的地点数组，。通过marker属性可得到其对应的标注

## onPolylinesSet
* 类型 `Function`
* 默认值 `undefined`
* 描述 折线添加完成后的回调函数。参数：routes: Array，步行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物

## onInfoHtmlSet
* 类型 `Function`
* 默认值 `undefined
* 描述 标注气泡内容创建后的回调函数。参数：poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的DOM元素

## onResultsHtmlSet
* 类型 `Function`
* 默认值 `undefined`
* 描述 结果列表添加完成后的回调函数。参数：container: 结果列表所用的HTML元素

## showInMap
* 类型 `boolean`
* 默认值 `false`
* 描述 用来表示是否将查询结果渲染至地图中
