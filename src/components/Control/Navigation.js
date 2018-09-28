import { Navigation as BNavigation } from '../../core';
import BaseControl from './BaseControl';

class Navigation extends BaseControl {
  getRealControl = () => new BNavigation(this.config, this.mapInstance)
}

export default Navigation;
