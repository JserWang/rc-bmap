import Util from '../utils';
import BMapUtil from '../utils/map';
import BaseControl from './BaseControl';

const getOverviewMapControlOptions = config => ({
  anchor: config.anchor,
  offset: config.offset,
  size: config.size && BMapUtil.BSize({ ...config.size }),
  isOpen: config.isOpen,
});

class OverviewMap extends BaseControl {
  init(config = {}) {
    const options = getOverviewMapControlOptions(config);
    this.instance = BMapUtil.BOverviewMapControl(options);
    this.map.addControl(this.instance);
    Util.bindEvents(this.instance, config.events);
  }
}

export default OverviewMap;
