
import { Util, BMapUtil } from '../utils';
import OPTIONS from '../options/map';

class Map {
  instance=null

  config={}

  constructor(container, config) {
    const mapOptions = this.getMapOptions(config);
    this.instance = new global.BMap.Map(container, mapOptions);
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
    this.instance.centerAndZoom(center, zoom);
  }

  setContextMenu = (contextMenu) => {
    if (this.contextMenu) {
      this.instance.removeContextMenu(this.contextMenu);
    }
    this.contextMenu = contextMenu;
    if (contextMenu) {
      this.instance.addContextMenu(contextMenu);
    }
  }

  setMapType = (mapType) => {
    if (mapType) {
      this.instance.setMapType(global[mapType]);
    }
  }

  processEvents = (events) => {
    BMapUtil.unBindEvents(this.instance);
    BMapUtil.bindEvents(this.instance, events);
  }

  processOptions = (config) => {
    BMapUtil.processSetOptions(this.instance, OPTIONS.SET, config);
    BMapUtil.processBooleanOptions(this.instance, OPTIONS.BOOLEAN, config);
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

  processCenter = (config) => {
    const { center: oriCenter } = this.config;
    // BMap's bug: When the values of setCenter and centerAndZoom
    // are both city names and are the same, the map is abnormal.
    if (Util.isString(config.center) && Util.isString(oriCenter) && config.center === oriCenter) {
      delete config.center;
    }

    if (config.center) {
      config.center = this.getUsableCenter(config.center);
    }
  }

  repaint = (config) => {
    this.processCenter(config);
    const diffConfig = Util.getDiffConfig(this.config, config);
    this.render(diffConfig);
    this.config = { ...this.config, ...diffConfig };
  }

  render = (config) => {
    this.setContextMenu(config.contextMenu);
    this.processEvents(config.events);
    this.processCenter(config);
    this.processOptions(config);
  }
}

export default Map;
