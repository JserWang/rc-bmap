
import { render as reactRender } from 'react-dom';

class BaseControl {
  constructor(props) {
    this.props = props;
    this.state = {};
    this.map = global.bMapInstance;

    this.init();
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
    this.map.removeControl(this.instance);
    this.instance = null;
  }
}

export default BaseControl;
