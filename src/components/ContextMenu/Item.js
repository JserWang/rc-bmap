import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Util, BMapUtil, Constants } from '../../core';

const { CONTEXT_MENU_ICON } = Constants;
// 内置ContextMenuIcon集合
const builtInArray = [CONTEXT_MENU_ICON.ZOOM_IN, CONTEXT_MENU_ICON.ZOOM_OUT];

/**
 * 处理icon
 * @param {*} iconUrl icon链接
 */
const getIconUrl = (iconUrl) => {
  let icon = iconUrl;
  if (iconUrl && builtInArray.indexOf(iconUrl) > -1) {
    icon = global[iconUrl];
  }
  return icon;
};

export default class ContextMenuItem extends PureComponent {
  displayName = 'ContextMenuItem'

  instance = null

  static contextTypes = {
    addMenuItem: PropTypes.func,
    updateMenuItem: PropTypes.func,
    removeMenuItem: PropTypes.func,
  }

  componentDidMount() {
    const { context } = this;
    const { index } = this.props;

    this.instance = this.getInstance();
    context.addMenuItem(index, this.instance);
  }

  componentDidUpdate() {
    const { context } = this;
    const { index } = this.props;
    this.instance = this.getInstance();
    context.updateMenuItem(index, this.instance);
  }

  componentWillUnmount() {
    const { context } = this;
    const { index } = this.props;
    context.removeMenuItem(index);
  }

  /**
   * 根据 props 初始化MenuItem
   */
  getInstance = () => {
    const {
      disabled, separator, iconUrl,
      text, width, id, onClick,
    } = this.props;
    const menuItem = BMapUtil.BMenuItem(text, onClick, {
      id,
      width,
      iconUrl: getIconUrl(iconUrl),
    });
    menuItem.separator = separator;
    if (!Util.isNil(disabled) && disabled) {
      menuItem.disable();
    } else {
      menuItem.enable();
    }
    return menuItem;
  }

  render() {
    return null;
  }
}
