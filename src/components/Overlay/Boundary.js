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
    name: '',
    area: [],
  }

  componentDidMount() {
    const { name } = this.props;
    this.mounted = true;
    this.getPoints(name);
  }

  componentDidUpdate() {
    const { name } = this.props;
    if (name !== this.state.name) {
      this.getPoints(name);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getPoints = (name) => {
    Util.getBoundary(name).then(({ points, area }) => {
      if(this.mounted) {
        this.processAutoViewport(points);
        this.setState({
          name,
          area,
        });
      }
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
    const { area, name } = this.state;
    const { children, ...resetProps } = this.props;
    return (
      area.length > 0 ? (
        <div>
          {
            area.map((points, index) => (
              <Polygon
                key={`${name}_${index}`}
                {...resetProps}
              >
                <Path>
                  {
                    points.map((item, idx) => (
                      <Point key={idx} lng={item.lng} lat={item.lat} />
                    ))
                  }
                </Path>
                { children }
              </Polygon>
            ))
          }
        </div>
      ) : null
    );
  }
}

export default Boundary;
