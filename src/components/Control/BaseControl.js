
import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class BaseControl extends PureComponent {
  static contextTypes = {
    getMapInstance: PropTypes.func,
  }

  static childContextTypes = {
    centralizedUpdates: PropTypes.func,
  }

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
    this.init();
  }

  componentDidUpdate() {
    const { children, ...resetProps } = this.props;
    this.config = { ...this.config, ...resetProps };
    this.instance.repaint(this.config);
  }

  componentWillUnmount() {
    this.instance.destroy();
  }

  centralizedUpdates = (unit) => {
    if (unit.displayName === 'Offset') {
      this.config.offset = unit.props;
    } else if (unit.displayName === 'Events') {
      this.config.events = unit.props;
    } else if (unit.displayName === 'Icon') {
      this.config.icon = unit.instance;
    }
  }

  render() {
    const { children } = this.props;
    return children || null;
  }
}

export default BaseControl;
