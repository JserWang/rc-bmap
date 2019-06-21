import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Util} from '../../../core';
import BMarkerClusterer from '../../../core/Library/MarkerClusterer'

class MarkerClusterer extends PureComponent {

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
    const map = this.context.getMapInstance();

    const { children, ...resetProps } = this.props;

    this.config = { ...this.config, ...resetProps};

    Util.syncScript('https://api.map.baidu.com/library/TextIconOverlay/1.2/src/TextIconOverlay_min.js')
      .then(() => {
        Util.syncScript('https://api.map.baidu.com/library/MarkerClusterer/1.2/src/MarkerClusterer_min.js')
          .then(() => {
            this.cluster = new BMarkerClusterer({ ...this.config }, map);
            if (this.props.getInstance) {
              this.props.getInstance(this.cluster.instance);
            }
          });
      })
  }

  componentDidUpdate() {
    if (this.cluster) {
      this.config = { ...this.config };
      this.cluster.init(this.config);
    }
  }

  componentWillUnmount() {
    if (this.cluster) {
      this.cluster.destroy();
    }
  }

  centralizedUpdates = ({ name, data }) => {
    const configName = Util.firstLowerCase(name);
    this.config[configName] = data;
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default MarkerClusterer;
