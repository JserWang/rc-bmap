import { BMapUtil } from '../utils';
import BaseControl from './Base';

class CityList extends BaseControl {
  constructor(config, map) {
    super(map);
    this.init(config);
  }

  instance = null

  init = (config) => {
    this.processCommonOptions(config);
    this.instance = BMapUtil.BCityList(config);
    this.map.addControl(this.instance);
  }
}

export default CityList;
