import { BMapUtil, Util } from '../utils';
import OPTIONS from '../options/marker';

class Marker {
  outOfRangeOpts = ['clicking', 'raiseOnDrag', 'draggingCursor', 'shadow']

  constructor(config, map) {
    this.config = { ...config };
    this.map = map;
    this.init(this.config);
  }

  config = {}

  init = (config = {}) => {
    const options = this.getMarkerOptions(config);
    const point = this.getUsablePoint(config.point);
    this.instance = BMapUtil.BMarker(point, options);
    this.map.addOverlay(this.instance);
    this.processOptions(config);
    this.processEvents(config.events);
    this.setContextMenu(config.contextMenu);
  }

  processEvents = (events) => {
    BMapUtil.unBindEvents(this.instance);
    BMapUtil.bindEvents(this.instance, events);
  }

  processOptions = (config) => {
    BMapUtil.processSetOptions(this.instance, OPTIONS.SET, config);
    BMapUtil.processBooleanOptions(this.instance, OPTIONS.BOOLEAN, config);
  }

  getMarkerOptions = config => ({
    offset: config.offset,
    icon: config.icon,
    enableMassClear: config.massClear,
    enableClicking: config.clicking,
    raiseOnDrag: config.raiseOnDrag,
    draggingCursor: config.draggingCursor,
    rotation: config.rotation,
    shadow: config.shadow,
    title: config.title,
  })

  getUsablePoint = (point) => {
    if (Util.isNil(point)) {
      throw Error('Missing property `point`');
    }
    if (!Util.isString(point)) {
      if (!BMapUtil.isPoint(point)) {
        throw Error('The `point` property should be `string` or literal value `{ lng, lat }`');
      } else if (!BMapUtil.isBPoint(point)) {
        point = BMapUtil.BPoint(point.lng, point.lat);
      }
    }

    return point;
  }

  hasOutOfRangeOpts = (opts = []) => opts.some(item => this.outOfRangeOpts.indexOf(item) > -1)

  setContextMenu = (contextMenu) => {
    if (this.contextMenu) {
      this.instance.removeContextMenu(this.contextMenu);
    }
    this.contextMenu = contextMenu;
    if (contextMenu) {
      this.instance.addContextMenu(contextMenu);
    }
  }

  repaint = (config) => {
    const diffConfig = Util.getDiffConfig(this.config, config) || {};
    if (this.hasOutOfRangeOpts(Object.keys(diffConfig))) {
      this.destroy();
      this.init({ ...this.config, ...diffConfig });
    } else {
      this.processOptions(diffConfig);
    }
    this.config = { ...this.config, ...diffConfig };
  }

  destroy = () => {
    this.map.removeOverlay(this.instance);
  }
}

export default Marker;
