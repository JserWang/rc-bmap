import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import getCustomControl from '../../core/Control';

const CustomHOC = WrappedComponent => class extends PureComponent {
  static contextTypes = {
    getMapInstance: PropTypes.func,
  }

  static childContextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  config = {}

  instance = null

  getChildContext() {
    return {
      centralizedUpdates: this.centralizedUpdates,
    };
  }

  componentDidMount() {
    const { context } = this;
    const { children, ...resetProps } = this.props;
    this.config = { ...this.config, ...resetProps };
    this.instance = getCustomControl(this.config, this.initialize);
    context.getMapInstance().addControl(this.instance);
  }

  componentDidUpdate() {
    const { children, ...resetProps } = this.props;
    this.instance.repaint(resetProps);
  }

  componentWillUnmount() {
    const { context } = this;
    context.getMapInstance().removeControl(this.instance);
  }

  getContainer = (ref) => {
    this.mapContainer = ref;
  }

  initialize = () => {
    const { context, mapContainer } = this;
    context.getMapInstance().getContainer().appendChild(mapContainer);
    return mapContainer;
  }

  centralizedUpdates = (unit) => {
    if (unit.displayName === 'Offset') {
      this.config.offset = unit.props;
    }
  }

  render() {
    const { context } = this;
    const { children } = this.props;
    return (
      <div ref={this.getContainer}>
        <WrappedComponent
          map={context.getMapInstance()}
          {...this.props}
        />
        { children }
      </div>
    );
  }
};

export default CustomHOC;
