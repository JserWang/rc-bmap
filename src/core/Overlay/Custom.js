import { BMapUtil, Util } from '../utils';

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

  getUsablePoint = (point) => {
    if (Util.isNil(point)) {
      throw Error('Missing property `point`');
    }
    if (!Util.isString(point)) {
      if (!BMapUtil.isPoint(point)) {
        throw Error('The `point` property should be `string` or literal value `{ lng, lat }`');
      } else if (!BMapUtil.isBPoint(point)) {
        point = BMapUtil.BPoint(point.lng, point.lat);
      }
    }

    return point;
  }

  repaint = (config) => {
    const diffConfig = Util.getDiffConfig(this.config, config);
    this.processOptions(diffConfig);
    this.config = { ...this.config, ...diffConfig };
  }

  destroy = () => {
    this.map.removeOverlay(this);
  }
}

// 异步加载时，BMap对象不存在，所以提供获得类方法，确保调用时BMap对象存在。
const getCustomOverlay = (config, initialize, draw, mapInstance) => {
  CustomOverlay.prototype = BMapUtil.BOverlay();
  CustomOverlay.prototype.initialize = initialize;
  CustomOverlay.prototype.draw = draw;

  const overlay = new CustomOverlay(config, mapInstance);
  mapInstance.addOverlay(overlay);

  return overlay;
};

export default getCustomOverlay;
