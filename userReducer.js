const userReducer = (state = { username: null }, action) => {
  switch (action.type) {
    case 'SIGN_IN':
    case 'SIGN_UP':
      return { username: action.payload };
    default:
      return state;
  }
};

export default userReducer;
