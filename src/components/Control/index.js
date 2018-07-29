import { render as reactRender } from 'react-dom';
import { getSize } from '../_base/util';
import Base from '../Base';
import CONTROL_ANCHOR from '../../constants/ControlAnchor';

const top = window || global;

class Control extends Base {
  constructor(props) {
    super(props);
    const {
      anchor = CONTROL_ANCHOR.TOP_LEFT,
      offset = {
        width: 0,
        height: 0,
      },
    } = props;
    const BaseCtrl = function(defaultAnchor, defaultOffset) {
      this.defaultAnchor = defaultAnchor;
      this.defaultOffset = defaultOffset;
    };

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

  destroy = () => {
    this.map.removeControl(this.instance);
  }
}

export default Control;
