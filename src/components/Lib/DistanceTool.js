import { bindEvents } from '../_base/util';
import BaseOverlay from '../Overlay/BaseOverlay';
import ReactComponent from '../ReactComponent';

@ReactComponent
class DistanceTool extends BaseOverlay {
  init() {
    const {
      events,
      ...opts,
    } = this.props;

    const BDistanceTool = require('../../libs/DistanceTool.js');
    this.instance = new BDistanceTool(this.map, opts);
    bindEvents(this.instance, 'DISTANCE_TOOL', events);
  }
}

export default DistanceTool;
