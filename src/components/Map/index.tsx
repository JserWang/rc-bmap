import * as React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { MAP_SET_OPTIONS, MAP_BOOLEAN_OPTIONS } from '../_base/options';
import { replaceInitialToUpper, getPoint, isPoint } from '../_base/util';
import { MAP_EVENTS } from '../_base/events';

const top: any = window || global;
(top.BMap as Object) = Object.create(null);

export interface IMapProps {
  children?: React.ReactNode;
  ak: string;
  placeHolder?: string | React.ReactNode;
  minZoom?: number;
  maxZoom?: number;
  defaultCursor?: string;
  draggingCursor?: string;
  mapStyle?: any;
  center?: any;
  mapType?: any;
  zoom?: number;
  highResolution?: boolean;
  autoResize?: boolean;
  mapClick?: boolean;
  renderCallBack?: Function;
  dragging?: boolean;
  scrollWheelZoom?: boolean;
  doubleClickZoom?: boolean;
  keyboard?: boolean;
  inertialDragging?: boolean;
  continuousZoom?: boolean;
  pinchToZoom?: boolean;
  events?: any;
}

export default class Map extends React.Component<IMapProps, any> {

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
  };

  map: any;
  mapContainerRef: any;
  mapContainer: HTMLElement;

  constructor(props: any) {
    super(props);

        // React 16
    if (React.createRef) {
      this.mapContainerRef = React.createRef();
    } else {
      this.mapContainerRef = (ref: any) => {
        this.mapContainer = ref;
      };
    }
  }

  init = (BMap: any) => {
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

  processMapOptions = (props: any) => {
    const { map } = this;
    MAP_SET_OPTIONS.forEach((key: string) => {
      if (props[key]) {
        const upKey = replaceInitialToUpper(key);
        map[`set${upKey}`](props[key]);
      }
    });

    MAP_BOOLEAN_OPTIONS.forEach((key: string) => {
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

    MAP_EVENTS.forEach((eventName: string) => {
      if (events[eventName]) {
        map.addEventListener(eventName, (...args: any[]) => {
          events[eventName].apply(null, args);
        });
      }
    });
  }

  getMapScript = () => {
    const { ak } = this.props;
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

  componentWillReceiveProps(nextState: Object, nextProps: Object) {
    this.processMapOptions(nextProps);
  }

  renderChildren = () => {
    const { children } = this.props;
    if (!this.map || !children) {
      return null;
    }
    return React.Children.map(children, (child: any) => {
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
