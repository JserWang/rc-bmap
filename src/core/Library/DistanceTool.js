import Util from '../utils';

const getDistanceToolOptions = config => ({
  followText: config.followText || '单击确定地点，双击结束',
  unit: config.unit,
  lineColor: config.lineColor || 'red',
  lineStroke: config.lineStroke || 2,
  opacity: config.opacity,
  cursor: config.cursor,
  lineStyle: config.lineStyle,
  secIcon: config.secIcon,
  closeIcon: config.closeIcon,
});

class DistanceTool {
  constructor(config, map) {
    this.map = map;
    this.init(config);
  }

  init(config = {}) {
    const options = getDistanceToolOptions(config);
    this.instance = new global.BMapLib.DistanceTool(this.map, options);
    this.processEvents(config.events);
  }

  processEvents = (events) => {
    Util.unbindEvents(this.instance);
    Util.bindEvents(this.instance, events);
  }

  destroy = () => {
    if (this.instance) {
      this.instance.close();
    }
  }
}

export default DistanceTool;
