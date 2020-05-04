import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div class="UserOutput">
      <p>Username: {props.username}</p>
      <p>This is another paragraph</p>
    </div>
  )
};

export default userOutput;
