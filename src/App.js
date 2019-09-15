import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { name: "lee", age: 30 },
      { name: "xing", age: 28 },
      { name: "wangjian", age: 22 }

    ],
    otherState: 'some other value.',
    username:"Lee"
  };
  switchNameHandler = (newName) => {
    console.log('was clicked');
    //this.state.persons[0].name="name changed."
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "xing", age: 30 },
        { name: "wangjian", age: 30 }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "udacity", age: 30 },
        { name: event.target.value, age: 30 },
        { name: "wangjian", age: 30 }
      ]
    });
  };
  usernameChangeHandler=(event)=>{
    this.setState({
      username:event.target.value
    });
  }
  render() {
    const style = {
      color:'white',
      backgroundColor: 'green',
      font: 'inherit',
      border: "1px solid blue",
      padding: '8px',
      cursor:'pointer'
    };
    return (
      <div className="App">
        <h1>hi I am a React App.</h1>
        <p>this is really working.</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('udemy')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'udacity')}
          changed={this.nameChangeHandler}>Reading</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Playing game.</Person>

        <UserInput changed={this.usernameChangeHandler}/>
        <UserOutput username={this.state.username}></UserOutput>
      </div>

    );
    //return React.createElement('div',{className:'App'},'h1','I am React Developer.');
  }
}

export default App;
