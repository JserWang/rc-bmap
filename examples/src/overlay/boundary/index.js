import React, { Component } from 'react';
import { Map, Boundary } from 'rc-bmap';
import { Button } from 'antd';
import Container from 'components/Container';
import { getRandomColor, getRandomBoundary } from 'utils';
import index from './index.md';

class BoundaryExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '杭州市萧山区',
      onError: this.onError,
      autoViewport: true,
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
        click: this.onClick,
      },
    };
  }

  onClick = () => {
    console.log('Boundary click');
  }

  onChangedClick = () => {
    console.log('onChanged Boundary click');
  }

  onError = () => {
    console.log('onError');
  }

  onChangedError = () => {
    console.log('onChangedError');
  }

  handleName = () => {
    this.setState({
      name: getRandomBoundary(),
    });
  }

  handleOnError = () => {
    this.setState({
      onError: this.onChangedError,
    });
  }

  handleAutoViewport = () => {
    const { autoViewport } = this.state;
    this.setState({
      autoViewport: !autoViewport,
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
      strokeStyle: strokeStyle === 'solid' ? 'dashed' : 'solid',
    });
  }

  handleMassClear = () => {
    const { massClear } = this.state;
    this.setState({
      massClear: !massClear,
    });
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

  handleClear = () => {
    window.bMapInstance.clearOverlays();
  }

  render() {
    const {
      name, onError, autoViewport, strokeColor,
      fillColor, strokeWeight, strokeOpacity, fillOpacity, strokeStyle,
      massClear, editing, clicking, events,
    } = this.state;
    return (
      <Container code={index}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          >
            <Boundary
              name={name}
              onError={onError}
              autoViewport={autoViewport}
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
        <Button onClick={this.handleName}>随机改变行政区域名字</Button>
        <Button onClick={this.handleOnError}>修改初始化失败回调</Button>
        <Button onClick={this.handleAutoViewport}>
          {autoViewport ? '禁用自动移动' : '启用自动移动'}
        </Button>
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

export default BoundaryExample;
