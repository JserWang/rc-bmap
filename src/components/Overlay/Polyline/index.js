import IconSequence from './IconSequence';
import BaseOverlay from '../BaseOverlay';
import { Polyline as BPolyline } from '../../../core';

class Polyline extends BaseOverlay {
  static IconSequence = IconSequence;

  getRealOverlay = () => new BPolyline(this.config, this.mapInstance);
}

export default Polyline;
