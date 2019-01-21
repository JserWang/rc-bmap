import BaseOverlay from './BaseOverlay';
import { PointCollection as BPointCollection } from '../../core';

class PointCollection extends BaseOverlay {
  getRealOverlay = () => new BPointCollection(this.config, this.mapInstance)
}

export default PointCollection;
