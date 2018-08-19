import { render as reactRender } from 'react-dom';
import { getSize } from '../_base/util';
import BaseControl from './BaseControl';
import CONTROL_ANCHOR from '../../constants/ControlAnchor';

const BaseCtrl = function (defaultAnchor, defaultOffset) {
  this.defaultAnchor = defaultAnchor;
  this.defaultOffset = defaultOffset;
};

class Control extends BaseControl {
  init() {
    const {
      anchor = CONTROL_ANCHOR.TOP_LEFT,
      offset = {
        width: 0,
        height: 0,
      },
    } = this.props;

    if (!BaseCtrl.prototype.initialize) {
      BaseCtrl.prototype = new global.BMap.Control();
      BaseCtrl.prototype.initialize = this.initialize.bind(this);
    }

    this.instance = new BaseCtrl(global[anchor], getSize(offset.width, offset.height));
    this.map.addControl(this.instance);
  }

  initialize() {
    // // 创建一个DOM元素
    const container = document.createElement('div');
    this.container = container;

    if (this.render) {
      reactRender(this.render(), container);
    }
    // 添加DOM元素到地图中
    this.map.getContainer().appendChild(container);
    // 将DOM元素返回
    return container;
  }
}

export default Control;
