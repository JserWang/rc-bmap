import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PlaceHolder extends PureComponent {
  displayName= 'PlaceHolder'

  static contextTypes = {
    renderPlaceHolder: PropTypes.func,
  }

  componentDidMount() {
    const { context } = this;
    context.renderPlaceHolder(this);
  }

  componentDidUpdate() {
    const { context } = this;
    context.renderPlaceHolder(this);
  }

  render() {
    const { children } = this.props;
    if (children) {
      return children;
    }
    return (
      <div>地图加载中...</div>
    );
  }
}
