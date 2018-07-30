import BaseControl from './BaseControl';
import { getSize } from '../_base/util';
import ANCHOR from '../../constants/ControlAnchor';
import TYPE from '../../constants/NavigationType';
import ReactComponent from '../ReactComponent';

const top = window || global;

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
      enableGeolocation = false,
    } = this.props;

    const opts = {
      anchor: top[anchor],
      offset: getSize(offset.width, offset.height),
      type: top[type],
      showZoomInfo,
      enableGeolocation,
    };

    this.instance = new top.BMap.NavigationControl(opts);
  }
}

export default Navigation;
