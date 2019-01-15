import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Util, AutoComplete as BAutoComplete } from '../../core';

class AutoComplete extends PureComponent {
  instance = null;

  config = {}

  static childContextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  getChildContext() {
    return {
      centralizedUpdates: this.centralizedUpdates,
    };
  }

  componentDidMount() {
    const { children, ...resetProps } = this.props;
    this.config = { ...this.config, ...resetProps };
    this.control = new BAutoComplete(this.config);
    this.instance = this.control.instance;
  }

  componentDidUpdate() {
    const { children, ...resetProps } = this.props;
    this.config = { ...this.config, ...resetProps };
    this.control.repaint(this.config);
  }

  componentWillUnmount() {
    this.control.destroy();
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

export default AutoComplete;
