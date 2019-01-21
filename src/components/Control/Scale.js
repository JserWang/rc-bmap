import BaseControl from './BaseControl';
import { Scale as BScale } from '../../core';

class Scale extends BaseControl {
  getRealControl = () => new BScale(this.config, this.mapInstance)
}

export default Scale;
