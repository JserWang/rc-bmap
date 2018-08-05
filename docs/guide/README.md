# 介绍

## 初衷
rc-bmap源于一次业务对百度地图相关的需求，由于前端技术栈使用的是React，官方仅提供了最基础的js，使用起来很不React。现有github中的React版百度地图方式无法满足需求，所以决定来一次愉快的封装。

## 起步
::: danger 
在开始之前，希望您对[React](https://reactjs.org/docs/getting-started.html)与[百度地图](http://lbsyun.baidu.com/index.php?title=jspopular3.0)已经有了一定的了解
:::

``` js
import React from 'react';
import { render } from 'react-dom';
import { Map } from 'rc-bmap';

render(<Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv" />, 
  document.getElementById('app')
);

```

::: warning 注意：
  1. 在使用时，您需要自行替换您自己在百度所申请的AK值，目前AK仅作demo示例使用。
  2. 此处，div#app的高度与宽度均为100%，若无相关高度定义时，百度地图将渲染在一个高度为0的容器中。
:::

## 添加控件

``` js
import React from 'react';
import { render } from 'react-dom';
import { Map, Navigation } from 'rc-bmap';

render(
  <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv">
    {/* 在Map中添加控件 */}
    <Navigation />
  </Map>, 
  document.getElementById('app')
);

```

## 添加覆盖物

``` js
import React from 'react';
import { render } from 'react-dom';
import { Map, Marker } from 'rc-bmap';

const markerPoint = {
  lng: 116.404,
  lat: 39.915,
};

render(
  <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv">
    {/* 在Map中添加覆盖物 */}
    <Marker point={markerPoint} />
  </Map>, 
  document.getElementById('app')
);

```

## 自定义控件与自定义覆盖物

在这里，我们为您提供了两个基础类，分别为`Control`与`Overlay`，您可以通过继承后，实现`render`方法即可呈现。

您自定义的控件与覆盖物，均可使用其父类的属性、事件、方法，与此同时，还为您提供了`state`与`setState`这对基友，方便您在内部通过更改状态即可完成对视图的重新渲染。

### 自定义控件

``` js
import React from 'react';
import { ReactComponent, Control } from 'rc-bmap';

@ReactComponent
class CustomControl extends Control {
  render() {
    return (
      <div>这是一个自定义控件</div>
    )
  }
}

export default CustomControl;

```

### 自定义覆盖物
``` js
import React from 'react';
import { ReactComponent, Overlay } from 'rc-bmap';

@ReactComponent
class CustomOverlay extends Overlay {
  render() {
    return (
      <div>这是一个自定义覆盖物</div>
    )
  }
}

export default CustomOverlay;

```

## 感兴趣吗？
如果你对以上内容兴趣，那么请继续往下浏览各组件的使用方法吧。
