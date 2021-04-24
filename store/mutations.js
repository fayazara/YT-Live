import state from "./state";
import initialState from "./state";

export default {
  RESET_STORE: state => {
    Object.assign(state, initialState());
  },

  SET_AUTH_USER: (state, authUser) => {
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email,
      photoURL: authUser.photoURL,
      displayName: authUser.displayName
    };
  },

  SET_USER_FAVOURITES: (state, channels) => {
    state.favourites = channels;
  }
};
