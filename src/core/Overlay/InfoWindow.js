import Util from '../utils';
import BMapUtil from '../utils/map';

import OPTIONS from '../options/infoWindow';
import BaseOverlay from './BaseOverlay';

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

class InfoWindow extends BaseOverlay {
  outOfRangeOpts = ['maxWidth', 'offset', 'displayMessage', 'message', 'point']

  init(config = {}) {
    const options = getInfoWindowOptions(config);
    const point = Util.convert2BPoint(config.point);
    this.instance = BMapUtil.BInfoWindow(config.content, options);
    this.processVisible(config.visible, point);
  }

  processOptions(config) {
    const point = config.point || this.config.point;
    config.point = Util.convert2BPoint(point);

    Util.processSetOptions(this.instance, OPTIONS.SET, config);
    Util.processBooleanOptions(this.instance, OPTIONS.BOOLEAN, config);
    this.processVisible(config.visible, config.point);
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
