import { BMapUtil } from '../utils';
import BaseControl from './index';

class Copyright extends BaseControl {
  init(config = {}, map, copyrights) {
    this.instance = BMapUtil.BCopyrightControl(config);
    copyrights.forEach((item) => {
      this.instance.addCopyright(item);
    });
    map.addControl(this.instance);
  }
}

export default Copyright;
