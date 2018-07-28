# 覆盖物

## 基础类
就像控件一样，覆盖物同样也提供了基础类的封装，用法与控件基础类相似，尽可能的降低了您在使用时的理解成本。

自定义覆盖物需继承自`Overlay`：
``` js
import React from 'react';
import { ReactComponent, Overlay } from 'rc-bmap';

const container = {
  width: 100,
  height: 20,
};

@ReactComponent
class CustomOverlay extends Overlay {
  render() {
    return (
      <div style={container}>自定义覆盖物</div>
    )
  }
}

export default CustomOverlay;

```

同样，我们将自定义覆盖物添加至`Map`，看看效果吧。
``` js
import React from 'react';
import { render } from 'react-dom';
import { Map, MapPane } from 'rc-bmap';
import CustomOverlay from './CustomOverlay';

const point = {
  lng: 116.404,
  lat: 39.915,
};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
  >
    <CustomOverlay 
      point={point}
      pane={MapPane.MARKER}
      zIndex={100}
    />
  </Map>,
  document.getElementById('app')
);


```

与基础控件不同的是，这里需要指定`point`用于指定将当前覆盖物添加的坐标。`pane`属性用来表示需要将覆盖物添加至地图中的哪个容器，详细可见常量[MapPane](#)中的值，或见[百度地图文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b1)。`zIndex`就像html中的`z-index`一样，用来表示z轴显示位置的。

在自定义覆盖物中，您同样可以使用`state`、`setState`、`render`，在此不再展示自定义覆盖物中的进阶用法，您可以参考[复杂自定义控件实现](./control.html#复杂自定义控件实现)。

能在地图中看到自定义覆盖物，自然也离不开`ReactComponent`的功劳。

## Marker-标注
`Marker`作为地图中较常用的覆盖物，最简单的使用方式:

``` js
import React from 'react';
import { render } from 'react-dom';
import { Map, Marker } from 'rc-bmap';

const point = {
  lng: 116.404,
  lat: 39.915,
};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
  >
    <Marker 
      point={point}
    />
  </Map>,
  document.getElementById('app')
);

```

### 偏移值
像控件一样，`Marker`同样可以通过`offset`设置偏移值，这里需要注意一点，由于是偏移值，需尽量将值控制相对较小，否则在地图缩放后，会有意想不到的效果。

### 自定义icon
不想使用百度默认提供的icon时，可以通过自定义icon来进行个性化设置。
``` js
import React from 'react';
import { render } from 'react-dom';
import { Map, Marker } from 'rc-bmap';

const point = {
  lng: 116.404,
  lat: 39.915,
};

const icon = {
  url: "http://lbsyun.baidu.com/jsdemo/img/fox.gif",
  size: {
    width: 300,
    height: 157,
  },
  opts: {
    imageOffset: { width: 10, height: 10 },
  },
};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
  >
    <Marker 
      point={point}
      icon={icon}
    />
  </Map>,
  document.getElementById('app')
);

```
关于自定义icon的设置，您可以参考[百度地图Icon](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b5)相关的配置，以字面量的形式传递给Marker，其中`IconOptions`改名为`opts`，`Size`变为 `{ width, height }`的形式，其他保持原有即可。

### 设置label
当您想为`Marker`添加标签时，可以使用[Label]()标签。
``` js
import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Label } from 'rc-bmap';

const point = {
  lng: 116.404,
  lat: 39.915,
};

const labelOffset = {
  width: 0,
  height: -10
};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
  >
    <Marker 
      point={point}
      label={<Label content="标签" offset={labelOffset} />}
    />
  </Map>,
  document.getElementById('app')
);

```

### 设置动画
`Marker`目前支持两种动画，可通过`animation`进行设置。
``` js
import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Animation } from 'rc-bmap';

const point = {
  lng: 116.404,
  lat: 39.915,
};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
  >
    <Marker 
      point={point}
      animation={Animation.BOUNCE}
    />
  </Map>,
  document.getElementById('app')
);

```

### 绑定事件
这里可以通过`events`一次性将需要绑定的事件写入，为`Marker`进行绑定。使用方式可参考`Map`绑定事件。
`Marker`支持的事件，可参考[百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b2)。

### 右键菜单
同`Map`使用方式，传递`contextMenu`即可。不同的是，当`clicking`设置为false时，`Marker`将不能响应右键菜单。

### 高级配置
| 属性名         | 类型                       | 说明                  |
| ------------- |:-------------------------:|--------------------|
| [massClear](#highresolution)| boolean | 是否在调用map.clearOverlays清除此覆盖物，默认为true |
| [dragging](#autoresize) | boolean | 是否启用拖拽，默认为false |
| [clicking](#mapclick) | boolean | 是否响应点击事件。默认为true |
| [raiseOnDrag](#dragging) | boolean | 拖拽标注时，标注是否开启离开地图表面效果。默认为false |
### 更多配置
更多配置，见[Marker]()。

## Symbol-矢量图标注
矢量图标继承自`Marker`，享有`Marker`的所有属性，唯独不同的是，您需要为`Symbol`设置它独有的属性。
::: warning 注意
由于`Symbol`实现原理为替换掉`Marker`属性中的icon，所以在此您设置的icon属性将被覆盖掉。
:::
### 特有属性
| 属性名 | 类型 | 说明 |
| ----- | ---- | --- |
| path | string or SymbolShapeType | path为svg中的path字符串或者已定义的符号常量 |
| anchor | object | 符号的位置偏移值 |
| fillColor | string | 设置矢量图标的填充颜色。支持颜色常量字符串、十六进制、RGB、RGBA等格式 |
| fillOpacity | number | 设置矢量图标填充透明度,范围0~1 |
| scale | number | 设置矢量图标的缩放比例 |
| rotation | number | 设置矢量图标的旋转角度,参数为角度 |
| strokeColor | string | 设置矢量图标的线填充颜色,支持颜色常量字符串、十六进制、RGB、RGBA等格式 |
| strokeOpacity | number |设置矢量图标线的透明度,opacity范围0~1 |
| strokeWeight | number | 旋设置线宽。如果此属性没有指定，则线宽跟scale数值相同 |

``` js
import React from 'react';
import { render } from 'react-dom';
import { Map, Symbol, SymbolShapeType, Animation } from 'rc-bmap';

const point = {
  lng: 116.404,
  lat: 39.915,
};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
  >
    <Symbol
      path={SymbolShapeType.FORWARD_CLOSED_ARROW}
      scale={5}
      strokeWeight={1}
      rotation={0}
      fillColor="red"
      fillOpacity={0.8}
      point={point}
      animation={Animation.BOUNCE}
    />
  </Map>,
  document.getElementById('app')
);

```
## Label-文本标注
上面我们已经看到了一个最简单`Label`的实现方式。

这是Label所支持的全部属性：
``` js
import React from 'react';
import { render } from 'react-dom';
import { Map, Label } from 'rc-bmap';

const point = {
  lng: 116.404,
  lat: 39.915,
};

const offset = {
  width: 3,
  height: 0
};

const events = {
  click() {
    console.log('label click');
  }
};

const style = {
  backgroundColor: 'red',
  color: '#fff'
};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
  >
    <Label
      content="这是我的标签" // 显示标签，支持html
      point={point} // 标签显示坐标
      offset={offset} // 偏移值
      massClear={false} // 地图clearOverlays()时，是否清空
      title="鼠标悬浮时显示文字" // 鼠标悬浮显示文字
      events={events} // 绑定事件
      zIndex={100} // 同html的z-index
      style={style} // 标签样式
    />
  </Map>,
  document.getElementById('app')
);

```

## InfoWindow-信息窗口
> 对应[百度文档地址](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b7)。

``` js
import React from 'react';
import { render } from 'react-dom';
import { Map, InfoWindow } from 'rc-bmap';

const point = {
  lng: 116.404,
  lat: 39.915,
};

const offset = {
  width: 3,
  height: 0
};

const events = {
  open() {
    console.log('InfoWindow open');
  }
};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
  >
    <InfoWindow
      title="弹出框标题" // 信息窗标题文字，支持HTML内容
      content="弹出框内容" // 信息窗显示文字，支持HTML内容
      point={point} // 显示位置坐标
      offset={offset} // 信息窗位置偏移值。
      width={0} // 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整
      height={0} // 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整
      maxWidth={250} // 信息窗最大化时的宽度，单位像素。取值范围：220 - 730
      autoPan={false} // 是否开启信息窗口打开时地图自动移动（默认开启）
      closeOnClick={false} // 是否开启点击地图关闭信息窗口（默认开启）
      displayMessage={false} // 是否在信息窗里显示短信发送按钮（默认开启）
      message="短信内容" // 自定义部分的短信内容
      events={events} // 绑定事件
    />
  </Map>,
  document.getElementById('app')
);

```

## Polyline-折线
> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b11)

``` js
import React from 'react';
import { render } from 'react-dom';
import { Map, Polyline } from 'rc-bmap';

const points = [{
  lng: 116.399,
  lat: 39.910,
}, {
  lng: 116.405,
  lat: 39.920,
}, {
  lng: 116.425,
  lat: 39.900
}];

const events = {
  click() {
    console.log('Polyline click');
  }
};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
  >
    <Polyline
      points={points} // 指定位置的坐标
      strokeColor="blue" // 折线颜色
      strokeWeight={5} // 折线的宽度，以像素为单位
      strokeOpacity={0.5} // 折线的透明度，取值范围0 - 1
      strokeStyle="dashed" // 折线的样式，solid或dashed
      massClear={false} // 是否在调用map.clearOverlays清除此覆盖物，默认为true
      editing={false} // 是否启用线编辑，默认为false
      clicking={true} // 是否响应点击事件，默认为true
      events={events} // 绑定事件
    />
  </Map>,
  document.getElementById('app')
);

```

## Circle-圆
> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b16)

``` js
import React from 'react';
import { render } from 'react-dom';
import { Map, Circle } from 'rc-bmap';

const point = {
  lng: 116.404,
  lat: 39.915,
};

const events = {
  click() {
    console.log('Circle click');
  }
};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
  >
    <Circle
      point={point} // 指定位置的坐标
      radius={500}
      strokeColor="blue" // 圆形边线颜色
      fillColor="red" // 圆形填充颜色。当参数为空时，圆形将没有填充效果
      strokeWeight={5} // 圆形边线的宽度，以像素为单位
      strokeOpacity={0.5} // 圆形边线透明度，取值范围0 - 1
      fillOpacity={0.9} // 圆形填充的透明度，取值范围0 - 1
      strokeStyle="dashed" // 圆形边线的样式，solid或dashed
      massClear={false} // 是否在调用map.clearOverlays清除此覆盖物，默认为true
      editing={false} // 是否启用线编辑，默认为false
      clicking={true} // 是否响应点击事件，默认为true
      events={events} // 绑定事件
    />
  </Map>,
  document.getElementById('app')
);

```

## Polygon-多边形
> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b14)

``` js
import React from 'react';
import { render } from 'react-dom';
import { Map, Polygon } from 'rc-bmap';

const points = [{
  lng: 116.387112,
  lat: 39.920977,
}, {
  lng: 116.385243,
  lat: 39.913063,
}, {
  lng: 116.394226,
  lat: 39.917988
}, {
  lng: 116.401772,
  lat: 39.921364
}, {
  lng: 116.41248,
  lat: 39.927893
}];

const events = {
  click() {
    console.log('Polygon click');
  }
};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
  >
    <Polygon
      points={points} // 指定位置的坐标
      strokeColor="blue" // 边线颜色
      fillColor="red" // 填充颜色。当参数为空时，圆形将没有填充效果
      strokeWeight={5} // 边线的宽度，以像素为单位
      strokeOpacity={0.5} // 边线透明度，取值范围0 - 1
      fillOpacity={0.9} // 填充的透明度，取值范围0 - 1
      strokeStyle="dashed" // 边线的样式，solid或dashed
      massClear={false} // 是否在调用map.clearOverlays清除此覆盖物，默认为true
      editing={false} // 是否启用线编辑，默认为false
      clicking={true} // 是否响应点击事件，默认为true
      events={events} // 绑定事件
    />
  </Map>,
  document.getElementById('app')
);

```

## Boundary-行政区域
该类继承自多边形`Polygon`，享有其所有属性，`Boundary`额外提供了3个属性`name`、`onError`、`autoViewport`。

``` js
import React from 'react';
import { render } from 'react-dom';
import { Map, Boundary } from 'rc-bmap';

const events = {
  click() {
    console.log('Boundary click');
  }
};

const onError = () => {
  console.log('onError');
}

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
  >
    <Boundary
      name="北京市朝阳区" // 行政区域名字
      onError={onError} // 初始化失败回调
      autoViewport // 添加完成后是否自动移动
      strokeColor="blue" // 边线颜色
      fillColor="red" // 填充颜色。当参数为空时，圆形将没有填充效果
      strokeWeight={5} // 边线的宽度，以像素为单位
      strokeOpacity={0.5} // 边线透明度，取值范围0 - 1
      fillOpacity={0.9} // 填充的透明度，取值范围0 - 1
      strokeStyle="dashed" // 边线的样式，solid或dashed
      massClear={false} // 是否在调用map.clearOverlays清除此覆盖物，默认为true
      editing={false} // 是否启用线编辑，默认为false
      clicking={true} // 是否响应点击事件，默认为true
      events={events} // 绑定事件
    />
  </Map>,
  document.getElementById('app')
);

```

## PointCollection-海量标注
> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b20)，示例中points文件来自于[百度提供js](http://api.map.baidu.com/library/CurveLine/1.5/src/CurveLine.min.js)。

``` js
import React from 'react';
import { render } from 'react-dom';
import { Map, PointCollection, SizeType, ShapeType } from '.rc-bmap';
import points from './points';

const events = {
  click() {
    console.log('PointCollection click');
  }
};

const pList = points.data.map(item => {
  return {
    lng: item[0],
    lat: item[1],
  };
});

const mapCenter = {lng: 105.000, lat: 38.000};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
    center={mapCenter}
    zoom={5}
  >
    <PointCollection
      points={pList} // 点集合
      shape={ShapeType.STAR} // 海量点的预设形状
      size={SizeType.LARGE} // 海量点的预设尺寸
      color="#d340c3" // 海量点的颜色，默认为'#fa937e'
      events={events} // 绑定事件
    />
  </Map>,
  document.getElementById('app')
);

```

## Ground-地面叠加层
> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b18)

这里的bounds第一次出现，如果你还不了解，可以[参考](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a1b2)。
其中，`sw`表示矩形西南角经纬度，`ne`表示矩形东北角经纬度。

``` js
import React from 'react';
import { render } from 'react-dom';
import { Map, Ground } from 'rc-bmap';

const events = {
  click() {
    console.log('Ground click');
  }
};

const bounds = {
  sw: {
    lng: 116.29579,
    lat: 39.837146
  },
  ne: {
    lng: 116.475451,
    lat: 39.9764
  }
};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
    zoom={12}
  >
    <Ground 
      bounds={bounds} // 设置图层显示的矩形区域
      imageURL="http://lbsyun.baidu.com/jsdemo/img/si-huan.png" // 图层地址
      opacity={1} // 图层透明度
      maxZoom={14} // 图层显示的最大级别
      minZoom={10} // 图层显示的最小级别
      events={events}
    /> 
  </Map>,
  document.getElementById('app')
);

```
