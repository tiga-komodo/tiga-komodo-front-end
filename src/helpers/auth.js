export const clientAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    clientAuth.isAuthenticated = true;
    setTimeout(cb, 2000);
  },
  signout(cb) {
    clientAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
