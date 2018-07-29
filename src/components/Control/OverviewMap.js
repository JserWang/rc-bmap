import { getSize } from '../_base/util';
import ANCHOR from '../../constants/ControlAnchor';
import ReactComponent from '../ReactComponent';

const top = window || global;

@ReactComponent
class OverviewMap {
  constructor(props) {
    const {
      anchor = ANCHOR.BOTTOM_RIGHT,
      offset = {
        width: 0,
        height: 0,
      },
      size = {
        width: 150,
        height: 150,
      },
      isOpen = false,
    } = props;

    const opts = {
      anchor: top[anchor],
      offset: getSize(offset.width, offset.height),
      size: getSize(size.width, size.height),
      isOpen,
    };

    this.instance = new top.BMap.OverviewMapControl(opts);
  }

  destroy = () => {
    this.map.removeControl(this.instance);
  }
}

export default OverviewMap;
