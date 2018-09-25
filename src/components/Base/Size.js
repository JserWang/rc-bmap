import SubComponent from '../SubComponent';
import { BMapUtil } from '../../core/utils';

export default class Size extends SubComponent {
  displayName= 'Size'

  getInstance() {
    const { width, height } = this.props;
    return BMapUtil.BSize(width, height);
  }
}
