import Map from './map';

const addBMapScript = (ak) => {
  if (!global.BMap && !global.mapLoader) {
    global.mapLoader = new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = `https://api.map.baidu.com/api?v=3.0&ak=${ak}&callback=initBMapCallBack`;
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
  await addBMapScript(config.ak);
  return new Map(container, config);
};

export default initMap;
