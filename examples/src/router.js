import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Demo1 from './map/Demo1';
import Circle from './overlay/circle/index';
import InfoWindow from './overlay/infoWindow/index';
import Label from './overlay/label/index';
import Marker from './overlay/marker/index';
import Polygon from './overlay/polygon/index';
import Polyline from './overlay/polyline/index';

const route = () => (
  <Switch>
    <Route exact path="/" component={Demo1} />
    <Route path="/demo1" component={Demo1} />
    <Route path="/circle" component={Circle} />
    <Route path="/infoWindow" component={InfoWindow} />
    <Route path="/label" component={Label} />
    <Route path="/marker" component={Marker} />
    <Route path="/polygon" component={Polygon} />
    <Route path="/polyline" component={Polyline} />
  </Switch>
);


export default route;
