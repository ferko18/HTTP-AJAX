import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div>
      <form className="contact">
        <div className="outer">
          <div className="label-text">Id</div>
          <div className="input-text">
            <input type="text" />
          </div>
          <div className="label-text">Name</div>
          <div className="input-text">
            <input type="text" />
          </div>
          <div className="label-text">Age</div>
          <div className="input-text">
            <input type="text" />
          </div>
          <div className="label-text">Email Address</div>
          <div className="input-text">
            <input type="email" />
          </div>

          <div className="submitbtn">Save</div>
        </div>
      </form>
    </div>
  );
};

export default Form;
