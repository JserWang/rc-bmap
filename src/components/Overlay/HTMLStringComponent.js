import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const containerStyle = {
  position: 'absolute',
  top: -10000,
};

class HTMLStringComponent extends PureComponent {
  static contextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  static displayName = 'HTMLComponent';

  componentDidMount() {
    const { context } = this;
    this.instance = this.content.innerHTML;
    context.centralizedUpdates({
      name: this.name,
      data: this.content.innerHTML,
    });
  }

  componentDidUpdate() {
    const { context } = this;
    context.centralizedUpdates({
      name: this.name,
      data: this.content.innerHTML,
    });
  }

  componentWillUnmount() {
    const { context } = this;
    context.centralizedUpdates({
      name: this.name,
      data: null,
    });
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

export default HTMLStringComponent;