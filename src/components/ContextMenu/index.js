import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import { BMapUtil } from '../../core';

export default class ContextMenu extends PureComponent {
  static Item = Item

  displayName = 'ContextMenu'

  static contextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  // 子元素集合
  menuItems = [];

  // BContextMenu实例
  instance = null

  static childContextTypes = {
    addMenuItem: PropTypes.func,
    updateMenuItem: PropTypes.func,
    removeMenuItem: PropTypes.func,
  }

  getChildContext() {
    return {
      addMenuItem: this.addMenuItem,
      updateMenuItem: this.updateMenuItem,
      removeMenuItem: this.removeMenuItem,
    };
  }

  componentDidMount() {
    const { context } = this;
    this.repaint();
    context.centralizedUpdates({
      name: 'contextMenu',
      data: this.instance,
    });
  }

  componentDidUpdate() {
    const { context } = this;
    this.repaint();
    context.centralizedUpdates({
      name: 'contextMenu',
      data: this.instance,
    });
  }

  addMenuItem = (index, item) => {
    if (this.menuItems[index]) {
      this.menuItems.splice(index, 0, item);
    } else {
      this.menuItems[index] = item;
    }
  }

  updateMenuItem = (index, item) => {
    this.menuItems[index] = item;
  }

  removeMenuItem = (index) => {
    this.menuItems.splice(index, 1);
  }

  repaint = () => {
    this.instance = BMapUtil.BContextMenu(this.menuItems);
  }

  render() {
    const { children } = this.props;
    return React.Children.map(children, (child, index) => {
      if (child) {
        // 这里将 index 传递给MenuItem，保证子元素的显示顺序
        return React.cloneElement(child, {
          index,
        });
      }
      return null;
    });
  }
}
