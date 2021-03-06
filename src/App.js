import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    persons: [
      { name: 'Holly', age: 32, hobbies: 'Writing' },
      { name: 'Martin', age: 41, hobbies: 'Programming' },
      { name: 'Morris', age: 11, hobbies: 'Sleeping' },
    ],
    otherState: 'Some other value',
    usernames: [
      { username: 'Anonomous Fox'},
      { username: 'Secret Owl'},
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 32, hobbies: 'Writing' },
        { name: 'Martin Parm', age: 41, hobbies: 'Programming' },
        { name: 'Morris The Cat', age: 11, hobbies: 'Sleeping' },
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Holly Thomas', age: 32, hobbies: 'Writing' },
        { name: 'Martin Parm', age: 41, hobbies: 'Programming' },
        { name: event.target.value, age: 11, hobbies: 'Sleeping' },
      ]
    });
  }

  usernameChangeHandler = (event) => {
    this.setState({
      usernames: [
        { username: event.target.value },
        { username: 'Secret Owl'},
      ]
    })
  }

  render () {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Usernames</h1>
        <UserInput
          username={this.state.usernames[0].username}
          changed={this.usernameChangeHandler}/>
        <UserOutput
          username={this.state.usernames[0].username}/>
        <UserOutput
          username={this.state.usernames[1].username}/>

        <br></br>

        <h1>The Fam</h1>
        <button
          style={buttonStyle}
          onClick={() => this.switchNameHandler('LittleBlue')}>Show Last Names</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'h-zone')}>My Hobbies: Writing</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>My Hobbies: Programming</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          changed={this.nameChangedHandler}>My Hobbies: Sleeping</Person>
      </div>
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App!!!'))
    );
  }
}

export default App;