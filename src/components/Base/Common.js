import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Util } from '../../core';

class Common extends PureComponent {
  static contextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  config = {}

  static displayName = 'CommonBaseComponent';

  static childContextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  getChildContext() {
    return {
      centralizedUpdates: this.centralizedUpdates,
    };
  }

  componentDidMount() {
    const { context, getData } = this;
    const data = (getData && getData()) || {};
    context.centralizedUpdates(data);
  }

  componentDidUpdate() {
    const { context, getData } = this;
    const data = (getData && getData()) || {};
    context.centralizedUpdates(data);
  }

  componentWillUnmount() {
    const { context, getData } = this;
    const data = (getData && getData()) || {};
    data.data = null;
    context.centralizedUpdates(data);
  }

  centralizedUpdates = ({ name, data }) => {
    const configName = Util.firstLowerCase(name);
    this.config[configName] = data;
  }

  render() {
    const { children } = this.props;
    return children || null;
  }
}

export default Common;
