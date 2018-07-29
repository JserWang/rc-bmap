import { getSize, bindEvents } from '../_base/util';
import ANCHOR from '../../constants/ControlAnchor';
import ReactComponent from '../ReactComponent';
import {} from '../_base/events';

const top = window || global;

@ReactComponent
class OverviewMap {
  constructor(props) {
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
    } = props;

    const opts = {
      anchor: top[anchor],
      offset: getSize(offset.width, offset.height),
      size: getSize(size.width, size.height),
      isOpen,
    };

    this.instance = new top.BMap.OverviewMapControl(opts);
    bindEvents(this.instance, 'OVERVIEW_MAP', events);
  }

  destroy = () => {
    this.map.removeControl(this.instance);
  }
}

export default OverviewMap;
