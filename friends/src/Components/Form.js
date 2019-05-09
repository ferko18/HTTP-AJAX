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
  render() {
    return (
      <div>
        <form className="contact">
          <div className="outer">
            <div className="label-text">Id</div>
            <div className="input-text">
              <input type="text" name="id" onChange={this.changeHandler} value={this.state.friend.id} />
            </div>
            <div className="label-text">Name</div>
            <div className="input-text">
              <input type="text" name="name" onChange={this.changeHandler} value ={this.state.friend.name}/>
            </div>
            <div className="label-text">Age</div>
            <div className="input-text">
              <input type="text" name="age" onChange={this.changeHandler} value ={this.state.friend.age}/>
            </div>
            <div className="label-text">Email Address</div>
            <div className="input-text">
              <input type="email" name="email" onChange={this.changeHandler} value ={this.state.friend.email} />
            </div>

            <div className="submitbtn">Save</div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
