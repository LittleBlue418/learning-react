import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The Fam</h1>
        <Person name="Holly" age="32">My Hobbies: Writing</Person>
        <Person name="Martin" age="41">My Hobbies: Programming</Person>
        <Person name="Morris" age="11">My Hobbies: Sleeping</Person>
      </div>
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App!!!'))
    );
  }
}

export default App;
