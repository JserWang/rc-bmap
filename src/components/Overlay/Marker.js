import BaseOverlay from './BaseOverlay';
import { getPoint, getSize, bindEvents } from '../_base/util';
import ReactComponent from '../ReactComponent';

@ReactComponent
class Marker extends BaseOverlay {
  init() {
    const {
      point,
      offset = {
        width: 0,
        height: 0
      },
      icon,
      massClear = true,
      dragging = false,
      clicking = false,
      raiseOnDrag = false,
      draggingCursor,
      rotation,
      shadow,
      title,
      events,
    } = this.props;

    const oPoint = getPoint(point.lng, point.lat);

    const opts = {
      offset: getSize(offset.width, offset.height),
      enableMassClear: massClear,
      enableDragging: dragging,
      enableClicking: clicking,
      raiseOnDrag,
      draggingCursor,
      rotation,
      title,
    }

    if (icon) {
      opts.icon = createIcon(icon);
    }

    if (shadow) {
      opts.shadow = createIcon(shadow);
    }

    this.instance = new top.BMap.Marker(oPoint, opts);
    bindEvents(this.instance, 'MARKER', events);
  }
}

export default Marker;
