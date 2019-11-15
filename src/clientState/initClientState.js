// This function is used to write defaults for apollo client state

const initClientState = cache => {
  cache.writeData({
    data: {
      account: {
        isAdmin: false,
        __typename: 'stateAccount',
      },
      app: {
        drawerOpen: true,
        __typename: 'stateApp',
      },
    },
  });
};

export default initClientState;