import React from 'react';
import { Button } from 'antd';
import {
  Map,
  ControlAnchor,
  DrawingManager,
  DrawingMode,
} from 'rc-bmap';
import Container from 'components/Container';
import Drawing from './index.md';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchor: ControlAnchor.TOP_RIGHT,
      drawingModes: [
        DrawingMode.MARKER,
        DrawingMode.CIRCLE,
        DrawingMode.POLYLINE,
        DrawingMode.RECTANGLE,
        DrawingMode.POLYGON,
      ],
      offset: { width: 10, height: 10 },
      events: {
        // 绘制圆完成时间
        circlecomplete(e, overlay) {
          console.log(overlay);
        },
        circleOptions: {
          strokeColor: 'red', // 边线颜色。
          fillColor: 'red', // 填充颜色。当参数为空时，圆形将没有填充效果。
          strokeWeight: 3, // 边线的宽度，以像素为单位。
          strokeOpacity: 0.8, // 边线透明度，取值范围0 - 1。
          fillOpacity: 0.6, // 填充的透明度，取值范围0 - 1。
          strokeStyle: 'solid', // 边线的样式，solid或dashed。
        },
      },
    };
  }

  handleAchor = () => {
    this.setState({
      anchor: ControlAnchor.BOTTOM_LEFT,
    });
  }

  handleOffset = () => {
    this.setState({
      offset: { width: 100, height: 100 },
    });
  }

  handleModes = () => {
    this.setState({
      drawingModes: [
        DrawingMode.MARKER,
        DrawingMode.CIRCLE,
      ],
    });
  }

  handleCircle = () => {
    this.setState({
      circleOptions: {
        strokeColor: 'green', // 边线颜色。
        fillColor: 'yellow', // 填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 1, // 边线的宽度，以像素为单位。
        strokeOpacity: 0.9, // 边线透明度，取值范围0 - 1。
        fillOpacity: 0.5, // 填充的透明度，取值范围0 - 1。
        strokeStyle: 'dashed', // 边线的样式，solid或dashed。
      },
    });
  }

  render() {
    const {
      anchor, drawingModes, offset, events, circleOptions,
    } = this.state;
    return (
      <Container code={Drawing}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <DrawingManager
              anchor={anchor}
              events={events}
              offset={offset}
              drawingModes={drawingModes}
              circleOptions={circleOptions}
            />
          </Map>
          <Button onClick={this.handleAchor}>改变停靠位置</Button>
          <Button onClick={this.handleOffset}>改变偏移位置</Button>
          <Button onClick={this.handleModes}>改变画图类型</Button>
          <Button onClick={this.handleCircle}>改变圆形</Button>
        </div>
      </Container>
    );
  }
}

export default App;
