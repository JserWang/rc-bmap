import React, { Component } from 'react';
import { Map, Ground } from 'rc-bmap';
import { Button } from 'antd';
import Container from 'components/Container';
import ground from './index.md';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounds: {
        sw: {
          lng: 116.29579,
          lat: 39.837146,
        },
        ne: {
          lng: 116.475451,
          lat: 39.9764,
        },
      },
      imageURL: '',
      opacity: 1,
      maxZoom: 14,
      minZoom: 10,
      events: {
        click() {
          alert('这是一个事件');
        },
      },
    };
  }

  handleBounds=() => {
    this.setState({
      bounds: {
        sw: {
          lng: 116.29579,
          lat: 39.837146,
        },
        ne: {
          lng: 116.475451,
          lat: 39.9764,
        },
      },
    });
  }

  handleOpacity=() => {
    this.setState({
      opacity: 0.1,
    });
  }

  handleMaxZoom=() => {
    this.setState({
      maxZoom: 19,
    });
  }

  handleMinZoom=() => {
    this.setState({
      minZoom: 2,
    });
  }

  handleEvents=() => {
    this.setState({
      events: {
        click() {
          console.log('我点击了');
        },
      },

    });
  }

  handleImageURL=() => {
    this.setState({
      imageURL: 'http://lbsyun.baidu.com/jsdemo/img/si-huan.png',
    });
  }

  render() {
    const {
      bounds, opacity, maxZoom, minZoom, events, imageURL,
    } = this.state;
    return (
      <Container code={ground}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          >
            <Ground
              bounds={bounds} // 设置图层显示的矩形区域
              imageURL={imageURL} // 图层地址
              opacity={opacity} // 图层透明度
              maxZoom={maxZoom} // 图层显示的最大级别
              minZoom={minZoom} // 图层显示的最小级别
              events={events}
            />
          </Map>
        </div>
        <Button className="butt" onClick={this.handleBounds}>设置图层显示的矩形区域</Button>
        <Button className="butt" onClick={this.handleImageURL}> 图层地址</Button>
        <Button className="butt" onClick={this.handleOpacity}>图层透明度</Button>
        <Button className="butt" onClick={this.handleMaxZoom}>图层显示的最大级别</Button>
        <Button className="butt" onClick={this.handleMinZoom}>图层显示的最小级别</Button>
        <Button className="butt" onClick={this.handleEvents}>事件绑定</Button>
      </Container>

    );
  }
}

export default App;
