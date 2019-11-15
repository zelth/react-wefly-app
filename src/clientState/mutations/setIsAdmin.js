const setIsAdmin = (_, { isAdmin }, { cache: _cache }) => {
  _cache.writeData({
    data: {
      account: {
        __typename: 'stateAccount',
        isAdmin,
      },
    }
  });
  return null;
};

export default setIsAdmin;