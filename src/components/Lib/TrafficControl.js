import { appendCss } from '../_base/util';
import ReactComponent from '../ReactComponent';
import ControlAnchor from '../../constants/ControlAnchor';
import BaseControl from '../Control/BaseControl';

@ReactComponent
class TrafficControl extends BaseControl {
  constructor(props) {
    appendCss({
      url: 'http://api.map.baidu.com/library/TrafficControl/1.4/src/TrafficControl_min.css',
    });
    super(props);
  }

  init() {
    const {
      anchor = ControlAnchor.BOTTOM_RIGHT,
    } = this.props;

    const BTrafficControl = require('../../libs/TrafficControl.js');
    this.instance = new BTrafficControl({
      showPanel: false,
    });

    this.map.addControl(this.instance);
    this.instance.setAnchor(global[anchor]);
  }
}

export default TrafficControl;
