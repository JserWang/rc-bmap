import React, { Component } from 'react';
import {
  Map, PointCollection, SizeType, ShapeType,
} from 'rc-bmap';
import { Button } from 'antd';
import Container from 'components/Container';
import { getRandomColor } from 'utils';
import index from './index.md';

class PointCollectionExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      shape: ShapeType.STAR,
      size: SizeType.BIGGER,
      points: [
        {
          lng: 116.387,
          lat: 39.920,
        }, {
          lng: 116.385,
          lat: 39.913,
        },
        {
          lng: 116.394,
          lat: 39.917,
        },
      ],
      events: {
        click: this.onClick,
      },
    };
  }

  onClick = () => {
    console.log('PointCollection click');
  }

  onChangedClick = () => {
    console.log('onChanged PointCollection click');
  }

  handleEvents = () => {
    this.setState({
      events: {
        click: this.onChangedClick,
      },
    });
  }

  handleSize = () => {
    const { size } = this.state;
    this.setState({
      size: size === SizeType.BIGGER ? SizeType.HUGE : SizeType.BIGGER,
    });
  }

  handlePoints = () => {
    const { points } = this.state;
    this.setState({
      points: [
        {
          lng: points[0].lng + 0.01,
          lat: points[0].lat + 0.01,
        }, {
          lng: points[1].lng + 0.01,
          lat: points[1].lat + 0.01,
        },
        {
          lng: points[2].lng + 0.01,
          lat: points[2].lat + 0.01,
        },
      ],
    });
  }

  handleShape = () => {
    const { shape } = this.state;
    this.setState({
      shape: shape === ShapeType.CIRCLE ? ShapeType.STAR : ShapeType.CIRCLE,
    });
  }

  handleColor = () => {
    this.setState({
      color: getRandomColor(),
    });
  }

  render() {
    const {
      points, size, shape, color, events,
    } = this.state;
    return (
      <Container code={index}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
            scrollWheelZoom
          >
            <PointCollection
              points={points}
              shape={shape}
              size={size}
              color={color}
              events={events}
            />
          </Map>
        </div>
        <Button onClick={this.handlePoints}>改变points</Button>
        <Button onClick={this.handleColor}>随机改变点颜色</Button>
        <Button onClick={this.handleShape}>改变点的形状</Button>
        <Button onClick={this.handleSize}>改变点的尺寸</Button>
        <Button onClick={this.handleEvents}>改变绑定事件</Button>
      </Container>
    );
  }
}

export default PointCollectionExample;
