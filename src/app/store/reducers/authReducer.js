import * as AuthActions from "../actions/authAction";

const Auth = (
  state = {
    token: null,
    logged: false,
  },
  action
) => {
  switch (action.type) {
    case AuthActions.LOGIN:
      return {
        ...state,
        token: action.token,
        logged: true,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        token: action.token,
        logged: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default Auth;
