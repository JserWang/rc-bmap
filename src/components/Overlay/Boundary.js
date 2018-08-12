import { getPoint, createPolygon } from '../_base/util';
import ReactComponent from '../ReactComponent';
import BaseOverlay from './BaseOverlay';

@ReactComponent
class Boundary extends BaseOverlay {
  init() {
    const {
      name,
      onError,
      autoViewport,
      ...polygonOpts,
    } = this.props;

    this.getBoundary(name)
    .then((points) => {
      polygonOpts.points = points;
      this.instance = createPolygon(polygonOpts)
      this.map.addOverlay(this.instance);
      if (autoViewport) {
        points = points.map(item => getPoint(item.lng, item.lat));
        this.map.setViewport(points);
      }
    }).catch((msg) => {
      if (onError) {
        onError(msg);
      }
    });
  }

  getBoundary(name) {
    return new Promise((resolve, reject) => {
      const boundary = new global.BMap.Boundary();

      boundary.get(name, (res) => {
        const count = res.boundaries.length;
        if (count === 0) {
          reject('未能获取当前输入行政区域');
        }
        const points = res.boundaries[0].split(';').map((item) => {
          const pointArr = item.split(',');
          return {
            lng: pointArr[0],
            lat: pointArr[1]
          };
        });
        resolve(points);
      });
    });
  }
}

export default Boundary;
