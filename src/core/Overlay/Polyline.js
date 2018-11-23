import { BMapUtil, Util } from '../utils';
import OPTIONS from '../options/polyline';
import BaseOverlay from './index';

const getPolylineOptions = config => ({
  strokeColor: config.strokeColor,
  strokeWeight: config.strokeWeight,
  strokeOpacity: config.strokeOpacity,
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

const processPoints = (points = []) => points.map(item => getUsablePoint(item));

class Polyline extends BaseOverlay {
  outOfRangeOpts = ['clicking']

  init(config = {}) {
    const options = getPolylineOptions(config);
    const points = processPoints(config.path);
    this.instance = BMapUtil.BPolyline(points, options);
    this.map.addOverlay(this.instance);
    this.processOptions(config);
  }

  processOptions(config) {
    const { path } = config;
    if (path && Array.isArray(path)) {
      config.path = processPoints(config.path);
    }

    BMapUtil.processSetOptions(this.instance, OPTIONS.SET, config);
    BMapUtil.processBooleanOptions(this.instance, OPTIONS.BOOLEAN, config);
  }
}

export default Polyline;
