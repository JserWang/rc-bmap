import React, {Component} from 'react';
import { 
  Map, 
  LocalSearch,
  TransitRoute,
  TransitPolicy,
  getPoiByKeyword,
  DrivingRoute,
  WalkingRoute,
  RidingRoute,
} from '../../src';
import DrivingPolicy from '../../src/constants/DrivingPolicy';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '啊啊啊123',
    };
  }

  getLocalSearch = (instance) => {
    this.localSearch = instance;
  }

  getTransitRoute = (instance) => {
    this.transitRoute = instance;
  }

  getDrivingRoute = (instance) => {
    this.drivingRoute = instance;
  }

  getRidingRoute = (instance) => {
    this.ridingRoute = instance;
  }

  getWalkingRoute = (instance) => {
    this.walkingRoute = instance;
  }

  mapRenderCallBack = (map) => {
    // this.localSearch.search("景点");
    // this.localSearch.searchInBounds(["酒店", "加油站"], getMapBounds())
    Promise.all(
      [getPoiByKeyword("百度大厦"), getPoiByKeyword("北京邮电大学西门")]
    ).then((res) => {
      //   this.transitRoute.search(res[0], res[1]);
      // this.drivingRoute.search(res[0], res[1]);
      // this.ridingRoute.search(res[0], res[1]);
      // this.walkingRoute.search(res[0], res[1]);
    })
  }

  render() {
    return (
      <Map
        ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
        center={{lng: 116.404, lat: 39.915}}
        zoom={11}
        scrollWheelZoom
        renderCallBack={this.mapRenderCallBack}
      >
        <LocalSearch getInstance={this.getLocalSearch} showInMap />
        <TransitRoute getInstance={this.getTransitRoute} showInMap policy={TransitPolicy.LEAST_TIME} />
        <DrivingRoute getInstance={this.getDrivingRoute} showInMap policy={DrivingPolicy.DEFAULT} />
        <RidingRoute getInstance={this.getRidingRoute} showInMap />
        <WalkingRoute getInstance={this.getWalkingRoute} showInMap />
      </Map>
    )
  }
}
