import { getPoint, createPolygon, processBooleanOptions } from '../_base/util';
import ReactComponent from '../ReactComponent';
import BaseOverlay from './BaseOverlay';

@ReactComponent
class Boundary extends BaseOverlay {
  init() {
    const {
      name,
      onError,
      autoViewport,
      massClear = true,
      editing = false,
      ...polygonOpts
    } = this.props;

    this.getBoundary()
      .then((points) => {
        polygonOpts.points = points;
        this.instance = createPolygon(polygonOpts);
        this.map.addOverlay(this.instance);
        processBooleanOptions(this.instance, 'POLY_BOOLEAN_OPTIONS', {
          massClear,
          editing,
        });
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

  getBoundary() {
    const { name } = this.props;
    return new Promise((resolve, reject) => {
      const boundary = new global.BMap.Boundary();

      boundary.get(name, (res) => {
        const count = res.boundaries.length;
        if (count === 0) {
          reject();
        }
        const points = res.boundaries[0].split(';').map((item) => {
          const pointArr = item.split(',');
          return {
            lng: pointArr[0],
            lat: pointArr[1],
          };
        });
        resolve(points);
      });
    });
  }
}

export default Boundary;
