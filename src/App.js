import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {

  state = {
    user : [
      {username: "Maria"},
      {username: "John"},
      {username: "Omar"},
    ]
  }

  switchNameHandler = (event) => {
    this.setState({
      user : [
        {username: event.target.value},
        {username: "Maria"},
        {username: "John"},
      ]
    })
  }

  render() {

    const style = {
      border: '1px solid blue',
      marginTop: '20px',
      padding: '20px'
    };

    return (
      <div className="App">
        <UserInput
          style={style}
          username= {this.state.user[0].username}
          change={this.switchNameHandler}/>
        <UserOutput
          username={this.state.user[0].username}
          click={this.switchNameHandler} />
        <UserOutput
          username={this.state.user[1].username} />
        <UserOutput
          username={this.state.user[2].username}/>
      </div>
    );
  }
}

export default App;
