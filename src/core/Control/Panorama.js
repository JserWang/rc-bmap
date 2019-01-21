import BMapUtil from '../utils/map';
import BaseControl from './BaseControl';

class Panorama extends BaseControl {
  init(config = {}) {
    this.instance = BMapUtil.BPanoramaControl(config);
    this.map.addControl(this.instance);
  }
}

export default Panorama;
