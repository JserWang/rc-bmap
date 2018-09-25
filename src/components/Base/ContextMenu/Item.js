import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Util, BMapUtil } from '../../../core/utils';

export default class ContextMenuItem extends PureComponent {
  displayName= 'ContextMenuItem'

  idx = -1

  instance = null

  static contextTypes = {
    getIdx: PropTypes.func,
    addMenuItem: PropTypes.func,
    updateMenuItem: PropTypes.func,
  }

  componentDidMount() {
    const { context } = this;

    this.idx = context.getIdx();
    this.processConfig();
    context.addMenuItem(this.instance);
  }

  componentDidUpdate() {
    const { context } = this;
    this.processConfig();
    context.updateMenuItem(this.idx, this.instance);
  }

  processConfig = () => {
    const { disabled, separator } = this.props;
    this.instance = BMapUtil.BMenuItem(this.props);
    this.instance.separator = separator;
    if (!Util.isNil(disabled) && disabled) {
      this.instance.disable();
    } else {
      this.instance.enable();
    }
  }

  render() {
    return null;
  }
}
