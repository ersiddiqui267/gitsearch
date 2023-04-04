import React from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import axios from "axios";

class App extends React.Component {
  state = {
    users: [],
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
        }, 4000);

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
          <Alert showAlert={this.state.showAlert} />
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
