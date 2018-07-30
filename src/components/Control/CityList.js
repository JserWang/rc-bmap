import BaseControl from './BaseControl';
import { getSize } from '../_base/util';
import ANCHOR from '../../constants/ControlAnchor';
import ReactComponent from '../ReactComponent';

const top = window || global;

@ReactComponent
class CityList extends BaseControl {
  init() {
    const {
      anchor = ANCHOR.TOP_LEFT,
      offset = {
        width: 0,
        height: 0,
      },
      onChangeBefore,
      onChangeAfter,
    } = this.props;

    const opts = {
      anchor: top[anchor],
      offset: getSize(offset.width, offset.height),
      onChangeBefore,
      onChangeAfter,
    };

    this.instance = new top.BMap.CityListControl(opts);
  }
}

export default CityList;
