import Util from '../utils';
import BMapUtil from '../utils/map';
import OPTIONS from '../options/marker';
import BaseOverlay from './BaseOverlay';

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

class Marker extends BaseOverlay {
  outOfRangeOpts = ['clicking', 'raiseOnDrag', 'draggingCursor', 'shadow']

  init(config = {}) {
    const options = getMarkerOptions(config);
    const point = Util.convert2BPoint(config.point);
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

    if (config.point) {
      config.position = Util.convert2BPoint(config.point);
    } else {
      return
    }

    Util.processSetOptions(this.instance, OPTIONS.SET, config);
    Util.processBooleanOptions(this.instance, OPTIONS.BOOLEAN, config);

    if (config.contextMenu) {
      this.setContextMenu(config.contextMenu);
    }
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
