import { render as reactRender } from 'react-dom';
import BaseOverlay from './BaseOverlay';
import { getPoint } from '../_base/util';
import MAP_PANE from '../../constants/MapPane';

const BOverlay = function Empty() {};
class Overlay extends BaseOverlay {
  init() {
    if (!BOverlay.prototype.initialize) {
      BOverlay.prototype = new global.BMap.Overlay();
      BOverlay.prototype.initialize = this.initialize.bind(this);
      BOverlay.prototype.draw = this.draw.bind(this);
    }

    this.instance = new BOverlay();
    this.map.addOverlay(this.instance);
  }

  initialize() {
    const {
      pane = MAP_PANE.MARKER,
      zIndex,
    } = this.props;
    const container = document.createElement('div');
    this.container = container;

    if (zIndex) {
      container.style.zIndex = zIndex;
    }
    container.style.position = 'absolute';
    if (this.render) {
      reactRender(this.render(), container);
    }
    this.map.getPanes()[pane].appendChild(container);
    return container;
  }

  draw() {
    const { container, props } = this;
    const { point } = props;
    const position = this.map.pointToOverlayPixel(getPoint(point.lng, point.lat));
    container.style.left = `${position.x - (container.offsetWidth / 2)}px`;
    container.style.top = `${position.y - (container.offsetHeight / 2)}px`;
  }
}

export default Overlay;
