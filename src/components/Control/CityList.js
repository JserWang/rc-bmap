import BaseControl from './BaseControl';
import { getSize } from '../_base/util';
import ANCHOR from '../../constants/ControlAnchor';
import ReactComponent from '../ReactComponent';

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
      anchor: global[anchor],
      offset: getSize(offset.width, offset.height),
      onChangeBefore,
      onChangeAfter,
    };

    this.instance = new global.BMap.CityListControl(opts);
  }
}

export default CityList;
