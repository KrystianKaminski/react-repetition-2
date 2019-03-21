import React, { Component } from 'react'
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'

class App extends Component {
  render() {
    return (
      <div>
        <UserInput />
        <UserOutput />
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
