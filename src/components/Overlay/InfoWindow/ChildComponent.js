import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const containerStyle = {
  position: 'absolute',
  top: -10000,
};

class ChildComponent extends PureComponent {
  static contextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  static displayName = 'ChildComponent';

  componentDidMount() {
    const { context } = this;
    this.instance = this.content.innerHTML;
    context.centralizedUpdates(this);
  }

  componentDidUpdate() {
    const { context } = this;
    this.instance = this.content.innerHTML;
    context.centralizedUpdates(this);
  }

  getContent = (ref) => {
    this.content = ref;
  }

  render() {
    const { children } = this.props;
    return (
      <div ref={this.getContent} style={containerStyle}>
        { children || null }
      </div>
    );
  }
}

export default ChildComponent;
