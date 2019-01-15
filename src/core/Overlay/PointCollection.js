import Util from '../utils';
import BMapUtil from '../utils/map';

import BaseOverlay from './BaseOverlay';

const getPointCollectionOptions = config => ({
  shape: config.shape ? global[config.shape] : null,
  size: config.size ? global[config.size] : null,
  color: config.color,
});

const processPoints = (points = []) => points.map(item => Util.convert2BPoint(item));

class PointCollection extends BaseOverlay {
  init(config = {}) {
    const options = getPointCollectionOptions(config);
    const points = processPoints(config.path);
    this.instance = BMapUtil.BPointCollection(points, options);
    this.map.addOverlay(this.instance);
  }

  processOptions(config) {
    if (config.shape || config.size || config.color) {
      this.instance.setStyles({
        shape: config.shape ? global[config.shape] : global[this.config.shape],
        size: config.shape ? global[config.size] : global[this.config.size],
        color: config.color || this.config.color,
      });
    }

    if (config.path) {
      this.instance.setPoints(processPoints(config.path));
    }
  }
}

export default PointCollection;
