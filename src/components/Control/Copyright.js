import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Copyright as BCopyright } from '../../core';

class Copyright extends PureComponent {
  static displayName = 'CopyrightControl'

  static contextTypes = {
    getMapInstance: PropTypes.func,
  }

  static childContextTypes = {
    getId: PropTypes.func,
    centralizedUpdates: PropTypes.func,
    updateCopyright: PropTypes.func,
  }

  id = -1

  copyrights = []

  config = {}

  getChildContext() {
    return {
      centralizedUpdates: this.centralizedUpdates,
      getId: this.getId,
      updateCopyright: this.updateCopyright,
    };
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {
    this.destroy();
    this.init();
  }

  centralizedUpdates = (unit) => {
    if (unit.displayName === 'Offset') {
      this.config.offset = unit.props;
    } else if (unit.displayName === 'Copyright') {
      this.copyrights.push(unit.instance);
    }
  }

  getId = () => {
    this.id += 1;
    return this.id;
  }

  updateCopyright = (id, config) => {
    this.copyrights.splice(id, 1, config);
  }

  init = () => {
    const {
      context, props, copyrights, config,
    } = this;
    const { children, ...resetProps } = props;
    const copyright = new BCopyright({ ...config, ...resetProps }, copyrights);
    this.instance = copyright.instance;
    context.getMapInstance().addControl(this.instance);
  }

  destroy = () => {
    const { context, instance } = this;
    context.getMapInstance().removeControl(instance);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default Copyright;
