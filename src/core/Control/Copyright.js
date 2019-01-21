import BMapUtil from '../utils/map';
import BaseControl from './BaseControl';

class Copyright extends BaseControl {
  init(config = {}) {
    const { copyrights = [] } = config;
    this.instance = BMapUtil.BCopyrightControl(config);
    copyrights.forEach((item) => {
      this.instance.addCopyright(item);
    });
    this.map.addControl(this.instance);
  }
}

export default Copyright;
