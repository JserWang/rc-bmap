import Util from '../utils';
import BMapUtil from '../utils/map';
import OPTIONS from '../options/label';
import BaseOverlay from './BaseOverlay';

const getLabelOptions = config => ({
  offset: config.offset,
  position: config.position,
  enableMassClear: config.massClear,
});

class Label extends BaseOverlay {
  outOfRangeOpts = []

  init(config = {}) {
    if (config.position) {
      config.position = Util.convert2BPoint(config.position);
    }
    if (config.offset) {
      config.offset = Util.convert2BSize(config.offset);
    }
    const options = getLabelOptions(config);
    this.instance = BMapUtil.BLabel(config.content, options);
    this.map.addOverlay(this.instance);
    this.processOptions(config);
  }

  processOptions(config) {
    if (config.position) {
      config.position = Util.convert2BPoint(config.position);
    }
    Util.processSetOptions(this.instance, OPTIONS.SET, config);
    Util.processBooleanOptions(this.instance, OPTIONS.BOOLEAN, config);
  }
}

export default Label;
