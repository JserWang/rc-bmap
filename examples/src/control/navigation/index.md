import React from 'react';
import { Button } from 'antd';
import {
  Map,
  ControlAnchor,
  Navigation,
  NavigationType,
} from 'rc-bmap';
import { getRandomControlAnchor, getRandomNavigationType } from 'utils';

class NavigationExample extends React.Component {
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

  handleType = () => {
    this.setState({
      type: NavigationType[getRandomNavigationType()],
    });
  }

  hideZoom = () => {
    const { showZoomInfo } = this.state;
    this.setState({
      showZoomInfo: !showZoomInfo,
    });
  }

  geolocation = () => {
    const { geolocation } = this.state;
    this.setState({
      geolocation: !geolocation,
    });
  }

  render() {
    const {
      offset, anchor, type, showZoomInfo, geolocation,
    } = this.state;
    return (
      <React.Fragment>
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
          <Button onClick={this.handleAnchor}>随机改变停靠位置</Button>
          <Button onClick={this.handleType}>随机改变控件类型</Button>
          <Button onClick={this.hideZoom}>
            {showZoomInfo ? '隐藏级别提示信息' : '显示级别提示信息'}
          </Button>
          <Button onClick={this.geolocation}>
            {geolocation ? '不集成定位功能' : '集成定位功能'}
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default NavigationExample;
