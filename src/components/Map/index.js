import * as React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { MAP_SET_OPTIONS, MAP_BOOLEAN_OPTIONS } from '../_base/options';
import { replaceInitialToUpper, getPoint, isPoint } from '../_base/util';
import { MAP_EVENTS } from '../_base/events';

const top = window || global;

export default class Map extends React.Component {

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
  };

  static propTypes = {
    placeHolder: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    children: PropTypes.any,
    ak: PropTypes.string,
    placeHolder: PropTypes.any,
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
    renderCallBack: PropTypes.func,
    dragging: PropTypes.bool,
    scrollWheelZoom: PropTypes.bool,
    doubleClickZoom: PropTypes.bool,
    keyboard: PropTypes.bool,
    inertialDragging: PropTypes.bool,
    continuousZoom: PropTypes.bool,
    pinchToZoom: PropTypes.bool,
    events: PropTypes.object,
  };

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

  init = (BMap) => {
    const { highResolution, autoResize, mapClick, renderCallBack, ...resetProps } = this.props;
    this.mapContainer = this.mapContainer || this.mapContainerRef.current;
    const map = this.map = new BMap.Map(this.mapContainer, {
      enableHighResolution: highResolution,
      enableAutoResize: autoResize,
      enableMapClick: mapClick,
    });
    top.bMapInstance = map;
    this.processMapOptions(resetProps);
    this.bindEvents();
    if (renderCallBack) {
      renderCallBack();
    }
  }

  processMapOptions = (props) => {
    const { map } = this;
    MAP_SET_OPTIONS.forEach((key) => {
      if (props[key]) {
        const upKey = replaceInitialToUpper(key);
        map[`set${upKey}`](props[key]);
      }
    });

    MAP_BOOLEAN_OPTIONS.forEach((key) => {
      const upKey = replaceInitialToUpper(key);
      let prefix = 'disable';
      if (props[key]) {
        prefix = 'enable';
      }
      map[`${prefix}${upKey}`]();
    });

    if (props.center) {
      let center = props.center;
      if (isPoint(center)) {
        center = getPoint(center.lng, center.lat);
        map.centerAndZoom(center, props.zoom);
      }
    }

    if (props.mapType) {
      map.setMapType(top[props.mapType]);
    }
  }

  bindEvents = () => {
    const { map } = this;
    const { events } = this.props;
    if (events) {
      MAP_EVENTS.forEach((eventName) => {
        if (events[eventName]) {
          map.addEventListener(eventName, (...args) => {
            events[eventName].apply(null, args);
          });
        }
      });
    }
  }

  getMapScript = () => {
    const { ak } = this.props;
    top.BMap = top.BMap || {};
    if (Object.keys(top.BMap).length === 0) {
      top.BMap._preloader = new Promise((resolve, reject) => {
        top._initBaiduMap = function initBaiduMap() {
          resolve(top.BMap);
          top.document.body.removeChild($script);
          top.BMap._preloader = null;
          top._initBaiduMap = null;
        };

        const $script = document.createElement('script');
        top.document.body.appendChild($script);
        $script.src = `https://api.map.baidu.com/api?v=3.0&ak=${ak}&callback=_initBaiduMap`;
      });

      return top.BMap._preloader;
    } else if (!top.BMap._preloader) {
      return Promise.resolve(top.BMap);
    }
    return top.BMap._preloader;
  }

  componentDidMount() {
    this.getMapScript().then(this.init);
  }

  componentWillReceiveProps(nextProps) {
    this.processMapOptions(nextProps);
  }

  renderChildren = () => {
    const { children } = this.props;
    if (!this.map || !children) {
      return null;
    }

    return React.Children.map(children, (child) => {
      if (child) {
        return React.cloneElement(child);
      }
      return null;
    });
  }

  render() {
    const { placeHolder } = this.props;
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div ref={this.mapContainerRef} className="mapContainer">
          {placeHolder}
        </div>
        {this.renderChildren()}
      </div>
    );
  }
}
