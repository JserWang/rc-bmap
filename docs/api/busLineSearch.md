# BusLineSearch

## location
* 类型 `Map | Point | String`
* 默认值 `Map`
* 描述 表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行

## renderOptions
* 类型 `Object`
* 默认值 `undefined`
* 描述 RenderOptions结果呈现设置
``` js
{
  panel: renderOptions.panel, //HTMLElement	结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。此属性对LocalCity无效。驾车路线规划无效
  selectFirstResult: renderOptions.selectFirstResult, //是否选择第一个检索结果。此属性仅对LocalSearch有效
  autoViewport: renderOptions.autoViewport, //检索结束后是否自动调整地图视野。此属性对LocalCity无效
}

```

## onGetBusListComplete
* 类型 `Function`
* 默认值 `undefined`
* 描述 设置公交列表查询后的回调函数。参数：rs: BusListResult类型

## onGetBusLineComplete
* 类型 `Function`
* 默认值 `undefined`
* 描述 设置公交线路查询后的回调函数。参数：rs: BusLine类型

## onBusListHtmlSet
* 类型 `Function`
* 默认值 `undefined`
* 描述 公交列表结果页渲染后回调函数。参数：container: HTMLElement，结果列表所用的HTML元素

## onBusLineHtmlSet
* 类型 `Function`
* 默认值 `undefined`
* 描述 公交线路结果页渲染后回调函数。参数：container: HTMLElement，结果列表所用的HTML元素

## onPolylinesSet
* 类型 `Function`
* 默认值 `undefined`
* 描述 添加公交线时候回调函数。参数：ply:Polyline 公交线路几何对象

## onMarkersSet
* 类型 `Function`
* 默认值 `undefined`
* 描述 添加公交站点时候回调函数。参数：sts:Array公交站坐标组成的Marker对象数组

## showInMap
* 类型 `boolean`
* 默认值 `false`
* 描述 用来表示是否将查询结果渲染至地图中

