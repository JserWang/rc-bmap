import React from 'react';
import { Button } from 'antd';
import {
  Map, Polyline
} from 'rc-bmap';
import Container from 'components/Container';
import Code from './index.md';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      points: [
        {
          lng: 116.387112,
          lat: 39.920977,
        }, {
          lng: 116.385243,
          lat: 39.913063,
        },
      ],
      strokeColor: 'blue',
      strokeWeight: 5,
      strokeOpacity: 0.5,
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
        }
      ],
    });
  }

  handleStrokeColor = () => {
    this.setState({
      strokeColor: 'green',
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

  handleStrokeStyle = () => {
    this.setState({
      strokeStyle: 'solid',
    });
  }

  handleMassClear = () => {
    this.setState({
      massClear: true, // 改为true之后再点击clearMarker则线会被清除
    });
  }

  clearMarker = () => {
    window.bMapInstance.clearOverlays(); // 触发之后若massClear是true则会清除该线
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
      points, strokeColor, strokeWeight, strokeOpacity, strokeStyle, massClear, editing, clicking, events,
    } = this.state;
    return (
      <Container code={Code}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <Polyline
              points={points} // 指定位置的坐标
              strokeColor={strokeColor} // 折线颜色
              strokeWeight={strokeWeight} // 折线的宽度，以像素为单位
              strokeOpacity={strokeOpacity} // 折线的透明度，取值范围0 - 1
              strokeStyle={strokeStyle} // 折线的样式，solid或dashed
              massClear={massClear} // 是否在调用map.clearOverlays清除此覆盖物，默认为true
              editing={editing} // 是否启用线编辑，默认为false
              clicking={clicking} // 是否响应点击事件，默认为true
              events={events} // 绑定事件
            />
          </Map>

        </div>

        <Button onClick={this.handlePoints}>改变points</Button>
        <Button onClick={this.handleStrokeColor}>改变strokeColor</Button>
        <Button onClick={this.handleStrokeWeight}>改变strokeWeight</Button>
        <Button onClick={this.handleStrokeOpacity}>改变strokeOpacity</Button>
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
