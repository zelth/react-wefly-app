import gql from 'graphql-tag';

export default gql`
  mutation setDrawerOpen($drawerOpen: Boolean!) {
    setDrawerOpen(drawerOpen: $drawerOpen) @client
  }
`;
