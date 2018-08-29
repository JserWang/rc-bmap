import React from 'react';
import {
  Map,
  AutoComplete,
} from 'rc-bmap';
import Container from 'components/Container';
import { Button } from 'antd';
import Ti from './index.md';

class AutoCompleteExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '北京市',
      value: '',
      events: {
        onconfirm() {
          console.log('onconfirm');
        },
        onhighlight() {
          console.log('onhighlight');
        },
      },
    };
  }

  searchComplete = () => {
    console.log('searchComplete');
  }

  handleChangeValue = () => {
    this.setState({
      value: '变更默认显示值',
    });
  }

  handleChangeLocation = () => {
    this.setState({
      location: '杭州市',
    });
  }

  render() {
    const { events, location, value } = this.state;
    return (
      <Container code={Ti}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <AutoComplete
              input="suggest"
              searchComplete={this.searchComplete}
              events={events}
              location={location}
              value={value}
            />
          </Map>
          <input id="suggest" />
          <Button onClick={this.handleChangeValue}>更改默认显示值</Button>
          <Button onClick={this.handleChangeLocation}>更改location</Button>
        </div>
      </Container>
    );
  }
}

export default AutoCompleteExample;
