import Map from './Map';
import BMapUtil from './utils/map';
import Util from './utils';
import initCustomControl from './Control/Custom';
import CityList from './Control/CityList';
import Copyright from './Control/Copyright';
import Navigation from './Control/Navigation';
import MapType from './Control/MapType';
import Scale from './Control/Scale';
import Panorama from './Control/Panorama';
import OverviewMap from './Control/OverviewMap';
import Geolocation from './Control/Geolocation';
import initCustomOverlay from './Overlay/Custom';
import Marker from './Overlay/Marker';
import InfoWindow from './Overlay/InfoWindow';
import Circle from './Overlay/Circle';
import Polygon from './Overlay/Polygon';
import Polyline from './Overlay/Polyline';
import Label from './Overlay/Label';
import GroundOverlay from './Overlay/GroundOverlay';
import PointCollection from './Overlay/PointCollection';
import Icon from './Overlay/Icon';
import IconSequence from './Overlay/IconSequence';
import Symbol from './Overlay/Symbol';
import AutoComplete from './AutoComplete';
import Constants from './constants';
import TileLayer from './Layer/TileLayer';
import TrafficLayer from './Layer/TrafficLayer';
import DistanceTool from './Library/DistanceTool';
import HeatMap from './Library/HeatMap';

export {
  BMapUtil,
  Util,
  initCustomControl,
  CityList,
  Copyright,
  Navigation,
  MapType,
  Scale,
  Panorama,
  OverviewMap,
  Geolocation,
  initCustomOverlay,
  Marker,
  Circle,
  Polygon,
  Label,
  InfoWindow,
  Polyline,
  Constants,
  AutoComplete,
  GroundOverlay,
  PointCollection,
  Icon,
  IconSequence,
  Symbol,
  TileLayer,
  TrafficLayer,
  DistanceTool,
  HeatMap,
};

const addBMapScript = (ak, version = 3) => {
  if (!global.BMap && !global.mapLoader) {
    global.mapLoader = new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = `https://api.map.baidu.com/api?v=${version}.0&ak=${ak}&callback=initBMapCallBack`;
      document.head.appendChild(script);
      global.initBMapCallBack = () => {
        resolve(global.BMap);
        document.head.removeChild(script);
        delete global.mapLoader;
        delete global.initBMapCallBack;
      };
    });
  }
  return global.mapLoader;
};

const initMap = async (container, config) => {
  await addBMapScript(config.ak, config.version);
  return new Map(container, config);
};

export default initMap;
