import { Util, BMapUtil } from '../utils';

class BaseControl {
  config = {}

  processCommonOptions = (config) => {
    const {
      anchor, offset,
    } = config;

    if (anchor) {
      config.anchor = global[config.anchor];
    }

    if (offset) {
      config.offset = this.getUsableOffset(offset);
    }
  }

  getUsableOffset = (offset) => {
    if (!Util.isNil(offset)) {
      if (!BMapUtil.isSize(offset)) {
        throw Error('The `offset` property should be literal value `{ width, height }`');
      } else if (!BMapUtil.isBSize(offset)) {
        offset = BMapUtil.BSize(offset.width, offset.height);
      }
    }

    return offset;
  }
}

export default BaseControl;
