import { Panorama as BPanorama } from '../../core';
import BaseControl from './BaseControl';

class Panorama extends BaseControl {
  init = () => {
    const panorama = new BPanorama(this.config, this.mapInstance);
    this.instance = panorama.instance;
  }
}

export default Panorama;
