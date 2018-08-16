import React, { Component } from 'react';
import { Button } from 'antd';
import { Map, Marker, Animation } from 'rc-bmap';
import Container from 'components/Container';
import index from './index.md';

class MarkerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerPoint: { lng: 116.404, lat: 39.915 },
      offset: { width: 10, height: 10 },
      icon: null,
      dragging: false,
      title: 'This is title',
      clicking: true,
      raiseOnDrag: false,
      draggingCursor: '',
      shadow: null,
      contextMenu: {
        items: [{
          text: '你好',
          callback() { console.log(666); },
          separator: true,
          width: 100,
          disabled: false,
        }],
      },
      rotation: 0,
      massClear: false,
    };

    this.icon = {
      url: 'http://lbsyun.baidu.com/jsdemo/img/fox.gif',
      size: {
        width: 300,
        height: 157,
      },
      opts: {
        imageOffset: { width: 10, height: 10 },
      },
    };

    this.shadow = {
      url: 'http://lbsyun.baidu.com/jsdemo/img/fox.gif',
      size: {
        width: 600,
        height: 314,
      },
      opts: {
        imageOffset: { width: 200, height: 100 },
      },
    };
  }

  handleMarkerPoint = () => {
    const { markerPoint } = this.state;
    this.setState({
      markerPoint: {
        lng: markerPoint.lng + 0.001,
        lat: markerPoint.lat + 0.001,
      },
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

  handleIcon = () => {
    const { icon } = this.state;
    this.setState({
      icon: icon ? null : this.icon,
    });
  }

  handleDragging = () => {
    const { dragging } = this.state;
    this.setState({
      dragging: !dragging,
    });
  }

  handleTitle = () => {
    const { title } = this.state;
    this.setState({
      title: title ? '新title' : 'title',
    });
  }

  handleRaiseOnDrag = () => {
    const { raiseOnDrag } = this.state;
    this.setState({
      raiseOnDrag: !raiseOnDrag,
    });
  }

  handleDraggingCursor = () => {
    this.setState({
      draggingCursor: 'default',
    });
  }

  handleShadow = () => {
    const { shadow } = this.state;
    this.setState({
      shadow: shadow ? null : this.shadow,
    });
  }

  handleContextMenu = () => {
    this.setState({
      contextMenu: {
        items: [{
          text: '大家好',
          callback() { console.log(888); },
          separator: false,
          width: 100,
          disabled: true,
        }],
      },
    });
  }

  handleRotation = () => {
    const { rotation } = this.state;
    this.setState({
      rotation: rotation + 10,
    });
  }

  handleMassClear = () => {
    const { massClear } = this.state;
    this.setState({
      massClear: !massClear,
    });
  }

  handleClicking = () => {
    const { clicking } = this.state;
    this.setState({
      clicking: !clicking,
    });
  }

  handleClear = () => {
    window.bMapInstance.clearOverlays();
  }

  render() {
    const {
      markerPoint, offset, icon, dragging, title, clicking,
      raiseOnDrag, draggingCursor, shadow, contextMenu, rotation, massClear,
    } = this.state;
    return (
      <Container code={index}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <Marker
              point={markerPoint}
              offset={offset}
              icon={icon}
              animation={Animation.BOUNCE}
              dragging={dragging}
              title={title}
              clicking={clicking}
              raiseOnDrag={raiseOnDrag}
              rotation={rotation}
              draggingCursor={draggingCursor}
              shadow={shadow}
              contextMenu={contextMenu}
              massClear={massClear}
            />
          </Map>
        </div>
        <Button onClick={this.handleMarkerPoint}>改变markerPoint</Button>
        <Button onClick={this.handleOffset}>改变offset</Button>
        <Button onClick={this.handleIcon}>
          { icon ? '取消设置icon' : '设置icon' }
        </Button>
        <Button onClick={this.handleDragging}>
          { dragging ? '禁用拖拽' : '启用拖拽' }
        </Button>
        <Button onClick={this.handleTitle}>改变title</Button>
        <Button onClick={this.handleRaiseOnDrag}>
          { raiseOnDrag ? '禁用离开地面效果' : '启用离开地面效果' }
        </Button>
        <Button onClick={this.handleDraggingCursor}>改变draggingCursor</Button>
        <Button onClick={this.handleShadow}>
          { shadow ? '取消设置shadow' : '设置shadow' }
        </Button>
        <Button onClick={this.handleContextMenu}>改变contextMenu</Button>
        <Button onClick={this.handleRotation}>改变rotation</Button>
        <Button onClick={this.handleClicking}>
          {clicking ? '禁用点击事件' : '响应点击事件'}
        </Button>
        <Button onClick={this.handleMassClear}>
          { massClear ? 'clearOverlay时不移除此对象' : 'clearOverlay时移除此对象' }
        </Button>
        <Button onClick={this.handleClear}>clearOverlay</Button>
      </Container>
    );
  }
}

export default MarkerExample;
