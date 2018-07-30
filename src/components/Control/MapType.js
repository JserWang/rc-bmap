import BaseControl from './BaseControl';
import { getSize } from '../_base/util';
import ANCHOR from '../../constants/ControlAnchor';
import TYPE from '../../constants/MapTypeControlType';
import MAP_TYPE from '../../constants/MapType';
import ReactComponent from '../ReactComponent';

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
      return global[item];
    });
    
    const opts = {
      anchor: global[anchor],
      offset: getSize(offset.width, offset.height),
      type: global[type],
      mapTypes: types
    };

    this.instance = new global.BMap.MapTypeControl(opts);
  }
}

export default MapType;
