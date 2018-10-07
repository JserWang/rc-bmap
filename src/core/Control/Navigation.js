import { BMapUtil } from '../utils';
import BaseControl from './index';

const getNavigationControlOptions = config => ({
  anchor: config.anchor,
  offset: config.offset,
  type: global[config.type] || config.type,
  showZoomInfo: config.showZoomInfo,
  enableGeolocation: config.geolocation,
});

class Navigation extends BaseControl {
  init(config = {}) {
    const options = getNavigationControlOptions(config);
    this.instance = BMapUtil.BNavigationControl(options);
    this.map.addControl(this.instance);
  }
}

export default Navigation;
