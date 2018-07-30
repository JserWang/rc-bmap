import BaseOverlay from './BaseOverlay';
import { getPoint, getSize, bindEvents, createLabel, createIcon, processSetOptions } from '../_base/util';
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
      label,
      zIndex,
      top = false,
      animation,
    } = this.props;

    const oPoint = point && getPoint(point.lng, point.lat);

    const markerOpts = {
      offset: offset && getSize(offset.width, offset.height),
      enableMassClear: massClear,
      enableDragging: dragging,
      enableClicking: clicking,
      raiseOnDrag,
      draggingCursor,
      rotation,
      title,
    }
    
    this.instance = new global.BMap.Marker(oPoint, markerOpts);
    const setOpts = {
      label: label && createLabel(label.props),
      icon: icon && createIcon(icon),
      shadow: shadow && createIcon(shadow),
      zIndex,
      top,
    };

    bindEvents(this.instance, 'MARKER', events);

    processSetOptions(this.instance, 'MARKER_SET_OPTIONS', setOpts);

    // animation 需要在addOverlay之后添加，所以这里将setAnimation放置下个队列
    if (animation) {
      setTimeout(() => {
        this.instance.setAnimation(global[animation]);
      }, 0)
    }
  }
}

export default Marker;
