import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import pointStore from './stores/pointStore2';

const stores = {
  pointStore  
}

window._____APP_STATE_____ = stores;

// useStrict(true);
configure ({
  enforceActions: 'observed'
})

ReactDOM.render((
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();