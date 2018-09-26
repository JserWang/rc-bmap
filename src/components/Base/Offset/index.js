import SubComponent from '../SubComponent';
import { BMapUtil } from '../../../core/utils';

export default class Offset extends SubComponent {
  displayName= 'Offset'

  instance= this.getInstance()

  getInstance() {
    const { width, height } = this.props;
    return BMapUtil.BSize(width, height);
  }
}
