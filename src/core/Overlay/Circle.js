import { BMapUtil, Util } from '../utils';
import OPTIONS from '../options/circle';
import BaseOverlay from './Base';

const getCircleOptions = config => ({
  strokeColor: config.strokeColor,
  fillColor: config.fillColor,
  strokeWeight: config.strokeWeight,
  strokeOpacity: config.strokeOpacity,
  fillOpacity: config.fillOpacity,
  strokeStyle: config.strokeStyle,
  enableMassClear: config.massClear,
  enableEditing: config.editing,
  enableClicking: config.clicking,
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

class Circle extends BaseOverlay {
  outOfRangeOpts = ['clicking']

  init(config = {}) {
    const options = getCircleOptions(config);
    const point = getUsablePoint(config.point);
    this.instance = BMapUtil.BCircle(point, config.radius, options);
    this.map.addOverlay(this.instance);
    this.processOptions(config);
  }

  processOptions(config) {
    const point = getUsablePoint(config.point);
    config.center = point;

    BMapUtil.processSetOptions(this.instance, OPTIONS.SET, config);
    BMapUtil.processBooleanOptions(this.instance, OPTIONS.BOOLEAN, config);
  }
}

export default Circle;
