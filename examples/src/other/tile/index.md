import React from 'react';
import { Button } from 'antd';
import {
  Map,
  Tile,
} from 'rc-bmap';
import Container from 'components/Container';
import Ti from './index.md';

class TileExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transparentPng: false,
      zoom: 16,
      zIndex: -1,
      center: {
        lng: 116.332782,
        lat: 40.007978,
      },
    };
  }

  getTilesUrl = (tileCoord, zoom) => {
    const { x, y } = tileCoord;
    // const y = tileCoord.y;
    // 根据当前坐标，选取合适的瓦片图
    return `http://lbsyun.baidu.com/jsdemo/demo/tiles/${zoom}/tile${x}_${y}.png`;
  };

  handleZIndex = () => {
    const { zIndex } = this.state;
    this.setState({
      zIndex: zIndex + 1,
    });
  }

  handlePng = () => {
    const { transparentPng } = this.state;
    this.setState({
      transparentPng: !transparentPng,
    });
  }

  render() {
    const {
      zoom, center, zIndex, copyright, transparentPng,
    } = this.state;
    return (
      <Container code={Ti}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
            center={center}
            zoom={zoom}
          >
            <Tile
              copyright={copyright}
              getTilesUrl={this.getTilesUrl}
              zIndex={zIndex}
              transparentPng={transparentPng}
            />
          </Map>
          <Button onClick={this.handlePng}>{transparentPng ? '使用带有透明信息的PNG' : '不使用带有透明信息的PNG'}</Button>
          <Button onClick={this.handleZIndex}>改变zIndex</Button>
        </div>
      </Container>
    );
  }
}

export default TileExample;
