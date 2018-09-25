import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SubComponent extends PureComponent {
  static contextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  displayName = 'SubComponent';

  componentDidMount() {
    const { context } = this;
    context.centralizedUpdates(this);
  }

  componentDidUpdate() {
    const { context } = this;
    context.centralizedUpdates(this);
  }

  render() {
    return null;
  }
}

export default SubComponent;
