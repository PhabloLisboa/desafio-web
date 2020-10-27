export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export function login(token) {
  localStorage.setItem("token", token);
  return {
    token,
    type: LOGIN,
  };
}

export function logout() {
  localStorage.removeItem("token");
  return {
    token: null,
    type: LOGOUT,
  };
}
