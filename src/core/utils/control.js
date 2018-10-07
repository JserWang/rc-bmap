import Util from './common';
import BMapUtil from './map';

const ControlUtil = {
  processCommonOptions(config) {
    const {
      anchor,
      offset,
    } = config;

    if (anchor) {
      config.anchor = !Util.isNil(global[anchor]) ? global[anchor] : anchor;
    }

    if (offset) {
      config.offset = ControlUtil.getUsableOffset(config.offset);
    }
  },

  getUsableOffset(offset) {
    if (!Util.isNil(offset)) {
      if (!BMapUtil.isSize(offset)) {
        throw Error('The `offset` property should be literal value `{ width, height }`');
      } else if (!BMapUtil.isBSize(offset)) {
        offset = BMapUtil.BSize(offset.width, offset.height);
      }
    }

    return offset;
  },

  processVisible(instance, visible) {
    if (!Util.isNil(visible) && !Util.isNil(instance)) {
      if (visible) {
        instance.show();
      } else {
        instance.hide();
      }
    }
  },
};

export default ControlUtil;
