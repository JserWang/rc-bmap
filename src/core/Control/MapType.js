import BMapUtil from '../utils/map';
import BaseControl from './BaseControl';

const getTypes = types => types && types.map(item => global[item] || item);

const getMapTypeOptions = config => ({
  anchor: config.anchor,
  offset: config.offset,
  type: global[config.type] || config.type,
  mapTypes: getTypes(config.mapTypes),
});

class MapType extends BaseControl {
  init(config = {}) {
    const options = getMapTypeOptions(config);
    this.instance = BMapUtil.BMapTypeControl(options);
    this.map.addControl(this.instance);
  }
}

export default MapType;
