# 常量

## MapType

| 值           | 描述                           |
| ------------ |-------------------------------|-----------------|
| NORMAL       | 此地图类型展示普通街道视图         | BMAP_NORMAL_MAP |
| PERSPECTIVE  | 此地图类型展示透视图像视图         | BMAP_PERSPECTIVE_MAP |
| SATELLITE    | 此地图类型展示卫星视图            | BMAP_SATELLITE_MAP |
| HYBRID       | 此地图类型展示卫星和路网的混合视图  | BMAP_HYBRID_MAP |

## ControlAnchor

| 值           | 描述                    |
| ------------ |------------------------|-----------------|
| TOP_LEFT     | 控件将定位到地图的左上角   | BMAP_ANCHOR_TOP_LEFT |
| TOP_RIGHT    | 控件将定位到地图的右上角   | BMAP_ANCHOR_TOP_RIGHT |
| BOTTOM_LEFT  | 控件将定位到地图的左下角   | BMAP_ANCHOR_BOTTOM_LEFT |
| BOTTOM_RIGHT | 控件将定位到地图的右下角   | BMAP_ANCHOR_BOTTOM_RIGHT |

## NavigationType

| 值           | 描述                    |
| ------------ |------------------------|-----------------|
| LARGE     | 标准的平移缩放控件（包括平移、缩放按钮和滑块）| BMAP_NAVIGATION_CONTROL_LARGE |
| SMALL    | 仅包含平移和缩放按钮 | BMAP_NAVIGATION_CONTROL_SMALL |
| PAN  | 仅包含平移按钮 | BMAP_NAVIGATION_CONTROL_PAN |
| ZOOM | 仅包含缩放按钮 | BMAP_NAVIGATION_CONTROL_ZOOM |

## LengthUnit

| 值           | 描述                    |
| ------------ |------------------------|-----------------|
| METRIC | 公制单位 | BMAP_UNIT_METRIC |
| IMPERIAL | 英制单位 | BMAP_UNIT_IMPERIAL |

## MapTypeControlType

| 值           | 描述                    |
| ------------ |------------------------|-----------------|
| HORIZONTAL | 按钮水平方式展示 | BMAP_MAPTYPE_CONTROL_HORIZONTAL |
| DROPDOWN | 按钮呈下拉列表方式展示 | BMAP_MAPTYPE_CONTROL_DROPDOWN |
| MAP | 以图片方式展示类型控件 | BMAP_MAPTYPE_CONTROL_MAP |

## StatusCode

| 值           | 描述                    |
| ------------ |------------------------|-----------------|
| PERMISSION_DENIED | 没有权限。对应数值“6” | BMAP_STATUS_PERMISSION_DENIED |
| SERVICE_UNAVAILABLE | 服务不可用。对应数值“7” | BMAP_STATUS_SERVICE_UNAVAILABLE |
| TIMEOUT | 超时。对应数值“8” | BMAP_STATUS_TIMEOUT |

## MapPane

| 值           | 描述                    | 
| ------------ |------------------------|-----------------|
| FLOAT | 信息窗口所在容器 | floatPane |
| FLOAT_SHADOW | 信息窗口阴影所在容器 | floatShadow |
| LABEL | 文本标注所在容器 | labelPane |
| MARKER | 标注图标所在容器 | markerPane |
| MARKER_MOUSE | 标注点击区域所在容器 | markerMouseTarget |
| MARKER_SHADOW | 标注阴影所在容器 | markerShadow |
| MAP | 折现、多边形等矢量图形所在容器 | mapPane |

## Animation

| 值           | 描述                    | 
| ------------ |------------------------|-----------------|
| DROP | 坠落动画 | BMAP_ANIMATION_DROP |
| BOUNCE | 跳动动画 | BMAP_ANIMATION_BOUNCE |

## ShapeType

| 值           | 描述                    | 
| ------------ |------------------------|-----------------|
| CIRCLE | 圆形，为默认形状 | BMAP_POINT_SHAPE_CIRCLE |
| STAR | 星形 | BMAP_POINT_SHAPE_STAR |
| SQUARE | 方形 | BMAP_POINT_SHAPE_SQUARE |
| RHOMBUS | 菱形 | BMAP_POINT_SHAPE_RHOMBUS |
| WATERDROP | 水滴状，该类型无size和color属性 | BMAP_POINT_SHAPE_WATERDROP |

## SizeType

| 值           | 描述                    | 
| ------------ |------------------------|-----------------|
| TINY | 定义点的尺寸为超小，宽高为2px*2px | BMAP_POINT_SIZE_TINY |
| SMALLER | 定义点的尺寸为很小，宽高为4px*4px | BMAP_POINT_SIZE_SMALLER |
| SMALL | 定义点的尺寸为小，宽高为8px*8px | BMAP_POINT_SIZE_SMALL |
| NORMAL | 定义点的尺寸为正常，宽高为10px*10px，为海量点默认尺寸 | BMAP_POINT_SIZE_NORMAL |
| BIG | 定义点的尺寸为大，宽高为16px*16px | BMAP_POINT_SIZE_BIG |
| BIGGER | 定义点的尺寸为很大，宽高为20px*20px | BMAP_POINT_SIZE_BIGGER |
| HUGE | 定义点的尺寸为超大，宽高为30px*30px | BMAP_POINT_SIZE_HUGE |

