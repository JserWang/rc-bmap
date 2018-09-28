import { Geolocation as BGeolocation } from '../../core';
import BaseControl from './BaseControl';

class Geolocation extends BaseControl {
  init = () => {
    const geolocation = new BGeolocation(this.config, this.mapInstance);
    this.instance = geolocation.instance;
  }
}

export default Geolocation;
