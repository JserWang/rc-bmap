import { CityList as BCityList } from '../../core';
import BaseControl from './BaseControl';

class CityList extends BaseControl {
  getRealControl = () => new BCityList(this.config, this.mapInstance)
}

export default CityList;
