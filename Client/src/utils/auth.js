import decode from 'jwt-decode';

class AuthService {

  getUser() {
    const token = this.getToken();
    if (token) {
      const user = decode(token);
      return {
        token,
        user,
      };
    }
    return null;
  }

  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
    //gets profile from login token and grabs the mongo db _id field for the user
    // and puts it in the URL as a param in dashboard do that we can render user specific data
    if (idToken) {
      const user = Auth.getProfile();
      console.log(user); // Add this line
      const id = user.data._id;
      window.location.assign(`/dashboard/${id}`);
    } else {
      return console.log('the idToken was not found')
    }
  }

  addUser(idToken) {
    localStorage.setItem('id_token', idToken);
    // same exact pattern here as the login
    const user = Auth.getProfile()
    const id = user.data._id
    window.location.assign(`/dashboard/${id}`);

  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.reload();
    window.location.assign('/');
  }
}

const Auth = new AuthService();

export default Auth;