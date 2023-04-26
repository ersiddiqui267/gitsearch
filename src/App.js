import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import User from "./components/users/User";
import About from "./pages/About";
import Error from "./pages/Error";
import GithubState from "./contexts/github/GithubState";

const App = function () {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container-sm mb-5">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/user/:username" element={<User />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
