import BMapUtil from '../utils/map';

const getTileLayerOptions = config => ({
  transparentPng: config.transparentPng,
  tileUrlTemplate: config.tileUrlTemplate,
  zIndex: config.zIndex,
});

class TileLayer {
  constructor(config, map) {
    this.map = map;
    this.init(config);
  }

  init(config = {}) {
    const options = getTileLayerOptions(config);
    this.instance = BMapUtil.BTileLayer(options);
    if (config.getTilesUrl) {
      this.instance.getTilesUrl = config.getTilesUrl;
    }
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

export default TileLayer;
