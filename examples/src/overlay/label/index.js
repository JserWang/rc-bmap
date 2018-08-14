import React from 'react';
import { Button } from 'antd';
import {
  Map, MapTypeCtrl,
  ControlAnchor, MapTypeControlType,
  MapType,
} from 'rc-bmap';
import Container from 'components/Container';
import Label from './index.md';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
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
        }
      },
      style: {
        backgroundColor: 'red',
        color: '#fff',
      },
    };
  }

  handleContent = () => {
    this.setState({
      content: '新的标签内容',
    });
  }

  handlePoint = () => {
    this.setState({
      point: {
        lng: 116.400,
        lat: 39.915,
      },
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

  handleMassClear = () => {
    this.setState({
      massClear: !this.state.massClear, // 改为true之后再点击clearMarker则标签会被清除
    });
  }

  clearMarker = () => {
    window.bMapInstance.clearOverlays(); // 触发之后若massClear是true则会清除该标签
  }

  handleTitle = () => {
    this.setState({
      title: '新的title',
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
        backgroundColor: 'green',
        color: '#fff',
      },
    });
  }

  render() {
    const { visible } = this.state;
    const {
      content, point, offset, massClear, title, events, zIndex, style,
    } = this.state;
    return (
      <Container code={Demo1}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <Label
              content={content} // 显示标签，支持html
              point={point} // 标签显示坐标
              offset={offset} // 偏移值
              massClear={massClear} // 地图clearOverlays()时，是否清空
              title={title} // 鼠标悬浮显示文字
              events={events} // 绑定事件
              zIndex={zIndex} // 同html的z-index
              style={style} // 标签样式
            />
          </Map>

        </div>

        <Button onClick={this.handleContent}>改变content</Button>
        <Button onClick={this.handlePoint}>改变point</Button>
        <Button onClick={this.handleOffset}>改变offset</Button>
        <Button onClick={this.handleMassClear}>改变massClear</Button>
        <Button onClick={this.handleTitle}>改变title</Button>
        <Button onClick={this.handleZIndex}>改变zIndex</Button>
        <Button onClick={this.handleStyle}>改变style</Button>
        <Button onClick={this.clearMarker}>清除marker</Button>

      </Container>
    );
  }
}

export default App;
