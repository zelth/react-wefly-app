import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import ME_QUERY from 'graphql/queries/me';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    const { meQuery, history } = props;

    if (meQuery && meQuery.me && meQuery.me._id) {
      this.state.redirecting = true;
      history.push('/');
    }
  }

  render() {
    return (
      <div className="sign-in-container">
        <div className="logo">
          <img src="./images/common/logo-white.png" alt="" />
        </div>
        this is the sign in
      </div>
    );
  }
}

const SignInWithGraphQL = graphql(ME_QUERY, {
  name: 'meQuery',
})(SignIn);

export default withRouter(SignInWithGraphQL);
