import { BMapUtil, Util } from '../utils';
import OPTIONS from '../options/infoWindow';
import BaseOverlay from './index';

const getInfoWindowOptions = config => ({
  width: config.width,
  height: config.height,
  maxWidth: config.maxWidth,
  offset: config.offset,
  title: config.title,
  enableAutoPan: config.autoPan,
  enableCloseOnClick: config.closeOnClick,
  enableMessage: config.displayMessage,
  message: config.message,
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

class InfoWindow extends BaseOverlay {
  outOfRangeOpts = ['maxWidth', 'offset', 'displayMessage', 'message', 'point']

  init(config = {}) {
    const options = getInfoWindowOptions(config);
    const point = getUsablePoint(config.point);
    this.instance = BMapUtil.BInfoWindow(config.content, options);
    this.processVisible(config.visible, point);
  }

  processOptions(config) {
    if (!config.point) {
      config.point = this.config.point;
    }
    const point = getUsablePoint(config.point);
    BMapUtil.processSetOptions(this.instance, OPTIONS.SET, config);
    BMapUtil.processBooleanOptions(this.instance, OPTIONS.BOOLEAN, config);
    this.processVisible(config.visible, point);
  }

  processVisible(visible = true, point) {
    if (this.instance.isOpen() && !visible) {
      this.map.closeInfoWindow();
    } else if (!this.instance.isOpen() && visible) {
      this.map.openInfoWindow(this.instance, point);
    }
  }
}

export default InfoWindow;
