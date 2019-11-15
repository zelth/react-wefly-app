import { onError } from 'apollo-link-error';

import logger from 'helpers/logger';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    logger.error('GraphQL Errors:', graphQLErrors);
    graphQLErrors.map(({ message, locations, path }) => logger.error(
      `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
    ));
  }

  if (networkError) {
    logger.error(`[Network error]: ${networkError}`);
  }
});

export default errorLink;
