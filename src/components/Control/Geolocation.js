import { getSize, bindEvents, createIcon } from '../_base/util';
import ANCHOR from '../../constants/ControlAnchor';
import ReactComponent from '../ReactComponent';

const top = window || global;

@ReactComponent
class Geolocation {
  constructor(props) {
    const {
      anchor = ANCHOR.BOTTOM_LEFT,
      offset = {
        width: 0,
        height: 0,
      },
      showAddressBar = true,
      enableAutoLocation = false,
      locationIcon,
      events,
    } = props;

    
    const opts = {
      anchor: top[anchor],
      offset: getSize(offset.width, offset.height),
      showAddressBar,
      enableAutoLocation,
    };

    if (locationIcon) {
      opts.locationIcon = createIcon(locationIcon);
    }

    this.instance = new top.BMap.GeolocationControl(opts);
    bindEvents(this.instance, 'GEOLOCATION', events);
  }

  destroy = () => {
    this.map.removeControl(this.instance);
  }
}

export default Geolocation;
