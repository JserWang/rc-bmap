import Util from '../utils';
import BMapUtil from '../utils/map';
import OPTIONS from '../options/polygon';
import BaseOverlay from './BaseOverlay';

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

const processPoints = (points = []) => points.map(item => Util.convert2BPoint(item));

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
    if (config.path && Array.isArray(config.path)) {
      config.path = processPoints(config.path);
    }

    Util.processSetOptions(this.instance, OPTIONS.SET, config);
    Util.processBooleanOptions(this.instance, OPTIONS.BOOLEAN, config);
  }
}

export default Polygon;
