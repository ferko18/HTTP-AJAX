import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Friends from "./Components/Friends";
import Form from "./Components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      
    };
  }
 
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data }); console.log(res)
        
      })
      .catch(err => {
        this.setState({ error: err.response.message });
      });
  };

  render() {
    
    return (
      <div className="App">
        <Form />
      <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
