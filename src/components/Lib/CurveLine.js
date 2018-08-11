import BaseOverlay from '../Overlay/BaseOverlay';
import { getPoint, bindEvents } from '../_base/util';
import ReactComponent from '../ReactComponent';
import { default as BCurveLine } from 'bmaplib.curveline';

@ReactComponent
class CurveLine extends BaseOverlay {

  init() {
    const {
      points,
      strokeColor,
      strokeWeight,
      strokeOpacity,
      strokeStyle,
      massClear = true,
      clicking = true,
      editing = false,
      events,
    } = this.props;

    const opts = {
      strokeColor,
      strokeWeight,
      strokeOpacity,
      strokeStyle,
      enableMassClear: massClear,
      enableClicking: clicking,
    };

    let pList = [];

    if (points) {
      pList = points.map((item) => {
        return getPoint(item.lng, item.lat);
      });
    }
    
    this.instance = new BCurveLine(pList, opts);
    this.map.addOverlay(this.instance);

    if (editing) {
      this.instance.enableEditing();
    } else {
      this.instance.disableEditing();
    }

    bindEvents(this.instance, 'POLYLINE', events);
  }

  destroy() {
    this.instance.disableEditing();
    this.map.removeOverlay(this.instance);
    this.instance = null;
  }
}

export default CurveLine;
