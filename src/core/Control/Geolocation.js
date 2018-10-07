import { BMapUtil } from '../utils';
import BaseControl from './index';

class Geolocation extends BaseControl {
  init(config = {}) {
    config.locationIcon = config.icon;
    delete config.icon;
    this.instance = BMapUtil.BGeolocationControl(config);
    this.map.addControl(this.instance);
    BMapUtil.bindEvents(this.instance, config.events);
  }
}

export default Geolocation;
