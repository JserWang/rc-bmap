# Tile

## transparentPng

- 类型：`boolean`
- 默认值：`undefined`
- 描述：是否使用了带有透明信息的 PNG。由于 IE6 不支持 PNG 透明，因此需要特殊处理

## tileUrlTemplate

- 类型：`string`
- 默认值：无
- 描述：指定图块网址模板，该模板可以针对每个图块请求而展开，以根据现有的图块坐标系引用唯一的图块。模板的格式应该为：http://yourhost/tile?x={X}&y={Y}&z={Z}.png 其中 X 和 Y 分别指纬度和经度图块坐标，Z 指缩放级别，比如： http://yourhost/tile?x=3&y=27&z=5.png 如果您没有提供图块网址模板，您需要实现 TileLayer.getTileUrl()抽象方法

## copyright

- 类型：[CopyRight](/api/#copyright)
- 默认值：`undefined`
- 描述：地图图层的版权信息

## zIndex

- 类型：`number`
- 默认值：`undefined`
- 描述：图层的 zIndex

## getTilesUrl

- 类型：`string`
- 默认值：`undefined`
- 描述：抽象。向地图返回地图图块的网址，图块索引由 tileCoord 的 x 和 y 属性在指定的缩放级别 zoom 提供。如果您在 TileLayerOptions 中提供了 tileUrlTemplate 参数，则可不实现此接口
