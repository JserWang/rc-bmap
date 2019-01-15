import Util from '../utils';
import BMapUtil from '../utils/map';
import OPTIONS from '../options/ground';
import BaseOverlay from './BaseOverlay';

const getGroundOverlayOptions = config => ({
  opacity: config.opacity,
  imageURL: config.imageURL,
  displayOnMaxLevel: config.displayOnMaxLevel,
  displayOnMinLevel: config.displayOnMinLevel,
});

class GroundOverlay extends BaseOverlay {
  init(config = {}) {
    const bounds = Util.convert2BBounds(config.bounds);
    const options = getGroundOverlayOptions(config);
    this.instance = BMapUtil.BGroundOverlay(bounds, options);
    this.map.addOverlay(this.instance);
    this.processOptions(config);
  }

  processOptions(config) {
    if (config.bounds) {
      config.bounds = Util.convert2BBounds(config.bounds);
    }
    Util.processSetOptions(this.instance, OPTIONS.SET, config);
  }
}

export default GroundOverlay;
