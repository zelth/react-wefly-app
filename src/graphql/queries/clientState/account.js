import gql from 'graphql-tag';

export default gql`
  query {
    account @client {
      isAdmin
    }
  }
`;
