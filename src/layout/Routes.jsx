import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { graphql } from 'react-apollo';
import compose from 'lodash.flowright';

import MainLayout from 'layout/MainLayout';
import SignIn from 'components/auth/SignIn';
import SignUp from 'components/auth/SignUp';
import ProfilePage from 'components/users/pages/Profile/ProfilePage';
import HomePage from 'components/pages/HomePage';
import TestPage from 'components/pages/TestPage';
import BookingPage from 'components/pages/BookingPage';
import PricingPage from 'components/pages/PricingPage';

import NotFoundPage from './NotFoundPage';
import ACCOUNT_CLIENT_QUERY from '../graphql/queries/clientState/account';
// import AdminRoutes from './routes/AdminRoutes';

export class Routes extends React.Component {
  render() {
    const { user, accountClientQuery:{ account:{ isAdmin }}} = this.props;

    return (
      <Switch>

        {/* We don't check for user in sign-in, because redirect is handling directly in SignIn component */}
        {<Route path="/sign-in" component={SignIn} />}
        {!user && <Route path="/sign-up" component={SignUp} />}
        {/* {!user && <Redirect to="/sign-in" />} */}
        <Route path="/booking" component={BookingPage} />
        <Route path="/test" component={TestPage} />
        <Route path="/pricing/:country?" component={PricingPage} />

        <Route path="/" component={HomePage} />
        {user && (
          <MainLayout>
            <Switch>
              {isAdmin}
              
              {/* <Redirect exact from="/organisation" to="/organisation/details" /> */}
              {/* <Route path="/pagetest" render={props => <CompnentNameHere {...props} user={user} />} /> */}

              <Route exact path="/profile" component={ProfilePage} />
              
              {/* <Route path="/page/:pageId/:tab" render={} /> */}

              <Route path="/" component={NotFoundPage} />
            </Switch>
          </MainLayout>
        )}
      </Switch>
    );
  }
}

const RoutesWithGraphQL = compose(
  graphql(ACCOUNT_CLIENT_QUERY, {
    name: 'accountClientQuery'
  })
)(Routes);

export default withRouter(RoutesWithGraphQL);
