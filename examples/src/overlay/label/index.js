import React, { Component } from 'react';
import { Button } from 'antd';
import { Map, Label } from 'rc-bmap';
import Container from 'components/Container';
import { getRandomColor } from 'utils';
import index from './index.md';

class LabelExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '这是标签哦',
      point: {
        lng: 116.404,
        lat: 39.915,
      },
      offset: {
        width: 3,
        height: 0,
      },
      massClear: false,
      title: '标签也可以是html哦',
      zIndex: 100,
      events: {
        click() {
          console.log('label click');
        },
      },
      style: {
        backgroundColor: 'red',
        color: '#fff',
      },
    };
  }

  handleContent = () => {
    const { content } = this.state;
    this.setState({
      content: content === '新的标签内容' ? '标签内容' : '新的标签内容',
    });
  }

  handlePoint = () => {
    const { point } = this.state;
    this.setState({
      point: {
        lng: point.lng + 0.01,
        lat: point.lat + 0.01,
      },
    });
  }

  handleOffset = () => {
    const { offset } = this.state;
    this.setState({
      offset: {
        width: offset.width + 10,
        height: offset.height + 10,
      },
    });
  }

  handleMassClear = () => {
    const { massClear } = this.state;
    this.setState({
      massClear: !massClear,
    });
  }

  handleClear = () => {
    window.bMapInstance.clearOverlays();
  }

  handleTitle = () => {
    const { title } = this.state;
    this.setState({
      title: title === '新的title' ? 'title' : '新的title',
    });
  }

  handleZIndex = () => {
    this.setState({
      zIndex: 50,
    });
  }

  handleStyle = () => {
    this.setState({
      style: {
        backgroundColor: getRandomColor(),
        color: getRandomColor(),
      },
    });
  }

  render() {
    const {
      content, point, offset, massClear, title, events, zIndex, style,
    } = this.state;
    return (
      <Container code={index}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <Label
              content={content}
              point={point}
              offset={offset}
              massClear={massClear}
              title={title}
              events={events}
              zIndex={zIndex}
              style={style}
            />
          </Map>
        </div>
        <Button onClick={this.handleContent}>改变content</Button>
        <Button onClick={this.handlePoint}>改变point</Button>
        <Button onClick={this.handleOffset}>改变offset</Button>
        <Button onClick={this.handleTitle}>改变title</Button>
        <Button onClick={this.handleZIndex}>改变zIndex</Button>
        <Button onClick={this.handleStyle}>改变style</Button>
        <Button onClick={this.handleMassClear}>
          { massClear ? 'clearOverlay时不移除此对象' : 'clearOverlay时移除此对象' }
        </Button>
        <Button onClick={this.handleClear}>clearOverlay</Button>
      </Container>
    );
  }
}

export default LabelExample;
