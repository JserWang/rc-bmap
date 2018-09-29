
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Util } from '../../core';

class BaseOverlay extends PureComponent {
  static contextTypes = {
    getMapInstance: PropTypes.func,
  }

  static childContextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  overlay = null

  mapInstance = null

  config = {}

  getChildContext() {
    return {
      centralizedUpdates: this.centralizedUpdates,
    };
  }

  componentDidMount() {
    const { context, props } = this;
    const { children, ...resetProps } = props;
    this.config = { ...this.config, ...resetProps };
    this.mapInstance = context.getMapInstance();
    const overlay = this.getRealOverlay();
    this.overlay = overlay;
    this.instance = overlay.instance;
  }

  componentDidUpdate() {
    const { children, ...resetProps } = this.props;
    this.config = { ...this.config, ...resetProps };
    this.overlay.repaint(this.config);
  }

  componentWillUnmount() {
    this.overlay.destroy();
  }

  centralizedUpdates = (unit) => {
    const { config } = this;
    const { displayName, instance, props } = unit;
    const propsName = Util.firstLowerCase(displayName);
    config[propsName] = instance || props;
  }

  render() {
    const { children } = this.props;
    return children || null;
  }
}

export default BaseOverlay;
