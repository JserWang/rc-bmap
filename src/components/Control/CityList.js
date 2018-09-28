import { CityList as BCityList } from '../../core';
import BaseControl from './BaseControl';

class CityList extends BaseControl {
  instance = null

  init = () => {
    const cityList = new BCityList(this.config, this.mapInstance);
    this.instance = cityList.instance;
  }
}

export default CityList;
