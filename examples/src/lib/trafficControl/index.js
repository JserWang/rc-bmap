import React from 'react';
import { Button } from 'antd';
import {
  Map,
  ControlAnchor,
  TrafficControl,
} from 'rc-bmap';
import { getRandomControlAnchor } from 'utils';
import Container from 'components/Container';
import Traffic from './index.md';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchor: ControlAnchor.BOTTOM_RIGHT,
    };
  }

  handleAchor = () => {
    this.setState({
      anchor: ControlAnchor[getRandomControlAnchor()],
    });
  }

  render() {
    const { anchor } = this.state;
    return (
      <Container code={Traffic}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <TrafficControl anchor={anchor} />
          </Map>
          <Button onClick={this.handleAchor}>改变停靠位置</Button>
        </div>
      </Container>
    );
  }
}

export default App;
