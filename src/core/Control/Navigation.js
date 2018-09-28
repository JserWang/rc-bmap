import { BMapUtil } from '../utils';
import BaseControl from './Base';

class Navigation extends BaseControl {
  constructor(config, map) {
    super(map);
    this.init(config);
  }

  instance = null

  init = (config) => {
    this.processCommonOptions(config);
    const options = this.getNavigationControlOptions(config);
    this.instance = BMapUtil.BNavigation(options);
    this.map.addControl(this.instance);
  }

  getNavigationControlOptions = config => ({
    anchor: config.anchor,
    offset: config.offset,
    type: global[config.type] || config.type,
    showZoomInfo: config.showZoomInfo,
    enableGeolocation: config.geolocation,
  })
}

export default Navigation;
