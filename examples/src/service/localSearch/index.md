import React from 'react';
import {
  Map,
  getMapBounds,
  LocalSearch,
} from 'rc-bmap';
import Container from 'components/Container';
import Local from './index.md';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '',
      center: {
        lng: 120.21937542,
        lat: 30.25924446,
      },
      pageCapacity: 5,
    };
  }

  getRoute = (instance) => {
    this.state.route = instance;
  };

  mapMounted = (map) => {
    const { route } = this.state;
    console.log(map);
    route.searchInBounds(['酒店', '加油站'], getMapBounds());
  };

  onInfoHtmlSet = (result) => {
    console.log('onInfoHtmlSet');
    console.log(result);
  }

  onResultsHtmlSet = (result) => {
    console.log('onResultsHtmlSet');
    console.log(result);
  }

  onSearchComplete = (result) => {
    console.log('onSearchComplete');
    console.log(result);
  }

  render() {
    const { center, pageCapacity } = this.state;
    return (
      <Container code={Local}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
   import React from 'react';
import {
  Map,
  DrivingPolicy,
  getPoiByKeyword,
  TransitRoute,
} from 'rc-bmap';
import Container from 'components/Container';
import Transit from './index.md';

class App extends React.Component {
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

  render() {
    const { policy } = this.state;
    return (
      <Container code={Transit}>
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
      </Container>
    );
  }
}


export default App;
         mapMounted={this.mapMounted}
            center={center}
          >
            <LocalSearch
              getInstance={this.getRoute}
              showInMap
              pageCapacity={pageCapacity}
              onInfoHtmlSet={this.onInfoHtmlSet}// 标注气泡创建后的回调函数
              onResultsHtmlSet={this.onResultsHtmlSet}// 结构列表添加完成后的回调函数
              onSearchComplete={this.onSearchComplete}// 检索完成后回调函数
              onMarkersSet={this.onMarkersSet}
            />
          </Map>
        </div>
      </Container>
    );
  }
}

export default App;
