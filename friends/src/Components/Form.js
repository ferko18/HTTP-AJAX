import React from "react";
import "./form.css";

class Form extends React.Component {
  state = {
    friend: {
      id: "",
      name: "",
      age: "",
      email: ""
    }
  };

  changeHandler = event => {
    event.persist();
    // console.log(event.target.value)
    this.setState(prevState => ({
      friend: { ...prevState.friend, [event.target.name]: event.target.value }
    }));
  };

  handleSubmit = (event)=>{
    event.preventDefault()
    event.persist();
    // console.log(event)
    this.props.addFriend(event, this.state.friend)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="contact">
          <div className="outer">
            <div className="label-text">Id</div>
            <div className="input-text">
              <input
                type="text"
                name="id"
                onChange={this.changeHandler}
                value={this.state.friend.id}
              />
            </div>
            <div className="label-text">Name</div>
            <div className="input-text">
              <input
                type="text"
                name="name"
                onChange={this.changeHandler}
                value={this.state.friend.name}
              />
            </div>
            <div className="label-text">Age</div>
            <div className="input-text">
              <input
                type="text"
                name="age"
                onChange={this.changeHandler}
                value={this.state.friend.age}
              />
            </div>
            <div className="label-text">Email Address</div>
            <div className="input-text">
              <input
                type="email"
                name="email"
                onChange={this.changeHandler}
                value={this.state.friend.email}
              />
            </div>

            <button className="submitbtn">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
