import { BMapUtil } from '../utils';
import BaseControl from './Base';

class Panorama extends BaseControl {
  init(config = {}) {
    this.instance = BMapUtil.BPanoramaControl(config);
    this.map.addControl(this.instance);
  }
}

export default Panorama;
