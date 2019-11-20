import { ApolloClient } from 'apollo-client';

import { HttpLink } from 'apollo-link-http';
import { RetryLink } from 'apollo-link-retry';
import { WebSocketLink } from 'apollo-link-ws';

import { setContext } from 'apollo-link-context';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';

import errorLink from './apollo-link-error';
import initClientState from '../../clientState/initClientState';

import resolvers from '../../clientState/resolvers';

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
}));

const httpLink = new HttpLink({
  uri: 'http://ec2-3-1-81-97.ap-southeast-1.compute.amazonaws.com/api',
});

const wsLink = new WebSocketLink({
  uri: 'wss://ec2-3-1-81-97.ap-southeast-1.compute.amazonaws.com/subscriptions',
  options: {
    reconnect: true
  }
});

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true
  },
  attempts: {
    max: process.env.NODE_ENV === 'development' ? 0 : 3,
    retryIf: error => !!error
  }
});

const dataLink = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

// need to check details on this one
const cache = new InMemoryCache();

// TODO: Add dynamic env name
const client = new ApolloClient({
  name: 'web-app-local',
  version: '0.1',

  link: retryLink.concat(authLink.concat(errorLink.concat(dataLink))),
  cache,
  resolvers
});

// Write default values for Apollo client state
initClientState(cache);

export default client;
