import SubComponent from './SubComponent';
import { BMapUtil } from '../../core/utils';

export default class Point extends SubComponent {
  displayName= 'Point'

  getInstance() {
    const { lng, lat } = this.props;
    return BMapUtil.BPoint(lng, lat);
  }
}
