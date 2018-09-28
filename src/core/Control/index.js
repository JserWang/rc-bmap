import { BMapUtil, Util } from '../utils';
import BaseControl from './Base';

class Control extends BaseControl {
  constructor(config, map) {
    super(config, map);
    this.config = config;
    this.processCommonOptions(config);
    this.defaultAnchor = config.anchor;
    this.processOptions(config);
  }

  config = {}

  processCommonOptions = (config) => {
    const { anchor, offset } = config;
    if (anchor) {
      config.anchor = global[anchor] || anchor;
    }

    if (offset) {
      config.offset = this.getUsableOffset(offset);
    }
  }

  processOptions = ({ anchor, offset, visible }) => {
    if (anchor) {
      this.setAnchor(anchor);
    }
    if (offset) {
      this.setOffset(offset);
    }
    if (!Util.isNil(visible)) {
      if (!visible) {
        this.hide();
      } else {
        this.show();
      }
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

  repaint = (config) => {
    this.processCommonOptions(config);
    const diffConfig = Util.getDiffConfig(this.config, config);
    this.processOptions(diffConfig);
    this.config = { ...this.config, ...diffConfig };
  }
}

// 异步加载时，BMap对象不存在，所以提供获得类方法，确保调用时BMap对象存在。
const getCustomControl = (config, initialize, mapInstance) => {
  Control.prototype = new BMapUtil.BControl();
  Control.prototype.initialize = initialize;

  return new Control(config, mapInstance);
};

export default getCustomControl;
