import React from 'react';
import {
  Map,
  getPoiByKeyword,
  RidingRoute,
} from 'rc-bmap';
import Container from 'components/Container';
import Riding from './index.md';

class App extends React.Component {
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
      <Container code={Riding}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
            mapMounted={this.mapMounted}
          >
            <RidingRoute
              getInstance={this.getRoute}
              showInMap
            />
          </Map>
        </div>
      </Container>
    );
  }
}

export default App;
