import React from 'react';
import {
  Map,
  DrivingRoute,
  DrivingPolicy,
  getPoiByKeyword,
} from 'rc-bmap';
import Container from 'components/Container';
import Driving from './index.md';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '',
      center: {
        lng: 120.21937542,
        lat: 30.25924446,
      },
      policy: DrivingPolicy.NORMAL,
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
    const { center, policy } = this.state;
    return (
      <Container code={Driving}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
            mapMounted={this.mapMounted}
            center={center}
          >
            <DrivingRoute
              getInstance={this.getRoute}
              showInMap
              policy={policy}
            />
          </Map>
        </div>
      </Container>
    );
  }
}

export default App;
