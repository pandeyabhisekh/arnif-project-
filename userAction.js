export const signIn = (username) => {
  return { type: 'SIGN_IN', payload: username };
};

export const signUp = (username) => {
  return { type: 'SIGN_UP', payload: username };
};
