import BMapUtil from '../utils/map';

class TrafficLayer {
  constructor(config, map) {
    this.map = map;
    this.init(config);
  }

  init(config = {}) {
    const now = new Date();
    if (!config.weekday) {
      config.weekday = now.getDay();
    }

    if (!config.hour) {
      config.hour = now.getHours();
    }

    this.instance = BMapUtil.BTrafficLayer({
      predictDate: {
        weekday: config.weekday,
        hour: config.hour,
      },
    });

    this.map.addTileLayer(this.instance);
  }

  repaint = (config = {}) => {
    this.destroy();
    this.init(config);
  }

  destroy = () => {
    if (this.instance) {
      this.map.removeTileLayer(this.instance);
    }
  }
}

export default TrafficLayer;
