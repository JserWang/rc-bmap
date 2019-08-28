import Util from '../utils';

const getCurveLineOptions = config => ({
  strokeColor: config.strokeColor,
  strokeWeight: config.strokeWeight,
  strokeOpacity: config.strokeOpacity,
  strokeStyle: config.strokeStyle,
});

class CurveLine {
  constructor(config, map) {
    this.map = map;
    this.init(config);
  }

  init(config = {}) {
    const options = getCurveLineOptions(config);
    const points = this.processPoints(config.path);
    this.instance = new global.BMapLib.CurveLine(points, options);
    this.map.addOverlay(this.instance);
    this.processEditing(config.editing);
  }

  repaint = (config) => {
    if (this.instance) {
      this.instance.disableEditing();
      this.destroy();
      this.init(config);
    }
  }

  processPoints = points => points.map(point => Util.convert2BPoint(point))

  processEditing = (editing) => {
    if (editing) {
      this.instance.enableEditing();
    } else {
      this.instance.disableEditing();
    }
  }

  destroy = () => {
    if (this.instance) {
      this.map.removeOverlay(this.instance);
    }
  }
}

export default CurveLine;
