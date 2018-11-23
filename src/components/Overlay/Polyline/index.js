import BaseOverlay from '../BaseOverlay';
import { Polyline as BPolyline } from '../../../core';
import Path from './Path';
import Point from './Point';

class Polyline extends BaseOverlay {
  static Path = Path;

  static Point = Point;

  getRealOverlay = () => new BPolyline(this.config, this.mapInstance);
}

export default Polyline;
