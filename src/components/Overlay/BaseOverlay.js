import React, { PureComponent } from 'react';
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
    this.overlay.repaint({ ...this.config });
    // fix: when the custom overlay change the point, overlay need redraw
    if (this.draw) {
      this.draw();
    }
  }

  componentWillUnmount() {
    this.overlay.destroy();
  }

  centralizedUpdates = ({ name, data }) => {
    const configName = Util.firstLowerCase(name);
    this.config[configName] = data;
  }

  render() {
    const { children } = this.props;
    if (children) {
      return <div>{children}</div>;
    }
    return null;
  }
}

export default BaseOverlay;
