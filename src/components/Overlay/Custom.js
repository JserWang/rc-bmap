import React from 'react';
import { initCustomOverlay, Util, Constants } from '../../core';
import BaseOverlay from './BaseOverlay';

const { MAP_PANES } = Constants;

// fix: #106 the custom overlay's container position should be absolute
const containerStyle = {
  position: 'absolute',
};

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
    const { point, offset = { width: 0, height: 0 } } = this.config;
    const bdPoint = Util.convert2BPoint({ ...point });
    // 当地图scroll时，container的高度为0 宽度为0，导致计算出现错误，所以存储上次有效宽高
    this.lastWidth = container.offsetWidth > 0 ? container.offsetWidth : this.lastWidth;
    this.lastHeight = container.offsetHeight > 0 ? container.offsetHeight : this.lastHeight;

    const position = mapInstance.pointToOverlayPixel(bdPoint);
    container.style.left = `${position.x - this.lastWidth / 2 + offset.width / 2}px`;
    container.style.top = `${position.y - this.lastHeight / 2 + offset.height / 2}px`;
  }

  render() {
    const { context } = this;
    const { children } = this.props;
    return (
      <div>
        <div ref={this.getContainer} style={containerStyle}>
          <WrappedComponent
            map={context.getMapInstance()}
            {...this.props}
          />
          { children }
        </div>
      </div>
    );
  }
};

export default CustomHOC;