## SymbolShapeType

| 值           | 描述                    |
| ------------ |------------------------|-----------------|
| CIRCLE | 圆形，默认半径为1px | BMap_Symbol_SHAPE_CIRCLE |
| RECTANGLE | 矩形，默认宽度4px、高度2px | BMap_Symbol_SHAPE_RECTANGLE |
| RHOMBUS | 菱形，默认外接圆半径10px | BMap_Symbol_SHAPE_RHOMBUS |
| STAR | 五角星，五角星外接圆半径为10px | BMap_Symbol_SHAPE_STAR |
| BACKWARD_CLOSED_ARROW | 箭头方向向下的闭合箭头 | BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW |
| FORWARD_CLOSED_ARROW | 箭头方向向上的闭合箭头 | BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW |
| BACKWARD_OPEN_ARROW | 箭头方向向下的非闭合箭头 | BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW |
| FORWARD_OPEN_ARROW | 箭头方向向上的非闭合箭头 | BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW |
| POINT | 定位点图标 | BMap_Symbol_SHAPE_POINT |
| PLANE | 预设的飞机形状 | BMap_Symbol_SHAPE_PLANE |
| CAMERA | 预设的照相机形状 | BMap_Symbol_SHAPE_CAMERA |
| WARNING | 预设的警告符号 | BMap_Symbol_SHAPE_WARNING |
| SMILE | 预设的笑脸形状 | BMap_Symbol_SHAPE_SMILE |
| CLOCK | 预设的钟表形状 | BMap_Symbol_SHAPE_CLOCK |

## DrivingPolicy
| 值           | 描述                    |
| ------------ |------------------------|-----------------|
| DEFAULT | 默认 | BMAP_DRIVING_POLICY_DEFAULT |
| FIRST_HIGHWAYS | 优先高速 | BMAP_DRIVING_POLICY_FIRST_HIGHWAYS |
| AVOID_HIGHWAYS | 避开高速 | BMAP_DRIVING_POLICY_AVOID_HIGHWAYS |
| AVOID_CONGESTION | 避开拥堵  |BMAP_DRIVING_POLICY_AVOID_CONGESTION |

## IntercityPolicy
| 值           | 描述                    |
| ------------ |------------------------|-----------------|
| LEAST_TIME | 时间短 | BMAP_INTERCITY_POLICY_LEAST_TIME |
| EARLY_START | 出发早 | BMAP_INTERCITY_POLICY_EARLY_START |
| CHEAP_PRICE | 价格低 | BMAP_INTERCITY_POLICY_CHEAP_PRICE |

## TransitPolicy
| 值           | 描述                    |
| ------------ |------------------------|-----------------|
| RECOMMEND | 推荐方案 | BMAP_TRANSIT_POLICY_RECOMMEND |
| LEAST_TIME | 最少时间 | BMAP_TRANSIT_POLICY_LEAST_TIME |
| LEAST_TRANSFER | 价格低 | BMAP_TRANSIT_POLICY_LEAST_TRANSFER |
| LEAST_WALKING | 最少换乘 | BMAP_TRANSIT_POLICY_LEAST_WALKING |
| AVOID_SUBWAYS | 不乘地铁 | BMAP_TRANSIT_POLICY_AVOID_SUBWAYS |
| FIRST_SUBWAYS | 优先地铁 | BMAP_TRANSIT_POLICY_FIRST_SUBWAYS |

## TransitTypePolicy
| 值           | 描述                    |
| ------------ |------------------------|-----------------|
| TRAIN | 火车优先 | BMAP_TRANSIT_TYPE_POLICY_TRAIN |
| AIRPLANE | 飞机优先 | BMAP_TRANSIT_TYPE_POLICY_AIRPLANE |
| COACH | 大巴优先 | BMAP_TRANSIT_TYPE_POLICY_COACH |

## ContextMenuIcon
| 值           | 描述                    |
| ------------ |------------------------|-----------------|
| ZOOMIN | 放大图标 | BMAP_CONTEXT_MENU_ICON_ZOOMIN |
| ZOOMOUT | 缩小图标 | BMAP_CONTEXT_MENU_ICON_ZOOMOUT |

## DrawingMode
| 值           | 描述                    |
| ------------ |------------------------|-----------------|
| MARKER | 标注 |
| CIRCLE | 圆 | 
| POLYLINE | 折显 |
| POLYGON | 多边形 |
| RECTANGLE | 矩形 |
