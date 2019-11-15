import gql from 'graphql-tag';

export default gql`
  mutation setAccount($isAdmin: Boolean! $organisationId: String) {
    setAccount(isAdmin: $isAdmin organisationId: $organisationId) @client
  }
`;
