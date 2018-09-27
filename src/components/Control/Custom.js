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

  config = {}

  getChildContext() {
    return {
      centralizedUpdates: this.centralizedUpdates,
    };
  }

  componentDidMount() {
    const { context } = this;

    Control.prototype = new BMapUtil.BControl();
    Control.prototype.initialize = this.initialize;
    const ctrl = new Control();
    this.instance = ctrl;
    const { children, ...resetProps } = this.props;
    this.config = { ...this.config, ...resetProps };
    this.processOptions(this.config);
    context.getMapInstance().addControl(ctrl);
  }

  componentDidUpdate() {
    const { children, ...resetProps } = this.props;
    const diffConfig = Util.getDiffConfig(this.config, resetProps);
    this.processOptions(diffConfig);
    this.config = { ...this.config, ...resetProps };
  }

  processOptions = (config) => {
    const { anchor, offset, visible } = config;
    if (anchor) {
      this.instance.setAnchor(global[anchor]);
    }

    if (offset) {
      const usableOffset = this.getUsableOffset(offset || this.offset);
      this.instance.setOffset(usableOffset);
    }

    if (!Util.isNil(visible)) {
      if (!visible) {
        this.instance.hide();
      } else {
        this.instance.show();
      }
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
      this.config.offset = unit.instance;
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
