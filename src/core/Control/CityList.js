import { BMapUtil } from '../utils';
import BaseControl from './index';

const processEvents = (config) => {
  const events = config.events || {};
  const keys = Object.keys(events);

  keys.forEach((key) => {
    config[key] = events[key];
  });
};

class CityList extends BaseControl {
  init(config = {}) {
    processEvents(config);
    this.instance = BMapUtil.BCityListControl(config);
    this.map.addControl(this.instance);
  }
}

export default CityList;
