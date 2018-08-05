import React from 'react';
import PropTypes from 'prop-types';
import { MAP_BOOLEAN_OPTIONS } from '../_base/options';
import { replaceInitialToUpper, getPoint, isPoint, bindEvents, processSetOptions, createContextMenu } from '../_base/util';

const fillStyle = {
  width: '100%',
  height: '100%'
};

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
    const { highResolution, autoResize, mapClick, mapMounted, contextMenu, ...resetProps } = this.props;
    this.mapContainer = this.mapContainer || this.mapContainerRef.current;
    const map = this.map = new BMap.Map(this.mapContainer, {
      enableHighResolution: highResolution,
      enableAutoResize: autoResize,
      enableMapClick: mapClick,
    });
    
    this.processContextMenu(contextMenu);

    global.bMapInstance = map;
    this.processMapOptions(resetProps);
    bindEvents(map, 'MAP', this.props.events);
    
    // 地图配置完成后，强制刷新，渲染子组件
    this.forceUpdate(() => {
      if (mapMounted) {
        mapMounted(global.bMapInstance);
      }
    });
  }

  processContextMenu = (contextMenu) => {
    if (contextMenu) {
      const menu = createContextMenu(contextMenu.items, contextMenu.events);
      this.map.addContextMenu(menu);
    }
  }

  processMapOptions = (props) => {
    const { map } = this;
    processSetOptions(map, 'MAP_SET_OPTIONS', props);

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
      map.setMapType(global[props.mapType]);
    }
  }

  getMapScript = () => {
    const { ak } = this.props;
    global.BMap = global.BMap || {};
    if (Object.keys(global.BMap).length === 0) {
      global.BMap._preloader = new Promise((resolve, reject) => {
        global._initBaiduMap = function initBaiduMap() {
          resolve(global.BMap);
          global.document.body.removeChild($script);
          global.BMap._preloader = null;
          global._initBaiduMap = null;
        };

        const $script = document.createElement('script');
        global.document.body.appendChild($script);
        $script.src = `https://api.map.baidu.com/api?v=3.0&ak=${ak}&callback=_initBaiduMap`;
      });

      return global.BMap._preloader;
    } else if (!global.BMap._preloader) {
      return Promise.resolve(global.BMap);
    }
    return global.BMap._preloader;
  }

  componentDidMount() {
    const { ak } = this.props;
    if (ak) {
      this.getMapScript().then(this.init);
    } else if (global.BMap) {
      this.init(global.BMap);
    } else {
      console.warn('BMap is undefined');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.map) {
      const props = this.processProps(nextProps);
      this.processMapOptions(props);
      this.processContextMenu(props.contextMenu);
      bindEvents(this.map, 'MAP', this.props.events);  
    }
  }

  processProps(nextProps) {
    let props = nextProps;
    if (JSON.stringify(nextProps.center) === JSON.stringify(this.props.center)) {
      const {center, ...resetProps} = nextProps;
      props = resetProps;
    }

    if (props.zoom === this.props.zoom) {
      delete props.zoom
    }
    return props;
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
      <div style={fillStyle}>
        <div ref={this.mapContainerRef} style={fillStyle}>
          {placeHolder}
        </div>
        {this.renderChildren()}
      </div>
    );
  }
}
