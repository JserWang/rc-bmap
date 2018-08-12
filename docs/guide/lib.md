# 扩展库
扩展库均基于[百度开源库](http://lbsyun.baidu.com/index.php?title=jspopular3.0/openlibrary)实现。

::: warning 注意
以下属性表格中`Size`均为字面量`{ width, height }`，`Point`均为字面量`{ lng, lat }`,`Enum`均为对应常量。
:::

## MarkerClusterer-点聚合

| 属性 | 类型 | 描述 |
| ---- | ---- | ---- |
| gridSize | number | 网格大小 |
| maxZoom | number | 聚合的最大缩放级别 |
| minClusterSize | number | 单个聚合的最小数量 |
| styles | Array | 聚合样式的风格集合 |
| averageCenter | boolean | 单个聚合的落脚点是否是聚合内所有标记的平均中心 |

``` js
import React from 'react';
import { render } from 'react-dom';
import { 
  Map,
  Marker,
  MarkerClusterer,
} from 'rc-bmap';

const points = [
  {"lng":116.418261,"lat":39.921984},
  {"lng":116.423332,"lat":39.916532},
  {"lng":116.419787,"lat":39.930658},
  {"lng":116.418455,"lat":39.920921},
  {"lng":116.418843,"lat":39.915516},
  {"lng":116.42546,"lat":39.918503},
  {"lng":116.423289,"lat":39.919989},
  {"lng":116.418162,"lat":39.915051},
  {"lng":116.422039,"lat":39.91782},
  {"lng":116.41387,"lat":39.917253},
  {"lng":116.41773,"lat":39.919426},
  {"lng":116.421107,"lat":39.916445},
  {"lng":116.417521,"lat":39.917943},
  {"lng":116.419812,"lat":39.920836},
  {"lng":116.420682,"lat":39.91463},
  {"lng":116.415424,"lat":39.924675},
  {"lng":116.419242,"lat":39.914509},
  {"lng":116.422766,"lat":39.921408},
  {"lng":116.421674,"lat":39.924396},
  {"lng":116.427268,"lat":39.92267},
  {"lng":116.417721,"lat":39.920034},
  {"lng":116.412456,"lat":39.92667},
  {"lng":116.420432,"lat":39.919114},
  {"lng":116.425013,"lat":39.921611},
  {"lng":116.418733,"lat":39.931037},
  {"lng":116.419336,"lat":39.931134},
  {"lng":116.413557,"lat":39.923254},
  {"lng":116.418367,"lat":39.92943,},
  {"lng":116.424312,"lat":39.919621},
  {"lng":116.423874,"lat":39.919447},
  {"lng":116.424225,"lat":39.923091},
  {"lng":116.417801,"lat":39.921854},
  {"lng":116.417129,"lat":39.928227},
  {"lng":116.426426,"lat":39.922286},
  {"lng":116.421597,"lat":39.91948},
  {"lng":116.423895,"lat":39.920787},
  {"lng":116.423563,"lat":39.921197},
  {"lng":116.417982,"lat":39.922547},
  {"lng":116.426126,"lat":39.921938},
  {"lng":116.42326,"lat":39.915782},
  {"lng":116.419239,"lat":39.916759},
  {"lng":116.417185,"lat":39.929123},
  {"lng":116.417237,"lat":39.927518},
  {"lng":116.417784,"lat":39.915754},
  {"lng":116.420193,"lat":39.917061},
  {"lng":116.422735,"lat":39.915619},
  {"lng":116.418495,"lat":39.915958},
  {"lng":116.416292,"lat":39.931166},
  {"lng":116.419916,"lat":39.924055},
  {"lng":116.42189,"lat":39.921308},
  {"lng":116.413765,"lat":39.929376},
  {"lng":116.418232,"lat":39.920348},
  {"lng":116.417554,"lat":39.930511},
  {"lng":116.418568,"lat":39.918161},
  {"lng":116.413461,"lat":39.926306},
  {"lng":116.42232,"lat":39.92161},
  {"lng":116.4174,"lat":39.928616},
  {"lng":116.424679,"lat":39.915499},
  {"lng":116.42171,"lat":39.915738},
  {"lng":116.417836,"lat":39.916998},
  {"lng":116.420755,"lat":39.928001},
  {"lng":116.414077,"lat":39.930655},
  {"lng":116.426092,"lat":39.922995},
  {"lng":116.41535,"lat":39.931054},
  {"lng":116.413022,"lat":39.921895},
  {"lng":116.415551,"lat":39.913373},
  {"lng":116.421191,"lat":39.926572},
  {"lng":116.419612,"lat":39.917119},
  {"lng":116.418237,"lat":39.921337},
  {"lng":116.423776,"lat":39.921919},
  {"lng":116.417694,"lat":39.92536},
  {"lng":116.415377,"lat":39.914137},
  {"lng":116.417434,"lat":39.914394},
  {"lng":116.42588,"lat":39.922622},
  {"lng":116.418345,"lat":39.919467},
  {"lng":116.426883,"lat":39.917171},
  {"lng":116.423877,"lat":39.916659},
  {"lng":116.415712,"lat":39.915613},
  {"lng":116.419869,"lat":39.931416},
  {"lng":116.416956,"lat":39.925377},
  {"lng":116.42066,"lat":39.925017},
  {"lng":116.416244,"lat":39.920215},
  {"lng":116.41929,"lat":39.915908},
  {"lng":116.422116,"lat":39.919658},
  {"lng":116.4183,"lat":39.925015},
  {"lng":116.421969,"lat":39.913527},
  {"lng":116.422936,"lat":39.921854},
  {"lng":116.41905,"lat":39.929217},
  {"lng":116.424579,"lat":39.914987},
  {"lng":116.42076,"lat":39.915251},
  {"lng":116.425867,"lat":39.918989},
];

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
  >
    <MarkerClusterer 
      averageCenter
    >
    {
      points.map((item, index) => {
        return (
          <Marker
            key={index}
            point={item}
          />
        )
      })
    }
    </MarkerClusterer>
  </Map>,
  document.getElementById('app')
);

```
## CurveLine-抛物线
`CurveLine`的属性与`Polyline`类似。
| 属性 | 类型 | 描述 |
| --- | ---- | --- |
| points | Array[Point] | 构成弧线的关键点 |
| strokeColor | string | 弧线颜色 |
| strokeWeight | number | 弧线的宽度，以像素为单位 |
| strokeOpacity | number | 构成弧线的透明度 |
| strokeStyle | string | 弧线的样式，solid或dashed |
| massClear | boolean | 是否在调用map.clearOverlays清除此覆盖物 |
| clicking | boolean | 是否响应点击事件 |
| editing | boolean | 是否启用编辑 |

``` js
import React from 'react';
import { render } from 'react-dom';
import { 
  Map,
  CurveLine,
} from 'rc-bmap';

const points = [
  {lng: 116.432045, lat: 39.910683},
  {lng: 120.129721, lat: 30.314429},
  {lng: 121.491121, lat: 25.127053},
];

const events= {
  click() {
    console.log('CurveLine click')
  }
};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
    zoom={6}
  >
    <CurveLine 
      points={points}
      strokeColor="blue"
      strokeWeight={3}
      strokeOpacity={0.5}
      editing
      events={events}
    />
  </Map>,
  document.getElementById('app')
);

```

## DrawingManager-绘制工具

| 属性 | 类型 | 描述 |
| ---- | --- | --- |
| anchor | Enum | 绘制工具停靠位置 |
| offset | Size | 工具停靠偏移值
| drawingModes | Array[Enum] | 绘制工具支持绘制的图形，从常量-DrawingMode取值 |
| circleOptions | object | 所画的圆的可选参数，参考[CircleOptions](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b17) |
| polylineOptions | object | 所画的点的可选参数，参考[CircleOptions](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b17) |
| markerOptions | object | 所画的点的可选参数，参考[CircleOptions](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b17) |
| polygonOptions | object | 所画的点的可选参数，参考[PolygonOptions](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b15) |
| rectangleOptions | object | 所画的点的可选参数，参考[PolygonOptions](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b15) |
| events | object | 绑定事件 |

事件：
| 事件名 | 描述 |
| ----- | --- |
| circlecomplete | 绘制圆完成事件 |
| markercomplete | 绘制点完成事件 |
| overlaycomplete | 鼠标绘制完成事件 |
| polygoncomplete | 绘制多边形完成事件 |
| polylinecomplete | 绘制线完成事件 |
| rectanglecomplete | 绘制矩形完成事件 |

``` js
import React from 'react';
import { render } from 'react-dom';
import { 
  Map,
  DrawingManager,
  DrawingMode,
} from 'rc-bmap';

const events= {
  circlecomplete(e, overlay) {
    console.log(overlay)
  }
};

const offset = {
  width: 10,
  height: 10,
};

const drawingModes = [
  DrawingMode.MARKER,
  DrawingMode.CIRCLE,
];

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
    zoom={6}
  >
    <DrawingManager 
      events={events}
      offset={offset}
      drawingModes={drawingModes}
    />
  </Map>,
  document.getElementById('app')
);

```

## Heatmap-热力图

| 属性 | 类型 | 描述 |
| ---- | --- | ----|
| points | Array[Point] | 热力图集合点 |
| opacity | number | 透明度 |
| max | number | 权重最大值 |
| radius | number | 热力圆半径 |
| gradient | object | 热力图渐变区间，如： {5:'rgb(0, 110, 255)',.8:'rgb(100, 0, 255)'}，其中 key 表示插值的位置，取值范围 0 ~ 1，value 为颜色值。|

::: warning
这里的Point相比以往需多传递一个count值， 即`{ lng, lat, count }`。
:::

``` js
import React from 'react';
import { render } from 'react-dom';
import { 
  Map,
  Heatmap,
} from 'rc-bmap';

const points = [
  {"lng":116.418261,"lat":39.921984,"count":50},
  {"lng":116.423332,"lat":39.916532,"count":51},
  {"lng":116.419787,"lat":39.930658,"count":15},
  {"lng":116.418455,"lat":39.920921,"count":40},
  {"lng":116.418843,"lat":39.915516,"count":100},
  {"lng":116.42546,"lat":39.918503,"count":6},
  {"lng":116.423289,"lat":39.919989,"count":18},
  {"lng":116.418162,"lat":39.915051,"count":80},
  {"lng":116.422039,"lat":39.91782,"count":11},
  {"lng":116.41387,"lat":39.917253,"count":7},
  {"lng":116.41773,"lat":39.919426,"count":42},
  {"lng":116.421107,"lat":39.916445,"count":4},
  {"lng":116.417521,"lat":39.917943,"count":27},
  {"lng":116.419812,"lat":39.920836,"count":23},
  {"lng":116.420682,"lat":39.91463,"count":60},
  {"lng":116.415424,"lat":39.924675,"count":8},
  {"lng":116.419242,"lat":39.914509,"count":15},
  {"lng":116.422766,"lat":39.921408,"count":25},
  {"lng":116.421674,"lat":39.924396,"count":21},
  {"lng":116.427268,"lat":39.92267,"count":1},
  {"lng":116.417721,"lat":39.920034,"count":51},
  {"lng":116.412456,"lat":39.92667,"count":7},
  {"lng":116.420432,"lat":39.919114,"count":11},
  {"lng":116.425013,"lat":39.921611,"count":35},
  {"lng":116.418733,"lat":39.931037,"count":22},
  {"lng":116.419336,"lat":39.931134,"count":4},
  {"lng":116.413557,"lat":39.923254,"count":5},
  {"lng":116.418367,"lat":39.92943,"count":3},
  {"lng":116.424312,"lat":39.919621,"count":100},
  {"lng":116.423874,"lat":39.919447,"count":87},
  {"lng":116.424225,"lat":39.923091,"count":32},
  {"lng":116.417801,"lat":39.921854,"count":44},
  {"lng":116.417129,"lat":39.928227,"count":21},
  {"lng":116.426426,"lat":39.922286,"count":80},
  {"lng":116.421597,"lat":39.91948,"count":32},
  {"lng":116.423895,"lat":39.920787,"count":26},
  {"lng":116.423563,"lat":39.921197,"count":17},
  {"lng":116.417982,"lat":39.922547,"count":17},
  {"lng":116.426126,"lat":39.921938,"count":25},
  {"lng":116.42326,"lat":39.915782,"count":100},
  {"lng":116.419239,"lat":39.916759,"count":39},
  {"lng":116.417185,"lat":39.929123,"count":11},
  {"lng":116.417237,"lat":39.927518,"count":9},
  {"lng":116.417784,"lat":39.915754,"count":47},
  {"lng":116.420193,"lat":39.917061,"count":52},
  {"lng":116.422735,"lat":39.915619,"count":100},
  {"lng":116.418495,"lat":39.915958,"count":46},
  {"lng":116.416292,"lat":39.931166,"count":9},
  {"lng":116.419916,"lat":39.924055,"count":8},
  {"lng":116.42189,"lat":39.921308,"count":11},
  {"lng":116.413765,"lat":39.929376,"count":3},
  {"lng":116.418232,"lat":39.920348,"count":50},
  {"lng":116.417554,"lat":39.930511,"count":15},
  {"lng":116.418568,"lat":39.918161,"count":23},
  {"lng":116.413461,"lat":39.926306,"count":3},
  {"lng":116.42232,"lat":39.92161,"count":13},
  {"lng":116.4174,"lat":39.928616,"count":6},
  {"lng":116.424679,"lat":39.915499,"count":21},
  {"lng":116.42171,"lat":39.915738,"count":29},
  {"lng":116.417836,"lat":39.916998,"count":99},
  {"lng":116.420755,"lat":39.928001,"count":10},
  {"lng":116.414077,"lat":39.930655,"count":14},
  {"lng":116.426092,"lat":39.922995,"count":16},
  {"lng":116.41535,"lat":39.931054,"count":15},
  {"lng":116.413022,"lat":39.921895,"count":13},
  {"lng":116.415551,"lat":39.913373,"count":17},
  {"lng":116.421191,"lat":39.926572,"count":1},
  {"lng":116.419612,"lat":39.917119,"count":9},
  {"lng":116.418237,"lat":39.921337,"count":54},
  {"lng":116.423776,"lat":39.921919,"count":26},
  {"lng":116.417694,"lat":39.92536,"count":17},
  {"lng":116.415377,"lat":39.914137,"count":19},
  {"lng":116.417434,"lat":39.914394,"count":43},
  {"lng":116.42588,"lat":39.922622,"count":27},
  {"lng":116.418345,"lat":39.919467,"count":8},
  {"lng":116.426883,"lat":39.917171,"count":3},
  {"lng":116.423877,"lat":39.916659,"count":34},
  {"lng":116.415712,"lat":39.915613,"count":14},
  {"lng":116.419869,"lat":39.931416,"count":12},
  {"lng":116.416956,"lat":39.925377,"count":11},
  {"lng":116.42066,"lat":39.925017,"count":38},
  {"lng":116.416244,"lat":39.920215,"count":91},
  {"lng":116.41929,"lat":39.915908,"count":54},
  {"lng":116.422116,"lat":39.919658,"count":21},
  {"lng":116.4183,"lat":39.925015,"count":15},
  {"lng":116.421969,"lat":39.913527,"count":3},
  {"lng":116.422936,"lat":39.921854,"count":24},
  {"lng":116.41905,"lat":39.929217,"count":12},
  {"lng":116.424579,"lat":39.914987,"count":57},
  {"lng":116.42076,"lat":39.915251,"count":70},
  {"lng":116.425867,"lat":39.918989,"count":8},
];

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
  >
    <Heatmap 
      points={points}
      radius={20}
      max={100}
    />
  </Map>,
  document.getElementById('app')
);

```

## TrafficControl-路况控件
| 属性 | 类型 | 描述 |
| --- | ---- | --- |
| anchor | Enum | 控件停靠位置 |

``` js
import React from 'react';
import { render } from 'react-dom';
import { 
  Map,
  TrafficControl,
  ControlAnchor,
} from 'rc-bmap';

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
  >
    <TrafficControl anchor={ControlAnchor.BOTTOM_RIGHT} />
  </Map>,
  document.getElementById('app')
);

```

## DistanceTool-测距工具
| 属性 | 类型 | 描述 |
| ---- | ---- | --- |
| followText | string | 测距过程中，提示框文字 |
| unit | string | 测距结果所用的单位制，可接受的属性为"metric"表示米制和"us"表示美国传统单位,  |
| lineColor | string | 折线颜色 |
| lineStroke | string | 折线宽度 |
| opacity | string | 透明度 |
| lineStyle | string | 折线的样式，只可设置solid和dashed |
| cursor | string | 跟随的鼠标样式 |

事件：
| 事件名 | 描述 |
| ----- | --- |
| onaddpoint | 测距过程中，每次点击底图添加节点时触发 |
| ondrawend | 测距时，每次双击底图结束当前测距折线时触发 |

``` js
import React from 'react';
import { render } from 'react-dom';
import { 
  Map,
  DistanceTool,
} from 'rc-bmap';

let tool;
const getTool = (instance) => {
  tool = instance;
};

const mapMounted = (map) => {
  tool.open(); // 开启测距状态
  // tool.close(); // 关闭测距状态
};

const events = {
  onaddpoint() {
    console.log('on add');
  }
};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
    mapMounted={mapMounted}
  >
    <DistanceTool 
      getInstance={getTool} 
      events={events}
    />
  </Map>,
  document.getElementById('app')
);

```