import BaseControl from './BaseControl';
import { getSize, bindEvents, createIcon } from '../_base/util';
import ANCHOR from '../../constants/ControlAnchor';
import ReactComponent from '../ReactComponent';

@ReactComponent
class Geolocation extends BaseControl {
  init() {
    const {
      anchor = ANCHOR.BOTTOM_LEFT,
      offset = {
        width: 0,
        height: 0,
      },
      showAddressBar = true,
      autoLocation = false,
      locationIcon,
      events,
    } = this.props;

    
    const opts = {
      anchor: global[anchor],
      offset: getSize(offset.width, offset.height),
      showAddressBar,
      enableAutoLocation: autoLocation,
    };

    if (locationIcon) {
      opts.locationIcon = createIcon(locationIcon);
    }

    this.instance = new global.BMap.GeolocationControl(opts);
    bindEvents(this.instance, 'GEOLOCATION', events);
    this.map.addControl(this.instance);
  }
}

export default Geolocation;
