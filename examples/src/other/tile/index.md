import React from 'react';
import { Button } from 'antd';
import {
  Map,
  Tile,
} from 'rc-bmap';
import Container from 'components/Container';
import Ti from './index.md';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 16,
      zIndex: 1,
      center: {
        lng: 116.332782,
        lat: 40.007978,
      },
    };
  }

  getTilesUrl = (tileCoord, zoom) => {
    const x = tileCoord.x;
    const y = tileCoord.y;
    // 根据当前坐标，选取合适的瓦片图
    return `http://lbsyun.baidu.com/jsdemo/demo/tiles/${zoom}/tile${x}_${y}.png`;
  };

  handleZoom = () => {
    this.setState({
      zoom: 14,
    });
  }

  handleCenter = () => {
    this.setState({
      center: {
        lng: 120.21937542,
        lat: 30.25924446,
      },
    });
    this.getTilesUrl();
  }

  handleZIndex = () => {
    this.setState({
      zIndex: -1,
    });
  }

  render() {
    const {
      zoom, center, zIndex, copyright,
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
            />
          </Map>
          <Button onClick={this.handleZoom}>改变zoom</Button>
          <Button onClick={this.handleCenter}>改变center</Button>
          <Button onClick={this.handleZIndex}>改变zIndex</Button>
        </div>
      </Container>
    );
  }
}

export default App;
