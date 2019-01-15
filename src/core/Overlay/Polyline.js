import Util from '../utils';
import BMapUtil from '../utils/map';
import OPTIONS from '../options/polyline';
import BaseOverlay from './BaseOverlay';

const getPolylineOptions = config => ({
  strokeColor: config.strokeColor,
  strokeWeight: config.strokeWeight,
  strokeOpacity: config.strokeOpacity,
  strokeStyle: config.strokeStyle,
  enableMassClear: config.massClear,
  enableEditing: config.editing,
  enableClicking: config.clicking,
  icons: config.icons,
});

const processPoints = (points = []) => points.map(item => Util.convert2BPoint(item));

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
    if (config.path && Array.isArray(config.path)) {
      config.path = processPoints(config.path);
    }

    Util.processSetOptions(this.instance, OPTIONS.SET, config);
    Util.processBooleanOptions(this.instance, OPTIONS.BOOLEAN, config);
  }
}

export default Polyline;
