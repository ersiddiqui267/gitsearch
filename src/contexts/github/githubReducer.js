import {
  CLEAR_USERS,
  SET_ALERT,
  HIDE_ALERT,
  SET_LOADING,
  SET_REPOS,
  SET_USER,
  SET_USERS,
  SET_QUERY,
  CLEAR_QUERY,
} from "../types";

const githubReducer = function (state, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        showAlert: false,
      };

    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        showClear: action.payload.length > 0 ? true : false,
      };

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        showClear: false,
      };

    case SET_ALERT:
      return {
        ...state,
        showAlert: true,
      };

    case HIDE_ALERT:
      return {
        ...state,
        showAlert: false,
      };

    case SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case SET_REPOS:
      return {
        ...state,
        repos: action.payload,
      };

    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    case CLEAR_QUERY:
      return {
        ...state,
        query: ``,
      };

    default:
      return state;
  }
};

export default githubReducer;
