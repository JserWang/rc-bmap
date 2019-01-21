import React from 'react';
import { initCustomOverlay, Util, Constants } from '../../core';
import BaseOverlay from './BaseOverlay';

const { MAP_PANES } = Constants;

const CustomHOC = WrappedComponent => class extends BaseOverlay {
  config = {}

  overlay = null

  componentDidMount() {
    const { context } = this;
    const { children, ...resetProps } = this.props;
    this.config = { ...this.config, ...resetProps };
    this.mapInstance = context.getMapInstance();
    this.overlay = initCustomOverlay(this.config, this.initialize, this.draw, this.mapInstance);
  }

  getContainer = (ref) => {
    this.container = ref;
  }

  initialize = () => {
    const { container, mapInstance } = this;
    mapInstance.getPanes()[MAP_PANES.MARKER].appendChild(container);
    return container;
  }

  draw = () => {
    const { container, mapInstance } = this;
    const { point } = this.config;
    const bdPoint = Util.convert2BPoint({ ...point });
    const position = mapInstance.pointToOverlayPixel(bdPoint);
    container.style.left = `${position.x - (container.offsetWidth / 2)}px`;
    container.style.top = `${position.y - (container.offsetHeight / 2)}px`;
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
