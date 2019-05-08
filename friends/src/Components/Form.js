import React from 'react';
import './form.css'

const Form = () => {
    return (
        <div>
            <form class="contact">
    <div class="outer">
      <div class="label-text">Id</div>
      <div class="input-text">
        <input type="text" />
      </div>
      <div class="label-text">Name</div>
      <div class="input-text">
        <input type="text" />
      </div>
      <div class="label-text">Age</div>
      <div class="input-text">
        <input type="text" />
      </div>
      <div class="label-text">Email Address</div>
      <div class="input-text">
        <input type="email" />
      </div>
      
      <div class="submitbtn">Save</div>
      </div>
      
  </form>
        </div>
    );
};

export default Form;