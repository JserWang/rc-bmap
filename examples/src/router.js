import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Demo1 from './map/Demo1';

const route = () => (
  <Switch>
    <Route exact path="/" component={Demo1} />
    <Route path="/demo1" component={Demo1} />
  </Switch>
);


export default route;
