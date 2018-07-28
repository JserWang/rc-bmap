# 其他

## AutoComplete-自动完成类
> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b50)，
> 当前版本input仅支持传入文本框id。

| 属性 | 类型 | 描述 |
| ---- | ---- | ---- |
| input | string | 文本框id |
| searchComplete | function | 搜索完成时回调函数 |
| events | object | 绑定事件 |

事件：
| 事件 | 描述 |
| ---- | ---- |
| onconfirm | 回车选中某条记录后触发 |
| onhighlight | 键盘或者鼠标移动，某条记录高亮之后 |

``` js
import React from 'react';
import { render } from 'react-dom';
import { 
  Map,
  AutoComplete,
} from 'rc-bmap';

const events = {
  onconfirm() {
    console.log('onconfirm');
  },
  onhighlight() {
    console.log('onhighlight');
  },
};

const container = {
  height: '100%',
};

const mapContainer = {
  height: '90%',
};

const searchComplete = () => {
  console.log('searchComplete');
};

render(
  <div style={container}>
    <div style={mapContainer}>
      <Map 
        ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
        scrollWheelZoom
      >
        <AutoComplete 
          input="suggest"
          searchComplete={searchComplete}
          events={events}
        />
      </Map>
    </div>
    <input id="suggest" />
  </div>,
  document.getElementById('app')
);

```

## Tile-自定义图层
> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a6b0)

| 属性 | 类型 | 描述 |
| --- | ---- | --- |
| transparentPng | boolean | 是否使用了带有透明信息的PNG |
| tileUrlTemplate | string | 指定图块网址模板，该模板可以针对每个图块请求而展开，以根据现有的图块坐标系引用唯一的图块。模板的格式应该为：http://yourhost/tile?x={X}&y={Y}&z={Z}.png 其中X和Y分别指纬度和经度图块坐标，Z指缩放级别，比如： http://yourhost/tile?x=3&y=27&z=5.png 如果您没有提供图块网址模板，您需要实现TileLayer.getTileUrl()抽象方法。|
| copyright | { id, content, bounds } | 地图图层的版权信息 |
| zIndex | number | 图层的zIndex |
| getTilesUrl | function | 抽象。向地图返回地图图块的网址，图块索引由tileCoord的x和y属性在指定的缩放级别zoom提供。如果您在TileLayerOptions中提供了tileUrlTemplate参数，则可不实现此接口。 |

``` js
import React from 'react';
import { render } from 'react-dom';
import { 
  Map,
  Tile,
} from 'rc-bmap';

const getTilesUrl = (tileCoord, zoom) => {
  const x = tileCoord.x;
  const y = tileCoord.y;
  //根据当前坐标，选取合适的瓦片图
  return 'http://lbsyun.baidu.com/jsdemo/demo/tiles/' + zoom + '/tile' + x + '_' + y + '.png';  
};

const center = {
  lng: 116.332782,
  lat: 40.007978,
};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
    center={center}
    zoom={16}
  >
    <Tile 
      transparentPng
      getTilesUrl={getTilesUrl}
    />
  </Map>,
  document.getElementById('app')
);

```

## convertPoint-坐标转换
> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a7b55)

与百度略有不同的是，`convertPoint`的第一个参数为`points`，传入指定坐标点的字面量值，或数组。第二个参数为`from`，第三个参数为`to`，关于from、to的理解，可参考[百度坐标转换web api](http://lbsyun.baidu.com/index.php?title=webapi/guide/changeposition)，返回值为`Promise`。
