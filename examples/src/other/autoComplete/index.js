import React from 'react';
import {
  Map,
  AutoComplete,
} from 'rc-bmap';
import Container from 'components/Container';
import Ti from './index.md';

class AutoCompleteExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const { events } = this.state;
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
            />
          </Map>
          <input id="suggest" />
        </div>
      </Container>
    );
  }
}

export default AutoCompleteExample;
