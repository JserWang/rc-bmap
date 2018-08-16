import React from 'react';
import { Button } from 'antd';
import {
  Map,
  ControlAnchor,
  DrawingManager,
  DrawingMode,
} from 'rc-bmap';
import { getRandomControlAnchor, getRandomColor } from 'utils';

class DrawingManagerExample extends React.Component {
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
      },
      circleOptions: {
        strokeColor: 'red', // 边线颜色。
        fillColor: 'red', // 填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 3, // 边线的宽度，以像素为单位。
        strokeOpacity: 0.8, // 边线透明度，取值范围0 - 1。
        fillOpacity: 0.6, // 填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid', // 边线的样式，solid或dashed。
      },
    };
  }

  handleAchor = () => {
    this.setState({
      anchor: ControlAnchor[getRandomControlAnchor()],
    });
  }

  handleOffset = () => {
    const { offset } = this.state;
    this.setState({
      offset: {
        width: offset.width + 10,
        height: offset.height + 10,
      },
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
    const { circleOptions } = this.state;
    this.setState({
      circleOptions: {
        strokeColor: getRandomColor(), // 边线颜色。
        fillColor: getRandomColor(), // 填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 1, // 边线的宽度，以像素为单位。
        strokeOpacity: 0.9, // 边线透明度，取值范围0 - 1。
        fillOpacity: 0.5, // 填充的透明度，取值范围0 - 1。
        strokeStyle: circleOptions.strokeStyle === 'dashed' ? 'solid' : 'dashed', // 边线的样式，solid或dashed。
      },
    });
  }

  render() {
    const {
      anchor, drawingModes, offset, events, circleOptions,
    } = this.state;
    return (
      <React.Fragment>
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
          <Button onClick={this.handleAchor}>随机改变停靠位置</Button>
          <Button onClick={this.handleOffset}>调整偏移位置</Button>
          <Button onClick={this.handleModes}>改变画图类型</Button>
          <Button onClick={this.handleCircle}>改变圆形的参数</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default DrawingManagerExample;
