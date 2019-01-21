/*
 * 基础控件类
 * 用于统一处理重绘、销毁逻辑
 */

import Util from '../utils';

class BaseControl {
  instance = null;

  constructor(config, map) {
    this.map = map;
    this.repaint(config);
  }

  /**
   * 重绘
   */
  repaint = (config) => {
    this.destroy();
    config = { ...config, ...Util.convertControlOptions(config) };
    this.init(config);
    Util.processControlVisible(this.instance, config.visible);
  }

  /**
   * 销毁
   */
  destroy = () => {
    if (this.instance) {
      this.map.removeControl(this.instance);
      this.instance = null;
    }
  }
}

export default BaseControl;
