import { render as reactRender } from 'react-dom';
import { getPoint } from '../_base/util';
import Base from '../Base';
import MAP_PANE from '../../constants/MapPane';

class Overlay extends Base {
  constructor(props) {
    super(props);

    const BaseOverlay = function() {}
    BaseOverlay.prototype = new top.BMap.Overlay();
    BaseOverlay.prototype.initialize = this.initialize.bind(this);
    BaseOverlay.prototype.draw = this.draw.bind(this);
    this.instance = new BaseOverlay();
  }

  initialize = () => {
    const {
      pane = MAP_PANE.MARKER,
      zIndex,
    } = this.props;
    const container = this.container = document.createElement('div');
    if (zIndex) {
      container.style.zIndex = zIndex;
    }
    container.style.position = 'absolute';
    reactRender(this.render(), container);
    this.map.getPanes()[pane].appendChild(container);
    return container;
  }

  draw = () => {
    const {
      point,
      size = {
        width: 0,
        height: 0,
      },
    } = this.props;
    const position = this.map.pointToOverlayPixel(getPoint(point.lng, point.lat));
    this.container.style.left = `${position.x - (size.width / 2)}px`;
    this.container.style.top = `${position.y - (size.height / 2)}px`;
  }

  destroy = () => {
    this.map.removeOverlay(this);
  }
}

export default Overlay;
