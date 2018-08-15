import BaseOverlay from './BaseOverlay';
import {
  createMarker,
} from '../_base/util';
import ReactComponent from '../ReactComponent';

@ReactComponent
class Marker extends BaseOverlay {
  init() {
    const {
      animation,
    } = this.props;
    this.instance = createMarker(this.props);

    this.map.addOverlay(this.instance);

    // animation 需要在addOverlay之后添加，所以这里将setAnimation放置下个队列
    if (animation) {
      this.instance.setAnimation(global[animation]);
    }
  }
}

export default Marker;
