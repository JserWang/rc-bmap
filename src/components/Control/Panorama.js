import BaseControl from './BaseControl';
import { getSize } from '../_base/util';
import ANCHOR from '../../constants/ControlAnchor';
import ReactComponent from '../ReactComponent';

@ReactComponent
class Panorama extends BaseControl{
  init() {
    const {
      anchor = ANCHOR.TOP_RIGHT,
      offset = {
        width: 0,
        height: 0,
      },
    } = this.props;

    const opts = {
      anchor: global[anchor],
      offset: getSize(offset.width, offset.height),
    };

    this.instance = new global.BMap.PanoramaControl(opts);
    this.map.addControl(this.instance);
  }
}

export default Panorama;
