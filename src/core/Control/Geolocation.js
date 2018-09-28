import { BMapUtil } from '../utils';
import BaseControl from './Base';

class Geolocation extends BaseControl {
  constructor(config, map) {
    super(config, map);
    this.init(config);
  }

  instance = null

  init = (config) => {
    config.locationIcon = config.icon;
    delete config.icon;
    this.instance = BMapUtil.BGeolocationControl(config);
    this.map.addControl(this.instance);
    BMapUtil.bindEvents(this.instance, config.events);
  }
}

export default Geolocation;
