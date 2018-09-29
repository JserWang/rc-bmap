import { Util, BMapUtil } from '../utils';

class BaseOverlay {
  config = {}

  constructor(config, map) {
    this.map = map;
    this.config = { ...config };
    this.init(config);
    this.processEvents(config.events);
  }

  hasOutOfRangeOpts = (opts = []) => opts.some(item => this.outOfRangeOpts.indexOf(item) > -1)

  processEvents = (events) => {
    BMapUtil.unBindEvents(this.instance);
    if (events) {
      BMapUtil.bindEvents(this.instance, events);
    }
  }

  repaint = (config) => {
    const diffConfig = Util.getDiffConfig(this.config, config) || {};
    if (this.hasOutOfRangeOpts(Object.keys(diffConfig))) {
      this.destroy();
      this.init({ ...this.config, ...diffConfig });
    } else {
      this.processOptions(diffConfig);
    }
    this.config = { ...this.config, ...diffConfig };
  }

  destroy = () => {
    this.map.removeOverlay(this.instance);
  }
}

export default BaseOverlay;
