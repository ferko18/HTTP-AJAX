import React from "react";
import Friend from "./Friend";
import "./friends.css";

const Friends = props => {
  console.log(props)
  return (
    <div className="Friends">
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>email</th>
          </tr>
        </tbody>
      </table>
      {props.friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default Friends;
