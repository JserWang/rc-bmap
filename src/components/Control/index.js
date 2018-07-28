import { render as reactRender } from 'react-dom';
import { getSize } from '../_base/util';
import CONTROL_ANCHOR from '../../constants/ControlAnchor';

const top = window || global;

class Control {
  constructor(opts) {
    const {
      anchor = CONTROL_ANCHOR.TOP_LEFT,
      offset = {
        width: 0,
        height: 0,
      },
    } = opts;

    const BaseCtrl = function(defaultAnchor, defaultOffset) {
      this.defaultAnchor = defaultAnchor;
      this.defaultOffset = defaultOffset;
    };
    BaseCtrl.prototype = new top.BMap.Control();
    this.controlInstance = new BaseCtrl(top[anchor], getSize(offset.width, offset.height));
    this.state = {};
    this.map = top.b;
    // 设置默认停靠位置和偏移量

  }

  setState = (param) => {
    if (param !== null) {
      this.state = Object.assign(this.state, param);
    }
    if (this.render) {
      reactRender(this.render(), this.container);
    }
  }

  initialize() {
    // // 创建一个DOM元素
    const container = this.container = document.createElement('div');
    if (this.render) {
      reactRender(this.render(), container);
    }
    // 添加DOM元素到地图中
    this.map.getContainer().appendChild(container);
    // 将DOM元素返回
    return container;
  }

  destroy = () => {
    this.map.removeControl(this.controlInstance);
  }
}

export default Control;
