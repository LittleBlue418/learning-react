import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  // State 1
  const [personState, setPersonState] = useState({
    // A functional component that manages state
    persons: [
      { name: 'Holly', age: 32, hobbies: 'Writing' },
      { name: 'Martin', age: 41, hobbies: 'Programming' },
      { name: 'Morris', age: 11, hobbies: 'Sleeping' },
    ]
  })

  // State 2
  const [otherState, setOtherState] = useState({ otherStare: 'Some values' })


  const switchNameHandler = () => {
    // Can be called on a click
    // Passing out new Persons object into our state
    setPersonState({
      persons: [
        { name: newName, age: 32, hobbies: 'Writing' },
        { name: 'Martin Parm', age: 41, hobbies: 'Programming' },
        { name: 'Morris The Cat', age: 11, hobbies: 'Sleeping' },
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hooks Example</h1>
      <button onClick={switchNameHandler}>Change State</button>

      <Person
        name={personsState.persons[0].name}
        age={personState.persons[0].age}>My Hobbies: Writing</Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}>My Hobbies: Programming</Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}>My Hobbies: Sleeping</Person>
    </div>

  );
}

export default app;