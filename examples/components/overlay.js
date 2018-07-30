import React, {Component} from 'react';
import { 
  Map, 
  Marker,
  OverviewMap,
  Scale,
  MapTypeCtrl, 
  MapType,
  Copyright,
  Geolocation,
  Panorama,
  CityList,
} from '../../src';
import CustomOverlay from './CustomOverlay';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showMarker: true,
      markerPoint: {
        lng: 116.404,
        lat: 39.915
      }
    };

    this.point = {
      lng: 116.404,
      lat: 39.915
    }

    this.size = {
      width: 100,
      height: 100,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showMarker: false,
      })
    }, 2000)
  }

  render() {
    return (
      <Map
        ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
        events={{ click: (args) => {console.log(args); } }}
        scrollWheelZoom
      >
        <CustomOverlay 
          point={this.point}
          size={this.size}
        />
        {
          this.state.showMarker && <Marker 
            point={this.state.markerPoint}
          />
        }
        
      </Map>
    )
  }
}