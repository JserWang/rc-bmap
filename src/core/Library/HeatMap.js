const getHeatMapOptions = config => ({
  radius: config.radius,
  visible: config.visible,
  gradient: config.gradient,
  opacity: config.opacity,
});

class HeatMap {
  constructor(config, map) {
    this.map = map;
    this.init(config);
  }

  init(config = {}) {
    const options = getHeatMapOptions(config);
    this.instance = new global.BMapLib.HeatmapOverlay(options);
    this.map.addOverlay(this.instance);
    this.setData(config);
  }

  repaint = (config) => {
    if (this.instance) {
      const options = getHeatMapOptions(config);
      this.instance.setOptions(options);
      this.setData(config);
    }
  }

  setData = (config) => {
    if (config.data) {
      this.instance.setDataSet({
        max: config.max,
        data: config.data,
      });
    }
  }

  destroy = () => {
    if (this.instance) {
      this.map.removeOverlay(this.instance);
    }
  }
}

export default HeatMap;
