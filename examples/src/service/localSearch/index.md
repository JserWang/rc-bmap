import React from 'react';
import {
  Map,
  getMapBounds,
  LocalSearch,
} from 'rc-bmap';
import { Button } from 'antd';

class LocalSearchExample extends React.Component {
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

  handleCenter = () => {
    this.setState({
      center: {
        lng: 120.21937549,
        lat: 30.25924440,
      },
    });
  };

  handlePageCapacity = () => {
    this.setState({
      pageCapacity: 20,
    });
  }

  render() {
    const { center, pageCapacity } = this.state;
    return (
      <React.Fragment>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
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
              onMarkersSet={this.onMarkersSet} // 标注添加完成后的回调函数
            />
          </Map>
        </div>
        <Button onClick={this.handleCenter}>改变设初始化地图中心点</Button>
        <Button onClick={this.handlePageCapacity}>设置每页容量</Button>
      </React.Fragment>
    );
  }
}

export default LocalSearchExample;
