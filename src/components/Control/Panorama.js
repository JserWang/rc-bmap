import { Panorama as BPanorama } from '../../core';
import BaseControl from './BaseControl';

class Panorama extends BaseControl {
  getRealControl = () => new BPanorama(this.config, this.mapInstance)
}

export default Panorama;
