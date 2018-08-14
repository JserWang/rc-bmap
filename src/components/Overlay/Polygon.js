import BaseOverlay from './BaseOverlay';
import { createPolygon, processBooleanOptions } from '../_base/util';
import ReactComponent from '../ReactComponent';

@ReactComponent
class Polygon extends BaseOverlay {
  init() {
    const {
      massClear = true,
      editing = false,
    } = this.props;
    this.instance = createPolygon(this.props);
    this.map.addOverlay(this.instance);
    processBooleanOptions(this.instance, 'POLY_BOOLEAN_OPTIONS', {
      massClear,
      editing,
    });
  }
}

export default Polygon;
