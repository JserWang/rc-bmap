import { BMapUtil } from '../utils';
import BaseControl from './Base';

class MapType extends BaseControl {
  constructor(config, map) {
    super(config, map);
    this.init(config);
  }

  instance = null

  init = (config) => {
    const options = this.getMapTypeOptions(config);
    this.instance = BMapUtil.BMapTypeControl(options);
    this.map.addControl(this.instance);
  }

  getMapTypeOptions = config => ({
    anchor: config.anchor,
    offset: config.offset,
    type: global[config.type] || config.type,
    mapTypes: this.getTypes(config.mapTypes),
  })

  getTypes = types => types && types.map(item => global[item] || item)
}

export default MapType;
