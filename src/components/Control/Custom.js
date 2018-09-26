import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Control from '../../core/Control';
import { Util, BMapUtil } from '../../core/utils';

const CustomHOC = WrappedComponent => class extends PureComponent {
  static contextTypes = {
    getMapInstance: PropTypes.func,
  }

  static childContextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  offset = { width: 0, height: 0 }

  getChildContext() {
    return {
      centralizedUpdates: this.centralizedUpdates,
    };
  }

  componentDidMount() {
    const { context } = this;
    const {
      anchor,
      offset,
      visible,
    } = this.props;

    Control.prototype = new BMapUtil.BControl();
    Control.prototype.initialize = this.initialize;
    const usableOffset = this.getUsableOffset(offset || this.offset);
    const ctrl = new Control(global[anchor], usableOffset);
    this.instance = ctrl;
    context.getMapInstance().addControl(ctrl);

    if (!Util.isNil(visible) && !visible) {
      ctrl.hide();
    }
  }

  componentDidUpdate() {
    const {
      anchor,
      offset,
      visible,
    } = this.props;
    this.instance.setAnchor(global[anchor]);
    const usableOffset = this.getUsableOffset(offset || this.offset);
    this.instance.setOffset(usableOffset);
    if (!Util.isNil(visible) && !visible) {
      this.instance.hide();
    } else {
      this.instance.show();
    }
  }

  getContainer = (ref) => {
    this.mapContainer = ref;
  }

  initialize = () => {
    const { context, mapContainer } = this;
    context.getMapInstance().getContainer().appendChild(mapContainer);
    return mapContainer;
  }

  centralizedUpdates = (unit) => {
    if (unit.displayName === 'Offset') {
      this.offset = unit.instance;
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

  render() {
    const { context } = this;
    const { children } = this.props;
    return (
      <div ref={this.getContainer}>
        <WrappedComponent
          map={context.getMapInstance()}
          {...this.props}
        />
        { children }
      </div>
    );
  }
};

export default CustomHOC;
