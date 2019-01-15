import Util from '../utils';
import BMapUtil from '../utils/map';

const getSymbolOptions = config => ({
  anchor: config.anchor && Util.convert2BSize(config.anchor),
  fillColor: config.fillColor,
  fillOpacity: config.fillOpacity,
  scale: config.scale,
  rotation: config.rotation,
  strokeColor: config.strokeColor,
  strokeOpacity: config.strokeOpacity,
  strokeWeight: config.strokeWeight,
});

const processPath = path => (global[path] ? global[path] : path);

class Symbol {
  constructor(config = {}) {
    const options = getSymbolOptions(config);
    const path = processPath(config.path);
    return BMapUtil.BSymbol(path, options);
  }
}

export default Symbol;
