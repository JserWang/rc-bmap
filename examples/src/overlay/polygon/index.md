import React, { Component } from 'react';
import { Map, Polygon } from 'rc-bmap';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      points: [
        {
          lng: 116.387112,
          lat: 39.920977,
        }, {
          lng: 116.385243,
          lat: 39.913063,
        },
        {
          lng: 116.394226,
          lat: 39.917988
        },
      ],
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

  handlePoints = () => {
    this.setState({
      points: [
        {
          lng: 116.394226,
          lat: 39.917988
        }, {
          lng: 116.401772,
          lat: 39.921364
        },
        {
          lng: 116.394226,
          lat: 39.917988
        },
        {
          lng: 116.401772,
          lat: 39.921364
        },
        {
          lng: 116.41248,
          lat: 39.927893
        },
      ],
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
      massClear: true, // 改为true之后再点击clearMarker则多边形会被清除
    });
  }

  clearMarker = () => {
    window.bMapInstance.clearOverlays(); // 触发之后若massClear是true则会清除该多边形
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
    const { points, strokeColor, fillColor, strokeWeight, strokeOpacity, fillOpacity, strokeStyle, massClear, editing, clicking, events } = this.state;
    return (
      <div style={{height: '100%'}}>
        <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv">
          <Polygon
            points={points} // 指定位置的坐标
            strokeColor={strokeColor} // 边线颜色
            fillColor={fillColor} // 填充颜色。当参数为空时，圆形将没有填充效果
            strokeWeight={strokeWeight} // 边线的宽度，以像素为单位
            strokeOpacity={strokeOpacity} // 边线透明度，取值范围0 - 1
            fillOpacity={fillOpacity} // 填充的透明度，取值范围0 - 1
            strokeStyle={strokeStyle} // 边线的样式，solid或dashed
            massClear={massClear} // 是否在调用map.clearOverlays清除此覆盖物，默认为true
            editing={editing} // 是否启用线编辑，默认为false
            clicking={clicking} // 是否响应点击事件，默认为true
            events={events} // 绑定事件
          />
        </Map>

        <button onClick={this.handlePoints}>改变points</button>
        <button onClick={this.handleStrokeColor}>改变strokeColor</button>
        <button onClick={this.handleFillColor}>改变fillColor</button>
        <button onClick={this.handleStrokeWeight}>改变strokeWeight</button>
        <button onClick={this.handleStrokeOpacity}>改变strokeOpacity</button>
        <button onClick={this.handleFillOpacity}>改变fillOpacity</button>
        <button onClick={this.handleStrokeStyle}>改变strokeStyle</button>
        <button onClick={this.handleMassClear}>改变massClear</button>
        <button onClick={this.handleEditing}>改变editing</button>
        <button onClick={this.handleClicking}>改变clicking</button>
        <button onClick={this.handleEvents}>改变events</button>
        <button onClick={this.clearMarker}>清除marker</button>
      </div>
    );
  }

}

export default App;