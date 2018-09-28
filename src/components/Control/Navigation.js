import { Navigation as BNavigation } from '../../core';
import BaseControl from './BaseControl';

class Navigation extends BaseControl {
  instance = null

  init = () => {
    const navigation = new BNavigation(this.config, this.mapInstance);
    this.instance = navigation.instance;
  }
}

export default Navigation;
