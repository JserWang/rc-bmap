import React from 'react';
import { getCustomControl } from '../../core';
import BaseControl from './BaseControl';

const CustomHOC = WrappedComponent => class extends BaseControl {
  config = {}

  control = null

  componentDidMount() {
    const { context } = this;
    const { children, ...resetProps } = this.props;
    this.config = { ...this.config, ...resetProps };
    this.mapInstance = context.getMapInstance();
    this.control = getCustomControl(this.config, this.initialize, this.mapInstance);
  }

  componentDidUpdate() {
    const { children, ...resetProps } = this.props;
    this.control.repaint(resetProps);
  }

  componentWillUnmount() {
    this.control.destroy();
  }

  getContainer = (ref) => {
    this.mapContainer = ref;
  }

  initialize = () => {
    const { mapContainer, mapInstance } = this;
    mapInstance.getContainer().appendChild(mapContainer);
    return mapContainer;
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
