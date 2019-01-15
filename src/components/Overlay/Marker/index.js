import BaseOverlay from '../BaseOverlay';
import ContextMenu from '../../ContextMenu';
import Icon from './Icon';
import Symbol from '../Symbol';
import { Marker as BMarker } from '../../../core';

class Marker extends BaseOverlay {
  static ContextMenu = ContextMenu;

  static Icon = Icon;

  static Symbol = Symbol;

  getRealOverlay = () => {
    // symbol 覆盖 icon 属性
    if (this.config.symbol) {
      this.config.icon = this.config.symbol;
    }
    return new BMarker(this.config, this.mapInstance);
  }
}

export default Marker;
