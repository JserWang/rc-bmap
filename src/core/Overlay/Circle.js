import Util from '../utils';
import BMapUtil from '../utils/map';
import OPTIONS from '../options/circle';
import BaseOverlay from './BaseOverlay';

const getCircleOptions = config => ({
  strokeColor: config.strokeColor,
  fillColor: config.fillColor,
  strokeWeight: config.strokeWeight,
  strokeOpacity: config.strokeOpacity,
  fillOpacity: config.fillOpacity,
  strokeStyle: config.strokeStyle,
  enableMassClear: config.massClear,
  enableClicking: config.clicking,
});

class Circle extends BaseOverlay {
  outOfRangeOpts = ['clicking']

  init(config = {}) {
    const options = getCircleOptions(config);
    const center = Util.convert2BPoint(config.center);
    this.instance = BMapUtil.BCircle(center, config.radius, options);
    this.map.addOverlay(this.instance);
    this.processOptions(config);
  }

  processOptions(config) {
    if (config.center) {
      config.center = Util.convert2BPoint(config.center);
    }
    Util.processSetOptions(this.instance, OPTIONS.SET, config);
    Util.processBooleanOptions(this.instance, OPTIONS.BOOLEAN, config);
  }
}

export default Circle;
