# 控件

## 基础类

百度地图提供了基础的`Control`类，于是`rc-bmap`也为您提供了基础类`Control`的封装。
当您想实现一个自定义的控件时，您仅需要继承该类即可完成自定义，在`render`函数使用 jsx 语法即可。

```js
import React from "react";
import { ReactComponent, Control } from "rc-bmap";

@ReactComponent
class CustomControl extends Control {
  render() {
    return <div>这是一个自定义控件</div>;
  }
}

export default CustomControl;
```

上面便是一个最简单的实现自定义控件的实现方式，接下来，让我们一起将它当做`Map` 的子组件来看看效果吧。

```js
import React from "react";
import { render } from "react-dom";
import { ControlAnchor, Map } from "rc-bmap";
import CustomControl from "./CustomControl";

const offset = {
  width: 10,
  height: 10
};

render(
  <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv">
    <CustomControl anchor={ControlAnchor.TOP_RIGHT} offset={offset} />
  </Map>,
  document.getElementById("app")
);
```

找到了吗？如果没有，仔细看看地图的右上角！看，我们通过上面代码自定义的子组件显示在地图上了。

OK，这里你又要继续了解关于基础组件的必须提供的两个属性了，一个是`anchor`，另一个是`offset`。

### anchor

`anchor`为控件默认的停靠位置，默认值为`BMAP_ANCHOR_TOP_LEFT`。
写起来会很长？没关系，为此准备了常量[ControlAnchor](#)，为您免去苦恼，打点即用。

### offset

`offset`控件默认的位置偏移值，默认值为`{ width: 0, height: 0 }`。

::: warning 注意
您能将自定义控件像 React 组件一样使用，离不开一个高阶的功劳`ReactComponent`。

为此，您需要在头部增加`@ReactComponent`，来将这个类识别为 React 组件。

`@`的用法，需要 babel 的支持，若您想用，请安装：

```bash
  # 安装支持
  yarn add --dev babel-plugin-transform-decorators-legacy
  # 或者：npm install --save-dev babel-plugin-transform-decorators-legacy
```

并在.babelrc 中进行配置：

```js
  "plugins": [
    "transform-decorators-legacy"
  ]
```

当然，若您不想使用`@`的用法，您可以在 export 的时候，通过调用`ReactComponent`函数，也可以完成类似操作。

```js
export default ReactComponent(CustomControl);
```

:::

### 复杂自定义控件实现

定义 `ComplexControl`控件：

```js
import React from "react";
import { ReactComponent, Control } from "rc-bmap";

const checkedStyle = {
  height: 10,
  width: 10,
  borderRadius: 5,
  background: "#e89a37"
};

const unCheckedStyle = {
  height: 10,
  width: 10,
  borderRadius: 5,
  background: "#888"
};

const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#fff",
  height: 40,
  width: 70,
  padding: "0 10px",
  cursor: "pointer",
  borderRadius: 3
};

@ReactComponent
class ComplexControl extends Control {
  constructor(props) {
    super(props);
    this.state = {
      checkedState: false
    };
  }

  handleClick = () => {
    this.setState({
      checkedState: !this.state.checkedState
    });
  };

  render() {
    const { checkedState } = this.state;
    return (
      <div style={container} onClick={this.handleClick}>
        <div style={checkedState ? checkedStyle : unCheckedStyle} />
        <div>路线</div>
      </div>
    );
  }
}

export default ComplexControl;
```

在 Map 中使用：

```js
import React from "react";
import { render } from "react-dom";
import { ControlAnchor, Map } from "rc-bmap";
import ComplexControl from "./ComplexControl";

const offset = {
  width: 10,
  height: 10
};

render(
  <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv">
    <ComplexControl offset={offset} anchor={ControlAnchor.TOP_RIGHT} />
  </Map>,
  document.getElementById("app")
);
```

::: tip 提示
在自定义控件中，为了防止`render`中的`this`丢失，您有两种方式进行函数的`this`绑定，
一个是上述示例中，直接使用箭头函数，另一个是在`constructor`中提前进行`bind`操作。

```js
this.handleClick = this.handleClick.bind(this);
```

在自定义控件中，你依然可以使用`state`进行内部状态控制，通过`setState`来再次触发`render`。
:::

_以下控件内部提供了属性的默认值，当您不进行任何配置时，依然可以正常使用，当前展现控件可设置的属性而填写。_

- Navigation
- Geolocation
- OverviewMap
- Scale
- MapTypeCtrl

## Navigation-平移缩放控件

> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b2)

```js
import React from "react";
import { render } from "react-dom";
import { ControlAnchor, Map, Navigation, NavigationType } from "rc-bmap";

const offset = {
  width: 10,
  height: 10
};

render(
  <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv">
    <Navigation
      offset={offset} // 停靠偏移值，默认为{ width: 10, height: 10 }
      anchor={ControlAnchor.TOP_LEFT} // 停靠位置，默认为TOP_LEFT
      type={NavigationType.LARGE} // 类型，默认为LARGE
      showZoomInfo={false} // 是否显示级别提示信息，默认为true
      geolocation // 控件是否集成定位功能，默认为false，这里
    />
  </Map>,
  document.getElementById("app")
);
```

## Geolocation-定位控件

> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b5)

