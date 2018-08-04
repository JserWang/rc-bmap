import React from 'react';
import { render } from 'react-dom';
import { 
  Map,
  Tile,
} from '../../src';

const getTilesUrl = (tileCoord, zoom) => {
  const x = tileCoord.x;
  const y = tileCoord.y;
  //根据当前坐标，选取合适的瓦片图
  return 'http://lbsyun.baidu.com/jsdemo/demo/tiles/' + zoom + '/tile' + x + '_' + y + '.png';  
};

const center = {
  lng: 116.332782,
  lat: 40.007978,
};

render(
  <Map 
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
    center={center}
    zoom={16}
  >
    <Tile 
      transparentPng
      getTilesUrl={getTilesUrl}
    />
  </Map>,
  document.getElementById('app')
);
