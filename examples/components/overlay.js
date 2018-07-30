import React, {Component} from 'react';
import { 
  Map, 
  Marker,
  Label,
  Polyline,
  Animation,
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
        <Marker 
          point={this.state.markerPoint}
          label={<Label content="bbb" title="bbb" />}
          animation={Animation.BOUNCE}
        />

        <Label 
          content="aaa"
          point={this.point}
          title="bbb"
        />

        <Polyline 
          points={[{
            lng: 116.399,
            lat: 39.910,
          }, {
            lng: 116.405,
            lat: 39.920,
          }, {
            lng: 116.425,
            lat: 39.900
          }]}
          strokeColor="blue"
          strokeWeight={2}
          strokeOpacity={0.5}
        />
      </Map>
    )
  }
}