import { getSize } from '../_base/util';
import ANCHOR from '../../constants/ControlAnchor';
import ReactComponent from '../ReactComponent';

const top = window || global;

@ReactComponent
class Panorama {
  constructor(props) {
    const {
      anchor = ANCHOR.TOP_RIGHT,
      offset = {
        width: 0,
        height: 0,
      },
    } = props;

    const opts = {
      anchor: top[anchor],
      offset: getSize(offset.width, offset.height),
    };

    this.instance = new top.BMap.PanoramaControl(opts);
  }

  destroy = () => {
    this.map.removeControl(this.instance);
  }
}

export default Panorama;
