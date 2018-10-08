import BaseOverlay from '../BaseOverlay';
import { Label as BLabel } from '../../../core';
import Content from './Content';

class Label extends BaseOverlay {
  static Content = Content;

  getRealOverlay = () => new BLabel(this.config, this.mapInstance)
}

export default Label;
