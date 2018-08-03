
import { render as reactRender } from 'react-dom';
import { getPoint } from '../_base/util';

class BaseOverlay {
  constructor(props) {
    this.props = props;
    this.state = {};
    this.map = global.bMapInstance;

    this.init();
    setTimeout(() => {
      this.addOverlay();
    }, 0);
  }

  addOverlay() {
    if (this.instance instanceof global.BMap.InfoWindow) {
      const { point } = this.props;
      this.map.openInfoWindow(this.instance, getPoint(point.lng, point.lat));
    } else {
      this.map.addOverlay(this.instance);
    }
  }

  removeOverlay() {
    if (this.instance instanceof global.BMap.InfoWindow) {
      this.map.closeInfoWindow();
    } else {
      this.map.removeOverlay(this.instance);
    }
  }

  onPropsUpdate(newProps) {
    this.props = newProps;
    this.destroy();
    this.init();
    this.addOverlay();
  }

  setState = (param) => {
    if (param !== null) {
      this.state = Object.assign(this.state, param);
    }
    if (this.render) {
      reactRender(this.render(), this.container);
    }
  }

  destroy() {
    this.removeOverlay();
    this.instance = null;
  }
}

export default BaseOverlay;
