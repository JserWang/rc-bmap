import BaseControl from './BaseControl';
import { getSize } from '../_base/util';
import ANCHOR from '../../constants/ControlAnchor';
import TYPE from '../../constants/MapTypeControlType';
import MAP_TYPE from '../../constants/MapType';
import ReactComponent from '../ReactComponent';

const top = window || global;

@ReactComponent
class MapType extends BaseControl {
  init() {
    const {
      anchor = ANCHOR.TOP_RIGHT,
      offset = {
        width: 10,
        height: 10,
      },
      type = TYPE.HORIZONTAL,
      mapTypes = [MAP_TYPE.NORMAL, MAP_TYPE.PERSPECTIVE, MAP_TYPE.SATELLITE, MAP_TYPE.HYBRID],
    } = this.props;

    const types = mapTypes.map((item) => {
      return top[item];
    });
    
    const opts = {
      anchor: top[anchor],
      offset: getSize(offset.width, offset.height),
      type: top[type],
      mapTypes: types
    };

    this.instance = new top.BMap.MapTypeControl(opts);
  }
}

export default MapType;
