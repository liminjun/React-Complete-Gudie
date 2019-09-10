import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hi I am a React App.</h1>
        <p>this is really working.</p>
        <Person></Person>
      </div>
     
    );
    //return React.createElement('div',{className:'App'},'h1','I am React Developer.');
  }
}

export default App;
