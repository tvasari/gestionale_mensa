
const authentication = {
  isAuthenticated: false,
  authenticate() {
    authentication.isAuthenticated = true;
  },
  signout(redirectToAccedi) {
    authentication.isAuthenticated = false;
    redirectToAccedi();
  }
}

export default authentication;