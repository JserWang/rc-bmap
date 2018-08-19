
import { render as reactRender } from 'react-dom';

class BaseOverlay {
  constructor(props) {
    this.props = props;
    this.state = {};
    this.map = global.bMapInstance;

    this.init();
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
  }

  setState(param) {
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
