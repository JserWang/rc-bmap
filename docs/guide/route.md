# 规划

出于对规划相关的需求不同，所以这里不只是做简单的两点规划展示，您可以通过`getInstance`方法获取到对应组件实例后，进行规划操作。

以下所有规划类，将`Options`展开作为属性传入组件即可。

::: warning 需要注意一点
每个规划均提供`ShowInMap`属性，用来表示是否将查询结果渲染至地图中，若不需要展示，不设置即可。

由于 3.0 的 api，部分规划不支持模糊匹配搜索（根据中文地名查询规划），所以在此提供
`getPoiByKeyword`方法，用于支持模糊匹配。
:::

## TransitRoute-公交线路规划

> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b7)

```js
import React from "react";
import { render } from "react-dom";
import {
  Map,
  TransitRoute,
  getPoiByKeyword,
  TransitPolicy,
  IntercityPolicy,
  TransitTypePolicy
} from "rc-bmap";

let route;
const getRoute = instance => {
  route = instance;
};

const mapMounted = map => {
  Promise.all([
    getPoiByKeyword("百度大厦"),
    getPoiByKeyword("北京邮电大学西门")
  ]).then(res => {
    route.search(res[0], res[1]);
  });
};

render(
  <Map
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
    mapMounted={mapMounted}
  >
    <TransitRoute
      getInstance={getRoute}
      showInMap
      policy={TransitPolicy.LEAST_TIME}
      intercityPolicy={IntercityPolicy.EARLY_START}
      transitTypePolicy={TransitTypePolicy.COACH}
      // 这里还有更多属性，可参考官方文档
    />
  </Map>,
  document.getElementById("app")
);
```

## DrivingRoute-驾车路线规划

> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b22)

```js
import React from "react";
import { render } from "react-dom";
import { Map, DrivingRoute, getPoiByKeyword, DrivingPolicy } from "rc-bmap";

let route;
const getRoute = instance => {
  route = instance;
};

const mapMounted = map => {
  Promise.all([
    getPoiByKeyword("百度大厦"),
    getPoiByKeyword("北京邮电大学西门")
  ]).then(res => {
    route.search(res[0], res[1]);
  });
};

render(
  <Map
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
    mapMounted={mapMounted}
  >
    <DrivingRoute
      getInstance={getRoute}
      showInMap
      policy={DrivingPolicy.FIRST_HIGHWAYS}
      // 这里还有更多属性，可参考文档
    />
  </Map>,
  document.getElementById("app")
);
```

## RidingRoute-骑行路线规划

> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b19)

```js
import React from "react";
import { render } from "react-dom";
import { Map, RidingRoute, getPoiByKeyword } from "rc-bmap";

let route;
const getRoute = instance => {
  route = instance;
};

const mapMounted = map => {
  Promise.all([
    getPoiByKeyword("百度大厦"),
    getPoiByKeyword("北京邮电大学西门")
  ]).then(res => {
    route.search(res[0], res[1]);
  });
};

render(
  <Map
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
    mapMounted={mapMounted}
  >
    <RidingRoute
      getInstance={getRoute}
      showInMap
      // 这里还有更多属性，可参考文档
    />
  </Map>,
  document.getElementById("app")
);
```

## WalkingRoute-步行路线规划

> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b16)

```js
import React from "react";
import { render } from "react-dom";
import { Map, WalkingRoute, getPoiByKeyword } from "rc-bmap";

let route;
const getRoute = instance => {
  route = instance;
};

const mapMounted = map => {
  Promise.all([
    getPoiByKeyword("百度大厦"),
    getPoiByKeyword("北京邮电大学西门")
  ]).then(res => {
    route.search(res[0], res[1]);
  });
};

render(
  <Map
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
    mapMounted={mapMounted}
  >
    <WalkingRoute
      getInstance={getRoute}
      showInMap
      // 这里还有更多属性，可参考文档
    />
  </Map>,
  document.getElementById("app")
);
```

## LocalSearch-周边检索

> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b0)

```js
import React from "react";
import { render } from "react-dom";
import { Map, LocalSearch, getPoiByKeyword, getMapBounds } from "rc-bmap";

let route;
const getRoute = instance => {
  route = instance;
};

const mapMounted = map => {
  route.searchInBounds(["酒店", "加油站"], getMapBounds());
};

render(
  <Map
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
    mapMounted={mapMounted}
  >
    <LocalSearch
      getInstance={getRoute}
      showInMap
      // 这里还有更多属性，可参考文档
    />
  </Map>,
  document.getElementById("app")
);
```

## BusLineSearch-公交路线搜索

> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b43)

```js
import React from "react";
import { render } from "react-dom";
import { Map, BusLineSearch, getPoiByKeyword } from "rc-bmap";

let route;
const getRoute = instance => {
  route = instance;
};

const mapMounted = map => {
  route.getBusList(331);
};

const onGetBusListComplete = result => {
  if (result) {
    // 获取第一个公交列表显示到map上
    const fstLine = result.getBusListItem(0);
    route.getBusLine(fstLine);
  }
};

render(
  <Map
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
    mapMounted={mapMounted}
  >
    <BusLineSearch
      getInstance={getRoute}
      showInMap
      onGetBusListComplete={onGetBusListComplete}
      // 这里还有更多属性，可参考文档
    />
  </Map>,
  document.getElementById("app")
);
```

## 工具方法

为了更好的支持规划相关的使用而暴露出来的方法。

### getPoiByKeyword(keyword)

根据关键字获取[LocalResultPoi](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b5)，该方法返回值为`Promise`。

### getMapBounds()

获取当前地图可视区域，返回值为`{ sw, ne }`。

### getBounds({sw, ne})

返回一个包含所有给定点坐标的矩形区域。其中 sw 表示矩形区域的西南角，参数 ne 表示矩形区域的东北角。
