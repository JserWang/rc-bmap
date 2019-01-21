import { GroundOverlay as BGroundOverlay } from '../../core';
import BaseOverlay from './BaseOverlay';

class Ground extends BaseOverlay {
  getRealOverlay = () => new BGroundOverlay(this.config, this.mapInstance)
}

export default Ground;
