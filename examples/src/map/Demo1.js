import React from 'react';
import { Button } from 'antd';
import {
  Map, MapTypeCtrl,
  ControlAnchor, MapTypeControlType,
  MapType,
} from 'rc-bmap';
import Container from 'components/Container';
import Demo1 from './Demo1.md';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
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
  const { visible } = this.state;
  const {
    offset, anchor, type, mapTypes,
  } = this.state;
  return (
    <Container code={Demo1}>
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

      </div>
      <Button onClick={this.handleOffset}>
        改变offset
      </Button>
      <Button onClick={this.handleAnchor}>
        改变停靠位置
      </Button>
      <Button onClick={this.handleType}>
        改变控件样式
      </Button>
      <Button onClick={this.handleMapTypes}>
        改变地图类型
      </Button>

    </Container>
  );
}
}

export default App;
