import { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class HTMLComponent extends PureComponent {
  static contextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  static displayName = 'HTMLComponent';

  constructor(props) {
    super(props);
    this.div = document.createElement('div');
  }

  componentDidMount() {
    const { context } = this;
    ReactDOM.render(this.props.children, this.div);
    context.centralizedUpdates({
      name: this.name,
      data: this.div,
    });
  }

  componentDidUpdate() {
    const { context } = this;
    ReactDOM.render(this.props.children, this.div);
    context.centralizedUpdates({
      name: this.name,
      data: this.div,
    });
  }

  componentWillUnmount() {
    const { context } = this;
    context.centralizedUpdates({
      name: this.name,
      data: null,
    });
  }

  render() {
    return null;
  }
}

export default HTMLComponent;
