import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// TODO: chagne it to rc-bmap-core
import initMap, { Util } from '../../core';

const fillStyle = {
  width: '100%',
  height: '100%',
};


export default class Map extends PureComponent {
  static propTypes = {
    ak: PropTypes.string,
    name: PropTypes.string,
    version: PropTypes.number,
    minZoom: PropTypes.number,
    maxZoom: PropTypes.number,
    defaultCursor: PropTypes.string,
    draggingCursor: PropTypes.string,
    mapStyle: PropTypes.object,
    center: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    mapType: PropTypes.string,
    zoom: PropTypes.number,
    highResolution: PropTypes.bool,
    autoResize: PropTypes.bool,
    mapClick: PropTypes.bool,
    mounted: PropTypes.func,
    dragging: PropTypes.bool,
    scrollWheelZoom: PropTypes.bool,
    doubleClickZoom: PropTypes.bool,
    keyboard: PropTypes.bool,
    inertialDragging: PropTypes.bool,
    continuousZoom: PropTypes.bool,
    pinchToZoom: PropTypes.bool,
  };

  static childContextTypes = {
    getMapInstance: PropTypes.func,
    centralizedUpdates: PropTypes.func,
    renderPlaceHolder: PropTypes.func,
  }

  state = {
    placeHolder: {},
  }

  config = {}

  getChildContext() {
    return {
      getMapInstance: this.getMapInstance,
      centralizedUpdates: this.centralizedUpdates,
      renderPlaceHolder: this.renderPlaceHolder,
    };
  }

  componentDidMount() {
    const { children, ...resetProps } = this.props;
    this.config = resetProps;
    this.createMapInstance(resetProps);
  }

  componentDidUpdate() {
    const { children, ...resetProps } = this.props;
    this.config = { ...this.config, ...resetProps };
    this.repaintMapInstance();
  }

  centralizedUpdates = (unit) => {
    const { displayName, instance, props } = unit;
    this.combineContentConfig(
      displayName,
      instance || props,
    );
  }

  combineContentConfig = (displayName, instance) => {
    const { config } = this;
    const propsName = Util.firstLowerCase(displayName);
    config[propsName] = instance;
  }

  createMapInstance = async (config) => {
    const { mounted, name } = this.props;
    const container = this.mapContainer;
    this.map = await initMap(container, config);
    const mapInstance = this.map.instance;

    if (name) {
      global[`${name}`] = mapInstance;
    }

    this.forceUpdate(() => {
      if (mounted) {
        mounted(mapInstance);
      }
    });
  }

  getMapContainer = (ref) => {
    this.mapContainer = ref;
  }

  getMapInstance = () => this.map.instance

  repaintMapInstance = () => {
    const { config, map } = this;
    if (map) {
      map.repaint(config);
    }
  }

  renderPlaceHolder = (placeHolder) => {
    this.setState({
      placeHolder,
    });
  }

  renderChildren = () => {
    const { children } = this.props;
    if (!this.map || !children) {
      return null;
    }
    return children;
  }

  render() {
    const { placeHolder } = this.state;
    return (
      <div style={fillStyle}>
        <div ref={this.getMapContainer} style={fillStyle}>
          { placeHolder.render ? placeHolder.render() : null}
        </div>
        { this.renderChildren() }
      </div>
    );
  }
}
