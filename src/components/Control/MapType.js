import { MapType as BMapType } from '../../core';
import BaseControl from './BaseControl';

class MapType extends BaseControl {
  getRealControl = () => new BMapType(this.config, this.mapInstance)
}

export default MapType;
