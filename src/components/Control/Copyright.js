import { getSize } from '../_base/util';
import ANCHOR from '../../constants/ControlAnchor';
import ReactComponent from '../ReactComponent';

const top = window || global;

@ReactComponent
class Copyright {
  constructor(props) {
    const {
      anchor = ANCHOR.BOTTOM_LEFT,
      offset = {
        width: 0,
        height: 0,
      },
      content,
    } = props;

    const opts = {
      anchor: top[anchor],
      offset: getSize(offset.width, offset.height),
    };

    this.instance = new top.BMap.CopyrightControl(opts);
    this.instance.addCopyright({
      id: 1,
      content,
      bounds: top.bMapInstance.getBounds()
    })
  }

  destroy = () => {
    this.map.removeControl(this.instance);
  }
}

export default Copyright;
