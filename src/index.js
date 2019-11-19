import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import AppContainer from './layout/AppContainer';
import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Montserrat']
  }
});

window.logout = () => {
  localStorage.removeItem('access_token');
  window.location.reload();
};

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

render(AppContainer);

if (module.hot) {
  module.hot.accept('./layout/AppContainer', () => {
    const NextApp = require('./layout/AppContainer').default; // eslint-disable-line

    render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
