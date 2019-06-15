import Util from '../utils';

const getMarkerClustererOptions = config => ({
  markers: config.markers,
  gridSize: config.grid,
  maxZoom: config.maxZoom,
  minClusterSize: config.minClusterSize,
  styles: config.styles,
  isAverageCenter: config.isAverageCenter,
});

class MarkerClusterer {
  constructor(config, map) {
    this.map = map;
    this.init(config);
  }

  init(config = {}) {
    const options = getMarkerClustererOptions(config);
    this.instance = new global.BMapLib.MarkerClusterer(this.map, options);
    this.processEvents(config.events);
  }

  processEvents = (events) => {
    Util.unbindEvents(this.instance);
    Util.bindEvents(this.instance, events);
  }

  destroy = () => {
  }
}

export default MarkerClusterer;
