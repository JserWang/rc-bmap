import React from 'react';
import { Button } from 'antd';
import {
  Map,
  CurveLine,
} from 'rc-bmap';
import { getRandomColor } from 'utils';

class CurveLineExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [
        { lng: 116.432045, lat: 39.910683 },
        { lng: 120.129721, lat: 30.314429 },
        { lng: 121.491121, lat: 25.127053 },
      ],
      zoom: 5,
      center: {
        lng: 120.129721,
        lat: 30.314429,
      },
      strokeColor: 'blue',
      strokeWeight: 3,
      strokeOpacity: 0.6,
      editing: false,
      events: {
        click() {
          console.log('CurveLine click');
        },
      },
    };
  }

  handlePoints = () => {
    const { points } = this.state;
    this.setState({
      points: [
        { lng: points[0].lng + 0.01, lat: points[0].lat + 0.01 },
        { lng: points[1].lng + 0.01, lat: points[1].lat + 0.01 },
        { lng: points[2].lng + 0.01, lat: points[2].lat + 0.01 },
      ],
    });
  }

  handleColor = () => {
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
    if (strokeOpacity > 0.9) {
      strokeOpacity = 0.1;
    }
    this.setState({
      strokeOpacity: strokeOpacity + 0.1,
    });
  }

  handleEditing = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing,
    });
  }

  render() {
    const {
      zoom, center, points, strokeColor, strokeWeight, strokeOpacity, events, editing,
    } = this.state;
    return (
      <React.Fragment>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
            zoom={zoom}
            center={center}
          >
            <CurveLine
              points={points}
              strokeColor={strokeColor}
              strokeWeight={strokeWeight}
              strokeOpacity={strokeOpacity}
              editing={editing}
              events={events}
            />
          </Map>
          <Button onClick={this.handlePoints}>随机改变points</Button>
          <Button onClick={this.handleColor}>随机改变抛物线颜色</Button>
          <Button onClick={this.handleStrokeWeight}>调整抛物线宽度</Button>
          <Button onClick={this.handleEditing}>{editing ? '禁用编辑' : '启用编辑'}</Button>
          <Button onClick={this.handleStrokeOpacity}>调整抛物线透明度</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default CurveLineExample;
