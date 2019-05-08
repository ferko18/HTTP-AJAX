import React from "react";
import './friends.css'

const Friend = props => {
  return (
    <div className="Friend">
      <table>
      <tbody>
        <tr>
          <td> {props.friend.id}</td>
          <td> {props.friend.name}</td>
          <td> {props.friend.age}</td>
          <td> {props.friend.email}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Friend;
