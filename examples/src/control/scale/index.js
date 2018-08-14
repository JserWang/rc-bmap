import React from 'react';
import { Button } from 'antd';
import {
  Map,
  ControlAnchor,
  Scale,
  LengthUnit,
} from 'rc-bmap';
import Container from 'components/Container';
import Sc from './index.md';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        width: 0,
        height: 0,
      },
      anchor: ControlAnchor.TOP_RIGHT,
      unit: LengthUnit.METRIC,
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

  handleUnit = () => {
    this.setState({
      unit: LengthUnit.IMPERIAL,
    });
  }


  render() {
    const { offset, anchor, unit } = this.state;
    return (
      <Container code={Sc}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <Scale
              offset={offset}
              anchor={anchor}
              unit={unit}
            />
          </Map>
          <Button onClick={this.handleOffset}>改变offset</Button>
          <Button onClick={this.handleAnchor}>改变停靠位置</Button>
          <Button onClick={this.handleUnit}>改变单位</Button>
        </div>
      </Container>
    );
  }
}

export default App;
