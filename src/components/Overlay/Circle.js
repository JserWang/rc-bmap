import BaseOverlay from './BaseOverlay';
import { getPoint, bindEvents, processBooleanOptions } from '../_base/util';
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
      enableClicking: clicking,
    };

    this.instance = new global.BMap.Circle(getPoint(point.lng, point.lat), radius, opts);
    this.map.addOverlay(this.instance);

    const booleanOpts = {
      editing,
      massClear,
    };
    processBooleanOptions(this.instance, 'CIRCLE_BOOLEAN_OPTIONS', booleanOpts);
    bindEvents(this.instance, 'CIRCLE', events);
  }
}

export default Circle;
