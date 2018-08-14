import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Demo1 from './map/Demo1';
import Boundary from './overlay/boundary/index';
import Symbol from './overlay/symbol/index';
import Pointcollection from './overlay/pointcollection/index';
import Ground from './overlay/ground/index';
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
    <Route path="/boundary" component={Boundary} />
    <Route path="/symbol" component={Symbol} />
    <Route path="/pointcollection" component={Pointcollection} />
    <Route path="/ground" component={Ground} />
    <Route path="/circle" component={Circle} />
    <Route path="/infoWindow" component={InfoWindow} />
    <Route path="/label" component={Label} />
    <Route path="/marker" component={Marker} />
    <Route path="/polygon" component={Polygon} />
    <Route path="/polyline" component={Polyline} />
  </Switch>
);


export default route;
