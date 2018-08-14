import BaseOverlay from './BaseOverlay';
import { bindEvents, getSize, getPoint } from '../_base/util';
import ReactComponent from '../ReactComponent';

@ReactComponent
class InfoWindow extends BaseOverlay {
  init() {
    const {
      point,
      content,
      height,
      width,
      maxWidth,
      offset,
      title,
      autoPan = true,
      closeOnClick = true,
      displayMessage = true,
      message,
      events,
    } = this.props;

    const opts = {
      width,
      height,
      maxWidth,
      offset: offset && getSize(offset.width, offset.height),
      title,
      enableAutoPan: autoPan,
      enableCloseOnClick: closeOnClick,
      enableMessage: displayMessage,
      message,
    };

    this.instance = new global.BMap.InfoWindow(content, opts);
    this.map.openInfoWindow(this.instance, getPoint(point.lng, point.lat));
    bindEvents(this.instance, 'INFO_WINDOW', events);
  }
}

export default InfoWindow;
