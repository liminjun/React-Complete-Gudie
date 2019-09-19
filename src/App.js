import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { id: '1001', name: "lee", age: 30 },
      { id: '1002', name: "xing", age: 28 },
      { id: '1003', name: "wangjian", age: 22 }

    ],
    otherState: 'some other value.',
    username: "Lee",
    showPersons: false
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    });
  }
  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);

    this.setState({
      persons: persons
    });
  }
  render() {
    const style = {
      color: 'white',
      backgroundColor: 'green',
      font: 'inherit',
      border: "1px solid blue",
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>

          {this.state.persons.map((person, index) => {
          
            return (<Person
              name={person.name}
              age={person.age}
              click={()=>this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}></Person>);

          })}
          

          <UserInput changed={this.usernameChangeHandler} />
          <UserOutput username={this.state.username}></UserOutput>
        </div>
      );
    }
    return (
      <div className="App">
        <h1>hi I am a React App.</h1>
        <p>this is really working.</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>

    );
    //return React.createElement('div',{className:'App'},'h1','I am React Developer.');
  }
}

export default App;
