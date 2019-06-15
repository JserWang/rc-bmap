import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BMapUtil, Util} from '../../../core';
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

    const markers = this.props.markers && this.props.markers.map(item => {
      const point = Util.convert2BPoint(item);
      return BMapUtil.BMarker(point);
    });

    const styles = this.props.styles && this.props.styles.map(item => {
      return {
        url: item.url,
        size: item.size && BMapUtil.BSize({...item.size}),
        anchor: item.anchor && BMapUtil.BSize({...item.anchor}),
        offset: item.offset && BMapUtil.BSize({...item.offset}),
        textSize: item.textSize,
        textColor: item.textColor,
      }
    });

    this.config = { ...this.config, ...resetProps, markers, styles};

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
