import { BMapUtil } from '../utils';
import BaseControl from './Base';

class CityList extends BaseControl {
  constructor(config) {
    super();
    this.init(config);
  }

  instance = null

  init = (config) => {
    this.processCommonOptions(config);
    this.instance = BMapUtil.BCityList(config);
    this.config = config;
  }
}

export default CityList;
