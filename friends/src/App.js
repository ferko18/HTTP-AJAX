import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Friends from "./Components/Friends";
import Form from "./Components/Form";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        this.setState({ error: err.response.message });
      });
  }

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/friends", friend)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Form  addFriend={this.state.addFriend}/>
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
