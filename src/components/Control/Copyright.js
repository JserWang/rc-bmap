import BaseControl from './BaseControl';
import { getSize } from '../_base/util';
import ANCHOR from '../../constants/ControlAnchor';
import ReactComponent from '../ReactComponent';

@ReactComponent
class Copyright extends BaseControl {
  init() {
    const {
      anchor = ANCHOR.BOTTOM_LEFT,
      offset = {
        width: 0,
        height: 0,
      },
      content,
    } = this.props;

    const opts = {
      anchor: global[anchor],
      offset: getSize(offset.width, offset.height),
    };

    this.instance = new global.BMap.CopyrightControl(opts);
    this.instance.addCopyright({
      id: 1,
      content,
      bounds: global.bMapInstance.getBounds()
    });
  }
}

export default Copyright;
