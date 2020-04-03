import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Holly', age: 32, hobbies: 'Writing' },
      { name: 'Martin', age: 41, hobbies: 'Programming' },
      { name: 'Morris', age: 11, hobbies: 'Sleeping' },
    ],
  });

  const [otherState, setOtherState] = useState({otherState: 'Some other value'});

  console.log(personsState, otherState)

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Holly Thomas', age: 32, hobbies: 'Writing' },
        { name: 'Martin Parm', age: 41, hobbies: 'Programming' },
        { name: 'Morris The Cat', age: 11, hobbies: 'Sleeping' },
      ],
    })
  }

  return (
    <div className="App">
      <h1>The Fam</h1>
      <button onClick={switchNameHandler}>Show Last Names</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: Writing</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Programming</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My Hobbies: Sleeping</Person>
    </div>
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App!!!'))
  );
}

export default app;

/*
state = {
    persons: [
      { name: 'Holly', age: 32, hobbies: 'Writing' },
      { name: 'Martin', age: 41, hobbies: 'Programming' },
      { name: 'Morris', age: 11, hobbies: 'Sleeping' },
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Holly Thomas', age: 32, hobbies: 'Writing' },
        { name: 'Martin', age: 41, hobbies: 'Programming' },
        { name: 'Morris', age: 11, hobbies: 'Sleeping' },
      ]
    })
  }
  */