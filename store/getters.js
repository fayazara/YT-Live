export default {
  isLoggedIn: state => {
    try {
      return state.authUser.id !== null;
    } catch {
      return false;
    }
  },
  authUser: state => {
    try {
      return state.authUser;
    } catch {
      return null;
    }
  }
};
