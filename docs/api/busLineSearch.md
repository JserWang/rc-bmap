# BusLineSearch

## location

- 类型：`Map | String` | [Point](/api/#point)
- 默认值：当前地图示例
- 描述：表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行

## renderOptions

- 类型：[RenderOption](/api/#renderoption)
- 默认值：`undefined`
- 描述：搜索结果呈现的配置

## onGetBusListComplete

- 类型：`Function`
- 默认值：`undefined`
- 描述：设置公交列表查询后的回调函数

## onGetBusLineComplete

- 类型：`Function`
- 默认值：`undefined`
- 描述：设置公交线路查询后的回调函数

## onBusListHtmlSet

- 类型：`Function`
- 默认值：`undefined`
- 描述：公交列表结果页渲染后回调函数

## onBusLineHtmlSet

- 类型：`Function`
- 默认值：`undefined`
- 描述：公交线路结果页渲染后回调函数

## onPolylinesSet

- 类型：`Function`
- 默认值：`undefined`
- 描述 添加公交线时候回调函数

## onMarkersSet

- 类型：`Function`
- 默认值：`undefined`
- 描述：添加公交站点时候回调函数

## showInMap

- 类型：`boolean`
- 默认值：`false`
- 描述：用来表示是否将查询结果渲染至地图中
