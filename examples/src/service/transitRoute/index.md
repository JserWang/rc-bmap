import React from 'react';
import {
  Map,
  DrivingPolicy,
  TransitPolicy,
  getPoiByKeyword,
  TransitRoute,
} from 'rc-bmap';
import { Button } from 'antd';

class TransitRouteExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '',
      policy: DrivingPolicy.NORMAL,
      // intercityPolicy: IntercityPolicy.NORMAL,
      // transitTypePolicy: TransitTypePolicy.NORMAL,
    };
  }

  getRoute = (instance) => {
    this.state.route = instance;
  };

  mapMounted = () => {
    const { route } = this.state;
    Promise.all(
      [getPoiByKeyword('百度大厦'), getPoiByKeyword('北京邮电大学西门')],
    ).then((res) => {
      route.search(res[0], res[1]);
    });
  };

  handlePolicy = () => {
    this.setState({
      policy: TransitPolicy.NORMAL,
    });
  }

  render() {
    const { policy } = this.state;
    return (
      <React.Fragment>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
            mapMounted={this.mapMounted}
          >
            <TransitRoute
              getInstance={this.getRoute}
              showInMap
              policy={policy}
            />
          </Map>
        </div>
        <Button onClick={this.handlePolicy}>改变市内公交的策略</Button>
      </React.Fragment>
    );
  }
}


export default TransitRouteExample;
