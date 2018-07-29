import { getSize } from '../_base/util';
import ANCHOR from '../../constants/ControlAnchor';
import ReactComponent from '../ReactComponent';

const top = window || global;

@ReactComponent
class CityList {
  constructor(props) {
    const {
      anchor = ANCHOR.TOP_LEFT,
      offset = {
        width: 0,
        height: 0,
      },
      onChangeBefore,
      onChangeAfter,
    } = props;

    const opts = {
      anchor: top[anchor],
      offset: getSize(offset.width, offset.height),
      onChangeBefore,
      onChangeAfter,
    };

    this.instance = new top.BMap.CityListControl(opts);
  }

  destroy = () => {
    this.map.removeControl(this.instance);
  }
}

export default CityList;
