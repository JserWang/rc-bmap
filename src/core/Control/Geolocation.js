import Util from '../utils';
import BMapUtil from '../utils/map';
import BaseControl from './BaseControl';

class Geolocation extends BaseControl {
  init(config = {}) {
    config.locationIcon = config.icon;
    delete config.icon;
    this.instance = BMapUtil.BGeolocationControl(config);
    this.map.addControl(this.instance);

    Util.bindEvents(this.instance, config.events);
  }
}

export default Geolocation;
