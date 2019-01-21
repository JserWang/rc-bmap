import Util from '../utils';
import BMapUtil from '../utils/map';

class CustomControl {
  constructor(config, map) {
    this.map = map;
    config = { ...config, ...Util.convertControlOptions(config) };
    this.config = { ...config };
    this.defaultAnchor = config.anchor;
    this.defaultOffset = config.offset;
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
    config = { ...config, ...Util.convertControlOptions(config) };
    const diffConfig = Util.compareConfig(this.config, config);
    this.processOptions(diffConfig);
    this.config = { ...this.config, ...diffConfig };
  }

  destroy = () => {
    this.map.removeControl(this);
  }
}

// 异步加载时，BMap对象不存在，所以提供获得类方法，确保调用时BMap对象存在。
const initCustomControl = (config, initialize, mapInstance) => {
  CustomControl.prototype = BMapUtil.BControl();
  CustomControl.prototype.initialize = initialize;

  const control = new CustomControl(config, mapInstance);
  mapInstance.addControl(control);
  Util.processControlVisible(control, config.visible);
  return control;
};

export default initCustomControl;
