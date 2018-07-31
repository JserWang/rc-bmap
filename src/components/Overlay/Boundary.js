import Polygon from './Polygon';
import { getPoint } from '../_base/util';
import ReactComponent from '../ReactComponent';

@ReactComponent
class Boundary extends Polygon {
  constructor(props) {
    const {
      name,
      onBoundaryError,
      autoViewport,
      ...polygonProps
    } = props;

    super(polygonProps);

    this.getBoundary(name)
    .then((points) => {
      polygonProps.points = points;
      this.wrapped.onPropsUpdate(polygonProps);
      if (autoViewport) {
        points = points.map(item => getPoint(item.lng, item.lat));
        this.map.setViewport(points);
      }
    }).catch((msg) => {
      if (onBoundaryError) {
        onBoundaryError(msg);
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
