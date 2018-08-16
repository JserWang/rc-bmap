import React from 'react';
import { Button } from 'antd';
import {
  Map,
  ControlAnchor,
  Panorama,
} from 'rc-bmap';
import { getRandomControlAnchor } from 'utils';
import Container from 'components/Container';
import Pano from './index.md';

class PanoramaExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        width: 0,
        height: 0,
      },
      anchor: ControlAnchor.TOP_RIGHT,
    };
  }

  handleAnchor = () => {
    this.setState({
      anchor: ControlAnchor[getRandomControlAnchor()],
    });
  }

  handleOffset = () => {
    const { offset } = this.state;
    this.setState({
      offset: {
        width: offset.width + 3,
        height: offset.height + 3,
      },
    });
  }

  render() {
    const { offset, anchor } = this.state;
    return (
      <Container code={Pano}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <Panorama
              offset={offset}
              anchor={anchor}
            />
          </Map>
          <Button onClick={this.handleOffset}>改变offset</Button>
          <Button onClick={this.handleAnchor}>随机改变停靠位置</Button>
        </div>
      </Container>
    );
  }
}

export default PanoramaExample;
