# LocalSearch

## location
* 类型 Map | Point | String, 
* 默认值  Map
* 描述 表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行

## renderOptions
* 类型  Object
* 默认值 {}
* 描述 RenderOptions结果呈现设置
``` js
{
  panel: renderOptions.panel, //HTMLElement	结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。此属性对LocalCity无效。驾车路线规划无效
  selectFirstResult: renderOptions.selectFirstResult, //是否选择第一个检索结果。此属性仅对LocalSearch有效
  autoViewport: renderOptions.autoViewport, //检索结束后是否自动调整地图视野。此属性对LocalCity无效
}
```
## renderOptions
* 类型  Object
* 默认值 {}
* 描述 结果呈现设置

## onMarkersSet
* 类型  Function
* 默认值 undefined
* 描述 标注添加完成后的回调函数。 参数： pois: Array，通过marker属性可得到其对应的标注

## onInfoHtmlSet
* 类型  Function
* 默认值 undefined
* 描述  标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的Dom元素

## onResultsHtmlSet
* 类型  Function
* 默认值 undefined
* 描述 结果列表添加完成后的回调函数。 参数： container: HTMLElement，结果列表所用的HTML元素 

## pageCapacity
* 类型  Number
* 默认值 undefined
* 描述  设置每页容量，取值范围：1 - 100，对于多关键字检索，容量表示每个关键字的数量，如果有2个关键字，则实际检索结果数量范围为：2 - 200

## onSearchComplete
* 类型  Function
* 默认值  undefined
* 描述 检索完成后的回调函数。 参数：results: LocalResult或Array 如果是多关键字检索，回调函数参数返回一个LocalResult的数组，数组中的结果顺序和检索中多关键字数组中顺序一致

## showInMap
* 类型 boolean
* 默认值 false
* 描述 用来表示是否将查询结果渲染至地图中

## showInMap
* 类型 boolean
* 默认值 false
* 描述 用来表示是否将查询结果渲染至地图中
