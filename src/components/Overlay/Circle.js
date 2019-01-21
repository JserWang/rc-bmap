import BaseOverlay from './BaseOverlay';
import { Circle as BCircle } from '../../core';

class Circle extends BaseOverlay {
  getRealOverlay = () => new BCircle(this.config, this.mapInstance)
}

export default Circle;
