import React from 'react';
import { Button } from 'antd';
import {
  Map,
  ControlAnchor,
  Geolocation,
} from 'rc-bmap';
import { getRandomControlAnchor } from 'utils';
import Container from 'components/Container';
import Geo from './index.md';

class GeolocationExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        width: 0,
        height: 0,
      },
      anchor: ControlAnchor.TOP_RIGHT,
      showAddressBar: true,
      autoLocation: false,
      locationIcon: null,
      events: {
        locationSuccess: (event) => {
          console.log('locationSuccess', event);
        },
        locationError: (event) => {
          console.log('locationError', event);
        },
      },
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

  hideAddressBar = () => {
    const { showAddressBar } = this.state;
    this.setState({
      showAddressBar: !showAddressBar,
    });
  }

  autoLocation = () => {
    const { autoLocation } = this.state;
    this.setState({
      autoLocation: !autoLocation,
    });
  }

  handleIcon = () => {
    this.setState({
      locationIcon: {
        url: 'http://api0.map.bdimg.com/images/copyright_logo.png',
        size: {
          width: 100,
          height: 100,
        },
      },
    });
  }

  render() {
    const {
      offset, anchor, showAddressBar, locationIcon, autoLocation, events,
    } = this.state;
    return (
      <Container code={Geo}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <Geolocation
              offset={offset}
              anchor={anchor}
              showAddressBar={showAddressBar}
              locationIcon={locationIcon}
              autoLocation={autoLocation}
              events={events}
            />
          </Map>
          <Button onClick={this.handleOffset}>改变offset</Button>
          <Button onClick={this.handleAnchor}>随机改变停靠位置</Button>
          <Button onClick={this.hideAddressBar}>
            {showAddressBar ? '隐藏定位信息面板' : '显示定位信息面板'}
          </Button>
          <Button onClick={this.autoLocation}>
            {autoLocation ? '添加控件时不进行定位' : '添加控件时进行定位'}
          </Button>
          <Button onClick={this.handleIcon}>更换icon</Button>
        </div>
      </Container>
    );
  }
}

export default GeolocationExample;
