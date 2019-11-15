import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import ME_QUERY from 'graphql/queries/me';

export class SignUp extends Component {

  // handleSignUp() {
  //   // handle signup!
  // }

  render() {
    const { history } = this.props;
    return (
      <div>
        Sign up page
        <button onClick={() => this.handleSignUp()}>Sign Up</button>
        <button onClick={() => history.push('/sign-in')}>Sign In</button>
      </div>
    );
  }
}

const SignUpWithGraphQL = graphql(ME_QUERY)(SignUp);

export default SignUpWithGraphQL;
