import { render as reactRender } from 'react-dom';
import { getSize } from '../_base/util';
import BaseControl from './BaseControl';
import CONTROL_ANCHOR from '../../constants/ControlAnchor';

const top = window || global;

const BaseCtrl = function(defaultAnchor, defaultOffset) {
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
    
    BaseCtrl.prototype = new top.BMap.Control();
    BaseCtrl.prototype.initialize = this.initialize.bind(this);
    this.instance = new BaseCtrl(top[anchor], getSize(offset.width, offset.height));
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
}

export default Control;
