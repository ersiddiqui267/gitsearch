import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import User from "./components/users/User";
import About from "./pages/About";
import Error from "./pages/Error";

const App = function () {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const searchUsers = async (query) => {
    try {
      if (!query) {
        setShowAlert(true);

        setTimeout(() => setShowAlert(false), 1700);

        return;
      }

      setLoading(true);
      setShowAlert(false);

      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      setUsers(response.data.items);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const getUser = async (username) => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      setUser(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const getRepos = async (username) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setRepos(response.data);
  };

  const clearUsers = () => setUsers([]);

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
                  searchUsers={searchUsers}
                  clearUsers={clearUsers}
                  showAlert={showAlert}
                  users={users}
                  loading={loading}
                />
              }
            />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/user/:username"
              element={
                <User
                  getUser={getUser}
                  getRepos={getRepos}
                  loading={loading}
                  user={user}
                  repos={repos}
                />
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
