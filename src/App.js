import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import User from "./components/users/User";
import About from "./pages/About";
import Error from "./pages/Error";

class App extends React.Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    showAlert: false,
  };

  searchUsers = async (query) => {
    try {
      if (!query) {
        this.setState({
          showAlert: true,
        });

        setTimeout(() => {
          this.setState({
            showAlert: false,
          });
        }, 1700);

        return;
      }

      this.setState({
        loading: true,
        showAlert: false,
      });

      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      this.setState({
        users: response.data.items,
        loading: false,
      });
    } catch (err) {
      console.error(err);
    }
  };

  getUser = async (username) => {
    try {
      this.setState({
        loading: true,
      });

      const response = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      this.setState({
        user: response.data,
        loading: false,
      });
    } catch (err) {
      console.error(err);
    }
  };

  getRepos = async (username) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      repos: response.data,
    });
  };

  clearUsers = () => {
    this.setState({
      users: [],
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container-sm mb-5">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showAlert={this.state.showAlert}
                    users={this.state.users}
                    loading={this.state.loading}
                  />
                }
              />
              <Route exact path="/about" element={<About />} />
              <Route
                exact
                path="/user/:login"
                element={
                  <User
                    getUser={this.getUser}
                    getRepos={this.getRepos}
                    loading={this.state.loading}
                    user={this.state.user}
                    repos={this.state.repos}
                  />
                }
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
