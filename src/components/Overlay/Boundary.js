import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Polygon from './Polygon';
import Base from '../Base';
import { Util } from '../../core';

const { Point, Path } = Base;

class Boundary extends PureComponent {
  static contextTypes = {
    getMapInstance: PropTypes.func,
  }

  state = {
    area: [],
  }

  componentDidMount() {
    const { name } = this.props;
    this.getPoints(name);
  }

  componentDidUpdate() {
    const { name } = this.props;
    if (name !== this.name) {
      this.getPoints(name);
    }
  }

  getPoints = (name) => {
    Util.getBoundary(name).then(({ points, area }) => {
      this.name = name;
      this.processAutoViewport(points);
      this.setState({
        area,
      });
    });
  }

  processAutoViewport(points = []) {
    const { context, props } = this;
    const { autoViewport } = props;
    if (autoViewport) {
      context.getMapInstance().setViewport(points);
    }
  }

  render() {
    const { area } = this.state;
    const { children } = this.props;
    return (
      area.length > 0 ? (
        area.map(points => (
          <Polygon
            {...this.props}
          >
            <Path>
              {
                points.map(item => (
                  <Point lng={item.lng} lat={item.lat} />
                ))
              }
            </Path>
            { children }
          </Polygon>
        ))

      ) : null
    );
  }
}

export default Boundary;
