import gql from 'graphql-tag';

export default gql`
  query me {
    me {
      id
      email
      globalRoles
      profile {
        firstName
        lastName
        email
      }
      organisation {
        id
        primaryRole
      }
    }
  }
`;
