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
      markerPoint: {
        lng: 116.404,
        lat: 39.915
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        markerPoint: {
          lng: 116.404,
          lat: 40.915
        }
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
          point={{
            lng: 116.404,
            lat: 39.915
          }}
          size={{
            width: 100,
            height: 100,
          }}
        />
        <Marker 
          point={{
            lng: 116.404,
            lat: 39.915
          }}
        />
      </Map>
    )
  }
}