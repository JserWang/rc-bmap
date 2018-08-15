# 地图

## 创建 Map

作为最外层的容器，所有的地图组件都将被`Map`包裹

```js
<Map>{/* ...其他地图组件 */}</Map>
```

您可以通过两种方式来初始化使用地图组件:

- 通过 script 标签引入

```html
<script type="text/javascript" src="https://api.map.baidu.com/api?v=3.0&ak=您的密钥"></script>
```

::: warning 在此您还需要注意
通过`script`标签引入时，您需要保证 js 的加载顺序，也就是您的业务代码，需要在该`script`之后。
虽然引入`script`时，放到`body`最后是好的做法，但是如果您手动引入百度地图时，最好将`script`添加至`head`中。

另外，若您想使用`import BMap from 'BMap';`这样的操作时，您还需要额外在`webpack config`中添加以下信息:

```js
externals: {
  BMap: 'BMap',
},
```

:::

- 通过传入`ak`属性来进行异步渲染。当您将`ak`作为`Map`的属性传入时，将自动通过异步加载的方式来为您动态添加 script。

在您没有对 BMap 特殊的操作需求时，我推荐您使用异步加载的方式，因为它为您节省了很多配置的步骤，以及避免了加载顺序所带来的不必要性错误。

## 渲染前与渲染后

地图渲染前，您可以通过`placeHolder`来设置渲染时展示的文字或者 React 组件，`placeHolder`的默认值为字符串"地图加载中..."。

地图渲染后，您可以通过`mapMounted`回调函数来监听渲染完成事件，您可以通过`window.bMapInstance`来访问到当前`map`实例，您可以通过`window.BMap`访问到百度地图类。

```js
import React from "react";
import { render } from "react-dom";
import { Map } from "rc-bmap";

const handleMapMounted = map => {
  console.log("map mounted:", map);
};

render(
  <Map
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    placeHolder="玩命加载中!!!"
    mapMounted={handleMapMounted}
  />,
  document.getElementById("app")
);
```

上面提到`placeHolder`还支持 React 组件，接下来一起将它替换一下看看效果吧。

```js
import React from "react";
import { render } from "react-dom";
import { Map } from "rc-bmap";

const handleMapMounted = map => {
  console.log("map mounted:", map);
};

const loading = () => <div className="spinner" />;

render(
  <Map
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    placeHolder={loading()}
    mapMounted={handleMapMounted}
  />,
  document.getElementById("app")
);
```

## 中心点 & 缩放级别

由于百度地图在初次渲染时，必须提供`centerAndZoom`，所以在此为您设置了默认值`center`为天安门的经纬度`{ lng: 116.404, lat: 39.915 }`, `zoom`的默认值为 15。您仍然可以通过设置`props`的方式设置您认为合适的值。

```js
import React from "react";
import { render } from "react-dom";
import { Map } from "rc-bmap";

const centerPoint = { lng: 116.372074, lat: 39.967488 };

render(
  <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv" center={centerPoint} zoom={17} />,
  document.getElementById("app")
);
```

`zoom`，范围 3-19 级，若调用高清底图（针对移动端开发）时，`zoom`可赋值范围为 3-18 级

### zoom 对应关系

| 值  | 描述                                                                                                 |
| --- | ---------------------------------------------------------------------------------------------------- |
| 3   | 洲区域，比如亚洲、欧洲、非洲                                                                         |
| 4   | 国际，比如中国                                                                                       |
| 5   | 省会，比如省会，增加黑色交通路线                                                                     |
| 6   | 市，显示各省区市，增加黄色交通路线                                                                   |
| 7   | 仅是在 6 级放大了，地图看起来更舒服                                                                  |
| 8   | 增加国道显示                                                                                         |
| 9   | 粗略显示，还有县、市未显示                                                                           |
| 10  | 区、县全部显示                                                                                       |
| 11  | 区、县、城镇、乡、街道名，未全部显示                                                                 |
| 12  | 区、县、城镇、乡、街道名、地名，地名未显示                                                           |
| 13  | 在 12 的基础上，增加地名显示                                                                         |
| 14  | 区、县、城镇、乡、街道名、地名、小地名、小街道，增加大地名，轮廓显示，大地名着色，区隐藏             |
| 15  | 区、县、城镇、乡、街道名、地名、小地名、小街道，增加小区道路                                         |
| 16  | 区、县、城镇、乡、街道名、地名、小地名、小街道、小型店面，增加小型店面着色                           |
| 17  | 区、县、城镇、乡、街道名、地名、小地名、小街道、小型店面、超小型店面，地铁路口级显示                 |
| 18  | 区、县、城镇、乡、街道名、地名、小地名、小街道、小型店面、超小型店面，增加超小型区域轮廓，三维图显示 |
| 19  | 区、县、城镇、乡、街道名、地名、小地名、小街道、小型店面、超小型店面，在 18 级基础上放大，无增加     |

