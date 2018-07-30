import { getSize } from '../_base/util';
import CONTROL_ANCHOR from '../../constants/ControlAnchor';
import LENGTH_UNIT from '../../constants/LengthUnit';
import ReactComponent from '../ReactComponent';
import BaseControl from './BaseControl';

const top = window || global;

@ReactComponent
class Scale extends BaseControl {

  init() {
    const {
      anchor = CONTROL_ANCHOR.TOP_LEFT,
      offset = {
        width: 81,
        height: 18,
      },
      unit = LENGTH_UNIT.METRIC,
    } = this.props;

    const opts = {
      anchor: top[anchor],
      offset: getSize(offset.width, offset.height),
    };

    this.instance = new top.BMap.ScaleControl(opts);
    this.instance.setUnit(top[unit]);
    this.map.addControl(this.instance);
  }
}

export default Scale;
