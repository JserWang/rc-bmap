
import { PureComponent } from 'react';
import PropTypes from 'prop-types';

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

export default BaseOverlay;
