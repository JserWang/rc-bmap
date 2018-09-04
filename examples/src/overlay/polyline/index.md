import React, { Component } from 'react';
import { Button } from 'antd';
import { Map, Polyline } from 'rc-bmap';
import Container from 'components/Container';
import { getRandomColor } from 'utils';
import index from './index.md';

class PolylineExample extends Component {
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
      ],
      strokeColor: 'blue',
      strokeWeight: 8,
      strokeOpacity: 0.8,
      strokeStyle: 'dashed',
      massClear: false,
      editing: false,
      clicking: true,
      events: {
        click: this.handleClick,
      },
      icons: [],
      isShowArrow: false,
    };
  }

  drawLineDirection = () => {
    const sy = new window.BMap.Symbol(window.BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
      scale: 0.6,
      strokeWeight: 1,
      strokeColor: '#fff',
    });
    const icons = new window.BMap.IconSequence(sy, '10', '30');
    return icons;
  }

  mapMounted = () => {
    const icons = this.drawLineDirection();
    this.setState({ icons });
  }

  handleClick = () => {
    console.log('Polyline click');
  }

  onChangedClick = () => {
    console.log('onChanged Polyline click');
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
      ],
    });
  }

  handleStrokeColor = () => {
    this.setState({
      strokeColor: getRandomColor(),
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

  handleShowArrow = () => {
    const { isShowArrow } = this.state;
    this.handleClear();
    this.setState({ isShowArrow: !isShowArrow });
  }

  render() {
    const {
      points, strokeColor, strokeWeight, strokeOpacity,
      strokeStyle, massClear, editing, clicking, events,
      icons, isShowArrow,
    } = this.state;
    return (
      <Container code={index}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
            mapMounted={this.mapMounted}
            zoom={14}
          >
            <Polyline
              points={points}
              strokeColor={strokeColor}
              strokeWeight={strokeWeight}
              strokeOpacity={strokeOpacity}
              strokeStyle={strokeStyle}
              massClear={massClear}
              editing={editing}
              clicking={clicking}
              events={events}
              icons={isShowArrow ? [icons] : []}
            />
          </Map>
        </div>
        <Button onClick={this.handlePoints}>改变points</Button>
        <Button onClick={this.handleStrokeColor}>随机改变边线颜色</Button>
        <Button onClick={this.handleStrokeWeight}>调整边线宽度</Button>
        <Button onClick={this.handleStrokeOpacity}>调整边线透明度</Button>
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
        <Button onClick={this.handleShowArrow}>
          { isShowArrow ? '隐藏箭头' : '显示箭头' }
        </Button>
      </Container>
    );
  }
}

export default PolylineExample;
