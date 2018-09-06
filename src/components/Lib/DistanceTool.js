import { bindEvents } from '../_base/util';
import BaseOverlay from '../Overlay/BaseOverlay';
import ReactComponent from '../ReactComponent';

@ReactComponent
class DistanceTool extends BaseOverlay {
  init() {
    const {
      events,
      ...opts
    } = this.props;

    const BDistanceTool = require('bmaplib.new-distancetool');
    this.instance = new BDistanceTool(this.map, opts);
    bindEvents(this.instance, 'DISTANCE_TOOL', events);
  }

  destroy() {
    this.instance.close();
    this.instance = null;
  }
}

export default DistanceTool;
