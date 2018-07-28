import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Map from './components/Map';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Map
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    events={{ click: (...args: any[]) => {console.log(args); } }}
  />,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();
