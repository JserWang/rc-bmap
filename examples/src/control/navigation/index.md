import React from 'react';
import { Button } from 'antd';
import {
  Map,
  ControlAnchor,
  Navigation,
  NavigationType,
} from 'rc-bmap';
import Container from 'components/Container';
import Nav from './Navigation.md';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        width: 0,
        height: 0,
      },
      anchor: ControlAnchor.TOP_LEFT,
      type: NavigationType.LARGE,
      showZoomInfo: true,
      geolocation: false,
    };
  }

  handleAnchor = () => {
    this.setState({
      anchor: ControlAnchor.BOTTOM_LEFT,
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

  handleType = () => {
    this.setState({
      type: NavigationType.PAN,
    });
  }

  hideZoom = () => {
    this.setState({
      showZoomInfo: false,
    });
  }

  geolocation = () => {
    this.setState({
      geolocation: true,
    });
  }

  render() {
    const {
      offset, anchor, type, showZoomInfo, geolocation,
    } = this.state;
    return (
      <Container code={Nav}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <Navigation
              offset={offset}
              anchor={anchor}
              type={type}
              showZoomInfo={showZoomInfo}
              geolocation={geolocation}
            />
          </Map>
          <Button onClick={this.handleOffset}>改变offset</Button>
          <Button onClick={this.handleAnchor}>改变停靠位置</Button>
          <Button onClick={this.handleType}>改变控件类型</Button>
          <Button onClick={this.hideZoom}>隐藏级别提示信息</Button>
          <Button onClick={this.geolocation}>集成定位功能</Button>
        </div>
      </Container>
    );
  }
}

export default App;
