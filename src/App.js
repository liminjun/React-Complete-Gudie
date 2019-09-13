import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state={
    persons:[
      {name:"lee",age:30},
      {name:"xing",age:28},
      {name:"wangjian",age:22}

    ]
  };
  render() {
    return (
      <div className="App">
        <h1>hi I am a React App.</h1>
        <p>this is really working.</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Reading</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Playing game.</Person>
      </div>
     
    );
    //return React.createElement('div',{className:'App'},'h1','I am React Developer.');
  }
}

export default App;
