/* eslint no-console: 0 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import store, { persistor } from 'startup/redux';
import { ApolloProvider } from 'startup/apollo';

import 'helpers/validateAbn';
import 'helpers/validateDate';

import AlertDialog from 'components/common/dialogs/AlertDialog';

import App from './App';

import theme from '../theme';

export class AppContainer extends Component {
  render() {
    return (
      <ApolloProvider>
        <Provider store={store}>
          <PersistGate
            disabled={<div>Loading Local Storage...</div>}
            persistor={persistor}
          >
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
              <App />
              <AlertDialog />
            </MuiThemeProvider>
          </PersistGate>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default AppContainer;
