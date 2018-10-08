import { BMapUtil, Util } from '../utils';
import OPTIONS from '../options/label';
import BaseOverlay from './index';

const getLabelOptions = config => ({
  offset: config.offset,
  position: config.point,
  enableMassClear: config.massClear,
});

const getUsablePoint = (point) => {
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
};

class Label extends BaseOverlay {
  outOfRangeOpts = []

  init(config = {}) {
    config.point = getUsablePoint(config.point);
    const options = getLabelOptions(config);
    this.instance = BMapUtil.BLabel(config.content, options);
    this.map.addOverlay(this.instance);
    this.processOptions(config);
  }

  processOptions(config) {
    if (config.point) {
      config.position = getUsablePoint(config.point);
    }
    BMapUtil.processSetOptions(this.instance, OPTIONS.SET, config);
    BMapUtil.processBooleanOptions(this.instance, OPTIONS.BOOLEAN, config);
  }
}

export default Label;
