
import { render as reactRender } from 'react-dom';

class BaseOverlay {
  constructor(props) {
    this.props = props;
    this.state = {};
    this.map = global.bMapInstance;

    this.init();
    this.map.addOverlay(this.instance);
  }

  onPropsUpdate(newProps) {
    this.props = newProps;
    this.destroy();
    this.init();
    this.map.addOverlay(this.instance);
  }

  setState = (param) => {
    if (param !== null) {
      this.state = Object.assign(this.state, param);
    }
    if (this.render) {
      reactRender(this.render(), this.container);
    }
  }

  destroy = () => {
    this.map.removeOverlay(this.instance);
    this.instance = null;
  }
}

export default BaseOverlay;
