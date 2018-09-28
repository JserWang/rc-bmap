import BaseControl from './BaseControl';
import { Scale as BScale } from '../../core';

class Scale extends BaseControl {
  instance = null;

  init() {
    const mapType = new BScale(this.config, this.mapInstance);
    this.instance = mapType.instance;
  }
}

export default Scale;
