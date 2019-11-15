const setDrawerOpen = (_, { drawerOpen }, { cache: _cache }) => {
  _cache.writeData({
    data: {
      app: {
        __typename: 'stateApp',
        drawerOpen,
      },
    }
  });
  return null;
};

export default setDrawerOpen;