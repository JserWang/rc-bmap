import React, { Component } from 'react';
import { Button } from 'antd';
import { Map, Ground } from 'rc-bmap';
import Container from 'components/Container';
import index from './index.md';

class GroundExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounds: {
        sw: {
          lng: 116.295,
          lat: 39.837,
        },
        ne: {
          lng: 116.475,
          lat: 39.976,
        },
      },
      imageURL: 'http://lbsyun.baidu.com/jsdemo/img/si-huan.png',
      opacity: 1,
      maxZoom: 14,
      minZoom: 10,
      events: {
        click: this.handleClick,
      },
    };
  }

  handleClick = () => {
    console.log('Circle click');
  }

  onChangedClick = () => {
    console.log('onChanged Circle click');
  }

  handleBounds = () => {
    const { bounds } = this.state;
    this.setState({
      bounds: {
        sw: {
          lng: bounds.sw.lng + 0.01,
          lat: bounds.sw.lat + 0.01,
        },
        ne: {
          lng: bounds.ne.lng + 0.01,
          lat: bounds.ne.lat + 0.01,
        },
      },
    });
  }

  handleOpacity = () => {
    let { opacity } = this.state;
    if (opacity >= 0.9) {
      opacity = 0.1;
    }
    this.setState({
      opacity: opacity + 0.1,
    });
  }

  handleMaxZoom = () => {
    const { maxZoom } = this.state;
    console.log(maxZoom);
    this.setState({
      maxZoom: maxZoom + 1,
    });
  }

  handleMinZoom = () => {
    let { minZoom } = this.state;
    const { maxZoom } = this.state;
    if (minZoom + 1 >= maxZoom) {
      minZoom = 0;
    }
    console.log(minZoom);
    this.setState({
      minZoom: minZoom + 1,
    });
  }

  handleEvents = () => {
    this.setState({
      events: {
        click: this.onChangedClick,
      },
    });
  }

  handleImageURL = () => {
    const { imageURL } = this.state;
    this.setState({
      imageURL: imageURL ? '' : 'http://lbsyun.baidu.com/jsdemo/img/si-huan.png',
    });
  }

  render() {
    const {
      bounds, opacity, maxZoom, minZoom, events, imageURL,
    } = this.state;
    return (
      <Container code={index}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          >
            <Ground
              bounds={bounds}
              imageURL={imageURL}
              opacity={opacity}
              maxZoom={maxZoom}
              minZoom={minZoom}
              events={events}
            />
          </Map>
        </div>
        <Button onClick={this.handleBounds}>设置图层显示的矩形区域</Button>
        <Button onClick={this.handleImageURL}>调整图层地址</Button>
        <Button onClick={this.handleOpacity}>调整图层透明度</Button>
        <Button onClick={this.handleMaxZoom}>调整图层显示的最大级别</Button>
        <Button onClick={this.handleMinZoom}>调整图层显示的最小级别</Button>
        <Button onClick={this.handleEvents}>改变绑定事件</Button>
      </Container>
    );
  }
}

export default GroundExample;
