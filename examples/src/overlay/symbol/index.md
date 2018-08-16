import React, { Component } from 'react';
import { Map, Symbol, SymbolShapeType } from 'rc-bmap';
import { Button } from 'antd';
import { getRandomColor, getRandomSymbolShape } from 'utils';

class SymbolExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: {
        lng: 116.404,
        lat: 39.915,
      },
      path: SymbolShapeType.FORWARD_CLOSED_ARROW,
      anchor: {
        height: 10,
        width: 50,
      },
      fillColor: 'red',
      fillOpacity: 0.8,
      scale: 5,
      rotation: 0,
      strokeColor: 'blue',
      strokeOpacity: 0.8,
      strokeWeight: 1,
    };
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

  handlePath = () => {
    const symbolShape = getRandomSymbolShape();
    this.setState({
      path: SymbolShapeType[symbolShape],
    });
  }

  handleAnchor = () => {
    const { anchor } = this.state;
    this.setState({
      anchor: {
        width: anchor.width + 5,
        height: anchor.height + 5,
      },
    });
  }

  handleFillColor = () => {
    this.setState({
      fillColor: getRandomColor(),
    });
  }

  handleFillOpacity = () => {
    let { fillOpacity } = this.state;
    if (fillOpacity >= 0.9) {
      fillOpacity = 0.1;
    }
    this.setState({
      fillOpacity: fillOpacity + 0.1,
    });
  }

  handleScale = () => {
    const { scale } = this.state;
    this.setState({
      scale: scale + 1,
    });
  }

  handleRotation = () => {
    const { rotation } = this.state;
    this.setState({
      rotation: rotation + 10,
    });
  }

  handleStrokeColor = () => {
    this.setState({
      strokeColor: getRandomColor(),
    });
  }

  handleStrokeWeight = () => {
    const { strokeWeight } = this.state;
    this.setState({
      strokeWeight: strokeWeight + 1,
    });
  }

  handleStrokeOpacity = () => {
    let { strokeOpacity } = this.state;
    if (strokeOpacity >= 0.9) {
      strokeOpacity = 0.1;
    }
    this.setState({
      strokeOpacity: strokeOpacity + 0.1,
    });
  }

  render() {
    const {
      point, path, anchor, fillColor, fillOpacity, scale,
      rotation, strokeColor, strokeOpacity, strokeWeight,
    } = this.state;
    return (
      <React.Fragment>
        <div style={{ height: '90vh' }}>
          <Map
            ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
            scrollWheelZoom
          >
            <Symbol
              point={point}
              path={path}
              anchor={anchor}
              fillColor={fillColor}
              fillOpacity={fillOpacity}
              scale={scale}
              rotation={rotation}
              strokeColor={strokeColor}
              strokeOpacity={strokeOpacity}
              strokeWeight={strokeWeight}
            />
          </Map>
        </div>
        <Button onClick={this.handlePoint}>改变point</Button>
        <Button onClick={this.handlePath}>随机改变形状</Button>
        <Button onClick={this.handleAnchor}>随机改变偏移值</Button>
        <Button onClick={this.handleFillColor}>随机改变填充颜色</Button>
        <Button onClick={this.handleFillOpacity}>调整填充透明度</Button>
        <Button onClick={this.handleScale}>调整缩放比例</Button>
        <Button onClick={this.handleRotation}>调整旋转角度</Button>
        <Button onClick={this.handleStrokeColor}>随机改变边线颜色 </Button>
        <Button onClick={this.handleStrokeOpacity}>调整边线透明度</Button>
        <Button onClick={this.handleStrokeWeight}>调整边线宽度</Button>
      </React.Fragment>
    );
  }
}

export default SymbolExample;
