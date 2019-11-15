const SET_ACCOUNT = 'app/account/SET_ACCOUNT';
const RESET_ACCOUNT = 'app/account/RESET_ACCOUNT';

export default (state = {}, { payload, type }) => {
  switch (type) {
    case SET_ACCOUNT: {
      const isAdmin = payload && payload.globalRoles && payload.globalRoles.includes('WIFLY_ADMIN');
      return { ...state, isAdmin, user: payload };
    }
    case RESET_ACCOUNT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export const setAccount = user => ({
  type: SET_ACCOUNT,
  payload: user,
});

export const resetAccount = () => ({
  type: RESET_ACCOUNT,
});
