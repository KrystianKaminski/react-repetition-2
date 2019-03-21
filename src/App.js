import React, { Component } from 'react'
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'

class App extends Component {

  state = {
    username: ''
  }

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div>
        <UserInput
          changeUsername={this.onChangeUsername}
          username={this.state.username}
        />
        <UserOutput
          username={this.state.username}
        />
        <UserOutput
          username={this.state.username}
        />
        <UserOutput
          username={this.state.username}
        />
      </div>
    );
  }
}

export default App;