### 最大缩放级别 & 最小缩放级别

您可以通过`maxZoom`与`minZoom`为地图设置最大缩放级别与最小缩放级别。

## 事件绑定

这里可以通过`events`一次性将需要绑定的事件写入，为组件进行绑定。`Map`中具体支持的事件，可以通过[API](/api/map.html#events)中进行查看。
在 rc-bmap 中绑定方式如下：

```js
import React from "react";
import { render } from "react-dom";
import { Map } from "rc-bmap";

const mapEvents = {
  click: event => {
    console.log("mapClick", event);
  },
  zoomend: event => {
    console.log("zoomend", event);
  }
};

render(
  <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv" events={mapEvents} />,
  document.getElementById("app")
);
```

## 右键菜单

您可以直接通过`contextMenu`来为`Map`添加右键菜单。

```js
import React from "react";
import { render } from "react-dom";
import { Map } from "rc-bmap";

const zoomIn = () => {
  global.bMapInstance.zoomIn();
};

const zoomOut = () => {
  global.bMapInstance.zoomOut();
};

const contextMenu = {
  items: [
    {
      text: "放大",
      callback: zoomIn
    },
    {
      text: "缩小",
      callback: zoomOut,
      separator: true
    }
  ]
};

render(
  <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv" contextMenu={contextMenu} />,
  document.getElementById("app")
);
```

## 高级配置

除了基础配置之外，还为您提供了一些额外的配置项来满足日常需求。

| 属性名           |  类型   | 说明                               |
| ---------------- | :-----: | ---------------------------------- |
| highResolution   | boolean | 是否启用使用高分辨率地图，默认启用 |
| autoResize       | boolean | 是否自动适应地图容器变化，默认启用 |
| mapClick         | boolean | 是否启用底图可点功能，默认启用     |
| dragging         | boolean | 是否启用地图拖拽, 默认启用         |
| scrollWheelZoom  | boolean | 是否启用滚轮放大缩小，默认禁用     |
| doubleClickZoom  | boolean | 是否启用双击放大，默认启用         |
| keyboard         | boolean | 是否启用键盘操作，默认禁用         |
| inertialDragging | boolean | 是否启用地图惯性拖拽，默认禁用     |
| continuousZoom   | boolean | 是否启用连续缩放效果，默认启用     |
| pinchToZoom      | boolean | 是否启用双指操作缩放，默认启用     |

```js
import React from "react";
import { render } from "react-dom";
import { Map } from "rc-bmap";

render(
  <Map
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
    mapClick={false}
  />,
  document.getElementById("app")
);
```

## 个性化地图

您可通过`mapStyle`属性来进行个性化地图的相关配置。

- 当您使用[百度地图个性化模板时](http://lbsyun.baidu.com/custom/list.htm)，您可以通过如下方式进行设置

```js
import React from "react";
import { render } from "react-dom";
import { Map } from "rc-bmap";

const mapStyle = {
  style: "midnight"
};

render(
  <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv" mapStyle={mapStyle} />,
  document.getElementById("app")
);
```

- 当您使用[百度地图图形编辑工具](http://lbsyun.baidu.com/img-editor.html)，您可以通过如下方式进行设置

```js
import React from "react";
import { render } from "react-dom";
// 这里存储您通过编辑器生成的json
import styleJson from "./styleJson";
import { Map } from "rc-bmap";

const mapStyle = {
  styleJson
};

render(
  <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv" mapStyle={mapStyle} />,
  document.getElementById("app")
);
```

## 更多

更多属性，可见[API](/api/map.html)中的描述。
