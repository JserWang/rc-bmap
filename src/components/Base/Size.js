import Common from './Common';

export default class Size extends Common {
  static displayName = 'Size'

  getData = () => {
    const { width, height, name = 'size' } = this.props;

    const data = { width, height };
    return { name, data };
  }
}
