import BaseControl from './BaseControl';
import { getSize } from '../_base/util';
import ANCHOR from '../../constants/ControlAnchor';
import TYPE from '../../constants/NavigationType';
import ReactComponent from '../ReactComponent';

@ReactComponent
class Navigation extends BaseControl {
  init() {
    const {
      anchor = ANCHOR.TOP_LEFT,
      offset = {
        width: 10,
        height: 10,
      },
      type = TYPE.LARGE,
      showZoomInfo = true,
      geolocation = false,
    } = this.props;

    const opts = {
      anchor: global[anchor],
      offset: getSize(offset.width, offset.height),
      type: global[type],
      showZoomInfo,
      enableGeolocation: geolocation,
    };

    this.instance = new global.BMap.NavigationControl(opts);
  }
}

export default Navigation;
