import React from 'react';
import { Button } from 'antd';
import {
  Map, Circle,
} from 'rc-bmap';
import { getRandomColor } from 'utils';

class CircleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        click: this.handleClick,
      },
    };
  }

  handleClick = () => {
    console.log('Circle click');
  }

  onChangedClick = () => {
    console.log('onChanged Circle click');
  }

  handlePoint = () => {
    const { point } = this.state;
    this.setState({
      point: {
        lng: point.lng + 0.01,
        lat: 39.915,
      },
    });
  }

  handleRadius = () => {
    const { radius } = this.state;
    this.setState({
      radius: radius + 100,
    });
  }

  handleStrokeColor = () => {
    this.setState({
      strokeColor: getRandomColor(),
    });
  }

  handleFillColor = () => {
    this.setState({
      fillColor: getRandomColor(),
    });
  }

  handleStrokeWeight = () => {
    const { strokeWeight } = this.state;
    this.setState({
      strokeWeight: strokeWeight + 1,
    });
  }

  handleStrokeOpacity = () => {
    let { strokeOpacity } = this.state;
    if (strokeOpacity === 1) {
      strokeOpacity = 0.1;
    }
    this.setState({
      strokeOpacity: strokeOpacity + 0.1,
    });
  }

  handleFillOpacity = () => {
    let { fillOpacity } = this.state;
    if (fillOpacity === 1) {
      fillOpacity = 0.1;
    }
    this.setState({
      fillOpacity: fillOpacity + 0.1,
    });
  }

  handleStrokeStyle = () => {
    const { strokeStyle } = this.state;
    this.setState({
      strokeStyle: strokeStyle === 'dashed' ? 'solid' : 'dashed',
    });
  }

  handleMassClear = () => {
    const { massClear } = this.state;
    this.setState({
      massClear: !massClear,
    });
  }

  handleClear = () => {
    window.bMapInstance.clearOverlays();
  }

  handleEditing = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing,
    });
  }

  handleClicking = () => {
    const { clicking } = this.state;
    this.setState({
      clicking: !clicking,
    });
  }

  handleEvents = () => {
    this.setState({
      events: {
        click: this.onChangedClick,
      },
    });
  }

  render() {
    const {
      point, radius, strokeColor, fillColor, strokeWeight,
      strokeOpacity, fillOpacity, strokeStyle, massClear, editing, clicking, events,
    } = this.state;
    return (
      <React.Fragment>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <Circle
              point={point}
              radius={radius}
              strokeColor={strokeColor}
              fillColor={fillColor}
              strokeWeight={strokeWeight}
              strokeOpacity={strokeOpacity}
              fillOpacity={fillOpacity}
              strokeStyle={strokeStyle}
              massClear={massClear}
              editing={editing}
              clicking={clicking}
              events={events}
            />
          </Map>
        </div>
        <Button onClick={this.handlePoint}>改变point</Button>
        <Button onClick={this.handleRadius}>扩大半径</Button>
        <Button onClick={this.handleStrokeColor}>随机改变边线颜色</Button>
        <Button onClick={this.handleFillColor}>随机改变填充颜色</Button>
        <Button onClick={this.handleStrokeWeight}>调整边线宽度</Button>
        <Button onClick={this.handleStrokeOpacity}>调整边线透明度</Button>
        <Button onClick={this.handleFillOpacity}>调整填充透明度</Button>
        <Button onClick={this.handleStrokeStyle}>调整边线样式</Button>
        <Button onClick={this.handleEditing}>
          {editing ? '禁用编辑' : '启用编辑'}
        </Button>
        <Button onClick={this.handleClicking}>
          {clicking ? '禁用点击事件' : '响应点击事件'}
        </Button>
        <Button onClick={this.handleEvents}>改变绑定事件</Button>
        <Button onClick={this.handleMassClear}>
          { massClear ? 'clearOverlay时不移除此对象' : 'clearOverlay时移除此对象' }
        </Button>
        <Button onClick={this.handleClear}>清除覆盖物</Button>
      </React.Fragment>
    );
  }
}

export default CircleExample;
