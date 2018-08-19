import React from 'react';
import { Button } from 'antd';
import {
  Map,
  ControlAnchor,
  CityList,
} from 'rc-bmap';
import { getRandomControlAnchor } from 'utils';

class CitylistExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        width: 0,
        height: 0,
      },
      anchor: ControlAnchor.TOP_RIGHT,
    };
  }

  handleAnchor = () => {
    this.setState({
      anchor: ControlAnchor[getRandomControlAnchor()],
    });
  }

  handleOffset = () => {
    const { offset } = this.state;
    this.setState({
      offset: {
        width: offset.width + 3,
        height: offset.height + 3,
      },
    });
  }

  onChangeBefore = () => {
    console.log('onChangeBefore');
  }

  onChangeAfter = () => {
    console.log('onChangeAfter');
  }

  render() {
    const { offset, anchor } = this.state;
    return (
      <React.Fragment>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <CityList
              offset={offset}
              anchor={anchor}
              onChangeBefore={this.onChangeBefore}
              onChangeAfter={this.onChangeAfter}
            />
          </Map>
          <Button onClick={this.handleOffset}>改变offset</Button>
          <Button onClick={this.handleAnchor}>随机改变停靠位置</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default CityListExample;
