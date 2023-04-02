import React from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  searchUsers = async (query) => {
    try {
      if (!query) return;

      this.setState({
        loading: true,
      });

      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}`
      );

      this.setState({
        users: response.data.items,
        loading: false,
      });
    } catch (err) {
      console.error(err);
    }
  };

  clearUsers = () => {
    this.setState({
      users: [],
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container-sm">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
