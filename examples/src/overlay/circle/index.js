import React from 'react';
import { Button } from 'antd';
import {
  Map, MapTypeCtrl,
  ControlAnchor, MapTypeControlType,
  MapType,
} from 'rc-bmap';
import Container from 'components/Container';
import Circle from './index.md';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      point: { lng: 116.404, lat: 39.915 },
      radius: 500,
      strokeColor: 'blue',
      fillColor: 'red',
      strokeWeight: 5,
      strokeOpacity: 0.5,
      fillOpacity: 0.9,
      strokeStyle: 'dashed',
      massClear: false,
      editing: false,
      clicking: true,
      events: {
        click: (event) => {
          console.log('mapClick', event);
        },
      },
    };
  }

  handlePoint = () => {
    this.setState({
      point: {
        lng: 116.400,
        lat: 39.915,
      }
    });
  }

  handleRadius = () => {
    this.setState({
      radius: 700,
    });
  }

  handleStrokeColor = () => {
    this.setState({
      strokeColor: 'green',
    });
  }

  handleFillColor = () => {
    this.setState({
      fillColor: 'yellow',
    });
  }

  handleStrokeWeight = () => {
    this.setState({
      strokeWeight: 3,
    });
  }

  handleStrokeOpacity = () => {
    this.setState({
      strokeOpacity: 1,
    });
  }

  handleFillOpacity = () => {
    this.setState({
      fillOpacity: 0.5,
    });
  }

  handleStrokeStyle = () => {
    this.setState({
      strokeStyle: 'solid',
    });
  }

  handleMassClear = () => {
    this.setState({
      massClear: true, // 改为true之后再点击clearMarker则圆会被清除
    });
  }

  clearMarker = () => {
    window.bMapInstance.clearOverlays(); // 触发之后若massClear是true则会清除该圆
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  handleClicking = () => {
    this.setState({
      clicking: !this.state.clicking, // 为true点击之后控制台会输出events里的click语句，false不输出
    });
  }

  handleEvents = () => {
    this.setState({
      events: {
        click: (event) => {
          console.log('mapClick');
        },
      },
    });
  }

  render() {
    const { visible } = this.state;
    const {
      point, radius, strokeColor, fillColor, strokeWeight, strokeOpacity, fillOpacity, strokeStyle, massClear, editing, clicking, events,
    } = this.state;
    return (
      <Container code={Demo1}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <Circle
              point={point} // 指定位置的坐标
              radius={radius}
              strokeColor={strokeColor} // 圆形边线颜色
              fillColor={fillColor} // 圆形填充颜色。当参数为空时，圆形将没有填充效果
              strokeWeight={strokeWeight} // 圆形边线的宽度，以像素为单位
              strokeOpacity={strokeOpacity} // 圆形边线透明度，取值范围0 - 1
              fillOpacity={fillOpacity} // 圆形填充的透明度，取值范围0 - 1
              strokeStyle={strokeStyle} // 圆形边线的样式，solid或dashed
              massClear={massClear} // 是否在调用map.clearOverlays清除此覆盖物，默认为true
              editing={editing} // 是否启用线编辑，默认为false
              clicking={clicking} // 是否响应点击事件，默认为true
              events={events} // 绑定事件
            />
          </Map>

        </div>

        <Button onClick={this.handlePoint}>改变point</Button>
        <Button onClick={this.handleRadius}>改变radius</Button>
        <Button onClick={this.handleStrokeColor}>改变strokeColor</Button>
        <Button onClick={this.handleFillColor}>改变fillColor</Button>
        <Button onClick={this.handleStrokeWeight}>改变strokeWeight</Button>
        <Button onClick={this.handleStrokeOpacity}>改变strokeOpacity</Button>
        <Button onClick={this.handleFillOpacity}>改变fillOpacity</Button>
        <Button onClick={this.handleStrokeStyle}>改变strokeStyle</Button>
        <Button onClick={this.handleMassClear}>改变massClear</Button>
        <Button onClick={this.handleEditing}>改变editing</Button>
        <Button onClick={this.handleClicking}>改变clicking</Button>
        <Button onClick={this.handleEvents}>改变events</Button>
        <Button onClick={this.clearMarker}>清除marker</Button>

      </Container>
    );
  }
}

export default App;
