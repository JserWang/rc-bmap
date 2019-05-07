import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { HeatMap as BHeatMap, Util } from '../../../core';

class HeatMap extends PureComponent {
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
    this.config = { ...this.config, ...resetProps };

    Util.syncScript('https://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js')
      .then(() => {
        this.tool = new BHeatMap({ ...this.config }, map);
        if (this.props.getInstance) {
          this.props.getInstance(this.tool.instance);
        }
      });
  }

  componentDidUpdate() {
    if (this.tool) {
      this.config = { ...this.config };
      this.tool.repaint(this.config);
    }
  }


  componentWillUnmount() {
    if (this.tool) {
      this.tool.destroy();
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

export default HeatMap;
