const authentication = {
  isAuthenticated: false,
  authenticate() {
    authentication.isAuthenticated = true;
  },
  signout(redirectToAccedi: any) {
    authentication.isAuthenticated = false;
    redirectToAccedi();
  }
}

export default authentication;