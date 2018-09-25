import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// TODO: chagne it to rc-bmap-core
import initMap from '../../core';

const fillStyle = {
  width: '100%',
  height: '100%',
};

const firstLowerCase = str => str.replace(/^\S/, s => s.toLowerCase());

export default class Map extends PureComponent {
  static defaultProps = {
    placeHolder: '地图加载中...',
    // 与官方文档保持一致
    dragging: true,
    scrollWheelZoom: false,
    doubleClickZoom: true,
    keyboard: false,
    inertialDragging: false,
    continuousZoom: true,
    pinchToZoom: true,
    autoResize: true,
    highResolution: true,
    mapClick: true,
    center: { lng: 116.404, lat: 39.915 },
    zoom: 15,
    name: 'bMapInstance',
  };

  static propTypes = {
    placeHolder: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    children: PropTypes.any,
    ak: PropTypes.string,
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
    mapMounted: PropTypes.func,
    dragging: PropTypes.bool,
    scrollWheelZoom: PropTypes.bool,
    doubleClickZoom: PropTypes.bool,
    keyboard: PropTypes.bool,
    inertialDragging: PropTypes.bool,
    continuousZoom: PropTypes.bool,
    pinchToZoom: PropTypes.bool,
    events: PropTypes.object,
    contextMenu: PropTypes.object,
    name: PropTypes.string,
  };

  static childContextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  config = {}

  constructor(props) {
    super(props);
    // React 16
    if (React.createRef) {
      this.mapContainerRef = React.createRef();
    } else {
      this.mapContainerRef = (ref) => {
        this.mapContainer = ref;
      };
    }
  }

  getChildContext() {
    return {
      centralizedUpdates: this.centralizedUpdates,
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
    const propsName = firstLowerCase(displayName);
    config[propsName] = instance;
  }

  createMapInstance = async (config) => {
    const { mapMounted } = this.props;
    const container = this.mapContainer || this.mapContainerRef.current;
    this.map = await initMap(container, config);

    this.forceUpdate(() => {
      if (mapMounted) {
        mapMounted(this.map);
      }
    });
  }

  repaintMapInstance = () => {
    const { config, map } = this;
    if (map) {
      map.repaint(config);
    }
  }

  renderChildren = () => {
    const { children } = this.props;
    if (!this.map || !children) {
      return null;
    }
    return children;
  }

  render() {
    const { placeHolder } = this.props;
    return (
      <div style={fillStyle}>
        <div ref={this.mapContainerRef} style={fillStyle}>
          {placeHolder}
        </div>
        { this.renderChildren() }
      </div>
    );
  }
}
