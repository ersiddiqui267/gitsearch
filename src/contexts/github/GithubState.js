import React, { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import axios from "axios";
import {
  CLEAR_USERS,
  SET_ALERT,
  HIDE_ALERT,
  SET_LOADING,
  SET_REPOS,
  SET_USER,
  SET_USERS,
} from "../types";

const GithubState = function (props) {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    showAlert: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (query) => {
    try {
      if (!query) {
        dispatch({
          type: SET_ALERT,
        });

        setTimeout(
          () =>
            dispatch({
              type: HIDE_ALERT,
            }),
          1700
        );

        return;
      }

      dispatch({
        type: SET_LOADING,
      });

      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      dispatch({
        type: SET_USERS,
        payload: response.data.items,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const getUser = async (username) => {
    try {
      dispatch({
        type: SET_LOADING,
      });

      const response = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      dispatch({
        type: SET_USER,
        payload: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const getRepos = async (username) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
      type: SET_REPOS,
      payload: response.data,
    });
  };

  const clearUsers = () =>
    dispatch({
      type: CLEAR_USERS,
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        showAlert: state.showAlert,
        searchUsers,
        getUser,
        getRepos,
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
