import BaseOverlay from './BaseOverlay';
import { Marker as BMarker } from '../../core';

class Marker extends BaseOverlay {
  getRealOverlay = () => new BMarker(this.config, this.mapInstance)
}

export default Marker;
