import BaseOverlay from '../Overlay/BaseOverlay';
import { isSupportCanvas } from '../_base/util';
import ReactComponent from '../ReactComponent';
import { default as BHeatmap } from 'bmaplib.heatmap';

@ReactComponent
class Heatmap extends BaseOverlay {

  init() {
    if (!isSupportCanvas()) {
      this.instance = null;
      return;
    }

    const {
      points,
      opacity,
      max,
      radius,
      gradient,
    } = this.props;

    const opts = {
      opacity,
      radius,
      gradient,
    };
    
    this.instance = new BHeatmap(opts);
    this.map.addOverlay(this.instance);

    if (points) {
      // 需要先addOverlay后再执行
      this.instance.setDataSet({
        data: points,
        max,
      });
    }
  }
}

export default Heatmap;
