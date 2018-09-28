import { BMapUtil } from '../utils';
import BaseControl from './Base';

class Panorama extends BaseControl {
  constructor(config, map) {
    super(config, map);
    this.init(config);
  }

  instance = null

  init = (config) => {
    this.instance = BMapUtil.BPanoramaControl(config);
    this.map.addControl(this.instance);
  }
}

export default Panorama;
