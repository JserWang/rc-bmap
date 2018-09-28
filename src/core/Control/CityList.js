import { BMapUtil } from '../utils';
import BaseControl from './Base';

class CityList extends BaseControl {
  constructor(config, map) {
    super(config, map);
    this.init(config);
  }

  instance = null

  init = (config = {}) => {
    this.processEvents(config.events);
    this.instance = BMapUtil.BCityListControl(config);

    this.map.addControl(this.instance);
  }

  processEvents = (config) => {
    const events = config.events || {};
    const keys = Object.keys(events);

    keys.forEach((key) => {
      config[key] = events[key];
    });
  }
}

export default CityList;
