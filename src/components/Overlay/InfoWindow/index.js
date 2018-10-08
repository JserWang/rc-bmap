import BaseOverlay from '../BaseOverlay';
import { InfoWindow as BInfoWindow } from '../../../core';
import Content from './Content';
import Title from './Title';
import MaxContent from './MaxContent';

class InfoWindow extends BaseOverlay {
  static Content = Content;

  static Title = Title;

  static MaxContent = MaxContent;

  getRealOverlay = () => new BInfoWindow(this.config, this.mapInstance);
}

export default InfoWindow;
