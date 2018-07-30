import BaseOverlay from './BaseOverlay';
import { getPoint, bindEvents } from '../_base/util';
import ReactComponent from '../ReactComponent';

@ReactComponent
class PointCollection extends BaseOverlay {
  init() {
    this.instance = null;

    // 判断浏览器支持海量点
    if (document.createElement('canvas').getContext) {
      const {
        points,
        shape,
        color,
        size,
        events,
      } = this.props;

      const opts = {
        shape: shape && top[shape],
        color,
        size: size && top[size],
      };

      let pList = points.map((item) => {
        return getPoint(item.lng, item.lat);
      });
      this.instance = new global.BMap.PointCollection(pList, opts);
      bindEvents(this.instance, 'POINT_COLLECTION', events);
    }
  }
}

export default PointCollection;
