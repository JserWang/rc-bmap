import Map from './map';
import Overlay from './overlay';
import Service from './service';
import React from 'react';
import {render} from 'react-dom';

const examples = (
  // <Map />
  // <Overlay />
  <Service />
)

render(examples, document.getElementById('app'))