import Map from './Map';
import { BMapUtil, Util } from './utils';
import getCustomControl from './Control';
import CityList from './Control/CityList';
import Copyright from './Control/Copyright';

export {
  BMapUtil,
  Util,
  getCustomControl,
  CityList,
  Copyright,
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
