
import { render as reactRender } from 'react-dom';
const top = window || global;

class BaseControl {
  constructor(props) {
    this.props = props;
    this.state = {};
    this.map = top.bMapInstance;

    this.init();
    this.map.addControl(this.instance);
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
    this.destroy();
    this.init();
    this.map.addControl(this.instance);
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
    this.map.removeControl(this.instance);
    this.instance = null;
  }
}

export default BaseControl;
