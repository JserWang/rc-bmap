import SubComponent from '../SubComponent';
import { BMapUtil } from '../../core/utils';

export default class Center extends SubComponent {
  displayName= 'Center'

  getInstance = () => {
    const { lng, lat, name } = this.props;
    if (name) {
      return name;
    }
    return BMapUtil.BPoint(lng, lat);
  }
}
