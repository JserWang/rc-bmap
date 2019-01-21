import Util from '../utils';

class BaseOverlay {
  config = {}

  outOfRangeOpts = []

  constructor(config, map) {
    this.map = map;
    this.config = { ...config };
    this.init(config);
    this.processEvents(config.events);
  }

  hasOutOfRangeOpts = (opts = []) => opts.some(item => this.outOfRangeOpts.indexOf(item) > -1)

  processEvents = (events) => {
    Util.unbindEvents(this.instance);
    Util.bindEvents(this.instance, events);
  }

  repaint = (config) => {
    const diffConfig = Util.compareConfig(this.config, config) || {};

    if (this.hasOutOfRangeOpts(Object.keys(diffConfig))) {
      this.destroy();
      this.init({ ...this.config, ...diffConfig });
    } else {
      this.processOptions(diffConfig);
    }
    this.config = { ...this.config, ...diffConfig };
    this.processEvents(this.config.events);
  }

  destroy = () => {
    this.map.removeOverlay(this.instance);
  }
}

export default BaseOverlay;
