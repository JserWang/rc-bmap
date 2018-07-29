import { getSize } from '../_base/util';
import CONTROL_ANCHOR from '../../constants/ControlAnchor';
import LENGTH_UNIT from '../../constants/LengthUnit';
import ReactComponent from '../ReactComponent';

const top = window || global;

@ReactComponent
class Scale {
  constructor(props) {
    const {
      anchor = CONTROL_ANCHOR.TOP_LEFT,
      offset = {
        width: 81,
        height: 18,
      },
      unit = LENGTH_UNIT.METRIC,
    } = props;

    const opts = {
      anchor: top[anchor],
      offset: getSize(offset.width, offset.height),
    };

    this.instance = new top.BMap.ScaleControl(opts);
    this.instance.setUnit(top[unit]);
  }

  destroy = () => {
    this.map.removeControl(this.instance);
  }
}

export default Scale;
