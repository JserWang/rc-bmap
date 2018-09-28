import { BMapUtil } from '../utils';
import BaseControl from './Base';

class OverviewMap extends BaseControl {
  constructor(config, map) {
    super(config, map);
    this.init(config);
  }

  instance = null

  init = (config = {}) => {
    const options = this.getOverviewMapControlOptions(config);
    this.instance = BMapUtil.BOverviewMapControl(options);
    this.map.addControl(this.instance);
    BMapUtil.bindEvents(this.instance, config.events);
  }

  getOverviewMapControlOptions = config => ({
    anchor: config.anchor,
    offset: config.offset,
    size: config.size && BMapUtil.BSize(config.size.width, config.size.height),
    isOpen: config.isOpen,
  })
}

export default OverviewMap;