```js
import React from "react";
import { render } from "react-dom";
import { ControlAnchor, Map, Geolocation } from "rc-bmap";

const offset = {
  width: 10,
  height: 10
};

const locationIcon = {
  url: "http://api0.map.bdimg.com/images/copyright_logo.png",
  size: { width: 100, height: 100 }
};

const geoEvents = {
  locationSuccess: event => {
    console.log("locationSuccess", event);
  },
  locationError: event => {
    console.log("locationError", event);
  }
};

render(
  <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv">
    <Geolocation
      offset={offset} // 停靠偏移值，默认为{ width: 0, height: 0 }
      anchor={ControlAnchor.BOTTOM_LEFT} // 停靠位置，默认为BOTTOM_LEFT
      showAddressBar // 是否显示定位信息面板。默认显示定位信息面板
      locationIcon={locationIcon} // 可自定义定位中心点的Icon样式
      autoLocation={false} // 添加控件时是否进行定位。默认添加控件时不进行定位
      events={geoEvents} // 绑定事件
    />
  </Map>,
  document.getElementById("app")
);
```

## OverviewMap-缩略地图控件

> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b7)

```js
import React from "react";
import { render } from "react-dom";
import { ControlAnchor, Map, OverviewMap } from "rc-bmap";

const offset = {
  width: 10,
  height: 10
};

const size = {
  width: 150,
  height: 150
};

const events = {
  viewchanged: event => {
    console.log("viewchanged", event);
  },
  viewchanging: event => {
    console.log("viewchanging", event);
  }
};

render(
  <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv">
    <OverviewMap
      offset={offset} // 停靠偏移值，
      anchor={ControlAnchor.BOTTOM_RIGHT} // 停靠位置，默认为BOTTOM_RIGHT
      size={size} // 缩略地图控件的大小
      isOpen={false} // 缩略地图添加到地图后的开合状态，默认为关闭
      events={events} // 事件绑定
    />
  </Map>,
  document.getElementById("app")
);
```

## Scale-比例尺控件

> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b9)

```js
import React from "react";
import { render } from "react-dom";
import { ControlAnchor, Map, Scale, LengthUnit } from "rc-bmap";

const offset = {
  width: 81,
  height: 18
};

render(
  <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv">
    <Scale
      offset={offset} // 停靠偏移值，
      anchor={ControlAnchor.TOP_LEFT} // 停靠位置，默认为TOP_LEFT
      unit={LengthUnit.METRIC} // 显示单位
    />
  </Map>,
  document.getElementById("app")
);
```

## Copyright-版权控件

> 您可以在地图上添加自己的版权信息。每一个版权信息需要包含如下内容：版权的唯一标识、版权内容和其适用的区域范围。
> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b12)

```js
import React from "react";
import { render } from "react-dom";
import { ControlAnchor, Map, Copyright } from "rc-bmap";

const offset = {
  width: 10,
  height: 10
};

render(
  <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv">
    <Copyright
      offset={offset} // 停靠偏移值，
      anchor={ControlAnchor.BOTTOM_RIGHT} // 停靠位置，默认为BOTTOM_LEFT
      content={"这是我的个人版权信息"} // 该版权的文本信息，用于显示在地图上，支持HTML内容
    />
  </Map>,
  document.getElementById("app")
);
```

## MapTypeCtrl-切换地图类型控件

> [百度文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b15)。

```js
import React from "react";
import { render } from "react-dom";
import {
  ControlAnchor,
  Map,
  MapTypeCtrl,
  MapTypeControlType,
  MapType
} from "rc-bmap";

const offset = {
  width: 10,
  height: 10
};

render(
  <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv">
    <MapTypeCtrl
      offset={offset} // 停靠偏移值，
      anchor={ControlAnchor.TOP_RIGHT} // 停靠位置，默认为TOP_RIGHT
      type={MapTypeControlType.HORIZONTAL} // 控件样式
      mapTypes={[MapType.NORMAL, MapType.PERSPECTIVE]} // 控件展示的地图类型，默认为普通图、卫星图、卫星加路网混合图和三维图。
    />
  </Map>,
  document.getElementById("app")
);
```

## Panorama - 切换全景地图控件

> 对应[百度文档地址](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a2b18)。
> 控件内部提供了属性的默认值，当您不进行任何配置时，依然可以正常使用，以下仅为了展现当前控件可设置的属性而填写。

```js
import React from "react";
import { render } from "react-dom";
import { ControlAnchor, Map, Panorama } from "rc-bmap";

const offset = {
  width: 10,
  height: 10
};

render(
  <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv">
    <Panorama
      offset={offset} // 停靠偏移值，
      anchor={ControlAnchor.TOP_RIGHT} // 停靠位置，默认为TOP_RIGHT
    />
  </Map>,
  document.getElementById("app")
);
```

## CityList-城市列表控件

```js
import React from "react";
import { render } from "react-dom";
import { ControlAnchor, Map, CityList } from "rc-bmap";

const offset = {
  width: 300,
  height: 10
};

const onChangeBefore = () => {
  console.log("onChangeBefore");
};

const onChangeAfter = () => {
  console.log("onChangeBefore");
};

render(
  <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv">
    <CityList
      offset={offset} // 停靠偏移值
      anchor={ControlAnchor.TOP_LEFT} // // 停靠位置，默认为TOP_LEFT
      onChangeBefore={onChangeBefore} // 切换城市之前回调函数
      onChangeAfter={onChangeAfter} // 切换城市之后回调函数
    />
  </Map>,
  document.getElementById("app")
);
```
