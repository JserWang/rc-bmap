import React from 'react';
import { Button } from 'antd';
import {
  Map,
  ControlAnchor,
  Copyright,
} from 'rc-bmap';
import Container from 'components/Container';
import Copy from './index.md';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        width: 0,
        height: 0,
      },
      anchor: ControlAnchor.TOP_RIGHT,
      content: '该版权的文本信息，用于显示在地图上，支持HTML内容',
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

  handleContent = () => {
    this.setState({
      content: '<h4>该版权的文本信息，用于显示在地图上，支持HTML内容</h4>',
    });
  }


  render() {
    const { offset, anchor, content } = this.state;
    return (
      <Container code={Copy}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <Copyright
              offset={offset}
              anchor={anchor}
              content={content}
            />
          </Map>
          <Button onClick={this.handleOffset}>改变offset</Button>
          <Button onClick={this.handleAnchor}>改变停靠位置</Button>
          <Button onClick={this.handleContent}>版权内容</Button>
        </div>
      </Container>
    );
  }
}

export default App;
