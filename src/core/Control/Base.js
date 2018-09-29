import { Util, BMapUtil } from '../utils';

class BaseControl {
  instance = null;

  constructor(...params) {
    const [config, map] = [...params];
    this.map = map;
    this.processCommonOptions(config);
    this.init(...params);
    this.processVisible(config.visible);
  }

  processCommonOptions = (config) => {
    const {
      anchor, offset,
    } = config;

    if (anchor) {
      config.anchor = !Util.isNil(global[anchor]) ? global[anchor] : anchor;
    }

    if (offset) {
      config.offset = this.getUsableOffset(offset);
    }
  }

  processVisible = (visible) => {
    if (!Util.isNil(visible)) {
      if (!visible) {
        this.instance.hide();
      } else {
        this.instance.show();
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
    this.destroy();
    this.init(config);
  }

  destroy = () => {
    this.map.removeControl(this.instance);
  }
}

export default BaseControl;
