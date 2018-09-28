import React from 'react';
import { getCustomOverlay, BMapUtil, Util } from '../../core';
import BaseOverlay from './BaseOverlay';
import MAP_PANE from '../../constants/MapPane';

const CustomHOC = WrappedComponent => class extends BaseOverlay {
  config = {}

  overlay = null

  componentDidMount() {
    const { context } = this;
    const { children, ...resetProps } = this.props;
    this.config = { ...this.config, ...resetProps };
    this.mapInstance = context.getMapInstance();
    this.overlay = getCustomOverlay(this.config, this.initialize, this.draw, this.mapInstance);
  }

  componentDidUpdate() {
    const { children, ...resetProps } = this.props;
    this.overlay.repaint(resetProps);
  }

  componentWillUnmount() {
    this.overlay.destroy();
  }

  getContainer = (ref) => {
    this.container = ref;
  }

  initialize = () => {
    const { container, mapInstance } = this;
    mapInstance.getPanes()[MAP_PANE.MARKER].appendChild(container);
    return container;
  }

  draw = () => {
    const { container, props, mapInstance } = this;
    const { point } = props;
    const BPoint = this.getUsablePoint(point);
    const position = mapInstance.pointToOverlayPixel(BPoint);
    container.style.left = `${position.x - (container.offsetWidth / 2)}px`;
    container.style.top = `${position.y - (container.offsetHeight / 2)}px`;
  }

  getUsablePoint = (point) => {
    if (Util.isNil(point)) {
      throw Error('Missing property `point`');
    }
    if (!Util.isString(point)) {
      if (!BMapUtil.isPoint(point)) {
        throw Error('The `point` property should be `string` or literal value `{ lng, lat }`');
      } else if (!BMapUtil.isBPoint(point)) {
        point = BMapUtil.BPoint(point.lng, point.lat);
      }
    }

    return point;
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
