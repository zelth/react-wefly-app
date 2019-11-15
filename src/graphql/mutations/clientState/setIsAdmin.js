import gql from 'graphql-tag';

export default gql`
  mutation setIsAdmin($isAdmin: Boolean!) {
    setIsAdmin(isAdmin: $isAdmin) @client
  }
`;
