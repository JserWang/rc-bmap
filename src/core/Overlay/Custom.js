import Util from '../utils';
import BMapUtil from '../utils/map';

class CustomOverlay {
  constructor(config, map) {
    this.config = { ...config };
    this.map = map;
    this.processOptions(config);
  }

  config = {}

  processOptions = ({ visible }) => {
    if (!Util.isNil(visible)) {
      if (!visible) {
        this.hide();
      } else {
        this.show();
      }
    }
  }

  repaint = (config) => {
    const diffConfig = Util.compareConfig(this.config, config);
    this.processOptions(diffConfig);
    this.config = { ...this.config, ...diffConfig };
  }

  destroy = () => {
    this.map.removeOverlay(this);
  }
}

// 异步加载时，BMap对象不存在，所以提供获得类方法，确保调用时BMap对象存在。
const initCustomOverlay = (config, initialize, draw, mapInstance) => {
  CustomOverlay.prototype = BMapUtil.BOverlay();
  CustomOverlay.prototype.initialize = initialize;
  CustomOverlay.prototype.draw = draw;

  const overlay = new CustomOverlay(config, mapInstance);
  mapInstance.addOverlay(overlay);

  return overlay;
};

export default initCustomOverlay;
