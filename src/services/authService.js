const tokenKey = "token";

export function login(email, password) {
  if (email === "hruday@gmail.com" && password === "hruday123") {
    const jwt = "1234567890";
    localStorage.setItem(tokenKey, jwt);
  } else {
    return false;
  }
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getJwt
};
