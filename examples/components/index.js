import React from 'react';
import { render } from 'react-dom';
import { ControlAnchor, Map } from '../../src';
import ComplexControl  from './ComplexControl';

const offset = {
  width: 10,
  height: 10,
};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
  >
    <ComplexControl offset={offset} anchor={ControlAnchor.TOP_RIGHT}  />
  </Map>,
  document.getElementById('app')
);
