import Common from './Common';

export default class Bounds extends Common {
  static displayName = 'Bounds'

  getData = () => ({
    name: this.props.name || 'bounds',
    data: {
      sw: this.config.sw || this.props.sw,
      ne: this.config.ne || this.props.ne,
    },
  })
}
