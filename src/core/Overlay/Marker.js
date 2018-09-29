import { BMapUtil, Util } from '../utils';
import OPTIONS from '../options/marker';
import BaseOverlay from './Base';

const getMarkerOptions = config => ({
  offset: config.offset,
  icon: config.icon,
  enableMassClear: config.massClear,
  enableClicking: config.clicking,
  raiseOnDrag: config.raiseOnDrag,
  draggingCursor: config.draggingCursor,
  rotation: config.rotation,
  shadow: config.shadow,
  title: config.title,
});

const getUsablePoint = (point) => {
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
};

class Marker extends BaseOverlay {
  outOfRangeOpts = ['clicking', 'raiseOnDrag', 'draggingCursor', 'shadow']

  init(config = {}) {
    const options = getMarkerOptions(config);
    const point = getUsablePoint(config.point);
    this.instance = BMapUtil.BMarker(point, options);
    this.map.addOverlay(this.instance);
    this.processOptions(config);
    this.setContextMenu(config.contextMenu);
  }

  processOptions(config) {
    const { animation } = config;
    if (animation) {
      config.animation = global[animation] || animation;
    }
    const point = getUsablePoint(config.point);
    config.position = point;

    BMapUtil.processSetOptions(this.instance, OPTIONS.SET, config);
    BMapUtil.processBooleanOptions(this.instance, OPTIONS.BOOLEAN, config);
  }

  setContextMenu(contextMenu) {
    if (this.contextMenu) {
      this.instance.removeContextMenu(this.contextMenu);
    }
    this.contextMenu = contextMenu;
    if (contextMenu) {
      this.instance.addContextMenu(contextMenu);
    }
  }
}

export default Marker;
