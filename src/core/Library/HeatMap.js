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
    if (config.data) {
      this.instance.setDataSet({
        max: config.max,
        data: config.data,
      });
    }
  }

  repaint = (config) => {
    if (this.instance) {
      const options = getHeatMapOptions(config);
      this.instance.setOptions(options);
      if (config.data) {
        this.instance.setDataSet({
          max: config.max,
          data: config.data,
        });
      }
    }
  }

  setData = () => {

  }

  destroy = () => {
    if (this.instance) {
      this.map.removeOverlay(this.instance);
    }
  }
}

export default HeatMap;
