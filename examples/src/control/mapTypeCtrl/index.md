import React from 'react';
import { Button } from 'antd';
import {
  Map,
  ControlAnchor,
  MapTypeCtrl,
  MapType,
  MapTypeControlType,
} from 'rc-bmap';
import Container from 'components/Container';
import MTC from './index.md';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        width: 0,
        height: 0,
      },
      anchor: ControlAnchor.TOP_RIGHT,
      type: MapTypeControlType.HORIZONTAL,
      mapTypes: [MapType.NORMAL, MapType.PERSPECTIVE, MapType.SATELLITE, MapType.HYBRID],
    };
  }

  handleAnchor = () => {
    this.setState({
      anchor: ControlAnchor.TOP_LEFT,
    });
  }

  handleOffset = () => {
    this.setState({
      offset: {
        width: 10,
        height: 10,
      },
    });
  }

  handleType = () => {
    this.setState({
      type: MapTypeControlType.DROPDOWN,
    });
  }

  handleMapTypes = () => {
    this.setState({
      mapTypes: [MapType.NORMAL, MapType.PERSPECTIVE, MapType.HYBRID],
    });
  }

  render() {
    const {
      offset, anchor, type, mapTypes,
    } = this.state;
    return (
      <Container code={MTC}>

        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <MapTypeCtrl
              offset={offset}
              anchor={anchor}
              type={type}
              mapTypes={mapTypes}
            />
          </Map>
          <Button onClick={this.handleOffset}>改变offset</Button>
          <Button onClick={this.handleAnchor}>改变停靠位置</Button>
          <Button onClick={this.handleType}>改变控件样式</Button>
          <Button onClick={this.handleMapTypes}>改变地图类型</Button>
        </div>
      </Container>
    );
  }
}

export default App;
