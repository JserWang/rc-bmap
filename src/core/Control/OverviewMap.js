import { BMapUtil } from '../utils';
import BaseControl from './Base';

const getOverviewMapControlOptions = config => ({
  anchor: config.anchor,
  offset: config.offset,
  size: config.size && BMapUtil.BSize(config.size.width, config.size.height),
  isOpen: config.isOpen,
});

class OverviewMap extends BaseControl {
  init(config = {}) {
    const options = getOverviewMapControlOptions(config);
    this.instance = BMapUtil.BOverviewMapControl(options);
    this.map.addControl(this.instance);
    BMapUtil.bindEvents(this.instance, config.events);
  }
}

export default OverviewMap;
