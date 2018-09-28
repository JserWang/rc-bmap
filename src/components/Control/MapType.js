import { MapType as BMapType } from '../../core';
import BaseControl from './BaseControl';

class MapType extends BaseControl {
  instance = null

  init = () => {
    const mapType = new BMapType(this.config, this.mapInstance);
    this.instance = mapType.instance;
  }
}

export default MapType;
