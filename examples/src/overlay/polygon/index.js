import React, { Component } from 'react';
import { Button } from 'antd';
import { Map, Polygon } from 'rc-bmap';
import Container from 'components/Container';
import { getRandomColor } from 'utils';
import index from './index.md';

class PolygonExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [
        {
          lng: 116.387,
          lat: 39.920,
        }, {
          lng: 116.385,
          lat: 39.913,
        },
        {
          lng: 116.394,
          lat: 39.917,
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
        click: this.handleClick,
      },
    };
  }

  handleClick = () => {
    console.log('Polygon click');
  }

  onChangedClick = () => {
    console.log('onChanged Polygon click');
  }

  handlePoints = () => {
    const { points } = this.state;
    this.setState({
      points: [
        {
          lng: points[0].lng + 0.01,
          lat: points[0].lat + 0.01,
        }, {
          lng: points[1].lng + 0.01,
          lat: points[1].lat + 0.01,
        },
        {
          lng: points[2].lng + 0.01,
          lat: points[2].lat + 0.01,
        },
      ],
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
      points, strokeColor, fillColor, strokeWeight, strokeOpacity,
      fillOpacity, strokeStyle, massClear, editing, clicking, events,
    } = this.state;
    return (
      <Container code={index}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <Polygon
              points={points}
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
        <Button onClick={this.handlePoints}>改变points</Button>
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
        <Button onClick={this.handleClear}>clearOverlay</Button>
      </Container>
    );
  }
}

export default PolygonExample;
