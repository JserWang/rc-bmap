import BaseOverlay from './BaseOverlay';
import { getPoint, bindEvents, isSupportContext } from '../_base/util';
import ReactComponent from '../ReactComponent';

@ReactComponent
class PointCollection extends BaseOverlay {
  init() {
    this.instance = null;

    // 判断浏览器支持海量点
    if (isSupportContext()) {
      const {
        points,
        shape,
        color,
        size,
        events,
      } = this.props;

      const opts = {
        shape: shape && global[shape],
        color,
        size: size && global[size],
      };

      let pList = [];
      if (points && Array.isArray(points)) {
        pList = points.map(item => getPoint(item.lng, item.lat));
      }

      this.instance = new global.BMap.PointCollection(pList, opts);
      this.map.addOverlay(this.instance);

      bindEvents(this.instance, 'POINT_COLLECTION', events);
    }
  }
}

export default PointCollection;
