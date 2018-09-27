import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CityList as BCityList } from '../../core';

class CityList extends PureComponent {
  static contextTypes = {
    getMapInstance: PropTypes.func,
  }

  static childContextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  instance = null

  config = {}

  getChildContext() {
    return {
      centralizedUpdates: this.centralizedUpdates,
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
    } else if (unit.displayName === 'Events') {
      const events = Object.keys(unit.props);
      events.forEach((key) => {
        this.config[key] = unit.props[key];
      });
    }
  }

  init = () => {
    const { context, props } = this;
    const { children, ...resetProps } = props;
    const cityList = new BCityList({ ...this.config, ...resetProps });
    this.instance = cityList.instance;
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

export default CityList;
