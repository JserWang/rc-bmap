import BaseOverlay from './BaseOverlay';
import { createLabel } from '../_base/util';
import ReactComponent from '../ReactComponent';

@ReactComponent
class Label extends BaseOverlay {
  init() {
    this.instance = createLabel(this.props);
  }
}

export default Label;
