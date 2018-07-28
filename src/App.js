import React, { Component } from 'react';
import Map from './components/Map';
import Control from './components/Control';
import CONTROL_ANCHOR from './constants/ControlAnchor';
import './App.css';

class App extends Component {
  render() {
    return (
      <Map
        ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
        events={{ click: (...args) => {console.log(args); } }}
      >
        <Control
          anchor={CONTROL_ANCHOR.TOP_LEFT}
          offse={{
            width: 100,
            height: 100,
          }}
        />
      </Map>
    );
  }
}

export default App;
