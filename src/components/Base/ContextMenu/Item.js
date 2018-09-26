import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ContextMenuIcon from '../../../constants/ContextMenuIcon';
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
    const icon = this.processIconUrl();
    this.instance = BMapUtil.BMenuItem({ ...this.props, iconUrl: icon });
    this.instance.separator = separator;
    if (!Util.isNil(disabled) && disabled) {
      this.instance.disable();
    } else {
      this.instance.enable();
    }
  }

  processIconUrl = () => {
    const { iconUrl } = this.props;
    let icon = null;
    if (iconUrl
      && (iconUrl === ContextMenuIcon.ZOOMIN || iconUrl === ContextMenuIcon.ZOOMOUT)) {
      icon = global[iconUrl];
    }
    return icon;
  }

  render() {
    return null;
  }
}
