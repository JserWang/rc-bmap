import BaseOverlay from './BaseOverlay';
import { getPoint, bindEvents } from '../_base/util';
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
      icons,
      events,
    } = this.props;

    const opts = {
      strokeColor,
      strokeWeight,
      strokeOpacity,
      strokeStyle,
      enableEditing: editing,
      enableClicking: clicking,
      enableMassClear: massClear,
      // TODO: 补全icons实现
      icons,
    };

    let pList = points.map((item) => {
      return getPoint(item.lng, item.lat);
    });
    
    this.instance = new global.BMap.Polyline(pList, opts);

    bindEvents(this.instance, 'POLYLINE', events);
  }
}

export default Polyline;
