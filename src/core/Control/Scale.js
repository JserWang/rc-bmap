import { BMapUtil } from '../utils';
import BaseControl from './Base';

class Scale extends BaseControl {
  constructor(config, map) {
    super(config, map);
    this.init(config);
  }

  instance = null

  init = (config) => {
    this.instance = BMapUtil.BScaleControl(config);
    this.processUnit(config.unit);
    this.map.addControl(this.instance);
  }

  processUnit = (unit) => {
    if (unit) {
      unit = global[unit] || unit;
      this.instance.setUnit(unit);
    }
  }
}

export default Scale;
