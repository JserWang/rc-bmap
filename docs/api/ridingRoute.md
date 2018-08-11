# RidingRoute

## location
* 类型：`Map | String` | [Point](/api/#point)
* 默认值：当前地图示例
* 描述：表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行

## renderOptions
* 类型：[RenderOption](/api/#renderoption)
* 默认值：`undefined`
* 描述：搜索结果呈现的配置

## onSearchComplete
* 类型：`Function`
* 默认值：`undefined`
* 描述：检索完成后的回调函数

## onMarkersSet
* 类型：`Function`
* 默认值：`undefined`
* 描述：标注添加完成后的回调函数

## onPolylinesSet
* 类型：`Function`
* 默认值：`undefined`
* 描述：折线添加完成后的回调函数

## onInfoHtmlSet
* 类型：`Function`
* 默认值：`undefined`
* 描述：标注气泡内容创建后的回调函数

## onResultsHtmlSet
* 类型：`Function`
* 默认值：`undefined`
* 描述：结果列表添加完成后的回调函数

## showInMap
* 类型：`boolean`
* 默认值：`false`
* 描述：用来表示是否将查询结果渲染至地图中
