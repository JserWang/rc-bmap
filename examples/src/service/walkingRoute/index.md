import React from 'react';
import {
  Map,
  WalkingRoute,
  getPoiByKeyword,
} from 'rc-bmap';

class WalkingRouteExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '',
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

  render() {
    return (
      <React.Fragment>
        <div style={{ height: '90vh' }}>
          <Map
            ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
            scrollWheelZoom
            mapMounted={this.mapMounted}
          >
            <WalkingRoute
              getInstance={this.getRoute}
              showInMap
            // 这里还有更多属性，可参考文档
            />
          </Map>
        </div>
      </React.Fragment>
    );
  }
}
export default WalkingRouteExample;
