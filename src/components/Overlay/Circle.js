import BaseOverlay from './BaseOverlay';
import { getPoint, bindEvents } from '../_base/util';
import ReactComponent from '../ReactComponent';

@ReactComponent
class Circle extends BaseOverlay {
  init() {
    const {
      point,
      radius,
      strokeColor,
      fillColor,
      strokeWeight,
      strokeOpacity,
      fillOpacity,
      strokeStyle,
      massClear = true,
      editing = false,
      clicking = true,
      events,
    } = this.props;

    const opts = {
      strokeColor,
      fillColor,
      strokeWeight,
      strokeOpacity,
      fillOpacity,
      strokeStyle,
      enableEditing: editing,
      enableClicking: clicking,
      enableMassClear: massClear,
    };

    this.instance = new global.BMap.Circle(getPoint(point.lng, point.lat), radius, opts);

    bindEvents(this.instance, 'CIRCLE', events);
  }
}

export default Circle;
