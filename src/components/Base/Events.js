import Common from './Common';

export default class Events extends Common {
  static displayName = 'Events'

  getData = () => ({
    name: 'events',
    data: this.props,
  })
}
