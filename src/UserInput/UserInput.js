import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  const style = {
    border: '2px solid black',
    padding: '2px'
  };

  return (
    <div class="UserInput">
      <input type="text" style={style} onChange={props.changed} value={props.username} />
    </div>
  )
};

export default userInput;
