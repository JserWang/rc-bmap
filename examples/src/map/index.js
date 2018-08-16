import React from 'react';
import { Button } from 'antd';
import {
  Map,
  MapType,
} from 'rc-bmap';
import { getRandomMapType } from 'utils';
import Container from 'components/Container';
import MapCode from './index.md';

class MapExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.332782,
        lat: 40.007978,
      },
      zoom: 14,
      placeHolder: '地图加载中...',
      minZoom: 3,
      maxZoom: 19,
      defaultCursor: '',
      draggingCursor: '',
      mapStyle: {
        style: 'normal',
      },
      mapType: MapType.NORMAL,
      highResolution: true,
      autoResize: true,
      mapClick: true,
      dragging: true,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      keyboard: true,
      inertialDragging: true,
      continuousZoom: true,
      pinchToZoom: true,
      events: {
        click: (event) => {
          console.log('mapClick', event);
        },
        zoomend: (event) => {
          console.log('zoomend', event);
        },
      },
      contextMenu: {
        items: [{
          text: '放大',
          callback() { global.bMapInstance.zoomIn(); },
        },
        {
          text: '缩小',
          callback() { global.bMapInstance.zoomOut(); },
          separator: true,
        }],
      },
    };
  }

  handleCenter = () => {
    const { center } = this.state;
    this.setState({
      center: { lng: center.lng + 0.05, lat: center.lat + 0.05 },
    });
  }

  handleZoom = () => {
    let { zoom } = this.state;
    if (zoom === 19) {
      zoom = 3;
    }
    this.setState({
      zoom: zoom + 1,
    });
  }

  handleMapStyle = () => {
    const { mapStyle } = this.state;
    this.setState({
      mapStyle: mapStyle.style === 'nomal' ? { style: 'normal' } : { style: 'normal' },
    });
  }

  handleMapType = () => {
    this.setState({
      mapType: MapType[getRandomMapType()],
    });
  }

  handleHighResolution = () => {
    const { highResolution } = this.state;
    this.setState({
      highResolution: !highResolution,
    });
  }

  handleAutoResize = () => {
    const { autoResize } = this.state;
    this.setState({
      autoResize: !autoResize,
    });
  }

  handleMapClick = () => {
    const { mapClick } = this.state;
    this.setState({
      mapClick: !mapClick,
    });
  }

  handleDragging = () => {
    const { dragging } = this.state;
    this.setState({
      dragging: !dragging,
    });
  }

  handleScrollWheelZoomg = () => {
    const { scrollWheelZoomg } = this.state;
    this.setState({
      scrollWheelZoomg: !scrollWheelZoomg,
    });
  }

  handleDoubleClickZoom = () => {
    const { doubleClickZoom } = this.state;
    this.setState({
      doubleClickZoom: !doubleClickZoom,
    });
  }

  handleKeyboard = () => {
    const { keyboard } = this.state;
    this.setState({
      keyboard: !keyboard,
    });
  }

  handleInertialDragging = () => {
    const { inertialDragging } = this.state;
    this.setState({
      inertialDragging: !inertialDragging,
    });
  }

  handLecontinuousZoom = () => {
    const { lecontinuousZoom } = this.state;
    this.setState({
      lecontinuousZoom: !lecontinuousZoom,
    });
  }

  handPinchToZoom = () => {
    const { pnchToZoom } = this.state;
    this.setState({
      pnchToZoom: !pnchToZoom,
    });
  }

  render() {
    const {
      zoom, center, placeHolder, minZoom, maxZoom,
      defaultCursor, draggingCursor, mapStyle, mapType,
      highResolution, autoResize, mapClick, dragging, scrollWheelZoom,
      doubleClickZoom, keyboard, inertialDragging, continuousZoom,
      pinchToZoom, events, contextMenu,
    } = this.state;
    return (
      <Container code={MapCode}>
        <div style={{ height: '70vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            center={center}
            zoom={zoom}
            placeHolder={placeHolder}
            minZoom={minZoom}
            maxZoom={maxZoom}
            defaultCursor={defaultCursor}
            draggingCursor={draggingCursor}
            mapStyle={mapStyle}
            // mapType={mapType}
            highResolution={highResolution}
            autoResize={autoResize}
            mapClick={mapClick}
            dragging={dragging}
            scrollWheelZoom={scrollWheelZoom}
            doubleClickZoom={doubleClickZoom}
            keyboard={keyboard}
            inertialDragging={inertialDragging}
            continuousZoom={continuousZoom}
            pinchToZoom={pinchToZoom}
            events={events}
            contextMenu={contextMenu}
          />
          <Button onClick={this.handleCenter}>改变中心点</Button>
          <Button onClick={this.handleZoom}>改变地图级别</Button>
          <Button onClick={this.handleMinZoom}>改变最小显示级别</Button>
          <Button onClick={this.handleMaxZoom}>改变最大显示级别</Button>
          <Button onClick={this.handleMapStyle}>改变地图样式</Button>
          <Button onClick={this.handleMaptype}>随机改变地图类型</Button>
          <Button onClick={this.handleHighResolution}>{highResolution ? '不使用高分辨率地图' : '使用高分辨率地图'}</Button>
          <Button onClick={this.handleAutoResize}>{autoResize ? '不跟随容器大小变化' : '自适应容器大小变化'}</Button>
          <Button onClick={this.handleMapClick}>{mapClick ? '禁止底图点击' : '开启底图点击'}</Button>
          <Button onClick={this.handleDragging}>{dragging ? '禁止拖拽' : '允许拖拽'}</Button>
          <Button onClick={this.handleScrollWheelZoomg}>{scrollWheelZoom ? '禁止滚轮放大缩小' : '允许滚轮放大缩小'}</Button>
          <Button onClick={this.handleDoubleClickZoom}>{doubleClickZoom ? '禁止双击放大' : '允许双击放大'}</Button>
          <Button onClick={this.handleKeyboard}>{keyboard ? '禁止键盘操作' : '启用键盘操作'}</Button>
          <Button onClick={this.handleInertialDragging}>{inertialDragging ? '禁止惯性拖拽' : '允许惯性拖拽'}</Button>
          <Button onClick={this.handLecontinuousZoom}>{continuousZoom ? '禁止连续缩放' : '允许连续缩放'}</Button>
          <Button onClick={this.handPinchToZoom}>{pinchToZoom ? '禁止双指缩放' : '允许双指缩放'}</Button>
        </div>
      </Container>
    );
  }
}

export default MapExample;
