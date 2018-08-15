import React from 'react';
import { Button } from 'antd';
import {
  Map,
  CurveLine,
} from 'rc-bmap';
import Container from 'components/Container';
import Cur from './index.md';

class App extends React.Component {
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
      events: {
        click() {
          console.log('CurveLine click');
        },
      },
    };
  }

  handlePoints = () => {
    this.setState({
      points: [
        { lng: 115.650555, lat: 38.534983 },
        { lng: 116.432045, lat: 39.910683 },
        { lng: 120.129721, lat: 30.314429 },
      ],
    });
  }

  handleColor = () => {
    this.setState({
      strokeColor: 'red',
    });
  }

  handleWeight = () => {
    this.setState({
      strokeWeight: 1,
    });
  }

  handleOpacity = () => {
    this.setState({
      strokeOpacity: 1,
    });
  }


  render() {
    const {
      zoom, center, points, strokeColor, strokeWeight, strokeOpacity, events,
    } = this.state;
    return (
      <Container code={Cur}>
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
              editing
              events={events}
            />
          </Map>
          <Button onClick={this.handlePoints}>改变points</Button>
          <Button onClick={this.handleColor}>改变颜色</Button>
          <Button onClick={this.handleWeight}>改变线条宽度</Button>
          <Button onClick={this.handleOpacity}>改变透明度</Button>

        </div>
      </Container>
    );
  }
}

export default App;
