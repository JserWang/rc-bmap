import BaseOverlay from './BaseOverlay';
import { Polygon as BPolygon } from '../../core';

class Polygon extends BaseOverlay {
  getRealOverlay = () => new BPolygon(this.config, this.mapInstance);
}

export default Polygon;
