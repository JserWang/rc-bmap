import BaseOverlay from '../BaseOverlay';
import { Polygon as BPolygon } from '../../../core';
import Path from './Path';
import Point from './Point';

class Polygon extends BaseOverlay {
  static Path = Path;

  static Point = Point;

  getRealOverlay = () => new BPolygon(this.config, this.mapInstance);
}

export default Polygon;
