import BaseControl from './BaseControl';
import { getSize, bindEvents } from '../_base/util';
import ANCHOR from '../../constants/ControlAnchor';
import ReactComponent from '../ReactComponent';


const top = window || global;

@ReactComponent
class OverviewMap extends BaseControl {
  init() {
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
      events,
    } = this.props;

    const opts = {
      anchor: top[anchor],
      offset: getSize(offset.width, offset.height),
      size: getSize(size.width, size.height),
      isOpen,
    };

    this.instance = new top.BMap.OverviewMapControl(opts);
    bindEvents(this.instance, 'OVERVIEW_MAP', events);
  }
}

export default OverviewMap;
