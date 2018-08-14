import React from 'react';
import { render } from 'react-dom';
import { Map } from 'rc-bmap';

const zoomIn = () => {
  global.bMapInstance.zoomIn();
}

const zoomOut = () => {
  global.bMapInstance.zoomOut();
}

const contextMenu = {
  items: [
    {
      text: '放大',
      callback: zoomIn,
    },
    {
      text: '缩小',
      callback: zoomOut,
      separator: true,
    }
  ]
};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    contextMenu={contextMenu}
  />,
  document.getElementById('app')
);