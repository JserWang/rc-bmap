import { BMapUtil } from '../utils';
import BaseControl from './index';

const processUnit = (unit, instance) => {
  if (unit) {
    unit = global[unit] || unit;
    instance.setUnit(unit);
  }
};

class Scale extends BaseControl {
  init(config = {}) {
    this.instance = BMapUtil.BScaleControl(config);
    processUnit(config.unit, this.instance);
    this.map.addControl(this.instance);
  }
}

export default Scale;
