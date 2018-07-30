import React, {Component} from 'react';
import { 
  Map, 
  Navigation,
  OverviewMap,
  Scale,
  MapTypeCtrl, 
  MapType,
  Copyright,
  Geolocation,
  Panorama,
  CityList,
} from '../../src';
import CustomControl from './CustomControl';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '啊啊啊123',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        label: '啊啊啊456'
      })
    }, 2000);
  }

  render() {
    return (
      <Map
        ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
        events={{ click: (args) => {console.log(args); } }}
        scrollWheelZoom
      >
        <Navigation offset={{ width: 5, height: 5 }} />
        <CustomControl 
          label={this.state.label}
        />
        <OverviewMap />
        <Scale />
        <MapTypeCtrl 
          mapTypes={[
            MapType.NORMAL,
            MapType.PERSPECTIVE
          ]}
        />
        <Copyright content={'这是我的个人版权信息'}/>
        <Geolocation 
          locationIcon={{
            url: 'http://api0.map.bdimg.com/images/copyright_logo.png',
            size: {width: 100, height: 100},
          }}
        />
        <Panorama />
        <CityList 
          offset={{
            width: 300,
          }}
        />
      </Map>
    )
  }
}