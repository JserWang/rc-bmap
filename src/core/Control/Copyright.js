import { BMapUtil } from '../utils';
import BaseControl from './Base';

class Copyright extends BaseControl {
  constructor(config, copyrights, map) {
    super(config, map);
    this.init(config, copyrights);
  }

  instance = null

  init = (config, copyrights) => {
    this.instance = BMapUtil.BCopyrightControl(config);
    copyrights.forEach((item) => {
      this.instance.addCopyright(item);
    });

    this.map.addControl(this.instance);
  }
}

export default Copyright;
