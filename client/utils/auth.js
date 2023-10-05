// utils/auth.js

export const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
};

export const saveAuthToken = (token) => {
  localStorage.setItem("authToken", token);
};

export const removeAuthToken = () => {
  localStorage.removeItem("authToken");
};
