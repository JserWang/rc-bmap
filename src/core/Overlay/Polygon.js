import { BMapUtil, Util } from '../utils';
import OPTIONS from '../options/polygon';
import BaseOverlay from './index';

const getPolygonOptions = config => ({
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

class Polygon extends BaseOverlay {
  outOfRangeOpts = ['clicking']

  init(config = {}) {
    const options = getPolygonOptions(config);
    const points = processPoints(config.path);
    this.instance = BMapUtil.BPolygon(points, options);
    this.map.addOverlay(this.instance);
    this.processOptions(config);
  }

  processOptions(config) {
    const { points } = config;
    if (points && Array.isArray(points)) {
      config.path = processPoints(config.path);
    }

    BMapUtil.processSetOptions(this.instance, OPTIONS.SET, config);
    BMapUtil.processBooleanOptions(this.instance, OPTIONS.BOOLEAN, config);
  }
}

export default Polygon;
