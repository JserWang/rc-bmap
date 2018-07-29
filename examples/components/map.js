import React, {Component} from 'react';
import { Map, Navigation, OverviewMap, Scale, MapTypeCtrl, MapType } from '../../src';
import CustomControl from './CustomControl';

export default class App extends Component {
  getEvents() {
    return {
      click: (e) => {
        console.log('map click event', e, type);
      }
    }
  }

  render() {
    return (
      <Map
        ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
        events={{ click: (...args) => {console.log(args); } }}
      >
        <Navigation offset={{ width: 5, height: 5 }} />
        <CustomControl />
        <OverviewMap />
        <Scale />
        <MapTypeCtrl 
          mapTypes={[
            MapType.NORMAL,
            MapType.PERSPECTIVE
          ]}
        />
      </Map>
    )
  }
}