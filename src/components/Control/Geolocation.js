import { Geolocation as BGeolocation } from '../../core';
import BaseControl from './BaseControl';

class Geolocation extends BaseControl {
  getRealControl = () => new BGeolocation(this.config, this.mapInstance)
}

export default Geolocation;
