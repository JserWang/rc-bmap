import { ControlUtil } from '../utils';

class BaseControl {
  instance = null;

  constructor(...params) {
    const [config, map] = [...params];
    this.map = map;
    ControlUtil.processCommonOptions(config);
    this.init(...params);
    ControlUtil.processVisible(this.instance, config.visible);
  }

  repaint = (config) => {
    this.destroy();
    this.init(config);
  }

  destroy = () => {
    this.map.removeControl(this.instance);
  }
}

export default BaseControl;
