import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Demo1 from './map/Demo1';
import Boundary from './overlay/boundary/index';
import Symbol  from  './overlay/symbol/index'
import Pointcollection  from  './overlay/pointcollection/index'
import Ground  from  './overlay/ground/index'

const route = () => (
  <Switch>
    <Route exact path="/" component={Demo1} />
    <Route path="/demo1" component={Demo1} />
    <Route path="/boundary/index" component={Boundary} />
    <Route path="/symbol/index" component={Symbol} />
    <Route path="/pointcollection/index" component={Pointcollection} />
    <Route path="/ground/index" component={Ground} />

  </Switch>
);


export default route;
