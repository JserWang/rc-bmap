import { BMapUtil, Util, ControlUtil } from '../utils';

class CustomControl {
  constructor(config, map) {
    this.config = { ...config };
    this.map = map;
    ControlUtil.processCommonOptions(config);
    this.defaultAnchor = config.anchor;
    this.defaultOffset = config.offset;
    ControlUtil.processVisible(this, config.visible);
  }

  config = {}

  processOptions = ({ anchor, offset, visible }) => {
    if (anchor) {
      this.setAnchor(anchor);
    }
    if (offset) {
      this.setOffset(offset);
    }
    if (!Util.isNil(visible)) {
      if (!visible) {
        this.hide();
      } else {
        this.show();
      }
    }
  }

  repaint = (config) => {
    ControlUtil.processCommonOptions(config);
    const diffConfig = Util.getDiffConfig(this.config, config);
    this.processOptions(diffConfig);
    this.config = { ...this.config, ...diffConfig };
  }

  destroy = () => {
    this.map.removeControl(this);
  }
}

// 异步加载时，BMap对象不存在，所以提供获得类方法，确保调用时BMap对象存在。
const getCustomControl = (config, initialize, mapInstance) => {
  CustomControl.prototype = BMapUtil.BControl();
  CustomControl.prototype.initialize = initialize;

  const control = new CustomControl(config, mapInstance);
  mapInstance.addControl(control);

  return control;
};

export default getCustomControl;
