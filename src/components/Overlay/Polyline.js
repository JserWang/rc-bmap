import BaseOverlay from './BaseOverlay';
import { getPoint, bindEvents, processBooleanOptions } from '../_base/util';
import ReactComponent from '../ReactComponent';

@ReactComponent
class Polyline extends BaseOverlay {
  init() {
    const {
      points,
      strokeColor,
      strokeWeight,
      strokeOpacity,
      strokeStyle,
      massClear = true,
      editing = false,
      clicking = true,
      events,
      icons = [],
    } = this.props;

    const opts = {
      strokeColor,
      strokeWeight,
      strokeOpacity,
      strokeStyle,
      enableClicking: clicking,
      icons,
    };

    let pList = [];
    if (points) {
      pList = points.map(item => getPoint(item.lng, item.lat));
    }

    this.instance = new global.BMap.Polyline(pList, opts);
    this.map.addOverlay(this.instance);

    const booleanOpts = {
      massClear,
      editing,
    };
    processBooleanOptions(this.instance, 'POLYLINE_BOOLEAN_OPTIONS', booleanOpts);
    bindEvents(this.instance, 'POLYLINE', events);
  }
}

export default Polyline;
