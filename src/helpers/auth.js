export const clientAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    clientAuth.isAuthenticated = true;
    setTimeout(cb, 2000);
  },
  signout(cb) {
    clientAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
