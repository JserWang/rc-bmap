import BaseOverlay from './BaseOverlay';
import { getPoint, bindEvents, processBooleanOptions } from '../_base/util';
import ReactComponent from '../ReactComponent';

@ReactComponent
class Polygon extends BaseOverlay {
  init() {
    const {
      points,
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

    let pList = [];

    if (points) {
      pList = points.map((item) => {
        return getPoint(item.lng, item.lat);
      });
    }
    
    this.instance = new global.BMap.Polygon(pList, opts);
    this.map.addOverlay(this.instance);
    
    const booleanOpts = {
      massClear,
      editing,
    };
    processBooleanOptions(this.instance, 'POLY_BOOLEAN_OPTIONS', booleanOpts);
    bindEvents(this.instance, 'POLYGON', events);
  }
}

export default Polygon;
