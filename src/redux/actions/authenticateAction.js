function login(id, password) {
  return (dispatch, getState) => {
    console.log("로그인 성공");
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
}

function logout() {
  return (dispatch, getState) => {
    console.log("로그아웃 성공");
    dispatch({ type: "LOGOUT_SUCCESS" });
  };
}
export const authenticateAction = { login, logout };
