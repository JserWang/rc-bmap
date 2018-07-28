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
    if (points) {
      // 需要先addOverlay后再执行
      setTimeout(() => {
        this.instance.setDataSet({
          data: points,
          max,
        });
      }, 100);
    }
  }
}

export default Heatmap;
