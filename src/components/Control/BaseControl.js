
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Util } from '../../core';

class BaseControl extends PureComponent {
  static contextTypes = {
    getMapInstance: PropTypes.func,
  }

  static childContextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  control = null

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
    const control = this.getRealControl();
    this.control = control;
    this.instance = control.instance;
  }

  componentDidUpdate() {
    const { children, ...resetProps } = this.props;
    this.config = { ...this.config, ...resetProps };
    this.control.repaint(this.config);
  }

  componentWillUnmount() {
    this.control.destroy();
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

export default BaseControl;
