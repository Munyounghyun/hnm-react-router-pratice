import { authLogin } from "../reducers/authenticateReducer";

function login(id, password) {
  return (dispatch, getState) => {
    //dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
    dispatch(authLogin.login({ id, password }));
  };
}

function logout() {
  return (dispatch, getState) => {
    //dispatch({ type: "LOGOUT_SUCCESS" });
    dispatch(authLogin.logout());
  };
}
export const authenticateAction = { login, logout };
