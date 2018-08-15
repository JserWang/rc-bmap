import React from 'react';
import { Button } from 'antd';
import {
  Map,
  ControlAnchor,
  Copyright,
} from 'rc-bmap';
import { getRandomControlAnchor } from 'utils';

class CopyrightExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        width: 10,
        height: 10,
      },
      anchor: ControlAnchor.TOP_RIGHT,
      content: '该版权的文本信息，用于显示在地图上，支持HTML内容',
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

  handleContent = () => {
    const { content } = this.state;
    this.setState({
      content: content === '版权信息' ? '<h4 style = "color: red">这是一段HTML内容</h4>' : '版权信息',
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
          <Button onClick={this.handleAnchor}>随机改变停靠位置</Button>
          <Button onClick={this.handleContent}>改变版权内容</Button>
        </div>
      </Container>
    );
  }
}

export default CopyrightExample;
