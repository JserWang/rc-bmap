import { Util, BMapUtil } from './utils';
import OPTIONS from './options/map';

class Map {
  mapInstance=null

  config

  originConfig

  constructor(container, config) {
    this.config = Util.deepClone(config);
    const mapOptions = this.getMapOptions(config);
    this.mapInstance = new global.BMap.Map(container, mapOptions);
    this.setCenterAndZoom(config.center, config.zoom);
  }

  getMapOptions = config => ({
    minZoom: config.minZoom,
    maxZoom: config.maxZoom,
    mapType: global[config.mapType],
    enableHighResolution: config.highResolution,
    enableAutoResize: config.autoResize,
    enableMapClick: config.mapClick,
  })

  setCenterAndZoom = (center, zoom) => {
    center = this.getUsableCenter(center);
    this.mapInstance.centerAndZoom(center, zoom);
  }

  setContextMenu = (contextMenu) => {
    if (this.contextMenu) {
      this.mapInstance.removeContextMenu(this.contextMenu);
    }
    this.contextMenu = contextMenu;
    if (contextMenu) {
      this.mapInstance.addContextMenu(contextMenu);
    }
  }

  setMapType = (mapType) => {
    if (mapType) {
      this.mapInstance.setMapType(global[mapType]);
    }
  }

  processEvents = (events) => {
    BMapUtil.unBindEvents(this.mapInstance);
    BMapUtil.bindEvents(this.mapInstance, events);
  }

  processOptions = () => {
    const { config = {} } = this;
    config.center = this.getUsableCenter(config.center);
    BMapUtil.processSetOptions(this.mapInstance, OPTIONS.SET, config);
    BMapUtil.processBooleanOptions(this.mapInstance, OPTIONS.BOOLEAN, config);
  }

  getUsableCenter = (center) => {
    if (Util.isNil(center)) {
      throw Error('Missing property `center`');
    }
    if (!Util.isString(center)) {
      if (!BMapUtil.isPoint(center)) {
        throw Error('The `center` property should be `string` or literal value `{ lng, lat }`');
      } else if (!BMapUtil.isBPoint(center)) {
        center = BMapUtil.BPoint(center.lng, center.lat);
      }
    }

    return center;
  }

  repaint = (config) => {
    this.config = config;
    this.render();
  }

  render = () => {
    const { config = {} } = this;
    this.setContextMenu(config.contextMenu);
    this.processEvents(config.events);
    this.processOptions();
  }
}

export default Map;
