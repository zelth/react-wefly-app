import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import AppClient from './client';

export default class AppProvider extends Component {
  render() {
    const { children } = this.props;

    return (
      <ApolloProvider client={AppClient}>
        {children}
      </ApolloProvider>);

  }
}