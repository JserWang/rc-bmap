import BaseOverlay from './BaseOverlay';
import { bindEvents, getBounds } from '../_base/util';
import ReactComponent from '../ReactComponent';

@ReactComponent
class Ground extends BaseOverlay {
  init() {
    const {
      bounds,
      opacity,
      imageURL,
      displayOnMinLevel,
      displayOnMaxLevel,
      events,
    } = this.props;

    const opts = {
      opacity,
      displayOnMinLevel,
      displayOnMaxLevel,
    };

    this.instance = new global.BMap.GroundOverlay(getBounds(bounds), opts);
    this.instance.setImageURL(imageURL);
    bindEvents(this.instance, 'GROUND', events);
  }
}

export default Ground;
