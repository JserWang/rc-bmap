import BaseOverlay from './BaseOverlay';
import { createPolygon } from '../_base/util';
import ReactComponent from '../ReactComponent';

@ReactComponent
class Polygon extends BaseOverlay {
  init() {
    this.instance = createPolygon(this.props);
    this.map.addOverlay(this.instance);
  }
}

export default Polygon;
