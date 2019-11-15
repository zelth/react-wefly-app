import 'stylesheets/index.scss';

import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { graphql } from 'react-apollo';
import compose from 'lodash.flowright';
import ME_QUERY from 'graphql/queries/me';
import SET_IS_ADMIN_CLIENT from 'graphql/mutations/clientState/setIsAdmin';
import SET_ACCOUNT_CLIENT from 'graphql/mutations/clientState/setAccount';


import Routes from './Routes';

export class App extends Component {
  componentDidUpdate() {
    const { meQuery: { me, loading, error }, setIsAdmin } = this.props;
 
    if (!loading && !error) {
      if (me && me.globalRoles && me.globalRoles.includes('WIFLY_ADMIN')) {
        setIsAdmin({ variables:{ isUserAdmin: true }});
      } else {
        setIsAdmin({ variables:{ isUserAdmin: false }});
      }
    }
  }

  render() {
    const { 
      meQuery: { me, loading: meLoading, error: meError }, 
    } = this.props;

    if (meError) {
      return <div>Check network connection</div>;
    }

    return (
      <Router>{!meLoading && <Routes user={me} />}</Router>
    );
  }
}

const AppWithGraphQL = compose(
  graphql(ME_QUERY, {
    name: 'meQuery'
  }),

  graphql(SET_IS_ADMIN_CLIENT, {
    name: 'setIsAdmin'
  }),

  graphql(SET_ACCOUNT_CLIENT, {
    name: 'setAccount'
  })

)(App);

export default AppWithGraphQL;
