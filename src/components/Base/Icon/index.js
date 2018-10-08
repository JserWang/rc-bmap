import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BMapUtil } from '../../../core';

export default class Icon extends PureComponent {
  displayName = 'Icon'

  instance = null

  static contextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  componentDidMount() {
    const { context } = this;
    this.createInstance();
    context.centralizedUpdates(this);
  }

  componentDidUpdate() {
    const { context } = this;
    this.createInstance();
    context.centralizedUpdates(this);
  }

  createInstance = () => {
    const { children, ...resetProps } = this.props;
    this.processConfig(resetProps);
    this.instance = BMapUtil.BIcon(resetProps);
    if (resetProps.imageSize) {
      this.instance.setImageSize(
        BMapUtil.BSize(resetProps.imageSize.width, resetProps.imageSize.height),
      );
    }
  }

  processConfig = (config = {}) => {
    if (config.size) {
      config.size = BMapUtil.BSize(config.size.width, config.size.height);
    }

    if (config.imageOffset) {
      config.imageOffset = BMapUtil.BSize(config.imageOffset.width, config.imageOffset.height);
    }

    if (config.imageSize) {
      config.imageSize = BMapUtil.BSize(config.imageSize.width, config.imageSize.height);
    }

    if (config.infoWindowAnchor) {
      config.infoWindowAnchor = BMapUtil.BSize(config.infoWindowAnchor.width,
        config.infoWindowAnchor.height);
    }
  }

  render() {
    return null;
  }
}
