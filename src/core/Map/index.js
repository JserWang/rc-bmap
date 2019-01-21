/*
 * 百度地图核心类
 *
 */

import Util from '../utils';
import BMapUtil from '../utils/map';

import OPTIONS from '../options/map';

/**
 * 地图初始化配置项所需属性
 */
const getMapOptions = config => ({
  minZoom: config.minZoom,
  maxZoom: config.maxZoom,
  mapType: config.mapType && global[config.mapType],
  enableHighResolution: config.highResolution,
  enableAutoResize: config.autoResize,
  enableMapClick: config.mapClick,
});

/**
 * 处理地图显示中心点
 */
const processCenter = (center) => {
  if (!Util.isNil(center) && !Util.isString(center)) {
    center = Util.convert2BPoint(center, 'center');
  }

  return center;
};

class Map {
  config = {}

  instance = null

  requiredProperty = ['zoom', 'center']

  constructor(container, config) {
    const mapOptions = getMapOptions(config);
    this.instance = BMapUtil.BMap(container, mapOptions);
    this.config.center = processCenter(config.center);
    if (!config.zoom) {
      throw Error('Missing the required property `zoom`');
    }
    this.instance.centerAndZoom(this.config.center, config.zoom);
  }

  /**
   * 设置右键菜单
   */
  processContextMenu = (contextMenu) => {
    if (this.contextMenu) {
      this.instance.removeContextMenu(this.contextMenu);
    }
    this.contextMenu = contextMenu;
    if (contextMenu) {
      this.instance.addContextMenu(contextMenu);
    }
  }

  /**
   * 设置地图类型
   */
  setMapType = (mapType) => {
    if (mapType && global[mapType]) {
      this.instance.setMapType(global[mapType]);
    }
  }

  /**
   * 处理地图相关事件
   * 绑定之前先统一解绑
   */
  processEvents = (events) => {
    Util.unbindEvents(this.instance);
    Util.bindEvents(this.instance, events);
  }

  /**
   * 处理可以通过 setXXX 以及 enable、disableXXX 的方法
   */
  processOptions = (config) => {
    Util.processSetOptions(this.instance, OPTIONS.SET, config);
    Util.processBooleanOptions(this.instance, OPTIONS.BOOLEAN, config);
  }

  /**
   * 重绘
   */
  repaint = (config) => {
    // 先进行一步转换，因为this.config.center为转换后的值，防止diff出现 bad case
    if (config.center) {
      config.center = processCenter(config.center);
    }
    const diffConfig = Util.compareConfig(this.config, config);

    this.processContextMenu(diffConfig.contextMenu);
    this.setMapType(diffConfig.mapType);
    this.processOptions(diffConfig);
    this.config = {
      ...this.config,
      ...diffConfig,
    };
    this.processEvents(this.config.events);
  }
}

export default Map;
